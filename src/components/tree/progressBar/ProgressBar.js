import "./ProgressBar.css";
import CircularProgress from "@material-ui/core/CircularProgress";

export default function ProgressBar(props) {
    if (props.points === 0) {
        return (
			<>
				<h2>Progress</h2>
				{props.points === 0 ? (
					<>
						<div className="progressBar">
							<span className="points">{`${props.points}%`}</span>
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
							<span className="points">{`${props.points}%`}</span>
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
	} else {
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
