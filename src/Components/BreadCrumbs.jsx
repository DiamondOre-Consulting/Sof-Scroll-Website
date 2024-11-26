import React from 'react'
import { Link } from 'react-router-dom'
import { MdKeyboardArrowRight } from 'react-icons/md';

const BreadCrumbs = ({ items, headText }) => {
    return (
        <div className='relative flex flex-col items-start justify-start py-3 pl-4 overflow-hidden text-black border-b bg-slate-50'>
            <nav className="flex items-center relative z-[40] flex-wrap  justify-center p-1 space-x-1 px-2  text-[0.95rem] ">
                {items?.map((item, index) => (
                    <React.Fragment key={index}>
                        {index > 0 && <span className=""><MdKeyboardArrowRight className='text-[1.5rem] mt-[0.2rem]' /></span>}
                        {item.href ? (
                            <Link
                                to={item.href}
                                className="hover:text-black text-[0.85rem]"
                            >
                                {item.label}
                            </Link>
                        ) : (
                            <span className="font-semibold text-[0.9rem] text-center ">{item.label}</span>
                        )}
                    </React.Fragment>
                ))}
            </nav>

        </div>
    )
}

export default BreadCrumbs