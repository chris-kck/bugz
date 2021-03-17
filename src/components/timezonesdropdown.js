import TimeClientInstance from "../Adapter/timeapi";
import React from 'react';
import {Dropdown} from "semantic-ui-react";
import timeapi from "../Adapter/timeapi";

export default class Timezonesdropdown extends React.Component {
    state = {
        timezones: [],
        item: "hahaha",
    }

    handleClick = async (e) => {
        e.preventDefault();
        const myTime = await timeapi.getTime(e.target.innerText);
        const my = new Date(myTime).toUTCString();
        this.setState({ item: my }); console.log(myTime);
    };

    componentDidMount() {
        TimeClientInstance.getTimeZones()
            .then(res => {
                const timeZoneL = res.data;
                const timezones = timeZoneL.map((timezone, index) => ({key:index, value:timezone, text:timezone}));
                this.setState({ timezones });
            })
    }



    render() {
        return (
    <>
            <Dropdown
                placeholder='Select TimeZone'
                fluid
                search
                selection
                options={this.state.timezones}
                onChange={this.handleClick}
            />
            <p>The time in Selected TimeZone is: {this.state.item}</p>
        </>
        )
    }
}
