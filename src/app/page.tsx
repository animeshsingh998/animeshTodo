import TodoItem from '@/components/TodoItem/TodoItem';
import { prisma } from '@/db';

function getTodos() {
  return prisma.todo.findMany();
}

async function toggleTodo(id: string, completed: boolean) {
  "use server";
  await prisma.todo.update({where:{id: id} , data: {completed: completed}})
}

async function deleteTodo(id: string) {
  "use server"
  await prisma.todo.delete({ where: { id } });
}

export default async function Home() {
  const todos = await getTodos();
  return (
    <main className='h-screen bg-slate-700'>
      <div className='w-[80vw] mx-auto pt-9'>
        <h3 className="text-xl text-slate-100">Available Todos:</h3>
        <ul className='flex flex-col gap-5'>
          {todos.map(todo => (
            <TodoItem key={todo.id} {...todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
          ))}
        </ul>
        <h4 className='text-sm text-slate-300 mt-5 '>After deleting any todo, please reload the page to view changes..</h4>
      </div>
    </main>
  )
}
