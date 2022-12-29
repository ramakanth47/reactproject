import React from 'react'
import colorNames from 'colornames';

const Input = ( { 
    colorvalue, setColorvalue, setHexValue, isDarkText, setIsDarkText
 }) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
        <label>Add Color Name:</label>
        <input 
          autoFocus
          type="text"
          placeholder="Add color name"
          required
          value={colorvalue}
          onChange={(e) => {
            setColorvalue(e.target.value);
            setHexValue(colorNames(e.target.value));
        }}
        />
        <button>
            type="button"
            onClick={() =>setIsDarkText(setIsDarkText)}
           
            Toggle Text Color
        </button>
        </form>
  )
    }
 export default Input