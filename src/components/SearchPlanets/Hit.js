import React from 'react'
import PropTypes from 'prop-types'
// import { Highlight, Snippet } from 'react-instantsearch-dom'
// import Card from 'react-bootstrap/Card'
// import Button from 'react-bootstrap/Button'
// import ListGroup from 'react-bootstrap/ListGroup'
// import ListGroupItem from 'react-bootstrap/ListGroupItem'

import { Box, Heading, Badge, Link } from '@chakra-ui/react'

export default Hit

function Hit ({ hit }) {
  return (
    <Box mb={5}>
      {hit.habit === 1 ? (<Badge colorScheme="green">Habitable</Badge>) : (<Badge colorScheme="red">UninHabitable</Badge>)}
      {/* href in prod is _id, in dec is url */}
      <Link href={hit._id}><Heading>{hit.pl_name}</Heading></Link>
      <Box
        mt="1"
        fontWeight="semibold"
        as="h4"
        lineHeight="tight"
        isTruncated
      >
        {hit.discovered}
      </Box>
      <Box>
        {hit.dis_loc}
      </Box>
      <Box>
        {hit.dic_fac}
      </Box>
    </Box>
    // <div>
    //   <Card key={hit._id} className="Card">
    //     <Card.Title>{hit.pl_name}</Card.Title>
    //     <Card.Body>
    //       <ListGroup variant="flush">
    //         <ListGroupItem>Orbit period:{hit.pl_orbit}</ListGroupItem>
    //         <ListGroupItem>Facility:{hit.dic_fac}</ListGroupItem>
    //       </ListGroup>
    //       <Button className="Button" variant="outline-info" href={hit.url}>See More</Button>
    //     </Card.Body>
    //   </Card>
    // </div>

  // <div>
  //   <article>

  //     <div className="post-content">
  //       <div className="post-date">{hit.post_date_formatted}</div>
  //       <h2 className="entry-title">
  //         <a href={hit.permalink} rel="bookmark">
  //           <Highlight attribute="post_title" hit={hit} tagName="em" />
  //         </a>
  //       </h2>
  //       <div className="post-excerpt">
  //         <Snippet attribute="content" hit={hit} />
  //       </div>
  //       <div className="entry-meta clear">
  //         <div className="author-gravatar">
  //           <img src={hit.author_image_url} width="40" height="40" />
  //         </div>
  //         <div className="entry-author-content">
  //           <div className="author-name">
  //             <Highlight attribute="author_name" hit={hit} tagName="em" />
  //           </div>
  //           <div className="post-meta-info">
  //             {hit.time_to_read} min read in{' '}
  //             <Highlight attribute="categories" hit={hit} tagName="em" />
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </article>
  // </div>
  )
}

Hit.propTypes = {
  hit: PropTypes.object.isRequired
}
