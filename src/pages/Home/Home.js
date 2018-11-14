import React, { Component } from 'react';
import data from "../../data/data"
import {Table, Menu} from "../../stateless";


export class Home extends Component {

  constructor(){
    super()
    this.state = {
      transactions: [],
      types:[],
      accountName: [],
      searchTerms:[],
      columns: [""]
    }
  }

  componentWillMount(){
    // const vals=Object.keys(data.transactions[0])
    const uniqueAccount = [...new Set(data.transactions.map(item => item.accountName))];
    const uniqueType = [...new Set(data.transactions.map(item => item.transactionType))];
    console.log(`There are this many transactions: ${data.transactions.length}`)
    this.setState({transactions: data.transactions, accountName: uniqueAccount, types: uniqueType, columns:["account no.", "Acount Name", "Currency","amount","transactiontype"]})
  }
  render() {
    let {transactions, columns} = this.state
    return (
      <div>
        <h1>My Transactions</h1>
        <hr/>
        <div className="menus">
        <h3>Filters</h3>
          <Menu title="Account Name" choices={this.state.accountName}/>
         <Menu title="Transaction Types" choices={this.state.types}/>
        </div>
        <div className="table">
        <Table columns={columns} transactions={transactions}/>
          
        </div>
      </div>
    );
  }
}