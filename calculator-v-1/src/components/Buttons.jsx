import React from 'react'
import styles from './Buttons.module.css'

const Buttons = ({buttons}) => {
  return ( 
    <>
        {buttons.map((keys)=>(
            <button className='styles.button' >{keys}</button>
        ))}
    </>
  )
}

export default Buttons