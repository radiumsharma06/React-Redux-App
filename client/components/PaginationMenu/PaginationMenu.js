import React from 'react'
import { Pagination } from 'semantic-ui-react'

const PaginationExamplePagination = ({onPageChange}) => <Pagination defaultActivePage={1} totalPages={2} onPageChange={onPageChange}/>

export default PaginationExamplePagination;