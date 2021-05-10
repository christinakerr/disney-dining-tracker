/** @jsxImportSource @emotion/react */

import P from "../Text/P"
import { css } from '@emotion/react'


function Input({  input, type, label, id, value, pattern, checked, stateProp, onChange, onClick}){

    const parks = ["Magic Kingdom", "Epcot", "Hollywood Studios", "Animal Kingdom"];

    function dataList(){
        if (input === "park"){
            return <datalist id={input}>
                <option value="whatever" />
                {/* {
                    parks.map(park => {
                        return <option value={park} />
                    })
                } */}
            </datalist>
        }
    }
    return (
        <div>
            <label htmlFor={input}>
                <P label type={type==="radio" ? "radio":""}>{label}</P>
            </label>
            <input css={[type==="radio" ? radio:""]} 
            id={id || input} name={input} 
            type={type} 
            value={stateProp || value} 
            pattern={pattern} 
            accept={type === "file" ? "image/*": ""} 
            multiple={type === "file" ? "multiple" : ""} 
            onChange={onChange} 
            onClick={onClick}
            list={input}
            autocomplete="on" />

            {/* {dataList()} */}
            <datalist id={input}>
                <option value="cool" />
            </datalist>
        </div>
    );
}

export default Input;

const radio = css`
    float: left;
`
