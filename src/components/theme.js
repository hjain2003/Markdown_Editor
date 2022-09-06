import React from 'react'
import { useState } from "react";
import ReactMarkdown from 'react-markdown'

function Theme() {
    const [markdown, setmarkdown] = useState("Type Here");
    const [show, setShow] = useState(true);
    return (
        <>
            <div className="bigcontainer">

                <div className="left">
                    {

                        show && <textarea className="typehere" placeholder={markdown} onChange={(e) => setmarkdown(e.target.value)}></textarea>
                    }
                </div>

                <div className="middle">
                    <button id="save">Save</button>
                    <button id="delete" onClick={() => setShow(!show)}>Delete</button>
                </div>

                <div className="right">
                    <div className="typehereright">
                        {

                            show && <ReactMarkdown>{markdown}</ReactMarkdown>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Theme
