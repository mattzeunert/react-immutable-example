var React = require('react');

var TodoItem = React.createClass({
  // shouldComponentUpdate: function(newProps){
  //   return this.renderedJson !== JSON.stringify(newProps);
  // },
  render: function(){
    this.renderedJson = JSON.stringify(this.props);
    logRender("TodoItem " + this.props.todo.title);
    return <li>{this.props.todo.title}</li>
  }
})

var TodoList = React.createClass({
  render: function(){
    logRender("TodoList");
    var todos = this.props.todos.map(function(todo){
      return <TodoItem todo={todo}/>
    });
    return <ul>
      {{todos}}
    </ul>
  }
})

var renderLog = [];
function logRender(componentName){
  if (componentName){
    renderLog.unshift("Render: " + componentName);
  } else {
    renderLog.unshift("<hr>")
  }
  renderLog = renderLog.slice(0, 10);
  var html = "<hr>" + renderLog.join("<br>");
  var div = document.getElementById("render-log");
  if (!div){
    return;
  }
  div.innerHTML = html;
}

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
    logRender(null);;
    logRender("App");
		return (
			<div>
        <TodoList todos={this.state.todos}/>
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
    this.setState(this.state); // We're mutating the original todos list, so we just need to tell React that the state has changed.
  }
});

module.exports = App;
