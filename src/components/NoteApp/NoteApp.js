import React, { Component } from "react";
import Note from "./Note";
import ColorBox from "./ColorBox";

export default class NoteApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      colors: [
        "#fff",
        "#FFD37F",
        "#FFFA81",
        "#D5FA80",
        "#78F87F",
        "#79FBD6",
        "#79FDFE",
        "#7AD6FD",
        "#7B84FC",
        "#D687FC",
        "#FF89FD",
      ],
      notes: [],
      noteTitle: "",
      inputColor: "#fff",
    };

    


    this.inputGether = this.inputGether.bind(this);
    this.enterFinder = this.enterFinder.bind(this);
    this.noteCreator = this.noteCreator.bind(this);
    this.deleteAll = this.deleteAll.bind(this);
    this.touchDelete = this.touchDelete.bind(this);
  }



  colorSelector(color) {
    this.setState({ inputColor: color });
  }



  inputGether(event) {
    this.setState({ noteTitle: event.target.value });
  }




  enterFinder(event) {
    
    if (event.key == "Enter") {

      this.noteCreator();

    }
  }






  noteCreator() {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
           {
            id: this.state.notes.length + 1,
            title: this.state.noteTitle,
            color: this.state.inputColor,
          },
        ],
        inputColor: "#fff",
        noteTitle: "",
      };
    });
    
  }






  deleteAll() {
    this.setState({ notes: [] });
  }





  touchDelete(id) {
    const afterDelete = this.state.notes.filter((obj) => obj.id != id);
    this.setState({ notes: afterDelete });
  }







  render() {
    return (
      <>
        <div>
          <section id="home">
            <div className="container">
              <div className="header upper">react note App</div>

              <br />
              <br />
              <div className="flex row-gt-sm">
                <div className="flex flex-50-gt-sm">
                  <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 mx-auto">
                    <input
                      id="input-field"
                      className="form-control"
                      type="text"
                      style={{ backgroundColor: this.state.inputColor }}
                      placeholder="Something here..."
                      onChange={(event) => this.inputGether(event)}
                      onKeyDown={(event) => this.enterFinder(event)}
                      value={this.state.noteTitle}
                    />
                  </div>
                  <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 mx-auto">
                    <div id="color-select">
                      {this.state.colors.map((color, index) => (
                        <ColorBox
                          key={index}
                          color={color}
                          colorSelector={this.colorSelector.bind(this, color)}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 mx-auto my-1 text-right">
                    <button
                      id="btn-save"
                      type="button"
                      className="btn btn-outline-info"
                      onClick={() => this.noteCreator()}
                    >
                      <span className="fa fa-plus"></span>
                    </button>
                    <button
                      id="btn-delete"
                      type="button"
                      className="btn btn-outline-danger"
                      onClick={() => this.deleteAll()}
                    >
                      <span id="btn-icon" className="fa fa-eraser"></span>
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex row-gt-sm">
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                  <div className="container">
                    <div className="row">
                      <div
                        id="listed"
                        className="col-11 col-sm-11 col-md-11 col-lg-11 col-xl-11 p-3 card-columns"
                      >
                        {this.state.notes.map(
                          (obj) =>
                           obj.title&&(
                              <Note obj={obj} touchDelete={this.touchDelete} />
                            )
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </>
    );
  }
}
