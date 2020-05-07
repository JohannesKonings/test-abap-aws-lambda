# test-abap-aws-lambda

# Usage

Run the command `npm run build` and than copy/paste the content of /dist/index.js into the lambda editor (runtime Node.js).

# local test

```sh
node -e 'console.log(require("./dist/index").handler())'
```

# based on

https://github.com/open-abap/cloudflare-abap-template