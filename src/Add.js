import React from 'react';
import { InputBox, AddDiv, AddButton } from './style';
import List from './List';

class Add extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      myListArr: []
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.itemDelete = this.itemDelete.bind(this);
  }

  handleInputChange(e) {
    this.setState({ value: e.target.value });
  }

  handleAdd(e) {
    this.state.myListArr.push(this.state.value);
    console.log('item added' + this.state.myListArr);
    this.setState({ value: '' });
  }

  itemDelete(id) {
    this.setState(this.state.myListArr.splice(id, 1));
    console.log(this.state.myListArr);
  }

  render() {
    const arrList = this.state.myListArr;
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
    );
  }
}

export default Add;
