import React from 'react'

import { Grid } from './style'

import ServerList from '../ServerList'
import ServerName from '../ServerName'
import ChannelInfo from '../ChannelInfo'

export default function Layout(){
  return (
    <Grid>
      <ServerList/>
      <ServerName/>
      <ChannelInfo/>
    </Grid>
  )
}