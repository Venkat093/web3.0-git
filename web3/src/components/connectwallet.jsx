import axios from "axios";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Switch } from "react-router-dom";
import Web3Modal from 'web3modal'
import WalletConnectProvider from "@walletconnect/web3-provider";
import { providers, ethers } from "ethers";
import Web3 from "web3";
let web3Modal;
let provider;
let selectedAccount;

function init() {
  const providerOptions = {
    walletconnect: {
      package: WalletConnectProvider,
      options: {
        // Mikko's test key - don't copy as your mileage may vary
        // infuraId: "27e484dcd9e3efcfd25a83a78777cdf1",
        rpc: {
          4: "https://rinkeby.infura.io/v3/"
        },
        chainId: 4
      }
    },


  };

  web3Modal = new Web3Modal({
    network: "mainnet", // optional
    cacheProvider: true, // optional
    providerOptions // required
  });

  window.w3m = web3Modal;
}

async function fetchAccountData() {
  const web3Provider = new ethers.providers.Web3Provider(provider);
  const signer = web3Provider.getSigner();
  selectedAccount = await signer.getAddress();
  console.log(selectedAccount);

  return selectedAccount;
}

async function refreshAccountData() {
  await fetchAccountData(provider);
}

async function onConnect() {
  console.log("Opening a dialog", web3Modal);
  try {
    provider = await web3Modal.connect({ cacheProvider: true });
  } catch (e) {
    console.log("Could not get a wallet connection", e);
    return;
  }

  provider.on("accountsChanged", (accounts) => {
    console.log('chainchan', accounts)
    fetchAccountData();
    // window.location.reload()
  });

  provider.on("chainChanged", (chainId) => {
    fetchAccountData();
    window.location.reload()
  });

  provider.on("networkChanged", (networkId) => {
    fetchAccountData();
  });
  window.location.reload()

  await refreshAccountData();
}



async function disconnet() {
  console.log("Opening a dialog", web3Modal);
  try {
    // provider = await web3Modal.connect();


    await web3Modal.clearCachedProvider();
    // await window.ethereum.disable()
    window.location.reload()
  } catch (e) {
    console.log("Could not get a wallet connection", e);
    return;
  }


}

const Connectwallet = () => {

 const [acc, setacc] = useState()
 const [webm3, setweb3m] = useState()
 const [provider1, setprovider1] = useState()
 const [account, setAccount] = useState();

  useEffect(async () => {

    if (acc) {
      provider = await web3Modal?.connect();
      console.log(provider," --> provider")
      const web3 = new Web3(provider);
      const accounts = await web3.eth.getAccounts();
      console.log('dddd', accounts);
       console.log(web3);
      setweb3m(web3)
      setprovider1(provider)
      setAccount(accounts[0])
    }


  }, [acc]);

    useEffect(() => {
    init();

    if (web3Modal.cachedProvider) {
      console.log('accaa', web3Modal.cachedProvider)
      console.log("connected");
      setacc(true)

    }
  }, []);

    return ( <div>
        {
            acc ? <button className=" btn grad-btn  mt-3 ml-0" onClick={disconnet}>
              <b>Disconnect Wallet</b>
            </button> :
              <button className=" btn grad-btn  mt-3 ml-0" onClick={onConnect}>
                <span className="h5">Connect Wallet</span>
              </button>
          }
        
        </div> );
}
 
export default Connectwallet;