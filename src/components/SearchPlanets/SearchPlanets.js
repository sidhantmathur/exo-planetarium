import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import algoliasearch from 'algoliasearch/lite'
import {
  InstantSearch,
  // SearchBox,
  Hits,
  // PoweredBy,
  Configure
} from 'react-instantsearch-dom'
// import Content from './Content'

import Hit from './Hit'
import CustomSearchBox from './SearchBox'

import { Heading } from '@chakra-ui/react'

const searchClient = algoliasearch(
  'ZY0B7OIB0M',
  'daf73b9b9a5564ae2818315242ecd34d'
)

// const searchClient = algoliasearch(
//   'latency',
//   '6be0576ff61c053d5f9a3225e2a90f76'
// )

class SearchPlanets extends Component {
  render () {
    return (
      <div>
        <Heading size="xl" mt={3}>Search</Heading>
        <InstantSearch
          indexName="dev-planets"
          searchClient={searchClient}
        >
          <main className="search-container">
            <Configure
              hitsPerPage={12}
            />
            {/* <PoweredBy mt={5} /> */}
            <CustomSearchBox />
            {/* <SearchBox /> */}
            <Hits hitComponent={Hit}/>

          </main>
        </InstantSearch>
      </div>
    )
  }
}

export default withRouter(SearchPlanets)
