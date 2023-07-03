const button = document.getElementById('submitBtn');
const cityName= document.getElementById('cityName');
const city_name= document.getElementById('city_name'); 
const temp = document.getElementById('temp');
const temp_status=document.getElementById('temp_status');
const search = async (event)=>{
const datahider = document.querySelector(".data_hider");
    event.preventDefault();
    let city = cityName.value;
if(city==="")
  {city_name.innerText = "Please enter a city name";
   datahider.classList.add("data_hider");
}
  else
  {city_name.innerText = city;
    datahider.classList.remove("data_hider");
    try{
        let url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=21b1661a6cb2c2644c7c1f2994226a94`;
        const response = await   fetch(url);
        const result= await response.json();
        console.log(result);
        temp.innerHTML=`<p><span>${result.main.temp}</span><sup>o</sup>C</p>`;
        console.log(result.weather[0].main)
        if(result.weather[0].main=="Clear")
        {
            temp_status.innerHTML="<i class='fas fa-sun' ' style='color: yellow;'></i>";
        }
       else if(result.weather[0].main=="Clouds")
        {
            temp_status.innerHTML="<i class='fas fa-cloud'  style='color: white;'></i>";
            console.log("khargone");
        }
       else if(result.weather[0].main=="Rain")
        {
            temp_status.innerHTML="<i class='fas fa-cloud-rain'  style='color: grey;'></i>"; 
        }

    }
      catch(e){ city_name.innerText = "City do not found";
        datahider.classList.add("data_hider");
      }
}
       
}
button.addEventListener('click',search);
const DATE=document.getElementById('Date');
const DAY=document.getElementById('day');
let date = new Date();
let day=date.getDay();
let mon=date.getMonth();
let today=date.getDate();
let days=["Sunday" , "Monday" , "Tuesday" , "Wednesday" , "Thursday" , "Friday" , "Saturday"];
let months  =  ["JAN","FEB","MARCH","APRIL","MAY","JUNE","JULY","AUG","SEPT","OCTR","NOV","DEC"];
DAY.innerText=days[day];
DATE.innerText=today+" "+months[mon];