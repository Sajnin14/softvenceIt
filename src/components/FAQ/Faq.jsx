import React from 'react';

const Faq = () => {
    return (
        <div className='w-[1440px] mx-auto font-questrial relative mb-[30px]'>
            <p className='text-[#001C4A] text-2xl md:absolute top-0 left-0'>Frequently asked <br /> questions</p>
            <h2 className='text-6xl text-black text-center md:w-[800px] lg:w-[920px] mx-auto'>Constant collaboration is how we roll. Let's see if we are a good fit.</h2>

            <div className='my-20'>
                <div className='flex gap-10 items-center bg-base-100 border-b border-[#CCCCCC]'>
                    <p className='text-[#8B7D4C] text-[32px]'>01</p>
                    <div className="collapse collapse-plus">
                        <input type="radio" name="my-accordion-3" defaultChecked />
                        <div className="collapse-title text-[40px] font-medium">
                        Why should I choose Humestic?
                        </div>
                        <div className="collapse-content">
                            <p className='font-light mr-[149px]'>Bottleneck mice my capacity is full, nor incentivization we need to start advertising on social media, or helicopter view, for what the. Let's put a pin in that we need to build it so that it scales, are there any leftovers in the kitchen?, if you're not hurting you're not winning loop back</p>
                        </div>
                    </div>
                </div>
               
                <div className='flex gap-10 items-center bg-base-100 border-b border-[#CCCCCC]'>
                    <p className='text-[#8B7D4C] text-[32px]'>02</p>
                    <div className="collapse collapse-plus">
                        <input type="radio" name="my-accordion-3" defaultChecked />
                        <div className="collapse-title text-[40px] font-medium">
                        I like your works, how do we start a project?
                        </div>
                        <div className="collapse-content">
                            <p className='font-light mr-[149px]'>Bottleneck mice my capacity is full, nor incentivization we need to start advertising on social media, or helicopter view, for what the. Let's put a pin in that we need to build it so that it scales, are there any leftovers in the kitchen?, if you're not hurting you're not winning loop back</p>
                        </div>
                    </div>
                </div>


                <div className='flex gap-10 items-center bg-base-100 border-b border-[#CCCCCC]'>
                    <p className='text-[#8B7D4C] text-[32px]'>03</p>
                    <div className="collapse collapse-plus">
                        <input type="radio" name="my-accordion-3" defaultChecked />
                        <div className="collapse-title text-[40px] font-medium">
                        What info is required to get a quotation?
                        </div>
                        <div className="collapse-content">
                            <p className='font-light mr-[149px]'>Bottleneck mice my capacity is full, nor incentivization we need to start advertising on social media, or helicopter view, for what the. Let's put a pin in that we need to build it so that it scales, are there any leftovers in the kitchen?, if you're not hurting you're not winning loop back</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Faq;