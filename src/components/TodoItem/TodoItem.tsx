"use client";

import { prisma } from "@/db";

type todoItemProps = {
  id: string,
  title: string,
  completed: boolean,
  toggleTodo: (id: string, completed: boolean) => void,
  deleteTodo: (id: string) => void
}


const TodoItem = ({ id, title, completed, toggleTodo, deleteTodo}: todoItemProps) => {
  return (
    <div className="flex gap-3 items-center">
      <input type="checkbox" name="checkbx" id="checkbx" defaultChecked={completed} className="w-4 peer" onChange={(e)=> toggleTodo(id, e.target.checked) }/>
      <label htmlFor="checkbx" className="text-xl text-slate-100 peer-checked:text-slate-500 peer-checked:line-through">{title}</label>
      <div className="p-1 text-slate-100 rounded-md bg-red-600 cursor-pointer hover:bg-red-800" onClick={() => deleteTodo(id)}>Delete</div>
    </div>
  )
}

export default TodoItem