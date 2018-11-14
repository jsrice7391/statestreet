import React, {
    Component
} from 'react';
import data from "../../data/data";
import {DisplayBox} from "../../stateless/DisplayBox"



export class Transaction extends Component {
    state = {
        transaction:{}
    }


    componentWillMount(){
        const t = data.transactions.filter(n => n.account === this.props.match.params.id)
        this.setState({transaction:t[0] })
        console.log(this.props.match)
    }

    render() {
        const {accountName, transactionType, amount} = this.state.transaction;
        return (
            <div>
            <h1>{accountName}</h1>
           <h1>{transactionType}</h1>
            </div>

        )
    }
}