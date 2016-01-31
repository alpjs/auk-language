'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = aukLanguage;

var _objectProperties = require('object-properties');

/**
 * @function
 * @param app
*/function aukLanguage(app) {
    const config = app.context.config;
    const availableLanguages = config.get('availableLanguages');
    if (!availableLanguages) {
        throw new Error('Missing config "availableLanguages"');
    }

    (0, _objectProperties.defineLazyProperty)(app.context, 'language', /**
                                                                        * @function
                                                                       */function () {
        return this.acceptsLanguages(availableLanguages);
    });
}
//# sourceMappingURL=index.js.map