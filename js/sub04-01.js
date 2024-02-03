// JSON 매장 데이터 불러와서 매장 지도 생성
async function init() {
  const response = await fetch('/json/store-location.json');
  const stores = await response.json();

  // 기준 위도, 경도
  const standardLat = `${stores[0].latitude}`;
  const standardLng = `${stores[0].longitude}`;
  
  // 지도 삽입할 위치 및 지도 기본 옵션 설정
  const storeSection = document.querySelector(".store > .inner");
  const mapContainer = document.createElement("div");
  mapContainer.classList.add("map");
  storeSection.append(mapContainer);


  // 스크립트 로딩이 끝나기 전 kakao 객체에 접근하는 것을 방지
  kakao.maps.load(() => {
    // 지도 옵션 설정 및 지도 생성
    const mapOption = {
        center: new kakao.maps.LatLng(standardLat, standardLng), // 지도의 중심좌표
        level: 6,
    };
    const storeMap = new kakao.maps.Map(mapContainer, mapOption);
    
    // 지도 컨트롤 생성 및 배치
    const mapTypeControl = new kakao.maps.MapTypeControl(); // 지도 타입(일반 지도, 스카이뷰) 전환 컨트롤
    storeMap.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);
    const zoomControl = new kakao.maps.ZoomControl(); // 지도 확대 및 축소 제어 줌 컨트롤
    storeMap.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);
  
    // 반응형 웹 맞춤 지도 중심 고정
    const mapCenter = storeMap.getCenter();
    window.addEventListener('resize', () => {storeMap.setCenter(mapCenter)});
  
  
    // 마커 및 커스텀 오버레이 생성
    let markers = [];
    let overlays = [];
  
    for (const store of stores) {
      const marker = new kakao.maps.Marker({
        map: storeMap,
        position: new kakao.maps.LatLng(store.latitude, store.longitude)
      });
      markers.push(marker);
      
  
      // 커스텀 오버레이에 들어갈 매장 정보 내용 생성
      // 커스텀 오버레이 콘텐츠 생성 및 추가
      const storeInfo = document.createElement('div');
      storeInfo.classList.add("store-info");
  
      // 매장 이름 생성 및 추가
      const storeName = document.createElement('strong');
      storeName.classList.add("store-name");
      storeInfo.append(storeName);
      storeName.textContent = `${store.name}`;
  
      // 매장 정보 리스트 생성 및 추가
      const storeInfoList = document.createElement('ul');
      const storeAddress = document.createElement('li');
      const storeContact = document.createElement('li');
      const storeHours = document.createElement('li');
  
      storeInfoList.classList.add("store-info-list");
      storeAddress.classList.add("store-address");
      storeContact.classList.add("store-contact");
      storeHours.classList.add("store-hours");
  
      storeInfo.append(storeInfoList);
      storeInfoList.append(storeAddress, storeContact, storeHours);
  
      storeAddress.textContent = `주소 : ${store.address}`;
      storeContact.textContent = `연락처 : ${store.contact}`;
      storeHours.textContent = `영업시간 : ${store["business hours"]}`;
  
      // 커스텀 오버레이 닫기 버튼 생성 및 추가
      const storeInfoClose = document.createElement('button');
      const closeIcon = document.createElement('span');
      storeInfoClose.classList.add("store-info-close");
      closeIcon.classList.add("material-symbols-outlined");
      storeInfo.append(storeInfoClose);
      storeInfoClose.append(closeIcon);
      closeIcon.textContent = `close`;
      storeInfoClose.addEventListener('click', () => overlay.setMap(null));
  
      // 커스텀 오버레이 생성
      const overlay = new kakao.maps.CustomOverlay({
        content : storeInfo,
        position: marker.getPosition(),
        yAnchor: 1.35
      });
      overlays.push(overlay);
  
      kakao.maps.event.addListener(storeMap, 'click', closeOverlay());
      kakao.maps.event.addListener(marker, 'click', closeOverlay());
      kakao.maps.event.addListener(marker, 'click', openOverlay(overlay));
    };
    
    // 기준 마커의 커스텀 오버레이를 디폴트로 표시
    overlays[0].setMap(storeMap);
    
    // 마커 클릭시 커스텀 오버레이를 표시하는 함수 선언
    function openOverlay(overlay) {
      return () => {overlay.setMap(storeMap)};
    };
    
    // 이미 열려있는 마커의 커스텀 오버레이를 닫는 함수 선언
    function closeOverlay() {
      return () => {
        for (const overlay of overlays) {
          overlay.setMap(null);
        };
      };
    };
  
  
    // 마커 클러스터러 생성
    var clusterer = new kakao.maps.MarkerClusterer({
      map: storeMap, // 마커들을 클러스터로 관리하고 표시할 지도 객체
      averageCenter: true, // 클러스터에 포함된 마커들의 평균 위치를 클러스터 마커 위치로 설정
      minLevel: 9 // 클러스터 할 최소 지도 레벨
    });
    clusterer.addMarkers(markers);
  })
};



// 매장 지도 생성 함수 실행
init();