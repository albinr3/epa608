'use client';

import { useEffect } from 'react';
import { ClerkProvider } from '@clerk/nextjs';

export default function ClerkProviderWrapper({ children }) {
  return (
    <ClerkProvider
      fallbackRedirectUrl="/"
    >
      {children}
    </ClerkProvider>
  );
}

