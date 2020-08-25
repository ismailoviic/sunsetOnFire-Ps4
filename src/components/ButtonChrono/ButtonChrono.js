import React from 'react'
import './ButtonChrono.css'

import PlayArrowIcon from '@material-ui/icons/PlayArrow'
import RotateLeftIcon from '@material-ui/icons/RotateLeft'
import PauseIcon from '@material-ui/icons/Pause'

const ButtonChrono = props => {
  if (props.start === 0) {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <div className='bn' onClick={props.startChrono}>
          <PlayArrowIcon />
        </div>

        <div className='bn' onClick={props.restart}>
          <RotateLeftIcon />
        </div>
      </div>
    )
  } else {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <div className='bn' onClick={props.pauseChrono}>
          <PauseIcon />
        </div>

        <div className='bn' onClick={props.restart}>
          <RotateLeftIcon />
        </div>
      </div>
    )
  }
}
export default ButtonChrono
