import logo from '@/assets/images/logo.svg';
import React from 'react';

class Header extends React.Component {
    render() {
        return (
            <div id="header">
                <nav className="flex items-center justify-between flex-wrap bg-teal p-6">
                    <div className="flex items-center flex-no-shrink text-white mr-6">
				        <img fill="#867065" className="logo" width="54" src={logo} alt="Hello World" />
                    </div>
                    <div className="w-full flex flex-grow justify-end items-center w-auto">
                        <a href="/carnet" className="nav-link">
                            Carte
                        </a>
                        <span className="separator">
                            ◆
                        </span>
                        <a href="/carnet" className="nav-link">
                            Carnet
                        </a>
                        <span className="separator">
                            ◆
                        </span>
                        <a href="/passeport" className="nav-link">
                            Passeport
                        </a>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Header;