const mytext =  document.getElementById("information");
const myaccount = document.getElementById("myaccount");
const mycash = document.getElementById("mycash");
const mytype = document.getElementById("type");
const myproceed = document.getElementById("myproceed");
let count = 0;
let accountmoney = 0;
let cashmoney = 0;
count += 1;
mytext.value += count + " Current account balance: " + accountmoney + ", Current cash balance: " + cashmoney + "\n";

function change() {
    accountmoney = Number(myaccount.value);
    cashmoney = Number(mycash.value);
    count += 1;
    mytext.value += count + " Current account balance: " + accountmoney + ", Current cash balance: " + cashmoney + "\n";
}

function proceed() {
    if (mytype.value == "deposit") {
        if (Number(myproceed.value) <= cashmoney && Number(myproceed.value) >= 0) {
            accountmoney += Number(myproceed.value);
            cashmoney -= Number(myproceed.value);
            count += 1;
            mytext.value += count + " Current account balance: " + accountmoney + ", Current cash balance: " + cashmoney + "\n";
        }
        else {
            count += 1;
            mytext.value += count + " ERROR\n";
        }
    }
    else {
        if (Number(myproceed.value) <= accountmoney && Number(myproceed.value) >= 0) {
            accountmoney -= Number(myproceed.value);
            cashmoney += Number(myproceed.value);
            count += 1;
            mytext.value += count + " Current account balance: " + accountmoney + ", Current cash balance: " + cashmoney + "\n";
        }
        else {
            count += 1;
            mytext.value += count + " ERROR\n";
        }
    }
}