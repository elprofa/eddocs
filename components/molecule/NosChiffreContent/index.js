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
                            <Texte MyclassName="label mb-0 mb-md-3" texte="Experiences" />
                            <Texte MyclassName="h2 py-2 py-md-0" texte={<> 20<span className="plus">+</span>
                            <span className="ans">ans</span>
                            </>} />
                        </li>
                        <li>
                            <Texte MyclassName="label mb-0 mb-md-3" texte="Nos laboratoires" />
                            <Texte MyclassName="h2 py-2 py-md-0" texte={<> 16
                                <span className="plus">+</span>
                                
                            </>} />
                        </li>
                        <li>
                            <Texte MyclassName="label mb-0 mb-md-3" texte="Nos accreditations" />
                            <Texte MyclassName="h2 py-2 py-md-0" texte={<> 19
                                <span className="plus">+</span>
                                
                            </>} />
                        </li>
                        <li>
                            <Texte MyclassName="label mb-0 mb-md-3" texte="Nos collaborations" />
                            <Texte MyclassName="h2 py-2 py-md-0" texte={<> 60
                                <span className="plus">+</span>
                                
                            </>} />
                        </li>
                        <li>
                            <Texte MyclassName="label mb-0 mb-md-3" texte="Nos clients" />
                            <Texte MyclassName="h2 py-2 py-md-0" texte={<> 500
                                <span className="plus">+</span>
                                
                            </>} />
                        </li>
                        
                    </ul>
                </div>
                
            </div>
        </NoschiffreContentStc>
       
    )
}

export default NoschiffreContent
