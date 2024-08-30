import React, { useEffect, useState } from 'react'
import styles from '../styles/Recipes.module.css'

interface Recipe {
  id: number
  title: string
  ingredients: string
  instructions: string
  scannedRecipeUrl: string
}

const Recipes: React.FC = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([])

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch('/api/recipes')
        if (response.ok) {
          const data = await response.json()
          setRecipes(data)
        } else {
          console.error('Failed to fetch recipes')
        }
      } catch (error) {
        console.error('Error:', error)
      }
    }

    fetchRecipes()
  }, [])

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>My Recipes</h1>
      <div className={styles.recipeList}>
        {recipes.map((recipe) => (
          <div key={recipe.id} className={styles.recipeCard}>
            <h2>{recipe.title}</h2>
            <p><strong>Ingredients:</strong> {recipe.ingredients}</p>
            <p><strong>Instructions:</strong> {recipe.instructions}</p>
            {recipe.scannedRecipeUrl && (
              <img src={recipe.scannedRecipeUrl} alt="Scanned Recipe" className={styles.scannedImage} />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Recipes