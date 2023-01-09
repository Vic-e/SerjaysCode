import { useParams } from 'react-router-dom'
// eslint-disable-next-line
import SitterData from "../data";
import { Row, Col} from 'react-bootstrap';


export default function SitterPage(props) {
  const { index } = useParams()
  console.log(index)

  return (
    <>
    <main className="pt-3 pb-3">
         <div className="EmpHead">
        </div> 
    
     <img className="SitterIMG" src={SitterData[index].img} alt={SitterData[index].img} />
        <div>
      <h3>{SitterData[index].name}</h3>
      <h5>Age:</h5>
      <p>{SitterData[index].age}</p>
       <h5>Gender:</h5>
      <p>{SitterData[index].gender}</p>
      <h5>Education:</h5>
      <p>{SitterData[index].education}</p>
      <h5>Call Mobile:</h5>
     
      <h5>SMS:</h5>
      <p>{SitterData[index].interest}</p>
      <h5>Email:</h5>
      <p>{SitterData[index].available}</p>
      </div>
      </main>
    </>
  );
}