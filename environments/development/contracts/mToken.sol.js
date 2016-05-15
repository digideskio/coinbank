// Factory "morphs" into a Pudding class.
// The reasoning is that calling load in each context
// is cumbersome.

(function() {

  var contract_data = {
    abi: [{"constant":false,"inputs":[{"name":"_receiver","type":"address"},{"name":"amount","type":"uint256"}],"name":"sendmToken","outputs":[{"name":"done","type":"bool"}],"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"mbalances","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[],"name":"centralMinter","outputs":[{"name":"","type":"address"}],"type":"function"},{"constant":false,"inputs":[{"name":"addr","type":"address"}],"name":"getBalance","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"inputs":[],"type":"constructor"}],
    binary: "6060604052600160a060020a0333811660009081526020819052604081206103e89055600154909116141560405760018054600160a060020a031916331790555b60f48061004d6000396000f3606060405260e060020a600035046306aad3a2811460385780632de8831a14605c578063d9f01878146073578063f8b2cb4f146084575b005b60a060043560243560015460009033600160a060020a0390811691161460d35760cd565b60a060043560006020819052908152604090205481565b60a0600154600160a060020a031681565b600160a060020a03600435166000908152602081905260409020545b6060908152602090f35b604080822080548490039055600160a060020a0384168252902080548201905560015b92915050565b33600160a060020a03168152602081905260408120548290101560aa5760cd56",
    unlinked_binary: "6060604052600160a060020a0333811660009081526020819052604081206103e89055600154909116141560405760018054600160a060020a031916331790555b60f48061004d6000396000f3606060405260e060020a600035046306aad3a2811460385780632de8831a14605c578063d9f01878146073578063f8b2cb4f146084575b005b60a060043560243560015460009033600160a060020a0390811691161460d35760cd565b60a060043560006020819052908152604090205481565b60a0600154600160a060020a031681565b600160a060020a03600435166000908152602081905260409020545b6060908152602090f35b604080822080548490039055600160a060020a0384168252902080548201905560015b92915050565b33600160a060020a03168152602081905260408120548290101560aa5760cd56",
    address: "0x249a2b6b853c1645d35ff747c6de8413d56c70f9",
    generated_with: "2.0.6",
    contract_name: "mToken"
  };

  function Contract() {
    if (Contract.Pudding == null) {
      throw new Error("mToken error: Please call load() first before creating new instance of this contract.");
    }

    Contract.Pudding.apply(this, arguments);
  };

  Contract.load = function(Pudding) {
    Contract.Pudding = Pudding;

    Pudding.whisk(contract_data, Contract);

    // Return itself for backwards compatibility.
    return Contract;
  }

  Contract.new = function() {
    if (Contract.Pudding == null) {
      throw new Error("mToken error: Please call load() first before calling new().");
    }

    return Contract.Pudding.new.apply(Contract, arguments);
  };

  Contract.at = function() {
    if (Contract.Pudding == null) {
      throw new Error("mToken error: lease call load() first before calling at().");
    }

    return Contract.Pudding.at.apply(Contract, arguments);
  };

  Contract.deployed = function() {
    if (Contract.Pudding == null) {
      throw new Error("mToken error: Please call load() first before calling deployed().");
    }

    return Contract.Pudding.deployed.apply(Contract, arguments);
  };

  if (typeof module != "undefined" && typeof module.exports != "undefined") {
    module.exports = Contract;
  } else {
    // There will only be one version of Pudding in the browser,
    // and we can use that.
    window.mToken = Contract;
  }

})();
