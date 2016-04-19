var hoursOpen = ['6am', '7am ','8am ','9am ','10am ','11am ','12pm ','1pm ','2pm ','2pm ','4pm ','5pm ', '6pm ', '7pm ', '8pm ', '9pm '];

var totalCookies = 0;
var ulEl = document.getElementById('create-Ul');
var hoursCookies = [];
var aveCustomer = function (maxCustomers,minCustomers) {
  return Math.floor(Math.random () * (maxCustomers - minCustomers + 1) + minCustomers);
};

var pike = {
  ShopName: 'pike',
  averageCookie: 5.2,
  maxCustomers: 88,
  minCustomers: 17,
  totalCookies: 0,
  hoursCookies: [],
  storeHtml: 'ctreat-ul',
  averageCookies: function () {
    this.totalCookies = 0;
    for (var hours = 0; hours < hoursOpen.length; hours++) {
      var aveCookies1hr = Math.round(Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1) + this.minCustomers));
      this.hoursCookies.push(aveCookies1hr);
      totalCookies += aveCookies1hr;
      // console.log(this.hoursCookies);
    }
  },
  renderData: function () {
    this.averageCookies();
    for (var i = 0; i < hoursCookies.length; i++) {
      var newLiInUl = document.creatElement('li');
      var ulEl = document.getElementByID (this.storeHtml);
      newLiInUl.textContent = this.hoursCookies[i];
      ulEl.appendChild('newLiUl');
    }
  }
};
