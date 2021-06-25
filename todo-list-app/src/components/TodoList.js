
import React from 'react'
import Todo from './Todo'

class TodoList extends React.Component {
   
render() {
    console.log(this.props)
    return (
        <>

        <div className="show-list">
            <h3>Todo List</h3>
            {this.props.allTodos !== undefined ?  this.props.allTodos.map((todo) => {
                return(<>
                     <Todo todo={todo} key={todo.sno} onDelete={this.props.onDelete}/>
                    <hr />
                    </>)
            }) : "No Todos to display"}
            
        </div>
        </>
    )
}
}

export default TodoList
