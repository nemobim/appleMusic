# 프로젝트 구동 방법 

1. yarn install
2. yarn start

배포 사이트 : https://music-chart-git-main-do-eun.vercel.app/

# 프로젝트 설명
<img width="400" alt="스크린샷 2023-04-15 오전 10 29 14" src="https://user-images.githubusercontent.com/112849712/232176971-146ec801-6df3-44b3-8257-409f612b6bdb.png">
<p>메인 화면 : 차트 박스 클릭시 상세 페이지로 이동 </p>
<img width="400" alt="스크린샷 2023-04-15 오전 10 29 09" src="https://user-images.githubusercontent.com/112849712/232176998-5902dd8b-9286-4588-adc4-feea64cdaa06.png">
<p>상세페이지 : 곡 정보 및 더보기 버튼(애플뮤직으로 이동)</p>
<img width="400" alt="스크린샷 2023-04-15 오전 10 29 21" src="https://user-images.githubusercontent.com/112849712/232176931-aa134e60-5e96-4909-8c3a-cff3fde22199.png">
<p>검색어 입력시 검색 결과 반영 및 검색 결과 없을시 없다는 빈화면 대신 대체화면 적용</p>
<img width="400" alt="스크린샷 2023-04-15 오전 10 29 30" src="https://user-images.githubusercontent.com/112849712/232177063-2dc1a483-7c49-4c85-9e92-c4a74932792e.png">
<p>오름차순, 내림차순 필터 기능 구현</p>




# 기능 구현에 사용한 라이브러리
-tailwind css : 시트를 오고가는 화면 전환 없이 빠른 스타일링 가능하며, 반응형 UI 구현과 복잡한 css도 쉽게 적용 가능 합니다. </br>
-recoil : hook과 유사한 구조를 가져 익숙하게 사용이 가능하고, 상태관리 및 props drilling 문제를 해결할 수 있습니다.  </br>
-react-router-dom : useLocation을 사용하여 페이지 이동시 state 값을 보낼 수 있고, 새로고침 없이 페이지 이동이 가능합니다.  </br>
-Typescript : 해당 내용에 대한 자동완성 제공 및 오타 교정과 코드를 실행하기 전에 오류가 있을시 경고해줌으로써 런타임 에러 줄일 수 있습니다.   </br>
 

