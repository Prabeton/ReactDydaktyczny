import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import avatarPrabeton from './assets/avatarPrabeton.png'
import tagProfil from './assets/tagProfil.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://github.com/Prabeton/ReactDydaktyczny.git" target="_blank">
          <img src={tagProfil} className="logo" alt="Vite logo" />
        </a>
        <a>
          <img src={avatarPrabeton} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Przemek + Button = Prabeton</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edytuj <code>ile chcesz</code> a zostaniesz Edytą
        </p>
      </div>
      <p className="read-the-docs">
        Click on the orange tagProfil to view GitHub
      </p>
    </>
  )
}

export default App
