let bill = 0;
let people = 0;
let tip = 0;
const peopleNumGroup = document.querySelector(".people-num-group");
const billGroup = document.querySelector(".bill-group");
const tipAmt = document.getElementById("tip-amt");
const totalAmt = document.getElementById("total-amt");
const resetBtn = document.getElementById("reset");
const billInput = document.getElementById("bill");
const peopleInput = document.getElementById("people");
const tipInpput = document.getElementById("tip");
const calcTipDetail = () => {
  let tipPerPerson = ((bill * tip) / 100).toFixed(2);
  tipAmt.innerHTML = "$" + tipPerPerson;
  totalAmt.innerHTML = "$" + (tipPerPerson * people).toFixed(2);
};
const checkBillError = () => {
  if (people === 0) {
    peopleNumGroup.classList.add("error-group");
  }
  if (bill === 0) {
    billGroup.classList.add("error-group");
  }
  if (people !== 0 && bill !== 0 && tip !== 0) {
    peopleNumGroup.classList.remove("error-group");
    billGroup.classList.remove("error-group");
    resetBtn.disabled = false;
    calcTipDetail();
  }
};
const saveBill = (e) => {
  billGroup.classList.remove("error-group");
  bill = e.target.value;
  if (e.keyCode === 13) {
    checkBillError();
  }
};
const calculateTip = (e) => {
  let currentActive = document.querySelector(".active");
  currentActive && currentActive.classList.remove("active");
  let calc = false;
  if (e.target.nodeName === "INPUT") {
    tip = e.target.value;
    if (e.keyCode === 13) {
      calc = true;
    }
  } else {
    tip = parseInt(e.target.innerText.split("%")[0]);
    e.target.classList.add("active");
    calc = true;
  }
  console.log(bill, people, tip);
  if (calc) {
    checkBillError();
  }
};
const savePeople = (e) => {
  peopleNumGroup.classList.remove("error-group");
  people = e.target.value;
  if (e.keyCode === 13) {
    checkBillError();
  }
};
const reset = (e) => {
  tipAmt.innerHTML = "$0.00";
  totalAmt.innerHTML = "$0.00";
  resetBtn.disabled = true;
  billInput.value = "";
  peopleInput.value = "";
  tipInpput.value = "";
  let currentActive = document.querySelector(".active");
  currentActive && currentActive.classList.remove("active");
};
