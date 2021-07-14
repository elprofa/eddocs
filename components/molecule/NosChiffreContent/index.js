import React from 'react'
import { theme } from '../../../theme';
import Title from '../../shared/Title';
import Trait from '../../shared/Trait';
import Texte from '../../shared/Texte';
import NoschiffreContentStc from './NosChiffreContent.stc';


const NoschiffreContent = (props) => {

    const letGo=props.letGo;

    return (
        <NoschiffreContentStc MonStyle={letGo.style}>
            <Title letGo={{
                texte:<span>Nos <b> chiffres</b></span>,
                style:{
                   fontWeight:"400",
                   fontSize:theme.font.headingFontSizes.h1
                }
            }} />
            <Trait letGo={{
                style:{
                    width: "20%",
                    margin: "auto"
                }
            }} />

            <div className="row" style={{marginTop:theme.margins.KingParagraphe}}>
                <div className="col-md-4">
                    <Texte letGo={{
                        texte:"Nos Clients",
                        style:{
                            fontWeight: 600,
                            margin: 0,
                            color:theme.colors.KingBleu
                        }
                    }} />
                     <Title letGo={{
                        texte:1990,
                        style:{
                        fontWeight:"400",
                        color:theme.colors.blackG,
                        fontSize:theme.font.headingFontSizes.h1
                        }
                    }} />
                </div>
                <div className="col-md-4">
                    <Texte letGo={{
                        texte:"Nos Clients",
                        style:{
                            fontWeight: 600,
                            margin: 0,
                            color:theme.colors.KingBleu
                        }
                    }} />
                     <Title letGo={{
                        texte:1990,
                        style:{
                        fontWeight:"400",
                        color:theme.colors.blackG,
                        fontSize:theme.font.headingFontSizes.h1
                        }
                    }} />
                </div>
                <div className="col-md-4">
                    <Texte letGo={{
                        texte:"Nos Clients",
                        style:{
                            fontWeight: 600,
                            margin: 0,
                            color:theme.colors.KingBleu
                        }
                    }} />
                     <Title letGo={{
                        texte:1990,
                        style:{
                        fontWeight:"400",
                        color:theme.colors.blackG,
                        fontSize:theme.font.headingFontSizes.h1
                        }
                    }} />
                </div>
            </div>
        </NoschiffreContentStc>
       
    )
}

export default NoschiffreContent
