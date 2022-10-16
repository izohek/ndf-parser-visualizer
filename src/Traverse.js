import React, {useState} from "react";
import trav1 from "./test-data/trav-1.json";
import { inspect, keyPathFromString } from 'ndf-parser';

export default function Traverse() {

    const [keypath, setKeypath] = useState('')
    const [jsonData, setJsonData] = useState(trav1)
    const [output, setOutput] = useState('')

    function traverse() {
        console.log("Traverse")
        let path = keyPathFromString(keypath)
        console.log(path)
        let x = inspect(jsonData, path)
        console.log(x)
        setOutput(x)
    }

    return (
        <div >
            <div>traverse</div>
            <div style={{margin:"1rem", border:"1px solid black", padding:"1rem"}}>
                <label htmlFor="keypath_input" style={{display:"block"}}>Key Path</label>
                <input name="keypath_input" value={keypath} onChange={ e => setKeypath(e.target.value)} />
                <button onClick={ e => traverse() }>Traverse</button>
            </div>
            <div style={{margin:"1rem", border:"1px solid black", padding:"1rem"}}>
                <label htmlFor="json_object" style={{display:"block"}}>JSON object</label>
                <textarea name="json_object" onChange={ e => setJsonData(e.target.value) } value={jsonData} />
            </div>

            <div>
                Output
                <pre>{output}</pre>
                <pre>{JSON.stringify(jsonData, null, 4)}</pre>
            </div>
        </div>
    )
}
