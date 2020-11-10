export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  STRIPE_KEY: "pk_test_51Hih5PKxHfMInGKt9yQSrRsejoCJfVcqfuVCIsMaiwwXxQcy4HU7JhLH61CsW0EtyqFmDvzI1I3BfcshTJ87NjSo00VgkfTznB",
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-uploads-tbf"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://qs9tt3zwc3.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_oe7yqSJ95",
    APP_CLIENT_ID: "41m4bqnkbtoj7v2asft0tc7374",
    IDENTITY_POOL_ID: "us-east-1:ad7409ce-5c92-410d-bb9c-4dc68f363416"
  }
};
