import React from 'react'
import { useParams , Route, Routes } from 'react-router'
import Comments from '../components/comments/Comments';
const QuoteDetail = () => {
  const params = useParams();
  return (
    <>
      <h1>AQuote details page</h1>
      <p>{params.quoteId}</p>
    </>
  )
}

export default QuoteDetail
