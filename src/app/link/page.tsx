import { ReactNode } from 'react'
import { Link } from '@/components/link'

export default function Home(): ReactNode {
    return (
        <div className='grid grid-cols-4 gap-4 justify-between'>
            <Link variant={'default'} style={'filled'} size={'small'} href={'#'}>link</Link>
            <Link variant={'success'} style={'filled'} size={'small'} href={'#'}>link</Link>
            <Link variant={'danger'} style={'filled'} size={'small'} href={'#'}>link</Link>
            <Link variant={'primary'} style={'filled'} size={'small'} href={'#'}>link</Link>

            <Link variant={'default'} style={'outlined'} size={'small'} href={'#'}>link</Link>
            <Link variant={'success'} style={'outlined'} size={'small'} href={'#'}>link</Link>
            <Link variant={'danger'} style={'outlined'} size={'small'} href={'#'}>link</Link>
            <Link variant={'primary'} style={'outlined'} size={'small'} href={'#'}>link</Link>


            <Link variant={'default'} style={'filled'} size={'medium'} href={'#'}>link</Link>
            <Link variant={'success'} style={'filled'} size={'medium'} href={'#'}>link</Link>
            <Link variant={'danger'} style={'filled'} size={'medium'} href={'#'}>link</Link>
            <Link variant={'primary'} style={'filled'} size={'medium'} href={'#'}>link</Link>

            <Link variant={'default'} style={'outlined'} size={'medium'} href={'#'}>link</Link>
            <Link variant={'success'} style={'outlined'} size={'medium'} href={'#'}>link</Link>
            <Link variant={'danger'} style={'outlined'} size={'medium'} href={'#'}>link</Link>
            <Link variant={'primary'} style={'outlined'} size={'medium'} href={'#'}>link</Link>


            <Link variant={'default'} style={'filled'} size={'large'} href={'#'}>link</Link>
            <Link variant={'success'} style={'filled'} size={'large'} href={'#'}>link</Link>
            <Link variant={'danger'} style={'filled'} size={'large'} href={'#'}>link</Link>
            <Link variant={'primary'} style={'filled'} size={'large'} href={'#'}>link</Link>

            <Link variant={'default'} style={'outlined'} size={'large'} href={'#'}>link</Link>
            <Link variant={'success'} style={'outlined'} size={'large'} href={'#'}>link</Link>
            <Link variant={'danger'} style={'outlined'} size={'large'} href={'#'}>link</Link>
            <Link variant={'primary'} style={'outlined'} size={'large'} href={'#'}>link</Link>
        </div>
    )
}