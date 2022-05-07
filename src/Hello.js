/* not used in robofriends. Just a first component demonstration */
import React from "react";

/*
 A react component can be any of following forms:
    - a function (this is what it trully is)
        `function Hello () { return ([html...]); }`
    - a class extends React.Component
        `class Hello extends React.Component { render ( return ([html...]); )}
    - a const variable containing a function (like #1)
*/
const Hello = (props) => {
    return (
        <div className='f1 tc'>
            <h1>Hello world</h1>
            <p>{props.greetings}</p>
        </div>
        
    )
}

export default Hello;