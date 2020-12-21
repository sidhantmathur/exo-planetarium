import React, { Component } from 'react'
import {
  InstantSearch,
  SearchBox,
  Pagination,
  Configure } from 'react-instantsearch-dom'
import Content from './Content'
const algoliasearch = require('algoliasearch/lite.js')

const searchClient = algoliasearch(
  'latency',
  '6be0576ff61c053d5f9a3225e2a90f76'
)

class Search2 extends Component {
  render () {
    return (
      <InstantSearch
        indexName="instant_search"
        searchClient={searchClient}
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
