import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Perro1Img} from 'https://www.pexels.com/es-es/foto/guino-de-cachorro-negro-y-marron-2023384/'



const Tags = (props) => {
  return (
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src= {Perro1Img} />
    <Card.Body>
      <Card.Title>{props.title}</Card.Title>
      <Card.Text>
        {props.text}
      </Card.Text>
      <Button variant="primary">Adoptame</Button>
    </Card.Body>
  </Card>
  )
}

export default Tags