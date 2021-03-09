import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  register(data: any){
    return this.http.post(environment.apiUrl+'register', data).pipe(response => response);
  }

  changePassword(data: any){
    return this.http.post(environment.apiUrl+'change-password', data).pipe(response => response);
  }

  activateAccount(key: string){
    return this.http.get(environment.apiUrl+'activate?key='+key).pipe(response => response);
  }

  getReseaux(){
    return this.http.get('/assets/jsons/reseauAgence.json').pipe(response => response);
  }
  checkUser(data: any){
    return this.http.post(environment.apiUrl+'account/check', data).pipe(response => response);
  }

  get encryptMethodLength() {
       var encryptMethod = this.encryptMethod;
       // get only number from string.
       var aesNumber = encryptMethod.match(/\d+/)[0];
       return parseInt(aesNumber);
   }// encryptMethodLength

  get encryptMethod() {
       return 'AES-256-CBC';
   }// encryptMethod

   encrypt(str: string, key: string) {
     var iv = CryptoJS.lib.WordArray.random(16);// the reason to be 16, please read on `encryptMethod` property.

     var salt = CryptoJS.lib.WordArray.random(256);
     var iterations = 999;
     var encryptMethodLength = (this.encryptMethodLength/4);// example: AES number is 256 / 4 = 64
     var hashKey = CryptoJS.PBKDF2(key, salt, {'hasher': CryptoJS.algo.SHA512, 'keySize': (encryptMethodLength/8), 'iterations': iterations});

     var encrypted = CryptoJS.AES.encrypt(str, hashKey, {'mode': CryptoJS.mode.CBC, 'iv': iv});
     var encryptedString = CryptoJS.enc.Base64.stringify(encrypted.ciphertext);

     var output = {
         'ciphertext': encryptedString,
         'iv': CryptoJS.enc.Hex.stringify(iv),
         'salt': CryptoJS.enc.Hex.stringify(salt),
         'iterations': iterations
     };

     return CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(JSON.stringify(output)));
     }// encrypt


}
