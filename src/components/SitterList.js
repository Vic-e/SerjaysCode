import SitterListItem from "./SitterListItem";
import SitterData from "../data";
import { Link } from "react-router-dom";

const sitters = SitterData.map((ele, index) => {
  return (

  <SitterListItem key={index} {...ele} />

  );
});
export default function SitterList(props) {
  return (
    <div>
        <section className="lists">{sitters} </section>
    </div>
  );
}