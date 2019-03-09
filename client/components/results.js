import React, {Component} from 'react'
import {connect} from 'react-redux'

import Constants from '../Constants'

export class Results extends Component {
  constructor(props) {
    super(props)
    this.expectedResults = [`[10,9,8,7,6,5,4,3,2,1]`, 4]
    this.structureAnswer = this.structureAnswer.bind(this)
  }

  // eslint-disable-next-line complexity
  structureAnswer = result => {
    // console.log('result in structure answer', result)
    const question = this.props.problem || 'backwards_array'
    console.log('problem props', question)
    const expectedResult = Constants.filter(
      item => question === item.problemValue
    )[0].expectedResult

    const resultType = typeof result

    if (Array.isArray(result)) {
      return result.length !== 0 ? `[${[...result]}]` : <p />
    } else if (resultType === 'number') {
      return result
    } else if (!this.props.isError && resultType === 'string') {
      return `"${result}"`
    } else if (resultType === 'boolean') {
      return `${result}`
    } else if (this.props.isError) {
      return result
    }
  }

  render() {
    let results = this.props.result
    // console.log('this is result in results', results)
    return (
      <div className="results info_child">
        <h2>Results</h2>
        {this.props.isError ? (
          <p style={{backgroundColor: 'red'}}>
            {this.structureAnswer(results)}
          </p>
        ) : (
          <p>{this.structureAnswer(results)}</p>
        )}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  problem: state.code.problem,
  result: state.code.result,
  isError: state.code.isError
})

export const CodeResults = connect(mapStateToProps)(Results)
