import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";

export default function SpecialistRoute({ children }: { children: React.ReactNode }) {
  const { auth } = useAuth();
  const location = useLocation();

  if (!auth?.isSpecialist) {
    return <Navigate to="/auth?tab=login" state={{ from: location.pathname }} replace />;
  }

  return <>{children}</>;
}
