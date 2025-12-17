'use client';
import { AuthenticateWithRedirectCallback } from '@clerk/nextjs';

export default function SSOCallback() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <p className="text-gray-600 animate-pulse">Iniciando sesión…</p>
      <AuthenticateWithRedirectCallback />
    </div>
  );
}
