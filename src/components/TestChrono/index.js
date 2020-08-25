import React, { useState, useEffect } from 'react'

let interval

export default () => {
  const [start, setStart] = useState(false)
  const [seconds, setSeconds] = useState(0)
  useEffect(() => {
    if (start) {
      interval = setTimeout(() => {
        setSeconds(seconds + 0.5)
      }, 500)
    }
  }, [start, seconds])
  return (
    <button onClick={() => setStart(!start)}>
      {start ? 'pause' : 'start'} : {Math.floor(seconds)}
    </button>
  )
}
