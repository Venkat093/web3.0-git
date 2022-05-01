import axios from "axios";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Switch } from "react-router-dom";
import Web3Modal from 'web3modal'
import WalletConnectProvider from "@walletconnect/web3-provider";
import { providers, ethers } from "ethers";
import Web3 from "web3";
import Connectwallet from "./components/connectwallet";


function App() {
useEffect( async ()=>{
//var url="https://rinkeby.infura.io/v3/c9866b1d14a546f39058c73d9de0f471"

var url="https://mainnet.infura.io/v3/c9866b1d14a546f39058c73d9de0f471"
var web3=new Web3(url)
var balance;

      const accountbal = await web3.eth.getBalance("0x73BCEb1Cd57C711feaC4224D062b0F6ff338501e");;
console.log(accountbal)
console.log(web3.utils.fromWei(accountbal,"ether"))
},[])
  return (
  <div>
  <Connectwallet/>
  </div>
  );
}

export default App;
