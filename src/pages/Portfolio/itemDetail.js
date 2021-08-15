import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import parse from "html-react-parser";
import { Input, Button, Container, Col, FormGroup, Form } from "reactstrap";
import "./styleItem.css";
import firebase from "firebase";
import firebaseConfig from "../../constants/firebase";
import { right } from "@popperjs/core";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
var db = firebase.firestore();

const ItemDetail = (props) => {
  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [text, setText] = useState("");
  const [date, setDate] = useState("");
  const [username, setUsername] = useState("");
  const [comment, setComment] = useState("");
  const [items, setItems] = useState([]);

  const [nullable, setNullable] = useState("");


  let { articleId } = useParams();
  //console.log(articleId+"aydi");
  function clearInputValue() {
    setUsername("");
    setComment("");
    console.log(nullable);
  }
  function addComment(articleId) {
    db.collection("Articles")
      .doc(articleId)
      .collection("comments")
      .add({ comment, username })
      .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);

        alert("Kayıt işlemi başarıyla tamamlandı!");
        clearInputValue();
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  }
  function GetComments(articleId) {
    var List = [];
    db.collection("Articles")
      .doc(articleId)
      .collection("comments")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          List.push({
            id: doc.id,
            username: doc.data().username,
            comment: doc.data().comment,
          });

          setItems(List);
          console.log(List);
          setNullable(Math.floor(Math.random() * 999));
        });
      });
  }

  function GetDataWithId(articleId) {
    db.collection("Articles")
      .doc(articleId)
      .get()
      .then((querySnapshot) => {
        console.log(querySnapshot.id, " => ", querySnapshot.data());
        // console.log(doc.id, "=>", doc.data());

        setTitle(querySnapshot.data().title);
        setText(querySnapshot.data().text);
        setImageUrl(querySnapshot.data().imageUrl);
        setDate(querySnapshot.data().date);
        console.log(parse(text));
      });
    setNullable(Math.floor(Math.random() * 999));
    console.log(title);
  }
  useEffect(() => {
    GetDataWithId(articleId);
    GetComments(articleId);
  }, []);

  return (
    <div className="center-items">
      <Container>
        <div className="oneArticle">
          <h3>{title}</h3>
          <p style={{ float: right, margin: 10 }}>{date}</p>
          <br/>
          <img className="imageLarge" src={imageUrl} />
          <p>{parse(text)}</p>
          <br />
        </div>

        <div className="comment">
          <h3>Comments</h3>
          {items.length ? (
            items.map((item) => (
              <div
                className="comments"
                style={{
                  backgroundColor: "rgb(250, 240, 98)",
                  padding: 5,
                  margin: 10,
                  paddingLeft: 20,
                }}
              >
                <b> {item.username}</b>
                <p> {item.comment}</p>
              </div>
            ))
          ) : (
            <h5>Henüz yorum yok</h5>
          )}
          <Form className="form">
            {" "}
            <hr />
            <Col
              className="center-items"
              style={{ marginLeft: 100, marginBottom: 50 }}
            >
              <FormGroup>
                <h3 style={{ marginLeft: 50 }}> Add Comment</h3>
                <Input
                  className="inputs"
                  id="username"
                  type="text"
                  onChange={(text) => setUsername(text.target.value)}
                  value={username}
                  placeholder="You can write your name here"
                  style={{ display: "block" }}
                ></Input>

                <textarea
                  className="inputTexts"
                  id="comment"
                  type="text"
                  placeholder="You can write comments here"
                  onChange={(text) => setComment(text.target.value)}
                  value={comment}
                  style={{ display: "block", marginLeft: 50 }}
                ></textarea>
                <Button
                  className="button"
                  style={{ display: "block", marginLeft: 100, marginTop: 20 }}
                  onClick={() => addComment(articleId)}
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
