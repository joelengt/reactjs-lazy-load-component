import React from 'react'
import Layout from '../components/Layout'
import Melons from '../components/melons'
import * as Cookies from "js-cookie";

class Index extends React.Component {
  constructor(props) {
    super(props)
    this.eventClick = this.eventClick.bind(this)
    this.state = { fulname: null }
  }

  componentDidMount () {
    console.log('DOM READED!!', Cookies.get('fullname'))

    if (Cookies.get('fulname') === undefined) {
      Cookies.set('fulname', 'joel Gonzales :D')
    }

    this.setState({
      fulname: Cookies.get('fulname')
    })

  }

  componentWillUnmount () {
    console.log('Final data!')
  }

  eventClick() {
    console.log('Data??')
    console.log('DOM READED INSIDE!!', Cookies.get('fullname'))
    this.setData()
  }

  setData() {
    Cookies.set('fulname', 'joelengt')
    this.setState({
      fulname: Cookies.get('fulname')
    })
  }

  render() {
    return (
      <div className="Index">
        <h2>Fruit List { this.state.fulname }</h2>
        <Melons/>
        <input type="text"/>
        <button onClick={this.eventClick}>Save</button>
      </div>
    )
  }
}

export default Index
