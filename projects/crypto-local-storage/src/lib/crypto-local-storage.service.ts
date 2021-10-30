import {Injectable} from '@angular/core';
import * as CryptoJS from "crypto-js";

const SecureStorage = require("secure-web-storage");
const SECRET_KEY = "A key is define here";


@Injectable({
  providedIn: 'root'
})
export class CryptoLocalStorageService {

  private secureStorage = new SecureStorage(localStorage, {
    hash: function hash(key: any) {
      // @ts-ignore
      key = CryptoJS.SHA256(key, SECRET_KEY);
      return key.toString();
    },

    encrypt: function encrypt(data: any) {
      data = CryptoJS.AES.encrypt(data, SECRET_KEY);
      data = data.toString();
      return data;
    },

    decrypt: function decrypt(data: any) {
      data = CryptoJS.AES.decrypt(data, SECRET_KEY);
      data = data.toString(CryptoJS.enc.Utf8);
      return data;
    },
  });

  public setCache<T>(key: string, data: T): void {
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

  public getCache(key: string) {
    try {
      return this.secureStorage.getItem(key);
    } catch (error) {
      console.log(`Error To Get ${key} Cache Data:`, error);
    }
  }

  public resetCache(key: string): void {
    try {
      this.secureStorage.setItem(key, null);
    } catch (error) {
      console.log(`Error To Reset ${key} Cache Data:`, error);
    }
  }

  public clearCacheDataByKey(key: string) {
    try {
      this.secureStorage.removeItem(key);
    } catch (error) {
      console.log(`Error To Remove ${key} Cache Data:`, error);
    }
  }


}
