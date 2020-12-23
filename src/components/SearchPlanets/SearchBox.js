import React from 'react'
import { connectSearchBox } from 'react-instantsearch-dom'

import { Input } from '@chakra-ui/react'

const SearchBox = ({ currentRefinement, isSearchStalled, refine }) => (
  <form noValidate action="" role="search">
    <Input
      type="search"
      value={currentRefinement}
      onChange={event => refine(event.currentTarget.value)}
      placeholder="Search Planets"
      mb={5}
      mt={2}
    />

    {/* <button onClick={() => refine('')}>Reset query</button> */}
    {isSearchStalled ? 'My search is stalled' : ''}
  </form>
)

const CustomSearchBox = connectSearchBox(SearchBox)

export default (CustomSearchBox)
