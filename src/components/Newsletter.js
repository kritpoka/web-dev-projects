import { Col, Row, Button } from "react-bootstrap";

export const Newsletter = () => {
  return (
    <Col lg={12}>
      <div className="newsletter-bx wow slideInUp">
        <Row>
          <Col>
            <h3>ส่งความคิดเห็นที่<br></br> 9189@tunn.ac.th </h3>
          </Col>
          <Col md={6} xl={7}>
         
              <Button className="m-1" onClick={() =>  navigator.clipboard.writeText('9189@tunn.ac.th')}>
                คัดลอกอีเมล
              </Button>
              <Button className="m-1" onClick={() => window.open('https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSMTRwtBdDXmVvfgRTKNlhskBfWrRzChZtnbTZfjCjBzHBjqtcczvzTJNXFrSWTxKLfsxXvd')}>ส่งความคิดเห็น</Button>
       
          </Col>
        </Row>
      </div>
    </Col>
  )
}
