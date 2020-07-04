import React from "react";
import "./styles/note.css";

function Note(props) {
  let postDate = props.date;
  let year = postDate.getFullYear();
  let month = postDate.getMonth();
  let day = postDate.getDate();
  let hrs = postDate.getHours();
  let mins = postDate.getMinutes();
  let secs = postDate.getSeconds();
  if (hrs < 10) {
    hrs = `0${hrs}`;
  }
  if (mins < 10) {
    mins = `0${mins}`;
  }
  if (secs < 10) {
    secs = `0${secs}`;
  }
  let dateStr = `${year}/${month + 1}/${day} ${hrs}:${mins}:${secs}`;
  return (
    <div className="note">
      <p className="title">{props.title ? props.title : null}</p>
      <p className="date-posted">{dateStr}</p>
      <p className="content">{props.content}</p>
      <div className="note-btns">
        <button
          className="edit-btn"
          id={props.postID}
          onClick={props.toggleEdit}
        >
          Edit
        </button>
        <button
          className="delete-btn"
          id={props.postID}
          onClick={props.handleDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default Note;
