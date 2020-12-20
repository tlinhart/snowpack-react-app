# Starter React app using Snowpack CSA

See https://www.snowpack.dev/tutorials/react for more details.

Create new project from template:
```bash
npx create-snowpack-app snowpack-react-app --template @snowpack/app-template-react --use-yarn
```

See https://github.com/snowpackjs/snowpack/tree/main/create-snowpack-app for all the templates.

```bash
cd snowpack-react-app
```

Add [serve](https://www.npmjs.com/package/serve):
```bash
yarn add serve --dev
```

Add script for serving `build/` folder to `package.json`:
```diff
  {
    "scripts": {
      ...
+     "serve": "serve build"
    },
    ...
  }
```

Available scripts:
- `yarn start` - Run the app in the development mode on http://localhost:8080.
- `yarn build` - Build a static copy of the app to the `build/` folder.
- `yarn test` - Launch the application test runner.
- `yarn format` - Format the code in-place using Prettier.
- `yarn lint` - Check the code if it conforms to the Prettier code style.
- `yarn serve` - Run the app from the `build/` folder.
