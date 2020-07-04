import React from "react";
import NoteForm from "./NoteForm";
import Note from "./Note";
import UpdateForm from "./UpdateForm";
import "./styles/App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      noteObj: {},
      postCount: 0,
      newFormOpen: false,
      updateFormOpen: false,
      currentEditPostID: null,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }
  handleChange(e) {
    let name = e.target.name;
    let value = e.target.value;
    this.setState({
      [name]: value,
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    let name = e.target.name;
    let formStatus = this.state.newFormOpen;
    if (name === "saveBtn") {
      let postDate = new Date();
      let newNoteObj = this.state.noteObj;
      let postID = this.state.postCount + 1;
      let newEntry = {
        postID: postID,
        title: this.state.noteTitle ? this.state.noteTitle : null,
        content: this.state.noteContent,
        postDate: postDate,
      };
      newNoteObj[postID] = newEntry;
      this.setState({
        postCount: postID,
        noteObj: newNoteObj,
        newFormOpen: !formStatus,
      });
    } else {
      this.setState({
        newFormOpen: !formStatus,
      });
    }
    let title = document.getElementById("form-title");
    let content = document.getElementById("form-content");
    title.value = "";
    content.value = "";
  }
  handleDelete(e) {
    let key = e.target.id;
    let currentNoteObj = this.state.noteObj;
    delete currentNoteObj[key];
    this.setState({
      noteObj: currentNoteObj,
    });
  }
  handleUpdate(e) {
    e.preventDefault();
    let formStatus = this.state.updateFormOpen;
    let currentNoteObj = this.state.noteObj;
    let postToEdit = currentNoteObj[this.state.currentEditPostID];
    let title = this.state.noteTitle ? this.state.noteTitle : null;
    let content = this.state.noteContent;
    let postDate = new Date();
    postToEdit.title = title;
    postToEdit.content = content;
    postToEdit.postDate = postDate;
    currentNoteObj[this.state.currentEditPostID] = postToEdit;
    this.setState({
      noteObj: currentNoteObj,
      updateFormOpen: !formStatus,
    });
  }
  toggleEdit(e) {
    let postID = e.target.id;
    this.toggleForm(e);
    let title = document.getElementById("updateForm-title");
    let content = document.getElementById("updateForm-content");
    title.value = this.state.noteObj[postID].title;
    content.value = this.state.noteObj[postID].content;
    this.setState({
      currentEditPostID: postID,
    });
  }
  toggleForm(e) {
    let btnClass = e.target.className;
    if (btnClass === "create-btn") {
      let formStatus = this.state.newFormOpen;
      this.setState({
        newFormOpen: !formStatus,
      });
    } else if (btnClass === "edit-btn") {
      let formStatus = this.state.updateFormOpen;
      this.setState({
        updateFormOpen: !formStatus,
      });
    }
  }
  render() {
    let noteList = [];
    for (const property in this.state.noteObj) {
      noteList.push(this.state.noteObj[property]);
    }
    const noteElements = noteList
      .map((note) => {
        return (
          <div key={note.postID}>
            <Note
              postID={note.postID}
              title={note.title}
              content={note.content}
              date={note.postDate}
              handleDelete={this.handleDelete}
              toggleEdit={this.toggleEdit}
            />
            <div className="note-border"></div>
          </div>
        );
      })
      .sort((a, b) => b.key - a.key);
    let newFormDisplay = this.state.newFormOpen ? "flex" : "none";
    let updateFormDisplay = this.state.updateFormOpen ? "flex" : "none";
    let noteContainerDisplay;
    if (this.state.newFormOpen || this.state.updateFormOpen) {
      noteContainerDisplay = "none";
    } else {
      noteContainerDisplay = "block";
    }
    return (
      <div>
        <div className="container">
          <NoteForm
            displayProp={newFormDisplay}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
          <UpdateForm
            displayProp={updateFormDisplay}
            handleChange={this.handleChange}
            handleUpdate={this.handleUpdate}
          />
          <div
            className="notes-container"
            style={{ display: noteContainerDisplay }}
          >
            {noteElements}
          </div>
        </div>
        <div className="footer">
          <button className="menu-btn">Menu</button>
          <h1 className="logo">QuickNote</h1>
          <button className="create-btn" onClick={this.toggleForm}>
            Create
          </button>
        </div>
      </div>
    );
  }
}

export default App;
