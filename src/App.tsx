import { useState } from 'react'
import './App.css'
import Feladatok from './components/Feladatok'
import { TODOLISTA, type AllapotTipus, type TodoTipus } from './adat'

function App() {
  
  return (
    <>
    <header><h1>ToDo</h1></header>
    <article>
    <Feladatok lista={lista} setAllapot={setAllapot}/>
    </article>
      <footer><p>Készítette: Kovács Kevin</p></footer>
    </>
  )
}

export default App
