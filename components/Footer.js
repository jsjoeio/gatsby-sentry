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
    <Link href='https://www.meetup.com/Phoenix-ReactJS/events/256303585/' target='_blank' alt='Phoenix ReactJS lightening talks in December event page'><p style={{ margin: '10px 0' }}>Lightening Talks - Phoenix ReactJS</p></Link>
    <p style={{ margin: '0' }}>Wednesday, December 5th, 2018</p>
  </Container>
)
