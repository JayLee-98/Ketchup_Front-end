import { useRef, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";


function Editor() {

    const [value, setValue] = useState("");

    const quillRef = useRef(null);const modules = {
      toolbar: {
        container: [
          ["image"],
          [{ header: [1, 2, 3, 4, 5, false] }],
          ["bold", "underline"],
        ],
      },
    };
    
    return (
      <>
        <ReactQuill
          style={{ height: "350px", margin1: "4px",  overflowY: 'auto' }}
          ref={quillRef}
          modules={modules}
          theme="snow"
          value={value}
          onChange={setValue}
          placeholder="내용을 입력하세요."/>

        {/* <button onClick={onClickSave}>저장</button> */}
      </>
    );
}

export default Editor;