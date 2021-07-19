import React from "react";
import Title from "./newttitle.stc";
const NewTitle = (props) => {
  const { partOne, partTwo, number } = props;
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
      {console.log(props.theme)}
    </Title>
  );
};

export default NewTitle;
