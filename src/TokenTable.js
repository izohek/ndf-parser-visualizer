import React from 'react';

export default function TokenTable({tokens}) {
    return(
      <table>
        <thead>
          <tr>            
            <th>Type</th>
            <th>Key?</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {tokens.filter((item) => { return item.type !== "LineTerminatorSequence" && item.type !== "WhiteSpace"})
                 .map((item,index) => {
            return (
                <React.Fragment key={index}> 
                    <tr>
                        <td>{item.type}</td>
                        <td></td>
                        <td>{item.value.name ?? item.value} | {item.value.type}</td>
                    </tr>
                    {
                        (item.value.children ?? []).map((child, index) => {
                        return (
                            <tr key={index}>
                                <td></td>
                                <td>{child.name}</td>
                                <td>{child.value}</td>
                            </tr>
                        )
                        })
                    }
                </React.Fragment>
            )
          })}
        </tbody>
      </table>
    )
}