const axios = require('axios').default;
var sha512 = require('js-sha512').sha512;
const date = require('date-and-time');

const test = async (req, res) => {
    try {
        process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
        
        const data = {
            "request": 
                         {
                           "Amount": 1,
                "Phone": "5352880000",
                "Currency": "CUP", 
                "Description": "test",
                "ExternalId": "1478", 
                "Source": "12",
                "UrlResponse": "http://localhost:24359/RestExternalPayment.svc/notification",
                "ValidTime": "1"
            }
        }
        ;
         
        const config1 = {
            headers: {
                'Accept': 'application/json','Content-Type': 'application/json'
            }
          };
        await axios.post('https://200.13.144.60:15001/RestExternalPayment.svc/payOrder',data,config1)
        .then(async (result) => {
            const cosas = result
            console.log(cosas)
            res.json(cosas.data)
        })
        .catch((err) => {
            console.log(err)
            res.status(500).json({
                message: "Server Error"
            })
        })  
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Server Error"
        })
    }
}

const TRANSFERMOVIL_bridge = async (req, res) => {
    try {
        process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
        const {url, body, credential} = req.body;
        const now = new Date();
        const datenow = date.format(now, 'DMYYYY')
        const bodyObjs = JSON.parse(body);
        const data = sha512(`${credential.user}${datenow}externalpayment${credential.source}`);
        const buff = Buffer.from(data, "utf8");
        const base64data = buff.toString('base64')
        const config1 = {
            headers: {
                'Accept': 'application/json','Content-Type': 'application/json', 'username': `${credential.user}`, 'source': `${credential.source}`, 'password': `${base64data}`
            }
          }
         
        await axios.post(url,bodyObjs,config1)
        .then(async (result) => {
            console.log(result)
            res.json(result.data)
        })
        .catch((err) => {
            console.log(err)
            res.status(500).json({
                message: "Server Error"
            })
        })  
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Server Error"
        })
    }
}

const TRANSFERMOVIL_bridge_unbody = async (req, res) => {
    try {
        process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
        const {url, body, credential} = req.body;
        const now = new Date();
        const datenow = date.format(now, 'DMYYYY')
        const data = sha512(`${credential.user}${datenow}externalpayment${credential.source}`);
        const buff = Buffer.from(data, "utf8");
        const base64data = buff.toString('base64')
        const config1 = {
            headers: {
                'Accept': 'application/json','Content-Type': 'application/json', 'username': `${credential.user}`, 'source': `${credential.source}`, 'password': `${base64data}`, 
            }
          }
        console.log(body)
        console.log(base64data)
        console.log(url)
        await axios.post(url,body,config1, {
            auth: {
              username: `${credential.user}`,
              password: `${base64data}`
            }
          })
        .then(async (result) => {
            console.log(result)
            res.json(result.data)
        })
        .catch((err) => {
            console.log(err)
            res.status(500).json({
                message: "Server Error"
            })
        })  
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Server Error"
        })
    }
}

const complete = async (req, res) => {
    const {Source, BankId, TmId, Phone, Msg, ExternalId, Status, Bank} = req.body
    res.json({
        "Success": true,
        "Resultmsg": "Mensaje ok",
        "Status": 1
    })
}

module.exports = {
    test,
    TRANSFERMOVIL_bridge,
    TRANSFERMOVIL_bridge_unbody,
    complete
}