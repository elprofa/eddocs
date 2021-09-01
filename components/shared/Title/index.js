import React from "react";
import TitleStc from "./Title.stc";
import "bootstrap/dist/css/bootstrap.min.css";

const Title = ({ partOne, partTwo, number, MyclassName, type }) => {
  return (
    <TitleStc className={MyclassName}>
      {type === 1 ? (
        <h1>
          {number === 1 ? (
            <>
              <span>{partOne}</span> {partTwo}
            </>
          ) : (
            <>
              {partOne}
              <span>{partTwo}</span>{" "}
            </>
          )}
        </h1>
      ) : (
        <h2>
          {number === 1 ? (
            <>
              <span>{partOne}</span> {partTwo}
            </>
          ) : (
            <>
              {partOne}
              <span>{partTwo}</span>{" "}
            </>
          )}
        </h2>
      )}
    </TitleStc>
  );
};

export default Title;
