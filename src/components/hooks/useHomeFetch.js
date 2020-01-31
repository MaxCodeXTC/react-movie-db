import { useState, useEffect } from "react"
import { API_KEY, API_URL } from "../../config"

export const useHomeFetch = () => {
  const [ state, setState ] = useState({ films: [] })
  const [ loading, setLoading ] = useState(false)
  const [ error, setError ] = useState(false)
  console.log(state)

  const handleGetFilms = async (api) => {
    setError(false)
    setLoading(true)
    try {
      const result = await (await fetch(api)).json()
      setState(prev => ({
        ...prev,
        films: [...result.results],
        heroImage: prev.heroImage || result.results[0],
        currentPage: result.page,
        totalPages: result.total_pages
      }))
    } catch (error) {
      setError(true)
    }
    setLoading(false)
  }

  useEffect(() => {
    handleGetFilms(`${API_URL}movie/popular?api_key=${API_KEY}`)
  }, [])

  return [{ state, loading, error }, handleGetFilms]
}