import React from "react";

export default function ParseObjectTable({objects}) {
    console.log(objects)
    return (
        <div>
            <p>objs</p>
            <div>
            { objects.length > 0 &&
                objects.map((item, index) => {
                    return (
                        <ul key={index}>
                            <li>{item.name}</li>
                            <li>{item.type}</li>
                            <li>Attributes</li>
                            {
                                item.attributes.map((attr, index) => {
                                    return (
                                        <ul key={index}>
                                            <li>{attr.name}</li>
                                            <li>
                                                <ul>
                                                    <li>{attr.value}</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    );
                                })
                            }
                        </ul>
                    )
                })
            }
            </div>
        </div>
    )
}
