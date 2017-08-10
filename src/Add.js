import React from "react"
import AddDiv from './stylecomps/AddDiv';
import InputBox from './stylecomps/InputBox';
import AddButton from './stylecomps/AddButton';


const Add = () => {
return (
<AddDiv>
    <InputBox type="text" id="add-item"/>
    <AddButton>Add Item</AddButton>
</AddDiv>

);
}

export default Add;
