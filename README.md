# Crypto Browser Storage
☢ A simple package for secure local storage data by encryption using Crypto.JS. Project generated with angular version ```12.2.0```, sou must need an Angular Project ( ``version >= 12.2.x`` )

## How to use
* Use ``npm i crypto-browser-storage``
* Inject to your component or service as Dependency Injection
* Then you will be able to access `crypto-browser-storage`'s library functions, 
    -   setCache
    -   getCache
    -   removeCacheByKey
    -   clearAllCache

<br>

## Angular Compatibility Version

- For `ng v12.x.x` use `npm i crypto-browser-storage@1.0.3`
- For `ng v14.x.x` use `npm i crypto-browser-storage@1.1.4`
- For `ng v15.x.x` use `npm i crypto-browser-storage@2.0.0`

<br>

## Sample Code Snippet
<br>


````
import { CryptoBrowserStorageService } from 'crypto-browser-storage';

export class AppComponent {

constructor(private cache: CryptoBrowserStorageService) {}


    tests() {
    
    this.cache.setCache("Posts1", [{"id": 1, "name": "Sample"}]);
    this.cache.setCache("Posts2", ["id", "name", "Sample"]);
    this.cache.setCache("Posts3", 3);
    this.cache.setCache("Posts5", {"id": 4, "name": "Sample"});
    
    // this.cache.removeCacheByKey("Posts1")
    
    console.log(this.cache.getCache("Posts1"))
    console.log(this.cache.getCache("Posts2"))
    console.log(this.cache.getCache("Posts3"))
    console.log(this.cache.getCache("Posts5"))

    this.cache.clearAllCache();
    
    }

}
````
### End result of the following ``tests()`` method is bellow,
<br>

![Screenshot 2021-10-30 204648](https://user-images.githubusercontent.com/37630292/139538058-0fa32585-bc84-4518-b6e9-cec7d38545a8.png)

![Screenshot 2021-10-30 205713](https://user-images.githubusercontent.com/37630292/139538317-9e63a3fd-fe0a-406e-9573-a215bf56a30d.png)
