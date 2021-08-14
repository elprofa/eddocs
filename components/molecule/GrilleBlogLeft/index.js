import React from 'react'
import GrilleBlogLeftStc from './GrilleBlogLeft.stc';
import Button from '../../shared/Button';
import Trait from '../../shared/Trait';
import Title from '../../shared/Title';
import Texte from '../../shared/Texte';
import Image from 'next/image';
import { theme } from '../../../theme';

import { AiOutlineRight } from "react-icons/ai";
import IconGrille from '../IconGrille';

const GrilleBlogLeft = (props) => {

    return (
        <GrilleBlogLeftStc className="py-0 py-md-5">
         <div className="container">
             <div className="row py-2 py-md-5 my-0 my-5">
                
                <div className="col-lg-6 d-sm-none d-none d-md-block d-md-none d-lg-block text-center">
                    <div className="row">
                        <div className="col-sm-4">
                        </div>
                        <div className="col-sm-4 text-center">
                            <img src="/img/iso.png" className="py-2 py-md-3"  />
                        </div>
                        <div className="col-sm-4">
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-4 text-center">
                            <img src="/img/Groupe -8.png" className="py-2 py-md-3" />
                        </div>
                        <div className="col-sm-4 text-center">
                            <img src="/img/cofrac.png" className="py-2 py-md-3" />
                        </div>
                        <div className="col-sm-4 text-center">
                            <img src="/img/tunac.png" className="py-2 py-md-3" />
                        </div>
                    </div>
                    
                </div>
            <div className="col-lg-6 align-self-center">
                <Title partOne="Nos " PartTwo="Accréditations ISO/CEI 17 025" MyclassName="px-0 px-md-5 py-2 py-md-3 title" number={2} />
                <Texte texte={
                    <>
                    Afin d'apporter à nos clients le meilleur niveau de service dans le domaine de la metrologie 
                    dans l'optique de contribuer à l'amelioration de son processus de mesure, le groupe AIR metrologie-L2MI s'state =
                        engagé depuis 2005 dans une démarche qualité qui s'appuie sur la norme ISO/CEI 17 025 version
                        2017,dans le but de satisfaire le niveau de qualité et conformité des prestations attendus par 
                        le client, de renforcer la fiabilité et la rigueur de son fonctionnement et de s'ameliorer de facon
                         continue.
                    
                    </>
                } MyclassName="px-0 px-md-5 py-2 py-md-3 paragraphe" />
                <Button texte={<>En savoir plus <AiOutlineRight /></>} MyclassName="mx-0 mx-md-5 py-2 py-md-3" />
            </div>
             </div>
         </div>
        </GrilleBlogLeftStc>
       
    )
}


export default GrilleBlogLeft
