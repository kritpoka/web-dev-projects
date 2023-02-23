import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "บ้านมีกี่แบบ",
      description: "ลักษณะและความแตกต่างของบ้านแต่ละแบบ",
      imgUrl: "https://images.unsplash.com/photo-1501183638710-841dd1904471?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      info: "1. บ้านเดี่ยว เป็นแบบบ้านที่อยู่อาศัยที่มีคนนิยมมากที่สุด ไม่มีผนังส่วนใดติดกับบ้านหลังอื่นเลย ลักษณะเป็นบ้านตั้งอยู่ เดี่ยว ๆ มีเนื้อที่กว้างขวางรั้วรอบขอบชิดมักมีพื้นที่มากกว่า 50 ตารางวา ขึ้นไป ทำให้ผู้อาศัยได้บรรยากาศของ ความเป็นส่วนตัว และห่างไกลจากการรบกวนของเพื่อนบ้าน บ้านชนิดนี้ปกติแล้จะ มีขนาดใหญ่เล็กแตกต่างกันสามารถตกแต่งได้ในรูปแบบต่าง ๆ ตามฐานะและรสนิยม ของผู้เป็นเจ้าของเหมาะกับ : คู่รัก ครอบครัวขนาดเล็ก ครอบครัวขนาดใหญ่",
      info1: "2. อาคารพาณิชย์หรือตึกแถว เป็นแบบบ้านอีกลักษณะหนื่งที่ได้รับความนิยมมากในแถบชุมชนเมือง เพราะนอกจากจะใช้เป็นที่อยู่อาศัยได้แล้ว ยังสามารถดัดแปลงให้เป็นสถานที่ทำการค้าหรือ ธุรกิจได้ด้วย อาคารแบบนี้มักมีเนื้อที่แคบ จึงนิยมก่อสร้างหลาย ๆ ชั้นเหมาะกับ : ผู้ที่วางแผนทำธุรกิจ",
      info2: "3. ทาวน์เฮาส์ เป็นบ้านที่มีลักษณะเหมือนตึกแถวบ้านประเภทนี้มักตั้งอยู่ในเมือง บ้านที่ผนังทั้ง 2 ด้านจะดิตกับบ้านหลังอื่น มักจะมีพื้นที่น้อยกว่า 35 ตารางวาต่างกับตึกแถวตรงที่มีบริเวณหน้าบ้านจัดเป็นสวนขนาดย่อมและจอดรถได้ ทาวน์เฮ้าส์ส่วนใหญ่มักเป็นแบบ 2-3 ชั้นใช้เนื้อที่ค่อนข้างน้อย เนื่องจากเป็นที่ในเมืองและมีราคาแพงเหมาะกับ : คนเดียว คู่รัก ครอบครัวขนาดเล็ก",
      info3: "4. คอนโดมิเนียม เป็นอาคารที่มีหลายชั้น แต่ละชั้นแบ่งเป็นห้องชุดจำนวนมาก ซึ่งภาย ในห้องประกอบด้วยห้องนอน ห้องรับแขก ห้องนำ ฯลฯ อาคารชุดแต่ละแห่งมักมีสิ่ง อำนวยความสะดวกครบถ้วน โดยทั่วไปแล้วอาคารชุดจะตั้งอยู่ในกลางเมือง หรือใน ที่ชุมชนที่มีการคมนาคมสะดวก อาคารชุดมีหลายประเภท ทั้งประเภทที่อยู่อาศัย (Residential Condominium) และประเภทสำนักงาน (Office Condominium) ผู้ซื้ออาคารชุดจะมีกรราสิทธิ์เป็นเจ้าของอาคาร ชุดของตน และมีกรรมสิทธิ์ร่วมในทรัพย์สินส่วนกลาง อันได้แก่ ห้องโถง ที่จอด รถ ลิฟต์ สนาม และทางเดิน เป็นต้น ดังนั้นค่าใช้จ่ายในการดูแลทรัพย์สินส่วน กลาง ผู้เป็นเจ้าของอาคารชุดจึงต้องร่วมกันรับผิดชอบ โครงการเหมาะกับ : คนเดียว คู่รัก",
      info4: "5. สหกรณ์เคหสถาน เป็น ที่อยู่อาศัยแบบสหกรณ์ ลักษณะเป็นอาพาร์ตเมนต์เพล็กซ์ คล้าย คอนโดมิเนียม ที่อยู่อาศัยประเภทนี้ เกิดขึ้นโดยผู้ต้องการที่อยู่อาศัย จะ ลงทุนซื้อหุ้นของสหกรณ์และสหกรณ์จะนำเงินนั้นไปซื้อที่ดินและสร้างอาคารให้ สมาขิกได้เช่าอยู่ สมาชิกต้องช่วยกันออกค่าบำรุงรักษา ซ่อมแซม ค่า ภาษี สมาชิกแต่ละหน่วย มีสิทธิออกเสียงได้หนึ่งเสียงในการเลือกตั้งกรรมการ บริหาร",
      info5: "6. บ้านเคลื่อนที่  บ้านชนิดนี้ในเมืองไทยมักไม่ค่อยคุ้นเคยกัน แต่ในต่างประเทศมีมานานแล้ว ลักษณะ เป็นบ้านที่สร้างสำเร็จรูปจากโรงงาน และย้ายมาติดตั้งในทำเลที่กำหนดให้เป็น พื้นที่ของบ้านเคลื่อนที่ ผู้ที่เริ่มตั้งครอบครัวใหม่นิยมอยู่บ้านเคลื่อน ที่ เพราะราคาไม่แพงนัก บางคนก็ใช้บ้านเครื่องที่เป็นสำนักงานเคลื่อน ที่ เช่น ผู้รับเหมาเวลาไปรับเหมาก่อสร้างตามแหลงรับเหมาต่าง ๆ บ้านแบบนี้สามารถขับเคลื่อนหรือพ่วงกับรถคันอื่นได้",
      info6: "7.บ้านแฝด คือ บ้านที่มีผนัง(หรือส่วนใดส่วนหนึ่ง) ด้านหนึ่งติดกับบ้านอีกหลัง มักจะมีพื้นที่บ้านโดยประมาณ 35-45 ตารางวา และจะมีพื้นที่ว่างสำหรับใช้สอยไม่ติดกับใครอยู่อีกด้านหนึ่งหากมีรั้วล้อมไว้ ดูจากภายนอกจะเหมือนมีบ้าน 2 หลังอยู่ในรั้วเดียวกัน (เพราะผนังของบ้านทั้ง2หลังนั้นจะติดกัน และอีกฝั่งผนังไม่ติดใคร)เหมาะกับ : คู่รัก ครอบครัวขนาดเล็ก ครอบครัวขนาดใหญ่",
    },
    {
      title: "ลักษณะของบ้านที่ดี",
      description: "บ้านที่ดีจะให้สุขภาพกาย อารมณ์ รู้สึกผ่อนคลาย",
      imgUrl: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      info: "test2",
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: "https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80",
      info: "test3",
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: "https://images.unsplash.com/photo-1495433324511-bf8e92934d90?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      info: "test4",
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      info: "test5",
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: "https://images.unsplash.com/photo-1558036117-15d82a90b9b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      info: "test6",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>เนื้อหาเกี่ยวกับบ้าน</h2>
                  <p>วันนี้ VEEDII มีเรื่องที่น่าสนใจเกี่ยวกับบ้าน การออกแบบหรือการซื้อบ้านครั้งแรกลองเลือกเก็บความรู้ต่างๆ ไปเป็นแรงบันดาลใจและไปประยุกต์ใช้ ปรับให้เข้ากับสไตล์ความชอบ ถ้าพร้อมแล้วก็ตามไปชมกันเลย</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">หน้า 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">หน้า 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">หน้า 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                            projects.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>

                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">

                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="img"></img>
    </section>
  )
}
