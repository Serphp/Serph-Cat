import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.serphp.serphcat',
  appName: 'serphcat',
  webDir: 'public',
  server: {
    androidScheme: 'https'
  }
};

export default config;
