import React from 'react'
import { BsLock } from 'react-icons/bs'
import Title from '../../shared/Title'
import CardMin from '../CardMin'
import CardMinSectionStc from './SectionCardMin.stc'

const CardMinSection = ({letGo}) => {

    const laboratoires=[
        {
            src:"/img/anemometrie.png",
            texte:"Anemometrie",
        },
    ]

    return (
        <CardMinSectionStc >
            <div className="container">
                <div className="row py-2 py-md-5">
                    <div className="col-lg-12">
                        <div className="" style={
                            {
                                width:"50%",
                                display: "block",
                                margin:"auto",
                                textAlign:"center",
                                marginBottom:"40px"
                            }
                        }>

                        <Title partOne="Nos" PartTwo="laboratoires" number={1}/>
                        
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
