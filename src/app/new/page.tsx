import { prisma } from '@/db'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import React from 'react'

const page = () => {
    const handleSubmit = async (data: FormData) => {
        "use server"
        const title = data?.get("title")
        if (typeof title !== "string" || title?.length === 0) {
            throw new Error("Invalid Title!");
        }
        const todo = await prisma.todo.create({ data: { title: title } })
        redirect('/');
    }
  return (
      <main className='h-screen bg-slate-700'>
          <div className='w-[80vw] mx-auto pt-[30px]'>
              <form action={handleSubmit} className='flex flex-col gap-5 '>
              <input type="text" placeholder='Title..' name='title' className='w-1/2 p-2 rounded focus-within:outline-none' required/>
              <div className='flex gap-2'>
                <Link href='..' className='btn-primary'>Cancle</Link>
                <button type="submit" className='btn-primary'>Create</button>  
              </div>
          </form>
          </div>
    </main>
  )
}

export default page