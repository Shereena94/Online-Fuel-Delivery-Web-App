import React from 'react'
import Card from 'react-bootstrap/Card';
import truckimg from '../assets/Images/truck.webp'
import batteryimg from '../assets/Images/battery.webp'
import engineoil from '../assets/Images/oil.webp'
import tyreimg from '../assets/Images/tyre.webp'
import recoveryimg from '../assets/Images/recovery.webp'

const ServicesCard = () => {
  return (
    <>
     <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={truckimg} />
      <Card.Body>
        <Card.Title>FUEL DELIVERY</Card.Title>
        
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={batteryimg} />
      <Card.Body>
        <Card.Title>CAR BATTERY</Card.Title>
        
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={engineoil} />
      <Card.Body>
        <Card.Title>CAR ENGINE OIL</Card.Title>
        
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={tyreimg} />
      <Card.Body>
        <Card.Title>CAR TYRE</Card.Title>
        
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={recoveryimg} />
      <Card.Body>
        <Card.Title>RECOVERY</Card.Title>
        
      </Card.Body>
    </Card>
    </>
  )
}

export default ServicesCard