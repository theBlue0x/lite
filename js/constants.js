var Constants = (function(Constants, $, undefined) {

  Constants.isTestnet = false;

  var mainnetUSDXId = '9756711664096254982';
  var testnetUSDXId = '9429933812817993614';
  Constants.USDXId = mainnetUSDXId;

  if(Constants.isTestnet)
  {
    Constants.USDXId = testnetUSDXAssetId;
  }

  Constants.nxtpassApiUrl = 'http://127.0.0.1:17776/nxtpass';

  // 2 weeks default listing duration
  Constants.listingDurationDefault = 2 * 7 * 24 * 60 * 60;
  // 4 weeks extended listing duration
  Constants.listingDurationExtended = 4 * 7 * 24 * 60 * 60;
  // listing fees (for information only)
  Constants.listingFeeDefault = 0;
  Constants.listingFeeExtended = 0;

  return Constants;
} (Constants || {}, jQuery));
