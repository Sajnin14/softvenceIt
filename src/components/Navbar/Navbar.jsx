import './Navbar.css';
import image from '../../assets/image.png';
import image1 from '../../assets/image (1).png';
import image3 from '../../assets/backup_table.png';
import image4 from '../../assets/atr.png';

const Navbar = () => {
    const links = <div className="flex gap-8 font-jakarta text-sm ml-[74px]">
        <li><a>Home</a></li>
        <li><a>About</a></li>
        <li><a>Pricing</a></li>
        <li><a>Consulting</a></li>
        <li><a>AI Couch</a></li>
    </div>
    return (
        <div className="w-full background pb-24">

            {/* Navbar starts */}
            <div className="navbar w-[1440px] mx-auto py-[30px] mb-[82px]">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {
                                links
                            }
                        </ul>
                    </div>
                    {/* <a className="btn btn-ghost normal-case text-xl">daisyUI</a> */}
                    <img src="/src/assets/Frame 427321848.png" alt="" />

                    <div className="hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {
                                links
                            }
                        </ul>
                    </div>
                </div>
                <div className="navbar-end">
                    <a className="font-bold px-9 py-3 font-manrope text-[#010205] border border-[#010205] rounded-[50px]">Get Started</a>
                </div>
            </div>

            {/* Hero Starts */}
            <div className='w-[1440px] mx-auto md:flex gap-20 relative'>
                <div>
                    <h1 className='font-medium text-[80px] text-black mb-6'>Your AI- <br />Powered Sales Coach</h1>
                    <div className='md:flex gap-16 items-center'>
                        <img src={image} alt="" />
                        <p className='text-[#76808C] font-medium text-xl w-full md:w-[347px]'>Get real-time coaching, script suggestions, and deal-closing strategies powered by advanced AI technology.</p>
                    </div>

                    <div className='flex gap-14 mt-24'>
                        <div className='flex gap-5'>
                            <div className='bg-white p-3 rounded-2xl'>
                                <img className='w-14 h-14' src={image3} />
                            </div>
                            <div>
                                <h3 className='text-[#05131D] font-semibold text-[40px]'>2000+</h3>
                                <p className='text-[#76808C] text-xl font-medium'>Your Protection</p>
                            </div>
                        </div>

                        <div className='flex gap-5'>
                            <div className='bg-white p-3 rounded-2xl'>
                                <img className='w-14 h-14' src={image4} />
                            </div>
                            <div>
                                <h3 className='text-[#05131D] font-semibold text-[40px]'>7001+</h3>
                                <p className='text-[#76808C] text-xl font-medium'>Provide Tailord</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 2nd div */}
                <div className=''>
                    <img src={image1} />

                    <div className='bg-white py-[50px] px-6 w-[467px] rounded-[27px] md:absolute bottom-10 right-80'>
                        <div className='flex justify-between mb-[23px]'>
                            <p className='text-[#00245F] text-[50px] font-medium'>721+</p>
                            <p className='text-[#00245F] text-[50px] font-medium'>1000+</p>

                        </div>
                        <p className='text-[#05131D] text-[27.9px] font-semibold mb-[39px]'>Growth is our priority.</p>
                        <p className='font-medium text-[#76808C] mb-2'>As a full-service business agency, we specialize in helping companies of all sizes optimize their operations</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;