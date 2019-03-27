# :fire: Firebase Cloud Functions :fire:

Cloud Functions for Firebase lets you automatically run backend code in response to events triggered by Firebase features and HTTPS requests. Your code is stored in Google's cloud and runs in a managed environment. There's no need to manage and scale your own servers.

https://firebase.google.com/docs/functions/

## Getting Started :sunglasses:

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### :one:Set up Node.js and the Firebase CLI
Cloud Functions can run on either Node v6, or Node v8. If you have existing functions built on Node v6 you can continue to use that version (v6 is default). See Set runtime options to learn more

### :two:Initialize Firebase SDK for Cloud Functions
When you initialize Firebase SDK for Cloud Functions, you create an empty project containing dependencies and some minimal sample code, and you choose either TypeScript or JavaScript for composing functions.

### :three:Import the required modules and initialize an app
After you have completed the setup tasks, you can open the source directory and start adding code as described in the following sections

## Environment Variables
#### Local :large_blue_circle:
Create a .runtimeconfig.json file with the following values
~~~~
{
  "gmail": {
    "email": "<YOUR GMAIL>",
    "password":"<YOUR PASSWORD>"
  }
}
~~~~

#### Production :large_orange_diamond:
~~~~
firebase functions:config:set someservice.key="THE API KEY" someservice.id="THE CLIENT ID"
~~~~
https://firebase.google.com/docs/functions/config-env
