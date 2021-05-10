
import React, { useState } from 'react'
import { useCombobox } from 'downshift'


function DropdownCombobox({type, label, input, stateProp, onChange}) {

    const items = ["Magic Kingdom", "Epcot", "Hollywood Studios", "Animal Kingdom"]
    const menuStyles = {
        maxHeight: 80,
        maxWidth: 300,
        overflowY: 'scroll',
        backgroundColor: '#eee',
        padding: 0,
        listStyle: 'none',
        position: 'relative',
    }

    const [inputItems, setInputItems] = useState(items)
    const {
        isOpen,
        getLabelProps,
        getMenuProps,
        getInputProps,
        getComboboxProps,
        highlightedIndex,
        getItemProps,
    } = useCombobox({
        items: inputItems,
        onInputValueChange: ({ inputValue }) => {
            setInputItems(
                items.filter(item =>
                    item.toLowerCase().startsWith(inputValue.toLowerCase()),
                ),
            )
        },
    })
    return (
        <div>
            <label htmlFor={input} {...getLabelProps()}>{label}</label>
            <div {...getComboboxProps()}>
                <input {...getInputProps()} id={input} name={input} type={type} value={stateProp} onChange={onChange}/>
            </div>
            <ul {...getMenuProps()} style={menuStyles}>
                {isOpen &&
                    inputItems.map((item, index) => (
                        <li
                            style={
                                highlightedIndex === index
                                    ? { backgroundColor: '#bde4ff' }
                                    : {}
                            }
                            key={`${item}${index}`}
                            {...getItemProps({ item, index })}
                        >
                            {item}
                        </li>
                    ))}
            </ul>
        </div>
    )
}


export default DropdownCombobox;
