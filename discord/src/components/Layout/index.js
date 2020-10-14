import React from 'react'

import { Grid } from './style'

import ServerList from '../ServerList'
import ServerName from '../ServerName'

export default function Layout(){
  return (
    <Grid>
      <ServerList/>
      <ServerName/>
    </Grid>
  )
}