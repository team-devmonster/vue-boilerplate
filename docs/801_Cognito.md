https://medium.com/better-programming/how-to-aws-cognito-sign-in-with-slack-85430aba6cc1

## Cognito + Slack

✅ 백엔드(Spring Boot)에서 할 일
Slack OAuth 연동 엔드포인트 (Authorization Code 받기)

Slack 사용자 정보 조회

사용자 정보로 OIDC 토큰 생성

이 토큰을 AWS Cognito에 넘기기 위한 OIDC Provider 역할

→ 이 부분은 AWS Lambda로 옮겨도 되고, Spring Boot 내에서 처리해도 가능함 (보안/유지보수 고려)

✅ Cognito 설정
User Pool 생성

커스텀 OIDC Provider 추가
(Spring Boot나 Lambda에서 노출한 .well-known/openid-configuration 사용)

App Client 설정 + Slack 로그인 허용

Hosted UI → 리디렉션 URL Vue 프론트엔드로 지정

✅ 프론트엔드(Vue 3)에서 할 일
"Slack으로 로그인" 버튼 → Cognito Hosted UI로 리다이렉트

로그인 후 Cognito에서 받은 토큰 처리

id_token 디코딩해서 사용자 정보 추출

필요시 백엔드에 사용자 등록 API 호출

✅ AWS ECS 기준 배포 팁
Spring Boot, Vue 3 각각 Dockerize

ECS에서 각각 Task Definition 따로 분리 가능

Vue는 정적 호스팅(S3 + CloudFront) 또는 Nginx 컨테이너로도 가능

Secrets Manager를 통해 Slack Client ID/Secret 보안 관리하면 깔끔

### 확인사항

- 로컬: 테스트 환경 구성
  - url 상이(Gateway, Cognito 등 설정 확인)
