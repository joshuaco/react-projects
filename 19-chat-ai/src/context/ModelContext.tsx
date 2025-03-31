import { Model } from "@/types";
import { createContext, useState, useContext, ReactNode } from "react";

const models: Model[] = [
  {
    id: "deepseek/deepseek-chat-v3-0324:free",
    name: "DeepSeek V3",
    description: "The latest and most powerful model from DeepSeek",
  },
  {
    id: "google/gemini-2.5-pro-exp-03-25:free",
    name: "Google Gemini 2.5 Pro",
    description: "Designed for advanced reasoning, coding, mathematics, and scientific tasks",
  },
  {
    id: "google/gemini-2.0-flash-exp:free",
    name: "Google Gemini 2.0 Flash",
    description: "Designed for fast and efficient text generation and understanding",
  }
];

interface ModelContextType {
  models: Model[];
  selectedModel: Model;
  setSelectedModel: (model: Model) => void;
}

const ModelContext = createContext<ModelContextType | undefined>(undefined);

export const useModel = () => {
  const context = useContext(ModelContext);
  if (!context) {
    throw new Error("useModel must be used within a ModelProvider");
  }
  return context;
};

interface ModelProviderProps {
  children: ReactNode;
}

export const ModelProvider = ({ children }: ModelProviderProps) => {
  const [selectedModel, setSelectedModel] = useState<Model>(models[0]);

  return (
    <ModelContext.Provider value={{ models, selectedModel, setSelectedModel }}>
      {children}
    </ModelContext.Provider>
  );
};

