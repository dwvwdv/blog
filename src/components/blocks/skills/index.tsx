import dynamic from 'next/dynamic'
import type { StaticImageData } from 'next/image'

import { Block } from '@/components/blocks/block'
import cssSvg from '@/images/logo/css.svg'
import htmlSvg from '@/images/logo/html.svg'
import javascriptSvg from '@/images/logo/javascript.svg'
import nodejsSvg from '@/images/logo/nodejs.svg'
import tailwindCSSSvg from '@/images/logo/tailwind-css.svg'
import typeScriptSvg from '@/images/logo/typescript.svg'
import vueSvg from '@/images/logo/vue.svg'
import angularSvg from '@/images/logo/angular.svg'
import csharpSvg from '@/images/logo/csharp.svg'
import dartSvg from '@/images/logo/dart.svg'
import flutterSvg from '@/images/logo/flutter.svg'
import linuxSvg from '@/images/logo/linux.svg'
import luaSvg from '@/images/logo/lua.svg'
import pythonSvg from '@/images/logo/python.svg'
import qtSvg from '@/images/logo/qt.svg'
import vimSvg from '@/images/logo/vim.svg'

const Galton = dynamic(() => import('./galton').then(module => module.Galton), {
  ssr: false,
})

const images: StaticImageData[] = [
  htmlSvg,
  cssSvg,
  javascriptSvg,
  typeScriptSvg,
  tailwindCSSSvg,
  vueSvg,
  nodejsSvg,
	angularSvg,
	csharpSvg,
	dartSvg,
	flutterSvg,
	linuxSvg,
	luaSvg,
	pythonSvg,
	qtSvg,
	vimSvg
]
export const Skills = () => {
  return (
    <Block
      data-type='about'
      className='z-20 row-span-4 bg-surface !p-0 max-sm:col-span-2 sm:row-span-2'
    >
      <div className='absolute right-0 top-0 w-20 -translate-y-1/2 translate-x-1/4 rotate-12 scale-75 rounded-lg p-1 shadow-lg before:absolute before:inset-x-0 before:bottom-0 before:z-20 before:origin-bottom before:scale-y-50 before:rounded-lg before:border-[40px] before:border-transparent before:border-b-red-500 before:border-l-red-500 before:content-["_"] after:absolute after:inset-x-0 after:bottom-0 after:z-10 after:origin-bottom after:scale-y-50 after:rounded-lg after:border-[40px] after:border-transparent after:border-b-red-500 after:border-r-red-500 after:brightness-75 after:content-["_"] dark:before:border-b-blue-950 dark:before:border-l-blue-950 dark:after:border-b-blue-950 dark:after:border-r-blue-950 xl:scale-100'>
        <span className='block h-10 -translate-y-4 rounded bg-amber-50 px-2 py-1 uppercase text-slate-800 shadow dark:bg-gray-200'>
          Skills
        </span>
      </div>
      <Galton images={images} />
    </Block>
  )
}
