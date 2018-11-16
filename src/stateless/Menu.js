import React from "react";


export const Menu = (props) => {
    return (
        <div className="menuStyle">
            <p>{props.title}</p>
            <form>
                <MenuItem choices={props.choices} _handleChange={props.handleChange} checked={props.checked} _filterTable={props._filterTable}/>
            </form>
     
        </div>
    )
}

const MenuItem = (props) => {
    return (
        <div className="inputs">
        {props.choices.map((c, index) => (
            <label key={index}>
            <input type="checkbox" name={c} value={c} key={index} onChange={(e) => props._filterTable(c, e)}/>
            {c}
              <br/>
            </label>
          
        ))}
        </div>
    )
}