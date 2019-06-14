'use strict';

var http = require('http');
// var soap = require('soap');
const path = require('path');
var server;

var soap = require('strong-soap').soap;

console.log('starting...');

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
// var services = {
//   GRSM_Example: {
//     RoomStayEventConsumer: {
//       CheckedIn: (args) => {
//         if (args.tickerSymbol === 'trigger error') {
//           throw new Error('triggered server error');
//         } else {
//           return {
//             price: 19.56
//           };
//         }
//       }
//     }
//   }
// };

var services = {
  /* Services */

  GRSM_Example: {
    /* Ports */

    RoomStayEventConsumer: {
      /* Methods */

      CheckedIn: function (args, callback, headers, req) {
        console.log("CheckedIn", args);

        /*
          args = {
                 intA of type xsd:int
                 intB of type xsd:int
          }
        */
        //
        // Your code
        //
        return {
          HTNG_HotelCheckInNotifRS: {
            AddResult: +args.intA + +args.intB
          }
        }
      },
      CheckedOut: function (args, callback, headers, req) {
        console.log("CheckedOut", args);

        /*
          args = {
                 intA of type xsd:int
                 intB of type xsd:int
          }
        */
        //
        // Your code
        //
        return {
          HTNG_HotelCheckInNotifRS: {
            SubtractResult: +args.intA - +args.intB
          }
        }
      },
      RoomMoved: function (args, callback, headers, req) {
        console.log("RoomMoved", args);

        /*
          args = {
                 intA of type xsd:int
                 intB of type xsd:int
          }
        */
        //
        // Your code
        //
        return {
          HTNG_HotelCheckInNotifRS: {
            MultiplyResult: +args.intA * +args.intB
          }
        }
      },
      StayUpdated: function (args, callback, headers, req) {
        console.log("StayUpdated", args);

        /*
          args = {
                 intA of type xsd:int
                 intB of type xsd:int
          }
        */
        //
        // Your code
        //
        return {
          HTNG_HotelCheckInNotifRS: {
            DivideResult: +args.intA / +args.intB
          }
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
var xml = require('fs').readFileSync('HTNGService_include.wsdl', 'utf8'),
  server = http.createServer((request, response) => {
    response.end("404: Not Found: " + request.url);
  });

// console.log('starting...');

server.listen(8000);
console.log('listening on PORT 8000');
soap.listen(server, '/RoomStayEventConsumer', services, xml);

server.log = function (type, data) {
  console.log('data: ', data);
};
