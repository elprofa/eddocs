import React from 'react'
import { theme } from '../../../theme';
import Title from '../../shared/Title';
import Trait from '../../shared/Trait';
import Texte from '../../shared/Texte';
import NoschiffreContentStc from './NosChiffreContent.stc';


const NoschiffreContent = (props) => {

    const letGo=props.letGo;

    return (
        <NoschiffreContentStc MonStyle={letGo.style} className="py-2 py-md-5">
            <Title partOne="Nos" PartTwo=" chiffres" MyclassName="py-2 py-md-3 chiffre title" number={2} type={1} />
           
            <div className="row py-2 py-md-3">
                <div className="col-md-12">
                    <ul className="ulchiffres px-0 px-md-0 py-3 my-0 px-md-0">
                        <li>
                            
                            <Texte MyclassName="h2 py-2 py-md-0" texte={<><span className="plus">+</span> 20
                            <span className="ans">ans</span>
                            <Texte MyclassName="label mb-0 mb-md-3" texte="Experiences" />
                            </>} />
                        </li>
                        <li>
                           
                            <Texte MyclassName="h2 py-2 py-md-0" texte={<><span className="plus">+</span> 16
                                
                                <Texte MyclassName="label mb-0 mb-md-3" texte="Nos laboratoires" />
                            </>} />
                        </li>
                        <li>
                            
                            <Texte MyclassName="h2 py-2 py-md-0" texte={<> <span className="plus">+</span> 19
                                
                                <Texte MyclassName="label mb-0 mb-md-3" texte="Nos accreditations" />
                            </>} />
                        </li>
                        <li>
                            
                            <Texte MyclassName="h2 py-2 py-md-0" texte={<><span className="plus">+</span> 60
                                
                                <Texte MyclassName="label mb-0 mb-md-3" texte="Nos collaborations" />
                            </>} />
                        </li>
                        <li>
                           
                            <Texte MyclassName="h2 py-2 py-md-0" texte={<><span className="plus">+</span> 500
                                
                            <Texte MyclassName="label mb-0 mb-md-3" texte="Nos clients" />
                            </>} />
                        </li>
                        
                    </ul>
                </div>
                
            </div>
        </NoschiffreContentStc>
       
    )
}

export default NoschiffreContent
