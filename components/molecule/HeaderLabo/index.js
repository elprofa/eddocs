import React from 'react'
import Title from '../../shared/Title'
import HeaderLaboStc from './HeaderLabo.stc'
function HeaderLabo(props) {
    console.log(props)
    return (
        <div className="row py-2 py-md-5">
            <div className="col-md-12">
                <HeaderLaboStc>
                    <Title partOne={props.title.partOne} partTwo={props.title.partTwo} number={1} />
                </HeaderLaboStc>
                <img
                    src={props.img}
                    width="100%"
                    className="my-2 my-md-3"
                />
            </div>
        </div>
    )
}

export default HeaderLabo
