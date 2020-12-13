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

Disable HMR + Fast Refresh otherwise we get this error:
```
Unhandled Runtime Error
Uncaught ReferenceError: $RefreshSig$ is not defined
```

Uninstall the Fast Refresh plugin:
```bash
yarn remove @snowpack/plugin-react-refresh
```

Remove it from the `snowpack.config.js`:
```diff
  module.exports = {
    ...
-   plugins: ['@snowpack/plugin-react-refresh', '@snowpack/plugin-dotenv'],
+   plugins: ['@snowpack/plugin-dotenv'],
    ...
  };
```

Remove  HMR from the `src/index.jsx`:
```diff
  // Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
  // Learn more: https://www.snowpack.dev/concepts/hot-module-replacement
+ /*
  if (import.meta.hot) {
    import.meta.hot.accept();
  }
+ */
```

Available scripts:
- `yarn start` - Run the app in the development mode on http://localhost:8080.
- `yarn build` - Build a static copy of the app to the `build/` folder.
- `yarn test` - Launch the application test runner.
- `yarn format` - Format the code in-place using Prettier.
- `yarn lint` - Check the code if it conforms to the Prettier code style.
