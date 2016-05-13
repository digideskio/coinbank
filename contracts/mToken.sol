//this is a simple membership token
// All the users using coinbank services must at minimum be registered in this contract by owning a token
// The token is issued by the bank - An possesion of this token will grant them access for certain services ex: exchanges


contract mToken {

  mapping (address => uint256) public mbalances;

  address public centralMinter;

function mToken() {
  mbalances[msg.sender] = 1000; //this contract can onboard a 1000 accounts/user

  if(centralMinter == 0) centralMinter = msg.sender;
}

function getBalance(address addr) returns(uint) {
      	return mbalances[addr];
    	}

//this is called by coinbank to send mtoken to an account for onboarding
function sendmToken(address _receiver, uint amount) returns(bool done) {
if (msg.sender != centralMinter) return false;

  if (mbalances[msg.sender] < amount) return false;

  mbalances[msg.sender] -= amount;  //amount is always one
  mbalances[_receiver] += amount;
  return true;
}


}
