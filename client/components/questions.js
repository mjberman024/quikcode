import React, {Component} from 'react'
import {connect} from 'react-redux'

import {changeProblem} from '../store'

import Problems from '../Constants'

export class questions extends Component {
  render() {
    return (
      <div className="info_child">
        <h2>
          Question Choice:{' '}
          <span>
            <select
              onChange={e => {
                console.log('....', e.target.value)
                this.props.changeProblem(e.target.value)
              }}
            >
              {Problems.map(item => (
                <option key={item.problemIndex} value={item.problemValue}>
                  {item.problemName}
                </option>
              ))}
            </select>
          </span>
        </h2>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  problem: state.code.problem
})

const mapDispatchToProps = dispatch => ({
  changeProblem: problem => dispatch(changeProblem(problem))
})

export const Questions = connect(mapStateToProps, mapDispatchToProps)(questions)
