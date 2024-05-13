
import { useState } from 'react'
import './App.css'
import Cooks from './components/Cooks/Cooks'
import Header from './components/Header/Header'
import Recipes from './components/Recipes/Recipes'

function App() {

   const [cooks,setCooks]=useState([]);

   const handleWantToCook=(recipe) =>{
      const newCook=[...cooks,recipe];
      setCooks(newCook)
   }


  return (
    <>
      <Header></Header>
      <div className='mt-24 max-w-screen-xl mx-auto'>
        <h1 className='text-4xl text-center font-semibold'>Our Recipes</h1>
        <p className='mt-6 text-center mb-12'>Explore 100+ recipes, recipes in videos, the latest food news, articles, kitchen hacks, diet plans and many more at Recipe Calories.</p>
        <div className='flex gap-6'>
          <Recipes handleWantToCook={handleWantToCook}></Recipes>
          <Cooks cooks={cooks}></Cooks>
          
        </div>

      </div>

    </>
  )
}

export default App
