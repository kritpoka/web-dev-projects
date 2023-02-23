import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


//info Array

function Cardtable() {
  return (
    <div className='card-img' id='comunity'>
    <Row xs={1} md={2} lg={3} xl={4} className="g-4">
      {Array.from({ length: 8 }).map((_, idx) => (
        <Col>
          <Card className='border-0 shadow'>
            <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2015/04/10/17/03/pots-716579_960_720.jpg" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>

    </div>
  );
}

export default Cardtable;