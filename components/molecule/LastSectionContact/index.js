import { Row, Col } from 'reactstrap';
import Title from '../../shared/Title';
import Paragraphe from '../../shared/Paragraphe';
import LastSectContactStc from './LastSectContact.stc';
import CardAdress from '../CardAdress';
 

const LastSectContact = () => {
       

  return (
      <LastSectContactStc>
        <div className="col-md-12 mx-auto row align-items-center">
            <div className="col-sm-6 align-items-center h-100 bg-warning">
                Map
            </div>

            <div className="col-sm-6 align-items-center h-100">
                <CardAdress/>   
            </div>
        </div>
      </LastSectContactStc>
  )
}

export default LastSectContact;