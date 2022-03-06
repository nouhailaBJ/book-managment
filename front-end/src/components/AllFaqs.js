import React from 'react'
import { Accordion } from 'react-bootstrap'

function AllFaqs({faqs}) {
  return (
    <Accordion defaultActiveKey={['0']} alwaysOpen>
        {faqs.map((faq, index) =>
           <Accordion.Item eventKey={index}>
                <Accordion.Header>{faq.title}</Accordion.Header>
                <Accordion.Body>
                    {faq.desc}
                </Accordion.Body>
            </Accordion.Item>     
        )}
    </Accordion>
  )
}

export default AllFaqs