const axios = require('axios').default;


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
            res.json(cosas)
        })
        .catch((err) => {
            res.json(err)
        })  
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Server Error"
        })
    }
}




module.exports = {
    test,
}