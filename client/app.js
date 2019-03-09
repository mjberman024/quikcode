import React from 'react'

import {CodeEditor, Title, Problem, CodeResults} from './components'
// import Routes from './routes'

const App = () => {
  return (
    <div>
      <Title />
      <div className="container">
        <div className="instructions">
          <div>
            <h2>
              Question Choice:{' '}
              <span>
                <select
                  onChange={e => {
                    console.log(e.target.value)
                  }}
                >
                  <option value={0}>Backwards Array</option>
                  <option value={1}>Count Vowels</option>
                </select>
              </span>
            </h2>
          </div>
          <Problem />
          <CodeResults />
        </div>
        <CodeEditor />
      </div>
    </div>
  )
}

export default App
