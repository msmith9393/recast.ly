class Search extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
  }

  handleSubmit() {
    var search = $('.form-control').val(); //TODO MAKE A BETTER WAY TO GET SEARCH VALUE

    this.setState({
      value: search
    });
    var update = this.props.updateNav;
    update(search);
  }


  render() {
    return (
      <div className="search-bar form-inline">
        <input onChange={_.debounce(this.handleSubmit.bind(this), 400)} className="form-control" type="text" />
        <button onClick={this.handleSubmit.bind(this)} className="btn hidden-sm-down">
          <span className="glyphicon glyphicon-search"></span>
        </button>
      </div> 
    );
  }
}


window.Search = Search;
