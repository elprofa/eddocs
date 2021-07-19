import React from "react";
import Title from "./newttitle.stc";
const NewTitle = ({ partOne, partTwo, number }) => {
  return (
    <Title>
      <h2>
        {number === 1 ? (
          <>
            <span>{partOne}</span> {partTwo}
          </>
        ) : (
          <>
            {partOne} <span> {partTwo}</span>
          </>
        )}
      </h2>
    </Title>
  );
};

export default NewTitle;
