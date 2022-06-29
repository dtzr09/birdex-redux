import styled from "styled-components";

export const SearchContainer = styled.div`
  background-color: transparent;
  display: flex;
  padding: 40px;
  width: 500px;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;

  //Styling the input field
  [type="text"] {
    padding: 5px;
  }

  @media (min-width: 320px) and (max-width: 568px) {
    padding: 0px;
    margin: 0px;
    padding-top: 10px;
    width: 100vw;
    text-align: center;
  }
`;

export const SearchWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SearchLabel = styled.h3`
  font-size: 18px;
  color: white;
  margin-bottom: 10px;
  font-size: 20px;

  @media (min-width: 320px) and (max-width: 568px) {
    font-size: 18px;
  }
`;

export const SearchInput = styled.input`
  opacity: 0.7;
  border-radius: 10px;
  border: none;
  outline: none;
  width: 300px;
  height: 30px;

  @media (min-width: 320px) and (max-width: 568px) {
    width: 250px;
    height: 30px;
    border-radius: 5px;
  }
`;
