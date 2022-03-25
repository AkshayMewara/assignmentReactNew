import React from 'react'
import {Card,ListGroup} from 'react-bootstrap'

export const Cards = (props) => {
  return (
    <div className="hello" style={{marginRight:'100px'}}>
    <Card className="card" style={{ width: '18rem' }}>
  <ListGroup variant="list-group list-group-flush">
    <ListGroup.Item className="list-group-item" style={{backgroundColor:'white'}}><h3>{props.name}</h3></ListGroup.Item>
    <ListGroup.Item>{props.textOne}</ListGroup.Item>
    <ListGroup.Item>{props.textTwo}</ListGroup.Item>
    <ListGroup.Item>{props.textThree}</ListGroup.Item>
    <ListGroup.Item>{props.textFour}</ListGroup.Item>
    <ListGroup.Item>{props.textFive}</ListGroup.Item>
 
  </ListGroup>
</Card>
    </div>
  )
}
