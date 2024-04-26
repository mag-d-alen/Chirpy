import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/ext-language_tools";

type EditorInputProps = {
  value: string;
  onChange?: (value: string) => void;
  readOnly?: boolean;
  isCode?: boolean;
  darkTheme?: boolean;
};

const EditorInput: React.FC<EditorInputProps> = ({
  value,
  onChange = (value: string) => {},
  readOnly = false,
  isCode = false,
  darkTheme = true,
}) => {
  return (
    <AceEditor
      placeholder="Type here..."
      mode="javascript"
      height={`${darkTheme ? "200px" : "100px"}`}
      width="100%"
      value={value}
      theme={`${darkTheme ? "monokai" : "github"}`}
      fontSize="16px"
      debounceChangePeriod={200}
      showPrintMargin={false}
      wrapEnabled={true}
      highlightActiveLine={true}
      setOptions={{
        textInput: !isCode,
        showGutter: false,
        useWrapMode: true,
        indentedSoftWrap: true,
        enableLiveAutocompletion: isCode,
        showLineNumbers: true,
        tabSize: 2,
      }}
      onChange={(e) => onChange(e)}
      readOnly={readOnly}
    />
  );
};
export default EditorInput;
