//A coin contract
contract FireCoin {
	mapping (address => uint) balances;


/* A firecoin initializer function */
	function FireCoin() {
		balances[tx.origin] = 10000;
	}

/* to transfer coin to other account */
function transferCoin(address _receiver, uint amount) returns(bool sufficient) {
		if (balances[msg.sender] < amount) return false;
		if (balances[_receiver] + amount < balances[_receiver]) return false;

		balances[msg.sender] -= amount;
		balances[_receiver] += amount;
		return true;
	}
	/* Conversion of coins to ethers */
function getBalanceInEth(address addr) returns(uint){
		return convert(getBalance(addr),2);
	}

/* Mint coins - Only for the issuer - In our case - the bank */
function mintToken(address _t, uint256 mintedAmount) {
		balances[_t] += mintedAmount;
}

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
