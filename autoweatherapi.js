document.addEventListener('DOMContentLoaded', function () {

  // http://api.openweathermap.org/data/2.5/weather?q=Boston&appid=

//  const url = "https://api.github.com/users";
// zipcode url is below
 // const url = "http://api.openweathermap.org/data/2.5/weather";
 



    //https://developer.mozilla.org/en-US/docs/Web/API/Navigator/geolocation
    //GEOLOCATION

    const successCallback = (position) => { //this input (pos) produces this result-arrow function with position as the parameter
      console.log(position.coords.latitude, position.coords.longitude);
      // console.log(coordPosition);
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      const townName = 'Johnston';
   
      // lat and lon url
      // const combinedUrl = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
      const combinedUrl = `https://api.openweathermap.org/data/2.5/weather?q=${townName}&appid=${apiKey}`;
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
        
  
         //℉=((K-273.15)*1.8)+32
  
        // console.log(parsedResponseText.main.temp); // displays kelvin temp
        console.log(parsedResponseText.weather[0].main);
  
       
       }
     
      else if (this.status === 404) {
       console.log('404 Error...');
        }
  
    }
  
     xhr.send();
    };
    


    // error codes
    // 1: permission denied
    // 2: position unavailable
    // 3: timeout
    const errorCallback = (error) => { //  arrow function with 'error' as the parameter
      console.error(error);
    }
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback, {
       enableHighAccuracy: true, // true so device can get best possible results
       // false- save resources by responding more quickly and/or using less power.
       timeout: 5000 // how many millisec until device timeoues from retreiving the location
    })

    // watchPostition method 
    // get updates as the user moves around
    // takes 3 args 

    // const zeq = '?zip=';
    // const zipCode = document.getElementById('zipCode').value;
    // if (zipCode.length === 5) {

    //   console.log(zipCode);

    // const countryCode = ',us';
    // const appid = '&appid=';
  
   
    // const city = '4930956';
   
   
    // const combinedUrl = url+zeq+zipCode+countryCode+appid+apiKey;


   
    });
