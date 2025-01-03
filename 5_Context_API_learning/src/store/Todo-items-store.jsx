import { createContext } from "react";

// we created a diffrent file for create context lekin issko humlog directly app yaha koi bhi most parent file mei bana skte hai 
// yaha humne teeno chize pass krdi hai joki .provider mei value pass kiye the taki auto complt ka option milte rahe 
export const TodoItemsContext=createContext(
    {
        todoItems:[],
        addNewItem:()=>{},
        deleteItem:()=>{}
    }
);
