
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <>
        <div className="navbar_main">
            <div className="container">
                <div className="navbar_row flex justify-between items-center leading-[110px]">
                    <div className="navbar_left text-[24px] text-[#5c5c5c] font-lato font-bold">
                        <h2><Link to={'#'}>𝓟𝓪𝓵𝓪𝓼𝓱</Link></h2>
                    </div>
                    <div className="navbar_right">
                        <ul className='flex gap-10 text-[12px] text-[#686868] font-open sans font-semibold'>
                            <li><Link to={'/'}>HOME</Link></li>
                            <li><Link to={'/'}>ABOUT US</Link></li>
                            <li><Link to={'/'}>PORTFLIO</Link></li>
                            <li><Link to={'/'}>BLOG</Link></li>
                            <li><Link to={'/'}>PAGES</Link></li>
                            <li><Link to={'/'}>CONTACT US</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Navbar