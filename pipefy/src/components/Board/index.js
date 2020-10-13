import React from 'react'

import List from '../List'

import { Container } from './style'

import { loadLists } from '../../services/api'
const list = loadLists()

export default function Board(){
  return (
    <Container>
      {list.map(list => <List key={list.title} data={list}/> )}
    </Container>
  )
}
