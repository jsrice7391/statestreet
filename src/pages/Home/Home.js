import React, { Component } from 'react';
import data from "../../data/data"
import {Table, Menu, Pie} from "../../stateless";
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
      filteredTerms: [],
      searched: false,
      filtered:false
    }
  }
  componentWillMount = () =>{
                const uniqueAccount = [...new Set(data.transactions.map(item => item.accountName))];
                const uniqueType = [...new Set(data.transactions.map(item => item.transactionType))];
                this.setState({
                  transactions: data.transactions,
                  accountNames: uniqueAccount,
                  types: uniqueType,
                  columns: ["account no.", "Acount Name", "Currency", "amount", "transactiontype"]
                })
    }

    _filterTable = (c, e) => {
      if(e.target.checked){
        this.setState(prevstate => {
          return {filteredTerms: [...prevstate.filteredTerms, c],filtered: true}}, () =>{
          this._renderFiltered();
        });
        }else{
          this.setState(prevstate => {
            return{filteredTerms: prevstate.filteredTerms.filter(term => term !== c)}}, () => {
            this._renderFiltered();
          })
      }
      console.log(`This is C: ${c} and this is e: ${e.target.checked}`)
    }
    _renderFiltered = () =>{
        let foundAccountName = this.state.filteredTerms.some(r => this.state.accountNames.includes(r))
        let foundType = this.state.filteredTerms.some(r => this.state.types.includes(r))
        if(foundAccountName && foundType){
                 this.setState({
                   transactions: this.state.transactions.filter(t => this.state.filteredTerms.includes(t.accountName) &&this.state.filteredTerms.includes(t.transactionType)),
                   filtered: true
                 })
          
        }else if(foundAccountName || foundType){
                  this.setState({
                    transactions: this.state.transactions.filter(t => this.state.filteredTerms.includes(t.accountName) || this.state.filteredTerms.includes(t.transactionType)),
                    filtered: true
                  })
      }else{
        this.setState({transactions: data.transactions,filtered:false});
      }
    }
  render() {
    let {columns,searched,transactions,transaction,filtered} = this.state;
    return (
      <div>
        <h1>My Transactions: {transactions.length}</h1>
        <hr/>
        <div className="menus">
        <h3>Filters</h3>
        <Menu title="Account Name" choices={this.state.accountNames} _filterTable={this._filterTable}/>
        <Menu title="Transaction Types" choices={this.state.types} _filterTable={this._filterTable}/>
        </div>
        <div className="table">
        <Table columns={columns} transactions={transactions.slice(0,1000)} _toggleDetail={this._toggleDetail}/>
        </div>
      </div>
    );
  }
}