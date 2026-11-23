import { useState } from 'react'
import type { FormEvent } from 'react'
import { CheckCircle2, Send } from 'lucide-react'
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

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
const phonePattern = /^0\d{1,2}-?\d{7}$/

function validate(values: Values): Errors {
  const errors: Errors = {}

  if (!values.fullName.trim()) {
    errors.fullName = 'נא למלא שם מלא.'
  }

  if (!values.email.trim()) {
    errors.email = 'נא למלא כתובת דוא״ל.'
  } else if (!emailPattern.test(values.email.trim())) {
    errors.email = 'כתובת הדוא״ל אינה תקינה.'
  }

  if (!values.phone.trim()) {
    errors.phone = 'נא למלא מספר טלפון.'
  } else if (!phonePattern.test(values.phone.replace(/\s/g, ''))) {
    errors.phone = 'מספר הטלפון אינו תקין (לדוגמה: 03-9619611).'
  }

  if (!values.subject.trim()) {
    errors.subject = 'נא למלא נושא פנייה.'
  }

  if (!values.message.trim()) {
    errors.message = 'נא לכתוב את תוכן הפנייה.'
  }

  return errors
}

export function ContactForm() {
  const [values, setValues] = useState<Values>(initialValues)
  const [errors, setErrors] = useState<Errors>({})
  const [submitted, setSubmitted] = useState(false)

  const update = (field: FieldName, value: string) => {
    setValues((prev) => ({ ...prev, [field]: value }))
    setErrors((prev) => ({ ...prev, [field]: undefined }))
    setSubmitted(false)
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const nextErrors = validate(values)
    setErrors(nextErrors)
    setSubmitted(Object.keys(nextErrors).length === 0)
  }

  const reset = () => {
    setValues(initialValues)
    setErrors({})
    setSubmitted(false)
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/5 p-6 sm:p-8">
        <CheckCircle2 className="h-9 w-9 text-emerald-400" />
        <h3 className="mt-4 text-xl font-bold text-white">הפרטים עברו בדיקת תקינות</h3>
        <p className="mt-2 text-sm leading-7 text-slate-300">
          הטופס מלא ותקין. שליחת הפנייה לשרת טרם חוברה בשלב זה, ולכן לא נשלח דבר.
          לחזרה מהירה ניתן להתקשר או לכתוב לדוא״ל המופיעים לצד הטופס.
        </p>
        <button type="button" onClick={reset} className="btn-ghost mt-5">
          מילוי טופס נוסף
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="label" htmlFor="fullName">
            שם מלא <span className="text-cyan-400">*</span>
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            autoComplete="name"
            className={cn('field', errors.fullName && 'field-error')}
            value={values.fullName}
            onChange={(event) => update('fullName', event.target.value)}
            aria-invalid={Boolean(errors.fullName)}
            aria-describedby={errors.fullName ? 'fullName-error' : undefined}
          />
          {errors.fullName ? (
            <p id="fullName-error" className="mt-1.5 text-xs text-rose-300">
              {errors.fullName}
            </p>
          ) : null}
        </div>

        <div>
          <label className="label" htmlFor="phone">
            מספר טלפון <span className="text-cyan-400">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            dir="ltr"
            className={cn('field text-right', errors.phone && 'field-error')}
            value={values.phone}
            onChange={(event) => update('phone', event.target.value)}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? 'phone-error' : undefined}
          />
          {errors.phone ? (
            <p id="phone-error" className="mt-1.5 text-xs text-rose-300">
              {errors.phone}
            </p>
          ) : null}
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="label" htmlFor="email">
            כתובת דוא״ל <span className="text-cyan-400">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            dir="ltr"
            className={cn('field text-right', errors.email && 'field-error')}
            value={values.email}
            onChange={(event) => update('email', event.target.value)}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? 'email-error' : undefined}
          />
          {errors.email ? (
            <p id="email-error" className="mt-1.5 text-xs text-rose-300">
              {errors.email}
            </p>
          ) : null}
        </div>

        <div>
          <label className="label" htmlFor="subject">
            נושא הפנייה <span className="text-cyan-400">*</span>
          </label>
          <input
            id="subject"
            name="subject"
            type="text"
            className={cn('field', errors.subject && 'field-error')}
            value={values.subject}
            onChange={(event) => update('subject', event.target.value)}
            aria-invalid={Boolean(errors.subject)}
            aria-describedby={errors.subject ? 'subject-error' : undefined}
          />
          {errors.subject ? (
            <p id="subject-error" className="mt-1.5 text-xs text-rose-300">
              {errors.subject}
            </p>
          ) : null}
        </div>
      </div>

      <div>
        <label className="label" htmlFor="message">
          כתבו לנו <span className="text-cyan-400">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className={cn('field resize-y', errors.message && 'field-error')}
          value={values.message}
          onChange={(event) => update('message', event.target.value)}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? 'message-error' : undefined}
        />
        {errors.message ? (
          <p id="message-error" className="mt-1.5 text-xs text-rose-300">
            {errors.message}
          </p>
        ) : null}
      </div>

      <button type="submit" className="btn-primary w-full sm:w-auto">
        שליחת פנייה
        <Send className="h-4 w-4" />
      </button>
      <p className="text-xs leading-6 text-slate-500">
        * שלב זה כולל בדיקת תקינות בלבד. הפנייה אינה נשלחת לשרת ואינה נשמרת.
      </p>
    </form>
  )
}
