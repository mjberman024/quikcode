import React, {Component} from 'react'
import {render} from 'react-dom'
import brace from 'brace'
import AceEditor from 'react-ace'
import {connect} from 'react-redux'

import {updateUserCode} from '../store'

import 'brace/mode/javascript'
import 'brace/theme/monokai'

export class Editor extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userFunc: ''
    }
    this.onChange = this.onChange.bind(this)
    this.runCode = this.runCode.bind(this)
  }
  onChange = (newValue, e) => {
    // console.log('event', e)
    this.setState({userFunc: newValue})
  }
  runCode = () => {
    let results = eval(this.state.userFunc)
    console.log('results', results)
    this.props.updateUserCode(results)
  }
  render() {
    return (
      <div className="codeBox">
        <AceEditor
          mode="javascript"
          theme="monokai"
          onChange={this.onChange}
          name="editor"
          className="editor"
          value={this.state.userFunc}
          // editorProps={{$blockScrolling: true}}
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
  userCode: state.code.userCode
})

const mapDispatchToProps = dispatch => ({
  updateUserCode: userCode => dispatch(updateUserCode(userCode))
})
export const CodeEditor = connect(mapStateToProps, mapDispatchToProps)(Editor)
