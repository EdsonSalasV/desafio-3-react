import React from 'react'

const TableRow = ({user}) => {
  return (
      <tr>
        <td>{user.name}</td>
        <td>{user.email}</td>
      </tr>
  )
}

export default TableRow
