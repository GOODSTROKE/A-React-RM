import React from 'react'
import Detail from './details'
import './tableData.css'

const TableData = ({ data }) => {
  return (
    <>
      <div className='main'>
        {data.map((d, i) => (
          <div>
            <Detail key={i} data={d} />
          </div>
        ))}
      </div>
    </>
  )
}

export default TableData
