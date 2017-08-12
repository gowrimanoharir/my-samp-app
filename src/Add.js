import React from "react"
import {InputBox, AddDiv, AddButton} from './style';


const Add = () => {
return (
    <AddDiv>
        <InputBox type="text" id="add-item"/>
        <AddButton>Add Item</AddButton>
    </AddDiv>
);
}

export default Add;
