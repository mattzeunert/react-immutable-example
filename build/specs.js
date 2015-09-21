(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/Users/mattzeunert/Google Drive/projects/blg-react-immutable/app/App.js":[function(require,module,exports){
'use strict';

var React = require('react');

var App = React.createClass({
  displayName: 'App',

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
      'div',
      null,
      message
    );
  },
  render: function render() {
    var _this = this;

    var todos = this.state.todos.map(function (todo) {
      return React.createElement(
        'li',
        null,
        todo.title
      );
    });
    return React.createElement(
      'div',
      null,
      todos,
      React.createElement(
        'form',
        { onSubmit: function (e) {
            return _this.onSubmit(e);
          } },
        React.createElement('input', { type: 'text', ref: 'input' })
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
    this.setState(this.state); // We're mutating the original todos list, so we just need to tell react that the state has changed.
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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvbWF0dHpldW5lcnQvR29vZ2xlIERyaXZlL3Byb2plY3RzL2JsZy1yZWFjdC1pbW11dGFibGUvYXBwL0FwcC5qcyIsIi9Vc2Vycy9tYXR0emV1bmVydC9Hb29nbGUgRHJpdmUvcHJvamVjdHMvYmxnLXJlYWN0LWltbXV0YWJsZS9zcGVjcy9BcHAtc3BlYy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUEsSUFBSSxLQUFLLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDOztBQUU3QixJQUFJLEdBQUcsR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDOzs7QUFDMUIsaUJBQWUsRUFBRSwyQkFBWTtBQUMzQixXQUFPO0FBQ0wsV0FBSyxFQUFFLENBQUM7QUFDSixhQUFLLEVBQUUsV0FBVztPQUNyQixDQUFDO0tBQ0gsQ0FBQztHQUNIO0FBQ0QsWUFBVSxFQUFFLG9CQUFVLEtBQUssRUFBRTtBQUMzQixTQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7QUFDdkIsUUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxFQUFFLENBQUM7QUFDOUMsV0FBTyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDaEMsUUFBSSxDQUFDLFFBQVEsQ0FBQztBQUNaLGdCQUFVLEVBQUUsRUFBRTtLQUNmLENBQUMsQ0FBQztHQUNKO0FBQ0Qsa0JBQWdCLEVBQUUsMEJBQVUsS0FBSyxFQUFFO0FBQ2pDLFFBQUksQ0FBQyxRQUFRLENBQUM7QUFDWixnQkFBVSxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSztLQUMvQixDQUFDLENBQUM7R0FDSjtBQUNELGdCQUFjLEVBQUUsd0JBQVUsT0FBTyxFQUFFO0FBQ2pDLFdBQ0U7OztNQUFNLE9BQU87S0FBTyxDQUNwQjtHQUNIO0FBQ0YsUUFBTSxFQUFFLGtCQUFXOzs7QUFDaEIsUUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLFVBQVMsSUFBSSxFQUFDO0FBQzdDLGFBQU87OztRQUFLLElBQUksQ0FBQyxLQUFLO09BQU0sQ0FBQTtLQUM3QixDQUFDLENBQUM7QUFDTCxXQUNDOzs7TUFDTSxLQUFLO01BQ047O1VBQU0sUUFBUSxFQUFFLFVBQUMsQ0FBQzttQkFBSyxNQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUM7V0FBQSxBQUFDO1FBQ3RDLCtCQUFPLElBQUksRUFBQyxNQUFNLEVBQUMsR0FBRyxFQUFDLE9BQU8sR0FBRTtPQUMzQjtLQUNILENBQ1I7R0FDRjtBQUNBLFVBQVEsRUFBRSxrQkFBUyxDQUFDLEVBQUM7QUFDbkIsS0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO0FBQ25CLFFBQUksS0FBSyxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUMvQyxRQUFJLFNBQVMsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDO0FBQzVCLFNBQUssQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDOztBQUVqQixRQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQztBQUM3QixTQUFLLENBQUMsSUFBSSxDQUFDLEVBQUMsS0FBSyxFQUFFLFNBQVMsRUFBQyxDQUFDLENBQUE7QUFDOUIsUUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7R0FDM0I7Q0FDRixDQUFDLENBQUM7O0FBRUgsTUFBTSxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUM7Ozs7O0FDckRyQixJQUFJLEdBQUcsR0FBRyxPQUFPLENBQUMsaUJBQWlCLENBQUMsQ0FBQztBQUNyQyxJQUFJLFNBQVMsR0FBRyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUMsU0FBUyxDQUFDOztBQUVsRCxRQUFRLENBQUMsS0FBSyxFQUFFLFlBQVc7O0FBRXpCLElBQUUsQ0FBQyw4QkFBOEIsRUFBRSxZQUFXO0FBQzVDLFFBQUksR0FBRyxHQUFHLFNBQVMsQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO0FBQzlDLFVBQU0sQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO0dBQ2pELENBQUMsQ0FBQztDQUVKLENBQUMsQ0FBQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJ2YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgQXBwID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdG9kb3M6IFt7XG4gICAgICAgICAgdGl0bGU6IFwiQmFrZSBjYWtlXCJcbiAgICAgIH1dXG4gICAgfTtcbiAgfSxcbiAgYWRkTWVzc2FnZTogZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB2YXIgaW5wdXQgPSB0aGlzLnJlZnMubmV3TWVzc2FnZS5nZXRET01Ob2RlKCk7XG4gICAgYWN0aW9ucy5hZGRNZXNzYWdlKGlucHV0LnZhbHVlKTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIG5ld01lc3NhZ2U6ICcnXG4gICAgfSk7XG4gIH0sXG4gIHVwZGF0ZU5ld01lc3NhZ2U6IGZ1bmN0aW9uIChldmVudCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgbmV3TWVzc2FnZTogZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgfSk7XG4gIH0sXG4gIHJlbmRlck1lc3NhZ2VzOiBmdW5jdGlvbiAobWVzc2FnZSkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PnttZXNzYWdlfTwvZGl2PlxuICAgICk7XG4gIH0sXG5cdHJlbmRlcjogZnVuY3Rpb24oKSB7XG4gICAgdmFyIHRvZG9zID0gdGhpcy5zdGF0ZS50b2Rvcy5tYXAoZnVuY3Rpb24odG9kbyl7XG4gICAgICByZXR1cm4gPGxpPnt0b2RvLnRpdGxlfTwvbGk+XG4gICAgfSk7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXY+XG4gICAgICAgIHt0b2Rvc31cbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9eyhlKSA9PiB0aGlzLm9uU3VibWl0KGUpfT5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiByZWY9XCJpbnB1dFwiLz5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgPC9kaXY+XG5cdFx0KTtcblx0fSxcbiAgb25TdWJtaXQ6IGZ1bmN0aW9uKGUpe1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB2YXIgaW5wdXQgPSBSZWFjdC5maW5kRE9NTm9kZSh0aGlzLnJlZnMuaW5wdXQpO1xuICAgIHZhciB0b2RvVGl0bGUgPSBpbnB1dC52YWx1ZTtcbiAgICBpbnB1dC52YWx1ZSA9IFwiXCI7XG5cbiAgICB2YXIgdG9kb3MgPSB0aGlzLnN0YXRlLnRvZG9zO1xuICAgIHRvZG9zLnB1c2goe3RpdGxlOiB0b2RvVGl0bGV9KVxuICAgIHRoaXMuc2V0U3RhdGUodGhpcy5zdGF0ZSk7IC8vIFdlJ3JlIG11dGF0aW5nIHRoZSBvcmlnaW5hbCB0b2RvcyBsaXN0LCBzbyB3ZSBqdXN0IG5lZWQgdG8gdGVsbCByZWFjdCB0aGF0IHRoZSBzdGF0ZSBoYXMgY2hhbmdlZC5cbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gQXBwO1xuIiwidmFyIEFwcCA9IHJlcXVpcmUoJy4vLi4vYXBwL0FwcC5qcycpO1xudmFyIFRlc3RVdGlscyA9IHJlcXVpcmUoJ3JlYWN0L2FkZG9ucycpLlRlc3RVdGlscztcblxuZGVzY3JpYmUoXCJBcHBcIiwgZnVuY3Rpb24oKSB7XG5cbiAgaXQoXCJzaG91bGQgYmUgd3JhcHBlZCB3aXRoIGEgZGl2XCIsIGZ1bmN0aW9uKCkge1xuICAgIHZhciBhcHAgPSBUZXN0VXRpbHMucmVuZGVySW50b0RvY3VtZW50KEFwcCgpKTtcbiAgICBleHBlY3QoYXBwLmdldERPTU5vZGUoKS50YWdOYW1lKS50b0VxdWFsKCdESVYnKTtcbiAgfSk7XG5cbn0pO1xuIl19
