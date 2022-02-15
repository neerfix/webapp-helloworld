import React from 'react';

class Footer extends React.Component {
    render() {
        return (
            <div className={"footer border-t-2 border-dark-brown bg-beige px-16 py-4"}>
                <div className={"flex items-center justify-between"}>
                    <div></div>
                    <div>
                        <div className={"flex items-center justify-start"}>
                            <span></span>
                            <span>Carte</span>
                        </div>
                        <div className={"flex items-center justify-start"}>
                            <span></span>
                            <span>Carnet</span>
                        </div>
                        <div className={"flex items-center justify-start"}>
                            <span></span>
                            <span>Passport</span>
                        </div>
                    </div>
                </div>
                <div></div>
            </div>
        );
    }
}

export default Footer;