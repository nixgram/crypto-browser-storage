// var Generator = require('generate-js'); 

// @ts-ignore
import * as Generator from 'generate-js';

export const SecureStorage = Generator.generate(
    function SecureStorage(storage:any, options:any) {
        //@ts-ignore
        var _ = this;

        _.storage = storage;
        if (options) {
            _.hash = options.hash;
            _.encrypt = options.encrypt;
            _.decrypt = options.decrypt;
        }
    }
);

function through(data:any) {
    return data;
}

SecureStorage.definePrototype({
    hash: through,
    encrypt: through,
    decrypt: through,
}, {
    writable: true
});

SecureStorage.definePrototype({
    getItem: function getItem(key:any) {
        var _ = this;

        key = _.hash(key);

        var value = _.storage.getItem(key);

        if (typeof value !== 'string') {
            return value;
        }

        value = _.decrypt(value);

        return JSON.parse(value);
    },

    setItem: function setItem(key:string, value:string) {
        var _ = this;

        key = _.hash(key);

        value = JSON.stringify(value);

        value = _.encrypt(value);

        return _.storage.setItem(key, value);
    },

    removeItem: function removeItem(key:string) {
        var _ = this;

        key = _.hash(key);

        return _.storage.removeItem(key);
    },

    clear: function clear() {
        var _ = this;

        return _.storage.clear();
    },

    key: function key(id:any) {
        var _ = this;

        return _.storage.key(id);
    },

    length: {
        get: function getLength():any {
            var _ = this;
            // @ts-ignore
            return _.storage.length;
        }
    }
});

