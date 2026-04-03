import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export interface DoctorProfile {
  name: string;
  email: string;
  phone: string;
  specialization: string;
  experience: string;
  workplace: string;
  city: string;
  bio: string;
  education: string;
  certificates: string[];
  services: string[];
  avatar: string;
  // Advertising
  ads: DoctorAd[];
}

export interface DoctorAd {
  id: string;
  title: string;
  description: string;
  link: string;
  image: string;
  active: boolean;
  createdAt: string;
}

interface AuthState {
  isSpecialist: boolean;
  profile: DoctorProfile;
}

interface AuthContextType {
  auth: AuthState | null;
  login: (email: string, name: string) => void;
  register: (email: string, name: string) => void;
  logout: () => void;
  updateProfile: (profile: Partial<DoctorProfile>) => void;
  addAd: (ad: Omit<DoctorAd, "id" | "createdAt">) => void;
  updateAd: (id: string, ad: Partial<DoctorAd>) => void;
  removeAd: (id: string) => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

const STORAGE_KEY = "pro-diag-auth";

const defaultProfile = (email: string, name: string): DoctorProfile => ({
  name,
  email,
  phone: "",
  specialization: "",
  experience: "",
  workplace: "",
  city: "",
  bio: "",
  education: "",
  certificates: [],
  services: [],
  avatar: "",
  ads: [],
});

export function AuthProvider({ children }: { children: ReactNode }) {
  const [auth, setAuth] = useState<AuthState | null>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : null;
    } catch {
      return null;
    }
  });

  useEffect(() => {
    if (auth) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(auth));
    } else {
      localStorage.removeItem(STORAGE_KEY);
    }
  }, [auth]);

  const login = (email: string, name: string) => {
    setAuth({ isSpecialist: true, profile: defaultProfile(email, name) });
  };

  const register = (email: string, name: string) => {
    setAuth({ isSpecialist: true, profile: defaultProfile(email, name) });
  };

  const logout = () => setAuth(null);

  const updateProfile = (updates: Partial<DoctorProfile>) => {
    setAuth((prev) => prev ? { ...prev, profile: { ...prev.profile, ...updates } } : prev);
  };

  const addAd = (ad: Omit<DoctorAd, "id" | "createdAt">) => {
    const newAd: DoctorAd = { ...ad, id: crypto.randomUUID(), createdAt: new Date().toISOString() };
    setAuth((prev) => prev ? { ...prev, profile: { ...prev.profile, ads: [...prev.profile.ads, newAd] } } : prev);
  };

  const updateAd = (id: string, updates: Partial<DoctorAd>) => {
    setAuth((prev) => prev ? {
      ...prev,
      profile: {
        ...prev.profile,
        ads: prev.profile.ads.map((a) => a.id === id ? { ...a, ...updates } : a),
      },
    } : prev);
  };

  const removeAd = (id: string) => {
    setAuth((prev) => prev ? {
      ...prev,
      profile: { ...prev.profile, ads: prev.profile.ads.filter((a) => a.id !== id) },
    } : prev);
  };

  return (
    <AuthContext.Provider value={{ auth, login, register, logout, updateProfile, addAd, updateAd, removeAd }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
