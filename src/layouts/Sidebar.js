import React, { Component } from 'react';

import Menu from '../containers/sidebar/menu/Menu';

import Header from '../components/sidebar/Header';
import Main from '../containers/sidebar/Main';

class Sidebar extends Component
{
  isActive(href)
  {
      return window.location.pathname === href;
  }
  
  render(){
      return (
      	<div>
			    {/* бургер */}
			    <Menu />
			    {/* чаты vs контакты */}
          <div>
            <Header href="/chats" active={this.isActive('/chats')}>
                Чаты
            </Header>
            <Header href="/contacts" active={this.isActive('/contacts')}>
                Контакты
            </Header>

            <Main />
          </div>
		   </div>
	)
  }
}

export default Sidebar;
