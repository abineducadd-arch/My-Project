import React from 'react'
import { Link } from 'react-router-dom'

const ShowAll = () => {
  return (
    <div className='container'>
        <p>WAIT,THERE'S MORE</p>
       <div>
            <h3>
                Pick from a great range of coffees
and merchandise on our shop
            </h3>
            <button>
               <Link>Shop All</Link>
            </button>
       </div>
    </div>
  )
}

export default ShowAll