# PURADAK Website Renewal
### 푸라닭 웹사이트 리뉴얼(반응형)
#### 개인 프로젝트 기여도 100%
> **1차(HTML5 & CSS3)** 2023.11.20 ~ 2023.12.01<br>
> **2차(JavaScript)** 2023.12.13 ~ 2024.01.02
<br>

**🍗 배포 사이트 주소** ｜ [spaceyoung.github.io/puradak/](https://spaceyoung.github.io/puradak/)
<br>
<br>
<br>
<kbd><img src="https://github.com/spaceyoung/puradak/assets/154400292/2ffb1516-d83b-4cfa-87e6-c2dc0aaa08dd" /></kbd>
<br>
<br>

### 🔎 개요
푸라닭의 공식 웹사이트 디자인이 고급스러움을 강조하는 브랜드 이미지를 충분히 전달하고 있지 않다고 판단하여 기획했습니다. **JavaScript를 학습하며 직접 적용**해 본 첫 프로젝트로, 기능적 측면에서는 **동적 기능 구현과 단순 반복 마크업 감소, 지도 API 활용**을 중점에 두고 작업을 진행했습니다.

해당 프로젝트를 통해 **JavaScript 문법**을 주도적으로 익히며 전반적인 지식을 습득했습니다. 또한, **DOM 요소 접근**과 **비동기 통신을 통한 API 활용**을 이해하고 직접 적용할 수 있게 되었습니다.
<br>
<br>
<br>
### 🛠 사용 기술
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

### 🖥 구현 페이지
- **[메인 페이지](https://spaceyoung.github.io/puradak/)**

- **서브 페이지 7장**
  - 브랜드 소개 : [푸라닭 소개](https://spaceyoung.github.io/puradak/sub/sub01-01.html)
  - 메뉴 안내 : [치킨 메뉴](https://spaceyoung.github.io/puradak/sub/sub02-01.html) / [사이드 메뉴](https://spaceyoung.github.io/puradak/sub/sub02-02.html) / [푸레스트](https://spaceyoung.github.io/puradak/sub/sub02-03.html) / [페이커리](https://spaceyoung.github.io/puradak/sub/sub02-04.html) / [P-피자](https://spaceyoung.github.io/puradak/sub/sub02-05.html)
  - 매장 안내 : [매장 안내](https://spaceyoung.github.io/puradak/sub/sub04-01.html)
<br>
<br>

### ✨ JavaScript 활용 구현 기능
- **[메인 페이지](https://spaceyoung.github.io/puradak/)**

  - 마우스 이벤트를 활용한 Hover 효과, Hamburger 메뉴 클릭 이벤트 등의 **동적 상호작용** 구현
  - **querySelector를 통한 DOM 접근**과 **Event listener**를 활용하여 모바일 화면에서의 Navigation drawer **아코디언 메뉴 토글** 구현
  - **스크롤 이벤트**를 활용한 퀵 메뉴 **Top 버튼, Visual Section 스킵 버튼**

| 아코디언 메뉴 토글 | 퀵 메뉴 Top 버튼 | Visual Sections 스킵 버튼 |
|---|---|---|
| <kbd><img src="https://github.com/spaceyoung/puradak/assets/154400292/3f2bd36a-26c5-44ae-a675-62791364abcc" width="210" /></kbd> | <kbd><img src="https://github.com/spaceyoung/puradak/assets/154400292/b133ecbc-e209-44c8-ad09-6ce1552c33bb" /></kbd> | <kbd><img src="https://github.com/spaceyoung/puradak/assets/154400292/ce03ea0b-0319-4a7c-bac4-c57d20e53916" /></kbd> |
<br>

- **[메뉴 안내 서브 페이지(Sub-02)](https://spaceyoung.github.io/puradak/sub/sub02-01.html)**

  - 마크업 단순 반복으로 생성한 메뉴 리스트를 **JSON 형식으로 저장** 후, **반복문으로 DOM 요소 생성을 자동화**
  - 결과적으로 서브 페이지의 **단순 반복 마크업을 줄임**으로써 **5장의 탭 메뉴 페이지를 SPA 형식과 같이 1장으로 축소**

| 메뉴 안내 하위 페이지<br>(치킨 메뉴 / 사이드 메뉴 / 푸레스트 / 페이커리 / P-피자) | 치킨 메뉴 하위의 탭 메뉴 페이지<br>(뼈 / 순살 / 반반 / 윙콤보 / 세트) |
|---|---|
| <kbd><img src="https://github.com/spaceyoung/puradak/assets/154400292/c31e30a5-7d55-42a2-a880-4306a541f4a3" /></kbd> | <kbd><img src="https://github.com/spaceyoung/puradak/assets/154400292/e1fe5c0c-c06f-434b-a81e-c645a1ace16e" /></kbd> |
<br>

- **[매장 안내 서브 페이지(Sub-04]](https://spaceyoung.github.io/puradak/sub/sub04-01.html)**

  - **Kakao map API**를 활용한 **푸라닭 각 지점 매장 안내 지도**
 
| 각 지점 매장 안내 지도 |
|---|
| <kbd width="400px"><img src="https://github.com/spaceyoung/puradak/assets/154400292/c2ce8bf5-58c9-490e-b4cb-271ad1f9bb4d"/></kbd> |
