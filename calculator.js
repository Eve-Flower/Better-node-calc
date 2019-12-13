const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;
app.use(bodyParser.urlencoded({
    extended: true
}));
app.get('/', (req, res) => res.sendFile(__dirname + '/index.html'));


app.post('/', (req, res) => {

    let num1 = Number(req.body.num1);
    let num2 = Number(req.body.num2);
    let result = num1 + num2;
    res.send("The result is " + result + ".");
});

app.listen(port, () => console.log('port ' + port));


app.get('/bmi', (req, res) => res.sendFile(__dirname + '/bmiCalculator.html'));

app.post('/bmi', (req, res) => {
    let heightInp = Number(req.body.height);
    let weightInp = Number(req.body.weight);
    let heightCon = (heightInp * 0.025);
    let weightCon = (weightInp * 0.45);
    let heightsq = (heightCon * heightCon);
    let bmiresult = (weightCon / heightsq);
    res.send("your BMI is "+ bmiresult + ".");
});
