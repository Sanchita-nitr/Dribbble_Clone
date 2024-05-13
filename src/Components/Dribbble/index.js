
import { CiSearch } from "react-icons/ci";
import { FaFacebook, FaInstagram, FaPinterest, FaTwitter } from "react-icons/fa";
import { IoIosHeart, IoMdEye } from "react-icons/io";
import './style.css';

import { HiOutlineMenuAlt2 } from "react-icons/hi";
// import { RxCross1 } from "react-icons/rx";
// import { useState } from 'react';

function Index() {

    return (
        <>
            <div className="  bg-neutral-50">
                <nav className="p-6">
                    <ul className="flex flex-wrap text-center font-serif items-center justify-between font-bold text-sm ">

                        <li className="toggle_btn md:text-3xl -ml-4 inline-block lg:hidden lg:text-lg">
                            <i className='icon'><HiOutlineMenuAlt2 /></i></li>
                        {/* <li className="action_btn md:text-3xl -ml-4 inline-block lg:hidden lg:text-lg">
                            <i className='icon'><RxCross1 /></i>
                        </li> */}

                        <ul className='flex flex-wrap '>
                            <li className='cursor-pointer hidden lg:inline-block hover:text-zinc-500 '>
                                <a href='#' > Find designers</a>
                                <ul className='dropdown bg-white py-8 px-7 rounded-xl'>
                                    <li className='text-md font-sans pr-24'>Designer search</li>
                                    <li className='  text-sm font-normal mb-4 '>Quickly find your next designer
                                    </li>
                                    <li className='text-md font-sans pr-36'>Post a job </li>
                                    <li className=' text-sm font-normal pl-1'>The #1 job board for design talent
                                    </li>
                                </ul>
                            </li>
                            <li><a className="cursor-pointer hidden lg:inline-block ml-10">Inspiration</a> </li>
                            <li className='cursor-pointer hidden lg:inline-block hover:text-zinc-500 ml-10'>
                                <a href='#' > Courses</a>
                                <ul className='dropdown bg-white py-8 px-4 rounded-xl flex-auto '>
                                    <li className='text-md font-sans pr-44'>UX diploma</li>
                                    <li className=' text-sm font-normal pl-5'> Learn UX design from scratch in 6 months
                                    </li>
                                    <li className='text-md font-sans pr-40 mt-4'>UI Certificate</li>
                                    <li className=' text-sm font-normal'>12-week UI skill building for designers
                                    </li>
                                    <hr />
                                    <li className='text-md font-sans pr-16 mt-4' >Live interactive workshops</li>
                                    <li className=' text-sm font-normal pr-20'>with design professionals
                                    </li>
                                </ul>
                            </li>
                            <li><a className="cursor-pointer hidden lg:inline-block ml-10">Jobs</a></li>
                            <li><a className="cursor-pointer hidden lg:inline-block ml-10">Go Pro</a></li>
                        </ul>
                        <li className=' text-justify text-lg sm:text-3xl sm:mr-32 sm:ml-0 md:text-3xl md:mr-48 md:ml-0 lg:ml-36 lg:mr-0 lg:text-2xl font-serif italic font-bold '> Dribbble</li>
                        <li className=" ml-28 text-xl sm:ml-72  md:ml-96 md:text-3xl lg:ml-48 lg:mr-0 lg:text-xl font-bold"><CiSearch /></li>
                        <li className='hidden lg:inline-block'><input type="text" className="px-6 py-3 rounded-full text-base font-normal" placeholder='Search... ' /></li>
                        <li className='  hidden lg:inline-block ml-6 px-1 py-3 cursor-pointer'> Log in</li>
                        <li className=' lg:ml-4 px-6 py-4 rounded-full bg-slate-900 text-white cursor-pointer hover:bg-zinc-700 '>Sign Up</li>
                    </ul>
                </nav>

                <div className="menu inline-block bg-sky-200 lg:hidden ">
                    <ul>
                        <li><a href="">Find designers</a></li>
                        <li><a href="">Inspiration</a></li>
                        <li><a href="">Courses</a></li>
                        <li><a href="">Jobs</a></li>
                        <li><a href="">Go pro</a></li>
                    </ul>

                </div>
            </div>
            <div className="text-center pt-20 pb-10 bg-neutral-50 ">
                <button className='bg-yellow-200 justify-center items-center cursor-pointer text-black text-base font-serif py-2 px-3 rounded-full font-bold '>Over 3 million ready-to-work creatives!</button>
                <p className='text-5xl mt-10 lg:mt-10 text-center justify-between lg:text-7xl font-serif font-medium text-slate-900'>The world’s destination <br /> for design</p>
                <p className='mt-10 text-center text-xl font-semibold text-slate-900 ' >Get inspired by the work of millions of top-rated designers & agencies around the world.</p>
                <button type="button" className=' bg-slate-900 hover:bg-zinc-700 justify-center items-center cursor-pointer mt-8 text-white text-sm font-bold py-4 px-5 mb-10 rounded-full'>Get Started</button>
            </div>

            <div className="container px-4" >
                <marquee behavior="scroll" direction="left">
                    <ul className='grid gap-5 grid-rows-1 grid-cols-5'>
                        <div className="slide_1"> <img className=' max-h-96  max-w-96 rounded-3xl' src="https://cdn.dribbble.com/uploads/47175/original/1fb34610061a95a007ac5e7b1dc53138.jpeg?1685645183&format=webp&resize=546x680&vertical=center" alt="Digital" /> <div className="bottom"><p>Victa Wille <br /> Digital Designer</p></div> <div className="button"><button>Mobile</button><button>UI</button><button>Web</button></div></div>

                        <div className="slide_2 ml-10"><img className='h-96   max-w-2xl  rounded-3xl' src="https://cdn.dribbble.com/uploads/47174/original/4f02d72fe701b15b2168a4954332427f.png?1685645150&format=webp&resize=546x680&vertical=center" alt="Brand illustrator" /> <div className=" bottom"><p>Lilla Bardenova <br /> Brand + Illustrator</p> </div><div className="button"><button>Brand</button><button>Illustrator</button><button>Web</button></div></div>

                        <div className="slide_3 ml-10"><img className='h-96 max-w-2xl  rounded-3xl' src="https://cdn.dribbble.com/uploads/47176/original/9b22cd83bde1809976bec0722d1f8923.jpeg?1685645213&format=webp&resize=546x680&vertical=center" alt="" /><div className="bottom"><p>Elif Kamesoglu <br /> Brand Designer</p></div> <div className="button"><button>Brand</button><button>Illustration</button><button>Web</button></div></div>

                        <div className="slide_4 ml-10"><img className='h-96  max-w-2xl  rounded-3xl' src="https://cdn.dribbble.com/uploads/47177/original/3986915be548424a5d36657f2b034ead.jpeg?1685645250&format=webp&resize=546x680&vertical=center" alt="" /> <div className=" bottom"><p>Chris Owens <br /> Creative Director</p></div> <div className="button "><button>Illustration</button> <button>Mobile</button><button>UI</button></div></div>
                        <div className="slide_5 ml-10"><img className='h-96  max-w-2xl  rounded-3xl' src="https://cdn.dribbble.com/uploads/47170/original/cd3266dde4f00a5d6a509c7375ddaecd.png?1685644840&format=webp&resize=546x680&vertical=center" alt="" /> <div className="bottom"><p>Aurelien Salomon <br /> Design Director</p></div> <div className="button"><button>Mobile</button><button>Product</button><button>UX</button></div></div>

                        <div className="slide_6 ml-10"><img className='h-96  max-w-2xl  rounded-3xl' src="https://cdn.dribbble.com/uploads/47172/original/d85ae8c7db2421e9a01ecac942978d4b.png?1685645079&format=webp&resize=546x680&vertical=center" alt="" /> <div className="bottom"><p>Andrea Jelic<br /> Digital Designer </p></div> <div className="button"><button>Brand</button><button>UI</button><button>Web</button></div></div>

                        <div className="slide_7 ml-10"><img className='h-96  max-w-2xl  rounded-3xl' src="https://cdn.dribbble.com/uploads/47171/original/daniele-buffa-3.png?1689174763&format=webp&resize=546x680&vertical=center" alt="" /> <div className="bottom"><p>Daniele Buffa<br /> Principal Designer </p> </div><div className="button"><button>Animation</button><button>UI</button><button>Visual</button></div></div>

                        <div className="slide_9 ml-10"><img className=" h-96  max-w-2xl  rounded-3xl" src="https://cdn.dribbble.com/uploads/47173/original/Vladimir_Gruev.png?1689174896&format=webp&resize=546x680&vertical=center" alt="" /> <div className=" bottom"><p>Vladimir Gruev<br /> Digital Designer </p> </div><div className="button"><button>Brand</button><button>Design</button></div></div>
                    </ul>
                </marquee>
            </div>

            <div className="mt-10 text-center text-5xl mb-12">
                <p>Explore inspiring designs</p>
            </div>

            <div className="box px-4 md:grid md:gap-10 md:grid-cols-2 md:px-10  lg:grid lg:gap-7 lg:px-2 lg:grid-cols-4 lg:grid-rows-3 flex flex-wrap text-base items-center justify-between">
                <div className=" cursor-pointer "><img className=" rounded-lg  " src="https://cdn.dribbble.com/userupload/14342048/file/original-1a577dc8d56bf320aa5e736d8b31cf27.jpg?resize=640x480&vertical=center" /><ul className=" flex flex-wrap my-2"> <li> Kendick kid </li> <li className='ml-auto text-xl mr-3'><IoIosHeart /> </li> <li className='text-xl mr-2'><IoMdEye /></li> </ul></div>
                <div className=" cursor-pointer"><img className=" rounded-lg " src="https://cdn.dribbble.com/userupload/14435457/file/original-0a56a7dcfcb47a5e87393bb59d6bb23d.jpg?resize=640x480&vertical=center" /><ul className=" flex flex-wrap my-2"> <li> Razvan Vezeteu </li> <li className='ml-auto text-xl mr-3'><IoIosHeart /> </li> <li className='text-xl mr-2'><IoMdEye /></li> </ul></div>
                <div className=" cursor-pointer"><img className=" rounded-lg " src="https://cdn.dribbble.com/userupload/14475300/file/original-ef74ec5301e38d5ead610afafa4ff49f.jpg?resize=840x630&vertical=center" /> <ul className=" flex flex-wrap my-2"> <li>DKNG</li> <li className='ml-auto text-xl mr-3'><IoIosHeart /> </li> <li className='text-xl mr-2'><IoMdEye /></li> </ul></div>
                <div className=" cursor-pointer" ><img className=" rounded-lg " src="https://cdn.dribbble.com/userupload/14406137/file/original-d5007cbf987a515a555208970c452020.png?resize=800x600&vertical=center" /> <ul className=" flex flex-wrap my-2"> <li>Vedant Hegde </li> <li className='ml-auto text-xl mr-3'><IoIosHeart /> </li> <li className='text-xl mr-2'><IoMdEye /></li> </ul></div>
                <div className=" cursor-pointer" ><img className=" rounded-lg" src="https://cdn.dribbble.com/userupload/14523069/file/original-af9f1d6c5bfcb70b996bee14a411d466.jpg?resize=640x480&vertical=center" /><ul className=" flex flex-wrap my-2"> <li>Srdjan Vidakovic </li> <li className='ml-auto text-xl mr-3'><IoIosHeart /> </li> <li className='text-xl mr-2'><IoMdEye /></li> </ul></div>
                <div className=" cursor-pointer" ><img className=" rounded-lg " src="https://cdn.dribbble.com/userupload/14401802/file/original-df997a38b2a1c979ca6badc2c23ebac5.jpg?resize=840x630&vertical=center" /><ul className=" flex flex-wrap my-2"> <li> </li> <li className='ml-auto text-xl mr-3'><IoIosHeart /> </li> <li className='text-xl mr-2'><IoMdEye /></li> </ul></div>
                <div className=" cursor-pointer" ><img className=" rounded-lg " src="https://cdn.dribbble.com/userupload/14407020/file/original-9fe125524f020f9c5c56d6556e192200.jpg?resize=640x480&vertical=center" /><ul className=" flex flex-wrap my-2"> <li></li> <li className='ml-auto text-xl mr-3'><IoIosHeart /> </li> <li className='text-xl mr-2'><IoMdEye /></li> </ul></div>
                <div className=" cursor-pointer pb-3" ><img className=" rounded-lg " src="https://cdn.dribbble.com/userupload/14440269/file/original-bf92281861ca7c6554139453d2781ba3.png?resize=640x480&vertical=center" /><ul className=" flex flex-wrap my-2"> <li></li> <li className='ml-auto text-xl mr-3'><IoIosHeart /> </li> <li className='text-xl mr-2'><IoMdEye /></li> </ul></div>
                <div className=" cursor-pointer pb-3" ><img className=" rounded-lg " src="https://cdn.dribbble.com/userupload/14506371/file/original-49bbd1934243fc82b9ca9102c9ea4adc.jpg?resize=640x480&vertical=center" /><ul className=" flex flex-wrap my-2"> <li>Enisaurus </li> <li className='ml-auto text-xl mr-3'><IoIosHeart /> </li> <li className='text-xl mr-2'><IoMdEye /></li> </ul></div>
                <div className=" cursor-pointer pb-3" ><img className=" rounded-lg " src="https://cdn.dribbble.com/userupload/14465735/file/original-56804520cbd40f7a876964aa62056b39.jpg?resize=640x480&vertical=center" /> <ul className=" flex flex-wrap my-2"> <li>Tyler Pate </li> <li className='ml-auto text-xl mr-3'><IoIosHeart /> </li> <li className='text-xl mr-2'><IoMdEye /></li> </ul></div>
                <div className=" cursor-pointer pb-3" > <img className=" rounded-lg" src="https://cdn.dribbble.com/userupload/14380442/file/original-f2e57767210607a2f5f5c489f2ba4b48.jpg?resize=640x480&vertical=center" /><ul className=" flex flex-wrap my-2"> <li>Brad Hansen  </li> <li className='ml-auto text-xl mr-3'><IoIosHeart /> </li> <li className='text-xl mr-2'><IoMdEye /></li> </ul></div>
                <div className=" cursor-pointer pb-3" ><img className=" rounded-lg" src="https://cdn.dribbble.com/userupload/14376485/file/original-e0b9c4ebf93a0510d6244722db8e1cb0.jpg?crop=0x0-1600x1200&resize=640x480&vertical=center" /><ul className=" flex flex-wrap my-2"> <li>Armin pro</li> <li className='ml-auto text-xl mr-3'><IoIosHeart /> </li> <li className='text-xl mr-2'><IoMdEye /></li> </ul></div>
            </div>

            <div className=" text-center">
                <button className=" border-2 border-black rounded-full py-4 px-5  font-semibold  mb-36 mt-16 hover:text-neutral-500 ">Browse more inspiration</button>
            </div>

            <div className=" bg-yellow-200 pb-28  pt-24">
                <p className='text-5xl mt-10 text-center font-serif  font-medium lg:text-6xl bg-yellow-200' >Find your next <br />designer today</p>
                <p className='text-xl mt-10 text-center justify-items-center lg:text-xl bg-yellow-200'>The world's leading brands use Dribbble to hire creative talent. <br />Browse millions of top-rated portfolios to find your perfect <br /> creative match  </p>
                <div className=" text-center  bg-yellow-200">
                    <ul className='flex flex-wrap justify-center items-center justify-items-center'>
                        <div className='mt-10 mb-8 md:mb-0 md:mt-10 lg:mb-0 lg:mt-10'>
                            <li className=' bg-black cursor-pointer text-white text-sm font-bold py-4 px-6 rounded-full  '> Get started now</li>
                        </div>
                        <div className='mt-36 -ml-40 md:mt-10 md:ml-3 lg:mt-10 lg:ml-3' >
                            <li className=' bg-white cursor-pointer text-black text-sm font-bold py-4 px-5 rounded-full  '>Learn about hiring</li>
                        </div>
                    </ul>
                </div>

                <h1 className="mt-10 text-center text-xl  bg-yellow-200">Are you a designer? <u className=' bg-yellow-200'> Join Dribble</u></h1>
            </div>

            <div className="slider  mt-20 mb-24">
                <marquee behavior="scroll" direction="left">
                    <ul>
                        <div className="slider_1 ml-5"><img className=' h-40  max-w-xl rounded-lg'  src="https://cdn.dribbble.com/userupload/14277203/file/original-72588b73f18f42fb1ae6df2e75c4de77.jpg?crop=0x0-6667x5000&format=webp&resize=400x300&vertical=center" alt="Branding" /><div className="bottomleft mt-4">Branding</div></div>
                        <div className="slider_2 ml-10"><img className=' h-40  max-w-xl rounded-lg' src="https://cdn.dribbble.com/userupload/14318662/file/original-223096717f98f1d651c887403af49deb.jpg?format=webp&resize=400x300&vertical=center" alt="Web Design" /><div className="bottomleft mt-4 ">Web Design</div></div>
                        <div className="slider_3 ml-10"><img className=' h-40  max-w-xl rounded-lg ' src="https://cdn.dribbble.com/userupload/14361559/file/original-02e8353f423d56cb7d92f6996f3395fd.png?crop=22x17-1950x1463&resize=640x480&vertical=center" alt="Product Design" /><div className="bottomleft mt-4">Product Design</div></div>
                        <div className="slider_4 ml-10"><img className=' h-40  max-w-xl rounded-lg' src="https://cdn.dribbble.com/userupload/14326659/file/original-8e893049fb05d4fd84b385f2aa2f176a.jpg?format=webp&resize=400x300&vertical=center" alt="Typography" /><div className="bottomleft mt-4">Typography</div></div>
                        <div className="slider_5 ml-10"><img className=' h-40  max-w-xl rounded-lg' src="https://cdn.dribbble.com/userupload/14056579/file/original-b9c2a3706b2380bd3a6a85b15146efa0.jpg?crop=216x0-4736x3389&format=webp&resize=400x300&vertical=center" alt="mobile" /><div className="bottomleft mt-4">mobile</div></div>
                        <div className="slider_6 ml-10"><img className=' h-40  max-w-xl rounded-lg' src="https://cdn.dribbble.com/userupload/14342083/file/original-bbebe1d2685e71e983e802d5cc771fc8.jpg?crop=0x0-3201x2401&format=webp&resize=400x300&vertical=center" alt="illustration" /><div className="bottomleft mt-4">illustration</div></div>
                        <div className="slider_7 ml-10"><img className=' h-40  max-w-xl rounded-lg' src="https://cdn.dribbble.com/userupload/14132601/file/original-ccd26d8bdf6e8342deca59c8a0593c1c.png?resize=640x480&vertical=center" alt=" print" /><div className="bottomleft mt-4">print</div></div>
                        <div className="slider_8 ml-10"><img className=' h-40  max-w-xl rounded-lg' src="https://cdn.dribbble.com/userupload/14226566/file/still-5fd132c04a991b2569a263bb84f74f77.png?format=webp&resize=400x300&vertical=center" alt="Animation" /><div className="bottomleft mt-4">Animation</div></div>
                    </ul>
                </marquee>
            </div>

            <div className=" flex flex-wrap text-base text-center  items-center justify-between">
                <ul class=" -mt-16 flex flex-wrap  lg:mt-3 lg:ml-0 text-sm font-bold items-center  justify-between ">
                    <li class=' ml-36 text-3xl md:ml-10 md:mt-0 md:text-2xl  lg:ml-32  lg:mt-0 lg:text-2xl font-bold italic cursor-pointer' > Dribbble</li>
                    <ul className=" flex flex-wrap ">
                        <li class="mt-7 ml-2 md:ml-5 md:mt-0 lg:ml-12  lg:mt-0 cursor-pointer">For designers</li>
                        <li class="mt-7 ml-3 md:ml-3 md:mt-0 lg:ml-12  lg:mt-0 cursor-pointer"> Hire talent</li>
                        <li class="mt-7 ml-3 md:ml-3 md:mt-0 lg:ml-12  lg:mt-0 cursor-pointer">inspiration</li>
                        <li class="mt-7 ml-3 md:ml-3 md:mt-0 lg:ml-12 lg:mt-0 cursor-pointer">Advertising</li>
                    </ul>
                    <ul className=" flex flex-wrap ">
                        <li class=" mt-6 ml-20  md:ml-4 md:mt-0 lg:ml-12  lg:mt-0 cursor-pointer">Blog</li>
                        <li class=" mt-6 ml-3 md:ml-4 md:mt-0 lg:ml-12  lg:mt-0 cursor-pointer">About</li>
                        <li class=" mt-6 ml-3 md:ml-4 md:mt-0 lg:ml-12  lg:mt-0 cursor-pointer">Careers</li>
                        <li class=" mt-6 ml-3 md:ml-4 md:mt-0 lg:ml-12  lg:mt-0 cursor-pointer">Support</li>
                    </ul>
                    <ul className=" md:ml-5 md:mt-0 lg:ml-20 lg:mt-0 flex flex-wrap items-center ">
                        <li className=" flex flex-wrap  ">
                            <a className="mt-6 ml-32 md:ml-2 md:mt-0 lg:mb-2 lg:ml-2 lg:mt-0  text-xl" href="http://twitter.com/dribbble"><FaTwitter /></a>
                            <a className="mt-6 ml-5  md:ml-2 md:mt-0 lg:mb-2 lg:mt-0 lg:ml-5 text-xl" href="http://facebook.com/dribbble"><FaFacebook /></a>
                            <a className="mt-6 ml-5 md:ml-2 md:mt-0 lg:mb-2 lg:mt-0 lg:ml-5 text-xl" href="http://instagram.com/dribbble"><FaInstagram /></a>
                            <a className="mt-6 ml-5 md:ml-2 md:mt-0 lg:mb-2 lg:mt-0 lg:ml-5  text-xl" href="http://www.pinterest.com/dribbble/"><FaPinterest /></a>
                        </li>
                    </ul>
                </ul>

                <div className="flex flex-wrap items-center mt-20 text-sm mb-16">
                    <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 font-semibold">
                        <li className="flex flex-wrap">
                            <li className=" ml-10 lg:ml-32 lg:mt-0">@2024 Dribbble</li>
                            <li className=" ml-5 lg:ml-10">Terms</li>
                            <li className=" ml-5 lg:ml-10">Privacy</li>
                            <li className=" ml-5 lg:ml-10">Cookies</li>
                        </li>

                    </ul>

                    <ul className="flex flex-wrap items-center mt-3 text-sm  text-gray-500 font-semibold">
                        <li className="flex flex-wrap">
                            <li className="mt-3 ml-10 md:ml-32 lg:ml-72 lg:mt-0">Jobs</li>
                            <li className="mt-3 ml-4 lg:ml-10">Designers</li>
                            <li className="mt-3 ml-4 lg:ml-10">Freelancers</li>
                            <li className="mt-3 ml-4 lg:ml-10">Tags</li>
                            <li className="mt-3 ml-4 lg:ml-10">Places</li>
                            <li className="mt-4 ml-44 md:ml-4 lg:ml-10 lg:mt-0">Resources</li>
                        </li>

                    </ul>

                </div>
            </div>
        </>
    )
}
export default Index;
