import React from 'react';
import { Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';
import FormContactStc from './formContat.stc';
//import Button from '../../shared/Button';

const Example = (props) => {
    //const { bg, largeur } = props;
  return (
    <FormContactStc bg={'#b7cac8'}>
    <Container fluid>
    <Form className='lg-6'>
      <FormGroup>
        <Input type="text" name="nom" id="exampleNom" placeholder="Nom:" />
        <label></label>
        <Input type="email" name="email" id="exampleEmail" placeholder="Adresse mail:" />
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword"></Label>
        <Input type="text" name="password" id="exampleObjet" placeholder="Objet:" />
      </FormGroup>
      
      <FormGroup>
        <Label for="exampleText"></Label>
        <Input type="textarea" name="text" id="exampleText" placeholder="Votre message:" />
      </FormGroup>
      <div className="btn-submit">
        <Button>Soumettre</Button>
      </div>
    </Form>
    </Container>
    </FormContactStc>
  );
}
export default Example;