import "./GeneralButton.css";

function GeneralButton( { text } : { text : string } ) {
  return (
    <button className="gen-btn">{text}</button>
  )
}

export default GeneralButton;