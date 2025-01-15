'use client'
import React from 'react'

type Offer ={
  title: string;
  description: string;
}
const SpecialOffers:React.FC = () =>{
  const offers:Offer[] = [
    {
      title:'Happy Hour',
      description:'Get 50% off on all Drinks from 5:00 PM to 7:00 PM.'
    },
    {
      title:'Family Meal Deal',
      description:'Order 2 Main Courses & Get a Family Deal Coupon Code.'
    },
    {
      title:'Weekly Brunch',
      description:'Enjoy A Free Complimentry Drink.'
    },
    {
      title:'Mid-Night Deal',
      description:'Enjoy A Free Complimentry burger drink in midnight deals.'
    },
  ];

  const handelOfferClick = (description:string) => {
    alert(description);
  }
  return (
<section className='py-10'>
<div className='container mx-auto text-center'>
  <h2 className='text-4xl font-bold mb-6 text-white'>Special Offer's</h2>
  <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1/2 gap-6'>
    {offers.map((offer, index) => (
      <button key={index}
      onClick={() => handelOfferClick(offer.description)}
      className='bg-white shadow-lg rounded-lg text-center hover:bg-grey-300 transition duration-300 transform hover:scale-105'>
        <h3 className='text-2xl font-semibold text-red-700'>  {offer.title}
        </h3>
          <p className='text-slate-700 mt-3'>{offer.description}</p>
        

      </button>
    ))}

  </div>

</div>
</section>
  )

}
export default SpecialOffers