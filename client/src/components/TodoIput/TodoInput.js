import React, {Component} from 'react';
import {connect} from "react-redux";
import {addTodo} from "../../redux/todo.actions";
import axios from 'axios';


class TodoInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: ''
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const todo = {
            text: this.state.input
        }
        this.props.addTodo(todo.text);
        axios.post(`/api/todos`, { todo })
            .then(res => {
                console.log(res);
            })


    }

    handleChange = (e) => {
        this.setState({
            input: e.target.value
        })
    }


    render() {
        return (
            <div className='todo-input'>
                <form method='post' action='/' onSubmit={(e) => this.handleSubmit(e)}>
                    <input type="text" placeholder='enter todo' name='todo' onChange={this.handleChange}/>
                    <button type='sublit'>Add</button>
                </form>
            </div>
        );
    }


};

const mapDispatchToProps = dispatch => ({
    addTodo: text => dispatch(addTodo(text))
})


export default connect(null, mapDispatchToProps)(TodoInput);
