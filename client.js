'use strict';

var soap = require('soap');
// var soap = require('strong-soap').soap;
// var url = 'http://127.0.0.1:8000/stockquote?wsdl';
// var endpoint_url = 'http://127.0.0.1:8000/stockquote';
var args = {
  tickerSymbol: 'AAPL'
};

// var args = {
//   'tns:tickerSymbol': 'AAPL'
// };

// soap.createClient(url, (err, client) => {
//   client.GetLastTradePrice(args, (err, result) => {
//     console.log(result);
//   });
//   client.CheckedIn(args, (err, result) => {
//     console.log(result);
//   });
// }, endpoint_url);


var url = 'http://127.0.0.1:8000/GRSM_ServiceExample?wsdl';
var endpoint_url = 'http://127.0.0.1:8000/GRSM_ServiceExample';
soap.createClient(url, function(err, client) {
  console.log('err: ', err);
  console.log('client: ', client);
  if(client) console.log('describe: ', client.describe());
  // client.GetLastTradePrice(args, (err, result) => {
  //   console.log(result);
  // });
  // client.CheckedIn(args, (err, result) => {
  //   console.log(result);
  // });
}, endpoint_url);


//strong
var options = {};
// soap.createClient(url, options, function (err, client) {
//   console.log('err: ',err);
//   console.log('client: ', client);
//   // console.log('client.describe(): ', client.describe());
//   // client.addSoapHeader(`<wsa:Action xmlns:wsa="http://www.w3.org/2005/08/addressing">http://tempuri.org/IWCFAccess/GetOtherData</wsa:Action>`);
//   // client.addSoapHeader(`<wsa:To xmlns:wsa="http://www.w3.org/2005/08/addressing">https://test-idv.dataventures.com/CP3_WCF_DATA/WCFAccess.svc</wsa:To>`);
//   // client.CheckedIn(args, function (err, result, envelope, soapHeader) {
//   //   console.log('result', result);
//   //   console.log('envelope', envelope);
//   //   if (err) {
//   //     throw err;
//   //   }
//   //   console.log(result);
//   // })
// });



// soap.createClient(url, function (err, client) {
//   if (err) {
//     console.log('Error creating client: ', err);
//   } else {
//     console.log('Client created..');
//     client.Add(args, function (err, result) {
//       console.log('result ', result);
//     });
//   }
// });



//strong soap servidor -> OK
//strong soap client -> describe empty

//strong soap servidor -> OK
//soap client -> Text data outside of root node.


//soap server -> path issue

