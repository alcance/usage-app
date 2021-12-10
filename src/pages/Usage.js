import React from 'react'
import { useFetch } from '../utils/hooks'
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from 'recharts';


function List() {
  const [data] = useFetch(
    'http://localhost:8000/api/usage?numberOfUsers=10'
  )

  const getUsageValue = (data) => {
    return data.usage[0].seconds
  }

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
      <ResponsiveContainer width="100%" height="100%" aspect={3}>
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
        >
          <Line type="monotone" dataKey={getUsageValue} stroke="#8884d8" dot={false} />
          <XAxis dataKey="firstName" />
          <YAxis />
        </LineChart>
      </ResponsiveContainer>
    </>
  )
}

export default List