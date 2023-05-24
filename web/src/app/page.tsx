import { EmptyMemories } from '@/components/EmptyMemories'
import { api } from '@/lib/axios'
import dayjs from 'dayjs'
import { cookies } from 'next/headers'
import ptBr from 'dayjs/locale/pt-br'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

dayjs.locale(ptBr)

interface Memory {
  id: string
  coverUrl: string
  excerpt: string
  createdAt: string
}

export default async function Home() {
  const isAuthenticated = cookies().has('token')

  if (!isAuthenticated) {
    return <EmptyMemories />
  }

  const token = cookies().get('token')?.value

  const response = await api.get('/memories', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  const memories: Memory[] = response.data

  if (memories.length === 0) {
    return <EmptyMemories />
  }

  return (
    <div className="flex flex-col gap-10 p-8">
      {memories.map((memory) => (
        <div className="space-y-4" key={memory.id}>
          <time className="-ml-12 flex items-center gap-2 text-sm text-gray-100 before:h-px before:w-6 before:bg-gray-50">
            {dayjs(memory.createdAt).format('D[ de ]MMMM[, ]YYYY')}
          </time>
          <Image
            src={memory.coverUrl}
            width={592}
            height={280}
            alt=""
            className="aspect-video w-full object-cover"
          />
          <p className="text-lg leading-relaxed text-gray-100">
            {memory.excerpt}
          </p>

          <Link
            href={`/memories/${memory.id}`}
            className="flex items-center gap-2 text-sm text-gray-200 hover:text-gray-100"
          >
            Ler mais
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      ))}
    </div>
  )
}
