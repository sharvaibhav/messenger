import React, {useState} from 'react'

import { selectUser } from "../../actions/simpleaction";
import { connect } from 'react-redux';

import './style.scss'

export const ContactsSection = (props) =>{

    console.log(props);
    const onUserClickHandler = (user) =>{
        props.selectUser(user);
    }

    return (<div className='contacts-section'> {props.allUsers.map(user => <div onClick={() => onUserClickHandler(user)}>{user.name} </div>)} </div>)
}


const mapStateToProps = state => {
    const allUsers = state.usersReducer.users;
    return ({
        allUsers
    })
}

const mapDispatchToProps = dispatch => ({
    selectUser: (currentUser) => dispatch(selectUser(currentUser))
})

export default connect(mapStateToProps, mapDispatchToProps)(ContactsSection);