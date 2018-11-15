import React, { Component } from 'react';
import data from "../../data/data"
import {Table, Menu} from "../../stateless";
import API from "../../utils/API";
import {List} from "react-virtualized";
import {Link} from "react-router-dom"


export class Home extends Component {

  constructor(){
    super()
    this.state = {
      transactions: [],
      types:[],
      checked: false,
      filteredTerms: new Map(),
      columns: [""],
      searched: false,
      transaction: {}
    }
  }
  componentWillMount(){
          const uniqueAccount = [...new Set(data.transactions.map(item => item.accountName))];
          const uniqueType = [...new Set(data.transactions.map(item => item.transactionType))];
          this.setState({
            transactions: data.transactions,
            accountName: uniqueAccount,
            types: uniqueType,
            columns: ["account no.", "Acount Name", "Currency", "amount", "transactiontype"]
          })
    }
    
  render() {
    let {columns,searched,transactions,transaction} = this.state;
    return (
      <div>
        <h1>My Transactions: {transactions.length}</h1>
        <hr/>
        <div className="menus">
        <h3>Filters</h3>
        <Menu title="Account Name" choices={this.state.accountName} checked={this.state.filteredTerms} filterTable={this._filterTable}/>
        <Menu title="Transaction Types" choices={this.state.types}/>
        </div>
        <div className="table">
        <Table columns={columns} transactions={transactions} _toggleDetail={this._toggleDetail}/>
        </div>
      </div>
    );
  }
}