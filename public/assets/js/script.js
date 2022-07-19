// DATE VARIABLES
let day = moment().format("dddd");
let monday = document.querySelector("#monday span");
let tuesday = document.querySelector("#tuesday span");
let wednesday = document.querySelector("#wednesday span");
let thursday = document.querySelector("#thursday span");
let friday = document.querySelector("#friday span");
let jobOneRate = 30;
let jobTwoRate = 30;

// TABLE VARIABLES
let thisWeek = document.querySelector(".this-week");
let msqMonHours = document.querySelector("#msq-mon-hours");
let msqTueHours = document.querySelector("#msq-tue-hours");
let msqWedHours = document.querySelector("#msq-wed-hours");
let msqThuHours = document.querySelector("#msq-thu-hours");
let msqFriHours = document.querySelector("#msq-fri-hours");

function addDate() {
  if (day === "Monday") {
    monday.innerHTML = moment().format("ll");
    tuesday.innerHTML = moment().add(1, "days").format("ll");
    wednesday.innerHTML = moment().add(2, "days").format("ll");
    thursday.innerHTML = moment().add(3, "days").format("ll");
    friday.innerHTML = moment().add(4, "days").format("ll");
  } else if (day === "Tuesday") {
    monday.innerHTML = moment().subtract(1, "days").format("ll");
    tuesday.innerHTML = moment().format("ll");
    wednesday.innerHTML = moment().add(1, "days").format("ll");
    thursday.innerHTML = moment().add(2, "days").format("ll");
    friday.innerHTML = moment().add(3, "days").format("ll");
  } else if (day === "Wednesday") {
    monday.innerHTML = moment().subtract(2, "days").format("ll");
    tuesday.innerHTML = moment().subtract(1, "days").format("ll");
    wednesday.innerHTML = moment().format("ll");
    thursday.innerHTML = moment().add(1, "days").format("ll");
    friday.innerHTML = moment().add(2, "days").format("ll");
  } else if (day === "Thursday") {
    monday.innerHTML = moment().subtract(3, "days").format("ll");
    tuesday.innerHTML = moment().subtract(2, "days").format("ll");
    wednesday.innerHTML = moment().subtract(1, "days").format("ll");
    thursday.innerHTML = moment().format("ll");
    friday.innerHTML = moment().add(1, "days").format("ll");
  } else if (day === "Friday") {
    monday.innerHTML = moment().subtract(4, "days").format("ll");
    tuesday.innerHTML = moment().subtract(3, "days").format("ll");
    wednesday.innerHTML = moment().subtract(2, "days").format("ll");
    thursday.innerHTML = moment().subtract(1, "days").format("ll");
    friday.innerHTML = moment().format("ll");
  } else if (day === "Saturday") {
    monday.innerHTML = moment().add(2, "days").format("ll");
    tuesday.innerHTML = moment().add(3, "days").format("ll");
    wednesday.innerHTML = moment().add(4, "days").format("ll");
    thursday.innerHTML = moment().add(5, "days").format("ll");
    friday.innerHTML = moment().add(6, "days").format("ll");
  } else if (day === "Sunday") {
    monday.innerHTML = moment().add(1, "days").format("ll");
    tuesday.innerHTML = moment().add(2, "days").format("ll");
    wednesday.innerHTML = moment().add(3, "days").format("ll");
    thursday.innerHTML = moment().add(4, "days").format("ll");
    friday.innerHTML = moment().add(5, "days").format("ll");
  }
}

addDate();

// DAILY TOTALS
let addH1 = document.querySelector("#add-h-1");
let addT1 = document.querySelector("#add-t-1");
let addH2 = document.querySelector("#add-h-2");
let addT2 = document.querySelector("#add-t-2");
let addST = document.querySelector("#add-st");

// SUMMARIES
let incomeStatusTotal = document.querySelector("#income-status-total");
let hoursStatusTotal = document.querySelector("#hours-status-total");

// MONDAY
let mh1 = document.querySelector("#mh1");
let mt1 = document.querySelector("#mt1");
let mh2 = document.querySelector("#mh2");
let mt2 = document.querySelector("#mt2");
let mst = document.querySelector("#mst");

mh1.addEventListener("input", function () {
  mt1.value = JSON.parse(mh1.value) * jobOneRate;
  mst.value = JSON.parse(mt1.value) + JSON.parse(mt2.value);
  localStorage.setItem("mh1", JSON.stringify(mh1.value));
  dailyTotalsJ1();
  summaryTotals();
});

