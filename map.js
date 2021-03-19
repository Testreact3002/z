var PSD = require('psd');
var psd = PSD.fromFile("Карта.psd");
psd.parse();

console.log(JSON.stringify(psd.tree().export(), null, 4));
