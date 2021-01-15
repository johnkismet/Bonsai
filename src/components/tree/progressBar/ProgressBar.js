import "./ProgressBar.css";

export default function ProgressBar(props) {
    console.log(props.points)
  return (
      
    <>
      <h2>Progress</h2>
      <div className="progressBar">
      
        <div className="progress" style={{"width": props.points + "%"}}></div>
        {`${props.points}%`}
      </div>
    </>
  );
}
