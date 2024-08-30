import React, { useState, ChangeEvent } from 'react'
import styles from '../styles/CreateRecipe.module.css'
import { useRouter } from 'next/router'

const CreateRecipe: React.FC = () => {
  const [title, setTitle] = useState('')
  const [ingredients, setIngredients] = useState('')
  const [instructions, setInstructions] = useState('')
  const [scannedRecipe, setScannedRecipe] = useState<File | null>(null)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // TODO: Implement file upload logic and get the URL
    const scannedRecipeUrl = ''

    try {
      const response = await fetch('/api/recipes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title,
          ingredients,
          instructions,
          scannedRecipeUrl,
        }),
      })

      if (response.ok) {
        router.push('/recipes') // Redirect to the recipes list page
      } else {
        console.error('Failed to create recipe')
      }
    } catch (error) {
      console.error('Error:', error)
    }
  }

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setScannedRecipe(e.target.files[0])
    }
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Create New Recipe</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className={styles.input}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="ingredients">Ingredients:</label>
          <textarea
            id="ingredients"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            required
            className={styles.textarea}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="instructions">Instructions:</label>
          <textarea
            id="instructions"
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            required
            className={styles.textarea}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="scannedRecipe">Upload Scanned Recipe:</label>
          <input
            type="file"
            id="scannedRecipe"
            accept="image/*"
            onChange={handleFileChange}
            className={styles.fileInput}
          />
        </div>
        <button type="submit" className={styles.submitButton}>Create Recipe</button>
      </form>
    </div>
  )
}

export default CreateRecipe