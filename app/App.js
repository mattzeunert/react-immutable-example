var React = require('react');

var App = React.createClass({
  getInitialState: function () {
    return {
      todos: [{
          title: "Bake cake"
      }]
    };
  },
  addMessage: function (event) {
    event.preventDefault();
    var input = this.refs.newMessage.getDOMNode();
    actions.addMessage(input.value);
    this.setState({
      newMessage: ''
    });
  },
  updateNewMessage: function (event) {
    this.setState({
      newMessage: event.target.value
    });
  },
  renderMessages: function (message) {
    return (
      <div>{message}</div>
    );
  },
	render: function() {
    var todos = this.state.todos.map(function(todo){
      return <li>{todo.title}</li>
    });
		return (
			<div>
        {todos}
      </div>
		);
	}

});

module.exports = App;
