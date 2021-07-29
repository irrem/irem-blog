import "./style.css";
import { Row, Col, Container } from "reactstrap";

import code from "./../../ui-elements/img-code.png";
import graphics from "./../../ui-elements/graphic.jpg";
import article from "./../../ui-elements/article-writ.jpg";

function Home() {
  return (
    <div className="home-main-col">
      <Container>
        <Row>
          <Col xs="6" sm="4">
            <div className="orange-box">
              <img src={code} style={{ width: 300, height: 200 }} />
              <p>You can find the codes I wrote here.</p>
            </div>
          </Col>
          <Col xs="6" sm="4">
            <div className="yellow-box">
              <img src={graphics} style={{ width: 300, height: 200 }} />
              <p> You can review my arts.</p>
            </div>
          </Col>
          <Col sm="4">
            <div className="blue-box">
              <img src={article} style={{ width: 300, height: 200 }} />
              <p> You can read my articles.</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
