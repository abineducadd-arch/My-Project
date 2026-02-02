import React from 'react'
import {SELLERCARD as data} from "../data/Bestseller"
const bestSellerCard = () => {

  return (
    <div>
        {
            data.map((x)=>{
                <div key={x.id}>

                </div>
            })
        }
    </div>
  )
}

export default bestSellerCard