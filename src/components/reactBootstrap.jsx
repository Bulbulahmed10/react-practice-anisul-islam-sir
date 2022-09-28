import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ReactBootstrap = () => {
  return (
    <Card style={{width: '20rem'}} className="p-1">
      <h1>Card Title</h1>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni minus, ex maiores rerum corrupti laboriosam?</p>
      <Button>learn more</Button>
    </Card>
  )
}

export default ReactBootstrap