import React from 'react'
import Select from '../../shared/Select'
import Title from '../../shared/Title'
import MoleculeStc from './Molecule.stc'
import { AiFillAndroid } from "react-icons/ai";
import Button from '../../shared/Button';
import Texte from '../../shared/Texte';

const Molecule1 = ({letGo}) => {
    const MyLink={
        texte:"SEARCH",
        chemin:"/molecule",
        style:{
          minWidth: "124px;",
          height: "3.15rem;",
          fontSize: "15px;",
          letterSpacing:" 0.26px;",
          borderRadius:"0px"
        }
      }
    const MySelect={
        content:
          {
            option:[
              {
                value:"Wedo",
                texte:"NTSIGNA"
              },
              {
                value:"Amanda",
                texte:"ISSAIMON"
              },
              {
                value:"Priam",
                texte:"NTSIGNA"
              },
            ],
          }
        ,
        icon:<AiFillAndroid />,
        style:{
          background:"#fff",
          iconStyle:{
          },
          selectStyle:{
          },
        }
      }
    return (
        <MoleculeStc className="" MonStyle={letGo.style}>
            <Title letGo={{texte:"Find the perfect job that you deserve.",style:{color:"#2b3940"}}} />
            <div className="row">
                <div className="col-sm-4">
                    <Select letGo={MySelect} />
                </div>
                <div className="col-sm-4">
                    <Select letGo={MySelect} />
                </div>
                <div className="col-sm-4">
                    <Button letGo={MyLink} />
                </div>
            </div>
            <Texte letGo={{texte:"Find the perfect job that you deserve.",style:{color:"#2b3940"}}}/>
        </MoleculeStc>
       
    )
}


export default Molecule1
