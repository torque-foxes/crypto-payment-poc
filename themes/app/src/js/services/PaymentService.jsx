import { ethers } from "ethers";
const axios = require('axios').default;

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

        await transaction.wait().then(() => {
            console.log({ether,addr})
            console.log("tx", transaction);
            axios.get(`/payment-page/updateTransaction?tx=${transaction.hash}`)
                .then(() => alert('payment success!'))
                .catch(error => console.log(error));

        }).catch(error => console.log(error));

    } catch (error) {
        console.error(error)
    }
};

export default PaymentService;
