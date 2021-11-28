import "./style.css";
import { Row, Col, Container } from "reactstrap";

import code from "./../../ui-elements/img-code.png";
import graphics from "./../../ui-elements/graphic.jpg";
import article from "./../../ui-elements/article-writ.jpg";
import art from "./../../ui-elements/Learning-pana.png";

function Home() {
  return (
    <div className="home-main-col">
      <Container>
        <Row>
          <Col md="3">
            <a href="https://github.com/irrem/irem-blog">
              <div className="orange-box">
                <img src={code} style={{ width: 300, height: 200 }} />
                <p>This site's soruce code here.</p>
              </div>
            </a>
          </Col>
          <Col md="3"><a href="https://bionluk.com/portfolyo/iremsarisoy">
            <div className="yellow-box">
              <img src={graphics} style={{ width: 300, height: 200 }} />
              <p> You can review my arts.</p>
            </div></a>
          </Col>
          <Col md="3">
            {" "}
            <a href="/portfolio">
              <div className="blue-box">
                <img src={article} style={{ width: 300, height: 200 }} />

                <p> You can read my articles.</p>
              </div>
            </a>
          </Col>
        </Row>
        
        
      </Container>
    </div>
  );
}

export default Home;
