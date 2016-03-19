class Nav extends React.Component {
  constructor(props) {
    super(props);
  }
  fred(search) {
    console.log('inside Navs fred, search is:', search);
    return this.props.updateNav(search);
  }
  render() {
    return (
      <nav className="navbar">
        <div className="col-md-6 col-md-offset-3">
          <Search test={this.fred.bind(this)} />
        </div>
      </nav>
    );
  }
}

window.Nav = Nav;
