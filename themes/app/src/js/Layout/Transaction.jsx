import React, { useState } from "react";
import { ethers } from "ethers";
import styled from "styled-components";
import Input from "../components/Input";
import PayButton from "../components/PayButton";
import paymentService from "../services/PaymentService";


// Styled Components
const Layout = styled.form`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 2rem;
  padding-top: 0.2rem;
  margin: 0.25rem;
  box-sizing: border-box;
  width: 30vw;
`;
const Heading = styled.h2`
  text-align: center;
  padding: 0.5rem;
  color: ${(props) => (props.error ? "red" : "black")};
`;
const Buttondiv = styled.div`
  display: flex;
  margin: 0;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;
// Input type name constants;
const ETH_INPUT_ADDRESS = "eth_address";
const ETH_INPUT_AMOUNT = "eth_amount";

export default function Transaction() {
    const [error, setError] = useState(false);
    const [txs, setTxs] = useState([]);

    // Form Submission
    const buttonSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.target);
        let ethAddress = data.get(ETH_INPUT_ADDRESS);
        let ethAmount = data.get(ETH_INPUT_AMOUNT);
        console.log(ethAddress, ethAmount);
        // check input fields have value
        if (!ethAddress.match(/\S/) || !ethAmount.match(/\S/)) {
            setError(true);
            console.log("please add your info ");
        } else {
            // Start the `Eth` transaction
            paymentService({ addr: ethAddress, ether: ethAmount });
            setError(false);
        }
    };
    return (
        <Layout onSubmit={buttonSubmit}>
            {!error && <Heading>ETH Payment</Heading>}
            {error && <Heading error>Please enter valid data 😬 </Heading>}
            <Input
                type="text"
                name={ETH_INPUT_ADDRESS}
                placeholder="Recipient Address"
            />
            <Buttondiv>
                <Input
                    type="text"
                    name={ETH_INPUT_AMOUNT}
                    placeholder="Amount in ETH"
                />
                <PayButton text="SEND" type="submit" />
            </Buttondiv>
        </Layout>
    );
}
