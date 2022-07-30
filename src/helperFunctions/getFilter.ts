import { ITodo } from "../types/todo";
import { FilterTypes } from "../types/filter";

type getFilterProps = {
  elem: ITodo;
  filter: string;
};

export function getFilter(elem: ITodo, filter: string): boolean {
  if (filter === FilterTypes.Upcoming) {
    return !elem.isCompleted;
  }
  if (filter === FilterTypes.Checked) {
    return !elem.isCompleted && elem.isChecked;
  }
  if (filter === FilterTypes.Removed) {
    return elem.isCompleted;
  }

  return true;
}
