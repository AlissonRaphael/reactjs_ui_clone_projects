import React from 'react'
import { useViewportScroll, useTransform } from 'framer-motion'

import { Container } from './styles'

export default function Header(){
  const { scrollYProgress } = useViewportScroll()
  const y = useTransform(scrollYProgress, [0.188, 0.198], ['0%', '-100%'])

  return <Container style={{ y }} />
}
