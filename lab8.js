var hoursOpen = ['Location', '6am', '7am ','8am ','9am ','10am ','11am ','12pm ','1pm ','2pm ','3pm ','4pm ','5pm ', '6pm ', '7pm ', '8pm '];
//var allStores = [];
function Store(name, min, max, averageCookies) {
  this.shopname = name;
  this.averageCookie = averageCookies;
  this.maxCustomers = max;
  this.minCustomers = min;
  this.totalCookies = 0;
  this.totalCustomer = 0;
  this.cookiesPerHour = [];
  this.aveCustomerPerHour = [];
  this.aveCustomer = function() {
    for (i = 0; i < hoursOpen.length - 1; i++) {
      var aveCustomer1hr = Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1) + this.minCustomers);
      this.aveCustomerPerHour.push(aveCustomer1hr);
      this.totalCustomer += aveCustomer1hr;
    } //end of for loop
  };
  this.averageCookies = function() {
  },//end of averageCookies method
    this.aveCustomer ();
  for (var hour = 0; hour < hoursOpen.length - 1; hour++) {
    var aveCookies1hr = Math.round(this.aveCustomerPerHour[hour] * this.averageCookie);
    this.cookiesPerHour.push(aveCookies1hr);
    this.totalCookies += aveCookies1hr;
  };
//third method
  this.renderData = function() {
    this.averageCookies();
    var parentEl = document.getElementById('salestable');
    var tr = document.createElement('tr');
    var td = document.createElement('td');
    td.textContent = this.shopname;
    tr.appendChild(td);
    for (i = 0; i < this.cookiesPerHour.length; i++) {
      var td = document.createElement('td');
      td.textContent = this.cookiesPerHour[i];
      tr.appendChild(td);
    } //end of for loop
    var totalCell = document.createElement('td');
    totalCell.textContent = this.totalCookies;
    tr.appendChild(totalCell);
    parentEl.appendChild(tr);
  }; //end of third method
  this.renderData();
}//end of object constructor

function headerRow () {
  var parentEl = document.getElementById('salestable');
  var totalEl = document.createElement('th');
  for (i = 0; i <= hoursOpen.length; i++) {
    var th = document.createElement('th');
    th.textContent = hoursOpen[i];
    parentEl.appendChild(th);
  }
  th.textContent = ('Total ');
  parentEl.appendChild(th);
};

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
};

var newform = document.getElementById('newform');
newform.addEventListener('submit', handleFormSubmit);
headerRow();
console.log(newform);
//
var Pike = new Store('PikePlace', 17, 88, 5.2);
var SeaTac = new Store('Seatac', 6, 24, 2);
var southCenter = new Store('Southcenter', 11, 38, 1.9);
var bellSquare = new Store('BellSquare', 20, 48, 3.3);
var alki = new Store('Alki', 3, 24, 2.6);
