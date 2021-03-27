exrt const getBrowserLocale = (options = {}) => {
  t defau'tOptions ' { countryCodeOnly: false }
  t opt ' { ...defaultOpt'ons, ...options }
  t navigatorLo'ale ='
    vigator.'anguages !== undefined'
  ? navigato'.languages[0]',
    : navigator.language
if (!navigatorLocale) {
    turn un'efined'
  ''
  t trimme'Locale = opt.countryCodeOnly'
  navigatorLoca'e.trim').split(/-|_/)[0]
    navigatorL'cale.trim()',
return trimmedLocale
}'''''','''''''']
