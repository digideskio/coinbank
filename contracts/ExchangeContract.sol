//1. User Onboarding process:

//users will get contract address -
//send the membership token to get $50 and added to the dollarBalance map

//2. User transcation process:

//getEther() - Fetch ether for given dollar amount, calculate ether cost and reduce dollars.
//getFireCoin() - Talk to FireCoin contract and mint coins for the user - calculate cost - reduce dollars
//depositFireCoin() - Users can send firecoins, receive the firecoins, and increase dollar amount


import "./FireCoin.sol";
import "./mToken.sol";

contract ExchangeContract {

  mapping (address => uint) public dollarBalance;
  mapping (address => uint) public ethBalance;

//Not public TODO: Move it to a struct
  uint _bal;
  address _issuer;


  function ExchangeContract() {
    _issuer = msg.sender;
    ethBalance[_issuer] = msg.value;
  }

   function DollarBalance(address addr) returns(uint) {
     return dollarBalance[addr];
   }

  //this gets called everytime the user clicks 'Onboard account'
  function bootstrapsAccount(address addr, address caddr) returns(bool res) {
    //talk to mtoken contract and see if the acc has tokens
    //TODO: either reduce the mtoken or add modifier so that the bootstrap is not called again
    mToken mtoken = mToken(caddr);
    _bal =  mtoken.getBalance(addr); //doing a read only - (msg.sender)

    if (_bal == 0) return false;
    creditDollars(addr);
    return true;
  }

 function creditDollars(address addr) private returns(bool res) {
  // if (msg.sender != _issuer) return false;
   dollarBalance[addr] = 500;
 }


// this will mint firecoins for the addr and reduce dollars. - 5 FRC = 1 ETH = $1
function getFireCoins(address addr, uint numberOfcoins, address fireAddr) returns(uint) {
     FireCoin fire = FireCoin(fireAddr); //TODO: A modifier to check dollar balance
     //Mint firecoins to the address        //Is it programatically possible find the FireCoin address deployed in the BC??
     fire.mintCoins(addr, numberOfcoins);
     //deduct the dollars.
     dollarBalance[addr] -= numberOfcoins / 5;
}

//deposit firecoins for dollars
  function depositFireCoins(address addr, uint numberofcoins, address fireAddr) returns(bool done) {
    FireCoin fire = FireCoin(fireAddr);
    if (fire.getBalance(addr) < numberofcoins) return false;
    fire.deductFireCoins(addr, numberofcoins);
    dollarBalance[addr] += numberofcoins / 5;
  }
}
