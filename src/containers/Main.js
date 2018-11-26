import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Chats from '../components/chats/Chats'
import Contacts from '../components/contacts/Contacts'


const Main = () => (
  <main>
    <Switch>
      <Route path='/chats' component={Chats}/>
      <Route path='/contacts' component={Contacts}/>
    </Switch>
  </main>
)

export default Main
