import React from 'react'
import './AffichageChrono.css'

const AffichageChrono = props => {
  return (
    <p
      style={{
        fontFamily: 'Cooper',
        fontSize: '40px',
        fontWeight: 'bold',
        color: 'white',
        marginTop: '-20px',
        marginBottom: '5px'
      }}
    >
      {props.hr}:{props.min}:{props.sec}
    </p>
  )
}

export default AffichageChrono
