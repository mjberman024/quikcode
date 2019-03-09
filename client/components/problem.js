import React, {Component} from 'react'

export class Problem extends Component {
  constructor(props) {
    super(props)
    this.problemsArray = [
      `Create an array which contains the values 1 through 10, backwards.
    Example: [10,9,...2,1]`,
      'Return the number of vowels that are within a string. Example: "Learning code is fun" returns 7'
    ]
  }

  render() {
    return (
      <div className="problem">
        <h2>Problem</h2>
        <p>{`${this.problemsArray[1]}`}</p>
      </div>
    )
  }
}
