const companyKey = 'iUOgOX0UM232SvQjYD25jJrYz2oMBCVlh2152KHS';
const apiKey = 'eHyJhyCuVpI7NZVciQYWRmznWJWZ49YLIvEf2INxvAET2DimdgQrbp2IvcY1pIwMNxGrMTXXSpR';
const url = 'http://api.hrworkz.com//v3/messenger/checkaccount';
const messenger_id = "4916919225875asd08"
const axios = require('axios')
const qs = require('qs');
const params = {
    company_key: companyKey,
    api_key: apiKey,
    messenger_id: messenger_id
};
const postRequest = (req, res) => {

    axios.post(url, qs.stringify(params))
        .then((respond) => {

          
            res.send(respond.data)
        })
        .catch((error) => {
            console.error(error)
        })
}

exports.postRequest = postRequest