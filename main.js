let section = document.querySelector('section');

function on() {let header = document.querySelector('header');
let CityName = document.querySelector('#data-cityname-input').value;
//Запит погоди для міста за Назвою 
let requestURL = `http://api.openweathermap.org/data/2.5/weather?q=${CityName}&units=metric`;

// До запиту додається власний APIKey
requestURL = requestURL + '&appid=a47c515fa6adb47087390b1de53d1665'; 
let request = new XMLHttpRequest();

fetch(requestURL).then((response)=>{
    console.log(response);
}).catch((error)=>{
    console.log(error);
});

request.open('GET', requestURL);
request.responseType = 'json';

//Відправка запиту
request.send();


//Ця функція виконується після отримання відповіді
request.onload = function() {
let CityWeather_json = request.response;
showWeater(CityWeather_json, CityName);
};
}

//Виведення даних щодо погоди
function showWeater(jsonObject, CityName){
let d = new Date();
let sHead = "Поточна дата в " + CityName +": " + d.toDateString(d);

//Доступ до даних отриманого JSON - об'єкта спирається на його ієрархічну структуру
sHead=sHead + " Довгота: " + jsonObject.coord.lon + " Широта: " + jsonObject.coord.lat;

let myArticle = document.createElement('article');
let myH1 = document.createElement('h1');

myH1.textContent = sHead;
myArticle.appendChild(myH1); //Інформація про місто буде в заголовку секції


 //Дані погоди будуть у звичайних рядках

let myPara1= document.createElement('p');
let myPara2= document.createElement('p');
let myPara3= document.createElement('p');


myPara1.textContent = 'Температура: '+ jsonObject.main.temp +" градусів по Цельсію";
myPara2.textContent = 'Відчувається як: '+ jsonObject.main.feels_like +" градусів по Цельсію";
myPara3.textContent = 'Вітер: '+ jsonObject.wind.speed + " м/сек";

//Збираємо, що вийшло, і документ відображається
myArticle.appendChild(myPara1);
myArticle.appendChild(myPara2);
myArticle.appendChild(myPara3);

section.appendChild(myArticle);

}


