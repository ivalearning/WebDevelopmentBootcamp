import Avatar from "./Avatar";
import Detail from "./Detail";


function Card(props) {
  return (    
      <div className="card">
        <div className="top">
          <h2 className="name">{props.name}</h2>
          <Avatar img src={props.src}/>
        </div>
        <div className="bottom">
            <Detail info={props.phone} />
            <Detail info={props.email} />
            <Detail info={props.id} />
        </div>
      </div>    
  );
}

export default Card;