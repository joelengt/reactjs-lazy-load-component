import React from 'react'
import Layout from '../components/Layout'
import Melons from '../components/melons'
import Link from 'next/link'
import Router from 'next/router'


class Sample extends React.Component {
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
    this.props.url.back()
  }

  render() {
    return (
      <div>
        <div>hi sample</div>
        <Link prefetch href="/">
          <a> go to index</a>
        </Link>

        <div>
          <Link prefetch href="/checkout">
            <a> go to checkout</a>
          </Link>
        </div>

        <div onClick={ this.eventClick }>
          go back
        </div>
      </div>
    )
  }
}

export default Sample
