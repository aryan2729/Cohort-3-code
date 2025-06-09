import { useState } from 'react'
import './App.css'
import FlexExamples from './components/FlexExamples'
import GridExamples from './components/GridExamples'
import ResponsivenessExample from './components/ResponsivenessExample'

// first install tailwind then add it in vite.config.js and css files 


// Go to components files firstttt 


function App() {


  return (
       
    <>
    
    <FlexExamples />
    <br/> 

    <GridExamples />
    <br/>
    
    <ResponsivenessExample/>

    </>
      
    
  )
}

export default App