mh2.addEventListener("input", function () {
  mt2.value = JSON.parse(mh2.value) * jobTwoRate;
  mst.value = JSON.parse(mt1.value) + JSON.parse(mt2.value);
  localStorage.setItem("mh2", JSON.stringify(mh2.value));
  dailyTotalsJ2();
  summaryTotals();
});

// TUESDAY
let th1 = document.querySelector("#th1");
let tt1 = document.querySelector("#tt1");
let th2 = document.querySelector("#th2");
let tt2 = document.querySelector("#tt2");
let tst = document.querySelector("#tst");

th1.addEventListener("input", function () {
  tt1.value = JSON.parse(th1.value) * jobOneRate;
  tst.value = JSON.parse(tt1.value) + JSON.parse(tt2.value);
  localStorage.setItem("th1", JSON.stringify(th1.value));
  dailyTotalsJ1();
  summaryTotals();
});

th2.addEventListener("input", function () {
  tt2.value = JSON.parse(th2.value) * jobTwoRate;
  tst.value = JSON.parse(tt1.value) + JSON.parse(tt2.value);
  localStorage.setItem("th2", JSON.stringify(th2.value));
  dailyTotalsJ2();
  summaryTotals();
});

// WEDNESDAY
let wh1 = document.querySelector("#wh1");
let wt1 = document.querySelector("#wt1");
let wh2 = document.querySelector("#wh2");
let wt2 = document.querySelector("#wt2");
let wst = document.querySelector("#wst");

wh1.addEventListener("input", function () {
  wt1.value = JSON.parse(wh1.value) * jobOneRate;
  wst.value = JSON.parse(wt1.value) + JSON.parse(wt2.value);
  localStorage.setItem("wh1", JSON.stringify(wh1.value));
  dailyTotalsJ1();
  summaryTotals();
});

wh2.addEventListener("input", function () {
  wt2.value = JSON.parse(wh2.value) * jobTwoRate;
  wst.value = JSON.parse(wt1.value) + JSON.parse(wt2.value);
  localStorage.setItem("wh2", JSON.stringify(wh2.value));
  dailyTotalsJ2();
  summaryTotals();
});

// THURSDAY
let thh1 = document.querySelector("#thh1");
let tht1 = document.querySelector("#tht1");
let thh2 = document.querySelector("#thh2");
let tht2 = document.querySelector("#tht2");
let thst = document.querySelector("#thst");

thh1.addEventListener("input", function () {
  tht1.value = JSON.parse(thh1.value) * jobOneRate;
  thst.value = JSON.parse(tht1.value) + JSON.parse(tht2.value);
  localStorage.setItem("thh1", JSON.stringify(thh1.value));
  dailyTotalsJ1();
  summaryTotals();
});

thh2.addEventListener("input", function () {
  tht2.value = JSON.parse(thh2.value) * jobTwoRate;
  thst.value = JSON.parse(tht1.value) + JSON.parse(tht2.value);
  localStorage.setItem("thh2", JSON.stringify(thh2.value));
  dailyTotalsJ2();
  summaryTotals();
});

// FRIDAY
let fh1 = document.querySelector("#fh1");
let ft1 = document.querySelector("#ft1");
let fh2 = document.querySelector("#fh2");
let ft2 = document.querySelector("#ft2");
let fst = document.querySelector("#fst");

fh1.addEventListener("input", function () {
  ft1.value = JSON.parse(fh1.value) * jobOneRate;
  fst.value = JSON.parse(ft1.value) + JSON.parse(ft2.value);
  localStorage.setItem("fh1", JSON.stringify(fh1.value));
  dailyTotalsJ1();
  summaryTotals();
});

fh2.addEventListener("input", function () {
  ft2.value = JSON.parse(fh2.value) * jobTwoRate;
  fst.value = JSON.parse(ft1.value) + JSON.parse(ft2.value);
  localStorage.setItem("fh2", JSON.stringify(fh2.value));
  dailyTotalsJ2();
  summaryTotals();
});

function summaryTotals() {
  incomeStatusTotal.textContent = `$${addST.value}`;

  hoursTotal = JSON.parse(addH1.value) + JSON.parse(addH2.value);
  hoursStatusTotal.textContent = hoursTotal;
}

