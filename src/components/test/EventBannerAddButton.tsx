import { collection, writeBatch, doc } from 'firebase/firestore';

import { store } from '@remote/firebase';
import { EVENT_BANNERS } from '@/mock/banner';
import { COLLECTIONS } from '@constants/collection';
import Button from '@shared/Button';

function EventBannerAddButton() {
  const handleButtonClick = async () => {
    const batch = writeBatch(store);

    EVENT_BANNERS.forEach((banner) => {
      const bannerRef = doc(collection(store, COLLECTIONS.EVENT_BANNER));

      batch.set(bannerRef, banner);
    });

    await batch.commit();

    alert('배너 데이터가 추가 되었습니다.');
  };

  return <Button onClick={handleButtonClick}>이벤트 베너 추가</Button>;
}

export default EventBannerAddButton;
