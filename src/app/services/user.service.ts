import { Injectable } from '@angular/core';
import { HttpClient } from './config/http-client.service';
import { CONFIG } from './config/config.constant';
import 'rxjs/add/operator/map';

@Injectable()

export class UserService {
    private url: string = CONFIG.url;
    
    constructor(private http: HttpClient) {

    }
    getUsers(){
        let ruta = `${this.url}/users`
        return this.http.get(ruta)
                        .map(res=>res.json());
    }
}
