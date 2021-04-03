const express = require('express')
const app = express()
const port = 5000
const fs = require('fs');

app.get('/:filename', (req, res) => {
    let ext = '';
    if(req.params.filename.indexOf('.') == -1){
        ext = '.json';
    }

    let file_content = fs.readFileSync(req.params.filename + ext);
    res.send(JSON.stringify(JSON.parse(file_content)));
});

app.listen(port, () => {
  console.log(`Fakeserver is listening at http://localhost:${port}`)
})