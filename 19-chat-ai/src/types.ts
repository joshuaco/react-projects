export interface Model {
  id: string;
  name: string;
  description: string;
}

export interface Message {
  role: "user" | "assistant";
  content: string;
  loading?: boolean;
}

export interface Chat {
  id: string;
  messages: Message[];
}
