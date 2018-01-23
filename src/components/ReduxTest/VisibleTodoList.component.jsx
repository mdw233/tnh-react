import { connect } from 'react-redux';
import TodoList from './TodoList.component';

//this is a function that we're going to pass various parts of the
//state to and have it return the value we want to send down to the presentational 
//component as a prop
const getVisibleTodos = (todos, filter) => {
    switch(filter) {
        case 'SHOW_COMPLETED':
            return todos.filter(t => t.completed);
        case 'SHOW_ACTIVE':
            return todos.filter(t => !t.completed);
        case 'SHOW_ALL':
        default:
            return todos;
    }
}

const mapStateToProps = state => {
    return {
        todos: getVisibleTodos(state.todos, state.visibilityFilter)
    }
}


const mapDispatchToProps = dispatch => {
    return { 
        onToDoClicl: id => {
            dispatch(toggleTodo(id));
        }
    }
}

const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)