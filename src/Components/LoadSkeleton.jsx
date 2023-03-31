import Skeleton from "react-loading-skeleton";

import React from 'react'

const LoadSkeleton = () => {
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-3">
      <Skeleton height={300} width={300} count={9}/>
    </div>
  )
}

export default LoadSkeleton