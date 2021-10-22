import React from 'react';
import TodoItem from './TodoItem';
import { useSelector } from 'react-redux';

const TodoList = () => {
    const todos = useSelector((state) => state.todos);
    // console.log(todos)



	return (
		<ul className='list-group'>
			{todos.map((todo) => (
				<TodoItem key={todo.id+1} id={todo.id} title={todo.title} completed={todo.completed} />
			))}
		</ul>
	);
};

export default TodoList;