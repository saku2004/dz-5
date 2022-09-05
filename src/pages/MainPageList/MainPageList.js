import React from "react";
import Users from "../../components/UsersList/UsersList";

class MainPageList extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div>
            <h1 style={{color: 'red', fontSize: '25px', textAlign: 'center'}}>NFT простыми словами: что это и как на нем заработать.</h1>
                <Users users={this.props.users}/>
            </div>
        )
    }
}

export default MainPageList;