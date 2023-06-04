import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { SignedOutStack } from './SignedOutStack';
import { SignedInStack } from './SignedInStack';
import LocalStorage from '../lib/localStorage/LocalStorage';

class UserInfo {
  constructor(props: Partial<UserInfo>) {
    Object.assign(this, props);
  }
  name: string;
  id: number;
}

const RoutesContainer: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [userInfo, setUserInfo] = useState<UserInfo>(new UserInfo({}));

  const getUserInfo = async () => {
    const data = await LocalStorage.getItem<UserInfo>('userInfo');
    setUserInfo(data);
    setIsLoading(false);
  };

  useEffect(() => {
    setTimeout(getUserInfo, 3000);
    //getUserInfo();
  }, []);

  if (isLoading) {
    return (
      <View>
        <Text>Carregando</Text>
      </View>
    );
  }

  return <>{!userInfo?.name ? <SignedOutStack /> : <SignedInStack />}</>;
};

export { RoutesContainer };
