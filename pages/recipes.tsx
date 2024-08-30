import React, { useEffect, useState } from 'react'
import styles from '../styles/Recipes.module.css'
import RecipeModal from '../components/RecipeModal'

interface Recipe {
  id: number
  title: string
  ingredients: string
  instructions: string
  scannedRecipeUrl: string
}

const Recipes: React.FC = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([])
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null)

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

  const openModal = (recipe: Recipe) => {
    setSelectedRecipe(recipe)
  }

  const closeModal = () => {
    setSelectedRecipe(null)
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>My Recipes</h1>
      <div className={styles.recipeList}>
        {recipes.map((recipe) => (
          <div key={recipe.id} className={styles.recipeCard}>
            <h2>
              <a href="#" onClick={() => openModal(recipe)} className={styles.recipeLink}>
                {recipe.title}
              </a>
            </h2>
          </div>
        ))}
      </div>
      {selectedRecipe && (
        <RecipeModal recipe={selectedRecipe} onClose={closeModal} />
      )}
    </div>
  )
}

export default Recipes