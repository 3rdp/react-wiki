import React, { Component } from 'react'

const styleList = {
  'list-style-type': 'none',
  'margin-bottom': '10px',
  padding: '15px 30px 5px 30px',
  display: 'block'
}

const styleAnchor = {
  'text-decoration': 'none',
  color: 'black',
  'margin-bottom': '20px'
}

const styleListItem = {
  'margin-bottom': '20px',
  padding: '1px 30px 20px 30px',
  'background-color': '#E7E7E8'
}

class ArticleList extends Component {
  root_url = 'https://en.wikipedia.org/'

  renderArticle() {
    console.log(this.props.article)

    return this.props.article.map(article => {
      return (
        <a
          href={this.root_url + `?curid=${article.pageid}`}
          key={article.pageid}
          style={styleAnchor}
        >
          <li style={styleListItem}>
            <h1>{article.title}</h1>
            <p>{article.extract}</p>
          </li>
        </a>
      )
    })
  }

  render() {
    return <ul style={styleList}>{this.renderArticle()}</ul>
  }
}

export default ArticleList
