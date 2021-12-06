const axios = require('axios').default;

const ENZONA_bridge = async (req, res) => {
    try {
        process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
        const {url, body, credential} = req.body;
        const bodyObjs = JSON.parse(body);
        const data = `${credential.key}:${credential.secret}`;
        const buff = Buffer.from(data, "utf8");
        const base64data = buff.toString('base64');
        const params = new URLSearchParams()
        params.append('grant_type', 'client_credentials')
        params.append('scope', 'am_application_scope enzona_business_payment')
        const config1 = {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded', 'Authorization': `Basic ${base64data}`
            }
          }
         
        await axios.post('https://apisandbox.enzona.net/token',params,config1)
        .then(async (result) => {
            const config2 = {
                headers: {
                    'Accept': 'application/json','Content-Type': 'application/json','Authorization':`Bearer ${result.data.access_token}`
                }
              } 
            await axios.post(url,bodyObjs,config2)
            .then((result) => {
                res.json(result.data)
            
            })
            .catch((err) => {
                res.json(err)
            })
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

const ENZONA_bridge_unbody = async (req, res) => {
    try {
        process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
        const {url, credential} = req.body;
        const data = `${credential.key}:${credential.secret}`;
        const buff = Buffer.from(data, "utf8");
        const base64data = buff.toString('base64');
        const params = new URLSearchParams()
        params.append('grant_type', 'client_credentials')
        params.append('scope', 'am_application_scope enzona_business_payment')
        const config1 = {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded', 'Authorization': `Basic ${base64data}`
            }
          }
         
        await axios.post('https://apisandbox.enzona.net/token',params,config1)
        .then(async (result) => {
            const config2 = {
                headers: {
                    'Authorization':`Bearer ${result.data.access_token}`
                }
              } 
            console.log(config2)
            await axios.post(`https://apisandbox.enzona.net/payment/v1.0.0/payments/9e0942c10157494383326ff79709f234/complete`,{ headers: {'Authorization': 'Bearer 806ac2b5-eeca-3948-814d-409bc940ec77'}})
            .then((result) => {
                console.log(result)
                res.json(result.data)
            
            })
            .catch((err) => {
                res.json(err)
            })
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
    ENZONA_bridge,
    ENZONA_bridge_unbody
}