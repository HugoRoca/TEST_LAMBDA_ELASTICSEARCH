"use strict";

const axios = require("axios");
const urlES = "https://vpc-es-sbsearch-qa-6lqloaf2kfljixcaekbyqxu2aa.us-east-1.es.amazonaws.com";

exports.handler = async (event, context) => {
    try {
        console.log("se imprime el event", event);
        const response = await axios.get(urlES);
        console.log("respuesta de petición", response.data);
    } catch (error) {
        console.error(error);
    }
}
