import React, { useState } from 'react';
import { Container, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';

import firebase from 'firebase';
import firebaseConfig from '../../constants/firebase';

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
const GirisYap = () => {
  const [password, setPassword] = useState(null);
  const [email, setEmail] = useState(null);
  const [validation, setValidation] = useState(null);

  const Auth = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(function (result) {
        console.log(result)
        window.location.href = '/newItem';
       
      })
      .catch(function (error) {
        setValidation(error.message);
      });
  };
  return (
    <Container
      style={{ alignItems: 'center', marginLeft: 400, paddingTop: 60, position: 'relative' }}
    >
      <h2>Admin Girişi</h2>
     
      <Form className='form' style={{ alignItems: 'center', position: 'relative' }}>
        <Col md='4'>
          <a style={{ color: 'red' }}>{validation}</a>
          
          <FormGroup>
            <Label>Email</Label>
            <Input
              onChange={text => setEmail(text.target.value)}
              type='email'
              name='email'
              id='exampleEmail'
              placeholder='myemail@email.com'
            />
          </FormGroup>
          <FormGroup>
            <Label for='examplePassword'>Parola</Label>
            <Input
              onChange={text => setPassword(text.target.value)}
              type='password'
              name='password'
              id='examplePassword'
              placeholder='********'
            />
          </FormGroup>
          <Button
            onClick={() => Auth()}
            className="button"
            style={{ marginTop:30,marginLeft:55,width:250,height:50}}
          >
            Giriş Yap
          </Button>
        </Col>
      </Form>
    </Container>
  );
};

export default GirisYap;