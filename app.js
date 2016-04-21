var hoursOpen = ['6am', '7am ','8am ','9am ','10am ','11am ','12pm ','1pm ','2pm ','2pm ','4pm ','5pm ', '6pm ', '7pm ', '8pm ', '9pm '];


var ulEl = document.getElementById('create-Ul');

var pike = {
  ShopName: 'pike',
  averageCookie: 5.2,
  maxCustomers: 88,
  minCustomers: 17,
  totalCookies: 0,
  totalCustomer:0,
  storeHtml: 'create-li',
  totalCookies: 0,
  hoursCookies: [],
  aveCustomerPerhour: [],
  aveCustomer: function () {
    for (i = 0; i < hoursOpen.length; i++) {
      var aveCustomer1hr = Math.floor(Math.random () * (this.maxCustomers - this.minCustomers + 1) + this.minCustomers);
      this.aveCustomerPerhour.push(aveCustomer1hr);
      this.totalCustomer += aveCustomer1hr;
    }
  },
  averageCookies: function () {
    this.aveCustomer();
    for (var hours = 0; hours < hoursOpen.length; hours++) {
      var aveCookies1hr = Math.round(this.aveCustomerPerhour[hours] * this.averageCookie);
      this.hoursCookies.push(aveCookies1hr);
      this.totalCookies += aveCookies1hr;
    }
  },
  renderData: function () {
    this.averageCookies();
    var ulEl = document.getElementById ('create-li');
    for (i = 0; i < this.hoursCookies.length; i++) {
      var newLiUl = document.createElement('li');
      newLiUl.textContent = hoursOpen[i] + ': ' + this.hoursCookies[i] + ' cookies';
      ulEl.appendChild(newLiUl);
    }
  }
};

pike.aveCustomer();
pike.averageCookies();
pike.renderData();

var  = {
  ShopName: 'pike',
  averageCookie: 5.2,
  maxCustomers: 88,
  minCustomers: 17,
  totalCookies: 0,
  totalCustomer:0,
  storeHtml: 'create-li',
  totalCookies: 0,
  hoursCookies: [],
  aveCustomerPerhour: [],
  aveCustomer: function () {
    for (i = 0; i < hoursOpen.length; i++) {
      var aveCustomer1hr = Math.floor(Math.random () * (this.maxCustomers - this.minCustomers + 1) + this.minCustomers);
      this.aveCustomerPerhour.push(aveCustomer1hr);
      this.totalCustomer += aveCustomer1hr;
    }
  },
  averageCookies: function () {
    this.aveCustomer();
    for (var hours = 0; hours < hoursOpen.length; hours++) {
      var aveCookies1hr = Math.round(this.aveCustomerPerhour[hours] * this.averageCookie);
      this.hoursCookies.push(aveCookies1hr);
      this.totalCookies += aveCookies1hr;
    }
  },
  renderData: function () {
    this.averageCookies();
    var ulEl = document.getElementById ('create-li');
    for (i = 0; i < this.hoursCookies.length; i++) {
      var newLiUl = document.createElement('li');
      newLiUl.textContent = hoursOpen[i] + ': ' + this.hoursCookies[i] + ' cookies';
      ulEl.appendChild(newLiUl);
    }
  }
};
pike.aveCustomer();
pike.averageCookies();
pike.renderData();
