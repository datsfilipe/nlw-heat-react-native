import React from 'react';

import { useAuth } from '../../hooks/Auth'
import { View } from 'react-native';
import { COLORS } from '../../theme';
import { Button } from '../Button'

import { styles } from './styles';

export function SignInBox(){
  const { signIn, isSigningIn } = useAuth()

  return (
    <View style={styles.container}>
      <Button
        title='ENTRAR COM GITHUB'
        color={COLORS.BLACK_PRIMARY}
        backgroundColor={COLORS.YELLOW}
        icon='github'
        onPress={signIn}
        isLoading={isSigningIn}
      />
    </View>
  );
}