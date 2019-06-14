var services = {
  /* Services */

  GRSM_Example: {
    /* Ports */

    RoomStayEventConsumer: {
      /* Methods */

      CheckedIn: function(args, callback, headers, req) {
        /*
          args = {
                 intA of type xsd:int
                 intB of type xsd:int
          }
        */
        //
        // Your code
        //
        /* return {
                 AddResult of type xsd:int

        }; */
      },
      CheckedOut: function(args, callback, headers, req) {
        /*
          args = {
                 intA of type xsd:int
                 intB of type xsd:int
          }
        */
        //
        // Your code
        //
        /* return {
                 SubtractResult of type xsd:int

        }; */
      },
      RoomMoved: function(args, callback, headers, req) {
        /*
          args = {
                 intA of type xsd:int
                 intB of type xsd:int
          }
        */
        //
        // Your code
        //
        /* return {
                 MultiplyResult of type xsd:int

        }; */
      },
      StayUpdated: function(args, callback, headers, req) {
        /*
          args = {
                 intA of type xsd:int
                 intB of type xsd:int
          }
        */
        //
        // Your code
        //
        /* return {
                 DivideResult of type xsd:int

        }; */
      }

    }
  }
};