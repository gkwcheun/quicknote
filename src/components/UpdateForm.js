import React from "react";
import "./styles/noteform.css";

function UpdateForm(props) {
  return (
    <form style={{ display: props.displayProp }} className="note-form">
      <input
        onChange={props.handleChange}
        name="noteTitle"
        type="text"
        placeholder="Title (Optional)"
        className="input-title"
        id="updateForm-title"
      ></input>
      <textarea
        onChange={props.handleChange}
        name="noteContent"
        type="text"
        placeholder="Type something..."
        className="content-input"
        id="updateForm-content"
      ></textarea>
      <div className="input-btns">
        <button
          onClick={props.handleUpdate}
          name="cancelBtn"
          className="cancel-btn"
        >
          Cancel
        </button>
        <button
          onClick={props.handleUpdate}
          name="updateBtn"
          className="update-btn"
        >
          Update
        </button>
      </div>
    </form>
  );
}

export default UpdateForm;
