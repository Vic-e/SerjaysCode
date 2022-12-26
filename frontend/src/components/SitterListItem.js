import { Link } from "react-router-dom";


export default function SitterListItem({index, name, age, img }) {

    return (
    <Link to={`/sitter/${index}`}>
      <div className="Sitter">
        
        <img src={img} className="list-img" alt={img} />
        
        <div className="content">
        <h5 className="list-name">{name}</h5>
        <p className="list-title">{age}</p>
        </div>
      </div>
      </Link>
    );
  }