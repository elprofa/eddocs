import { Row, Col, Container } from "reactstrap";
import Title from "../../shared/Title";
import SectionNwsLtrtStc from "./SectNwsltr.stc";
import Texte from "../../shared/Texte";
import Input from "../../shared/Input";
import { theme } from "../../../theme";
import Button from "../../shared/Button";
import Trait from "../../shared/Trait";
import SectionNewsLetterStc from "./SectionNewsLetter.stc";
import {gsap} from 'gsap'
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import { useEffect } from "react";

const SectionNewsLetter = () => {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {

    let lt=gsap.timeline({
        scrollTrigger:{
        trigger: ".newsletterSectionPage",
        markers:false,
        start:"top center",
        toggleActions:'play none none none',
        },
        delay:.3});
    
        lt.from('.newsletterSectionPage',{ x:100,duration:.5,opacity:0,})
        .from ('.newsletterTitre',{duration:.5,opacity:0,ease: "slow(0.7, 0.7, false)", y: 100 })
        .from ('.newsletterParagraphe',{duration:.5,opacity:0,ease: "slow(0.7, 0.7, false)", y: 100 })
        .from ('.newsletterColLeft',{duration:.5,opacity:0,ease: "slow(0.7, 0.7, false)", x: -100 })
        .from ('.newsletterColRight',{duration:.5,opacity:0,ease: "slow(0.7, 0.7, false)", x: 100 })

       
}, []);
  return (
    <SectionNewsLetterStc className="newsletterSectionPage">
      <div className="container">
        <div className="row py-2 py-md-5">
          <div className="col-lg-12">
            <div className="div_news">
              <Title
                partOne="Abonnez-vous"
                PartTwo="à notre newsletter"
                number={1}
                MyclassName="newsletterTitre py-2 py-md-3 pb-md-0"
              />

              <Texte
                texte="Le lorem ipsum est, en imprimerie, une suite de mots sans 
                        signification utilisée à titre provisoire pour calibrer une."
                MyclassName="newsletterParagraphe py-2 py-md-3 pt-md-0 "
              />
              <div className="row">
                <div className="col-md-8 newsletterColLeft">
                  <Input
                    letGo={{
                      style: {
                        marginTop: theme.margins.KingParagraphe,
                      },
                      placeholder: "email@email.com",
                    }}
                  />
                </div>
                <div className="col-md-4 newsletterColRight">
                  <Button texte="Soumettre" MyclassName="btn_contact my-2 my-md-3" />
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
