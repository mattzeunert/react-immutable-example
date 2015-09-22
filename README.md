## React and Immutable.js example

This application demonstrates how React always does a full re-render by default, and how you can change that behavior using `shouldComponentUpdate` and [Immutable.js](https://facebook.github.io/immutable-js/).

The application code is in [the App.js file](https://github.com/mattzeunert/react-immutable-example/blob/master/app/App.js).

Get started:
- Run `npm install`
- Run `gulp`
- Run `python -m SimpleHTTPServer` in the build directory
- Open [http://localhost:8000/](http://localhost:8000/)

Based on [Flux React Boilerplate](https://github.com/christianalfoni/flux-react-boilerplate).

### shouldComponentUpdate

If `shouldComponentUpdate` isn't used all components are re-rendered every time any data changes.

Using `shouldComponentUpdate` means we only render a component if its data has changed. Using Immutable.js allows us to determine that by using a reference comparison between the old props and the new props, we don't need to do a deep comparison of objects.

[This video shows what is re-rendered on each change.](https://www.youtube.com/watch?v=fc3lRFoQXYo)
