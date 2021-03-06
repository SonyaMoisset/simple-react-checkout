import React, { Component } from 'react'

import { Header, Overlay } from './components'
import { Checkout, ImagePreview } from './containers'

export default class App extends Component {
  constructor (props) {
    super (props)

    this.state = {
      people: 1,
      price: 320.00,
      tax: 20,
      duration: 5,
      discount: 5
    }
  }

  handleSubmit = event => event.preventDefault()

  handleChange = event => this.setState({ duration: event.target.value })

  render() {
    return (
      <div className="app">
        <div className="Overlay">
          <Overlay
            image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/jj-2.jpg" />
        </div>

        <div className="container">
          <ImagePreview
            price={this.state.price}
            duration={this.state.duration}
            people={this.state.people}
            image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/jj-2.jpg" />
          <Checkout
            duration={this.state.duration}
            discount={this.state.discount}
            tax={this.state.tax}
            price={this.state.price}
            onSubmit={this.handleSubmit} />
        </div>

        <Header
          onChange={this.handleChange} />
      </div>
    );
  }
}
