var hoursOpen = ['6am', '7am ','8am ','9am ','10am ','11am ','12pm ','1pm ','2pm ','2pm ','4pm ','5pm ', '6pm ', '7pm ', '8pm ', '9pm '];

var ulEl = document.getElementById('create-Ul');

function Store(name, min, max, averageCookies) {
  this.ShopName = name;
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
    } //end of for loop
  };//end of averageCookies method
  //this.averageCookies();

//third method
  this.renderData = function() {
    this.averageCookies();
    var tr = document.createElement('tr');
    var td = document.createElement('td');
    tr.appendChild(td);
    td.textContent = this.name;
    var parentEl = document.getElementById('create-li');
    for (i = 0; i < this.cookiesPerHour.length; i++) {
      var td = document.createElement('td');
      td.textContent = this.cookiesPerHour[i];
      tr.appendChild(td);
    } //end of for loop
    td.textContent = this.totalCookies;
    parentEl.appendChild(td);
  }; //end of third method
  this.renderData();
}//end of object constructor

function headerRow () {
  var parentEl = document.getElementById('create-li');
}
