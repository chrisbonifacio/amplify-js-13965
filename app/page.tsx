"use client";
import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

import CustomerCreateForm from "@/ui-components/CustomerCreateForm";
import { generateClient } from "aws-amplify/api";
import { Schema } from "@/amplify/data/resource";
import { useEffect, useState } from "react";

const client = generateClient<Schema>({
  authMode: "userPool",
});

const App = () => {
  const [device, setDevice] = useState<Schema["DeviceMeasures"]["type"] | null>(
    null
  );

  const createNewDevice = async () => {
    const { data, errors } = await client.models.DeviceMeasures.create({
      name: "test-name2",
      tenantId: "ADMIN",
    });

    console.log(data);
  };

  useEffect(() => {
    const subscription = client.models.DeviceMeasures.observeQuery({
      filter: {
        and: [{ tenantId: { eq: "ADMIN" } }, { name: { eq: "test-name2" } }],
      },
    }).subscribe({
      next: ({ items }) => {
        setDevice(items[0] || null);
      },
      error: (err) => {
        console.error("Error in DeviceMeasures subscription", err);
      },
    });

    return () => subscription.unsubscribe();
  }, [device?.tenantId, device?.name]);

  return (
    <Authenticator>
      {({ user, signOut }) => {
        return (
          <>
            <h1>Hello {user?.username}</h1>
            <h1>Protected content!</h1>

            <button onClick={createNewDevice}>Create New Device</button>

            <CustomerCreateForm />
          </>
        );
      }}
    </Authenticator>
  );
};

export default App;
