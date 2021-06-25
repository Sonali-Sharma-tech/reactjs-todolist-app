
import React from 'react'
class Todo extends React.Component {
    
  render() {
      
        return (
            <div>
                <h4>
                    <p>{this.props.todo.title}</p>
                   <p>{this.props.todo.desc}</p> 
                    <button onClick={() => {this.props.onDelete(this.props.todo)}}>Delete</button>
                </h4>
            </div>
        )
    }
}

export default Todo