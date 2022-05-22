import { PureComponent } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import styled from "@emotion/styled";

const StyledReactQuill = styled(ReactQuill)`
  .ql-editor {
    max-height: 800px;
    overflow-y: scroll;
  }
  .ql-snow {
    font-size: 18px;
  }
  .ql-video {
    width: 1010px;
    height: 500px;
  }
`;

class EditorWrapper extends PureComponent {
  render() {
    return (
      <div>
        <StyledReactQuill
          theme="snow"
          modules={{
            toolbar: [
              [{ font: [] }],
              [{ header: [1, 2, 3, 4, 5, 6, false] }],
              ["bold", "italic", "underline", "strike"],
              [{ color: [] }, { background: [] }],
              [{ script: "sub" }, { script: "super" }],
              ["blockquote", "code-block"],
              [{ list: "ordered" }, { list: "bullet" }],
              [{ indent: "-1" }, { indent: "+1" }, { align: [] }],
              ["link", "image", "video"],
              ["clean"],
            ],
          }}
          onChange={this.props.onChange}
          value={this.props.value}
        />
      </div>
    );
  }
}

export default EditorWrapper;
