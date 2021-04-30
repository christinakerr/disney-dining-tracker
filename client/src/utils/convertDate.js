export default function convertDate(date) {

    const day = date.toString().slice(6);
    const month = date.toString().slice(4, 6);

    let monthWord;
    switch (month) {
        case "01":
            monthWord = "January "
            break;
        case "02":
            monthWord = "February "
            break;
        case "03":
            monthWord = "March "
            break;
        case "04":
            monthWord = "April "
            break;
        case "05":
            monthWord = "May "
            break;
        case "06":
            monthWord = "June "
            break;
        case "07":
            monthWord = "July "
            break;
        case "08":
            monthWord = "August "
            break;
        case "09":
            monthWord = "September "
            break;
        case "10":
            monthWord = "October "
            break;
        case "11":
            monthWord = "November "
            break;
        case "12":
            monthWord = "December "
            break;
        default:
            break;
    }
    return monthWord + day;
}