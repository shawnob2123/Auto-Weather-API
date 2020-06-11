document.addEventListener('DOMContentLoaded', function () {

  // http://api.openweathermap.org/data/2.5/weather?q=Boston&appid=237d3f6e1691a441018b96c46250810a

//  const url = "https://api.github.com/users";
 const url = "http://api.openweathermap.org/data/2.5/weather";


 document.getElementById("button").addEventListener("click", getWeather)



  function getWeather() {

    //https://developer.mozilla.org/en-US/docs/Web/API/Navigator/geolocation
    //GEOLOCATION

    const successCallback = (position) => { //
      console.log(position);
    };

    // error codes
    // 1: permission denied
    // 2: position unavailabke
    // 3: timeout
    const errorCallback = (error) => {
      console.error(error);
    }
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback) 

  //     enableHighAccuracy: true,
  //     timeout: 5000 // how many millsec until device timeoues from retreiving the location
  


    const zeq = '?zip=';
    const zipCode = document.getElementById('zipCode').value;
    if (zipCode.length === 5) {

      console.log(zipCode);

    const countryCode = ',us';
    const appid = '&appid=';
   
   
    const city = '4930956';
   
   
    const combinedUrl = url+zeq+zipCode+countryCode+appid+apiKey;


    const xhr = new XMLHttpRequest();

    xhr.open('GET', combinedUrl, true);

    xhr.onload = function () {

     if (this.status === 200 && this.readyState === 4) {
       const parsedResponseText = JSON.parse(this.responseText);

      console.log(parsedResponseText);


  

      console.log(parsedResponseText.name);
      const cityName = parsedResponseText.name;

      const OK = parsedResponseText.main.temp;
      const fTemp = ((OK - 273.15) * 9/5 + 32).toFixed(2);

      console.log(fTemp);

      const tempOutput = `<h1>The temperature in ${cityName} is ${fTemp} F</h1>`;
      document.getElementById('currentWeather').innerHTML = tempOutput;

       //℉=((K-273.15)*1.8)+32

      console.log(parsedResponseText.main.temp);

     
     }
   
    else if (this.status === 404) {
     console.log('404 Error...');
      }

  }

   xhr.send();


    } else {
      alert('Please enter a 5 digit zipcode only')
    }
    

}
})
