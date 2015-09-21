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

},{"react":"react"}],"/Users/mattzeunert/Google Drive/projects/blg-react-immutable/specs/App-spec.js":[function(require,module,exports){
'use strict';

var App = require('./../app/App.js');
var TestUtils = require('react/addons').TestUtils;

describe("App", function () {

  it("should be wrapped with a div", function () {
    var app = TestUtils.renderIntoDocument(App());
    expect(app.getDOMNode().tagName).toEqual('DIV');
  });
});

},{"./../app/App.js":"/Users/mattzeunert/Google Drive/projects/blg-react-immutable/app/App.js","react/addons":"react/addons"}]},{},["/Users/mattzeunert/Google Drive/projects/blg-react-immutable/specs/App-spec.js"])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvbWF0dHpldW5lcnQvR29vZ2xlIERyaXZlL3Byb2plY3RzL2JsZy1yZWFjdC1pbW11dGFibGUvYXBwL0FwcC5qcyIsIi9Vc2Vycy9tYXR0emV1bmVydC9Hb29nbGUgRHJpdmUvcHJvamVjdHMvYmxnLXJlYWN0LWltbXV0YWJsZS9zcGVjcy9BcHAtc3BlYy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUEsSUFBSSxLQUFLLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDOztBQUU3QixJQUFJLFFBQVEsR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDOzs7Ozs7QUFJL0IsUUFBTSxFQUFFLGtCQUFVO0FBQ2hCLFFBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDL0MsYUFBUyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUMvQyxXQUFPOzs7TUFBSyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLO0tBQU0sQ0FBQTtHQUN4QztDQUNGLENBQUMsQ0FBQTs7QUFFRixJQUFJLFFBQVEsR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDOzs7QUFDL0IsUUFBTSxFQUFFLGtCQUFVO0FBQ2hCLGFBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUN0QixRQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsVUFBUyxJQUFJLEVBQUM7QUFDN0MsYUFBTyxvQkFBQyxRQUFRLElBQUMsSUFBSSxFQUFFLElBQUksQUFBQyxHQUFFLENBQUE7S0FDL0IsQ0FBQyxDQUFDO0FBQ0gsV0FBTzs7O01BQ0osRUFBQyxLQUFLLEVBQUwsS0FBSyxFQUFDO0tBQ0wsQ0FBQTtHQUNOO0NBQ0YsQ0FBQyxDQUFBOztBQUVGLElBQUksU0FBUyxHQUFHLEVBQUUsQ0FBQztBQUNuQixTQUFTLFNBQVMsQ0FBQyxhQUFhLEVBQUM7QUFDL0IsTUFBSSxhQUFhLEVBQUM7QUFDaEIsYUFBUyxDQUFDLE9BQU8sQ0FBQyxVQUFVLEdBQUcsYUFBYSxDQUFDLENBQUM7R0FDL0MsTUFBTTtBQUNMLGFBQVMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUE7R0FDMUI7QUFDRCxXQUFTLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDbkMsTUFBSSxJQUFJLEdBQUcsTUFBTSxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDM0MsTUFBSSxHQUFHLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUNoRCxNQUFJLENBQUMsR0FBRyxFQUFDO0FBQ1AsV0FBTztHQUNSO0FBQ0QsS0FBRyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7Q0FDdEI7O0FBRUQsSUFBSSxHQUFHLEdBQUcsS0FBSyxDQUFDLFdBQVcsQ0FBQzs7O0FBQzFCLGlCQUFlLEVBQUUsMkJBQVk7QUFDM0IsV0FBTztBQUNMLFdBQUssRUFBRSxDQUFDO0FBQ0osYUFBSyxFQUFFLFdBQVc7T0FDckIsQ0FBQztLQUNILENBQUM7R0FDSDtBQUNELFlBQVUsRUFBRSxvQkFBVSxLQUFLLEVBQUU7QUFDM0IsU0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO0FBQ3ZCLFFBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsRUFBRSxDQUFDO0FBQzlDLFdBQU8sQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ2hDLFFBQUksQ0FBQyxRQUFRLENBQUM7QUFDWixnQkFBVSxFQUFFLEVBQUU7S0FDZixDQUFDLENBQUM7R0FDSjtBQUNELGtCQUFnQixFQUFFLDBCQUFVLEtBQUssRUFBRTtBQUNqQyxRQUFJLENBQUMsUUFBUSxDQUFDO0FBQ1osZ0JBQVUsRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUs7S0FDL0IsQ0FBQyxDQUFDO0dBQ0o7QUFDRCxnQkFBYyxFQUFFLHdCQUFVLE9BQU8sRUFBRTtBQUNqQyxXQUNFOzs7TUFBTSxPQUFPO0tBQU8sQ0FDcEI7R0FDSDtBQUNGLFFBQU0sRUFBRSxrQkFBVzs7O0FBQ2hCLGFBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0FBQ2pCLGFBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNuQixXQUNDOzs7TUFDSyxvQkFBQyxRQUFRLElBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxBQUFDLEdBQUU7TUFDcEM7O1VBQU0sUUFBUSxFQUFFLFVBQUMsQ0FBQzttQkFBSyxNQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUM7V0FBQSxBQUFDO1FBQ3RDLCtCQUFPLElBQUksRUFBQyxNQUFNLEVBQUMsR0FBRyxFQUFDLE9BQU8sR0FBRTtPQUMzQjtLQUNILENBQ1I7R0FDRjtBQUNBLFVBQVEsRUFBRSxrQkFBUyxDQUFDLEVBQUM7QUFDbkIsS0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO0FBQ25CLFFBQUksS0FBSyxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUMvQyxRQUFJLFNBQVMsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDO0FBQzVCLFNBQUssQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDOztBQUVqQixRQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQztBQUM3QixTQUFLLENBQUMsSUFBSSxDQUFDLEVBQUMsS0FBSyxFQUFFLFNBQVMsRUFBQyxDQUFDLENBQUE7QUFDOUIsUUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7R0FDM0I7Q0FDRixDQUFDLENBQUM7O0FBRUgsTUFBTSxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUM7Ozs7O0FDM0ZyQixJQUFJLEdBQUcsR0FBRyxPQUFPLENBQUMsaUJBQWlCLENBQUMsQ0FBQztBQUNyQyxJQUFJLFNBQVMsR0FBRyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUMsU0FBUyxDQUFDOztBQUVsRCxRQUFRLENBQUMsS0FBSyxFQUFFLFlBQVc7O0FBRXpCLElBQUUsQ0FBQyw4QkFBOEIsRUFBRSxZQUFXO0FBQzVDLFFBQUksR0FBRyxHQUFHLFNBQVMsQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO0FBQzlDLFVBQU0sQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO0dBQ2pELENBQUMsQ0FBQztDQUVKLENBQUMsQ0FBQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJ2YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgVG9kb0l0ZW0gPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIC8vIHNob3VsZENvbXBvbmVudFVwZGF0ZTogZnVuY3Rpb24obmV3UHJvcHMpe1xuICAvLyAgIHJldHVybiB0aGlzLnJlbmRlcmVkSnNvbiAhPT0gSlNPTi5zdHJpbmdpZnkobmV3UHJvcHMpO1xuICAvLyB9LFxuICByZW5kZXI6IGZ1bmN0aW9uKCl7XG4gICAgdGhpcy5yZW5kZXJlZEpzb24gPSBKU09OLnN0cmluZ2lmeSh0aGlzLnByb3BzKTtcbiAgICBsb2dSZW5kZXIoXCJUb2RvSXRlbSBcIiArIHRoaXMucHJvcHMudG9kby50aXRsZSk7XG4gICAgcmV0dXJuIDxsaT57dGhpcy5wcm9wcy50b2RvLnRpdGxlfTwvbGk+XG4gIH1cbn0pXG5cbnZhciBUb2RvTGlzdCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgcmVuZGVyOiBmdW5jdGlvbigpe1xuICAgIGxvZ1JlbmRlcihcIlRvZG9MaXN0XCIpO1xuICAgIHZhciB0b2RvcyA9IHRoaXMucHJvcHMudG9kb3MubWFwKGZ1bmN0aW9uKHRvZG8pe1xuICAgICAgcmV0dXJuIDxUb2RvSXRlbSB0b2RvPXt0b2RvfS8+XG4gICAgfSk7XG4gICAgcmV0dXJuIDx1bD5cbiAgICAgIHt7dG9kb3N9fVxuICAgIDwvdWw+XG4gIH1cbn0pXG5cbnZhciByZW5kZXJMb2cgPSBbXTtcbmZ1bmN0aW9uIGxvZ1JlbmRlcihjb21wb25lbnROYW1lKXtcbiAgaWYgKGNvbXBvbmVudE5hbWUpe1xuICAgIHJlbmRlckxvZy51bnNoaWZ0KFwiUmVuZGVyOiBcIiArIGNvbXBvbmVudE5hbWUpO1xuICB9IGVsc2Uge1xuICAgIHJlbmRlckxvZy51bnNoaWZ0KFwiPGhyPlwiKVxuICB9XG4gIHJlbmRlckxvZyA9IHJlbmRlckxvZy5zbGljZSgwLCAxMCk7XG4gIHZhciBodG1sID0gXCI8aHI+XCIgKyByZW5kZXJMb2cuam9pbihcIjxicj5cIik7XG4gIHZhciBkaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlbmRlci1sb2dcIik7XG4gIGlmICghZGl2KXtcbiAgICByZXR1cm47XG4gIH1cbiAgZGl2LmlubmVySFRNTCA9IGh0bWw7XG59XG5cbnZhciBBcHAgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB7XG4gICAgICB0b2RvczogW3tcbiAgICAgICAgICB0aXRsZTogXCJCYWtlIGNha2VcIlxuICAgICAgfV1cbiAgICB9O1xuICB9LFxuICBhZGRNZXNzYWdlOiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHZhciBpbnB1dCA9IHRoaXMucmVmcy5uZXdNZXNzYWdlLmdldERPTU5vZGUoKTtcbiAgICBhY3Rpb25zLmFkZE1lc3NhZ2UoaW5wdXQudmFsdWUpO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgbmV3TWVzc2FnZTogJydcbiAgICB9KTtcbiAgfSxcbiAgdXBkYXRlTmV3TWVzc2FnZTogZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBuZXdNZXNzYWdlOiBldmVudC50YXJnZXQudmFsdWVcbiAgICB9KTtcbiAgfSxcbiAgcmVuZGVyTWVzc2FnZXM6IGZ1bmN0aW9uIChtZXNzYWdlKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+e21lc3NhZ2V9PC9kaXY+XG4gICAgKTtcbiAgfSxcblx0cmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgICBsb2dSZW5kZXIobnVsbCk7O1xuICAgIGxvZ1JlbmRlcihcIkFwcFwiKTtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdj5cbiAgICAgICAgPFRvZG9MaXN0IHRvZG9zPXt0aGlzLnN0YXRlLnRvZG9zfS8+XG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXsoZSkgPT4gdGhpcy5vblN1Ym1pdChlKX0+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcmVmPVwiaW5wdXRcIi8+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvZGl2PlxuXHRcdCk7XG5cdH0sXG4gIG9uU3VibWl0OiBmdW5jdGlvbihlKXtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdmFyIGlucHV0ID0gUmVhY3QuZmluZERPTU5vZGUodGhpcy5yZWZzLmlucHV0KTtcbiAgICB2YXIgdG9kb1RpdGxlID0gaW5wdXQudmFsdWU7XG4gICAgaW5wdXQudmFsdWUgPSBcIlwiO1xuXG4gICAgdmFyIHRvZG9zID0gdGhpcy5zdGF0ZS50b2RvcztcbiAgICB0b2Rvcy5wdXNoKHt0aXRsZTogdG9kb1RpdGxlfSlcbiAgICB0aGlzLnNldFN0YXRlKHRoaXMuc3RhdGUpOyAvLyBXZSdyZSBtdXRhdGluZyB0aGUgb3JpZ2luYWwgdG9kb3MgbGlzdCwgc28gd2UganVzdCBuZWVkIHRvIHRlbGwgUmVhY3QgdGhhdCB0aGUgc3RhdGUgaGFzIGNoYW5nZWQuXG4gIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEFwcDtcbiIsInZhciBBcHAgPSByZXF1aXJlKCcuLy4uL2FwcC9BcHAuanMnKTtcbnZhciBUZXN0VXRpbHMgPSByZXF1aXJlKCdyZWFjdC9hZGRvbnMnKS5UZXN0VXRpbHM7XG5cbmRlc2NyaWJlKFwiQXBwXCIsIGZ1bmN0aW9uKCkge1xuXG4gIGl0KFwic2hvdWxkIGJlIHdyYXBwZWQgd2l0aCBhIGRpdlwiLCBmdW5jdGlvbigpIHtcbiAgICB2YXIgYXBwID0gVGVzdFV0aWxzLnJlbmRlckludG9Eb2N1bWVudChBcHAoKSk7XG4gICAgZXhwZWN0KGFwcC5nZXRET01Ob2RlKCkudGFnTmFtZSkudG9FcXVhbCgnRElWJyk7XG4gIH0pO1xuXG59KTtcbiJdfQ==
