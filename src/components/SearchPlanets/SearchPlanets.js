import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import algoliasearch from 'algoliasearch/lite'
import {
  InstantSearch,
  SearchBox
} from 'react-instantsearch-dom'

const searchClient = algoliasearch(
  'ZY0B7OIB0M',
  '4c3cebd4cd45f1523b111e8fd8f978a4'
)

class SearchPlanets extends Component {
  constructor () {
    super()
    this.state = {
      favs: null
    }
  }

  render () {
    return (
      <div>
        <p>Some text</p>
        <InstantSearch
          indexName="instant_search"
          searchClient={searchClient}
        >
          {/* Widgets */}
          <SearchBox />
        </InstantSearch>
      </div>
    )
  }
}

export default withRouter(SearchPlanets)
