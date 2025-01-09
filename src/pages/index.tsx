//코드 분리
import dynamic from 'next/dynamic';

import styled from '@emotion/styled';
import { css } from '@emotion/react';

import Skeleton from '@shared/Skeleton';

const EventBanners = dynamic(() => import('@home/EventBanners'), {
  ssr: false, //서버 사이드 X 클라이언트 사이드 렌더링
  loading: () => (
    //들썩임 방지
    <Skeleton width="100%" height={100} style={{ borderRadius: 8 }}>
      로딩중...
    </Skeleton>
  ),
});
export default function Home() {
  return (
    <Container>
      <EventBanners />
      <div>Hello</div>
    </Container>
  );
}

const Container = styled.div`
  background-color: pink;
`;

const bold = css`
  font-weight: bold;
`;
