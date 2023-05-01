import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import  Ref from'./Ref.js';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
   <Ref/>
  </StrictMode>
);
 