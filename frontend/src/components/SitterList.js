import SitterListItem from "./SitterListItem";
import SitterData from "../data";


const sitters = SitterData.map((ele, index) => {
  return (

  <SitterListItem key={index} {...ele} />

  );
});
export default function SitterList(props) {
  return (
    <div className="size1">
      {sitters} 
    </div>
  );
}