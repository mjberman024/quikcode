import React, {Component} from 'react'
import {connect} from 'react-redux'

export class Results extends Component {
  constructor(props) {
    super(props)
    this.expectedResults = [`[10,9,8,7,6,5,4,3,2,1]`, 4]
    this.structureAnswer = this.structureAnswer.bind(this)
  }

  structureAnswer = result => {
    // console.log('result in structure answer', result)
    if (Array.isArray(result)) {
      return result.length !== 0 ? (
        <p className="userOutput">{`[${[...result]}]`}</p>
      ) : (
        <p />
      )
    } else if (typeof result === 'number') {
      return <p>{result}</p>
    } else if (!this.props.isError && typeof result === 'string') {
      return <p>{`"${result}"`}</p>
    } else if (this.props.isError) {
      return <p>{result}</p>
    }

    // console.log('here')
  }

  render() {
    let results = this.props.result
    // console.log('this is result in results', results)

    return (
      <div className="results info_child">
        <h2>Results</h2>
        {this.structureAnswer(results)}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  result: state.code.result,
  isError: state.code.isError
})

export const CodeResults = connect(mapStateToProps)(Results)
