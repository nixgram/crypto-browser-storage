import {Injectable} from '@angular/core';
import * as CryptoJS from "crypto-js";
import {KEY} from "./KEY";

const SecureStorage = require("secure-web-storage");

@Injectable({
  providedIn: 'root'
})
export class CryptoLocalStorageService {

  private secureStorage = new SecureStorage(localStorage, {
    hash: function hash(key: any) {
      // @ts-ignore
      key = CryptoJS.SHA256(key, KEY);
      return key.toString();
    },

    encrypt: function encrypt(data: any) {
      data = CryptoJS.AES.encrypt(data, KEY);
      data = data.toString();
      return data;
    },

    decrypt: function decrypt(data: any) {
      data = CryptoJS.AES.decrypt(data, KEY);
      data = data.toString(CryptoJS.enc.Utf8);
      return data;
    },
  });


  // Set local storage data via key
  public setCache(key: string, data: any): void {

    try {
      if (data) {
        this.secureStorage.setItem(key, data);
      } else {
        console.log(`Something went wrong to set ${key} cached`);
      }
    } catch (error) {
      console.log(`Error : "${key}" Set Cache:`, error);
    }
  }

  // Get local storage  data via key
  public getCache(key: string) {
    try {
      return this.secureStorage.getItem(key);
    } catch (error) {
      console.log(`Error To Get ${key} Cache Data:`, error);
    }
  }


  // Remove stored local storage data via key
  public removeCacheByKey(key: string) {
    try {
      this.secureStorage.removeItem(key);
    } catch (error) {
      console.log(`Error To Remove ${key} Cache Data:`, error);
    }
  }

  // It remove all local storage stored data
  public clearAllCache() {
    localStorage.clear();
  }

}
