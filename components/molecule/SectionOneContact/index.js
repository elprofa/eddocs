import { Row, Col } from "reactstrap";
import Title from "../../shared/Title";
import "bootstrap/dist/css/bootstrap.min.css";
import SectOneContactStc from "./SectOneContact.stc";
import Paragraphe from "../../shared/Paragraphe";

const SectOneContact = (props) => {
  return (
    <SectOneContactStc>
      <Row className="">
        <Col md={12} className="text-center">
          <div className="h-20 py-2">
            <Title
              coulor="#000"
              text__transform="text-capitalize"
              weight="100px"
              text={
                <span>
                  <strong>Comment</strong> Nous contactez ?
                </span>
              }
            />

            <Paragraphe
              coulor="#000"
              weight="100px"
              text={
                <span>
                  Notre convertisseur de PDF en JPG en ligne est le moyen le
                  plus simple de convertir des PDF en JPG. Rien à télécharger et
                  installer, tout se fait en ligne. Nous traitons votre document
                  PDF et le convertissons en fichiers JPG haute résolution.
                  L'utilisation d'un service en ligne vous permet de.
                </span>
              }
            />
          </div>
        </Col>
      </Row>
    </SectOneContactStc>
  );
};

export default SectOneContact;
