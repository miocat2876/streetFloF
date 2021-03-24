import React from 'react';
import axios from 'axios';

const urlList = {
    login : {url: 'http://3.35.140.126:9000/apis/securitys/login', method: 'POST'},
}

const Api = (param:any) => {
    const {params, apiname} = param;
    let apiParam = urlList[apiname];
    apiParam.data = params;

    console.log(params);

    return axios(apiParam);
}

export default Api;


