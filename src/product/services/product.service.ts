export class ProductService {
    urlPlans = 'https://nomadscatalogs.azurewebsites.net/api/v1/Catalogos/GetMobileInformationByIMEI?IMEI=015573066682211';
    
    async getPhoneData() {
        return await fetch(this.urlPlans).then(response => response.json());
    }
}