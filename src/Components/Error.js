import React from 'react'
import '../index.css'
import { Link } from 'react-router-dom'

function Error() {
  return (
    <div className='notFound'>
        <h1>
        WE ARE SORRY, PAGE NOT FOUND
        </h1>
        <p>THE PAGE YOU ARE LOKKING FOR MIGHT HAVE BEEN REEMOVED HAD ITS NAME CHANGED OR IS TEMPORARILY UNAVAILABE</p>
        <Link to='/'>
        <button>Back to Home</button>
        </Link>
    </div>
  )
}

export default Error