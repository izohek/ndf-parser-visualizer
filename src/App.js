import './App.css';
import React from 'react';
import {parseNdf} from "ndf-parser"
import textFile from "./test-data/Packs.ndf"
import deckTextFile from "./test-data/Decks.ndf"

function App() {
  
  const [text, setText] = React.useState("")

  fetch(deckTextFile)
    .then((response) => response.text())
    .then((responseText) => {
      setText(responseText)
    })
    // console.log(textFile)
  // const tokens = (text) ? tokenize(text) : Array.from([])
  // const groupedTokens = groupTokens(tokens)

  const tokens = parseNdf(text) 
// const tokens = []
  return (
    <div className="App">
      <table>
        <thead>
          <tr>            
            <th>Type</th>
            <td></td>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {tokens.filter((item) => { return item.type !== "LineTerminatorSequence" && item.type !== "WhiteSpace"})
                 .map((item,index) => {
            return (
              <>
              <tr key={index}>
                <td>{item.type}</td>
                <td></td>
                <td>{item.value.name ?? item.value} | {item.value.type}</td>
              </tr>
              {
                (item.value.children ?? []).map((child, index) => {
                  return (
                    <tr>
                      <td></td>
                      <td>{child.name}</td>
                      <td>{child.value}</td>
                    </tr>
                  )
                })
              }
              </>
            )
          })}
        </tbody>
        <tbody>
          <tr>
            <td></td>
            <td>{text}</td>
          </tr>
        </tbody>
      </table>
      
    </div>
  );
}

export default App;
