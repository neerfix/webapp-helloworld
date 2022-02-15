import React from 'react';
import { NavLink } from "react-router-dom";

import { FaGithub } from "react-icons/fa";

import { ReactComponent as Logo } from '@/assets/images/logo.svg'

class Footer extends React.Component {
    render() {
        return (
            <div className={"footer border-t-2 border-dark-brown bg-beige pt-4 pb-2"}>
                <div className={"footer-content flex items-center mb-2"}>
                    <div className={"w-full flex justify-center w-1/2"}>
                        <div className={"flex items-center space-x-2"}>
                            <Logo className={"logo"} />
                            <div className={"text-2xl leading-7 font-semibold"}>
                                <span>Hello</span>
                                <br />
                                <span>World</span>
                            </div>
                        </div>
                    </div>
                    <div className={"w-full flex justify-center w-1/2"}>
                        <div className={"lg:flex lg:items-center lg:space-x-2"}>
                            <div className={"flex items-center justify-start space-x-2"}>
                                <span className={"text-2xs"}>◆</span>
                                <NavLink to={"map"} className={"nav-link font-semibold text-lg"}>Carte</NavLink>
                            </div>
                            <div className={"flex items-center justify-start space-x-2"}>
                                <span className={"text-2xs"}>◆</span>
                                <NavLink to={"carnet"} className={"nav-link font-semibold text-lg"}>Carnet</NavLink>
                            </div>
                            <div className={"flex items-center justify-start space-x-2"}>
                                <span className={"text-2xs"}>◆</span>
                                <NavLink to={"passport"} className={"nav-link font-semibold text-lg"}>Passport</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={"footer-bottom flex items-center justify-between py-4"}>
                    <h4 className={"text-sm"}>© Hello World 2022-2023</h4>
                    <h4 className={"text-sm"}>
                        <span className={"mr-2"}>SOURCE</span>
                        <FaGithub />
                    </h4>
                </div>
            </div>
        );
    }
}

export default Footer;