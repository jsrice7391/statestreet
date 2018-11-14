import React, { Component } from 'react';
import data from "../../data/data"
import {Table, Menu, DisplayBox} from "../../stateless";
import API from "../../utils/API";







export class Home extends Component {

  constructor(){
    super()
    this.state = {
      transactions: [],
      types:[],
      accountName: [],
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

    _toggleDetail = (item) => {
      console.log("CLICKED CHANGE STATE")
      this.setState(prevState => {
        return {
          searched: !prevState.searched,
          transaction: item
        }
      })
    }

  render() {
    let {transactions, columns,searched, transaction} = this.state
    return (
      <div>
        {searched ? <DisplayBox tran={transaction} _toggleDetail={this._toggleDetail}/> : <div><h1>My Transactions</h1>
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
        }
      </div>
    );
  }
}