
import { useState } from 'react'
import './App.css'
import Cooks from './components/Cooks/Cooks'
import Header from './components/Header/Header'
import Recipes from './components/Recipes/Recipes'
import { showToast } from '../src/components/Toast/Toast'
import Cookings from './components/Cookings/Cookings'

function App() {

  const [cooks, setCooks] = useState([]);
  const [cookings,setCookings] = useState([])

  const handleWantToCook = (recipe) => {
    if (cooks.includes(recipe)) {
      showToast()
    } else {
      const newCook = [...cooks, recipe];
      setCooks(newCook)
    }

  }


  const handleCooking=(cook) =>{
      const newCooking=[...cookings, cook];
      setCookings(newCooking)

      const remaingCook=cooks.filter(cook1 => cook1.recipe_id !== cook.recipe_id)
      setCooks(remaingCook)
  }



  return (
    <>
      <Header></Header>
      <div className='mt-24 max-w-screen-xl mx-auto'>
        <h1 className='text-4xl text-center font-semibold'>Our Recipes</h1>
        <p className='mt-6 text-center mb-12'>Explore 100+ recipes, recipes in videos, the latest food news, articles, kitchen hacks, diet plans and many more at Recipe Calories.</p>
        <div className='flex gap-6'>
          <Recipes handleWantToCook={handleWantToCook}></Recipes>
          <div className='w-2/5 border-2 rounded-2xl'>
            <Cooks cooks={cooks} handleCooking={handleCooking}></Cooks>
            <Cookings cookings={cookings}></Cookings>
          </div>

        </div>

      </div>

    </>
  )
}

export default App
