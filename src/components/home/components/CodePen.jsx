import React, { useEffect, useState } from "react";
import homeStyle from "../style/home-style.module.css";
import io from "socket.io-client";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Editor } from "../pages";


const server = io('http://localhost:5000')

const CodePen = () => {
  const [htmlValue, setHtmlValue] = useState("");
  const [cssValue, setCssValue] = useState("");
  const [jsValue, setJsValue] = useState("");

  const { id } = useParams();

  console.log(id)

  const handleChangeValue = (lang, value) => {
    server.emit("send-code", {
      lang,
      value,
      id,
    });
  };

  useEffect(() => {
    server.on("received-code", (data) => {
      if (data.id == id) {
        if (data.lang == "HTML") {
          setHtmlValue(data.value);
        } else if (data.lang == "CSS") {
          setCssValue(data.value);
        } else {
          setJsValue(data.value);
        }
      }
    });
  }, []);

  useEffect(() => {
    // const id = JSON.parse(localStorage.getItem('userId'))
    axios.get(`http://localhost:5000/user/project/${id}`).then((res) => {
      setHtmlValue(res.data.HTML);
      setCssValue(res.data.CSS);
      setJsValue(res.data.JS);
    });
  }, []);

  return (
    <div className={homeStyle.main}>
      <div className={homeStyle.codepen}>
        <div
          style={{
            display: "grid",
            gridTemplateRows: "1fr auto 1fr",
            width: "100%",
            height:"100vh",
            gap:"10px",
            overflow: "hidden",
            padding: "15px",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              gap: "5px",
            }}
          >
            <Editor
              value={htmlValue}
              handleChange={(e, d, v) => handleChangeValue("HTML", v)}
              language={"xml"}
              displayName={"HTML"}
            />
            <Editor
              value={cssValue}
              handleChange={(e, d, v) => handleChangeValue("CSS", v)}
              language={"css"}
              displayName={"CSS"}
            />
            <Editor
              value={jsValue}
              handleChange={(e, d, v) => handleChangeValue("JS", v)}
              language={"javascript"}
              displayName={"JS"}
            />
          </div>
          <hr />
          <div>
            <iframe
              width={"100%"}
              height={'80%'}
              style={{
                border: "1px solid white",
              }}
              srcDoc={`<head><style>${cssValue}</style></head><body>${htmlValue}<script>${jsValue}</script></body>`}
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodePen;
