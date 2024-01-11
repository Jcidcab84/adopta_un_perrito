
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './MyCard.css'




const MyCard = (props) => {
  return (
    <div className='container'  >
      
           
            <Card >
    <Card.Img variant="top"  src= {props.img} />
    <Card.Body>
      <Card.Title>{props.title}</Card.Title>
      <Card.Text>
        {props.text}
      </Card.Text>
      <Button variant="primary">Adoptame</Button>
    </Card.Body>
  </Card>
            
        
       
    
  </div>
  
  )
}

export default MyCard