import React from 'react'
import { useContentSections } from '../hooks/useContentSections'

const ContentRenderer = () => {
  const { sections, loading, error } = useContentSections()

  if (loading) {
    return (
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="animate-pulse">
                <div className="h-6 bg-gray-200 rounded w-1/3 mb-4"></div>
                <div className="h-4 bg-gray-100 rounded w-full mb-2"></div>
                <div className="h-4 bg-gray-100 rounded w-5/6 mb-2"></div>
                <div className="h-4 bg-gray-100 rounded w-4/6"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="py-12 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-red-600">Error loading content: {error}</p>
        </div>
      </div>
    )
  }

  if (!sections || sections.length === 0) {
    return (
      <div className="py-12 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-500">No content sections available. Add some in the admin panel!</p>
        </div>
      </div>
    )
  }

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
          {sections.map((section) => (
            <div key={section.id} className="bg-white rounded-lg shadow-sm p-8" id={section.slug}>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">{section.title}</h2>
              <div 
                className="prose max-w-none text-gray-600"
                dangerouslySetInnerHTML={{ __html: section.content }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ContentRenderer