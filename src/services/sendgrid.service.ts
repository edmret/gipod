export const sendMail = (message: string) => {
    console.log("sending email " + message);
}

export const sendSurveyEmail = (to: string) => {

    const url = "https://nomadscatalogs.azurewebsites.net/api/v1/Mail/SendSurveyInvite";
    
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(to)
    };

    return new Promise((resolve, reject) => {
        return fetch(url, options)
            .then((response) => {
              return resolve(response);
            })
            .then((responseJson) => {
              return resolve(responseJson);
            })
            .catch((error) => {
              return reject(error);
            });
    });
}