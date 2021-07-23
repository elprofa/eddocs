import { Row, Col, Container } from "reactstrap";
import Title from "../../shared/Title";
import SectionNwsLtrtStc from "./SectNwsltr.stc";
import Texte from "../../shared/Texte";
import Input from "../../shared/Input";
import { theme } from "../../../theme";
import Button from "../../shared/Button";
import Trait from "../../shared/Trait";
import SectionNewsLetterStc from "./SectionNewsLetter.stc"

const SectionNewsLetter = () => {
  return (
    <SectionNewsLetterStc>
      <div className="container">
        <div className="row py-2 py-md-5">
          <div className="col-lg-12">
            <div className="div_news">
              <Title
                partOne="Abonnez-vous"
                PartTwo="à notre newsletter"
                number={1}
                MyclassName="py-2 py-md-3 pb-md-0"
              />

              <Texte
                texte="Le lorem ipsum est, en imprimerie, une suite de mots sans 
                        signification utilisée à titre provisoire pour calibrer une."
                MyclassName="py-2 py-md-3 pt-md-0 "
              />
              <div className="row">
                <div className="col-md-8">
                  <Input
                    letGo={{
                      style: {
                        marginTop: theme.margins.KingParagraphe,
                      },
                      placeholder: "email@email.com",
                    }}
                  />
                </div>
                <div className="col-md-4">
                  <Button texte="Soumettre" MyclassName="my-2 my-md-3" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionNewsLetterStc>
  );
};

export default SectionNewsLetter;
