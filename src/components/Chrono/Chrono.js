import React, { useState, useEffect } from 'react'
import './Chrono.css'

import AffichageChrono from '../AffichageChrono/AffichageChrono'
import ButtonChrono from '../ButtonChrono/ButtonChrono'

let interval

const Chrono = () => {
  const prixH = 20

  const calculCost = (sec, min, hr) => {
    return (hr * prixH + (min * prixH) / 60).toFixed(2)
  }

  const [start, setStart] = useState(0)

  const [cost, setCost] = useState('--')

  const [hr, setHr] = useState('00')
  const [min, setMin] = useState('00')
  const [sec, setSec] = useState('00')

  const affichage = (sec, min, hr) => {
    if (sec < 10) {
      setSec('0' + sec)
    } else {
      setSec(sec)
    }
    if (min < 10) {
      setMin('0' + min)
    } else {
      setMin(min)
    }
    if (hr < 10) {
      setHr('0' + hr)
    } else {
      setHr(hr)
    }
  }

  const [hour, setHour] = useState(0)
  const [minute, setMinute] = useState(0)
  const [seconde, setSeconde] = useState(0)

  useEffect(() => {
    if (start) {
      interval = setTimeout(() => {
        run(0.5)
      }, 500)

      affichage(Math.floor(seconde), minute, hour)
    }
  }, [start, seconde])

  const pauseChrono = () => {
    setStart(0)
    setCost(calculCost(seconde, minute, hour))
  }
  const startChrono = () => {
    setStart(1)
    setCost(0)
    setHour(0)
    setMinute(0)
    setSeconde(0)
  }

  const restart = () => {
    setStart(0)
    affichage(0, 0, 0)
    setCost(0)
    setHour(0)
    setMinute(0)
    setSeconde(0)
  }
  const run = time => {
    if (seconde > 59) {
      setSeconde(0)
      setMinute(minute + 1)
    } else {
      setSeconde(seconde + time)
    }
    if (minute > 59) {
      setMinute(0)
      setHour(hour + 1)
    }
    if (hour > 23) {
      setHour(0)
    }
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <AffichageChrono hr={hr} min={min} sec={sec} />
      <ButtonChrono
        start={start}
        pauseChrono={pauseChrono}
        startChrono={startChrono}
        restart={restart}
      />

      <p
        style={{
          fontFamily: 'Cooper',
          fontSize: '30px',
          fontWeight: 'bold',
          color: 'white',
          marginTop: '0px',
          marginBottom: '5px'
        }}
      >
        {cost} DH
      </p>
    </div>
  )
}

export default Chrono
