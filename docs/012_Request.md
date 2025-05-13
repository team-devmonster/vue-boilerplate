## API 요청

- 반드시 `async` 함수 내에서 사용
- `await` 혹은 `Promise` 형식으로 구성 (`await` 추천)

```typescript
// 예시
const d: Article[] = await request({
  url: `/cmnt/notice/retrieveNotice/${starCd}`,
})
```

### Option Object

| 옵션명 | 형식   | 기본값 | 예시                          | 설명                                                       |
| ------ | ------ | ------ | ----------------------------- | ---------------------------------------------------------- |
| url    | string | null   | /cmnt/notice/retrieveNotice/1 | 요청 대상 URL(없을 경우 에러 발생)                         |
| method | string | GET    | POST                          | 요청 HTTP Method                                           |
| params | object | null   | { starCd: 351 }               | 요청 데이터 (method가 `GET`일 경우, query string으로 적용) |
