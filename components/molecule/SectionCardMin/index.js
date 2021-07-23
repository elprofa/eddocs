import React from 'react'
import { BsLock } from 'react-icons/bs'
import Title from '../../shared/Title'
import CardMin from '../CardMin'
import SectionNosLaboratoireEssais from '../SectionNosLaboratoireEssais'
import SectionNosLaboratoireEtatlonnage from '../SectionNosLaboratoireEtatlonnage'
import CardMinSectionStc from './SectionCardMin.stc'

const CardMinSection = ({letGo}) => {
    return (
        <CardMinSectionStc >
            <div className="container">
                <div className="row py-2 py-md-5">
                    <div className="col-lg-12">
                        <Title partOne="Nos" PartTwo="laboratoires" number={1}/>
                    </div>
                </div>
                <SectionNosLaboratoireEtatlonnage />
                <SectionNosLaboratoireEssais />
            </div>
        </CardMinSectionStc>
       
    )
}


export default CardMinSection
