import React, { useState } from "react"
import { files } from "./files/FileDir";

const patches = [
    "massena",
    "bessieres",
    "suchet",
    "oudinot",
];

export default function DirectoryView({root, selected}) {

    const [activePatch, setActivePatch] = useState('oudinot')

    return (
        <div>
            <h3>Files</h3>
            <div style={{textAlign:"left"}}>
                <label htmlFor="patch-select" style={{marginRight:"1em"}}>Patch</label>
                <select id="patch-select" name="patch-select" value={activePatch} onChange={(event) => { setActivePatch(event.target.value)} }>
                    {
                        patches.map((patch) => {
                            return (
                                <option value={patch} key={patch}>{patch}</option>
                            )
                        })
                    }
                </select>
            </div>
            <div className="dir-view">
                <ul>
                {
                    files[activePatch].map((file) => {
                        return (
                            <li key={file} onClick={ e => selected(root + file)}>{file}</li>
                        );
                    })
                }
                </ul>
            </div>
        </div>
    )
}
