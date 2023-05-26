// 이미 모든 값이 pre-rendering 되어 있다.
// 그러나 새로고침을 할 때마다 2초의 시간이 걸리고, 매번 random 함수가 실행되면서 값이 바뀐다.
// 그러나 SSG는 빌드 타임에 모든 것을 pre-rendering하고, 정적으로 그 값이 바뀌지 않아야 한다.
// getStaticProps을 사용했음에도 계속해서 값이 바뀌는 이유는, 현재 "개발환경"에서 Next를 실행하고 있기 때문이다!
// 빌드 후에는 새로고침해도 값이 유지되는 것을 확인할 수 있다.

import type { NextPage } from 'next';

interface Props {
  data: number;
}

const Example: NextPage<Props> = ({ data }) => {
  return (
    <main>
      <h1>getStaticProps Page</h1>
      <p>값: {data}</p>
    </main>
  );
};

export default Example;

export async function getStaticProps() {
  const delayInSeconds = 2;
  const data = await new Promise((resolve) =>
    setTimeout(() => resolve(Math.random()), delayInSeconds * 1000)
  );

  return {
    props: { data },
    // 이미 빌드가 완료된 사이트에서 주기적으로 정적인 페이지를 업데이트 할 수 있다.
    // 해당 페이지만 업데이트하는 것이기 때문에 전체 사이트를 다시 빌드할 필요가 없다.

    // 아래 예제는, 5초마다 revalidate => 즉, SSG + ISR
    // (SSG : Next.js에서 페이지를 생성할 때 기본으로 적용되는 설정으로, 빌드 시에 페이지를 미리 생성해 놓는다.)
    // (ISR : 빌드 시점에 페이지를 렌더링 한 후, 설정한 시간 마다 페이지를 새로 렌더링한다.)

    // 만약 5초가 지났음에도 데이터가 변하지 않으면 Next.js는 pre-rendering을 다시 수행하지 않는다.
    // 해당 정보는 Header의 Etag를 통해 확인할 수 있다.
    revalidate: 5,
  }
}
