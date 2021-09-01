import React from 'react'
import Title from '../../shared/Title'

function HeaderLabo(props) {
    console.log(props)
    return (
        <div className="row py-2 py-md-5">
            <div className="col-md-12">
                <Title partOne={props.title.partOne} partTwo={props.title.partTwo} number={1} />
            
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
