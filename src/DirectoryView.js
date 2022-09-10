import React from "react"
import { filesMassena } from "./files/FileDir";

export default function DirectoryView({root, selected}) {

    return (
        <div className="dir-view">
            Files
            <ul>
            {
                filesMassena.map((file) => {
                    return (
                        <li key={file} onClick={ e => selected(root + file)}>{file}</li>
                    );
                })
            }
            </ul>
        </div>
    )
}
