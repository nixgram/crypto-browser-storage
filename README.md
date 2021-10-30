# Crypto Browser Storage
☢ A simple package for secure local storage data by encryption using Crypto.JS

## How to use
* Must need an Angular Project ( ``version >= 12.x.x`` )
* Use ``npm i crypto-browser-storage``
* Inject your Component or Service as Dependency Injection
* Then you will be able to access `crypto-browser-storage`'s library function to set, retrieve & many more.

## Sample Code Snippet

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
End result of the following ``tests()`` method is bellow,

![Screenshot 2021-10-30 204648](https://user-images.githubusercontent.com/37630292/139538058-0fa32585-bc84-4518-b6e9-cec7d38545a8.png)

![Screenshot 2021-10-30 205713](https://user-images.githubusercontent.com/37630292/139538317-9e63a3fd-fe0a-406e-9573-a215bf56a30d.png)
