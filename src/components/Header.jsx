import logo from '@/assets/images/logo.svg';
import React from 'react';

class Header extends React.Component {
    render() {
        return (
            <div id="header">
                <nav className="flex items-center justify-between flex-wrap bg-teal p-6">
                    <div className="flex items-center flex-no-shrink text-white mr-6">
				        <img className="logo" width="54" src={logo} alt="Hello World" />
                    </div>
                    <div className="w-full flex flex-grow justify-end items-center w-auto">
                        <a href="/carnet" className="uppercase mr-4">
                            Carte
                        </a>
                        <a href="/carnet" className="uppercase mr-4">
                            Carnet
                        </a>
                        <a href="/passeport" className="uppercase mt-0">
                            Passeport
                        </a>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Header;