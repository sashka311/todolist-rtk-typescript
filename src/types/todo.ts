export interface ITodo {
  id: number;
  title: string;
  isCompleted: boolean;
  isChecked: boolean;
}
export interface ITodos {
  todo: ITodo[];
}
