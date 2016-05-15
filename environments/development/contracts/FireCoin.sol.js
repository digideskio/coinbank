// Factory "morphs" into a Pudding class.
// The reasoning is that calling load in each context
// is cumbersome.

(function() {

  var contract_data = {
    abi: [{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balances","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[{"name":"_payer","type":"address"},{"name":"amount","type":"uint256"}],"name":"deductFireCoins","outputs":[{"name":"res","type":"bool"}],"type":"function"},{"constant":false,"inputs":[{"name":"addr","type":"address"}],"name":"getBalanceInEth","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[{"name":"_receiver","type":"address"},{"name":"amount","type":"uint256"}],"name":"transferCoin","outputs":[{"name":"sufficient","type":"bool"}],"type":"function"},{"constant":false,"inputs":[{"name":"amount","type":"uint256"},{"name":"conversionRate","type":"uint256"}],"name":"convert","outputs":[{"name":"convertedAmount","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[{"name":"_t","type":"address"},{"name":"mintedAmount","type":"uint256"}],"name":"mintCoins","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"addr","type":"address"}],"name":"getBalance","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"inputs":[],"type":"constructor"}],
    binary: "606060405260018054600160a060020a031916331790819055600160a060020a031660009081526020819052604090206127109055610206806100426000396000f3606060405236156100615760e060020a600035046327e235e38114610063578063366d4a331461007b5780637bd703e8146100aa5780638dde60fa146100be57806396e4ee3d146100ed578063b7fde9da14610101578063f8b2cb4f14610128575b005b61014e60043560006020819052908152604090205481565b61014e600435602435600160a060020a038216600090815260208190526040812054829010156101c0576100fb565b61014e60043560006101f86101ff8361012f565b61014e60043560243533600160a060020a031660009081526020819052604081205482901015610160576100fb565b61014e6004356024355b8181025b92915050565b600160a060020a036004351660009081526020819052604090208054602435019055610061565b61014e6004355b600160a060020a0381166000908152602081905260409020545b919050565b60408051918252519081900360200190f35b600160a060020a038316600090815260208190526040902054808301101561018a575060006100fb565b5033600160a060020a039081166000908152602081905260408082208054859003905591841681522080548201905560016100fb565b50600160a060020a038281166000908152602081905260408082208054859003905560018054909316825290208054830190556100fb565b9050610149565b60026100f756",
    unlinked_binary: "606060405260018054600160a060020a031916331790819055600160a060020a031660009081526020819052604090206127109055610206806100426000396000f3606060405236156100615760e060020a600035046327e235e38114610063578063366d4a331461007b5780637bd703e8146100aa5780638dde60fa146100be57806396e4ee3d146100ed578063b7fde9da14610101578063f8b2cb4f14610128575b005b61014e60043560006020819052908152604090205481565b61014e600435602435600160a060020a038216600090815260208190526040812054829010156101c0576100fb565b61014e60043560006101f86101ff8361012f565b61014e60043560243533600160a060020a031660009081526020819052604081205482901015610160576100fb565b61014e6004356024355b8181025b92915050565b600160a060020a036004351660009081526020819052604090208054602435019055610061565b61014e6004355b600160a060020a0381166000908152602081905260409020545b919050565b60408051918252519081900360200190f35b600160a060020a038316600090815260208190526040902054808301101561018a575060006100fb565b5033600160a060020a039081166000908152602081905260408082208054859003905591841681522080548201905560016100fb565b50600160a060020a038281166000908152602081905260408082208054859003905560018054909316825290208054830190556100fb565b9050610149565b60026100f756",
    address: "0x95aaf231c7542fe942fcd6f9661ae11561a8df0c",
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
