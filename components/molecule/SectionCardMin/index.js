import React from 'react'
import { BsLock } from 'react-icons/bs'
import { theme } from '../../../theme'
import Title from '../../shared/Title'
import Trait from '../../shared/Trait'
import CardMin from '../CardMin'
import CardMinSectionStc from './SectionCardMin.stc'

const CardMinSection = ({letGo}) => {

    const laboratoires=[
        {
            src:"/img/anemometrie.png",
            texte:"Anemometrie",
            style:{
                width: "170px",
                padding: "10px 20px",
                textAlign: "center",
                boxShadow: "6px 0 30px #ccc",
                margin: "20px",
                display: "inline-block",
                borderRadius: "15px"
            }
        },
        {
            src:"/img/anemometrie.png",
            texte:"Anemometrie",
            style:{
                width: "170px",
                padding: "10px 20px",
                textAlign: "center",
                boxShadow: "6px 0 30px #ccc",
                margin: "20px",
                display: "inline-block",
                borderRadius: "15px"
            }
        }, 
        {
            src:"/img/anemometrie.png",
            texte:"Anemometrie",
            style:{
                width: "170px",
                padding: "10px 20px",
                textAlign: "center",
                boxShadow: "6px 0 30px #ccc",
                margin: "20px",
                display: "inline-block",
                borderRadius: "15px"
            }
        },
    ]

    return (
        <CardMinSectionStc >
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div style={
                            {
                                width:"50%",
                                display: "block",
                                margin:"auto",
                                textAlign:"center"
                            }
                        }>
                        <Title letGo={{
                            texte:<span><b>A propos d'</b> Air métrologie</span>,
                            style:{
                                fontWeight:"400",
                                fontSize:theme.font.headingFontSizes.h3,
                                marginBottom:theme.margins.KingParagraphe,
                                display: "block",
                                margin:"auto",
                                textAlign:"center",
                                marginBottom:theme.margins.KingParagraphe
                            }
                        }} />
                         <Trait letGo={{
                                style:{
                                    marginBottom:theme.margins.KingParagraphe,
                                    display: "block",
                                    margin:"auto",
                                    
                                }
                            }} />
                        </div>
                        {
                            laboratoires.map((labo,index)=><CardMin key={index+"labo"} letGo={labo} />)
                        }
                    </div>
                </div>
            </div>
        </CardMinSectionStc>
       
    )
}


export default CardMinSection
