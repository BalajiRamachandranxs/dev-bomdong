## 프로젝트 소개
GitHub User가 등록한 특정 Public Repository의 Issue를 모아볼 수 있는 웹 어플리케이션

## 구현사항

#### Repository 검색
- [x] 검색창에 Repository명을 입력해 Repository 검색 
- [x] 검색된 Public Repository 등록
- [x] 등록 개수는 최대 4개로 제한하며, 최대 개수 초과 등록 시 사용자에게 알려주기
- [x] LocalStorage 로컬 저장소 활용

#### Repository 등록
- [x] 검색된 Public Repository 등록
- [x] 등록 개수는 최대 4개로 제한하며, 최대 개수 초과 등록 시 사용자에게 알려주기
- [x] LocalStorage 로컬 저장소 활용

#### Repository 삭제
- [x] 등록된 Repository 삭제

#### Issue 모아보기
- [x] 등록된 각각의 Public Repository의 issue를 한 페이지에서 모아보기
- [x] 각 issue 마다 제목, Repository 명 기재
- [x] 해당 issue를 클릭하면 Github의 상세 페이지로 이동
- [x] 페이지네이션을 통해 계속해서 issue 모아보기


## 설치 및 실행방법


```javascript
git clone https://github.com/dev-bomdong/github-issue-board.git

npm install
//for yarn User : yarn install

npm start
//for yarn User : yarn start
```

## 시연 영상

#### Repository 검색
<img src="https://user-images.githubusercontent.com/84486172/142363858-72b6b809-7c3c-442c-9572-90156507ebfe.gif">

#### Repository 등록
<img src="https://user-images.githubusercontent.com/84486172/142363865-6da6c203-714e-49ea-bb45-dbb15c3a2e22.gif">

#### Repository 삭제
<img src="https://user-images.githubusercontent.com/84486172/142363869-1efc7c48-250f-492a-a629-1935d26023d1.gif">

#### Issue 모아보기
<img src="https://user-images.githubusercontent.com/84486172/142363874-1d693c07-3e7e-4c04-964e-6caa7d41637f.gif">

