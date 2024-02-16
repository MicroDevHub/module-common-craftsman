# Module-Common-Craftsman

A Package written by NodeJS which provide common features used in services

### Feature

1. Error handler for services
2. Custom logger to monitor services
3. Custom ESLint - ensure JS/TS code follows code conventions

## How to use Module-Common-Craftsman
### Error-Handler

1. Initialize express application: 
```
server: Express = express();
```
2. Import `errorHandler` from `@micro-dev-hub/module-common-craftsman`: 
```
import { errorHandler } from '@micro-dev-hub/module-common-craftsman';
```
3. Use `errorHandler` in express application
```
express.use(errorHandler);
```
> **Note:** make sure errorHandler middleware is added after routes in the express application
4. Import and use `api-response-errors`

Example use `validateRequest`:
```
import express, { Request, Response } from "express";
import { body } from "express-validator";

import { validateRequest } from "@micro-dev-hub/module-common-craftsman";

const router = express.Router();

router.post(
    "/api/login",
    [
        body("username")
            .not()
            .isEmpty()
            .withMessage("Username is required"),
        body("password")
            .not()
            .isEmpty()
            .withMessage("Password is required"),
    ],
    validateRequest,
    async (req: Request, res: Response) => {
        // TODO: login logic
    }
);

export { router }
```

Example to use `NotFoundRoutingError`
```
import { NotFoundRoutingError } from '@micro-dev-hub/module-common-craftsman';

server.all("*",  () => {
    throw new NotFoundRoutingError();
});
```
### Logger

1. Import `ILogger, LoggerFactory` from `@micro-dev-hub/module-common-craftsman`
```
import { ILogger, LoggerFactory } from '@micro-dev-hub/module-common-craftsman';
```
2. Initialize logger
```
const logger: ILogger = new LoggerFactory().logger;
```
3. Use logger
```
logger.info('message');
logger.error('message');
logger.warn('massage);
logger.http('massage');
logger.debug('massage');
```
### ESLint

1. Add ESLint scripts to `package.json`
```
{
    "lint": "eslint --config ./node_modules/@micro-dev-hub/module-common-craftsman/.eslintrc.js './**/*.{js,ts}'",
    "lint:fix": "eslint --config ./node_modules/@micro-dev-hub/module-common-craftsman/.eslintrc.js --fix './**/*.{js,ts}'",
}
```
2. Use scripts to lint application
```
# Analyze all ts/js files in application to find out lint error

npm run lint

# Analyze and fix lint error all ts/js files in application

npm run lint:fix
```

In case you want to extends/override the rules of eslint
1. Create `.eslintrc.js` and extends rules of eslint from module-common-craftsman
```
module.exports = {
  "extends": "./node_modules/@micro-dev-hub/module-common-craftsman/.eslintrc.js",
  "rules": {
    // Add or override rules specific to your backend project
  }
}
```
2. Add scripts to `package.json`
```
{
    "lint": "eslint './**/*.{js,ts}'",
    "lint:fix": "eslint --fix './**/*.{js,ts}'"
}
```
> **Note:** These scripts will scan all file js, ts in your project. So if you want to ignore folder or file you can extend script with `--ignore-pattern `


For example, to ignore `folderToExclude` and its files, use:
```json
"lint": "eslint --config ./node_modules/@micro-dev-hub/common-module-craftsman/.eslintrc.js \"./**/*.{js,ts}\" --ignore-pattern '**/folderToExclude/**'"
```

For example, to ignore `folderToExclude` and `fileToExclude.ts`, use:
```json
"lint": "eslint --config ./node_modules/@micro-dev-hub/common-module-craftsman/.eslintrc.js \"./**/*.{js,ts}\" --ignore-pattern '**/folderToExclude/fileToExclude.ts'"