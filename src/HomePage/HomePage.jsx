import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { userActions } from '../_actions';

class HomePage extends React.Component {
    componentDidMount() {
        this.props.dispatch(userActions.getAll());
    }

    handleDeleteUser(id) {
        return (e) => this.props.dispatch(userActions.delete(id));
    }

    render() {
        const { user, users } = this.props;
        return (
        <div className="row">
            <div className="col-md-12">
                <h1>Hi {user.firstName}!</h1>
                <p>Would you like to search for nutrients !!</p>
                
                <h3>
                    <a href="./src/Search/searchFood.html">Search</a>
                </h3>                             
            </div>
            <div align="right">
                    <p>
                        <Link to="/login">Logout</Link>
                    </p>
                </div>
        </div>
        );
    }
}

function mapStateToProps(state) {
    const { users, authentication } = state;
    const { user } = authentication;
    return {
        user,
        users
    };
}

const connectedHomePage = connect(mapStateToProps)(HomePage);
export { connectedHomePage as HomePage };