import React from 'react'
import logo from './images/soflogo.png'
import './App.css'
import Play from './components/Play/Play'

function App () {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      <img
        src={logo}
        style={{
          height: '300px',
          width: '300px'
        }}
        alt='Sunset On Fire'
      />
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center'
        }}
      >
        <Play number={1} />
        <Play number={2} />
        <Play number={3} />
        <Play number={4} />
      </div>
    </div>
  )
}

export default App
