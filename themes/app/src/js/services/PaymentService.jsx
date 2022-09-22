import { useState } from "react";
import { ethers } from "ethers";

const PaymentService = async ({addr,ether }) => {
    try {
        if (!window.ethereum) {
            throw new Error(
                "No Crypto wallet available, please install Metmask waller"
            );
        }
        // make eth transaction
        await window.ethereum.send("eth_requestAccounts");
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        ethers.utils.getAddress(addr);
        const transaction = await signer.sendTransaction({
            to: addr,
            value: ethers.utils.parseEther(ether)
        });
        console.log({ether,addr})
        console.log("tx", transaction);

    } catch (error) {
        console.error(error)
    }
};

export default PaymentService;
