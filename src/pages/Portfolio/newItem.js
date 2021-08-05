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
  var date = new Date().toLocaleDateString();

  const AddItem = () => {
    console.log(category, title, imageUrl, text);
    db.collection("Articles")
      .add({
        category,
        title,
        imageUrl,
        text,
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
  }
  return (
    <div className="center-items" style={{ marginLeft: 200, marginBottom: 50 }}>
      <br />

      <Container>
        <h2 style={{ color: "dodgerblue" }}>Add new text</h2>
        <p className="label" style={{ float: "right", marginRight: 60 }}>
          {" "}
          Tarih
          {new Date().toLocaleDateString()}
        </p>
        <p className="label" style={{ float: "right", marginRight: 60 }}>
          {" "}
          Saat {new Date().toLocaleTimeString()}
        </p>
        <Form className="form">
          <Col className="center-items">
            <FormGroup>
              <Label className="label">Category</Label>
              <Input
                className="inputs"
                type="text"
                name="title"
                id="category"
                onChange={(text) => setCategory(text.target.value)}
                value={category}
              />
            </FormGroup>
            <FormGroup>
              <Label className="label">Title</Label>
              <Input
                className="inputs"
                type="text"
                name="title"
                id="title"
                onChange={(text) => setTitle(text.target.value)}
                value={title}
              />
            </FormGroup>
            <FormGroup>
              <Label className="label">Image Url</Label>
              <Input
                className="inputs"
                type="text"
                name="imageUrl"
                id="imageUrl"
                onChange={(text) => setImageUrl(text.target.value)}
                value={imageUrl}
              />
            </FormGroup>
            <FormGroup>
              <Label className="label">Text</Label>
              <Input
                className="inputTexts"
                type="text"
                name="text"
                id="text"
                onChange={(text) => setText(text.target.value)}
                value={text}
              />
            </FormGroup>
            <Button
              onClick={() => AddItem()}
              className="button"
              style={{
                marginTop: 30,
                marginLeft: 55,
                width: 250,
                height: 50,
                font: 20,
              }}
            >
              Kaydet
            </Button>
          </Col>
        </Form>
      </Container>
    </div>
  );
};
export default NewItem;
