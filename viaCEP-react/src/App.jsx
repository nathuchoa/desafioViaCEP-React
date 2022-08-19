import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import BuscaCEP from './Components/BuscaCEP/BuscaCEP'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <BuscaCEP/>
    </div>
  )
}
export default App