function dailyTotalsJ1() {
  addH1.value =
    JSON.parse(mh1.value) +
    JSON.parse(th1.value) +
    JSON.parse(wh1.value) +
    JSON.parse(thh1.value) +
    JSON.parse(fh1.value);
  addT1.value =
    JSON.parse(mt1.value) +
    JSON.parse(tt1.value) +
    JSON.parse(wt1.value) +
    JSON.parse(tht1.value) +
    JSON.parse(ft1.value);
  addST.value =
    JSON.parse(mst.value) +
    JSON.parse(tst.value) +
    JSON.parse(wst.value) +
    JSON.parse(thst.value) +
    JSON.parse(fst.value);
}

function dailyTotalsJ2() {
  addH2.value =
    JSON.parse(mh2.value) +
    JSON.parse(th2.value) +
    JSON.parse(wh2.value) +
    JSON.parse(thh2.value) +
    JSON.parse(fh2.value);
  addT2.value =
    JSON.parse(mt2.value) +
    JSON.parse(tt2.value) +
    JSON.parse(wt2.value) +
    JSON.parse(tht2.value) +
    JSON.parse(ft2.value);
  addST.value =
    JSON.parse(mst.value) +
    JSON.parse(tst.value) +
    JSON.parse(wst.value) +
    JSON.parse(thst.value) +
    JSON.parse(fst.value);
}

function displayStoredData() {
  mh1.value = JSON.parse(localStorage.getItem("fh2")) || 0;
  th1.value = JSON.parse(localStorage.getItem("th1")) || 0;
  wh1.value = JSON.parse(localStorage.getItem("wh1")) || 0;
  thh1.value = JSON.parse(localStorage.getItem("thh1")) || 0;
  fh1.value = JSON.parse(localStorage.getItem("fh1")) || 0;
  mh2.value = JSON.parse(localStorage.getItem("mh2")) || 0;
  th2.value = JSON.parse(localStorage.getItem("th2")) || 0;
  wh2.value = JSON.parse(localStorage.getItem("wh2")) || 0;
  thh2.value = JSON.parse(localStorage.getItem("thh2")) || 0;
  fh2.value = JSON.parse(localStorage.getItem("fh2")) || 0;

  summaryTotals();
  dailyTotalsJ1();
  dailyTotalsJ2();
}

displayStoredData();
summaryTotals();
dailyTotalsJ1();
dailyTotalsJ2();

function onLoad() {
  // Pull data from localStorage
  displayStoredData();

  // DAILY CALCULATIONS
  // MONDAY
  mt1.value = JSON.parse(mh1.value) * jobOneRate;
  mst.value = JSON.parse(mt1.value) + JSON.parse(mt2.value);
  mt2.value = JSON.parse(mh2.value) * jobTwoRate;
  mst.value = JSON.parse(mt1.value) + JSON.parse(mt2.value);

  // TUESDAY
  tt1.value = JSON.parse(th1.value) * jobOneRate;
  tst.value = JSON.parse(tt1.value) + JSON.parse(tt2.value);
  tt2.value = JSON.parse(th2.value) * jobTwoRate;
  tst.value = JSON.parse(tt1.value) + JSON.parse(tt2.value);

  // WEDNESDAY
  wt1.value = JSON.parse(wh1.value) * jobOneRate;
  wst.value = JSON.parse(wt1.value) + JSON.parse(wt2.value);
  wt2.value = JSON.parse(wh2.value) * jobTwoRate;
  wst.value = JSON.parse(wt1.value) + JSON.parse(wt2.value);

  // THURSDAY
  tht1.value = JSON.parse(thh1.value) * jobOneRate;
  thst.value = JSON.parse(tht1.value) + JSON.parse(tht2.value);
  tht2.value = JSON.parse(thh2.value) * jobTwoRate;
  thst.value = JSON.parse(tht1.value) + JSON.parse(tht2.value);

  // FRIDAY
  ft1.value = JSON.parse(fh1.value) * jobOneRate;
  fst.value = JSON.parse(ft1.value) + JSON.parse(ft2.value);
  ft2.value = JSON.parse(fh2.value) * jobTwoRate;
  fst.value = JSON.parse(ft1.value) + JSON.parse(ft2.value);

  // TOTALS & SUMMARIES
  // Job 1 daily totals
  dailyTotalsJ1();
  // Job 2 daily totals
  dailyTotalsJ2();
  // Update summary totals - Income & Hours
  summaryTotals();
}

onLoad();
