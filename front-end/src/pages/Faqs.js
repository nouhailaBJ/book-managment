import React, { useEffect, useState } from 'react'
import Title from '../components/Title'
import {useSelector} from "react-redux"
import AllFaqs from '../components/AllFaqs'

function Faqs() {
  const faqs  = useSelector((state) => state.faqsReducer)
  return (
    <section className="section-padding gray">
    <Title title="Faqs" desc="The answers for your questions Here" />
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <AllFaqs faqs={faqs}/>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Faqs