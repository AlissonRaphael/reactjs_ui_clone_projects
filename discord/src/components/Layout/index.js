import React from 'react'

import { Grid } from './style'

import ServerList from '../ServerList'
import ServerName from '../ServerName'
import ChannelInfo from '../ChannelInfo'
import ChannelList from '../ChannelList'
import UserInfo from '../UserInfo'
import ChannelData from '../ChannelData'
import UserList from '../UserList'

export default function Layout(){
  return (
    <Grid>
      <ServerList/>
      <ServerName/>
      <ChannelInfo/>
      <ChannelList/>
      <UserInfo/>
      <ChannelData/>
      <UserList/>
    </Grid>
  )
}