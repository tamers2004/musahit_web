import { useState } from 'react'
import type { FormEvent } from 'react'
import {
  ArrowLeft,
  Check,
  CheckCircle2,
  Copy,
  Mail,
  Send,
} from 'lucide-react'
import { company } from '@/data/site'
import { cn } from '@/lib/utils'

type FieldName = 'fullName' | 'email' | 'phone' | 'subject' | 'message'
type Values = Record<FieldName, string>
type Errors = Partial<Record<FieldName, string>>

const initialValues: Values = {
  fullName: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
}

const fieldOrder: FieldName[] = ['fullName', 'phone', 'email', 'subject', 'message']

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
const phonePattern = /^0\d{1,2}-?\d{7}$/

function validate(values: Values): Errors {
  const errors: Errors = {}

  if (!values.fullName.trim()) errors.fullName = 'נא למלא שם מלא.'
  if (!values.phone.trim()) {
    errors.phone = 'נא למלא מספר טלפון.'
  } else if (!phonePattern.test(values.phone.replace(/\s/g, ''))) {
    errors.phone = 'מספר הטלפון אינו תקין (לדוגמה: 03-9619611).'
  }
  if (!values.email.trim()) {
    errors.email = 'נא למלא כתובת דוא״ל.'
  } else if (!emailPattern.test(values.email.trim())) {
    errors.email = 'כתובת הדוא״ל אינה תקינה.'
  }
  if (!values.subject.trim()) errors.subject = 'נא למלא נושא פנייה.'
  if (!values.message.trim()) errors.message = 'נא לכתוב את תוכן הפנייה.'

  return errors
}

function buildMailto(values: Values) {
  const body = [
    `שם מלא: ${values.fullName}`,
    `טלפון: ${values.phone}`,
    `דוא״ל: ${values.email}`,
    '',
    values.message,
  ].join('\n')

  return `mailto:${company.email}?subject=${encodeURIComponent(values.subject)}&body=${encodeURIComponent(body)}`
}

function buildSummary(values: Values) {
  return [
    `שם מלא: ${values.fullName}`,
    `טלפון: ${values.phone}`,
    `דוא״ל: ${values.email}`,
    `נושא: ${values.subject}`,
    '',
    values.message,
  ].join('\n')
}

