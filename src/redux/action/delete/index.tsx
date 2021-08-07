import { ActionTypes, Action } from "../../../types"
 export let deleteTask = (_id:number): Action => ({
    type: ActionTypes.DELETE,
    _id,


})