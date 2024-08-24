import React, { useState } from 'react';
import './App.css';
import Article from './Article';
import { AccessLevel } from "./types/types";

function App() {
  const [editing, setEditing] = useState(false);
  const [articleContent, setArticleContent] = useState("No content.. click below to add content.");

  let access: AccessLevel = 'write';

  const handleSubmit = (newContent: string) => {
    setEditing(false);
    setArticleContent(newContent);
  }

  const button = !editing ? 
    <button onClick={() => setEditing(true)}>Edit</button> : 
    <button onClick={() => handleSubmit(document.querySelector('textarea')?.value || '')}>Save</button>;

  return (
    <div className="App">
      <header className="App-header">
        <Article 
          heading={'My Article'} 
          content={articleContent} 
          accessLevel={access} 
          isEditing={editing}
        />
        {button}
      </header>
    </div>
  );
}

export default App;