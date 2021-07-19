import { Row, Col } from 'reactstrap';
import Title from '../../shared/Title';
import Paragraphe from '../../shared/Paragraphe';
import LastSectContactStc from './LastSectContact.stc';
 

const LastSectContact = () => {
       

  return (
      <LastSectContactStc>
        <div className="col-md-10 offset-md-2 row align-items-center mt-1">
            <div className="col-sm-6 align-items-center h-100">
                Map
            </div>

            <div className="col-sm-6 align-items-center h-100 mb-3 background:red">
                     Paragraphe   
            </div>
        </div>
      </LastSectContactStc>
  )
}

export default LastSectContact;