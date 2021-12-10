import React from 'react'
import { useFetch } from '../utils/hooks'


function List() {
  const [data] = useFetch(
    'http://localhost:8000/api/getData'
  )

  return (
    <>
      <h1>Usage History</h1>
      {data.map((item) => {
        return (
          <div key={item.uuid}>
            {item.firstName}
          </div>
        )
      })}
    </>
  )
}

export default List