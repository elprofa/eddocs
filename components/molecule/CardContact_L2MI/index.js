import React from "react";
import CardConractLMStc from "./ContactL2mi.stc";
import Image from "../../shared/Image";
import { FaBuilding, FaMapMarkerAlt, FaMapMarkedAlt } from 'react-icons/fa';
import { MdPhone, MdEmail } from 'react-icons/md';

const CardConractLM = (props) => {
  return (
    <CardConractLMStc>
      <div className="text-center background-card p-4 w-75 h-100 mx-auto mt-3 mt-md-0">
        <div className="text-center">
          <Image letGo={{ src: "/img/go.png" }} />
        </div>
        <div className="text-center">
            Siège:
        </div>
        <div className="ml-5 text-left mb-2">
            <FaBuilding size={15}/> Lot Asta Immeuble A 4eme Etage N° 15 & 16 Bd Chefchaouni,
Aîn Sebâa - Casablanca
        </div>
        <div className="ml-5 text-left mb-2">
          <FaMapMarkerAlt size={15}/> Laboratoire Casablanca: N°12 & 14 Lotissement MAURITANIA Q.I SIDI BERNOUSSI - Casablanca
MAROC
        </div>
        <div className="ml-5 text-left mb-2">
            <FaMapMarkedAlt size={15}/> Laboratoire Tanger: TFZ LT 38C, ET1, BU20 90000 - Tanger
        </div>
        <div className="ml-5 mb-2 text-left">
            <MdPhone size={15}/> Tél: +212 522 356 003 / +212 522 352 744
        </div>
        <div className="ml-5 text-left">
            <MdEmail size={15}/> am.contact@groupe-airmetrologie-l2mi.com
        </div>
      </div>
    </CardConractLMStc>
  );
};
export default CardConractLM;
