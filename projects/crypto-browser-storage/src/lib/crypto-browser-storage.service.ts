import { Injectable } from '@angular/core';
import * as CryptoJS from "crypto-js";
import { KEY } from "./KEY";

const SecureStorage = require("secure-web-storage");

@Injectable({
  providedIn: 'root'
})
export class CryptoBrowserStorageService {

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


  /**
   * Set data to localstorage via key
   * @param {any} key:string
   * @param {any} data: any
   * @returns {void} void
   */
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


  /**
   * Get localstorage data via key
   * @param {any} key:string
   * @returns {any} any: number | string | object | array
   */
  public getCache(key: string) {
    try {
      return this.secureStorage.getItem(key);
    } catch (error) {
      console.log('Key not found in localstorage or maybe wrong key.');
    }
  }


  /**
   * It will remove stored local storage data via key
   * @param {any} key:string
   * @returns {void} void
   */

  public removeCacheByKey(key: string) {
    try {
      this.secureStorage.removeItem(key);
    } catch (error) {
      console.error('Key not found in localstorage or maybe wrong key.');
    }
  }


  /**
   * It behave like native localstorage clear() function. It will clear all cache including pre-existing localstorage data.
   * @returns {void} void
   */
  public clearAllCache() {
    localStorage.clear();
  }

}
