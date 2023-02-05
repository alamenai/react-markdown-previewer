import MarkdownTabs from "./components/Tabs";
import "./App.css";
import React from "react";

const App = () => {
  const defaultText = "# Welcome to react markdown";

  const [text, setText] = React.useState(defaultText);

  const onTyping = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

  return (
    <div className='container'>
      <MarkdownTabs content={text} onChangeContent={onTyping} />
    </div>
  );
};

export default App;
