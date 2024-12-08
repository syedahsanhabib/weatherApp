const API_KEY = `442fe23728217a9d468ad7fb70f7af9a`;
const inputdata = document.getElementById("inputFeild");
const showWeather = document.getElementById("showWeather");

const seachData = async() => {
    showWeather.innerHTML= `
    <div class="row d-flex justify-content-center py-5">
    <div class="spinner-border" role="status">
  <span class="visually-hidden">Loading...</span></div>
</div>`;
  const API_URL =`https://api.openweathermap.org/data/2.5/weather?q=${inputdata.value}&appid=${API_KEY}&units=metric`;
  const fetchData = await fetch(API_URL);
  const response = await fetchData.json();
  console.log(response);
  return showData(response);
}
const showData = (data) => {
    showWeather.innerHTML = `
     <div  class="row d-flex justify-content-center py-5">
            <div "width: 320px"; class="col-md-4 col-lg-4 col-xl-4">
              <div  class="card text-body" style=" border-radius: 35px;">
                <div class="card-body p-4">
                  <div class="d-flex">
                    <h6 class="col-4">${data.name}</h6>
                    <div class="col-4">
                      <img class="mx-auto d-block" src=${`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                        width="100px">
                    </div>
                    <div class="col-4">
                    <h6 style="text-align: right;">Humidity ${data.main.humidity}</h6>
                     </div>
                      </div>
          
                  <div class="d-flex flex-column text-center mb-4">
                    <h6 class="display-4 mb-0 font-weight-bold"> ${data.main.temp}°C </h6>
                    <span class="small" style="color: #868B94">${data.weather[0].main}</span>
                  </div>
                    
                  </div>
          
                </div>
              </div>
          
            </div>
          </div>
    `;
}
