import {render} from 'react-dom'
import brace from 'brace'
import AceEditor from 'react-ace'

import 'brace/mode/javascript'
import 'brace/theme/monokai'

import React, {Component} from 'react'

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
    console.log('here', results)
  }
  render() {
    return (
      <div>
        <div className="runcode">
          <button type="button" onClick={this.runCode}>
            Run Code
          </button>
        </div>
        <AceEditor
          mode="javascript"
          theme="monokai"
          onChange={this.onChange}
          name="editor"
          className="editor"
          value={this.state.userFunc}
          // editorProps={{$blockScrolling: true}}
          style={{width: '50vw', height: '100vh'}}
        />
      </div>
    )
  }
}
