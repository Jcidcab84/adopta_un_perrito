
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import MyCard from './components/MyCard/MyCard';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
// import '../src/components/MyCard/MyCard.css';

const cardData =[
  {
    img: 'https://delangelclinicaveterinaria.com/wp-content/uploads/2021/06/perros.png' ,
    title:'Taquilla',
    text:'Perrito de 3 meses de vida, jugueton, regalon, ideal para los niños.'

  },
  {
    img: 'https://www.elespectador.com/resizer/tRw6WcGH7ENY9SHVjwuao_oxOqY=/910x606/filters:quality(70):format(jpeg)/cloudfront-us-east-1.images.arcpublishing.com/elespectador/IWAGH4BFVVEWDEC22MN3PC6ARM.jpg' ,
    title:'Abby',
    text:'Perrito de 4 meses de vida, con todas sus vacunas al dia, busca un amigo para acompañarlo'

  },
  {
    img: 'https://cdn2.excelsior.com.mx/media/styles/image800x600/public/pictures/2021/06/09/2592367.jpg' ,
    title:'Pirata',
    text:'Excelente compañero para adultos mayores y niños'

  },
  {
    img: 'https://www.seguroparaperros.com/wp-content/uploads/2021/11/cuidado-perros-primavera-1.jpg' ,
    title:'Zimbo',
    text:'El mejor amigo para tus hijos'

  },
]


function App() {


  return (
    <>
        <Header header='Adopta un perrito'/>
        {cardData.map((card) => (
          
        <MyCard 
          img={card.img}
          title={card.title}
          text={card.text} />
          
          ))}
        <Footer/>
    </>
  )}

export default App
