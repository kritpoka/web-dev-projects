import { Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React from "react";



export const ProjectCard = ({ title, description, imgUrl , info, info2, info3, info4, info5, info6}) => {
  const MyVerticallyCenteredModal = (props) => {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="modal-info"
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter" className="pro-head">
            {title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4 className="pro-title">{title}</h4>
          <p className="pro-info">
            {info} <br/> <br/>
            {info2} <br/> <br/>
            {info3} <br/> <br/>
            {info4} <br/> <br/>
            {info5} <br/> <br/>
            {info6}
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx" onClick={() => setModalShow(true)}>
        <img src={imgUrl} alt="img"/>
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
        <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </Col>
  )
}
