class Search extends React.Component {
  
  constructor(props) {
    super(props);
  }

  handleSubmit() {
    var search = $('.form-control').val(); //TODO MAKE A BETTER WAY TO GET SEARCH VALUE
    return this.props.test(search);
  }

  render() {
    return (
      <div className="search-bar form-inline">
        <input className="form-control" type="text" />
        <button onClick={this.handleSubmit.bind(this)} className="btn hidden-sm-down">
          <span className="glyphicon glyphicon-search"></span>
        </button>
      </div> 
    );
  }
}


window.Search = Search;
