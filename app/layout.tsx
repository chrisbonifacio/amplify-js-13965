"use client";
import { Amplify } from "aws-amplify";
import config from "@/amplifyconfiguration.json";

Amplify.configure(
  {
    ...config,
    Auth: {
      Cognito: {
        identityPoolId: config.aws_cognito_identity_pool_id,
        userPoolClientId: config.aws_user_pools_web_client_id,
        userPoolId: config.aws_user_pools_id,
        allowGuestAccess: true,
      },
    },
  },
  { ssr: true }
);

// const config: ResourcesConfig = {
//   Auth: {
//     Cognito: {
//       userPoolId: process.env.NEXT_PUBLIC_USER_POOL_ID as string,
//       userPoolClientId: process.env.NEXT_PUBLIC_USER_POOL_CLIENT_ID as string,
//     },
//   },
//   API: {
//     GraphQL: {
//       endpoint: "https://endpoint",
//       region: "us-east-1",
//       defaultAuthMode: "userPool",
//     },
//   },
// };

// export function configureAmplify(config: ResourcesConfig): void {
//   if (!isConfigured) {
//     Amplify.configure(config, { ssr: true });

//     const amplifyConfigured = Amplify.getConfig();
//     console.log("configured", amplifyConfigured);
//     isConfigured = true;
//   }
// }

// configureAmplify(config);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
