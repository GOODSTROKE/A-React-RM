import Card from 'react-bootstrap/Card'
import './details.css'

function Detail({ data }) {
  return (
    <Card className='card'>
      <Card.Img height='200px' src={data.image} />
      <Card.Body>
        <Card.Title>Freak: {data.name}</Card.Title>
        <Card.Text>Sex: {data.gender}</Card.Text>
        <Card.Text>Species: {data.species}</Card.Text>
        <Card.Text>Status: {data.status}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Detail
