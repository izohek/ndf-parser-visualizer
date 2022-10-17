import React, {useState} from "react";
import trav2 from "./test-data/trav-2.json";
import { search } from 'ndf-parser';

export default function Traverse() {

    const [keypath, setKeypath] = useState('')
    const [jsonData, setJsonData] = useState(trav2)
    const [output, setOutput] = useState('')

    function traverse() {
        console.log("Traverse")
        let x = search(jsonData, keypath)
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
                <pre>{JSON.stringify(output, null, 4)}</pre>
                <pre>{JSON.stringify(jsonData, null, 4)}</pre>
            </div>
        </div>
    )
}
