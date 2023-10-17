// set your account sid here
var accountSid = AC91b137bd8fa2cc8395a8f9b14571150c;


var appConfig = {
  // Uncomment the following lines to enable automatic log in
  
  /* sso: {
    accountSid: AC595d7affd2fb2cdb37a528cb25e5d63f
  } */
  sdkOptions: {
    worker: {
      logLevel: "error"
    },
    insights: {
      logLevel: "error"
    },
    chat: {
      logLevel: "error"
    },
    flex: {
      logger: {
        level: "error"
      }
    },
    voice: {
      debug: false
    }
  }
}