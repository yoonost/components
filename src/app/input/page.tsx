import { ReactNode } from 'react'
import { Input } from '@/components/input'

export default function Home(): ReactNode {
    return (
        <div className='grid grid-cols-4 gap-4 justify-between'>
            <Input label={'username'} placeholder={'enter your username...'} desc={'invalid username'} size={'small'} severity={'primary'} />
            <Input label={'username'} placeholder={'enter your username...'} desc={'invalid username'} size={'small'} severity={'danger'} />
            <Input label={'username'} placeholder={'enter your username...'} desc={'invalid username'} size={'small'} severity={'warning'} />
            <Input label={'username'} placeholder={'enter your username...'} desc={'invalid username'} size={'small'} severity={'success'} />

            <Input label={'username'} placeholder={'enter your username...'} desc={'invalid username'} size={'medium'} severity={'primary'} />
            <Input label={'username'} placeholder={'enter your username...'} desc={'invalid username'} size={'medium'} severity={'danger'} />
            <Input label={'username'} placeholder={'enter your username...'} desc={'invalid username'} size={'medium'} severity={'warning'} />
            <Input label={'username'} placeholder={'enter your username...'} desc={'invalid username'} size={'medium'} severity={'success'} />

            <Input label={'username'} placeholder={'enter your username...'} desc={'invalid username'} size={'large'} severity={'primary'} />
            <Input label={'username'} placeholder={'enter your username...'} desc={'invalid username'} size={'large'} severity={'danger'} />
            <Input label={'username'} placeholder={'enter your username...'} desc={'invalid username'} size={'large'} severity={'warning'} />
            <Input label={'username'} placeholder={'enter your username...'} desc={'invalid username'} size={'large'} severity={'success'} />
        </div>
    )
}