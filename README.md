
### SSR ( Server Side Rendering )
 - 완성된 HTML이 서버에서 만들어진 뒤 브라우저에 전송, 브라우저는 해당 HTML을 바로 렌더링
 - 초기 용량이 적고 보안에 유리하다는 장점
 - 페이지마다 새로운 HTML을 그려줘야 하기 때문에, 페이지가 라우팅될 때 화면 깜빡임이 있을 수 있고, 사용자가 많을시 서버 과부하의 위험성이 있다.
 - 크롤링을 하기 좋은 환경으로 인해 SEO에 좋다.

### CSR ( Client Side Rendering )
 - 대표적인 예시가 CRA(create-react-app)
 - 처음에 <div id='root' />인 빈 HTML만 존재하고, 나머지는 자바스크립트로 동적으로 그리게 된다.
 - SSR과 달리 화면 깜빡임이 없지만 초기 용량이 크다.
 - 자바스크립트로 렌더링하기 때문에 해당 js 파일이 캐시 가능하다.
 - 하지만 서버 데이터가 필요할 경우, 계속해서 서버와 통신해야 하기 때문에 상대적으로 보안에 취약하다.
 - SSR에 비해 SEO에 제약이 있다.

### SSG ( Static Site Generation )
 - pre-rendering : 정적 HTML 파일을 빌드 타임에 미리 만들어 두는 것
 - 사이트에 방문할 때마다 HTML을 만든다.
 - 서버에 부하가 없고, HTML 자체를 캐시할 수 있다.
 - 완성된 HTML이기 때문에 SEO에도 좋다.
 - 내용이 동적으로 변하지 않는 정적인 사이트에 활용한다.

### Next.js
 - SSR, CSR, SSG의 장점만 고려하여 페이지를 자유롭게 routing/rendering 할 수 있도록 API를 제공한다.
   - SSR / SSG의 용량과 보안
   - CSR의 페이지 이동 속도, 깜빡임 없음
 - CRA vs Next.js
   - 가장 직관적으로 드러나는 차이점이 바로, 자바스크립트를 disable 시켰을 때이다.
   - CRA는 <div id='root' /> 빈 HTML 파일만 갖고 있기 때문에, 하얀 빈 화면을 보인다면
   - Next.js는 원 페이지를 그대로 보여준다.
