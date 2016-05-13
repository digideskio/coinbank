
//A coin contract
contract FireCoin {
	mapping (address => uint) public balances;

   address _issuer;
/* A firecoin initializer function */
	function FireCoin() {
		_issuer = msg.sender;
		balances[_issuer] = 10000;

	}

/* to transfer coin to other account */
function transferCoin(address _receiver, uint amount) returns(bool sufficient) {
		if (balances[msg.sender] < amount) return false;
		if (balances[_receiver] + amount < balances[_receiver]) return false;

		balances[msg.sender] -= amount;
		balances[_receiver] += amount;
		return true;
	}
/* the payer will be deducted with number of coins - coins are moved to _issuer */
	function deductFireCoins(address _payer, uint amount) returns(bool res) {
      if(balances[_payer] < amount) return false;
			balances[_payer] -= amount;
			balances[_issuer] += amount;
			return true;

	}
	/* Conversion of coins to ethers */
function getBalanceInEth(address addr) returns(uint){
		return convert(getBalance(addr),2);
	}

/* Mint coins  */
function mintCoins(address _t, uint256 mintedAmount) {
		balances[_t] += mintedAmount;
}

//function MintTokenInContract(uint256 amount) {
//	balances[msg.sender] += amount;
//}

/* Returns the balance */
function getBalance(address addr) returns(uint) {
    	return balances[addr];
  	}

/* the convert function */
function convert(uint amount,uint conversionRate) returns (uint convertedAmount)
		{
			return amount * conversionRate;
		}

}
