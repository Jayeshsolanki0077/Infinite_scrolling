
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Button } from "semantic-ui-react";
import React from 'react';
import Records from './records.component';

class HomePage extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        if (!localStorage.getItem("isLogin")) {
            this.props.history.push("/");
        }
    }
    onSignOut = () => {
        localStorage.removeItem("isLogin");
        this.props.history.push("/");
    };
    render() {
        return (
            <div className="container">
                <div className="logout">
                    <Button
                        secondary
                        floated="right"
                        className="mt-4"
                        onClick={this.onSignOut}>
                        Sign Out
                    </Button>
                </div>
                <Records />
            </div>

        )
    }
}


const mapStateToProps = (state) => {
    return {
        checkLogin: state.login,
    };
};


export default withRouter(
    connect(mapStateToProps)(HomePage)
);