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

},{"react":"react"}],"/Users/mattzeunert/Google Drive/projects/blg-react-immutable/app/main.js":[function(require,module,exports){
'use strict';

var React = require('react');
var App = require('./App.js');
React.render(React.createElement(App, null), document.body);

},{"./App.js":"/Users/mattzeunert/Google Drive/projects/blg-react-immutable/app/App.js","react":"react"}]},{},["/Users/mattzeunert/Google Drive/projects/blg-react-immutable/app/main.js"])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvbWF0dHpldW5lcnQvR29vZ2xlIERyaXZlL3Byb2plY3RzL2JsZy1yZWFjdC1pbW11dGFibGUvYXBwL0FwcC5qcyIsIi9Vc2Vycy9tYXR0emV1bmVydC9Hb29nbGUgRHJpdmUvcHJvamVjdHMvYmxnLXJlYWN0LWltbXV0YWJsZS9hcHAvbWFpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUEsSUFBSSxLQUFLLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDOztBQUU3QixJQUFJLEdBQUcsR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDOzs7QUFDMUIsaUJBQWUsRUFBRSwyQkFBWTtBQUMzQixXQUFPO0FBQ0wsV0FBSyxFQUFFLENBQUM7QUFDSixhQUFLLEVBQUUsV0FBVztPQUNyQixDQUFDO0tBQ0gsQ0FBQztHQUNIO0FBQ0QsWUFBVSxFQUFFLG9CQUFVLEtBQUssRUFBRTtBQUMzQixTQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7QUFDdkIsUUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxFQUFFLENBQUM7QUFDOUMsV0FBTyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDaEMsUUFBSSxDQUFDLFFBQVEsQ0FBQztBQUNaLGdCQUFVLEVBQUUsRUFBRTtLQUNmLENBQUMsQ0FBQztHQUNKO0FBQ0Qsa0JBQWdCLEVBQUUsMEJBQVUsS0FBSyxFQUFFO0FBQ2pDLFFBQUksQ0FBQyxRQUFRLENBQUM7QUFDWixnQkFBVSxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSztLQUMvQixDQUFDLENBQUM7R0FDSjtBQUNELGdCQUFjLEVBQUUsd0JBQVUsT0FBTyxFQUFFO0FBQ2pDLFdBQ0U7OztNQUFNLE9BQU87S0FBTyxDQUNwQjtHQUNIO0FBQ0YsUUFBTSxFQUFFLGtCQUFXOzs7QUFDaEIsUUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLFVBQVMsSUFBSSxFQUFDO0FBQzdDLGFBQU87OztRQUFLLElBQUksQ0FBQyxLQUFLO09BQU0sQ0FBQTtLQUM3QixDQUFDLENBQUM7QUFDTCxXQUNDOzs7TUFDTSxLQUFLO01BQ047O1VBQU0sUUFBUSxFQUFFLFVBQUMsQ0FBQzttQkFBSyxNQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUM7V0FBQSxBQUFDO1FBQ3RDLCtCQUFPLElBQUksRUFBQyxNQUFNLEVBQUMsR0FBRyxFQUFDLE9BQU8sR0FBRTtPQUMzQjtLQUNILENBQ1I7R0FDRjtBQUNBLFVBQVEsRUFBRSxrQkFBUyxDQUFDLEVBQUM7QUFDbkIsS0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO0FBQ25CLFFBQUksS0FBSyxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUMvQyxRQUFJLFNBQVMsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDO0FBQzVCLFNBQUssQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDOztBQUVqQixRQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQztBQUM3QixTQUFLLENBQUMsSUFBSSxDQUFDLEVBQUMsS0FBSyxFQUFFLFNBQVMsRUFBQyxDQUFDLENBQUE7QUFDOUIsUUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7R0FDM0I7Q0FDRixDQUFDLENBQUM7O0FBRUgsTUFBTSxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUM7Ozs7O0FDckRyQixJQUFJLEtBQUssR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDN0IsSUFBSSxHQUFHLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQzlCLEtBQUssQ0FBQyxNQUFNLENBQUMsb0JBQUMsR0FBRyxPQUFFLEVBQUUsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsInZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBBcHAgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB7XG4gICAgICB0b2RvczogW3tcbiAgICAgICAgICB0aXRsZTogXCJCYWtlIGNha2VcIlxuICAgICAgfV1cbiAgICB9O1xuICB9LFxuICBhZGRNZXNzYWdlOiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHZhciBpbnB1dCA9IHRoaXMucmVmcy5uZXdNZXNzYWdlLmdldERPTU5vZGUoKTtcbiAgICBhY3Rpb25zLmFkZE1lc3NhZ2UoaW5wdXQudmFsdWUpO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgbmV3TWVzc2FnZTogJydcbiAgICB9KTtcbiAgfSxcbiAgdXBkYXRlTmV3TWVzc2FnZTogZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBuZXdNZXNzYWdlOiBldmVudC50YXJnZXQudmFsdWVcbiAgICB9KTtcbiAgfSxcbiAgcmVuZGVyTWVzc2FnZXM6IGZ1bmN0aW9uIChtZXNzYWdlKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+e21lc3NhZ2V9PC9kaXY+XG4gICAgKTtcbiAgfSxcblx0cmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgICB2YXIgdG9kb3MgPSB0aGlzLnN0YXRlLnRvZG9zLm1hcChmdW5jdGlvbih0b2RvKXtcbiAgICAgIHJldHVybiA8bGk+e3RvZG8udGl0bGV9PC9saT5cbiAgICB9KTtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdj5cbiAgICAgICAge3RvZG9zfVxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17KGUpID0+IHRoaXMub25TdWJtaXQoZSl9PlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHJlZj1cImlucHV0XCIvPlxuICAgICAgICA8L2Zvcm0+XG4gICAgICA8L2Rpdj5cblx0XHQpO1xuXHR9LFxuICBvblN1Ym1pdDogZnVuY3Rpb24oZSl7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHZhciBpbnB1dCA9IFJlYWN0LmZpbmRET01Ob2RlKHRoaXMucmVmcy5pbnB1dCk7XG4gICAgdmFyIHRvZG9UaXRsZSA9IGlucHV0LnZhbHVlO1xuICAgIGlucHV0LnZhbHVlID0gXCJcIjtcblxuICAgIHZhciB0b2RvcyA9IHRoaXMuc3RhdGUudG9kb3M7XG4gICAgdG9kb3MucHVzaCh7dGl0bGU6IHRvZG9UaXRsZX0pXG4gICAgdGhpcy5zZXRTdGF0ZSh0aGlzLnN0YXRlKTsgLy8gV2UncmUgbXV0YXRpbmcgdGhlIG9yaWdpbmFsIHRvZG9zIGxpc3QsIHNvIHdlIGp1c3QgbmVlZCB0byB0ZWxsIHJlYWN0IHRoYXQgdGhlIHN0YXRlIGhhcyBjaGFuZ2VkLlxuICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBBcHA7XG4iLCJ2YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xudmFyIEFwcCA9IHJlcXVpcmUoJy4vQXBwLmpzJyk7XG5SZWFjdC5yZW5kZXIoPEFwcC8+LCBkb2N1bWVudC5ib2R5KTtcbiJdfQ==
