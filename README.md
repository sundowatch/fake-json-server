# Fake JSON Server
Basically serve your JSON files on localhost

## Installation

```shell
npm install
```

## Usage

Start the server with:
```
npm start
```

Create a json file within a folder or in the root path, then call it by writing its name ```http://localhost/sample``` .(```http://localhost/sample.json``` is accepted)


### Different Ports
If you want to use different port rather than 5000, just change this line in index.js
```javascript
const port = 5000
```
