import logo from '../assets/logo.png'
import moment from 'moment'
import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='mx-auto max-w-[90%] xl:max-w-[1150px] pb-4 pt-5'>
            <img className='mx-auto text-center' src={logo} alt="" />
            <p className='text-gray-500 mt-2 mb-2 text-center'>Journalism Without Fear or Favour</p>
            <p className='text-center'>{moment().format("dddd, MMMM D YYYY")}</p>

            <div className='bg-gray-300 py-3 px-3 rounded-md mt-4 flex'>
                <button className='bg-orange-600 py-2 px-5 rounded-md'>Latest</button>
                <Marquee pauseOnHover={true} speed={100}>
                    <Link to='/'>Biden Pledges Nearly $3 Billion To Ukraine In Largest U.S. Military Aid Package Yet</Link>
                    <Link to='/'>Bayern Slams Authorities Over Flight Delay to Club World Cup</Link>
                </Marquee>
            </div>
        </div>
    )
}

export default Header
