## 프론트엔드(vite react) + 백엔드(node express)

## 목표 : 브라우저에서 서버에 request를 보내고 `CORS` 이슈 없이 응답에 성공하자.

---

#### 작동순서

1. api 요청을 받는 모듈을 작성.

2. 프론트엔드에서 요청을 보냄

3. CORS 에러 없이 반환에 성공.

---

#### 백엔드(express) 프로젝트 초기화

npm i -y

npm i express

npm i -D @types/express nodemon

npm i cors

npm install

npm run dev

---

#### 프론트엔드(vite) 프로젝트 초기화

npm create vite@latest

npm i -D axios

npm install

npm run dev

---

#### 프론트엔드 : api 클라이언트 생성 (axios)

const client = axios.create({ baseURL });

---
