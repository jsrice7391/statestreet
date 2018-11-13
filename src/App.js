import React, { Component } from 'react';
import './App.css';
import data from "./data/data.json"

class App extends Component {

  constructor(){
    super()
    this.state = {
      transactions: [],
      types:[],
      accountName: [],
      searchTerms:[]
    }
  }

  componentWillMount(){
    const uniqueAccount = [...new Set(data.transactions.map(item => item.accountName))];
    const uniqueType = [...new Set(data.transactions.map(item => item.transactionType))];
    console.log(uniqueType)
    this.setState({transactions: data.transactions, accountName: uniqueAccount, types: uniqueType})

    
  }
  render() {
    let {transactions} = this.state
    return (
      <div>
              {
                transactions.map((t,indes) => (
                  <h1>{t.accountName}</h1>
                ))
              }
      </div>



     
    );
  }
}

export default App;
