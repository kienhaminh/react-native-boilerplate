import type {NativeStackScreenProps} from '@react-navigation/native-stack';

type RootStackParamList = {
  Home: undefined;
  Profile: {userId: string};
};

type Props = NativeStackScreenProps<RootStackParamList, 'Profile'>;
