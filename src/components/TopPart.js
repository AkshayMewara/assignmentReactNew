import React from 'react'

export const TopPart = (props) => {
  let stylesOne = {
    marginTop:'100px',
  }
  return (
      
    <div className="top"  style={stylesOne}>
        <div className="subTopOne">
            <h1>{props.heading}</h1>
        </div>
        <div className="subTopTwo">
            <p>{props.text}</p>
        </div>
    </div>
  )
}
