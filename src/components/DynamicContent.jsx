import React from 'react'
import { useSectionBySlug } from '../hooks/useContentSections'

const DynamicContent = ({ slug, fallback = null }) => {
  const { section, loading, error } = useSectionBySlug(slug)

  if (loading) {
    return <div className="animate-pulse h-24 bg-gray-100 rounded"></div>
  }

  if (error || !section) {
    return fallback || <div className="hidden"></div>
  }

  return (
    <div className="dynamic-content">
      <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
      <div 
        className="prose max-w-none"
        dangerouslySetInnerHTML={{ __html: section.content }}
      />
    </div>
  )
}

export default DynamicContent