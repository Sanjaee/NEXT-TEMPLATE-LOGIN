export interface User {
  id: number;
  phone_number: string;
  name: string;
  about?: string;
  avatar_url?: string;
  last_seen?: string;
  created_at: string;
}

export interface RegisterRequest {
  phone_number: string;
  name: string;
  password: string;
}

export interface LoginRequest {
  phone_number: string;
  password: string;
}

export interface SearchUserRequest {
  phone_number?: string;
  email?: string;
}

export interface AuthResponse {
  user: User;
  token: string;
}

