import React, { Component } from 'react';
import data from "../../data/data"
import {Grid, Row, Col} from "react-bootstrap";
import {Table} from "../../stateless/Table";


export class Home extends Component {

  constructor(){
    super()
    this.state = {
      transactions: [],
      types:[],
      accountName: [],
      searchTerms:[],
      columns: []
    }
  }

  componentWillMount(){
    const vals=Object.keys(data.transactions[0])
    const uniqueAccount = [...new Set(data.transactions.map(item => item.accountName))];
    const uniqueType = [...new Set(data.transactions.map(item => item.transactionType))];
    console.log(`There are this many transactions: ${data.transactions.length}`)
    this.setState({transactions: data.transactions, accountName: uniqueAccount, types: uniqueType, columns:vals})
  }
  render() {
    let {transactions, columns} = this.state
    return (
      <div>
        <h1>My Transations</h1>
        <hr/>
        <div>
          <Table columns={columns} transactions={transactions}/>
        </div>
      </div>
    );
  }
}