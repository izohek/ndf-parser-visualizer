import './App.css';
import React from 'react';
import {parseNdf, NdfParser } from "ndf-parser"
import textFile from "./test-data/Packs.ndf"
import deckTextFile from "./test-data/Decks.ndf"
import TokenTable from './TokenTable';
import ParseObjectTable from './ParseObjectTable';

function App() {
  
  const [text, setText] = React.useState("")

  fetch(deckTextFile)
    .then((response) => response.text())
    .then((responseText) => {
      setText(responseText)
    })

  const parser = new NdfParser(text)
  const results = parser.parse()
  const tokens = results[0]
  const objects = results[1]

  return (
    <div className="App">
      <div>
        <pre>
            {
              JSON.stringify(objects, null, 4)
            }
        </pre>
      </div>

      <div>
        { objects &&
          <ParseObjectTable objects={objects} />
        }
      </div>

      <div>
      { tokens.length > 0 && 
        <TokenTable tokens={tokens} />
      }
      </div>

    </div>
  );
}

export default App;
