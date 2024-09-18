export interface Question {
  id: number;
  pregunta: string;
  codigo: string;
  opciones: string[];
  respuesta: number;
  userAnswer?: number;
  isCorrect?: boolean;
}
