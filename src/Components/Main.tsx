import React from 'react'
import ClaudeRecipe from './ClaudeRecipe'
import IngredientsList from './IngredientsList'

function Main() {

    const [ingredients, setIngredients] = React.useState<string[]>([]);

    const [recipeShown, setrecipeShown] = React.useState(false)

    function addIngredient(formData: FormData) {
        const newIngredient = formData.get("ingredient") as string;
        setIngredients((prevIngredients: string[]) => [...prevIngredients, newIngredient]);
    }
    

    function toggleRecipeShown(){
        setrecipeShown(prevShown => !prevShown)
    }
  return (
    <main>
            <form action={addIngredient} className="add-ingredient-form">
                <input
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button>Add ingredient</button>
            </form>
            {ingredients.length > 0 && 
            <IngredientsList ingredients = {ingredients} toggleRecipeShown={toggleRecipeShown}/>}

            {recipeShown && <ClaudeRecipe/>}
            
        </main>
  )
}

export default Main