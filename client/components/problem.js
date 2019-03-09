/* eslint-disable camelcase */
import React, {Component} from 'react'
import {connect} from 'react-redux'

export class problem extends Component {
  constructor(props) {
    super(props)
    this.problemsArray = {
      backwards_array:
        'Create an array which contains the values 1 through 10, backwards. Example: [10,9,...2,1]',
      count_vowels:
        'Return the number of vowels that are within a string. Example: "Learning code is fun" returns 7'
    }
  }

  render() {
    const question = this.props.problem || 'backwards_array'
    return (
      <div className="problem info_child">
        <h2>Problem</h2>
        <p>{`${this.problemsArray[question]}`}</p>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  problem: state.code.problem
})

export const Problem = connect(mapStateToProps)(problem)
