import React, {Component} from 'react'
import {connect} from 'react-redux'

export class Results extends Component {
  constructor(props) {
    super(props)
    this.expectedResults = [`[10,9,8,7,6,5,4,3,2,1]`]
  }
  render() {
    let result = this.props.userCode
    console.log('here', result)
    return (
      <div className="results">
        <h2>Results</h2>

        {result.length !== 0 ? (
          <p className="userOutput">{`[${[...result]}]`}</p>
        ) : (
          <p />
        )}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  userCode: state.code.userCode
})

export const CodeResults = connect(mapStateToProps)(Results)
