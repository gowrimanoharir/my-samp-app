import React from "react";
import {ListDiv, ListItem, ListHeader} from './style';


const List = (props) => {
    const myListArr = props.arrList;
return (
    <ListDiv>
        <ListHeader>My List ({myListArr.length})</ListHeader>
        <ul>    
            { myListArr.map((item, index) =>
                <ListItem key={index}>{item}</ListItem>
            )}
        </ul>

    </ListDiv>
);
}

export default List;