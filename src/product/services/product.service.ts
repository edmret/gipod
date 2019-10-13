import mockProduct from './product.mock'
import { url } from 'inspector';


export class ProductService {
    urlPlans = 'https://nomadscatalogs.azurewebsites.net/api/v1/Catalogos/GetMobileInformationByIMEI?IMEI=015573066682211';
    
    async getPhoneData() {

        /*const data = await fetch(this.urlPlans);

        console.log(data);*/

        return mockProduct;
    }

}