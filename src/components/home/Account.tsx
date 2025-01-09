import Image from 'next/image';

import Flex from '@shared/Flex';
import Text from '@shared/Text';
import Button from '@shared/Button';
import Spacing from '@shared/Spacing';

function Account() {
  const hasAccount = false;

  if (hasAccount) {
    //계좌 보유시
    return (
      <Flex justify="space-between" align="center">
        <Flex direction="column">
          <Text typography="t6" color="gray600">
            즈즈재 회원님의 자산
          </Text>
          <Spacing size={2} />
          <Text typography="t3" bold={true}>
            0000원
          </Text>
        </Flex>
        <Button>분석</Button>
      </Flex>
    );
  }

  const 계좌개설상태 = 'READY';
  const title =
    계좌개설상태 === 'READY'
      ? '만들고 있으신\n계좌가 있으시군요'
      : '계좌 개설이\n더 쉽고 빨라졌어요';
  const buttonLabel =
    계좌개설상태 === 'READY' ? '이어 만들기' : '3분만에 개설하기';

  //계좌 미보유시
  return (
    <div style={{ padding: 24 }}>
      <Flex justify="space-between">
        <Flex direction="column">
          <Text bold={true} style={{ whiteSpace: 'pre-wrap' }}>
            {title}
          </Text>
          <Spacing size={8} />
          <Button>{buttonLabel}</Button>
        </Flex>
        <Image
          src="https://cdn4.iconfinder.com/data/icons/essential-app-2/16/cash-money-coin-value-64.png"
          alt=""
          width={80}
          height={80}
        />
      </Flex>
    </div>
  );
}

export default Account;
