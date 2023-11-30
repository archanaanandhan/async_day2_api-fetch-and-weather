//print the country names from restcounrty:
const result = fetch("https://restcountries.com/v3.1/all");
result.then((data) =>  data.json() )
.then((ele) => {
     for(let i=0;i<ele.length;i++){
        const div_tag=document.createElement("div");
        //div_tag.setAttribute("class","container")
        div_tag.innerHTML=`
        <div class="container ">
        <div class="card  row col-lg-4  col-sm-12">
        <div class="card-header">
        <h1 class="card-title">${ele[i].name.common}</h1>
        <img src="${ele[i].flags.png}" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">Capital:${ele[i].capital}</h5>
        <h5 class="card-title">Region:${ele[i].region}</h5>
        <h5 class="card-title">CountryCode:${ele[i].cca3}</h5>
        <h5 class="card-title">latlng:${ele[i].latlng}</h5>
        <button class="btn btn-primary" onclick="getweatherdata('${ele[i].name.common}')">Click for Weather</button>
        </div>
        </div>
        </div>
        </div>`;
        document.body.append(div_tag);
 };
})    
 
 function getweatherdata(restCountryName){
   var apiKey="bfd0f0fa315e4de42a9627ac51c1aaf5"; 
  var weatherurl=`https://api.openweathermap.org/data/2.5/weather?q=${restCountryName}&appid=${apiKey}`;
  fetch(weatherurl) .then((response)=>{response.json()})
  .then((Data)=>{
   var weatherCountryName=Data.name;
   if(weatherCountryName===restCountryName){
   alert(`waether in ${Data.name}:${Data.main.temp_min} min:deg&c &&${Data.main.temp_max} max:deg&c`)
   }
   else{
      alert("country name not match.")
   }
  })
  .catch((err)=>{console.log(err);
 alert`error fetching waether data`})

}



