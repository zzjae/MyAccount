import { useQuery } from 'react-query';

import { getEventBanners } from '@remote/banner';

function useEventBanners() {
  //유저가 계좌를 보유 하고 있는가

  return useQuery(
    ['event-banners'],
    () => getEventBanners({ hasAccount: false }),
    {
      suspense: true,
    },
  );
}

export default useEventBanners;
