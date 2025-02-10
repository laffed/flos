import { PaperProvider } from 'react-native-paper';

import { Navigation } from './navigation';


export const App = () => {

  return (
    <PaperProvider>
      <Navigation />
    </PaperProvider>
  );
};
