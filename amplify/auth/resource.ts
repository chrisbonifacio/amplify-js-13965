import { defineAuth, defineFunction } from "@aws-amplify/backend";

export const auth = defineAuth({
  loginWith: {
    email: {
      verificationEmailSubject: "Welcome to Amplify 🚀",
    },
  },
});
