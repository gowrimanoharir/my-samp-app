import styled, { injectGlobal } from '../node_modules/styled-components';

injectGlobal`
    html, body {
        font-family: sans-serif;
        margin: 0;   
    }
`;

const MainDiv = styled.div`
  background: #c6e7ea;
  padding-bottom: 5px;
  min-height: 100%;
`;

const PageHeader = styled.h1`
  margin-top: 0;
  text-align: center;
  padding-top: 10px;
`;

const AddDiv = styled.div`
  background: #d4d6d6;
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
  line-height: 1.5;
`;

const AddButton = styled.button`
  border-radius: 2px;
  background-color: #fff;
  border: none;
  line-height: 1.5;
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

const Ulist = styled.ul`list-style-type: none;`;

const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  min-width: 250px;
  background: palevioletred;
  padding: 5px;
  margin: 5px;
`;

const DelButton = styled.button`
  border: none;
  background: none;
  font-weight: bold;
`;

export {
  InputBox,
  AddDiv,
  AddButton,
  MainDiv,
  PageHeader,
  ListHeader,
  ListDiv,
  ListItem,
  Ulist,
  DelButton
};
