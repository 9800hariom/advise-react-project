import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Body from './Components/Body'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
    <Body/>
   </div>
  )
};

export default App;
