import './App.css';
import React from 'react';
import { NdfParser } from "ndf-parser"
import DirectoryView from './DirectoryView';

function ParserVisualizer() {
  
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
  
  const tokens = results ? results[0] : []
  const objects = results ? results[1] : []
  const json = JSON.stringify(objects, null, 4)

  function downloadJson() {
    
    if (selectedFile) {
      const element = document.createElement("a");
      const file = new Blob([json], {
        type: "text/plain"
      });
      element.href = URL.createObjectURL(file);
      const segments = selectedFile.split('/')
      const singleFileName = segments[segments.length - 1]
      element.download = singleFileName + ".json";
      document.body.appendChild(element);
      element.click();
    }

  }
  
  return (
    <div className="App">
      <div>
        <DirectoryView root={'ndf/'} selected={ (file) => setSelectedFile(file)} />
      </div>
      <div>
        <p>{ selectedFile || "Select a file" }</p>
        <div>
          { selectedFile && 
            <button onClick={ downloadJson }>Download JSON</button>
          }
        </div>
        {
          parseError && 
          <div>
            <p>Parse Error:</p>
            <pre>{parseError.message}</pre>
          </div>
        }
        <pre>
            { 
              json
            }
        </pre>
      </div>

    </div>
  );
}

export default ParserVisualizer;
