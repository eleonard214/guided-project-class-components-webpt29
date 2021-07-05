import React from "react";

class ListForm extends React.Component {
  // Constructor with state
  constructor() {
    super();
    this.state = {
      input: ''
    }
  }

  handleChanges = e => {
    // update state with each keystroke
    console.log(e.target.value);
  };

  // class property to submit form

  render() {
    return (
      <form>
        {/* This is an uncontrolled component 😬 We want it to be controlled by state */}
        <input onChange={this.handleChanges} type="text" name="item" />
        <button>Add</button>
      </form>
    );
  }
}

export default ListForm;