import { useState } from 'react'
import avatarPrabeton from './assets/avatarPrabeton.png'
import tagProfil from './assets/tagProfil.svg'
import './App.css'
import Button from './components/Button'
import Outcome from './components/Outcome'

function App() {
  const [count, setCount] = useState(0);
  
  const countUp = () => {
    setCount(count + 1);
  };
  const countDown = () => {
    setCount(count - 1);
  };

  return (
    <>
      <div>
        <a href="https://github.com/Prabeton/ReactDydaktyczny.git" target="_blank" rel="noreferrer">
          <img src={tagProfil} className="logo" alt="Vite logo" />
        </a>
        <a>
          <img src={avatarPrabeton} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Przemek + Button = Prabeton</h1>
      <div className="card">
        <Button inscription="Odejmij klik" onClick={countDown}/>
        <Outcome count={count}/>
        <Button inscription="Dodaj klik" onClick={countUp}/>
      </div>
      <div>
        <p>
          Edytuj <code>ile chcesz</code> a zostaniesz Edytą
        </p>
      </div>
      <p className="read-the-docs">
        Click on the <span id="orange">orange tagProfil</span> to view GitHub
      </p>
    </>
  )
}

export default App
