import React from 'react'
import Link from 'next/link'

// This is a mock data, replace with actual data fetching logic
const mockRecipes = [
  { id: 1, title: 'Spaghetti Carbonara' },
  { id: 2, title: 'Chicken Curry' },
]

const RecipeList: React.FC = () => {
  return (
    <div>
      <h1>Recipes</h1>
      <ul>
        {mockRecipes.map((recipe) => (
          <li key={recipe.id}>
            <Link href={`/recipes/${recipe.id}`}>{recipe.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default RecipeList