import "./ProgressBar.css";
import CircularProgress from "@material-ui/core/CircularProgress";

export default function ProgressBar(props) {
  console.log(props.points);
  return (
    <>
      <h2>Progress</h2>
      {props.points ? (
        <div className="progressBar">
          <div className="progress" style={{ width: props.points + "%" }}></div>
          {`${props.points}%`}
        </div>
      ) : (
        <div className="progressBar">
          <CircularProgress className="spinner" size="3vh"/>
          Loading...
        </div>
      )}
    </>
  );
}
