import React from 'react'
import { Tab } from 'semantic-ui-react'
import TimezoneList from './timezones'
import Timezonesdropdown from "./timezonesdropdown";
import WorldMap from "./WorldMap";

const panes = [
    { menuItem: 'World Clock', render: () => <Tab.Pane> <TimezoneList></TimezoneList>  </Tab.Pane> },
    { menuItem: 'Stopwatch', render: () => <Tab.Pane><Timezonesdropdown></Timezonesdropdown></Tab.Pane> },
    { menuItem: 'Timer', render: () => <Tab.Pane>Current time in TimeZone: {new Date().toUTCString()}</Tab.Pane> },
    { menuItem: 'World Map', render: () => <Tab.Pane><WorldMap></WorldMap></Tab.Pane> },
]

const TabExampleDefaultActiveIndex = () => (
    <Tab grid={{paneWidth: 12, tabWidth: 4}} panes={panes} defaultActiveIndex={2} />
)

export default TabExampleDefaultActiveIndex
