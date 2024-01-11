
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './MyCard.css'
import Tags from '../Tags/Tags';




const MyCard = (props) => {
  return (
    <div className='container'  >
      
           
            <Card className="d-flex flex-column mb-1">
    <Card.Img className="align-self-start " variant="top"  src= {props.img} />
    <Card.Body>
      <Card.Title>{props.title}</Card.Title>
       <Card.Text>
        {props.text}
      </Card.Text>
      {/*<Button variant="primary">Adoptame</Button> */}
      <Tags colorButton={props.colorButton} textButton={props.textButton} />
    </Card.Body>
  </Card>
            
        
       
    
  </div>
  
  )
}

export default MyCard