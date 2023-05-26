import Link from 'next/link';

export default function Links() {
  return (
    <main>
      <h1>Links</h1>
      <div style={{ height: '200vh' }} />
      {/*
        페이지 이동 시, 추가적인 HTML 파일을 받아오지 않고, getStaticProps 페이지에 관한 "자바스크립트 파일"만 가져온다.
        최초 실행은 SSG로 실행되지만,
        페이지를 라우팅할 때에는 CRS 방식으로 빠르게 이동한다.
        이렇듯 SSG와 CSR을 결합한 routing을 할 수 있는 것은, next/link 덕분이다.
        
        최초에 한 번만 HTML 파일을 가져오고,
        next/link가 있는 곳은 javascript와 json 파일로 해당 페이지에 대한 정보를 미리 가져와서
        빠르게 CSR 방식으로 라우팅하게 된다!

        또한, 페이지 역시 pre-rendering 되어 있기 때문에 SEO도 문제 없다.
      */}

      {/*
        (1) 일반적인 <a> 태그 : 페이지 이동 시, getStaticProps HTML 파일을 새롭게 받아온다.
       */}
      {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
      <a href="/section1/getStaticProps">/getStaticProps</a>

      {/*
        (2) Next.js <Link> 태그 : 페이지 이동 시, Link HTML을 유지한 채 getStaticProps 페이지에 관한 "자바스크립트 파일"만 가져온다.
       */}
      <Link href="/section1/getStaticProps">/getStaticProps</Link>
    </main>
  );
}
