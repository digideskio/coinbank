// Factory "morphs" into a Pudding class.
// The reasoning is that calling load in each context
// is cumbersome.

(function() {

  var contract_data = {
    abi: [{"constant":false,"inputs":[{"name":"target","type":"address"},{"name":"mintedAmount","type":"uint256"}],"name":"mintToken","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"addr","type":"address"}],"name":"getBalanceInEth","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[{"name":"_receiver","type":"address"},{"name":"amount","type":"uint256"}],"name":"transferCoin","outputs":[{"name":"sufficient","type":"bool"}],"type":"function"},{"constant":false,"inputs":[{"name":"amount","type":"uint256"},{"name":"conversionRate","type":"uint256"}],"name":"convert","outputs":[{"name":"convertedAmount","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[{"name":"addr","type":"address"}],"name":"getBalance","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"inputs":[],"type":"constructor"}],
    binary: "6060604052600160a060020a0332166000908152602081905260409020612710905561016b8061002f6000396000f3606060405260e060020a600035046379c6506881146100475780637bd703e81461006e5780638dde60fa1461008257806396e4ee3d146100b1578063f8b2cb4f146100c5575b005b600160a060020a036004351660009081526020819052604090208054602435019055610045565b6100eb600435600061015d610164836100cc565b6100eb60043560243533600160a060020a0316600090815260208190526040812054829010156100fd576100bf565b6100eb6004356024355b8181025b92915050565b6100eb6004355b600160a060020a0381166000908152602081905260409020545b919050565b60408051918252519081900360200190f35b600160a060020a0383166000908152602081905260409020548083011015610127575060006100bf565b5033600160a060020a039081166000908152602081905260408082208054859003905591841681522080548201905560016100bf565b90506100e6565b60026100bb56",
    unlinked_binary: "6060604052600160a060020a0332166000908152602081905260409020612710905561016b8061002f6000396000f3606060405260e060020a600035046379c6506881146100475780637bd703e81461006e5780638dde60fa1461008257806396e4ee3d146100b1578063f8b2cb4f146100c5575b005b600160a060020a036004351660009081526020819052604090208054602435019055610045565b6100eb600435600061015d610164836100cc565b6100eb60043560243533600160a060020a0316600090815260208190526040812054829010156100fd576100bf565b6100eb6004356024355b8181025b92915050565b6100eb6004355b600160a060020a0381166000908152602081905260409020545b919050565b60408051918252519081900360200190f35b600160a060020a0383166000908152602081905260409020548083011015610127575060006100bf565b5033600160a060020a039081166000908152602081905260408082208054859003905591841681522080548201905560016100bf565b90506100e6565b60026100bb56",
    address: "0x5ef4f1cf6e5d1486f6e421d66a9ab21151bf7815",
    generated_with: "2.0.6",
    contract_name: "FireCoin"
  };

  function Contract() {
    if (Contract.Pudding == null) {
      throw new Error("FireCoin error: Please call load() first before creating new instance of this contract.");
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
      throw new Error("FireCoin error: Please call load() first before calling new().");
    }

    return Contract.Pudding.new.apply(Contract, arguments);
  };

  Contract.at = function() {
    if (Contract.Pudding == null) {
      throw new Error("FireCoin error: lease call load() first before calling at().");
    }

    return Contract.Pudding.at.apply(Contract, arguments);
  };

  Contract.deployed = function() {
    if (Contract.Pudding == null) {
      throw new Error("FireCoin error: Please call load() first before calling deployed().");
    }

    return Contract.Pudding.deployed.apply(Contract, arguments);
  };

  if (typeof module != "undefined" && typeof module.exports != "undefined") {
    module.exports = Contract;
  } else {
    // There will only be one version of Pudding in the browser,
    // and we can use that.
    window.FireCoin = Contract;
  }

})();
