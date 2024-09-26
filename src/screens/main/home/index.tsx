import React from 'react';

import {Text} from '@/components/ui/text';
import {Button, ButtonText} from '@/components/ui/button';
import {Navigation} from '@/constants/navigation';
import {VStack} from '@/components/ui/vstack';

export default function HomeScreen({navigation}) {
  return (
    <VStack space="md" reversed={false}>
      <Text>HomeScreen</Text>
      <Button
        size="md"
        variant="solid"
        action="primary"
        onPress={() => {
          navigation.navigate(Navigation.Screens.Main.DETAIL);
        }}>
        <ButtonText>Go to detail</ButtonText>
      </Button>
    </VStack>
  );
}
