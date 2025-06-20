# GetWellDetails PCF Control

This repository contains a simple PowerApps Component Framework (PCF) control
that renders a button labelled **"Get Well Details"**. When the button is
clicked it calls a JavaScript function named `getwelldata` from a CRM
web resource. The values of the `rpc_wellapi` and `rpc_wellnumber` fields are
retrieved from the form context and passed to the function.

The control can be used to trigger custom logic in a model driven app or
canvas app. Ensure that a function named `getwelldata` is available on the
page where the control is used.

## Build

Install dependencies and compile the TypeScript:

```bash
npm install
npm run build
```

The compiled files will be placed in the `dist` folder.

The root `controlManifest.input.xml` file describes the control for the
PowerApps build tools. The `build` script expects `pcf-scripts` to be
installed. If it is not available the build will fail with `pcf-scripts: not
found`.
