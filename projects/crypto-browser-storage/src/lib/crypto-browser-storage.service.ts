import { Inject, Injectable, InjectionToken } from '@angular/core';
import * as CryptoJS from "crypto-js";
import { SecureStorage } from './secure-storage';
export const CRYPTO_HASH_KEY = new InjectionToken<string>('CRYPTO_HASH_KEY');

@Injectable({
  providedIn: 'root'
})
export class CryptoBrowserStorageService {

  cryptoHashKey!:string;

  constructor(@Inject(CRYPTO_HASH_KEY) cryptoHashKey:string ){
    this.cryptoHashKey=cryptoHashKey;
  }

  private secureStorage = new SecureStorage(localStorage, {
    KEY : this.cryptoHashKey,
    hash: function hash(key: any) {
      key = CryptoJS.SHA256(key, this.KEY);
      return key.toString();
    },

    encrypt: function encrypt(data: any) {
      data = CryptoJS.AES.encrypt(data, this.KEY);
      data = data.toString();
      return data;
    },

    decrypt: function decrypt(data: any) {
      data = CryptoJS.AES.decrypt(data, this.KEY);
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
