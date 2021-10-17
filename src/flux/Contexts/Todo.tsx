import { useReducer, createContext, Dispatch } from "react";

const dispatch = {} as Dispatch<{ type: string, value?: any }>;


const initialState = {
  list: [{
    id: 1,
    name: "Jog around the park 1x",
    completed: true
  }, {
    id: 2,
    name: "Jog around the park2x",
    completed: false
  }, {
    id: 3,
    name: "Jog around the park 3x",
    completed: false
  }],
  active: [{
    id: 2,
    name: "Jog around the park 2x",
    completed: false
  }, {
    id: 3,
    name: "Jog around the park 3x",
    completed: false
  }],
  completed: [{
    id: 1,
    name: "Jog around the park 1x",
    completed: true
  }],
  filter: "all",
  dispatch
};

const todoReducer = (state: any, action: { type: string, value?: any }) => {
  let { completed, active } = state;
  switch (action.type) {
    case "ALL":
      return {
        ...state,
        filter: "all",
        list: [
          ...state.active,
          ...state.completed
        ]
      };
    case "ACTIVE":
      return {
        ...state,
        filter: "active",
        list: state.active
      };
    case "COMPLETED":
      return {
        ...state,
        filter: "completed",
        list: state.completed
      };
    case "CLEAR_COMPLETED":
      return {
        ...state,
        list: state.list.filter((elem: any) => !elem.completed),
        completed: []
      };

    case "CHANGE_COMPLETED":
      const changedElem = action.value;
      active = active.filter((elem: any) => !elem.completed && elem.id !== changedElem.id);
      completed = completed.filter((elem: any) => elem.completed && elem.id !== changedElem.id)

      changedElem.completed ? completed.push(changedElem) : active.push(changedElem);
      return {
        ...state,
        list: [...active, ...completed],
        active,
        completed
      };
    case "ADD":
      const elem = {
        ...action.value, id: new Date().getTime()
      }
      elem.completed ? completed.push(elem) : active.push(elem);
      return {
        ...state,
        list: [...active, ...completed],
        active,
        completed
      };
    case "DELETED":
      return {
        ...state,
        list: state.list.filter((elem: any) => elem.id !== action.value),
        active: state.active.filter((elem: any) => elem.id !== action.value),
        completed: state.completed.filter((elem: any) => elem.id !== action.value)
      };
    default:
      return state;
  }
};

export const TodoContext = createContext(initialState);

const Provider = TodoContext.Provider;

export const TodoProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  const value = { ...state, dispatch };
  return <Provider value={value}>{children}</Provider>;
}
