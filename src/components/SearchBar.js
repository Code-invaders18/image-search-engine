import React from "react";

class SearchBar extends React.Component {
  //   onInputChange(event) {
  //     console.log(event.target.value);
  //   }
  //<input type="text" onChange={this.onInputChange} /> this will be used
  //in the div name field...this is the uncontrolled form..
  state = { term: "" };

  onFormSubmit = (event) => {
    event.preventDefault();
    //here these props are send as an argumnet by a
    this.props.onSubmitProp(this.state.term);
  };
  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}
export default SearchBar;
