import React from 'react'
import ClockHeading from './components/ClockHeading'
import ClockSlogan from './components/ClockSlogan'
import CurrentTime from './components/CurrentTime'

const App = () => {
  return (
    <div >
      <ClockHeading/>
      <ClockSlogan/>
      <CurrentTime/>
    </div>
  )
}

export default App