export function ContactForm() {
  const [values, setValues] = useState<Values>(initialValues)
  const [errors, setErrors] = useState<Errors>({})
  const [submitted, setSubmitted] = useState(false)
  const [showErrorSummary, setShowErrorSummary] = useState(false)
  const [copied, setCopied] = useState(false)

  const update = (field: FieldName, value: string) => {
    setValues((prev) => ({ ...prev, [field]: value }))
    setErrors((prev) => ({ ...prev, [field]: undefined }))
    setSubmitted(false)
    setShowErrorSummary(false)
    setCopied(false)
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const nextErrors = validate(values)
    setErrors(nextErrors)

    if (Object.keys(nextErrors).length > 0) {
      setSubmitted(false)
      setShowErrorSummary(true)
      const firstError = fieldOrder.find((field) => nextErrors[field])
      if (firstError) document.getElementById(firstError)?.focus()
      return
    }

    setShowErrorSummary(false)
    setSubmitted(true)
  }

  const reset = () => {
    setValues(initialValues)
    setErrors({})
    setSubmitted(false)
    setShowErrorSummary(false)
    setCopied(false)
  }

  const copySummary = async () => {
    try {
      await navigator.clipboard.writeText(buildSummary(values))
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2500)
    } catch {
      setCopied(false)
    }
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-emerald-500/25 bg-emerald-50/70 p-6 sm:p-8">
        <span className="grid h-12 w-12 place-items-center rounded-xl bg-emerald-600 text-white shadow-card">
          <CheckCircle2 className="h-6 w-6" aria-hidden="true" />
        </span>
        <h3 className="mt-4 text-xl font-extrabold text-ink-950">הפנייה מוכנה לשליחה</h3>
        <p className="mt-2 text-sm leading-7 text-ink-700">
          הפרטים עברו בדיקת תקינות. לשליחה בפועל, פתחו הודעת דוא״ל מוכנה מראש — היא תיפתח
          בתוכנת הדוא״ל שלכם עם כל הפרטים שמילאתם.
        </p>
        <p className="mt-2 text-xs leading-6 text-ink-700/70">
          הטופס עצמו אינו שולח נתונים לשרת ואינו שומר אותם.
        </p>

        <div className="mt-5 flex flex-wrap gap-2.5">
          <a href={buildMailto(values)} className="btn-primary">
            <Mail className="h-4 w-4" aria-hidden="true" />
            פתיחת הודעת דוא״ל
          </a>
          <button type="button" onClick={copySummary} className="btn-ghost">
            {copied ? (
              <Check className="h-4 w-4 text-emerald-600" aria-hidden="true" />
            ) : (
              <Copy className="h-4 w-4" aria-hidden="true" />
            )}
            {copied ? 'הועתק' : 'העתקת הפרטים'}
          </button>
          <button type="button" onClick={reset} className="btn-ghost">
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            מילוי טופס נוסף
          </button>
        </div>
        <p className="sr-only" role="status" aria-live="polite">
          {copied ? 'פרטי הפנייה הועתקו ללוח' : ''}
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      {showErrorSummary ? (
        <div
          role="alert"
          className="rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-xs font-medium leading-6 text-rose-700"
        >
          נא לתקן את השדות המסומנים ולשלוח שוב.
        </div>
      ) : null}

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="label" htmlFor="fullName">
            שם מלא <span className="text-brand-500">*</span>
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            autoComplete="name"
            aria-required="true"
            className={cn('field', errors.fullName && 'field-error')}
            value={values.fullName}
            onChange={(event) => update('fullName', event.target.value)}
            aria-invalid={Boolean(errors.fullName)}
            aria-describedby={errors.fullName ? 'fullName-error' : undefined}
          />
          {errors.fullName ? (
            <p id="fullName-error" className="mt-1.5 text-xs text-rose-600">
              {errors.fullName}
            </p>
          ) : null}
        </div>

        <div>
          <label className="label" htmlFor="phone">
            מספר טלפון <span className="text-brand-500">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            dir="ltr"
            aria-required="true"
            className={cn('field text-right tabular-nums', errors.phone && 'field-error')}
            value={values.phone}
            onChange={(event) => update('phone', event.target.value)}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? 'phone-error' : undefined}
          />
          {errors.phone ? (
            <p id="phone-error" className="mt-1.5 text-xs text-rose-600">
              {errors.phone}
            </p>
          ) : null}
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="label" htmlFor="email">
            כתובת דוא״ל <span className="text-brand-500">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            dir="ltr"
            aria-required="true"
            className={cn('field text-right', errors.email && 'field-error')}
            value={values.email}
            onChange={(event) => update('email', event.target.value)}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? 'email-error' : undefined}
          />
          {errors.email ? (
            <p id="email-error" className="mt-1.5 text-xs text-rose-600">
              {errors.email}
            </p>
          ) : null}
        </div>

        <div>
          <label className="label" htmlFor="subject">
            נושא הפנייה <span className="text-brand-500">*</span>
          </label>
          <input
            id="subject"
            name="subject"
            type="text"
            aria-required="true"
            className={cn('field', errors.subject && 'field-error')}
            value={values.subject}
            onChange={(event) => update('subject', event.target.value)}
            aria-invalid={Boolean(errors.subject)}
            aria-describedby={errors.subject ? 'subject-error' : undefined}
          />
          {errors.subject ? (
            <p id="subject-error" className="mt-1.5 text-xs text-rose-600">
              {errors.subject}
            </p>
          ) : null}
        </div>
      </div>

      <div>
        <label className="label" htmlFor="message">
          כתבו לנו <span className="text-brand-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          aria-required="true"
          className={cn('field resize-y', errors.message && 'field-error')}
          value={values.message}
          onChange={(event) => update('message', event.target.value)}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? 'message-error' : undefined}
        />
        {errors.message ? (
          <p id="message-error" className="mt-1.5 text-xs text-rose-600">
            {errors.message}
          </p>
        ) : null}
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button type="submit" className="btn-primary w-full sm:w-auto">
          שליחת פנייה
          <Send className="h-4 w-4" aria-hidden="true" />
        </button>
        <p className="text-[11px] leading-5 text-muted">
          * בדיקת תקינות בלבד. הפנייה אינה נשלחת לשרת; לאחר הבדיקה תוכלו לפתוח הודעת דוא״ל מוכנה.
        </p>
      </div>
    </form>
  )
}
