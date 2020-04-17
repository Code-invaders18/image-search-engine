import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends React.Component {
  state = { images: [] };

  onSearchSubmit = async (term) => {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: { query: term },
      headers: {
        Authorization: "Client-ID dpBhVwmVQJkiRzFKpZdR734MWpBp9-1s2C6DkptLVAE",
      },
    });
    //   .then((response) => {
    //     console.log(response.data.results);
    //   });
    //console.log(response.data.results);
    //console.log(this);
    this.setState({ images: response.data.results });
  };
  render() {
    return (
      <div className="ui container" style={{ marginTop: "20px" }}>
        <SearchBar onSubmitProp={this.onSearchSubmit} />
        Found:{this.state.images.length} images
        <ImageList images={this.state.images} />
      </div>
    );
  }
}
export default App;
