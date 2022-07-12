import "./App.css";
import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import Amplify from "aws-amplify";
import awsconfig from "./dummy_exports";

Amplify.configure(awsconfig);

// console.log(process.env.REACT_APP_AWS_REGION);
// console.log(process.env.REACT_APP_AWS_APPSYNC_GRAPHQLENDPOINT);
// console.log(process.env.REACT_APP_AWS_APPSYNC_AUTHENTICATIONTYPE);
// console.log(process.env.REACT_APP_AWS_APPSYNC_APIKEY);
// console.log(process.env.REACT_APP_AWS_COGNITO_IDENTITY_POOL_ID);
// console.log(process.env.REACT_APP_AWS_USER_POOLS_ID);
console.log(process.env.REACT_APP_AWS_COGNITO_USERNAME_ATTRIBUTES);

function App() {
  return (
    <Authenticator>
      {({ signOut, user }: any) => (
        <main>
          <h1>Hello {user.username}</h1>
          <button onClick={signOut}>Sign out</button>
        </main>
      )}
    </Authenticator>
  );
}

export default App;
