import React from 'react'
import { connect } from 'react-redux'
import { subTodo } from '../../../actions'

let SubTodo = ({ dispatch }) => {
  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        dispatch(subTodo())
      }}>
        <button type="submit">
          Delete Todo
        </button>
      </form>
    </div>
  )
}
SubTodo = connect()(SubTodo)

export default SubTodo
