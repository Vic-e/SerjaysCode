import { useParams } from 'react-router-dom'
// eslint-disable-next-line
import SitterData from "../data";


export default function SitterPage(props) {
  const { index } = useParams()
  console.log(index)

  return (
    <div>
        sitter page
         <div className="EmpHead">
        </div> 
     <img className="SitterIMG" src={SitterData[index].img} alt={SitterData[index].img} />
        <div>
      <p className="EmpName">{SitterData[index].name}</p>
      <h3>Age:</h3>
      <p>{SitterData[index].age}</p>
       <h3>Gender:</h3>
      <p>{SitterData[index].gender}</p>
      <h3>Education:</h3>
      <p>{SitterData[index].education}</p>
      <h3>Call Mobile</h3>
     
      <h3>SMS</h3>
      <p>{SitterData[index].interest}</p>
      <h3>Email</h3>
      <p>{SitterData[index].available}</p>
      </div>
        
    </div>
  );
}