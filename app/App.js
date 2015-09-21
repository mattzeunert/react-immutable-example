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
        <form onSubmit={(e) => this.onSubmit(e)}>
          <input type="text" ref="input"/>
        </form>
      </div>
		);
	},
  onSubmit: function(e){
    e.preventDefault();
    var input = React.findDOMNode(this.refs.input);
    var todoTitle = input.value;
    input.value = "";

    var todos = this.state.todos;
    todos.push({title: todoTitle})
    this.setState(this.state); // We're mutating the original todos list, so we just need to tell react that the state has changed.
  }
});

module.exports = App;
