import { useEffect } from 'react'
import { company } from '@/data/site'

function setMeta(selector: string, attribute: 'name' | 'property', key: string, content: string) {
  let element = document.head.querySelector<HTMLMetaElement>(selector)
  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attribute, key)
    document.head.appendChild(element)
  }
  element.setAttribute('content', content)
}

type SeoProps = {
  title: string
  description?: string
}

export function Seo({ title, description }: SeoProps) {
  useEffect(() => {
    document.title = `${title} | ${company.name}`

    if (description) {
      setMeta('meta[name="description"]', 'name', 'description', description)
      setMeta('meta[property="og:description"]', 'property', 'og:description', description)
    }

    setMeta('meta[property="og:title"]', 'property', 'og:title', title)
    setMeta('meta[property="og:type"]', 'property', 'og:type', 'website')
  }, [title, description])

  return null
}
