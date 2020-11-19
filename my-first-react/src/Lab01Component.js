import React, { Component } from 'react';

class Lab01Component extends Component {
    constructor(props) {
        super(props);
        this.state = {
            countrySelected: '',
            countries: [
                { name: "India", cities: ["Pune", "Chennai", "Bangalore"] },
                { name: "US", cities: ["Houston", "NYC", "Alabama"] },
                { name: "England", cities: ["London", "Essex", "Bristol"] }
            ]
        };
    }

    countryChanged(e) {
        this.setState({
            countrySelected: e.target.value 
        })
    }

    populateCountries() {
        let { countries } = this.state;
        let names = countries.map(it => it.name);
        return names.map(name => <option key={name}>{name}</option>);
    }

    populateCities() {
        let citiesList = [];
        let { countrySelected, countries } = this.state;
        if (countrySelected !== "--SELECT--") {
            let country = countries.find(it => it.name === countrySelected);
            if (country) {
                country.cities.forEach(city => {
                    citiesList.push(<option key={city}>{city}</option>)
                });
            }
        }
        return citiesList;
    }

    render() {
        return (<div style={{padding: "10px", margin: "10px"}}>
            <div style={{padding: "10px"}}>
                <label style={{padding: "10px"}}>Country</label>
                <select onChange={e => this.countryChanged(e)}>
                    <option>--SELECT--</option>
                    { this.populateCountries() }
                </select>
            </div>
            <div style={{padding: "10px"}}>
                <label style={{padding: "10px"}}>City</label>
                <select>
                    { this.populateCities() }
                </select>
            </div>
        </div>);
    }
}

export default Lab01Component;