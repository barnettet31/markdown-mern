import Editor, { useMonaco } from "@monaco-editor/react";
import { useTheme } from "../../context/theme.context";
import { useEffect } from "react";

export interface IEditorProps {
  markdown: string | undefined;
  callback: (value: string) => void;
}
export const CodeEditor = ({ markdown, callback }: IEditorProps) => {
  const { darkMode } = useTheme();
  const monaco = useMonaco();
  useEffect(() => {
    function updateEditorTheme() {
      if (monaco)
        return monaco.editor.setTheme(
          darkMode === "dark" ? "vs-dark" : "vs-light"
        );
    }
    updateEditorTheme();
  }, [darkMode]);
  return (
    <Editor
      width={"100%"}
      defaultLanguage="markdown"
      value={markdown}
      options={{
        codeLens: false,
        contextmenu: false,
        fontFamily: "Roboto Mono",
        fontSize: 16,
        minimap: {
          enabled: false,
        },
        scrollBeyondLastLine: false,
        scrollBeyondLastColumn: 0,
        lineNumbers: "off",
        links: false,
        automaticLayout: true,
        padding: {
          top: 16,
          bottom: 16,
        },
        wordWrap: "on",
        renderLineHighlight: "none",
        overviewRulerLanes: 0,
        hideCursorInOverviewRuler: true,
        scrollbar: {
          vertical: "hidden",
        },
        overviewRulerBorder: false,
      }}
      theme="vs-dark"
      keepCurrentModel={false}
      onChange={(value) => {
        if (!value) return;
        callback(value);
      }}
    />
  );
};
