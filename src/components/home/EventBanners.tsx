import Link from 'next/link';
import Image from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react';
import { css } from '@emotion/react';

import useEventBanners from '@home/hooks/useEventBanners';
import withSuspense from '@/components/shared/hocs/withSuspense';

import Flex from '@shared/Flex';
import Text from '@shared/Text';
import Skeleton from '@shared/Skeleton';

function EventBanners() {
  const { data } = useEventBanners();

  console.log('data', data);
  return (
    <div>
      <Swiper spaceBetween={8}>
        {data?.map((banner) => {
          return (
            <SwiperSlide key={banner.id}>
              <Link href={banner.id}>
                <Flex
                  style={{ backgroundColor: banner.backgroundColor }}
                  justify="space-between"
                  css={bannerStyles}
                >
                  {/* 왼쪽 */}
                  <Flex direction="column">
                    <Text bold={true}>{banner.title}</Text>
                    <Text typography="t6">{banner.subTitle}</Text>
                  </Flex>
                  {/* 오른쪽 */}
                  <Image src={banner.iconURL} alt="" width={40} height={40} />
                </Flex>
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default withSuspense(EventBanners, {
  fallback: (
    //들썩임 방지 skleton
    <Skeleton width="100%" height={100} style={{ borderRadius: 8 }}>
      로딩중...
    </Skeleton>
  ),
});

const bannerStyles = css`
  padding: 24px;
  border-radius: 8px;
`;