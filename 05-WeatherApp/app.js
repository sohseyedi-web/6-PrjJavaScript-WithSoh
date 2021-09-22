const searchBox = document.querySelector('.wrap-form .wrap-form__input');
const api = {
    key: "876e0628a4fbec017ee9625c85825758",
    base: "https://api.openweathermap.org/data/2.5/"
}

searchBox.addEventListener('keyup' , (e) => {
    if(e.key === 'Enter') {
        getweatherults(searchBox.value)
    };
    console.log(searchBox.value);
})

const getweatherults = (query) => {
    fetch(`${api.base}weather?q=${query},&units=metric&appid=${api.key}`)
    .then((response) => response.json())
    .then((data) => displayweatherults(data))
}

const displayweatherults = (data) => {
    console.log(data);

    let city = document.querySelector('.wrap-content__name');
    city.innerHTML = `${data.name} , ${data.sys.country}`
    
    let now = new Date();
    let date = document.querySelector('.wrap-content .wrap-content__date');
    date.innerText = dateBuild(now);

    let temp = document.querySelector('.wrap-content .wrap-content__temp');
    temp.innerHTML = `${Math.round(data.main.temp)}<span>'c</span>`;


    let weatherEl = document.querySelector('.wrap-content .wrap-content__weather');
    weatherEl.innerText = data.weather[0].main;

    let hiLow = document.querySelector('.wrap-content .wrap-content__hi-low');
    hiLow.innerText = `${Math.round(data.main.temp_min)}'c / ${Math.round(data.main.temp_max)}'c `
}



const dateBuild = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
}