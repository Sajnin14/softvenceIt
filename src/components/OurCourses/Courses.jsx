import React from 'react';
import image1 from '../../assets/image (2).png';
import image2 from '../../assets/image (3).png';

const Courses = () => {
    return (
        <div className='w-[1440px] mx-auto'>
            <div className='my-12'>
                <h3 className='text-5xl font-semibold text-[#262626]'>Our Courses</h3>
                <div className='md:flex items-center justify-between'>
                    <p className='text-[#59595A] text-lg w-[1029px] mb-2'>Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.</p>
                    <p><button className='bg-[#002868] text-white text-lg font-medium py-[18px] px-6 rounded-lg'>View All</button></p>
                </div>


                <div className='flex flex-col md:flex-row gap-[30px]'>
                    <div className='bg-[#F1F1F3] rounded-2xl p-[50px]'>
                       <img className='rounded-lg' src={image1} alt="" />
                       <div className='my-[30px] flex justify-between items-center'>
                          <div className='flex items-center gap-[10px]'>
                            <p className='bg-white px-4 py-[10px] text-lg font-medium text-[#4C4C4D] rounded-lg'>4 Weeks</p>
                            <p className='bg-white px-4 py-[10px] text-lg font-medium text-[#4C4C4D] rounded-lg'>Beginer</p>
                          </div>
                          <p>By John Smith</p> 
                       </div>

                       <p className='text-[#262626] font-semibold text-2xl mb-[14px]'>Web Design Fundamentals</p>
                       <p className='text-[#4C4C4D] text-lg mb-[30px]'>Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites.</p>

                       <button className='bg-[#002868] text-white py-[18px] px-6 rounded-lg text-lg font-medium w-full'>Get it Now</button>

                    </div>

                    <div className='bg-[#F1F1F3] rounded-2xl p-[50px]'>
                       <img className='rounded-lg' src={image2} alt="" />
                       <div className='my-[30px] flex justify-between items-center'>
                          <div className='flex items-center gap-[10px]'>
                            <p className='bg-white px-4 py-[10px] text-lg font-medium text-[#4C4C4D] rounded-lg'>4 Weeks</p>
                            <p className='bg-white px-4 py-[10px] text-lg font-medium text-[#4C4C4D] rounded-lg'>Beginer</p>
                          </div>
                          <p>By John Smith</p> 
                       </div>

                       <p className='text-[#262626] font-semibold text-2xl mb-[14px]'>Web Design Fundamentals</p>
                       <p className='text-[#4C4C4D] text-lg mb-[30px]'>Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites.</p>

                       <button className='bg-[#002868] text-white py-[18px] px-6 rounded-lg text-lg font-medium w-full'>Get it Now</button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Courses;