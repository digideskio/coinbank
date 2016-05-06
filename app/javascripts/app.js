var accounts;
var coinbase;
var balance;

function setStatus(message) {
  var status = document.getElementById("status");
  status.innerHTML = message;
};

function refreshBalance() {
  var meta = FireCoin.deployed();

  meta.getBalance.call(coinbase, {from: coinbase}).then(function(value) {
    var balance_element = document.getElementById("balance");
    balance_element.innerHTML = value.valueOf();
  }).catch(function(e) {
    console.log(e);
    setStatus("Error getting balance; see log.");
  });
};

function sendCoin() {
  var meta = FireCoin.deployed();

  var amount = parseInt(document.getElementById("amount").value);
  var receiver = document.getElementById("receiver").value;

  setStatus("Initiating transaction... (please wait)");

  meta.transferCoin(receiver, amount, {from: coinbase}).then(function() {
    setStatus("Transaction complete!");
    refreshBalance();
  }).catch(function(e) {
    console.log(e);
    setStatus("Error sending coin; see log.");
  });
};

function mintToken() {
  console.log(coinbase);
  console.log("--------------")
  var meta = FireCoin.deployed();
   console.log(meta)
  var amount = parseInt(document.getElementById("mintamount").value);
  meta.mintToken(coinbase, amount).then(function() {
    setStatus("Minted some FireCoins");
    refreshBalance();
  }).catch(function(e) {
    console.log(e);
  });
};


window.onload = function() {
  web3.eth.getAccounts(function(err, accs) {
    if (err != null) {
      alert("There was an error fetching your accounts.");
      return;
    }

    if (accs.length == 0) {
      alert("Couldn't get any accounts! Make sure your Ethereum client is configured correctly.");
      return;
    }

    accounts = accs;
    coinbase = accounts[0];

    refreshBalance();
  });
}
