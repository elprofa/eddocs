import React from "react";
import CardCtznStc from "./CardCtzn.stc";
import Image from "../../shared/Image";
import { FaBuilding, FaMapMarkerAlt, FaMapMarkedAlt } from 'react-icons/fa';
import { MdPhone, MdEmail } from 'react-icons/md';
import "bootstrap/dist/css/bootstrap.min.css";


const CardCtzn = (props) => {
  return (
    <CardCtznStc>
      <div className="background-card p-4 w-75 h-100 mx-auto and-un">
        <div className="text-center">
          <Image letGo={{ src: "/img/lo.png" }} />
        </div>
        <div className="text-center">
            Siège:
        </div>
        <div className="ml-5 mb-2">
            <FaBuilding size={15}/> Bd Chefchaouni KM 8.5 Porte B, 1 er Etage Appt 3
              Aîn Sebâa – Casablanca
        </div>
        <div className="ml-5 mb-2">
            <FaMapMarkerAlt size={15}/> N°12 Lotissement MAURITANIA Q.I SIDI BERNOUSSI - Casablanca MAROC
        </div>
        <div className="ml-5 mb-2">
            <FaMapMarkedAlt size={15}/> Laboratoire Tanger:
TFZ LT 38C, ET1, BU20 90000 - Tanger
        </div>
        <div className="ml-5 mb-2">
            <MdPhone size={15}/> Tél: +212 522 356 003 / +212 522 352 744
        </div>
        <div className="ml-5">
            <MdEmail size={15}/> am.contact@groupe-airmetrologie-l2mi.com
        </div>
      </div>
    </CardCtznStc>
  );
};
export default CardCtzn;
