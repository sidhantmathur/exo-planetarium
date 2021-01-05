import React from 'react'
import { Hits } from 'react-instantsearch-dom'
import { connectStateResults } from 'react-instantsearch/connectors'
import Hit from './Hit.js'
import { Text } from '@chakra-ui/react'
export default connectStateResults(
  ({ searchState, searchResults }) =>
    searchResults && searchResults.nbHits !== 0 ? (
      <Hits hitComponent={Hit} />
    ) : (
      <div>
        <Text fontSize="md">No results found for <strong>{searchState.query}</strong> or Algolia search limit was reached.</Text>
      </div>
    )
)
