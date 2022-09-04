import React from 'react'
import Item from './Item'

import {Contact, SocialMedia} from '../../conts'
// FaFacebookF
import Social from './social'


const Card = () => {
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-8 pt-10 ">
                <img
                    src="https://th.bing.com/th/id/OIP.TlJJxIcO0R4Esn48rXra9wHaE7?w=241&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7"
                    alt="Shoes"
                    class="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">Victoria Jimenez</h2>
                <div className='rounded-lg pr-3 pl-3 pt-2 pb-2  mb-2'>
                    <h4 className="text-base text-gray-400 font-medium">UX/UI Designer</h4>
                    <div className='flex mt-2 justify-around'>
                        {
                            SocialMedia.map(x => <Social icon={x.icon} link={x.link} />)
                        }
                    </div>
                </div>
                <div className=' w-full rounded-lg  bg-gray-100'>
                    {
                        Contact.map(x => <Item icon={x.icon} contact={x.medio} value={x.phone} />)
                    }
                </div>
                <div className="card-actions">
                    <button className="btn mt-4 gap-2 btn-primary bg-violet-500 w-64 rounded-full hover:bg-violet-700">
                        Descargar CV
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Card