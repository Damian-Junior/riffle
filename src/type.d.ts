 export type Action = {
    type: string | null;
    payload:string;
    key?: string | number | symbol | any;
    value?: any;
    meta?: any;
    _id?: number;
  };
  export interface AppState {
    task: string;
  }