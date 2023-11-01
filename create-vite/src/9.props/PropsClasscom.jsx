import React, { Component } from 'react'

export default class PropsClasscom extends Component {
  render() {
    console.log("-----> ",this.props)
    return (
      <div>
        <h1> my name is  {this?.props?.data?.name}</h1>
        <h2> my age is {this?.props?.data?.age}</h2>
      </div>
    )
  }
}
