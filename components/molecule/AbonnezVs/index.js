import { Row, Col } from 'reactstrap';
import Title from '../../shared/Title';
import Button from '../../shared/Button';
import Input from '../../shared/Input';
import AbonnezVsStc  from './AbonnezVs.stc';
import Paragraphe from '../../shared/Paragraphe';
 

const AbonnezVs = (props) => {
       

  return (
      <AbonnezVsStc>
      <Row className="">
        <Col md={12} className="text-center">
          <div className="h-20 py-2">
            <Title
              coulor="#fff"
              text__transform="text-capitalize"
              weight="lighter"
              font__size="x-large"
              text={
                <span>
                  Abonnez Vous à <strong>Notre Newsletter</strong>
                </span>
              }
            />

            <Paragraphe
              coulor="#fff"
              weight="100px"
              align__text="-webkit-center"
              text={
                <span>
                  Recevez tous les jours les informations sur nos nouvelles<br></br>
                  offres et opportunités.
                </span>
              }
            />
          </div>
        </Col>
      </Row>
        <div className="col-md-10 offset-md-2 row align-items-center mt-1">
            <div className="col-sm-6 align-items-center h-100">
                <Input letGo={{
                            style:{
                                
                                margin:"0px",
                            },
                            placeholder:"email@email.com",


                        }} />
            </div>
            <div className="col-sm-6 align-items-center h-100 mb-3">
                        <Button letGo={{
                            texte:"Soumettre",
                            style:{
                                backgroundImage: "linear-gradient(to right, rgb(101 143 222) , rgb(195 65 95))",
                                border:0,
                            }
                        }} />
            </div>
        </div>
      </AbonnezVsStc>
  )
}

export default AbonnezVs;