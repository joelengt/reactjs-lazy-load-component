import React from 'react'
import Layout from '../components/Layout'
import Melons from '../components/melons'
import Link from 'next/link'
import Router from 'next/router'

class Checkout extends React.Component {
  static getInitialProps ({ req, res, isServer }) {
    return { isServer }
  }

  constructor(props) {
    super(props)
    this.eventClick = this.eventClick.bind(this)
    this.state = { fulname: null }
  }

  componentDidMount () {

  }

  componentWillUnmount () {
    console.log('Final data!')
  }

  eventClick() {
    return Router.push('/sample') // page transition
  }

  render() {
    return (
      <div>
        <div>Checkout</div>
        <div>
          Click <span onClick={ this.eventClick }>here</span> to read more about sample custom stuff!
        </div>
      </div>
    )
  }
}

export default Checkout
