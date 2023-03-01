import * as React from 'react';
import { BaseProvider, LightTheme } from 'baseui';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Client as Styletron } from 'styletron-engine-atomic';
import { Provider as StyletronProvider } from 'styletron-react';
import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

const client = new Styletron();

root.render(
  <StyletronProvider value={client}>
    <BaseProvider theme={LightTheme}>
      <App />
    </BaseProvider>
  </StyletronProvider>
);
