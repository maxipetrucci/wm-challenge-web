const moment = require("moment")

const getTimeSpan = (date, now = new Date().toISOString()) => {
    let secondsSpan = moment(now).diff(date, 'seconds', false);
    if (secondsSpan < 60) {
        return `${secondsSpan}s`;
    }
    
    let minutesSpan = moment(now).diff(date, 'minutes', false);
    if (minutesSpan < 60) {
        return `${minutesSpan}m`;
    }

    let hoursSpan = moment(now).diff(date, 'hours', false);
    if (hoursSpan < 24) {
        return `${hoursSpan}h`;
    }

    return moment(date).format('MMM D');
}

module.exports = {
    getTimeSpan
}