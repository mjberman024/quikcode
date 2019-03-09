import React, {Component} from 'react'
import brace from 'brace'
import AceEditor from 'react-ace'
import {connect} from 'react-redux'

import {getUserResult, updateUserCode} from '../store'
import Problems from '../Constants'

import 'brace/mode/javascript'
import 'brace/theme/monokai'

export class Editor extends Component {
  constructor(props) {
    super(props)
    const question = this.props.problemName || 'backwards_array'
    const editorValue = Problems.filter(item => {
      return item.problemValue === question
    })
    this.state = {
      userFunc: editorValue[0].problemTemplate
    }
    this.onChange = this.onChange.bind(this)
    this.runCode = this.runCode.bind(this)
  }

  componentDidMount() {
    const question = this.props.problemName || 'backwards_array'
    const editorValue = Problems.filter(item => {
      return item.problemValue === question
    })
    this.props.updateUserCode(editorValue[0].problemTemplate)
  }

  onChange = newValue => {
    this.props.updateUserCode(newValue)
    this.setState({userFunc: newValue})
  }
  runCode = () => {
    try {
      const question = this.props.problemName || 'backwards_array'
      const problemFunction = Problems.filter(item => {
        return item.problemValue === question
      })
      let evalStr =
        this.state.userFunc + '\n\n' + problemFunction[0].problemFunctionCall
      let results = eval(evalStr)
      this.props.getUserResult(results, false)
    } catch (e) {
      this.props.getUserResult(e.message, true)
    }
  }

  render() {
    // const question = this.props.problemName || 'backwards_array'
    // const editorValue = Problems.filter(item => {
    //   return item.problemValue === question
    // })
    console.log('RERENDERING')
    return (
      <div className="codeBox">
        <AceEditor
          mode="javascript"
          theme="monokai"
          onChange={this.onChange}
          name="editor"
          className="editor"
          value={this.props.usersCode}
          fontSize={16}
          // defaultValue={this.props.problemName} //{`${editorValue[0].problemTemplate}`}
          editorProps={{$blockScrolling: true}}
          style={{width: '60vw', height: '80vh'}}
        />
        <div className="">
          <button type="button" onClick={this.runCode}>
            Run Code
          </button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  usersCode: state.code.usersCode,
  problemName: state.code.problem
})

const mapDispatchToProps = dispatch => ({
  getUserResult: (userCode, error) => dispatch(getUserResult(userCode, error)),
  updateUserCode: userCode => dispatch(updateUserCode(userCode))
})
export const CodeEditor = connect(mapStateToProps, mapDispatchToProps)(Editor)
