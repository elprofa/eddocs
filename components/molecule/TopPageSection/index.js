import React from 'react'
import TopPageSectionStc from './TopPageSection.stc';
import Image from 'next/image';
import Title from '../../shared/Title'

const TopPageSection = (props) => {

    const letGo=props.letGo;

    return (
        <TopPageSectionStc >
            <div className="div_image">
                <img src={letGo.image} width="100%" height="auto" />
            </div>
            <Title partOne={letGo.title} PartTwo="" MyclassName="title" number={1} />
            
        </TopPageSectionStc>
       
    )
}

export default TopPageSection
