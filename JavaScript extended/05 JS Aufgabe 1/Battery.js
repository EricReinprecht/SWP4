export default class battery {
    constructor(chargingStatus) {
        this.chargingStatus = chargingStatus;
        if (chargingStatus < 0 || chargingStatus > 100) {
            console.log("ERROR")
        }

    }
}