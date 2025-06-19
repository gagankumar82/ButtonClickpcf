# GetWellDetails PCF Control

This repository contains a simple PowerApps Component Framework (PCF) control
that renders a button labelled **"Get Well Details"**. When the button is
clicked it attempts to execute a global JavaScript function named
`getwelldata`.

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
