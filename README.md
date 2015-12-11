# auk-language

```yaml
common:
    availableLanguages: [en, fr]
```


```js
import Koa from 'koa';
import config from 'auk-config';
import language from 'auk-language';

const app = new Koa();
config(__dirname + '/config')(app);
language(app);
```
