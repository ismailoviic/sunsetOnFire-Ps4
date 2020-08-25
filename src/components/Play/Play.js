import React from 'react'
import pslogo from '../../images/pslogo.png'
import './Play.css'
import Chrono from '../Chrono/Chrono'
const Play = props => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginLeft: '30px',
        marginRight: '30px'
      }}
    >
      <img
        src={pslogo}
        style={{
          height: '277',
          width: '215px',
          filter: 'drop-shadow(0px 3px 6px rgba(176, 30, 30, 0.588))'
        }}
        alt='Sunset On Fire'
      />

      <p
        style={{
          filter: 'drop-shadow(-1px 0px 1px #F3AB5F)',
          fontFamily: 'Harlow Solid',
          fontSize: '50px',
          fontWeight: 'bold',
          color: '#1a1a1a',
          marginTop: '0px'
        }}
      >
        play {props.number}
      </p>
      <Chrono />
    </div>
  )
}
export default Play
