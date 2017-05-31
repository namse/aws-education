# 마이크로서비스 아키텍처 이해하기

클라우드 서비스팀 남세현

---

# 저는
- 이것 저것 다양한 경험을 한 프로그래머
- Client, Front-end, Mobile Application
- Server, Back-end, Engine Programming, etc...
- Even low-level programming!
- 개발자의 시점을 더 잘 볼 수 있는 사람
- 클라우드 관련 업무에 어려움이 계시다면 연락주세요!
---

# MSA 이해하기 교육의 대상
- MSA에 대해 들어보지 못한 분
- MSA가 중요하다곤 하는데 왜 그런지 모르는 분
<br>

<span style="color:red">Q. 마이크로서비스에 대해서 들어보신 적이 있습니까?</span>

---

# 교육 진행

### MSA의 필요성이 왜 나타났는가?

- 기존 시스템에 무슨 문제점이 있었는가?
- MSA가 어떻게 그 문제점을 해결하는가?
- MSA의 도입이 가져온 새로운 특징들은 무엇인가?
<br>
MSA는 좋다, 무조건 좋다-같은 이야기를 하지 않습니다.
---

# 교육 진행 방향

### 기술을 ***이해*** 할 수 있는가?

* 배경, 숨겨진 것들을 알고 있어야 한다.
* 단순 암기로 당장은 뭐라도 할 수 있겠지만...
  * 응용을 할 수 없다.
  * 기술의 흐름을 탈 수 없다.

---

# 실습용 프로젝트 - Twitter Clone

트위터를 따라 만들어졌습니다.
- 로그인
- 글(트윗)쓰기

오늘 여러분들은 Twitter Clone의 개발자입니다.

---

# 실습용 프로젝트 - Twitter Clone

프로젝트 환경
- Javascript / NodeJS + MongoDB
- 잘 몰라도 괜찮습니다!
  - 저를 따라하시기만 하면 됩니다.
- 이 프로젝트는 ***허구로, 의도된*** 프로젝트입니다.
  - 교육을 위해 특정 부분을 과장한 면이 있습니다.

---

# 실습용 프로젝트 - Twitter Clone

필요한 소프트웨어 설치하기

- NodeJS
- Yarn

---

# NodeJS 설치
- https://nodejs.org/en/ 접속 및 설치
- 아무 버전이나 괜찮습니다. (가능하면 6.10.x LTS로)

---

# Yarn 설치
NodeJS의 패키지 매니저. Java의 Maven과 같은 역할.
- https://yarnpkg.com/lang/en/docs/install 접속 및 설치
- cmd 재실행
- `yarn` 명령어가 실행이 안될 경우 환경변수 `PATH`에 추가

---

# 실습용 프로젝트 - Twitter Clone

프로젝트 동작 확인하기

---

# 실습용 프로젝트 - Twitter Clone


오늘 여러분들은 Twitter Clone의 개발자입니다.


TODO:
* 로컬 로그인 기능 <-- 이것 먼저..!
* 로그 수집 시스템

---

# 실습용 프로젝트 - Twitter Clone

## TODO : 로컬 로그인 기능

### As is (현재)

- Github을 통한 Third Party Login

### To be

- 아이디/패스워드를 이용한 Local Login도 가능하도록

---

# 실습용 프로젝트 - Twitter Clone

## TODO : 로컬 로그인 기능

- 로그인 페이지에 추가
  - 아이디/패스워드 입력창
  - 회원가입 버튼
- 회원가입 페이지

---

# 실습용 프로젝트 - Twitter Clone

## 프로젝트 실행 방법

- cmd 실행 (윈도우키 + R / cmd)
- 소스코드 폴더까지 이동 (cd 명령어)
- cmd에 `npm start` 입력
- **코드 수정시 자동으로 재빌드 실행됨**

---

# 실습용 프로젝트 - Twitter Clone

## 코딩을 할 줄 알아야 하나요?
아니요. 전부 제공됩니다.

디렉토리: TODO/ 안에 있습니다.

---

# 실습용 프로젝트 - Twitter Clone

## TODO : 로컬 로그인 기능

- 로그인 페이지에 추가
  - 아이디/패스워드 입력창<span style="color:red"> <--처리중</span>
  - 회원가입 버튼
- 회원가입 페이지

---

# 실습용 프로젝트 - Twitter Clone

## TODO : 로컬 로그인 기능

- 로그인 페이지에 추가
  - 아이디/패스워드 입력창
  - 회원가입 버튼<span style="color:red"> <--처리중</span>
- 회원가입 페이지

---

# 실습용 프로젝트 - Twitter Clone

## TODO : 로컬 로그인 기능

- 로그인 페이지에 추가
  - 아이디/패스워드 입력창
  - 회원가입 버튼
- 회원가입 페이지<span style="color:red"> <--처리중</span>

---

# 개발 완료

그 이후 프로세스는

