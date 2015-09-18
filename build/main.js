(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/Users/mattzeunert/Google Drive/projects/blg-react-immutable/app/App.js":[function(require,module,exports){
'use strict';

var React = require('react');
var Store = require('./Store.js');
var actions = require('./actions.js');

var App = React.createClass({
  displayName: 'App',

  getInitialState: function getInitialState() {
    return {
      messages: Store.getMessages(),
      newMessage: ''
    };
  },
  componentWillMount: function componentWillMount() {
    Store.addChangeListener(this.changeState);
  },
  componentWillUnmount: function componentWillUnmount() {
    Store.removeChangeListener(this.changeState);
  },
  changeState: function changeState() {
    this.setState({
      messages: Store.getMessages()
    });
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
    return React.createElement(
      'div',
      null,
      this.state.messages.map(this.renderMessages),
      React.createElement(
        'form',
        { onSubmit: this.addMessage },
        React.createElement('input', { ref: 'newMessage', type: 'text', value: this.state.newMessage, onChange: this.updateNewMessage })
      )
    );
  }

});

module.exports = App;

},{"./Store.js":"/Users/mattzeunert/Google Drive/projects/blg-react-immutable/app/Store.js","./actions.js":"/Users/mattzeunert/Google Drive/projects/blg-react-immutable/app/actions.js","react":"react"}],"/Users/mattzeunert/Google Drive/projects/blg-react-immutable/app/Store.js":[function(require,module,exports){
'use strict';

var flux = require('flux-react');
var actions = require('./actions.js');

module.exports = flux.createStore({
  messages: [],
  actions: [actions.addMessage],
  addMessage: function addMessage(message) {
    this.messages.push(message);
    this.emitChange();
  },
  exports: {
    getMessages: function getMessages() {
      return this.messages;
    }
  }
});

},{"./actions.js":"/Users/mattzeunert/Google Drive/projects/blg-react-immutable/app/actions.js","flux-react":"flux-react"}],"/Users/mattzeunert/Google Drive/projects/blg-react-immutable/app/actions.js":[function(require,module,exports){
'use strict';

var flux = require('flux-react');

module.exports = flux.createActions(['addMessage']);

},{"flux-react":"flux-react"}],"/Users/mattzeunert/Google Drive/projects/blg-react-immutable/app/main.js":[function(require,module,exports){
'use strict';

var React = require('react');
var App = require('./App.js');
React.render(React.createElement(App, null), document.body);

},{"./App.js":"/Users/mattzeunert/Google Drive/projects/blg-react-immutable/app/App.js","react":"react"}]},{},["/Users/mattzeunert/Google Drive/projects/blg-react-immutable/app/main.js"])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvbWF0dHpldW5lcnQvR29vZ2xlIERyaXZlL3Byb2plY3RzL2JsZy1yZWFjdC1pbW11dGFibGUvYXBwL0FwcC5qcyIsIi9Vc2Vycy9tYXR0emV1bmVydC9Hb29nbGUgRHJpdmUvcHJvamVjdHMvYmxnLXJlYWN0LWltbXV0YWJsZS9hcHAvU3RvcmUuanMiLCIvVXNlcnMvbWF0dHpldW5lcnQvR29vZ2xlIERyaXZlL3Byb2plY3RzL2JsZy1yZWFjdC1pbW11dGFibGUvYXBwL2FjdGlvbnMuanMiLCIvVXNlcnMvbWF0dHpldW5lcnQvR29vZ2xlIERyaXZlL3Byb2plY3RzL2JsZy1yZWFjdC1pbW11dGFibGUvYXBwL21haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLElBQUksS0FBSyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUM3QixJQUFJLEtBQUssR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUM7QUFDbEMsSUFBSSxPQUFPLEdBQUcsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDOztBQUV0QyxJQUFJLEdBQUcsR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDOzs7QUFDMUIsaUJBQWUsRUFBRSwyQkFBWTtBQUMzQixXQUFPO0FBQ0wsY0FBUSxFQUFFLEtBQUssQ0FBQyxXQUFXLEVBQUU7QUFDN0IsZ0JBQVUsRUFBRSxFQUFFO0tBQ2YsQ0FBQztHQUNIO0FBQ0Qsb0JBQWtCLEVBQUUsOEJBQVk7QUFDOUIsU0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztHQUMzQztBQUNELHNCQUFvQixFQUFFLGdDQUFZO0FBQ2hDLFNBQUssQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7R0FDOUM7QUFDRCxhQUFXLEVBQUUsdUJBQVk7QUFDdkIsUUFBSSxDQUFDLFFBQVEsQ0FBQztBQUNaLGNBQVEsRUFBRSxLQUFLLENBQUMsV0FBVyxFQUFFO0tBQzlCLENBQUMsQ0FBQztHQUNKO0FBQ0QsWUFBVSxFQUFFLG9CQUFVLEtBQUssRUFBRTtBQUMzQixTQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7QUFDdkIsUUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxFQUFFLENBQUM7QUFDOUMsV0FBTyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDaEMsUUFBSSxDQUFDLFFBQVEsQ0FBQztBQUNaLGdCQUFVLEVBQUUsRUFBRTtLQUNmLENBQUMsQ0FBQztHQUNKO0FBQ0Qsa0JBQWdCLEVBQUUsMEJBQVUsS0FBSyxFQUFFO0FBQ2pDLFFBQUksQ0FBQyxRQUFRLENBQUM7QUFDWixnQkFBVSxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSztLQUMvQixDQUFDLENBQUM7R0FDSjtBQUNELGdCQUFjLEVBQUUsd0JBQVUsT0FBTyxFQUFFO0FBQ2pDLFdBQ0U7OztNQUFNLE9BQU87S0FBTyxDQUNwQjtHQUNIO0FBQ0YsUUFBTSxFQUFFLGtCQUFXO0FBQ2xCLFdBQ0M7OztNQUNNLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDO01BQzdDOztVQUFNLFFBQVEsRUFBRSxJQUFJLENBQUMsVUFBVSxBQUFDO1FBQzlCLCtCQUFPLEdBQUcsRUFBQyxZQUFZLEVBQUMsSUFBSSxFQUFDLE1BQU0sRUFBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLEFBQUMsRUFBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixBQUFDLEdBQUU7T0FDL0Y7S0FDSCxDQUNSO0dBQ0Y7O0NBRUQsQ0FBQyxDQUFDOztBQUVILE1BQU0sQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDOzs7OztBQ3JEckIsSUFBSSxJQUFJLEdBQUcsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBQ2pDLElBQUksT0FBTyxHQUFHLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQzs7QUFFdEMsTUFBTSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO0FBQ2hDLFVBQVEsRUFBRSxFQUFFO0FBQ1osU0FBTyxFQUFFLENBQ1AsT0FBTyxDQUFDLFVBQVUsQ0FDbkI7QUFDRCxZQUFVLEVBQUUsb0JBQVUsT0FBTyxFQUFFO0FBQzdCLFFBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQzVCLFFBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztHQUNuQjtBQUNELFNBQU8sRUFBRTtBQUNQLGVBQVcsRUFBRSx1QkFBWTtBQUN2QixhQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7S0FDdEI7R0FDRjtDQUNGLENBQUMsQ0FBQzs7Ozs7QUNqQkgsSUFBSSxJQUFJLEdBQUcsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDOztBQUVqQyxNQUFNLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FDbEMsWUFBWSxDQUNiLENBQUMsQ0FBQzs7Ozs7QUNKSCxJQUFJLEtBQUssR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDN0IsSUFBSSxHQUFHLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQzlCLEtBQUssQ0FBQyxNQUFNLENBQUMsb0JBQUMsR0FBRyxPQUFFLEVBQUUsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsInZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgU3RvcmUgPSByZXF1aXJlKCcuL1N0b3JlLmpzJyk7XG52YXIgYWN0aW9ucyA9IHJlcXVpcmUoJy4vYWN0aW9ucy5qcycpO1xuXG52YXIgQXBwID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbWVzc2FnZXM6IFN0b3JlLmdldE1lc3NhZ2VzKCksXG4gICAgICBuZXdNZXNzYWdlOiAnJ1xuICAgIH07XG4gIH0sXG4gIGNvbXBvbmVudFdpbGxNb3VudDogZnVuY3Rpb24gKCkge1xuICAgIFN0b3JlLmFkZENoYW5nZUxpc3RlbmVyKHRoaXMuY2hhbmdlU3RhdGUpO1xuICB9LFxuICBjb21wb25lbnRXaWxsVW5tb3VudDogZnVuY3Rpb24gKCkge1xuICAgIFN0b3JlLnJlbW92ZUNoYW5nZUxpc3RlbmVyKHRoaXMuY2hhbmdlU3RhdGUpO1xuICB9LFxuICBjaGFuZ2VTdGF0ZTogZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgbWVzc2FnZXM6IFN0b3JlLmdldE1lc3NhZ2VzKClcbiAgICB9KTtcbiAgfSxcbiAgYWRkTWVzc2FnZTogZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB2YXIgaW5wdXQgPSB0aGlzLnJlZnMubmV3TWVzc2FnZS5nZXRET01Ob2RlKCk7XG4gICAgYWN0aW9ucy5hZGRNZXNzYWdlKGlucHV0LnZhbHVlKTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIG5ld01lc3NhZ2U6ICcnXG4gICAgfSk7XG4gIH0sXG4gIHVwZGF0ZU5ld01lc3NhZ2U6IGZ1bmN0aW9uIChldmVudCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgbmV3TWVzc2FnZTogZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgfSk7XG4gIH0sXG4gIHJlbmRlck1lc3NhZ2VzOiBmdW5jdGlvbiAobWVzc2FnZSkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PnttZXNzYWdlfTwvZGl2PlxuICAgICk7XG4gIH0sXG5cdHJlbmRlcjogZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXY+XG4gICAgICAgIHt0aGlzLnN0YXRlLm1lc3NhZ2VzLm1hcCh0aGlzLnJlbmRlck1lc3NhZ2VzKX1cbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3RoaXMuYWRkTWVzc2FnZX0+XG4gICAgICAgICAgPGlucHV0IHJlZj1cIm5ld01lc3NhZ2VcIiB0eXBlPVwidGV4dFwiIHZhbHVlPXt0aGlzLnN0YXRlLm5ld01lc3NhZ2V9IG9uQ2hhbmdlPXt0aGlzLnVwZGF0ZU5ld01lc3NhZ2V9Lz5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgPC9kaXY+XG5cdFx0KTtcblx0fVxuXHRcbn0pO1xuXHRcbm1vZHVsZS5leHBvcnRzID0gQXBwO1xuIiwidmFyIGZsdXggPSByZXF1aXJlKCdmbHV4LXJlYWN0Jyk7XG52YXIgYWN0aW9ucyA9IHJlcXVpcmUoJy4vYWN0aW9ucy5qcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZsdXguY3JlYXRlU3RvcmUoe1xuICBtZXNzYWdlczogW10sXG4gIGFjdGlvbnM6IFtcbiAgICBhY3Rpb25zLmFkZE1lc3NhZ2VcbiAgXSxcbiAgYWRkTWVzc2FnZTogZnVuY3Rpb24gKG1lc3NhZ2UpIHtcbiAgICB0aGlzLm1lc3NhZ2VzLnB1c2gobWVzc2FnZSk7XG4gICAgdGhpcy5lbWl0Q2hhbmdlKCk7XG4gIH0sXG4gIGV4cG9ydHM6IHtcbiAgICBnZXRNZXNzYWdlczogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHRoaXMubWVzc2FnZXM7XG4gICAgfVxuICB9XG59KTtcbiIsInZhciBmbHV4ID0gcmVxdWlyZSgnZmx1eC1yZWFjdCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZsdXguY3JlYXRlQWN0aW9ucyhbXG4gICdhZGRNZXNzYWdlJ1xuXSk7IiwidmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbnZhciBBcHAgPSByZXF1aXJlKCcuL0FwcC5qcycpO1xuUmVhY3QucmVuZGVyKDxBcHAvPiwgZG9jdW1lbnQuYm9keSk7XG4iXX0=
