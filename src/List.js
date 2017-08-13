import React from "react";
import {ListDiv, ListItem, ListHeader, Ulist, DelButton} from './style';


class List extends React.Component{
    constructor(props){
        super(props);
        //this.state = {myArrList: this.props.arrList};

        this.handleDelete = this.handleDelete.bind(this);    
    }

    handleDelete(e){
        this.props.onDelete(e.target.parentElement.id);
        console.log("elicked delete"+e.target.parentElement.id);
    }


    render(){
        const myArrList = this.props.arrList;
        return (
            <ListDiv>
                <ListHeader>My List ({myArrList.length})</ListHeader>
                <Ulist>    
                    { myArrList.map((item, index) =>
                        <ListItem id={index} key={index}>
                            {item}
                            <DelButton onClick = {this.handleDelete}>X</DelButton>
                        </ListItem>
                    )}
                </Ulist>

            </ListDiv>
        )};
}

export default List;