## 프론트엔드(vite react) + 백엔드(node express)

## 목표 : 브라우저에서 서버에 request를 보내고 `CORS` 이슈 없이 응답에 성공하자.

- 백엔드 도메인 : `localhost:5090`
- 프론트엔드 도메인 : `localhost:5173`

---

#### 작동순서

1. 백엔드에서 api 요청을 받는 모듈을 작성.
2. `npm i cors` 후 `app.use(cors());` 사용.
3. 프론트엔드 브라우저의 버튼을 누르면 `localhost:5090/my`로 요청을 보냄.
4. 백엔드에서 응답하여 CORS 이슈 없이 브라우저 콘솔에서 확인 성공하기.

---

## 결과 : 성공!

![image](https://github.com/user-attachments/assets/391552fd-0b8d-49d8-a8a0-ff56776c9a90)

- 브라우저의 버튼을 누르면 콘솔에 `/my 라우터의 루트에요.` 출력됨.

- 브라우저 `localhost:5174` 에서 익스프레스서버 `localhost:5090`에 호출을 보내어 응답 성공 (`CORS 이슈` 스킵)

- `localhost:5174`로 실행된 이유 : vite 프로젝트를 서로 다른 콘솔에 두개 실행하여 하나는 포트 `5173`, 다음 하나는 `5174`에 실행됨.

---

#### 백엔드(express) 프로젝트 초기화

![image](https://github.com/user-attachments/assets/45ea7f8e-7fb5-40be-b00c-359260cf5550)

- npm i -y

- npm i express

- npm i -D @types/express nodemon

- npm i cors

- npm install

- npm run dev

---

#### 프론트엔드(vite) 프로젝트 초기화

![image](https://github.com/user-attachments/assets/007e91e0-4e8b-447e-a32d-d67ffe7408e3)


- npm create vite@latest

- npm i -D axios

- npm install

- npm run dev

---

#### 프론트엔드 : api 클라이언트 생성 (axios)

- const client = axios.create({ baseURL });

---
