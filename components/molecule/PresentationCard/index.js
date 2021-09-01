import React from "react";
import PresentationStc from "./PresentationCard.stc";
const index = ({ url1,url2="", title="",type="0",className="text-left",style={}}) => {
  console.log(style)
    if(type==1){
      return(
          <PresentationStc className={className} style={style}>
            <img src={url1} className="mw-100 rounded-3" style={{maxHeight:"70px"}} />
            <img src={url2} className="mw-100 rounded-3" style={{maxHeight:"70px"}} />
          </PresentationStc>
      )
    }
    else if(type==3){
      return(
        <PresentationStc lg={2} className="text-center" style={{width:"100%"}}>
          <img src={url1} className="mw-100 rounded-3" />
          <h6 className="text-center fw-bold">{title}</h6>
        </PresentationStc>
      )
    }
    else if(type==4){
      return(
        <PresentationStc lg={3} md={3} className="text-center align-self-center" >
          <img src={url1} className="mw-100 rounded-3" style={{maxHeight:"200px",margin:"auto",display:"block"}} />
          <h6 className="text-center fw-bold">{title}</h6>
        </PresentationStc>
      )
    }
    else if(type==5){
      return(
        <PresentationStc lg={6} md={6} className="text-center align-self-center" >
          <img src={url1} className="mw-100 rounded-3" style={{maxHeight:"200px",margin:"auto",display:"block"}} />
          <h6 className="text-center fw-bold">{title}</h6>
        </PresentationStc>
      )
    }
    else
    {
      return(
        <PresentationStc lg={2} className="text-center" >
          <img src={url1} className="mw-100 rounded-3" />
          <h6 className="text-center fw-bold">{title}</h6>
        </PresentationStc>
    )
    }
  
};

export default index;
