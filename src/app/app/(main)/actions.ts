'use server'

import { auth } from '@/services/auth'
import { prisma } from '@/services/database'
import { z } from 'zod'
import { deleteTodoSchema, upsertTodoSchema } from './schema'

export async function getUserTodos() {
  const session = await auth()
  const todos = await prisma.todo.findMany({
    where: {
      userId: session?.user?.id,
    },
    orderBy: {
      createdAt: 'asc',
    },
  })

  return todos
}

export async function upsertTodo(input: z.infer<typeof upsertTodoSchema>) {
  const session = await auth()

  if (!session?.user?.id) {
    return {
      data: null,
      error: 'User not authorized.',
    }
  }

  if (input.id) {
    const todo = await prisma.todo.findUnique({
      where: {
        id: input.id,
        userId: session?.user?.id,
      },
      select: {
        id: true,
      },
    })

    if (!todo) {
      return {
        error: 'Not found Todo.',
        data: null,
      }
    }

    await prisma.todo.update({
      where: {
        id: input.id,
        userId: session?.user?.id,
      },
      data: {
        title: input.title,
        doneAt: input.doneAt,
      },
    })

    return {
      error: null,
      data: 'Updated todo successfully.',
    }
  }

  if (!input.title) {
    return {
      error: 'Tittle is required.',
      data: null,
    }
  }

  await prisma.todo.create({
    data: {
      title: input.title,
      doneAt: input.doneAt,
      userId: session?.user?.id,
    },
  })

  return {
    error: null,
    data: 'Created todo successfully.',
  }
}

export async function deleteTodo(input: z.infer<typeof deleteTodoSchema>) {
  const session = await auth()

  if (!session?.user?.id) {
    return {
      data: null,
      error: 'User not authorized.',
    }
  }

  await prisma.todo.delete({
    where: {
      id: input.id,
    },
  })

  return {
    data: 'Todo deleted successfully.',
    error: null,
  }
}
