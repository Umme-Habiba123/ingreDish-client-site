"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./Firebase.config";
// import { auth } from "../lib/firebase.js";

const ProtectedRoute = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (loading) return;
    if (!user) {
      router.push(`/pages/login?redirect=${pathname}`);
    }
  }, [user, loading, router, pathname]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-900">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div >
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
