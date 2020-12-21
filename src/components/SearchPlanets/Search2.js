import React, { Component } from 'react'
import {
  InstantSearch,
  SearchBox,
  Pagination,
  Configure } from 'react-instantsearch-dom'
import Content from './Content'

class Search2 extends Component {
  render () {
    return (
      <InstantSearch
        appId="B1G2GM9NG0"
        apiKey="aadef574be1f9252bb48d4ea09b5cfe5"
        indexName="demo_media"
      >
        <main className="search-container">
          <Configure
            hitsPerPage={3}
            attributesToSnippet={['content:14']}
            snippetEllipsisText={' [...]'}
          />
          <div className="right-panel">
            <div id="hits">
              <Content />
            </div>
            <div id="searchbox">
              <SearchBox translations={{ placeholder: 'Search articles' }} />
            </div>
            <div id="pagination">
              <Pagination />
            </div>
          </div>
        </main>
      </InstantSearch>
    )
  }
}

export default Search2
