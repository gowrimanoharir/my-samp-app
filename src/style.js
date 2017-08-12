import styled from '../node_modules/styled-components'

const MainDiv = styled.div`
        background: #C6E7EA;
        padding-bottom: 5px;       
`;

const PageHeader = styled.h1`
        text-align: center;
        padding-top: 10px;
`;

const AddDiv = styled.div`
        background: #D4D6D6;
        display: flex; 
        justify-content: center;
        padding: 10px;
        margin: 10px;
`;

const InputBox = styled.input`
        border-radius: 2px;
        border: none;
        margin-right: 5px;
        width: 20%;
`;

const AddButton = styled.button`
        border-radius: 2px;
        background-color: #FFF;
        border: none;
`;

const ListDiv = styled.div`
        background: #ddc9a2;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 10px;
        margin: 10px;
`;

const ListHeader = styled.h3`
        padding-top: 5px;
        margin: 0px;
`;

const ListItem = styled.li`
        background: palevioletred;
        padding: 5px;
        margin: 5px;
`;


export {InputBox, AddDiv, AddButton, MainDiv, PageHeader, ListHeader, ListDiv, ListItem};

