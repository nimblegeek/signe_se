import React from 'react'
import styles from '../styles/RecipeModal.module.css'

interface Recipe {
  id: number
  title: string
  ingredients: string
  instructions: string
  scannedRecipeUrl: string
}

interface RecipeModalProps {
  recipe: Recipe
  onClose: () => void
}

const RecipeModal: React.FC<RecipeModalProps> = ({ recipe, onClose }) => {
  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <h2>{recipe.title}</h2>
        <p><strong>Ingredients:</strong> {recipe.ingredients}</p>
        <p><strong>Instructions:</strong> {recipe.instructions}</p>
        {recipe.scannedRecipeUrl && (
          <img src={recipe.scannedRecipeUrl} alt="Scanned Recipe" className={styles.scannedImage} />
        )}
        <button onClick={onClose} className={styles.closeButton}>Close</button>
      </div>
    </div>
  )
}

export default RecipeModal