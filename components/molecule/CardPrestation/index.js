import React from 'react'
import {BsSliders} from 'react-icons/bs'

function CardPrestation(props) {
    return (
        <div className="row my-4 w-100 mx-0" style={{margin: "0px",boxShadow: "6px 6px 6px #ccc"}}>
            <div className="col-1 col-sm-1 align-self-center">
                <span style={{color:"#ff0000",fontSize:"20px"}}><BsSliders /></span>
            </div>
            <div className="col-11 col-sm-11">
                <span className="p-1 px-2 w-100 "  style={{fontWeight:"bold",color:"blue",width:"100%",border:"0px !important"}}>{props.texte} </span>
            </div>
        </div>
    )
}

export default CardPrestation
