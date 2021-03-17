import TimeClientInstance from "../Adapter/timeapi";
import React from 'react';

export default class TimezoneList extends React.Component {
    state = {
        timezones: []
    }

    componentDidMount() {
        TimeClientInstance.getTimeZones()
            .then(res => {
                const timezones = res.data;
                this.setState({ timezones });
            })
    }

    render() {
        return (
            <div style={{'height':'100vh', 'overflow':"hidden", "overflowY": "scroll"}}>
            <ul >
                { this.state.timezones.map(timezone => <li>{timezone}</li>)}
            </ul>
            </div>
        )
    }
}
