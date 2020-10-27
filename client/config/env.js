import { Platform } from 'react-native';
// IMPORT ALL ENV VARIABLES IN THE IMPORT STATEMENT
import { PG_URI, IOS_ANALYTICS_KEY, ANDROID_ANALYTICS_KEY } from '@env';

// EXPORT ALL ENV VARIABLES IN THE IMPORT STATEMENT
export default {
  PG_URI,
  ANALYTICS_KEY: Platform.select({
    ios: IOS_ANALYTICS_KEY,
    android: ANDROID_ANALYTICS_KEY,
  }),
};
