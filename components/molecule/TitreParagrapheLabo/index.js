import Title from "../../shared/Title";
import Trait from "../../shared/Trait";
import Texte from "../../shared/Texte";

const TitreParagrapheLabo=(props)=>{
    return(
        <>
            <Title
              partOne={props.title.partOne}
              PartTwo={props.title.partTwo}
              number={1}
              className={props.title.className}
            />

            <Texte
              texte={props.paragraphe.texte}
              MyclassName="my-2 my-md-3"
            />
        </>
    )
}

export default TitreParagrapheLabo;