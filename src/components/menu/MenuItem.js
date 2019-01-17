import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import {logoutUser} from '../../store/actions';
import { connect } from 'react-redux';

import styles from './MenuItem.module.css';

class MenuItem extends Component {
	
	switchAction = (action) => {
		switch(action) {
			//выход из аккаунта (в главном меню)
        	case 'logout':
            	this.props.dispatch(logoutUser());
            break;
            default:
	            console.log(this.props);
	        break;		
		}
	}

	render(){
		return(
	        <Link to = {this.props.href} className = {styles.Item} onClick = {() => {this.switchAction(this.props.action)}}>
				<i className = {styles.Icon + this.props.icon}/>
				<p className = {styles.Text}>{this.props.text}</p>
	        </Link>	        
		)
	}
}



export default connect(null)(MenuItem);
