import { IconX } from '@tabler/icons-react'

import type { Metadata, Viewport } from 'next'
import Link from 'next/link'

import { Dot } from '@/components/blocks/resume'
import { Typed, TypedContent, TypedText } from '@/components/typed'
import { formatDateTime } from '@/utils'

export const metadata: Metadata = {
	title: 'Resume',
}

export const viewport: Viewport = {
	colorScheme: 'dark',
	themeColor: [
		{ color: '#282935', media: '(prefers-color-scheme: light)' },
		{ color: '#282935', media: '(prefers-color-scheme: dark)' },
	],
}

export default function Page() {
	const lastBuildTime = formatDateTime(
		{
			day: '2-digit',
			hour: '2-digit',
			hour12: false,
			minute: '2-digit',
			month: 'short',
			second: '2-digit',
			weekday: 'short',
		},
		new Date(),
	)

	return (
		<div className='flex min-h-screen items-center justify-center bg-[#282935] p-6'>
			<main className='flex max-h-[90vh] max-w-prose flex-1 flex-col overflow-hidden rounded-2xl border border-gray-700 shadow-xl shadow-black'>
				<header className='grid h-12 flex-none grid-cols-[1fr_2fr_1fr] items-center border-b border-gray-800 bg-zinc-800 px-6 text-xs font-semibold text-gray-300'>
					<span className='flex gap-3'>
						<Dot className='relative flex items-center justify-center bg-red-600'>
							<IconX className='invisible group-hover:visible size-3' />
						</Dot>
						<Dot className='cursor-not-allowed bg-yellow-500' />
						<Dot className='cursor-not-allowed bg-green-600' />
					</span>
					<span className='text-center font-mono text-gray-400'>
						dwvwdv@devstation:~$
					</span>
					<span className='text-end text-gray-500'>⌥⌘D</span>
				</header>
				<div className='flex-1 overflow-y-auto p-4 text-sm text-gray-200 animate-fadeIn'>
					<p className='mb-3'>Last login: {lastBuildTime} on ttys003</p>
					<Typed>
						<TypedText>whoami</TypedText>
						<TypedContent>
							<p>
								Hello, I&apos;m <strong>Lazy Bone</strong>, a software developer and HackerOne white hat with a passion for innovation and security.
							</p>
							<p>
								Based in <strong>Taiwan</strong>, I specialize in <code>C#</code>, <code>JavaScript</code>, <code>Python</code>, and <code>Flutter</code>, while actively learning <code>Golang</code>.
							</p>
							<p>
								I focus on terminal-centric workflows and efficient development environments.
							</p>
						</TypedContent>

						<TypedText afterDelay={1000}>ls</TypedText>
						<TypedContent>
							<div className='grid grid-cols-2 gap-3 px-4 font-semibold text-sky-500'>
								<span>opensource</span>
								<span>experience</span>
								<span>skills</span>
								<span>contact</span>
							</div>
						</TypedContent>

						<TypedText>experience</TypedText>
						<TypedContent>
							<p>
								I am currently employed at a Fortune Global 500 Japanese enterprise, where I focus on software development and system-level architecture.
							</p>
						</TypedContent>

						<TypedText>skills</TypedText>
						<TypedContent>
							<p>
								Proficient in <code>C#</code>, <code>JavaScript</code>, <code>TypeScript</code>, and <code>Python</code>.
							</p>
							<p>
								Experienced with tools including <code>Supabase</code>, <code>SQL Server</code>, and <code>Neovim</code>.
							</p>
							<p>
								Also skilled in mobile development with <code>Flutter</code> and <code>SwiftUI</code>.
							</p>
						</TypedContent>

						<TypedText>contact</TypedText>
						<TypedContent>
							<div className='my-4 flex items-center gap-6'>
								<p className='basis-1/4 text-center font-semibold'>Social</p>
								<div className='grid flex-1 grid-cols-2 gap-4 text-sky-400'>
									<a href='https://github.com/dwvwdv' target='_blank' rel='noreferrer'>GitHub</a>
									<a href='https://zeroday.hitcon.org/user/dwvwdv/vulnerability' target='_blank' rel='noreferrer'>HITCON</a>
								</div>
							</div>
							<div className='flex items-center gap-4'>
								<p className='basis-1/4 text-center font-semibold'>Email</p>
								<a href='mailto:everycansee.ku682@passinbox.com' className='text-sky-400'>everycansee.ku682@passinbox.com</a>
							</div>
						</TypedContent>
					</Typed>
				</div>
			</main>
		</div>
	)
}
