import styled from 'styled-components';

export const ListContainer = styled.div`
  display: flex;
  width: 400px;
  margin: 0 auto;
  padding: 0px 20px 0px 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const StyledContactList = styled.ul`
  list-style: none;
  padding: 0px;
  margin: 0px;
`;

export const ListItem = styled.li`
  text-align: center;
  width: 400px;
  padding: 10px;
`;
export const ContactInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const ContactName = styled.span`
  font-weight: bold;
`;

export const DeleteButton = styled.button`
  background-color: #ff6347;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 5px 15px;
  cursor: pointer;
`;
