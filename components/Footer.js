import React from 'react'
import styled from 'styled-components'
import Link from './Link'

const Container = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0;
  font-size: 16px;

  * > {
    margin: 0;
  }
`
export default () => (
  <Container>
    <Link href='https://sentry.io/welcome' target='_blank' alt="Sentry.io's website."><p style={{ margin: '10px 0' }}>Sentry.io</p></Link>
    <p style={{ margin: '0' }}>Friday, January 11th, 2019</p>
  </Container>
)
