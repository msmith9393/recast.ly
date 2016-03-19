class Nav extends React.Component {
  constructor(props) {
    super(props);
  }
  // updateNav(search) {
  //   console.log('in Nav, search is:', search);
  //   return this.props.updateNav(search);
  // }
  render() {
    return (
      <nav className="navbar">
        <div className="col-md-6 col-md-offset-3">
          <Search updateNav={this.props.updateNav.bind(this)} />
        </div>
      </nav>
    );
  }
}

window.Nav = Nav;
