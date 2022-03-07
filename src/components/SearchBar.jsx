import React from 'react';

class SearchBar extends React.Component {
    render() {
        return (
            <input id="searchTravel"
                placeholder="Rechercher"
                required
                className={"focus:border-dark-brown focus:ring-dark-brown"}
            />
        );
    }
}

export default SearchBar;