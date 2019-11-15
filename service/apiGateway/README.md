# Shopback Node.js Code Challenge
## How to start
Install all dependencied package, run
```
npm install
```
### Node Server

For run a node server, use
```
npm start
```

### Dev Server
For run a dev server with nodemon, ues
```
npm run dev
```

### Unit Test
For run a unit test, use
```
npm test
```

### Request File I/O
For request file IO example, run
```
npm run requestFileIOExample
```
And default output folder is in ./example/express/readRequestFile/output


You can also change the input and output path in ./example/express/readRequestFile/index.js
Â
```
const inputPath = './example/express/readRequestFile/input/postResource.json';
const outputPath = './example/express/readRequestFile/output/postResource.json';
```

## Config Transform Rules
You easily change your json file of rules in "./middleware/config"

For example, for Rule 4:
```
4. If this HTTP method is GET and path is match /shopback/api/*, please add From in the header and the value is hello@shopback.com.
```

The config will be:
```
{
  "condition": {
    "method": "GET",
    "url": "/shopback/api/.*"
  },
  "commit": {
    "headers": {
      "from": "hello@shopback.com"
    }
  }
},
```
Note that "commit" will add the value even it is not in the request.

For Rule 6:
```
If this HTTP method is POST/PUT, please check if X-SHOPBACK-AGENT exists in header. Throw an error if not existing.
```
The config will be:
```
{
  "condition": {
    "method": "POST"
  },
  "expect": {
    "headers": {
      "x-shopback-agent": ".*"
    }
  }
},
{
  "condition": {
    "method": "PUT"
  },
  "expect": {
    "headers": {
      "x-shopback-agent": ".*"
    }
  }
}
```
Note that ".*" means any value is valid. And if the req.headers is not match the "expect.headers", it will return an error object and response with status code 400 and message.

For Rule 2:
```
If this HTTP method is GET and path is /shopback/me, please check if sbcookie Cookie exists in header. Throw an error if not existing.
```
It's config is in cookie.json 
```
{
  "verifyCookieRules": [
    {
      "condition": {
        "method": "GET",
        "url": "/shopback/me"
      },
      "expect": {
        "cookies": {
          "sbcookie": ".*"
        }
      }
    }
  ]
}
```
Since I asumming that users didn't use cookie-parser for express middleware.

For Rule 9, 
```
This library should add X-SHOPBACK-TIMESTAMP in the header for all HTTP requests, the value is current timestamp.
```
which is implemented in ./middleware/header.js


Because the timestamp is always change by time, users can't write the static value into config file.

## Files Hierarchy
```
|-- shopback
    |-- .gitignore
    |-- README.md
    |-- package-lock.json
    |-- package.json
    |-- example
    |   |-- express
    |       |-- readRequestFile
    |       |   |-- fileUtils.js
    |       |   |-- index.js
    |       |   |-- requestFileHandler.js
    |       |   |-- input
    |       |   |   |-- postResource.json
    |       |   |   |-- postResource.yaml
    |       |   |-- output
    |       |       |-- postResource.json
    |       |-- server
    |           |-- app.js
    |           |-- index.js
    |           |-- routes.js
    |-- middleware
    |   |-- common.js
    |   |-- cookie.js
    |   |-- header.js
    |   |-- index.js
    |   |-- path.js
    |   |-- config
    |   |   |-- common.json
    |   |   |-- cookie.json
    |   |   |-- path.json
    |   |-- utils
    |       |-- index.js
    |-- test
        |-- common.js
        |-- cookie.js
        |-- header.js
        |-- path.js
```

## All Rules
1. If this HTTP method is GET and path is /shopback/resource​​, please modify path to /shopback/static/assets
2. If this HTTP method is GET and path is /shopback/me, please check if sbcookie Cookie exists in header. Throw an error if not existing.
3. If this HTTP method is GET, please check if referer header is belong to www.shopback.com. Throw an error if it is invalid.
4. If this HTTP method is GET and path is match /shopback/api/*, please add From in the header and the value is hello@shopback.com.
5. If this HTTP method is POST/PUT, please remove all the url query string.
6. If this HTTP method is POST/PUT, please check if X-SHOPBACK-AGENT exists in
header. Throw an error if not existing.
7. If this HTTP method is POST/PUT, please check if Content-Type exists in header and
the value should be “application/json”. Throw error if it is invalid.
8. If this HTTP method is DELETE, please check if X-SHOPBACK-AGENT exists in
header and the value should be “AGENT_1” only. Throw error if it is invalid.
9. This library should add X-SHOPBACK-TIMESTAMP in the header for all HTTP
requests, the value is current timestamp.
10. This library only handles the domain from www.shopback.com. Throw an error if it is
invalid.