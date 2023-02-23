
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React from "react";
import Card from 'react-bootstrap/Card';

function MyVerticallyCenteredModal(props) {

  //const Modal for popup when event is clicked.
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

// information element for discribe. 
const elements = [
  { 
    title: 'one',
    text: 'one', 
    src: 'https://images.unsplash.com/photo-1672478865400-98ad5c821d75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
  }, 
  { 
    title: 'two',
    text: 'two',  
    src: 'https://images.unsplash.com/photo-1671506754462-733659e476ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80',
  }, 
  { 
    title: 'three',
    text: 'three', 
    src: 'https://images.unsplash.com/photo-1672134459730-99b01749b6ed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
  }
];

// create responsive 
export const Skills = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };


  //display 
  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>สไตล์การแต่งบ้าน</h2>
              <p className='info'>ใครกำลังหาทำบ้านใหม่อยู่หรืออยากจะเปลี่ยนสไตล์ห้อง แต่ไม่รู้ว่าบ้านแบบนี้ต้องบอกช่างว่าอะไร วันนี้ VEEDII สไตล์การแต่งบ้านของแต่ละห้องมานำเสนอ ใครชอบงานสไตล์ไหน โทนสีแบบไหน บอกช่างพร้อมแนบรูปไปได้เลยยย</p>
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                {elements.map(({ title, text, src }, index) => {
                  return (
                    <div className="item" >
                      <Card style={{ width: '18rem'}}>
                        <Card.Body>
                          <Card.Title className='text-black'>{title}</Card.Title>
                          <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                          <Card.Text>
                            {text}
                          </Card.Text>
                          <Card.Link href="#">Card Link</Card.Link>
                          <Card.Link href="#">Another Link</Card.Link>
                        </Card.Body>
                      </Card>
                      <MyVerticallyCenteredModal
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                      />
                    </div>
                  )
                })}

              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="img" />
    </section>
  )
}
