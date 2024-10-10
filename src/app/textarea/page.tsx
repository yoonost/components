import { ReactNode } from 'react'
import { Textarea } from '@/components/textarea'

export default function Home(): ReactNode {
    return (
        <div className='grid grid-cols-4 gap-4 justify-between'>
            <Textarea label={'username'} placeholder={'enter your username...'} desc={'invalid username'} size={'small'} severity={'primary'} />
            <Textarea label={'username'} placeholder={'enter your username...'} desc={'invalid username'} size={'small'} severity={'danger'} />
            <Textarea label={'username'} placeholder={'enter your username...'} desc={'invalid username'} size={'small'} severity={'warning'} />
            <Textarea label={'username'} placeholder={'enter your username...'} desc={'invalid username'} size={'small'} severity={'success'} />

            <Textarea label={'username'} placeholder={'enter your username...'} desc={'invalid username'} size={'medium'} severity={'primary'} />
            <Textarea label={'username'} placeholder={'enter your username...'} desc={'invalid username'} size={'medium'} severity={'danger'} />
            <Textarea label={'username'} placeholder={'enter your username...'} desc={'invalid username'} size={'medium'} severity={'warning'} />
            <Textarea label={'username'} placeholder={'enter your username...'} desc={'invalid username'} size={'medium'} severity={'success'} />

            <Textarea label={'username'} placeholder={'enter your username...'} desc={'invalid username'} size={'large'} severity={'primary'} />
            <Textarea label={'username'} placeholder={'enter your username...'} desc={'invalid username'} size={'large'} severity={'danger'} />
            <Textarea label={'username'} placeholder={'enter your username...'} desc={'invalid username'} size={'large'} severity={'warning'} />
            <Textarea label={'username'} placeholder={'enter your username...'} desc={'invalid username'} size={'large'} severity={'success'} />
        </div>
    )
}