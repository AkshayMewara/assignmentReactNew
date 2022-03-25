import React from 'react'
import {Cards} from './Cards'
import Details from './Details'

export const DetailsMap = () => {
  let styles = {
    display: 'flex',
    marginLeft: '350px',
    marginTop: '200px',
    // border: '1px solid black',
    // width: '800px',
    // backgroundColor: 'black'
    // alignItems: 'center'
    
  }
  return (
    <div className="detailsMap" style={styles}>
         {
        Details.map((val,ind) => {
          return <Cards key={ind} name={val.name} textOne={val.textOne} textTwo={val.textTwo} textThree={val.textThree} textFour={val.textFour} textFive={val.textFive} textSix={val.textSix} />
        })
      }
    </div>
  )
}
