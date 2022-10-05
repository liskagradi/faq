import React from 'react';
import FaqItem from './FaqItem';

const FaqList = ({faqs, setFaqs}) => {

  const deleteFaq = id => {
    const faqsUpdated = faqs.filter(faq => faq.id !== id);
    setFaqs(faqsUpdated);
  };

  return (
    <>
      {
        faqs.map((faq) => 
          <FaqItem 
          title={faq.text}
          key={faq.id}
          id={faq.id}
          deleteFaq={deleteFaq}
          />
        )
      }
    </>
  );
}

export default FaqList;