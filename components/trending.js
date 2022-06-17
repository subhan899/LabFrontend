import { Card, Col, Container, Row,Image } from 'react-bootstrap';

const Trending = () => {
   return(
<Container>
   <Row>
       <Col md={4} className='movieWrapper'>
       <Card className='bg-transparent text-white text-center movieImage'>
         <Image src="/jurassic.png" alt="card image"  height="auto"></Image>
         <div className='bg-dark p-2 m-1'>
         <Card.Text>JURASSIC WORLD DOMINION</Card.Text>
         <Card.Text>Bagus 9.9/10</Card.Text>
         </div>
       
      
       </Card>
       </Col>
       <Col md={4} className='movieWrapper'>
       <Card className='bg-transparent text-white text-center movieImage'>
         <Image src="/avatar.jpg" alt="card image"  height="auto"></Image>
         <div className='bg-dark p-2 m-1'>
         <Card.Text>AVATAR 2</Card.Text>
         <Card.Text>Bagus 10.0/10</Card.Text>
         </div>

       </Card>
       </Col>
       <Col md={4} className='movieWrapper'>
       <Card className='bg-transparent text-white text-center movieImage'>
         <Image src="/thor.jpg" alt="card image"  height="auto"></Image>
         <div className='bg-dark p-2 m-1'>
         <Card.Text>THOR RAGNAROK</Card.Text>
         <Card.Text>Bagus 8.9/10</Card.Text>
         </div>
       
         </Card>
       </Col>
       <Col md={4} className='movieWrapper'>
       <Card className='bg-transparent text-white text-center movieImage'>
         <Image src="/kkn.png" alt="card image"  height="auto"></Image>
         <div className='bg-dark p-2 m-1'>
         <Card.Text>KKN Di Desa Penari</Card.Text>
         <Card.Text>Bagus 8.5/10</Card.Text>
         </div>
       
         </Card>
       </Col>
       <Col md={4} className='movieWrapper'>
       <Card className='bg-transparent text-white text-center movieImage'>
         <Image src="/fast.jpg" alt="card image"  height="auto"></Image>
         <div className='bg-dark p-2 m-1'>
         <Card.Text>THE FATE OF THE FURIOUS 8</Card.Text>
         <Card.Text>Bagus 9.5/10</Card.Text>
         </div>
                
         </Card>
       </Col>
       <Col md={4} className='movieWrapper'>
       <Card className='bg-transparent text-white text-center movieImage'>
         <Image src="/alif.png" alt="card image"  height="auto"></Image>
         <div className='bg-dark p-2 m-1'>
         <Card.Text>THE FATE OF THE FURIOUS 8</Card.Text>
         <Card.Text>Bagus 9.5/10</Card.Text>
         </div>

       </Card>
       </Col>
   </Row>
</Container>

   )
}
export default Trending
