import React from "react";

class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { spans: 0 };
    this.imageRef = React.createRef();
  }
  //here we r facing the dealy order of loading the stuff ..we will now add eventListner
  // componentDidMount() {
  //   console.log(this.imageRef);

  //   console.log(this.imageRef.current.clientHeight);
  // }

  componentDidMount() {
    this.imageRef.current.addEventListener("load", this.setSpans); //here we r making callback to the setSpans()
  }
  setSpans = () => {
    //console.log(this.imageRef.current.clientHeight);
    const height = this.imageRef.current.clientHeight;

    const spans = Math.ceil(height / 10); //150 is the row height

    this.setState({ spans }); //here we r using ES6 js..ie without initializing the value.
  };

  render() {
    //here we have done the destructuring part of our this.props.image part ref. to alt and src pt in the tag.
    const { description, urls } = this.props.image;
    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img ref={this.imageRef} alt={description} src={urls.regular} />
      </div>
    );
  }
}
export default ImageCard;
