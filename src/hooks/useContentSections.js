import { useState, useEffect } from 'react'
import { supabase } from '../lib/supabase'

export function useContentSections() {
  const [sections, setSections] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchSections() {
      try {
        setLoading(true)
        const { data, error } = await supabase
          .from('content_sections_x7r3p9')
          .select('*')
          .order('order_index')

        if (error) throw error
        setSections(data || [])
      } catch (err) {
        console.error('Error fetching content sections:', err)
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchSections()

    // Set up subscription for real-time updates
    const subscription = supabase
      .channel('content_changes')
      .on('postgres_changes', { 
        event: '*', 
        schema: 'public', 
        table: 'content_sections_x7r3p9' 
      }, () => {
        fetchSections()
      })
      .subscribe()

    return () => {
      subscription.unsubscribe()
    }
  }, [])

  return { sections, loading, error }
}

export function useSectionBySlug(slug) {
  const [section, setSection] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!slug) return

    async function fetchSection() {
      try {
        setLoading(true)
        const { data, error } = await supabase
          .from('content_sections_x7r3p9')
          .select('*')
          .eq('slug', slug)
          .single()

        if (error) throw error
        setSection(data)
      } catch (err) {
        console.error(`Error fetching section ${slug}:`, err)
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchSection()

    // Set up subscription for real-time updates
    const subscription = supabase
      .channel(`content_${slug}`)
      .on('postgres_changes', { 
        event: '*', 
        schema: 'public', 
        table: 'content_sections_x7r3p9',
        filter: `slug=eq.${slug}`
      }, () => {
        fetchSection()
      })
      .subscribe()

    return () => {
      subscription.unsubscribe()
    }
  }, [slug])

  return { section, loading, error }
}