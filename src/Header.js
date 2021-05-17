import React from 'react'
import './Header.css'
import header_logo from './ECommer.png'

function Header() {
    return (
        <div className = 'header'>

            <img className='header_logo' src={header_logo} alt='header_logo' />

            <div
            className='header_search'>
                <input
                className='header_searchInput' type='text' />
            </div>

            <div className='header_nav'>
                <div className='header_option'>
                    <span
                    className='header_optionLineOne'
                    >Hello Good Friend</span>
                    <span
                    className='header_optionLineTwo'
                    >Sign In</span>
                </div>

                <div className='header_option'>
                    <span
                    className='header_optionLineOne'
                    >Returns</span>
                    <span
                    className='header_optionLineTwo'
                    >& Orders</span>
                </div>

                <div className='header_option'>
                    <span
                    className='header_optionLineOne'
                    >Your</span>
                    <span
                    className='header_optionLineTwo'
                    >Prime</span>
                </div>

            </div>

        </div>
    )
}

export default Header