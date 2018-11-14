import React, {
    Component
} from 'react';


export class Dashboard extends Component {

    componentWillMount() {
        console.log(this.props.match)
    }

    render() {
        return ( <h1> This is the Dashboard </h1>
        )
    }
}