- 중앙 코드 관리소에 코드합병
- QA팀에서 테스트
- 운영팀에서 배포

---

# 빌드 진행중... 
# ...
# 4시간 후...

---

# ... 문제 발생!

---

# 옆 팀에서 연락이 왔어요!

코드베이스에 문제가 생김
- 공유 데이터가 꼬임
- 원래 기능이 제대로 동작하지 않는다고 함

---

# 누가 잘못했는가?

- 총 5개의 새로운 Commit(코드 수정 단위)이 올라옴
- 그 커밋을 올린 모든 팀들을 다 불러모아야 하나?
- 우린 잘못이 없는 것 같은데...ㅠㅠ

<span style="color:red">Q. 여러분들이라면 어떤 반응이 나올 것 같습니까?
어떻게 문제를 해결하시겠습니까?</span>

---

# 결국 고쳐서 올리는데...

- 커밋 충돌남
  - 서로 같은 파일을 수정해서, 충돌된 파일을 풀어줘야함
- 내가 고치는 사이에 다른 개발자들이 수정사항을 계속 올리기 때문
- 충돌 해결하고 올리는데 또 충돌나고...

---

# 어떤 문제들이 있었습니까?

---

# 이것이 ***모놀리식***의 일상인가요?

- 개발 업무에 있어서 당연한 것인가?
  - 어쩔 수 없으니 꾹 참고 넘어가야 하는 것인가?

---

https://www.slideshare.net/AmazonWebServices/introduction-to-microservices-74259780
4~10페이지 -> 13페이지


---

# MSA의 정의는 내리기 어렵습니다.

## 사람마다 생각하는 정의가 다르기 때문입니다.

### 대신 공통의 특징은 다음과 같습니다.


---

# MSA의 특징
- Decentralized
- Independent
- Do one thing well
- Polyglot
- Black box
- You build it, you run it
> 출처 : AWS 백서 / Microservices on AWS
---

# Decentralized

- 분산 시스템
- DB도 분리
  - 전사적 DB 정규화의 고정관념 탈피
- 개발, 배포, 관리, 운영도 분산


---

# Independent

- 수정, 변경, 교체에 있어 독립적

---

# Do one thing well

- Unix 정신
- "하나만 하고, 그리고 그것을 잘 해라"
- 강력한 소프트웨어는 대체로 Simple & Powerful

---

# Polyglot

- 사용하고 싶은 언어를 선택 가능
  - 프로그래밍 언어별 특징을 최대한 살릴 수 있다.
  - Java가 필요하면 Java를, NodeJS가 필요하면 NodeJS를...
- 필요한 DB를 선택해서 사용
  - RDBMS, NoSQL, Columnar-DB, ...

---

# Black box

- 내부가 어떻게 돌아가는지 알아야 할 필요가 없습니다.
  - 잘 정의된 API를 사용하면 됨


<span style="color:red">Q. 이것이 가능한 이유는 무엇이라 생각합니까?</span>

---

# You build it, you run it

- 서비스 만든 팀이 운영과 관리를 직접 합니다.
  - DevOps (Development + Operation)
- 개발자가 유저와 가까울수록, 서비스 개선이 더 용이해진다.

<span style="color:red">Q. 조직의 형태가 아키텍처에 중요하게 영향을 미칩니까?</span>

> ...Conway's Law...

---

# 그러면 MSA는 어떻게 문제를 해결합니까?

## 실습을 통해 알아봅시다.

---

# Twitter Clone에 마이크로서비스 적용하기

...
<span style="color:red">Q. 모놀리식 서비스에 MSA를 어떻게 적용합니까?</span>
....

---

# Law of Holes

***If you find yourself in a hole, stop digging.***

--> 새 기능을 마이크로서비스로 개발

---

# 새 기능만 마이크로서비스로 개발

주의해야 하는 점

- 기존 모놀리식 서비스와는 독립적일 수 있는 기능인가?
- etc...

---

# 실습용 프로젝트 - Twitter Clone


오늘 여러분들은 Twitter Clone의 개발자입니다.


TODO:
* 로컬 로그인 기능 
* 로그 수집 시스템 <span style="color:red"><-- 이제 이것</span>

---

# 실습용 프로젝트 - Twitter Clone

## TODO : 로그 수집 시스템

### As is (현재)

- 로그를 딱히 모으고 있지 않음

### To be

- 로그를 모아 분석할 수 있도록 수집

---

# 프로젝트 생성하기

1. 폴더 생성

```
mkdir log-analytics
```

2. 패키지 추가

```
yarn add express mongoose morgan body-parser
```

3. `index.js`, `model.js`를 복사/붙여넣기

4. 실행

```
node index
```

---

TODO
이 슬라이드에서, 실제 잘 동작하는거 보여주기.
그 다음은 기존 서비스에 어떻게 붙이는지 보여줘야함.
Anti-corrouption layer에 대해서 설명.
그리고 추가 후 동작.

