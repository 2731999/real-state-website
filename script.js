let people = document.getElementById('people');
let Less = document.getElementById('Less');
let More = document.getElementById('More');

let people_index = 4;

Less.addEventListener('click', () => {
    people_index -= 1;

    if (people_index <= 1) {
        people_index = 1
        people.value = people_index + ' people';
    } else {
        people.value = people_index + ' people';
    }
});
More.addEventListener('click', () => {
    people_index += 1;

    if (people_index >= 4) {
        people_index = 4;
        people.value = people_index + ' people';
    } else {
        people.value = people_index + ' people';
    }
})
let checkin_data = document.getElementById('checkin_data');
let checkin = document.getElementById('checkin');
let checkout_data = document.getElementById('checkout_data');
let checkout = document.getElementById('checkout');



checkin.addEventListener('change', () => {
    let checkin_vlaue = checkin.value;

    let dates = new Date(checkin_vlaue);
    let dates2 = new Date();
    const week = ['Sun', 'Mon', 'Tues', 'Wed', 'Thus', 'Fri', 'Sat'];
    let day = week[dates.getDay()];

    let date = dates.getDate();

    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

    let month = months[dates.getMonth()];

    if (dates < dates2) {
        console.log('no date');
    } else {
        checkin_data.innerText = day + ' ' + date + ' ' + month;
    }
})

checkout.addEventListener('change', () => {
    let checkout_vlaue = checkout.value;
    let checkin_vlaue = checkin.value;

    let dates = new Date(checkout_vlaue);
    let dates2 = new Date(checkin_vlaue);
    const week = ['Sun', 'Mon', 'Tues', 'Wed', 'Thus', 'Fri', 'Sat'];
    let day = week[dates.getDay()];

    let date = dates.getDate();

    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

    let month = months[dates.getMonth()];

    if (dates < dates2) {
        console.log('no date');
    } else {
        checkout_data.innerText = day + ' ' + date + ' ' + month;
    }
})

const images = [
    "url(/Static/bgg1.jpg)",
    "url(/Static/bgg3.jpg)",
    "url(/Static/bgg2.jpg)",
]

let index = 1

let h5 = document.getElementById('h5');

h5.innerText = '+ ' + images.length;

let btn_left = document.getElementById('btn_left');
let btn_right = document.getElementById('btn_right');
let style = document.getElementsByClassName('content')[0].style;


btn_left.addEventListener("click", ()=>{
    index -= 1;
    if( index < 0) {
        index = (images.length) - 1;
    }
    style.setProperty('--background', images[index])
})
btn_right.addEventListener("click", ()=>{
    index ++
    if (index > (images.length)-1) {
        index = 0;
    }
    style.setProperty('--background', images[index])
})




