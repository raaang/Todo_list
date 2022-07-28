# Todo List

항해99 Chapter 3 React 주특기 기초

<!-- <img src="https://img.shields.io/badge/이름-색상코드?style=flat-square&logo=로고명&logoColor=로고색"/> -->

<div>
<img src="https://img.shields.io/badge/yarn-2C8EBB?style=flat-square&logo=yarn&logoColor=white"/>
<img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=black"/>
<img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=HTML5&logoColor=white"/>
<img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=CSS3&logoColor=white"/>
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=JavaScript&logoColor=white"/>
</div>

<br>

> ***간단한 투두리스트 프로젝트***

<br>

### 프로젝트 기간
2022.07.22 ~ 2022.07.27

<br>

## 실행 방법

패키지 설치
```
npm install
```

실행
```bash
yarn start
```

<br>

## 기능 구현

<div align="center">
<img src="./public/todolist_execute.gif" width="800" height="600" />
</div>
<br>

1. 제목, 내용, 중요도를 선택해 투두리스트에 추가한다.
2. 투두리스트를 완료하면 완료 버튼을 누른다.
3. 투두리스트가 취소되면 취소 버튼을 누른다.
4. 투두리스트를 삭제한다.

<br>

## 구조
```
├── public
├── src
│	├── components
|	│	├── form
|	|	│	├── From.jsx
|	|	│	└── style.css
|	│	├── header
|	|	│	├── Header.jsx
|	|	│	└── style.css
|	│	├── layout
|	|	│	├── Layout.jsx
|	|	│	└── style.css
|	│	├── list
|	|	│	├── List.jsx
|	|	│	└── style.css
|	│	└── todo
|	|	├── Todo.jsx
|	|	└── style.css
│	└── pages
|	|		└── TodoList.jsx
|	├── App.css
|	├── App.js
|	├── App.test.js
|	├── index.css
|	├── index.js
|	├── logo.svg
│	├── reportWebVitals.js
│	└── setipTests.js
├── .gitignore
├── package.json
├── yarn.lock
└── README.md
```
<br>
