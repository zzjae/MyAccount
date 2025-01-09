//코드 분리
import dynamic from 'next/dynamic';

import Account from '@home/Account';
import { BannerSkeleton } from '@home/EventBanners';
import { CreditScoreSkeleton } from '@home/CreditScore';

import Spacing from '@shared/Spacing';

const EventBanners = dynamic(() => import('@home/EventBanners'), {
  ssr: false, //서버 사이드 X 클라이언트 사이드 렌더링
  loading: () => (
    //들썩임 방지
    <BannerSkeleton />
  ),
});

const CreditScore = dynamic(() => import('@home/CreditScore'), {
  ssr: false, //서버 사이드 X 클라이언트 사이드 렌더링
  loading: () => <CreditScoreSkeleton />,
});

export default function Home() {
  return (
    <>
      <EventBanners />
      <Account />
      <Spacing size={8} backgroundColor="gray100" />
      <CreditScore />
    </>
  );
}
