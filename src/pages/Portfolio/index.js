import React, { useEffect, useState } from "react";
import { Button, Row, Container, Col } from "reactstrap";
import { Link} from "react-router-dom";
import firebase from "firebase";
import firebaseConfig from "../../constants/firebase";
import art from "../../ui-elements/Learning-pana.png";


if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
var db = firebase.firestore();

function Portfolio() {
  const [items, setItems] = useState([]);
  const [nullable,setNullable]=useState();

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
            date:doc.data().date,
            time:doc.data().time,
            textSmall:doc.data().textSmall,
            category:doc.data().category
          });
          
          setItems(List);
          setNullable(Math.floor(Math.random() * 999));
         
        });
      });
  }

  useEffect(() => {
    GetData();
  },[]);

  return (
    <div className="centerItems">
      <Container>
      <img src={art} style={{ width: 300, height: 300 ,marginLeft:525,borderRadius:200}} />
        {items.length ? (
          items.map((item) => (
           
            <Row>
              <Col>
                <div className="itemListDesign">
                
                  <img className="smallImg" src={item.imageUrl} />
                  <div className="articleText">
                 <h5>{item.title}</h5> 
                   <p>{item.textSmall}</p> 
                    <Button
                      className="button"
                   
                      style={{
                        float: "right",
                        marginTop: 20,
                        padding: 5,
                        fontSize: 15,
                      }}
                     
                    ><Link   to={"/itemDetails/" + item.id} style={{textDecoration:"none",color:"white"}}>
                    
                      Read More</Link>
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
