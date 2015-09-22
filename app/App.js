var React = require("react");
var Immutable = require("immutable")

var TodoItem = React.createClass({
  render: function(){
    this.renderedJson = JSON.stringify(this.props);
    logRender("TodoItem " + this.props.todo.title);
    return <li onClick={() => this.onClick()}>{this.props.todo.title}</li>
  },
  onClick: function(){
    todoStore.addExclamationMark(this.props.index)
  }
})

var TodoList = React.createClass({
  render: function(){
    logRender("TodoList");
    var todos = this.props.todos.map(function(todo, i){
      return <TodoItem todo={todo} index={i} />
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
  renderLog = renderLog.slice(0, 12);
  var html = "<hr>" + renderLog.join("<br>");
  var div = document.getElementById("render-log");
  if (!div){
    return;
  }
  div.innerHTML = html;
}

// A very primitive store
var todoStore = {
  todos: [
    {
      title: "Bake cake"
    }
  ],
  addTodo: function(title){
    this.todos.push({title: title});
    this.onChange();
  },
  addExclamationMark: function(index){

    this.todos[index].title += "!";
    this.onChange();
  },
  onChange: function(){}
}

var App = React.createClass({
  getInitialState: function () {
    return {todos: todoStore.todos};
  },
  componentWillMount: function(){
    todoStore.onChange = () => this.setState({todos: todoStore.todos});
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

    todoStore.addTodo(todoTitle);
  }
});

module.exports = App;
