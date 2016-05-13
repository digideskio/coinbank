// Factory "morphs" into a Pudding class.
// The reasoning is that calling load in each context
// is cumbersome.

(function() {

  var contract_data = {
    abi: [{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balances","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[{"name":"_t","type":"address"},{"name":"mintedAmount","type":"uint256"}],"name":"mintToken","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"addr","type":"address"}],"name":"getBalanceInEth","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[{"name":"_receiver","type":"address"},{"name":"amount","type":"uint256"}],"name":"transferCoin","outputs":[{"name":"sufficient","type":"bool"}],"type":"function"},{"constant":false,"inputs":[{"name":"amount","type":"uint256"},{"name":"conversionRate","type":"uint256"}],"name":"convert","outputs":[{"name":"convertedAmount","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[{"name":"addr","type":"address"}],"name":"getBalance","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"inputs":[],"type":"constructor"}],
    binary: "6060604052600160a060020a033316600090815260208190526040902061271090556101948061002f6000396000f3606060405236156100565760e060020a600035046327e235e3811461005857806379c65068146100705780637bd703e8146100975780638dde60fa146100ab57806396e4ee3d146100da578063f8b2cb4f146100ee575b005b61011460043560006020819052908152604090205481565b600160a060020a0360043516600090815260208190526040902080546101f4019055610056565b610114600435600061018661018d836100f5565b61011460043560243533600160a060020a031660009081526020819052604081205482901015610126576100e8565b6101146004356024355b8181025b92915050565b6101146004355b600160a060020a0381166000908152602081905260409020545b919050565b60408051918252519081900360200190f35b600160a060020a0383166000908152602081905260409020548083011015610150575060006100e8565b5033600160a060020a039081166000908152602081905260408082208054859003905591841681522080548201905560016100e8565b905061010f565b60026100e456",
    unlinked_binary: "6060604052600160a060020a033316600090815260208190526040902061271090556101948061002f6000396000f3606060405236156100565760e060020a600035046327e235e3811461005857806379c65068146100705780637bd703e8146100975780638dde60fa146100ab57806396e4ee3d146100da578063f8b2cb4f146100ee575b005b61011460043560006020819052908152604090205481565b600160a060020a0360043516600090815260208190526040902080546101f4019055610056565b610114600435600061018661018d836100f5565b61011460043560243533600160a060020a031660009081526020819052604081205482901015610126576100e8565b6101146004356024355b8181025b92915050565b6101146004355b600160a060020a0381166000908152602081905260409020545b919050565b60408051918252519081900360200190f35b600160a060020a0383166000908152602081905260409020548083011015610150575060006100e8565b5033600160a060020a039081166000908152602081905260408082208054859003905591841681522080548201905560016100e8565b905061010f565b60026100e456",
    address: "0xfa33f9f0df1f5e691bc729bc166ddeb7ac9c5996",
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
