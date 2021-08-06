import React, { useEffect, useState } from "react";
import { Button, Row, Container, Col } from "reactstrap";
import imageUrl from "../../ui-elements/rct.png";

import firebase from "firebase";
import firebaseConfig from "../../constants/firebase";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
var db = firebase.firestore();

function Portfolio() {
  const [items, setItems] = useState([]);
  const [id,setId]=useState();
  const [nullable,setNullable]=useState();
  function getDetail(id){
    setId({id});
    console.log(id);
   // window.location.href = "./itemDetail";
  }
  function GetData() {
    var List = [];
    db.collection("Articles")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          List.push({
            id: doc.id,
            title: doc.data().title,
            text: doc.data().text,
            imageUrl: doc.data().imageUrl,
          });
          setItems(List);
          setNullable(Math.floor(Math.random() * 999));
          console.log(items);
        });
      });
  }

  useEffect(() => {
    GetData();
  },[]);

  return (
    <div className="centerItems">
      <Container>
        {items.length ? (
          items.map((item) => (
            <Row>
              <Col>
                <div className="itemListDesign">
                  <img className="smallImg" src={item.imageUrl} />
                  <div className="articleText">
                    {item.text}
                    <Button
                      className="button"
                      onClick={() => getDetail(item.id)}
                      style={{
                        float: "right",
                        marginTop: 20,
                        padding: 5,
                        fontSize: 15,
                      }}
                    >
                      Read More
                    </Button>
                  </div>
                </div>
              </Col>
            </Row>
          ))
        ) : (
          <h2>Yükleniyor</h2>
        )}
      </Container>
    </div>
  );
}
export default Portfolio;
