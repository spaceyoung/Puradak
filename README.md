# Puradak Website Renewal
#### 푸라닭 웹사이트 리뉴얼(반응형)
<table>
  <tr>
    <th width="100">기여도</th>
    <td>100% (개인 프로젝트)</td>
  </tr>
  <tr>
    <th>작업 기간</th>
    <td>1차(HTML5 & CSS3) 2023.11.20 ~ 2023.12.01<br>2차(JavaScript) 2023.12.13 ~ 2024.01.02</td>
  </tr>
</table>
<br>
<br>
<kbd><img src="https://github.com/spaceyoung/puradak/assets/154400292/ff826392-1e45-40bc-b0bf-343d120f7eaf" /></kbd>
<br>
<br>
<br>

## 🍗 배포 주소
[https://spaceyoung.github.io/puradak/](https://spaceyoung.github.io/puradak/)
<br>
<br>
<br>
## 🔎 개요
푸라닭의 공식 웹사이트 디자인이 고급스러움을 강조하는 브랜드 이미지를 충분히 전달하고 있지 않다고 판단하여 기획했습니다. **JavaScript를 학습하며 직접 적용**해 본 첫 프로젝트로, 기능적 측면에서는 **동적 기능 구현과 단순 반복 마크업 감소, 지도 API 활용**을 중점에 두고 작업을 진행했습니다.

해당 프로젝트를 통해 **JavaScript 문법**을 주도적으로 익히며 전반적인 지식을 습득했습니다. 또한, **DOM 요소 접근**과 **비동기 통신을 이용한 API 활용**을 이해하고 직접 적용할 수 있게 되었습니다.
<br>
<br>
<br>
## 🛠 사용 기술
```
* Language
    - HTML5
    - CSS3
    - JavaScript

* Library
    - Swiper
    - Animate On Scroll

* Tools
    - Photoshop
    - Github
    - Visual Studio Code
```
<br>
<br>

## 🖥 구현 페이지
- **[메인 페이지](https://spaceyoung.github.io/puradak/)**

- **서브 페이지 7장**
  - 브랜드 소개 : [푸라닭 소개](https://spaceyoung.github.io/puradak/sub/sub01-01.html)
  - 메뉴 안내 : [치킨 메뉴](https://spaceyoung.github.io/puradak/sub/sub02-01.html) / [사이드 메뉴](https://spaceyoung.github.io/puradak/sub/sub02-02.html) / [푸레스트](https://spaceyoung.github.io/puradak/sub/sub02-03.html) / [페이커리](https://spaceyoung.github.io/puradak/sub/sub02-04.html) / [P-피자](https://spaceyoung.github.io/puradak/sub/sub02-05.html)
  - 매장 안내 : [매장 안내](https://spaceyoung.github.io/puradak/sub/sub04-01.html)
<br>
<br>

## ✨ JavaScript 활용 구현 기능
- **[메인 페이지](https://spaceyoung.github.io/puradak/)**

  - 마우스 이벤트를 활용한 Hover 효과, Hamburger 메뉴 클릭 이벤트 등의 **동적 상호작용** 구현
  - **querySelector를 통한 DOM 접근**과 **Event listener**를 활용하여 모바일 화면에서의 Navigation drawer **아코디언 메뉴** 구현
  - **스크롤 이벤트**를 활용한 퀵 메뉴 **Top 버튼, Visual Section 스킵 버튼**

| 아코디언 메뉴 | 퀵 메뉴 Top 버튼 | Visual Sections 스킵 버튼 |
|---|---|---|
| <kbd><img src="https://github.com/spaceyoung/puradak/assets/154400292/d66ccdb5-2c99-4e03-8645-44be3346a8ed" width="200"/></kbd> | <kbd><img src="https://github.com/spaceyoung/puradak/assets/154400292/c1282201-0c6b-4816-b8fa-0834e7e05065" /></kbd> | <kbd><img src="https://github.com/spaceyoung/puradak/assets/154400292/003a99f1-6412-43dc-ad65-5baafca7a163" /></kbd> |
<br>

- **[메뉴 안내 서브 페이지(Sub-02)](https://spaceyoung.github.io/puradak/sub/sub02-01.html)**

  - 마크업 단순 반복으로 생성한 메뉴 리스트를 **JSON 형식으로 저장** 후, **반복문으로 DOM 요소 생성을 자동화**
  - 결과적으로 서브 페이지의 **단순 반복 마크업을 줄임**으로써 **5장의 탭 메뉴 페이지를 SPA 형식과 같이 1장으로 축소**

| 메뉴 안내 하위 페이지<br>(치킨 메뉴 / 사이드 메뉴 / 푸레스트 / 페이커리 / P-피자) | 치킨 메뉴 하위의 탭 메뉴 페이지<br>(뼈 / 순살 / 반반 / 윙콤보 / 세트) |
|---|---|
| <kbd><img src="https://github.com/spaceyoung/puradak/assets/154400292/66c0f337-efc0-4898-b5fd-6ef044f1f610" /></kbd> | <kbd><img src="https://github.com/spaceyoung/puradak/assets/154400292/9f9428d7-b1c3-4897-b28b-0c2d0d97f9f2" /></kbd> |
<br>

- **[매장 안내 서브 페이지(Sub-04)](https://spaceyoung.github.io/puradak/sub/sub04-01.html)**

  - **Kakao map API**를 활용한 **푸라닭 각 지점 매장 안내 지도**
 
| 각 지점 매장 안내 지도 |
|---|
| <kbd><img src="https://github.com/spaceyoung/puradak/assets/154400292/e1b0391c-531e-4ccd-a6cb-8268748ebe8d"/></kbd> |
