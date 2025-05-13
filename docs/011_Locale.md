## 다국어 적용

- template 안에서는 $t(langKey) 형식으로 사용

```html
{{ $t('email') }}
```

## 언어 변경

```typescript
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n({ useScope: 'global' })
locale.value = 'en' // 언어변경
```
