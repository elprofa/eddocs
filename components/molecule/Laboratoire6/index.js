import React, { useState } from 'react';
import LaboratoireStc6 from './laboratoire.stc';
import { theme } from '../../../theme';
import Title from '../../shared/Title';
import Texte from '../../shared/Texte';
import Button from '../../shared/Button';
import LaboratoireStc1 from '../Laboratoire2/Laboratoire.stc';
import TitreParagrapheLabo from '../TitreParagrapheLabo';
import {Row,Col} from 'reactstrap'
import PCard from "../PresentationCard";
import HeaderLabo from '../HeaderLabo';

const Laboratoire6 = (props) => {
  
  return (
    <LaboratoireStc6 >
     <HeaderLabo img="/img/masse1.png" logo="/img/logo.png" title={{
            partOne:"Masse ",
            partTwo:""
        }} />

        <div className="row my-2">
          <div className="col-lg-3 col-md-3 align-self-center">
            <img src="/img/masse/log.PNG" className="mw-100 rounded-3"  />
          </div>
          
          <div className="col-lg-9 col-md-9">
              <Texte texte={<b>Pour l'étalonnage et vérification de vos Masses étalon notre laboratoire
                        dispose des moyens suivants:</b>} />

                <Texte texte={<b>Balances:</b> } className="fw-bold my-md-2" />

                <ul> 
                    <li>RADWAG de portée 500 g et de résolution 0,01 mg</li>
                    <li>RADWAG de portée 10,2 kg et de résolution 0,1 mg</li>
                    <li>Mettler Toledo de portée 24 g et de résolution 1 µg</li>
                    <li>Mettler Toledo de portée 210 g et de resolution 0,1 mg</li>
                    <li>Précisa de portée 6 kg et de résolution 0,01 g</li>
                    <li>Précisa de portée 6 kg et de résolution 0,01 g</li>
                </ul>
                <br />
                <br />

                <Texte texte={<b>masse:</b> } className="fw-bold my-md-2" />
                <ul> 
                    <li> Boîtes des masses classes E1</li>
                    <li> Boîtes des masses classes E2</li>
                    <li> Boîtes des masses classes F1</li>
                </ul>
                <br />
                <br />
                <Texte texte={<b>Notre laboratoire est accrédité COFRAC pour l'etalonnage des masses de : </b>} className="fw-bold my-md-2" />
                <ul> 
                    <li> Classe E2 de 1g à 10 Kg</li>
                    <li> Classe F1 de 1mg à 20 Kg</li>
                    <li> Classe F2 de 1mg à 20 Kg</li>
                    <li> Classe M de 1mg à 20 Kg</li>
                </ul>
                <Button texte="Demandez un devis " MyclassName="demande_devis my-2 my-md-5" />
          </div>
        </div>
        <div className="row my-2 my-md-5">
            <div className="col-md-2 align-self-center">
            <img src="/img/masse/292.png" className="mw-100 rounded-3" style={{maxHeight:"200px",margin:"auto",display:"block"}} />
            </div>
            <div className="col-md-2">
            <img src="/img/masse/m1.png" className="mw-100 rounded-3" style={{maxHeight:"200px",margin:"auto",display:"block"}} />
            </div>
            <div className="col-md-6">
            <img src="/img/masse/217.png" className="mw-100 rounded-3" style={{maxHeight:"200px",margin:"auto",display:"block"}} />
            </div>
            <div className="col-md-2">
            <img src="/img/masse/291.png" className="mw-100 rounded-3" style={{maxHeight:"200px",margin:"auto",display:"block"}} />
            </div>
        </div>

</LaboratoireStc6>
  );
}

export default Laboratoire6;