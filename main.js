//https://coronavirus-19-api.herokuapp.com/countries

document.getElementById('search-btn').addEventListener('click', function(){
  const inputValue=document.getElementById('input').value;
  document.getElementById('input').value='';
  CovidDataValue(inputValue);
})

function CovidDataValue(value){
  fetch(`https://coronavirus-19-api.herokuapp.com/countries`)
  .then(res => res.json())
  .then(data => {
    // getData
    console.log(data);

    const infectedAmount=document.getElementById('affect-number');
    for (let i = 0; i < data.length; i++) {
       const confirmedData = data[i];
       const CountryName=confirmedData.country;
       const TotalCase=confirmedData.cases;
       const TodayCases=confirmedData.todayCases;
       const TotalDeaths=confirmedData.deaths;
       const TodayDeath=confirmedData.todayDeaths;
       const TotalRecovered=confirmedData.recovered;
       const Active=confirmedData.active;
       const TotalTests=confirmedData.totalTests;
      
       
       
      if(CountryName != `${value}`){
          console.log('error');
      }else{
      // document.getElementById('confirm-num').innerHTML=` Confirmed: ${TotalConfirm}`;
      
      

      document.getElementById('country').innerHTML=` Country Name: ${CountryName}`;
      document.getElementById('cases').innerHTML=` Total Cases: ${TotalCase}`;
      document.getElementById('TodayCases').innerHTML=` Today Cases: ${TodayCases}`;
      document.getElementById('death-num').innerHTML=` Total Deaths: ${TotalDeaths}`;

      document.getElementById('todayDeaths').innerHTML=` Today Deaths: ${TodayDeath}`;
      document.getElementById('recover-num').innerHTML=` Total Recovered: ${TotalRecovered}`;


      document.getElementById('active').innerHTML=` Active: ${Active}`;

      document.getElementById('totalTests').innerHTML=` Total Tests: ${TotalTests}`;
     
     
      }
    }
     


   }).catch();
}
  let today= new Date();
  // Current Date
  var date = today.getFullYear()+'-'+(today.getMonth()+1)+' '+today.getDate();

  document.getElementById("current_date").innerHTML = date;

  // Current Date and Time
  var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  
  document.getElementById("current_time").innerHTML = time;
  /* var dateTime = date+' '+time;
  
  document.getElementById("currentDateAndTime").innerHTML = dateTime; */