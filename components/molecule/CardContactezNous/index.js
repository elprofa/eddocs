import React from 'react';
import {  Label, Input, Container, Row } from 'reactstrap';
import CardCtznStc from './CardCtzn.stc';
import { MdEmail } from 'react-icons/md';
import { FaPhoneSquareAlt, FaFacebook, FaTwitter } from 'react-icons/fa';
import { AiFillLinkedin } from 'react-icons/ai';
import Title from '../../shared/Title';


const CardCtzn = (props) => {
    const { bg } = props;
  return (
    <CardCtznStc bg={"#b7cac8"}>
        <Container>
            <Row>
                <label><strong>Contactez</strong> Nous</label><br></br>
            </Row>
            <Row>
                <label> </label>
            </Row>
            
            <Row>
                <label>Par Mail:</label><br></br>
            </Row>
            <Row>
                <label><MdEmail />  airmetrologie@gmail.com</label>
            </Row>

            <Row>
                <label> </label>
            </Row>

            <Row>
                <label>Appel Direct:</label><br></br>
            </Row>
            <Row>
                <label><FaPhoneSquareAlt />  (718)603-7610</label>
            </Row>

            <Row>
                <label> </label>
            </Row>

            <Row>
                <label>Reseau sociaux:</label><br></br>
            </Row>
            <Row>
                <label><FaFacebook size={20} className='ml-0' /> <FaTwitter className='ml-3' size={20} /> <AiFillLinkedin className='ml-3' size={20} /></label>
            </Row>

        </Container>    
    </CardCtznStc>
  );
}
export default CardCtzn;