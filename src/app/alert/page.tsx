import { ReactNode } from 'react'
import { Alert } from '@/components/alert'

export default function Home(): ReactNode {
    return (
        <div className='grid grid-cols-4 gap-4 justify-between'>
            <Alert severity={'success'} variant={'primary'} style={'filled'} title={'title'} message={'message'} />
            <Alert severity={'warning'} variant={'primary'} style={'filled'} title={'title'} message={'message'} />
            <Alert severity={'error'} variant={'primary'} style={'filled'} title={'title'} message={'message'} />
            <Alert severity={'info'} variant={'primary'} style={'filled'} title={'title'} message={'message'} />

            <Alert severity={'success'} variant={'primary'} style={'outlined'} title={'title'} message={'message'} />
            <Alert severity={'warning'} variant={'primary'} style={'outlined'} title={'title'} message={'message'} />
            <Alert severity={'error'} variant={'primary'} style={'outlined'} title={'title'} message={'message'} />
            <Alert severity={'info'} variant={'primary'} style={'outlined'} title={'title'} message={'message'} />


            <Alert severity={'success'} variant={'colored'} style={'filled'} title={'title'} message={'message'} />
            <Alert severity={'warning'} variant={'colored'} style={'filled'} title={'title'} message={'message'} />
            <Alert severity={'error'} variant={'colored'} style={'filled'} title={'title'} message={'message'} />
            <Alert severity={'info'} variant={'colored'} style={'filled'} title={'title'} message={'message'} />

            <Alert severity={'success'} variant={'colored'} style={'outlined'} title={'title'} message={'message'} />
            <Alert severity={'warning'} variant={'colored'} style={'outlined'} title={'title'} message={'message'} />
            <Alert severity={'error'} variant={'colored'} style={'outlined'} title={'title'} message={'message'} />
            <Alert severity={'info'} variant={'colored'} style={'outlined'} title={'title'} message={'message'} />


            <Alert severity={'success'} variant={'colored-icon'} style={'filled'} title={'title'} message={'message'} />
            <Alert severity={'warning'} variant={'colored-icon'} style={'filled'} title={'title'} message={'message'} />
            <Alert severity={'error'} variant={'colored-icon'} style={'filled'} title={'title'} message={'message'} />
            <Alert severity={'info'} variant={'colored-icon'} style={'filled'} title={'title'} message={'message'} />

            <Alert severity={'success'} variant={'colored-icon'} style={'outlined'} title={'title'} message={'message'} />
            <Alert severity={'warning'} variant={'colored-icon'} style={'outlined'} title={'title'} message={'message'} />
            <Alert severity={'error'} variant={'colored-icon'} style={'outlined'} title={'title'} message={'message'} />
            <Alert severity={'info'} variant={'colored-icon'} style={'outlined'} title={'title'} message={'message'} />
        </div>
    )
}