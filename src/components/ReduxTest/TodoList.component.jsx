import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo.component';

const TodoList = ({todos, onTodoClick}) => (
    <ul>
        {todos.map((todo, index) => {
            <Todo key={index} {...todo} onClick={() => onTodoClick(index)} />
        })}
    </ul>
)

TodoList.propTypes = {
    onTodoClick: PropTypes.func.isRequired,
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            completed: PropTypes.bool.isRequired,
            text: PropTypes.string.isRequired
        })
    )
}

export default TodoList