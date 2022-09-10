import './App.css';
import React from 'react';
import { NdfParser } from "ndf-parser"
import DirectoryView from './DirectoryView';

function App() {
  
  const [text, setText] = React.useState("")
  const [selectedFile, setSelectedFile] = React.useState("")

  if (selectedFile) {
    fetch(selectedFile)
      .then((response) => response.text())
      .then((responseText) => {
        setText(responseText)
      })
      .catch((error) => console.log("Fetch error", error))
  }

  let results = null
  let parseError = null
  try {
      const parser = new NdfParser(text)
      results = parser.parse()
      parseError = null
    } catch (e) {
      console.log("err", e)
      parseError = e
    }
  
  const tokens = results[0]
  const objects = results[1]
  
  return (
    <div className="App">
      <div>
        <DirectoryView root={'ndf/'} selected={ (file) => setSelectedFile(file)} />
      </div>
      <div>
        <p>{ selectedFile || "Select a file" }</p>
        {
          parseError && 
          <div>
            <p>Parse Error:</p>
            <pre>{parseError}</pre>
          </div>
        }
        <pre>
            { 
              JSON.stringify(objects, null, 4)
            }
        </pre>
      </div>

    </div>
  );
}

export default App;
