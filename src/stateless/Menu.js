import React from "react";


export const Menu = (props) => {
    return (
        <div className="menuStyle">
            <h4>{props.title}</h4>
            <form>
                <MenuItem choices={props.choices}/>
            </form>
     
        </div>
    )
}

const MenuItem = (props) => {
    return (
        <div>
        {props.choices.map((c, index) => (
            <label key={index}>
            <input type="checkbox" name={c} value={c} key={index}/>
            {c}
              <br/>
            </label>
          
        ))}
        </div>
    )
}