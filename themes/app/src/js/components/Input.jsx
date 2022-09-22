import React from "react";
import styled from "styled-components";

const InputStyle = styled.input`
  height: 1rem;
  line-height: 1;
  padding: 0.5rem 1rem;
  background-color: white;
  border-radius: 15px;
  width:100%;
  display: inline-block;
  color: black;
  outline: none;
  border: 1px solid gray;
  margin: 0.25rem 0.25rem 0.5rem;
  font-weight: 500;
  &:focus {
    background: lightgrey;
    color: white;
  }
`;

export default function Input(props) {
    let { type, name, placeholder } = props;
    return (
        <>
            <InputStyle type={type} name={name} placeholder={placeholder} />
        </>
    );
}
