import React from 'react'
import Skeleton from '../LoadingSkeleton/Skeleton';
import styles from "./Loading.css"

export default function Loading() {
  const COUNTER  = 100;
  return (
    <div className='loadingSkeleton'>
       {Array(COUNTER).fill(<Skeleton/>)}
    </div>
    )
}
