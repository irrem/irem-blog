import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Input,
  Button,
  Container,
  Col,
  Row,
  FormGroup,
  Form,
  Label,
} from "reactstrap";
import "./styleItem.css";
import firebase from "firebase";
import firebaseConfig from "../../constants/firebase";
import { right } from "@popperjs/core";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
var db = firebase.firestore();

const ItemDetail = (props) => {
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [text, setText] = useState("");
  const [date,setDate]=useState("");


  const [nullable, setNullable] = useState("");

  let { articleId } = useParams();
  //console.log(articleId+"aydi");

  function GetDataWithId(articleId) {
    db.collection("Articles")
    .doc(articleId)
    .get()
    .then(querySnapshot => {
      console.log(querySnapshot.id, " => ", querySnapshot.data());
         // console.log(doc.id, "=>", doc.data());
       
      
          setTitle(querySnapshot.data().title);
            setText(querySnapshot.data().text);
            setImageUrl(querySnapshot.data().imageUrl);
            setDate(querySnapshot.data().date);
        });
        setNullable(Math.floor(Math.random() * 999));
        console.log(title);
      
  }
  useEffect(() => {
    GetDataWithId(articleId);
  }, []);

  return (
    <div className="center-items" >
      <Container>
        <div className="oneArticle">
          <h3>{title}</h3>          
          <p style={{float:right,margin:10}}>{date}</p>
          <img className="imageLarge" src={imageUrl} />
          <br/>
          <p>{text}</p>
           
        </div>
        <div className="comment">
          <Form className="form">
            <Col className="center-items">
              <FormGroup>
                <h3> Add Comment</h3>
                <Input
                  className="inputs"
                  id="username"
                  type="text"
                  placeholder="You can write your name here"
                  style={{ display: "block" }}
                ></Input>

                <textarea
                  className="inputTexts"
                  id="comment"
                  type="text"
                  placeholder="You can write comments here"
                  style={{ display: "block", marginLeft: 50 }}
                ></textarea>
                <Button
                  className="button"
                  style={{ display: "block", marginLeft: 100, marginTop: 20 }}
                >
                  {" "}
                  Add Comment
                </Button>
              </FormGroup>
            </Col>
          </Form>
        </div>
      </Container>
    </div>
  );
};
export default ItemDetail;
