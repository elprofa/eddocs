import React from "react";
import CardAdressStc from "./CardAdress.stc";
import Paragraphe from "../../shared/Paragraphe";
import Title from "../../shared/Title";

const CardAdress = (props) => {
  return (
    <CardAdressStc>
      <div className="background-card p-4 w-75 h-100 mx-auto">
        <div className="text-center">
          <Title
              coulor="#000"
              text__transform="text-capitalize"
              weight="lighter"
              font__size="xlarger"
              text={
                <span>
                  Notre <strong>Adresses ?</strong>
                </span>
              }
            />
        </div>

        <div className="text-center">
          <Paragraphe
              coulor="#000"
              weight="100px"
              text={
                <span>
                  Adresse siège.<br></br>
                  Bd Chefchaouni KM 8.5 Porte B, 1 er Etage Appt 3<br></br>
                  Aîn sebaâ - Casablanca
                </span>
              }
            />
        </div>       
      </div>
    </CardAdressStc>
  );
};
export default CardAdress;
