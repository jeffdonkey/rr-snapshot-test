// define a card that gets data from github API

import React from 'react'
import Card from 'react-bootstrap/Card'
import bucketofchicken from "./bucketofchicken.png"

function GitHubCard() {
  return (
    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={bucketofchicken} />
        <Card.Body>
            <Card.Title>Jeffrey Heller</Card.Title>
            <Card.Text>
                I realized today the the last "l" in "install" is silent.
                This bothers me more that it should.
                I need to let it go. 
            </Card.Text>
        </Card.Body>
    </Card>
  )
}

export default GitHubCard