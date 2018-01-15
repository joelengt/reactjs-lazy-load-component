import React from 'react'
import Layout from '../components/Layout'
import Melons from '../components/melons'
import Link from 'next/link'

class Index extends React.Component {
  constructor(props) {
    super(props)
    this.eventClick = this.eventClick.bind(this)
    this.state = { fulname: null }
  }

  componentDidMount () {
    console.log('URLÇ? ', this.props.url)
  }

  componentWillUnmount () {
    console.log('Final data!')
    console.log('URLÇ? ', this.props.url)

  }

  eventClick() {
    console.log('Event on click fron this custom Link')
  }

  setData() {
    // this.props.url.back()
  }

  render() {
    return (
      <div>hello
        <div>
          <Link prefetch href="/sample">
            <a> go to sample</a>
          </Link>
        </div>

        <div>
          <Link href={{ pathname: '/sample', query: { name: 'Zeit' } }}>
            <a>go to sample with query</a>
          </Link>
        </div>

        <div>
          <Link href="/sample" replace>
            <a>go to sample replace</a>
          </Link>
        </div>

        <div>
          <Link href="/sample">
            <div onClick={ this.eventClick }>event on click ?</div>
          </Link>
        </div>

        <div>
          <Link href="/checkout" replace>
            <a>go to checkout</a>
          </Link>
        </div>
      </div>
    )
  }
}

export default Index
