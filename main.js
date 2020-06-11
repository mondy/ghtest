
let {Router, Route, Link, browserHistory} = window.ReactRouter;

class Index extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello React!</h1>
        <ul>
          <li><Link to='/ghtest/about'>About</Link></li>
          <li><Link to='/ghtest/article'>Article</Link></li>
      <li><Link to='/ghtest/foo/barr'>deeeep</Link></li>
        </ul>
        {this.props.children}
      </div>
    );
  }
}

class About extends React.Component {
  render() {
    return (
      <div>About</div>
    );
  }
}

class Article extends React.Component {
  render() {
    return (
      <div>Article</div>
    );
  }
}

class Deep extends React.Component {
  render() {
    return (
      <div>Deep</div>
    );
  }
}

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path='/ghtest' component={Index}>
      <Route path='about' component={About}/>
      <Route path='article' component={Article}/>
  <Route path='foo/barr' component={Deep}/>
    </Route>
  </Router>
  ), document.getElementById('content')
);
