import React, { useEffect } from 'react'

import GlobalStyles from './styles/global'
import { Main, Section, Sticky } from './styles/'

import Header from './components/Header'
import FirstAndSecond from './components/FirstAndSecond'
import Footer from './components/Footer'

export default function App(){
  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [])

  return (
    <>
      <GlobalStyles />

      <Main style={{ height: '1610vh' }}>
        <Header />

        <Section style={{ height: '72.7%' }}>
          <FirstAndSecond />
        </Section>

        <Section style={{ height: '9.7%' }}>
          <Sticky className="third" />
        </Section>

        <Section style={{ height: '10.1%' }}>
          <Sticky className="fourth" />
        </Section>

        <Footer />
      </Main>
    </>
  )
}
