import React from "react"

//import style components necessary for this component
import { InputBox, AddDiv, AddButton } from "./style"

//import List component that will be rendered based on the added / deleted item
import List from "./List"

//create a class component to get input from user and be able to add and delete items in the list
class Add extends React.Component {
  state = {
    myListArr: [],
  }

  //anytime user enters data in input box the value property is set
  handleInputChange = e => {
    this.setState({ value: e.target.value })
  }

  //when add button is clicked then the input box value is added to the array that holds the list items and then empties the input box which also updates dom with new items
  handleAdd = e => {
    if (this.state.value) {
      this.setState(prevState => ({
        myListArr: [...prevState.myListArr, this.state.value],
      }))
      this.setState({ value: "" })
    }
  }

  //when delete button is clicked the index is passed from the List component which is then used to delete the item in array with help of splice and also dom is updated
  itemDelete = id => {
    this.setState(prevState => ({
      myListArr: prevState.myListArr.filter((_, i) => i !== id),
    }))
    //this.setState((prevState) => ({myListArr: prevState.myListArr.splice(id, 1)}))
  }

  //renders the dom with current state of array
  render() {
    const arrList = this.state.myListArr
    return (
      <div>
        <AddDiv>
          <InputBox
            type="text"
            value={this.state.value}
            onChange={this.handleInputChange}
            id="add-item"
          />
          <AddButton onClick={this.handleAdd}>Add Item</AddButton>
        </AddDiv>
        <List arrList={arrList} onDelete={this.itemDelete} />
      </div>
    )
  }
}

export default Add
