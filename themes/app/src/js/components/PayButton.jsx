import React from "react";
import styled from "styled-components";

const Button = styled.button`
  cursor: pointer;
  display: inline-block;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: medium;
  height: 2rem;
  font-weight: 600;
  padding: 0.5rem 1rem;
  border-radius: 15px;
  background: #793ef9;
  width: 10vw;
  border: none;
  outline: none;
  color: white;
  margin: 0.25rem;
  &:hover {
    background: white;
    color: #793ef9;
    border: 1px solid #793ef9;
  }
`;
export default function PayButton(props) {
    let { text, onClick, type } = props;
    return (
        <>
            <Button  type={type}  onClick={onClick} >{text}</Button>
        </>
    );
}
