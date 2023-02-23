import { Col, Row, } from "react-bootstrap";

export const Newsletter = () => {
  return (
    <Col lg={12}>
      <div className="newsletter-bx wow slideInUp">
        <Row>
          <Col>
            <h3>send a comment<br></br> & criticism</h3>
          </Col>
          <Col md={6} xl={7}>
            <div className="new-email-bx">
              <button onClick={() => window.open('https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSMTRwtBdDXmVvfgRTKNlhskBfWrRzChZtnbTZfjCjBzHBjqtcczvzTJNXFrSWTxKLfsxXvd')}>ส่งความคิดเห็น</button>
            </div>
          </Col>
        </Row>
      </div>
    </Col>
  )
}
