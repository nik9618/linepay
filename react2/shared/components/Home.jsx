import React                  from 'react';
import TodoView              from 'components/TodoView';
import TodoForm              from 'components/TodoForm';
import { bindActionCreators } from 'redux';
import * as TodoActions       from 'actions/TodoActions';
import { connect }            from 'react-redux';

@connect(state => ({ todos: state.todos }))

export default class Home extends React.Component {
	
	static needs = [TodoActions.getTodos];

	render() {
		const { todos, dispatch } = this.props;

		return (
			<div id="todo-list">
				<TodoView todos={todos} {...bindActionCreators(TodoActions, dispatch)} />
				<TodoForm {...bindActionCreators(TodoActions, dispatch)} />
			</div>
		);
	}
}