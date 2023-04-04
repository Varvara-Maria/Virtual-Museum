
import { useNavigate} from "react-router-dom";
import './GoBack.scss'

export const GoBack = () => {
    let navigate = useNavigate();
    return (
        <div>
          <button className='go-back' onClick={() => navigate(-1)}><i class="fa-sharp fa-solid fa-arrow-left"></i></button> 
        </div>
    );
};