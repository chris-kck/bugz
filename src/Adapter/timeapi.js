import axios from 'axios';

class TimeClient {

    constructor() {
        this.timeClient = axios.create({
            baseURL: 'http://worldtimeapi.org/api',
        });}

    async getTimeZones() {
        try {
            const res = await this.timeClient.get(`/timezone`);
            return res;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

}

const TimeClientInstance =new TimeClient();

export default TimeClientInstance;
