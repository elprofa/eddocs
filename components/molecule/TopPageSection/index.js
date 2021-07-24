import React from 'react'
import TopPageSectionStc from './TopPageSection.stc';
import Image from 'next/image';
import Title from '../../shared/Title'
import IconGrille from '../IconGrille';

const TopPageSection = (props) => {

    const letGo=props.letGo;
    const iconGrille1=letGo.iconGrille;

    return (
        <TopPageSectionStc >
            <div className="div_image">
                <img src={letGo.image} width="100%" height="auto" />
            </div>
            <Title partOne={letGo.title} PartTwo="" MyclassName="title" number={1} type={1} />
            {
                iconGrille1===1?<> <IconGrille position={1}  /></>:<> <IconGrille position={1} topHeader="right" /></>
            }
           
        </TopPageSectionStc>
       
    )
}

export default TopPageSection
