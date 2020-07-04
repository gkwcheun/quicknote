import React from "react";
import "./styles/noteform.css";

function NoteForm(props) {
  return (
    <form
      // onSubmit={props.handleSubmit}
      style={{ display: props.displayProp }}
      className="note-form"
    >
      <input
        onChange={props.handleChange}
        name="noteTitle"
        type="text"
        placeholder="Title (Optional)"
        className="input-title"
        id="form-title"
      ></input>
      <textarea
        onChange={props.handleChange}
        name="noteContent"
        type="text"
        placeholder="Type something..."
        className="content-input"
        id="form-content"
      ></textarea>
      <div className="input-btns">
        <button
          onClick={props.handleSubmit}
          name="cancelBtn"
          className="cancel-btn"
        >
          Cancel
        </button>
        <button
          onClick={props.handleSubmit}
          name="saveBtn"
          className="save-btn"
        >
          Save
        </button>
      </div>
    </form>
  );
}

export default NoteForm;
