export type Action = {
    type: string;
    payload:string;
    key?: string | number | symbol | any;
    value?: any;
    meta?: any;
    _id?: number;
  };
  export interface AppState {
    task: string,
    
  }
  export enum ActionTypes {
    ADD = 'ADD',
    DELETE = 'DELETE'
  }