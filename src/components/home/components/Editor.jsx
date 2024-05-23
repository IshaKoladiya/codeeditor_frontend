import React from "react";
import { Controlled as CodeEditor } from "react-codemirror2";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/twilight.css";
import "codemirror/mode/css/css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
const Editor = ({ value, handleChange, language, displayName }) => {
  return (
    <div>
      <div>
        <h1 style={{ color: "white" }}>{displayName}</h1>
      </div>
      <CodeEditor
        value={value}
        onBeforeChange={handleChange}
        className="code-mirror-wrapper"
        options={{
          lineWrapping: true,
          theme: "twilight",
          mode: language,
          lineNumbers: true,
          tabSize: "5",
        }}
      />
    </div>
  );
};

export default Editor;
