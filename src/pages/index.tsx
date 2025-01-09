//코드 분리
import dynamic from 'next/dynamic';

import Account from '@home/Account';
import { BannerSkeleton } from '@home/EventBanners';

const EventBanners = dynamic(() => import('@home/EventBanners'), {
  ssr: false, //서버 사이드 X 클라이언트 사이드 렌더링
  loading: () => (
    //들썩임 방지
    <BannerSkeleton />
  ),
});
export default function Home() {
  return (
    <>
      <EventBanners />
      <Account />
    </>
  );
}
