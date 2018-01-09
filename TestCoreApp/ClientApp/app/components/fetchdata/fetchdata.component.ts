import { Component, Inject } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    selector: 'fetchdata',
    templateUrl: './fetchdata.component.html'
})
export class FetchDataComponent {
    public products: Product[];

    constructor(http: Http, @Inject('BASE_URL') baseUrl: string) {
        http.get(baseUrl + 'api/Products').subscribe(result => {
            this.products = result.json() as Product[];
        }, error => console.error(error));
    }

   
}

interface Product {
    productId: string;
    name: number;
    color: number;
    listPrice: string;
}
