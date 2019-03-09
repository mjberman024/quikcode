import React from 'react'

import {CodeEditor, Title, Problem, CodeResults, Questions} from './components'
// import Routes from './routes'

const App = () => {
  return (
    <div>
      <Title />
      <div className="container">
        <div className="instructions">
          <Questions />
          <Problem />
          <CodeResults />
        </div>
        <CodeEditor />
      </div>
    </div>
  )
}

export default App
