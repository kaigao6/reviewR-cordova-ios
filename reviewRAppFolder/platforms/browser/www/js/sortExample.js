FB.api("/me/friends?fields=id,name,birthday,picture, link", dojo.hitch(this, function (response) {
    var birthdays = response.data; //list of friend objects from facebook
    var currentMonth = new Date().getMonth() + 1;
    var upcoming = [];
    dojo.forEach(birthdays, function (item) {
        if (item.birthday) {
            var bday = item.birthday;
            //if the birthday is after today
            if (currentMonth <= bday.substr(0, 2) * 1 && new Date().getDate() <= new Date(bday).getDate()) {
                upcoming.push(item);
            }
        }
    });

    //set the year to current year because of birth years being different.
    var year = new Date().getFullYear();
    upcoming = upcoming.sort(function (a, b) {
        return new Date(a.birthday).setYear(year) - new Date(b.birthday).setYear(year);
    });

    console.log(upcoming); //console log here, but do whatever you want with the sorted friends
}));


// parse date in a variety of formats and return as 
function calculate_date(datestring) {

    //detect "/" delimiter
    var date_array = datestring.split('/');

    // detect "." delimiter
    if (date_array.length == 1)
        date_array = date.string.split('.');

    // maybe you have some more formats to test for.. add them here




    // continue.. .we should have 2 or 3 fields (d/m or d/m/y)
    if (date_array.length < 2)
        return; // some kind of error

    if (date_array.length > 3)
        return; // some kind of error

    for (i in date_array)
        if (isNaN(date_array[i]))
            return; // non-numeric values passed in. error

    var today = new Date(); // get current date
    var day = date_array[0];
    var month = date_array[1] - 1;
    var year = today.getFullYear();

    try {
        var parsed_date = new Date(year, month, day);
        if (parsed_date < today) parsed_date.setFullYear(parsed_date.getFullYear() + 1);
        return parsed_date;
    } catch (e) {
        return; // some sort of error
    }


}
