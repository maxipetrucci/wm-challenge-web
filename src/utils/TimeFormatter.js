const moment = require("moment");

const getTimeSpan = (date, now = moment().zone(0).format('YYYY-MM-DD[T]HH:mm:ss[.000Z]')) => {
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