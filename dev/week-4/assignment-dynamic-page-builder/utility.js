class Utility{
    constructor() {
    }
    static timeConversion(n){
        let num = n;
        let hours = (num / 60);
        let realHours = Math.floor(hours);
        let minutes = (hours - realHours) * 60;
        let realMinutes = Math.round(minutes);
        if (realHours < 10){
            realHours = '0'+realHours;
        }
        if (realMinutes < 10){
            realMinutes = '0'+realMinutes;
        }
        return realHours + ":" + realMinutes;
    }
}