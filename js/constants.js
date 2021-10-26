var Constants = (function(Constants, $, undefined) {
  Constants.isTestnet = false;
  var mainnetUSDXId = '1220759651735613679';
  var testnetUSDXId = '';
  Constants.USDXId = mainnetUSDXId;
  if(Constants.isTestnet)
  {
    Constants.USDXId = testnetUSDXId;
  }
  Constants.apiUrl = 'https://wallet.blue0x.com/nxt';
  return Constants;
} (Constants || {}, jQuery));
