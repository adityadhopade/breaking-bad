import React from 'react'
import spinner from '../../images/spinner.gif'

// const styles = {
//     spinnerStyle: 'width:200px;margin:auto;display:block'
// }

const Spinner = () => {
  return (
    <img src={spinner} style={{ width: '200px', margin: 'auto', display: 'block'}} alt='Loading' />
  )
}

export default Spinner