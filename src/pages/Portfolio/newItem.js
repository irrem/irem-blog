import {
  Container,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from "reactstrap";

import React, { useState } from "react";

import firebase from "firebase";
import firebaseConfig from "../../constants/firebase";

import "./styleItem.css";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
var db = firebase.firestore();

const NewItem = () => {
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [text, setText] = useState("");
  const [textSmall, setTextSmall] = useState("");
  var date = new Date().toLocaleDateString();
  var time =  new Date().toLocaleTimeString();

  const AddItem = () => {
    console.log(category, title, imageUrl, text);
    db.collection("Articles")
      .add({
        category,
        title,
        imageUrl,
        text,
        date,
        textSmall,
        time
      })
      .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);

        alert("Kayıt işlemi başarıyla tamamlandı!");
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  };
  function clearInputValue() {
    setCategory("");
    setTitle("");
    setImageUrl("");
    setTextSmall("");
  }
  return (
    <div className="center-items" style={{ marginLeft: 200, marginBottom: 50 }}>
      <br />

      <Container>
        <h2 style={{ color: "dodgerblue" }}>Add new text</h2>
        <p className="label" style={{ float: "right", marginRight: 60 }}>
          {" "}
          Tarih
          {date}</p>
        <p className="label" style={{ float: "right", marginRight: 60 }}>
          {" "}
          Saat {time}
        </p>
        <div>
        <Form className="form">
          <Col className="center-items">
            <FormGroup>
              <Input
                className="input"
                type="text"
                name="title"
                id="category"
                onChange={(text) => setCategory(text.target.value)}
                value={category}
                placeholder="Category"
              />
            </FormGroup>
            <FormGroup>
              <Input
                className="input"
                type="text"
                name="title"
                id="title"
                onChange={(text) => setTitle(text.target.value)}
                value={title}
                placeholder="Title"
              />
            </FormGroup>
            <FormGroup>
              
              <Input
                className="input"
                type="text"
                name="imageUrl"
                id="imageUrl"
                onChange={(text) => setImageUrl(text.target.value)}
                value={imageUrl}
                placeholder="Image Url"
              />
            </FormGroup>
            <FormGroup>
              <textarea
                className="textInp"
                type="text"
                name="text"
                id="text"
                onChange={(text) => setTextSmall(text.target.value)}
                value={textSmall}
                placeholder="Text Fragment"
                style={{maxHeight:120,minHeight:70}}
              />
            </FormGroup>
            <FormGroup>
              <textarea
                className="textInp"
                type="text"
                name="text"
                id="text"
                onChange={(text) => setText(text.target.value)}
                value={text}
                placeholder="Text"
              />
            </FormGroup>
            <Button
              onClick={() => AddItem()}
              className="button"
              style={{
                marginTop: 30,
                marginLeft: 150,
                marginBottom:30,
                width: 250,
                height: 50,
                fontSize: 15,
              }}
            >
              Kaydet
            </Button>
          </Col>
        </Form></div>
      </Container>
    </div>
  );
};
export default NewItem;
