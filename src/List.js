import React from 'react';

//import style components necessary for this component
import { ListDiv, ListItem, ListHeader, Ulist, DelButton } from './style';

//create a class component to get input from user and be able to add and delete items in the list
class List extends React.Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
  }

  //this is invoked on click of delete button and in turn calls the onDelete method of Add component passing the index of the item that is stores as id in li element
  handleDelete(e) {
    this.props.onDelete(e.target.parentElement.id);
  }

  //renders the dom with current state of array that is passed from Add component
  render() {
    const myArrList = this.props.arrList;
    return (
      <ListDiv>
        <ListHeader>
          My List ({myArrList.length})
        </ListHeader>
        <Ulist>
          {myArrList.map((item, index) =>
            <ListItem id={index} key={index}>
              {item}
              <DelButton onClick={this.handleDelete}>X</DelButton>
            </ListItem>
          )}
        </Ulist>
      </ListDiv>
    );
  }
}

export default List;
