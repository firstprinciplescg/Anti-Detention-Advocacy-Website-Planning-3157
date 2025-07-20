import React, { useState } from 'react'
import { supabase } from '../../lib/supabase'
import { useAuth } from '../../contexts/AuthContext'
import { useContentSections } from '../../hooks/useContentSections'
import SafeIcon from '../../common/SafeIcon'
import * as FiIcons from 'react-icons/fi'

const { FiPlus, FiEdit, FiTrash2, FiSave, FiX } = FiIcons

const AdminPanel = () => {
  const { user } = useAuth()
  const { sections, loading, error } = useContentSections()
  const [formData, setFormData] = useState({ title: '', slug: '', content: '', order_index: 0 })
  const [editingId, setEditingId] = useState(null)
  const [formError, setFormError] = useState(null)
  const [submitting, setSubmitting] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: name === 'order_index' ? parseInt(value, 10) : value
    }))
  }

  const resetForm = () => {
    setFormData({ title: '', slug: '', content: '', order_index: 0 })
    setEditingId(null)
    setFormError(null)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setFormError(null)
    setSubmitting(true)

    try {
      // Validation
      if (!formData.title || !formData.slug || !formData.content) {
        throw new Error('All fields are required')
      }

      // Format slug (lowercase, replace spaces with hyphens)
      const formattedSlug = formData.slug.toLowerCase().replace(/\s+/g, '-')
      
      if (editingId) {
        // Update existing section
        const { error } = await supabase
          .from('content_sections_x7r3p9')
          .update({
            title: formData.title,
            slug: formattedSlug,
            content: formData.content,
            order_index: formData.order_index,
            updated_at: new Date()
          })
          .eq('id', editingId)

        if (error) throw error
      } else {
        // Create new section
        const { error } = await supabase
          .from('content_sections_x7r3p9')
          .insert([{
            title: formData.title,
            slug: formattedSlug,
            content: formData.content,
            order_index: formData.order_index
          }])

        if (error) throw error
      }

      resetForm()
    } catch (err) {
      console.error('Error saving section:', err)
      setFormError(err.message)
    } finally {
      setSubmitting(false)
    }
  }

  const handleEdit = (section) => {
    setFormData({
      title: section.title,
      slug: section.slug,
      content: section.content,
      order_index: section.order_index
    })
    setEditingId(section.id)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this section?')) return

    try {
      const { error } = await supabase
        .from('content_sections_x7r3p9')
        .delete()
        .eq('id', id)

      if (error) throw error
    } catch (err) {
      console.error('Error deleting section:', err)
      setFormError(`Failed to delete: ${err.message}`)
    }
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-600"></div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="max-w-4xl mx-auto p-6 text-center">
        <h1 className="text-2xl font-bold text-red-600">Error</h1>
        <p className="mt-4">{error}</p>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Content Management System</h1>
        <div>
          <span className="text-sm text-gray-600">Logged in as: </span>
          <span className="font-medium">{user?.email}</span>
        </div>
      </div>

      {/* Section Form */}
      <form onSubmit={handleSubmit} className="mb-8 p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">
          {editingId ? 'Edit Section' : 'Add New Section'}
        </h2>
        
        {formError && (
          <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md">
            {formError}
          </div>
        )}
        
        <div className="grid gap-4">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              className="w-full p-2 border rounded focus:ring-2 focus:ring-red-500 focus:border-red-500"
              placeholder="Section Title"
            />
          </div>
          
          <div>
            <label htmlFor="slug" className="block text-sm font-medium text-gray-700 mb-1">
              Slug (URL identifier)
            </label>
            <input
              type="text"
              id="slug"
              name="slug"
              value={formData.slug}
              onChange={handleInputChange}
              className="w-full p-2 border rounded focus:ring-2 focus:ring-red-500 focus:border-red-500"
              placeholder="section-slug"
            />
          </div>
          
          <div>
            <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-1">
              Content
            </label>
            <textarea
              id="content"
              name="content"
              value={formData.content}
              onChange={handleInputChange}
              rows="6"
              className="w-full p-2 border rounded focus:ring-2 focus:ring-red-500 focus:border-red-500"
              placeholder="Section content (supports basic HTML)"
            ></textarea>
          </div>
          
          <div>
            <label htmlFor="order_index" className="block text-sm font-medium text-gray-700 mb-1">
              Display Order
            </label>
            <input
              type="number"
              id="order_index"
              name="order_index"
              value={formData.order_index}
              onChange={handleInputChange}
              className="w-full p-2 border rounded focus:ring-2 focus:ring-red-500 focus:border-red-500"
              placeholder="0"
            />
          </div>
          
          <div className="flex gap-3">
            <button
              type="submit"
              disabled={submitting}
              className="flex items-center justify-center gap-2 bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition-colors disabled:bg-red-400"
            >
              {submitting ? (
                <span className="animate-pulse">Saving...</span>
              ) : (
                <>
                  <SafeIcon icon={editingId ? FiSave : FiPlus} className="w-5 h-5" />
                  <span>{editingId ? 'Update Section' : 'Add Section'}</span>
                </>
              )}
            </button>
            
            {editingId && (
              <button
                type="button"
                onClick={resetForm}
                className="flex items-center justify-center gap-2 bg-gray-200 text-gray-700 py-2 px-4 rounded hover:bg-gray-300 transition-colors"
              >
                <SafeIcon icon={FiX} className="w-5 h-5" />
                <span>Cancel</span>
              </button>
            )}
          </div>
        </div>
      </form>

      {/* Sections List */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold mb-4">Content Sections</h2>
        
        {sections.length === 0 ? (
          <div className="text-center p-8 bg-gray-50 rounded-lg">
            <p className="text-gray-500">No content sections found. Create one above!</p>
          </div>
        ) : (
          sections.map((section) => (
            <div key={section.id} className="p-5 bg-white rounded-lg shadow-md">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="text-lg font-semibold">{section.title}</h3>
                  <div className="flex gap-2 items-center mt-1">
                    <span className="text-sm bg-gray-100 px-2 py-0.5 rounded">
                      Slug: {section.slug}
                    </span>
                    <span className="text-sm bg-gray-100 px-2 py-0.5 rounded">
                      Order: {section.order_index}
                    </span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleEdit(section)}
                    className="p-1.5 bg-blue-50 text-blue-600 rounded hover:bg-blue-100"
                    title="Edit"
                  >
                    <SafeIcon icon={FiEdit} className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => handleDelete(section.id)}
                    className="p-1.5 bg-red-50 text-red-600 rounded hover:bg-red-100"
                    title="Delete"
                  >
                    <SafeIcon icon={FiTrash2} className="w-5 h-5" />
                  </button>
                </div>
              </div>
              <div className="mt-3 p-3 bg-gray-50 rounded overflow-auto max-h-40">
                <pre className="text-sm whitespace-pre-wrap">{section.content}</pre>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default AdminPanel