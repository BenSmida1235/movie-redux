import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Modal,
  Button,
  Input,
  ModalBody,
  ModalFooter,
  ModalHeader
} from "reactstrap";

import { addNewMovie } from "../JS/Actions/Actions";

class AddNewMovie extends Component {
  state = {
    modal: false,
    newMovie: {
      title: "",
      poster: "",
      rating: 0
    }
  };

  onChangeHandler = e =>
    this.setState({
      ...this.state,
      newMovie: { ...this.state.newMovie, [e.target.name]: e.target.value }
    });
  toggle = () => this.setState({ ...this.state, modal: !this.state.modal });
  render() {
    return (
      <div>
        <Button color="danger" onClick={this.toggle}>
          Add New Movie
        </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Add New Movie</ModalHeader>
          <ModalBody>
            <Input
              onChange={this.onChangeHandler}
              type="text"
              placeholder="Enter a movie name..."
              name="title"
            />
            <Input
              onChange={this.onChangeHandler}
              type="text"
              placeholder="Enter a movie image..."
              name="poster"
            />
            <Input
              onChange={this.onChangeHandler}
              type="text"
              placeholder="Enter a movie rate..."
              name="rating"
            />
          </ModalBody>
          <ModalFooter>
            <Button
              color="primary"
              onClick={() => {
                this.toggle();
                this.props.addNewMovie(this.state.newMovie);
              }}
            >
              Add
            </Button>{" "}
            <Button color="secondary" onClick={this.toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
const mapDispatchToProps = {
  addNewMovie
};
export default connect(null, mapDispatchToProps)(AddNewMovie);
