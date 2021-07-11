import React, { Component } from "react";
import marked from "marked";
import defaultText from "./defaultText";
import "./App.css";

marked.setOptions({ breaks: true });

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { editorText: defaultText };
  }

  render() {
    return (
      <div id="container">
        {/* Input Box */}
        <textarea
          id="editor"
          value={this.state.editorText}
          onChange={(event) =>
            this.setState({ editorText: event.target.value })
          }
        ></textarea>
        {/* Splitter */}
        <div id="splitter"></div>
        {/* Output Box */}
        <div
          id="preview"
          dangerouslySetInnerHTML={{
            __html: marked(this.state.editorText),
          }}
        ></div>
        <p id="clear" onClick={() => this.setState({ editorText: "" })}>
          Clear all
        </p>
        <p id="reset" onClick={() => this.setState({ editorText: "" })}>
          Reset
        </p>
      </div>
    );
  }
}

export default App;
