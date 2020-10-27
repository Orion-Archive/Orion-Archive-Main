import { Platform } from 'react-native';
import {
  PG_URI,
  IOS_ANALYTICS_KEY,
  ANDROID_ANALYTICS_KEY,
} from 'react-native-dotenv';

export default {
  PG_URI,
  ANALYTIC_KEY: Platform.select({
    ios: IOS_ANALYTICS_KEY,
    android: ANDROID_ANALYTICS_KEY,
  }),
};
