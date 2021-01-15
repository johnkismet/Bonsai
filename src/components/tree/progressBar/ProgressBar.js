import "./ProgressBar.css";
<<<<<<< HEAD
import CircularProgress from "@material-ui/core/CircularProgress";

export default function ProgressBar(props) {
  console.log(props.points);
  if (props.points < 60) {
    return (
      <>
        <h2>Progress</h2>
        {props.points ? (
          <>
            <div className="progressBar">
              <div
                className="progress"
                style={{ width: props.points + "%" }}
              ></div>
              <span className="points">{`${props.points}%`}c</span>
            </div>
        ) : (
          <div className="progressBar">
            <CircularProgress className="spinner" size="3vh" />
            Loading...
          </div>
        )}
      </>
    );
  } else {
    console.log("smol");
    return (
      <>
        <h2>Progress</h2>
        {props.points ? (
          <>
            <div className="progressBar">
              <div className="progress" style={{ width: props.points + "%" }}>
                <span className="points">{`${props.points}%`}</span>
              </div>
            </div>
          </>
        ) : (
          <div className="progressBar">
            <CircularProgress className="spinner" size="3vh" />
            Loading...
          </div>
        )}
      </>
    );
  }
=======

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
>>>>>>> c11faf7... added progress bar
}
