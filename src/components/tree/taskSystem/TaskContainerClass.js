import axios from "axios";
import { Component } from "react";
import Task from "./Task";


export default class TaskContainerClass extends Component {
    state = {
        id: this.props.id,
        tasks: [],
        itemsCompleted: 0,
        currentName: "",
    };

    componentDidMount() {
        fetch(`http://localhost:4000/getTasks/${this.state.id}`)
        .then((res) => res.json())
        .then((data) => this.setState({
            tasks: data,
        }))
    }

    componentWillUnmount() {
        axios.post(`http://localhost:4000/setTasks/${this.state.id}`, {
            tasks: this.state.tasks,
            itemsCompleted: 0,
        }).then((res) => console.log(res));
    }

    showTasks() {
        return this.state.tasks.map((task, index) => (
            <Task className="task" name={task.name} completed={task.completed} key={index} />  
    ))};

    addTask = () => {
        let newTaskName = this.state.currentName;
        this.setState({
            currentName: "",
        })
		let newTask = {
			name: newTaskName,
			parentId: this.state.id,
			completed: false,
		};
		let newTasks = [...this.state.tasks, newTask];
		this.setState({
            tasks: newTasks,
        })
		
    }

    handleChange = (event) => {
        this.setState({
            currentName: event.target.value,
        })
    }

    render() {
        return (
            <div className="Tasks">
			<div className="inputContainer">
				<input
					placeholder="What're you working on?"
                    className="taskInput"
                    value={this.state.currentName}
                    onChange={this.handleChange}
				></input>
				<input
					className="submitTask"
					onClick={this.addTask}
					type="button"
					value="Submit"
				/>
			</div>
			<div className="taskContainer">
				<div>
					{this.showTasks()}
				</div>
			</div>
		</div>
        )
    }
}