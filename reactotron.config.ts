import Reactotron from 'reactotron-react-native';
import type {ReactotronReactNative} from 'reactotron-react-native';
import {QueryClientManager, reactotronReactQuery} from 'reactotron-react-query';
import mmkvPlugin from 'reactotron-react-native-mmkv';
import {storage} from './src/store';
import appInfo from './app.json';
import {queryClient} from './src/utils/queryClient';

const queryClientManager = new QueryClientManager({
  queryClient,
});

Reactotron.configure({
  name: appInfo.name,
  onDisconnect: () => {
    queryClientManager.unsubscribe();
  },
}) // controls connection & communication settings
  .use(mmkvPlugin<ReactotronReactNative>({storage}))
  .use(reactotronReactQuery(queryClientManager))
  .useReactNative() // add all built-in react native plugins
  .connect(); // let's connect!
