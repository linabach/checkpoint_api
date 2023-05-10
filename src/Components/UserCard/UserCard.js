import React from 'react'
import { Button, Card } from 'react-bootstrap'

const UserCard = ({user}) => {
  return (
    <div>
      <Card style={{ width: '18rem' , marginTop:"8%" }}>
      <Card.Img variant="top" src="https://cdn-icons-png.flaticon.com/128/560/560338.png"  style={{width:"60%" , marginLeft:"25%", marginBottom:"8%", marginTop:"8%" }}/>
      <Card.Body>
        <Card.Title>{user.name}</Card.Title>
        <Card.Text>
          {user.username}
        </Card.Text>
        <Card.Text>
          {user.email}
        </Card.Text>
        <Card.Text>
          {user.phone}
        </Card.Text>
        <Card.Text>
          {user.website}
        </Card.Text>
        <Button variant="primary">contact user</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default UserCard