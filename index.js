'use strict';

var http = require('http');
// var soap = require('soap');
const path = require('path');
var server;

var soap = require('strong-soap').soap;

// var myService = {
//   StockQuoteService: {
//     StockQuotePort: {
//       GetLastTradePrice: (args) => {
//         if (args.tickerSymbol === 'trigger error') {
//           throw new Error('triggered server error');
//         } else {
//           return { price: 19.56 };
//         }
//       }
//     }
//   }
// };

// HTNGService
var services = {
  GRSM_Example: {
    RoomStayEventConsumer: {
      CheckedIn: (args) => {
        if (args.tickerSymbol === 'trigger error') {
          throw new Error('triggered server error');
        } else {
          return {
            price: 19.56
          };
        }
      }
    }
  }
};

// var services = {
//   GRSM_Example: {
//     RoomStayEventConsumer: {
//       CheckedIn: (args, callback, headers, req) => {
//         /*
//           args = {
//           }
//         */
//         //
//         // Your code
//         //
//         /* return {

//         }; */
//         return 'ok';
//       }
//     }
//   }
// };

// var xml = require('fs').readFileSync('stockquote.wsdl', 'utf8');
// var xml = require('fs').readFileSync('HTNGService.wsdl', 'utf8');

// console.log('starting...');

// server = http.createServer(function(request,response) {
//   response.end('404: Not Found: ' + request.url);
// });

// server.listen(8000);
// soap.listen(server, '/stockquote', myService, xml);
// // soap.listen(server, `/GRSM_ServiceExample`, myService, xml);
// soap.listen(server, path.join(__dirname, 'GRSM_ServiceExample'), services, xml);



//strong
var xml = require('fs').readFileSync('HTNGService.wsdl', 'utf8'),
  server = http.createServer((request, response) => {
    response.end("404: Not Found: " + request.url);
});

// console.log('starting...');

server.listen(8000);
soap.listen(server, '/GRSM_ServiceExample', services, xml);
console.log('listening');

server.log = function (type, data) {
  console.log('data: ', data);
};
