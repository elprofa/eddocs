import React from "react";
import PresentationStc from "./PresentationCard.stc";
const index = ({ url1,url2="", title="",type="0",className="text-left" }) => {
    if(type==1){
      return(
          <PresentationStc lg={3} className={className}>
            <img src={url1} className="mw-100 rounded-3" style={{maxHeight:"130px"}} />
            <img src={url2} className="mw-100 rounded-3" />
          </PresentationStc>
      )
    }
    else
    {
      return(
        <PresentationStc lg={2} className="text-center">
          <img src={url1} className="mw-100 rounded-3" />
          <h6 className="text-center fw-bold">{title}</h6>
        </PresentationStc>
    )
    }
  
};

export default index;
