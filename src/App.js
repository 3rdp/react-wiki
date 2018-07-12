import React, { Component } from 'react'
import logo from './logo.svg' // херня
import './App.css' // херня
import ArticleList from './ArticleList'

const articles = [
  {
    title: 'asdf',
    extract: 'Descfks;ldakf;ladksf;lksd',
    pageid: 123
  },
  {
    title: 'asdf',
    extract:
      'Изменяет вид маркера для каждого элемента списка. Это свойство используется только в случае, когда значение list-style-image установлено как none. Маркеры различаются для маркированного списка (тег <ul>) и нумерованного (тег <ol>).',
    pageid: 123
  },
  {
    title: 'asdf',
    extract: 'Descfks;ldakf;ladksf;lksd',
    pageid: 123
  },
  {
    title: 'asdf',
    extract: 'Descfks;ldakf;ladksf;lksd',
    pageid: 123
  },
  {
    title: 'asdf',
    extract: 'Descfks;ldakf;ladksf;lksd',
    pageid: 123
  }
]

const styleRandomArticleLink = {
  display: 'block',
  color: 'black',
  textDecoration: 'none'
}

const styleControlsContainer = {
  textAlign: 'center'
}

const styleInputText = {
  height: '20px',
  border: '3px solid #eee',
  fontSize: '1em'
}

const styleRandom = Object.assign(
  {
    'margin-bottom': '10px'
  },
  styleRandomArticleLink
)

class App extends Component {
  render() {
    return (
      <div className="App" style={{ 'padding-top': '10px' }}>
        {/** Пришлось сделать такой вот контейнер v */}
        <div className="controls" style={styleControlsContainer}>
          <a href="#" style={styleRandom}>
            Sluchainaya statya
          </a>
          <input type="text" style={styleInputText} />
        </div>
        <ArticleList article={articles} />
      </div>
    )
  }
}

export default App
