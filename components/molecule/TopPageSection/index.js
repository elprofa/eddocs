import React from 'react'
import TopPageSectionStc from './TopPageSection.stc';
import { theme } from '../../../theme';
import Image from '../../shared/Image';
import Title from '../../shared/Title'
import Trait from '../../shared/Trait';

const TopPageSection = (props) => {

    const letGo=props.letGo;

    return (
        <TopPageSectionStc MonStyle={letGo.style}>
            <Image letGo={{
                src:letGo.image,
                style:{
                    width:"100%"
                }
            }} />
            <Title letGo={{
                texte: <span>
                    {letGo.title}
                    <Trait letGo={{
                        style:{
                        width: "20%",
                        margin: "auto",
                        marginTop:theme.margins.KingParagraphe
                    }
                    }} />
                </span>,
                style:{
                    position: "absolute",
                    left: 0,
                    right: 0,
                    zIndex: 999,
                    top:" 215px",
                    textAlign: "center",
                    color: "#fff",
                    fontSize:theme.font.headingFontSizes.h2
                }
            }} />
            
        </TopPageSectionStc>
       
    )
}

export default TopPageSection
