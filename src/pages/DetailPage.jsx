import React from 'react'
import DetailCard from '../components/DetailCard'
import { useParams } from 'react-router-dom'

export default function DetailPage() {
    const {productID}=useParams()
  return (
    <div className="w-full px-2 flex flex-col gap-5 items-center ">
        <DetailCard productID={productID}/>
    </div>
  )
}
