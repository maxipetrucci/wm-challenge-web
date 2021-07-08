const moment = require("moment")

const getTimeSpan = (date) => {
    let secondsSpan = moment().diff(date, 'seconds', false);
    if (secondsSpan < 60) {
        return `${secondsSpan}s`;
    }
    
    let minutesSpan = moment().diff(date, 'minutes', false);
    if (minutesSpan < 60) {
        return `${minutesSpan}m`;
    }

    let hoursSpan = moment().diff(date, 'hours', false);
    if (hoursSpan < 24) {
        return `${hoursSpan}h`;
    }

    return moment(date).format('MMM d');
}

module.exports = {
    getTimeSpan
}