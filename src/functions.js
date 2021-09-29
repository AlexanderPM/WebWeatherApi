export function dataTimeConverter(UNIX_timestamp, flag) {

    let a = new Date(UNIX_timestamp * 1000);
    let year = a.getFullYear();
    let months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
    let month = months[a.getMonth()];
    let date = a.getDate();
    let hour = a.getHours();
    let min = a.getMinutes();

    if (hour < 10) hour = '0' + hour;
    if (min < 10) min = '0' + min;
    if (date < 10) date = '0' + date;

    if (flag === 'date_time') {
        let result = date + ' ' + month + ' ' + year + ', ' + hour + ':' + min;
        return result;
    }
    if (flag === 'date') {
        let result = date + ' ' + month;
        return result;
    }
    if (flag === 'date_full') {
        let result = date + ' ' + month + ' ' + year;
        return result;
    }
    if (flag === 'date_short') {
        let months = ['янв', 'фев', 'мар', 'апр', 'мая', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'];
        let month = months[a.getMonth()];
        let result = date + ' ' + month;
        return result;
    }
    if (flag === "time") {
        let result = hour + ':' + min;
        return result;
    }
    if (flag === 'date_number') {
        let months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
        let month = months[a.getMonth()];
        let result = date + ' ' + month + ' ' + year;
        return result;
    }
}





