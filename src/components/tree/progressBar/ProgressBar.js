import "./ProgressBar.css";
import CircularProgress from "@material-ui/core/CircularProgress";

export default function ProgressBar(props) {
  console.log(props.points);
  if (props.points < 60) {
    let ProgressBar = "";
    props.points
      ? (ProgressBar = (
          <div className="progressBar">
            <div
              className="progress"
              style={{ width: props.points + "%" }}
            ></div>
            <span className="points">{`${props.points}%`}</span>
          </div>
        ))
      : (ProgressBar = (
          <div className="progressBar">
            <CircularProgress className="spinner" size="3vh" />
            Loading...
          </div>
        ));
    return (
      <>
        <h2>Progress</h2>
        {ProgressBar}
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
}
