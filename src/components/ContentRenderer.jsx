import React from 'react'
import { useContentSections } from '../hooks/useContentSections'

const ContentRenderer = () => {
  const { sections, loading, error } = useContentSections()

  if (loading) {
    return (
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
    )
  }

  if (error) {
    return (
      <div className="text-center py-8">
        <div className="bg-red-50 border border-red-200 rounded-lg p-6">
          <p className="text-red-600 font-medium">Unable to load additional content</p>
          <p className="text-red-500 text-sm mt-2">{error}</p>
        </div>
      </div>
    )
  }

  if (!sections || sections.length === 0) {
    return (
      <div className="text-center py-8">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <p className="text-blue-700 font-medium">Additional content sections coming soon</p>
          <p className="text-blue-600 text-sm mt-2">
            Administrators can add more educational content through the admin panel
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-12">
      {sections.map((section, index) => (
        <div 
          key={section.id} 
          className={`${
            index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
          } rounded-xl p-8 shadow-sm`}
          id={section.slug}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            {section.title}
          </h3>
          <div 
            className="prose max-w-none text-gray-600 prose-headings:text-gray-900 prose-strong:text-gray-900 prose-ul:text-gray-600"
            dangerouslySetInnerHTML={{ __html: section.content }}
          />
        </div>
      ))}
    </div>
  )
}

export default ContentRenderer