import './Card.css';
function Card(props) {
  // any classNames used in card tag can be processed
  const classes = "card " + props.className;
  // children is content between opening and closing inside the card
  return <div className={classes}>{props.children}</div>;
}

export default Card;