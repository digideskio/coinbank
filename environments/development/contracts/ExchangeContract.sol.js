// Factory "morphs" into a Pudding class.
// The reasoning is that calling load in each context
// is cumbersome.

(function() {

  var contract_data = {
    abi: [{"constant":false,"inputs":[{"name":"addr","type":"address"},{"name":"caddr","type":"address"}],"name":"bootstrapsAccount","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"mTokenBalance","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"dollarBalance","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"inputs":[],"type":"constructor"}],
    binary: "606060405260e98060106000396000f3606060405260e060020a6000350463011505068114602e57806304c6fc821460a95780634021581a1460c0575b005b60d76004356024357ff8b2cb4f00000000000000000000000000000000000000000000000000000000606090815273ffffffffffffffffffffffffffffffffffffffff808416606452600091839182169063f8b2cb4f9060849060209060248188876161da5a03f11560025750506040515195945050505050565b60d760043560016020526000908152604090205481565b60d760043560006020819052908152604090205481565b60408051918252519081900360200190f3",
    unlinked_binary: "606060405260e98060106000396000f3606060405260e060020a6000350463011505068114602e57806304c6fc821460a95780634021581a1460c0575b005b60d76004356024357ff8b2cb4f00000000000000000000000000000000000000000000000000000000606090815273ffffffffffffffffffffffffffffffffffffffff808416606452600091839182169063f8b2cb4f9060849060209060248188876161da5a03f11560025750506040515195945050505050565b60d760043560016020526000908152604090205481565b60d760043560006020819052908152604090205481565b60408051918252519081900360200190f3",
    address: "0x50af88504336d3f7eadf01f2667d04816fdd7f9b",
    generated_with: "2.0.6",
    contract_name: "ExchangeContract"
  };

  function Contract() {
    if (Contract.Pudding == null) {
      throw new Error("ExchangeContract error: Please call load() first before creating new instance of this contract.");
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
      throw new Error("ExchangeContract error: Please call load() first before calling new().");
    }

    return Contract.Pudding.new.apply(Contract, arguments);
  };

  Contract.at = function() {
    if (Contract.Pudding == null) {
      throw new Error("ExchangeContract error: lease call load() first before calling at().");
    }

    return Contract.Pudding.at.apply(Contract, arguments);
  };

  Contract.deployed = function() {
    if (Contract.Pudding == null) {
      throw new Error("ExchangeContract error: Please call load() first before calling deployed().");
    }

    return Contract.Pudding.deployed.apply(Contract, arguments);
  };

  if (typeof module != "undefined" && typeof module.exports != "undefined") {
    module.exports = Contract;
  } else {
    // There will only be one version of Pudding in the browser,
    // and we can use that.
    window.ExchangeContract = Contract;
  }

})();
