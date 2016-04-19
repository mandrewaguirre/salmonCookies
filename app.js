var hoursOpen = ['6am', '7am ','8am ','9am ','10am ','11am ','12pm ','1pm ','2pm ','2pm ','4pm ','5pm ', '6pm ', '7pm ', '8pm ', '9pm '];
var dailyTotalCookies = 'Totals: ';
var hoursCookies = [];

var totalCookies = 0;
// totalsInil.textContent = 'totalsInil';
//
// for (var printLi = 0; printLi < hoursOpen.length; printLi++) {
//   var printLitoHtml = document.createElement ('li');
//   printLitoHtml.textContent = hoursCookies[printLi];
//   totalsInil.appenChild(printLitoHtml);
// };
// liForTotals.textContent = hoursCookies;
// document.totalsInUlel.appendChild(hoursCookies);
// 1. Create el method to create element. 2. write on el the text content, 3. append to elemnt on page.

var neLiInUl = document.creatElement('li');
var newArrayDataInhours = document.createTextNode('hoursOpen');
typeOfChicken.appendChild('newLiInUl');

var aveCustomer = function (maxCustomers,minCustomers) {
  return Math.floor(Math.random () * (maxCustomers - minCustomers + 1) + minCustomers);
};

var pike = {
  ShopName: 'pike',
  averageCookie: 5.2,
  maxCustomers: 88,
  minCustomers: 17,
  averageCookies: function () {
    totalCookies = 0;
    for (var hours = 0; hours < hoursOpen.length; hours++) {
      var aveCookies1hr = Math.round(aveCustomer(this.maxCustomers, this.minCustomers) * this.averageCookie);
      hoursCookies.push([hoursOpen[hours],aveCookies1hr] + ' cookies ');
      totalCookies += aveCookies1hr;
      console.log(hoursCookies);
    }
  }
};
