(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/Users/mattzeunert/Google Drive/projects/blg-react-immutable/app/App.js":[function(require,module,exports){
"use strict";

var React = require('react');

var TodoItem = React.createClass({
  displayName: "TodoItem",

  // shouldComponentUpdate: function(newProps){
  //   return this.renderedJson !== JSON.stringify(newProps);
  // },
  render: function render() {
    this.renderedJson = JSON.stringify(this.props);
    logRender("TodoItem " + this.props.todo.title);
    return React.createElement(
      "li",
      null,
      this.props.todo.title
    );
  }
});

var TodoList = React.createClass({
  displayName: "TodoList",

  render: function render() {
    logRender("TodoList");
    var todos = this.props.todos.map(function (todo) {
      return React.createElement(TodoItem, { todo: todo });
    });
    return React.createElement(
      "ul",
      null,
      { todos: todos }
    );
  }
});

var renderLog = [];
function logRender(componentName) {
  if (componentName) {
    renderLog.unshift("Render: " + componentName);
  } else {
    renderLog.unshift("<hr>");
  }
  renderLog = renderLog.slice(0, 10);
  var html = "<hr>" + renderLog.join("<br>");
  var div = document.getElementById("render-log");
  if (!div) {
    return;
  }
  div.innerHTML = html;
}

var App = React.createClass({
  displayName: "App",

  getInitialState: function getInitialState() {
    return {
      todos: [{
        title: "Bake cake"
      }]
    };
  },
  addMessage: function addMessage(event) {
    event.preventDefault();
    var input = this.refs.newMessage.getDOMNode();
    actions.addMessage(input.value);
    this.setState({
      newMessage: ''
    });
  },
  updateNewMessage: function updateNewMessage(event) {
    this.setState({
      newMessage: event.target.value
    });
  },
  renderMessages: function renderMessages(message) {
    return React.createElement(
      "div",
      null,
      message
    );
  },
  render: function render() {
    var _this = this;

    logRender(null);;
    logRender("App");
    return React.createElement(
      "div",
      null,
      React.createElement(TodoList, { todos: this.state.todos }),
      React.createElement(
        "form",
        { onSubmit: function (e) {
            return _this.onSubmit(e);
          } },
        React.createElement("input", { type: "text", ref: "input" })
      )
    );
  },
  onSubmit: function onSubmit(e) {
    e.preventDefault();
    var input = React.findDOMNode(this.refs.input);
    var todoTitle = input.value;
    input.value = "";

    var todos = this.state.todos;
    todos.push({ title: todoTitle });
    this.setState(this.state); // We're mutating the original todos list, so we just need to tell React that the state has changed.
  }
});

module.exports = App;

},{"react":"react"}],"/Users/mattzeunert/Google Drive/projects/blg-react-immutable/app/main.js":[function(require,module,exports){
'use strict';

var React = require('react');
var App = require('./App.js');
React.render(React.createElement(App, null), document.getElementById("app"));

},{"./App.js":"/Users/mattzeunert/Google Drive/projects/blg-react-immutable/app/App.js","react":"react"}]},{},["/Users/mattzeunert/Google Drive/projects/blg-react-immutable/app/main.js"])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvbWF0dHpldW5lcnQvR29vZ2xlIERyaXZlL3Byb2plY3RzL2JsZy1yZWFjdC1pbW11dGFibGUvYXBwL0FwcC5qcyIsIi9Vc2Vycy9tYXR0emV1bmVydC9Hb29nbGUgRHJpdmUvcHJvamVjdHMvYmxnLXJlYWN0LWltbXV0YWJsZS9hcHAvbWFpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUEsSUFBSSxLQUFLLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDOztBQUU3QixJQUFJLFFBQVEsR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDOzs7Ozs7QUFJL0IsUUFBTSxFQUFFLGtCQUFVO0FBQ2hCLFFBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDL0MsYUFBUyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUMvQyxXQUFPOzs7TUFBSyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLO0tBQU0sQ0FBQTtHQUN4QztDQUNGLENBQUMsQ0FBQTs7QUFFRixJQUFJLFFBQVEsR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDOzs7QUFDL0IsUUFBTSxFQUFFLGtCQUFVO0FBQ2hCLGFBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUN0QixRQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsVUFBUyxJQUFJLEVBQUM7QUFDN0MsYUFBTyxvQkFBQyxRQUFRLElBQUMsSUFBSSxFQUFFLElBQUksQUFBQyxHQUFFLENBQUE7S0FDL0IsQ0FBQyxDQUFDO0FBQ0gsV0FBTzs7O01BQ0osRUFBQyxLQUFLLEVBQUwsS0FBSyxFQUFDO0tBQ0ws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RyxHQUFHLENBQUM7Ozs7O0FDM0ZyQixJQUFJLEtBQUssR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDN0IsSUFBSSxHQUFHLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQzlCLEtBQUssQ0FBQyxNQUFNLENBQUMsb0JBQUMsR0FBRyxPQUFFLEVBQUUsUUFBUSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsInZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBUb2RvSXRlbSA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgLy8gc2hvdWxkQ29tcG9uZW50VXBkYXRlOiBmdW5jdGlvbihuZXdQcm9wcyl7XG4gIC8vICAgcmV0dXJuIHRoaXMucmVuZGVyZWRKc29uICE9PSBKU09OLnN0cmluZ2lmeShuZXdQcm9wcyk7XG4gIC8vIH0sXG4gIHJlbmRlcjogZnVuY3Rpb24oKXtcbiAgICB0aGlzLnJlbmRlcmVkSnNvbiA9IEpTT04uc3RyaW5naWZ5KHRoaXMucHJvcHMpO1xuICAgIGxvZ1JlbmRlcihcIlRvZG9JdGVtIFwiICsgdGhpcy5wcm9wcy50b2RvLnRpdGxlKTtcbiAgICByZXR1cm4gPGxpPnt0aGlzLnByb3BzLnRvZG8udGl0bGV9PC9saT5cbiAgfVxufSlcblxudmFyIFRvZG9MaXN0ID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICByZW5kZXI6IGZ1bmN0aW9uKCl7XG4gICAgbG9nUmVuZGVyKFwiVG9kb0xpc3RcIik7XG4gICAgdmFyIHRvZG9zID0gdGhpcy5wcm9wcy50b2Rvcy5tYXAoZnVuY3Rpb24odG9kbyl7XG4gICAgICByZXR1cm4gPFRvZG9JdGVtIHRvZG89e3RvZG99Lz5cbiAgICB9KTtcbiAgICByZXR1cm4gPHVsPlxuICAgICAge3t0b2Rvc319XG4gICAgPC91bD5cbiAgfVxufSlcblxudmFyIHJlbmRlckxvZyA9IFtdO1xuZnVuY3Rpb24gbG9nUmVuZGVyKGNvbXBvbmVudE5hbWUpe1xuICBpZiAoY29tcG9uZW50TmFtZSl7XG4gICAgcmVuZGVyTG9nLnVuc2hpZnQoXCJSZW5kZXI6IFwiICsgY29tcG9uZW50TmFtZSk7XG4gIH0gZWxzZSB7XG4gICAgcmVuZGVyTG9nLnVuc2hpZnQoXCI8aHI+XCIpXG4gIH1cbiAgcmVuZGVyTG9nID0gcmVuZGVyTG9nLnNsaWNlKDAsIDEwKTtcbiAgdmFyIGh0bWwgPSBcIjxocj5cIiArIHJlbmRlckxvZy5qb2luKFwiPGJyPlwiKTtcbiAgdmFyIGRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVuZGVyLWxvZ1wiKTtcbiAgaWYgKCFkaXYpe1xuICAgIHJldHVybjtcbiAgfVxuICBkaXYuaW5uZXJIVE1MID0gaHRtbDtcbn1cblxudmFyIEFwcCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgZ2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRvZG9zOiBbe1xuICAgICAgICAgIHRpdGxlOiBcIkJha2UgY2FrZVwiXG4gICAgICB9XVxuICAgIH07XG4gIH0sXG4gIGFkZE1lc3NhZ2U6IGZ1bmN0aW9uIChldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdmFyIGlucHV0ID0gdGhpcy5yZWZzLm5ld01lc3NhZ2UuZ2V0RE9NTm9kZSgpO1xuICAgIGFjdGlvbnMuYWRkTWVzc2FnZShpbnB1dC52YWx1ZSk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBuZXdNZXNzYWdlOiAnJ1xuICAgIH0pO1xuICB9LFxuICB1cGRhdGVOZXdNZXNzYWdlOiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIG5ld01lc3NhZ2U6IGV2ZW50LnRhcmdldC52YWx1ZVxuICAgIH0pO1xuICB9LFxuICByZW5kZXJNZXNzYWdlczogZnVuY3Rpb24gKG1lc3NhZ2UpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj57bWVzc2FnZX08L2Rpdj5cbiAgICApO1xuICB9LFxuXHRyZW5kZXI6IGZ1bmN0aW9uKCkge1xuICAgIGxvZ1JlbmRlcihudWxsKTs7XG4gICAgbG9nUmVuZGVyKFwiQXBwXCIpO1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2PlxuICAgICAgICA8VG9kb0xpc3QgdG9kb3M9e3RoaXMuc3RhdGUudG9kb3N9Lz5cbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9eyhlKSA9PiB0aGlzLm9uU3VibWl0KGUpfT5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiByZWY9XCJpbnB1dFwiLz5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgPC9kaXY+XG5cdFx0KTtcblx0fSxcbiAgb25TdWJtaXQ6IGZ1bmN0aW9uKGUpe1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB2YXIgaW5wdXQgPSBSZWFjdC5maW5kRE9NTm9kZSh0aGlzLnJlZnMuaW5wdXQpO1xuICAgIHZhciB0b2RvVGl0bGUgPSBpbnB1dC52YWx1ZTtcbiAgICBpbnB1dC52YWx1ZSA9IFwiXCI7XG5cbiAgICB2YXIgdG9kb3MgPSB0aGlzLnN0YXRlLnRvZG9zO1xuICAgIHRvZG9zLnB1c2goe3RpdGxlOiB0b2RvVGl0bGV9KVxuICAgIHRoaXMuc2V0U3RhdGUodGhpcy5zdGF0ZSk7IC8vIFdlJ3JlIG11dGF0aW5nIHRoZSBvcmlnaW5hbCB0b2RvcyBsaXN0LCBzbyB3ZSBqdXN0IG5lZWQgdG8gdGVsbCBSZWFjdCB0aGF0IHRoZSBzdGF0ZSBoYXMgY2hhbmdlZC5cbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gQXBwO1xuIiwidmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbnZhciBBcHAgPSByZXF1aXJlKCcuL0FwcC5qcycpO1xuUmVhY3QucmVuZGVyKDxBcHAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBcIikpO1xuIl19
