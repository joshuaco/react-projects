export enum Plan {
  BASIC = 'Basic',
  PRO = 'Pro',
  PREMIUM = 'Premium',
  ENTERPRISE = 'Enterprise',
}

export interface Client {
  id: string; // C1-12345
  name: string;
  email: string;
  phone: string;
  address: string;
  memberSince: Date;
  currentPlan: Plan;
}

export interface Message {
  id: string;
  clientId: string;
  content: string;
  createdAt: Date;
  sender: 'agent' | 'client';
  like: 'liked' | 'disliked' | 'neutral';
}

export interface Contact {
  id: string,
  name: string,
  initials: string,
  avatarColor: string,
  isOnline: boolean,
  lastMessage: string,
  timestamp: string
}