import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/3d home.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              
              <div className="">
                <span className="tagline">Welcome to VEEDII</span>
                <h1>"Hi! I'm VEEDII" </h1>
                  <p>"บ้าน" ควรจะเป็นพื้นที่สร้างความสุขตามอัตภาพของผู้อยู่อาศัย และความเป็นมนุษย์คือการได้อยู่ร่วมกันอย่างมีความสุข ได้สัมผัสธรรมชาติได้อยู่ในสภาพแวดล้อมที่ดี ในการออกแบบบ้านที่จะมีที่มาหรือข้ามูลให้เลือกมากขึ้น ด้วยความที่การเวลาเปลี่ยม ความรู้ควาต้องการก็เปลี่ยนไปตามการเวลาเช่นกัน รวมไปถึงเเรงบันดาลใจในการออกเเบบ</p>
              </div>
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated " : ""}>
                  <img src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
