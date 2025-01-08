import Image from 'next/image'
import authorImage from '@/public/images/authors/mel.jpeg'

export default function Intro() {
  return (
    <section className='flex flex-col-reverse items-start gap-x-10 gap-y-4 pb-24 md:flex-row md:items-center'>
      <div className='mt-2 flex-1 md:mt-0'>
        <h1 className='title no-underline'>Hey, I&#39;m Montell.</h1>
        <p className='mt-3 font-light text-muted-foreground'>
          I&#39;m a professional web developer with a knack for crafting
          visually stunning and highly functional websites. Combining creativity
          and technical expertise. I transform your vision into digital
          masterpiece that excels in both appearance and performance.
        </p>
      </div>
      <div className='relative'>
        <Image
          className='flex-1 rounded-lg grayscale'
          src={authorImage}
          alt='Montell Luseno'
          width={175}
          height={175}
          priority
        />
      </div>
    </section>
  )
}
