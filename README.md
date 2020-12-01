# react-reudx 연습

index.js : 스토어 + 리듀서 연결 
./reducers : 리듀서들 모음
./actions : 액션정의
App.js :
  useSelector : 스토어 구독 - state 값이 변경되면 구독한 모든 컴포넌트가 렌더링됨.
  useDispatch : 스토어 저장 - 디스패치 -> 리듀서 -> 스토어 : state 값 변경
