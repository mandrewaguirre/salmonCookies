var hoursOpen = ['Location', '6am', '7am ','8am ','9am ','10am ','11am ','12pm ','1pm ','2pm ','3pm ','4pm ','5pm ', '6pm ', '7pm ', '8pm '];
//var allStores = [];

var ulEl = document.getElementById('create-Ul');

function Store(name, min, max, averageCookies) {
  this.shopname = name;
  this.averageCookie = averageCookies;
  this.maxCustomers = max;
  this.minCustomers = min;
  this.totalCookies = 0;
  this.totalCustomer = 0;
  this.storeHtml = 'create-li';
  this.cookiesPerHour = [];
  this.aveCustomerPerHour = [];
//first method
  this.aveCustomer = function() {
    for (i = 0; i < hoursOpen.length; i++) {
      var aveCustomer1hr = Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1) + this.minCustomers);
      this.aveCustomerPerHour.push(aveCustomer1hr);
      this.totalCustomer += aveCustomer1hr;
    }//end of for-loop
  };//end of aveCustomer method

//second method
  this.averageCookies = function() {
    this.aveCustomer();
    for (var hours = 0; hours < hoursOpen.length; hours++) {
      var aveCookies1hr = Math.round(this.aveCustomerPerHour[hours] * this.averageCookie);
      this.cookiesPerHour.push(aveCookies1hr);
      this.totalCookies += aveCookies1hr;
      //console.log(this.totalCookies);
    } //end of for loop
  };//end of averageCookies method
  //this.averageCookies();

//third method
  this.renderData = function() {
    this.averageCookies();
    var tr = document.createElement('tr');
    var td = document.createElement('td');
    td.textContent = this.shopname;
    tr.appendChild(td);
    console.log(this.shopname);
    var parentEl = document.getElementById('create-li');
    for (i = 0; i < this.cookiesPerHour.length; i++) {
      var td = document.createElement('td');
      td.textContent = this.cookiesPerHour[i];
      tr.appendChild(td);
    } //end of for loop
    td.textContent = this.totalCookies;
    parentEl.appendChild(tr);
  }; //end of third method
  this.renderData();
}//end of object constructor

function headerRow () {
  var parentEl = document.getElementById('create-li');
  for (i = 0; i <= hoursOpen.length; i++) {
    var th = document.createElement('th');
    th.textContent = hoursOpen[i];
    parentEl.appendChild(th);
  }
  var totalEl = document.createElement('th');
  th.textContent = ('Total ');
  parentEl.appendChild(th);
}

function handleFormSubmit (event) {
  console.log(event);
  event.preventDefault();
  var location = event.target.location.value;
  var minimum = event.target.min.value;
  var maximum = event.target.max.value;
  var averageCookies = event.target.average.value;
  var newStore = new Store (location, minimum, maximum, averageCookies);
  event.target.location.value = null;
  event.target.min.value = null;
  event.target.max.value = null;
  event.target.average.value = null;
}

var newform = document.getElementById('newform');
newform.addEventListener('submit', handleFormSubmit);
headerRow();
console.log(newform);
var Pike = new Store('PikePlace', 17, 88, 5.2);
var SeaTac = new Store('Seatac', 6, 24, 2);
var southCenter = new Store('Southcenter', 11, 38, 1.9);
var bellSquare = new Store('BellSquare', 20, 48, 3.3);
var alki = new Store('Alki', 3, 24, 2.6);
