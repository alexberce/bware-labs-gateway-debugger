## BwareLabs Gateway Debugger

The relevant code for this application is [in this file](/src/modules/bware-labs/crons/transactions-processor.cron.ts), more specifically `processBlockTransactions` function.

## 1. Requirements

Before starting, make sure you have the minimum requirements on your workstation.

- An up-to-date release of Node.js and npm

## 2. Setup
2.1. Install the dependencies.

```bash
$ npm ci
 ```

2.2. Make a copy of the example environment variables file.

On Linux systems:
```bash
$ cp .env.example .env
```
On Windows:
```powershell
copy .env.example .env
```

2.3. Configure your environment variables in the newly created `.env` file.

> The only variable you need to add a value for is BLAST_API_GATEWAY_URL

## 3. Run the app
```bash
# watch mode
$ npm start:dev
```