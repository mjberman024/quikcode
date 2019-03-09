/* eslint-disable camelcase */
import React, {Component} from 'react'
import {connect} from 'react-redux'

import Problems from '../Constants'

export class problem extends Component {
  render() {
    const question = this.props.problem || 'backwards_array'
    const userProblem = Problems.filter(item => {
      return item.problemValue === question
    })
    return (
      <div className="problem info_child">
        <h2>Problem</h2>
        <p>{userProblem[0].problemDescription}</p>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  problem: state.code.problem
})

export const Problem = connect(mapStateToProps)(problem)
