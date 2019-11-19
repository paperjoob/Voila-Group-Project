import React, { Component } from 'react';
import { connect } from 'react-redux';
import AdminItem from './AdminItem'
import { List, ListItem } from '@material-ui/core';

import SearchIcon from '@material-ui/icons/Search';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
const styles = theme => ({
    margin: {
        margin: theme.spacing(1),
    },
});
class Admin extends Component {
    state = {
        search: '',
    }
    updateSearch = (event) => {
        this.setState({ search: event.target.value.substr(0, 20) })
    }
    componentDidMount() {
        // use component did mount to dispatch an action to request the vendor list from the API
        this.getAdmin();
    }

    //dispatching a call to the adminSaga 
    getAdmin() {
        this.props.dispatch({ type: 'FETCH_ADMIN' })
    }


    mapAdmins = () => {
        let filteredAdmins = this.props.adminList.filter(
            (admin) => {
                return admin.firstName.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1 ||
                    admin.lastName.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
            }
        );
        return (
            filteredAdmins.map(admin =>
                <ListItem key={admin.id}>
                    <AdminItem admin={admin} getAdmin={this.getAdmin} />
                </ListItem>)
        )
    }
    render() {
        if(this.props.adminList[0].loading){
            return(
            <div>loading....... </div>
            )
        }
        return (

            <div>
                <div  >
                    <TextField
                        label="Search Admins"
                        value={this.state.search}
                        onChange={this.updateSearch.bind(this)}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="end">
                                    <SearchIcon />
                                </InputAdornment>
                            ),
                        }}
                    />


                </div>
                <List>
                    {this.mapAdmins()}
                </List>
            </div>
        )
    }
}

// Instead of taking everything from state, we just want the user info.
// if you wanted you could write this code like this:
// const mapStateToProps = ({user}) => ({ user });
const mapStateToProps = state => ({
    user: state.user,
    state,
    adminList: state.adminList
});

export default withStyles(styles, { withTheme: true })(connect(mapStateToProps)(Admin));

