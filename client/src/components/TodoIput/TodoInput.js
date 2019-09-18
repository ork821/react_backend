import React, {Component} from 'react';
import {Input, Button} from "@material-ui/core";

class TodoInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: ''
        }
    }

    handleSubmit = () => {
        const {input} = this.state

    }

    handleChange = (e) => {
        this.setState({
            input: e.target.value
        })
    }


    render() {
        return (
            <div className='todo-input'>
                <form method='post' onSubmit={this.handleSubmit}>
                    <input type="text" placeholder='enter todo' onChange={this.handleChange}/>
                    <button type='sublit'>Add</button>
                </form>
            </div>
        );
    }


};

export default TodoInput;
