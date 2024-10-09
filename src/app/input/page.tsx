import { ReactNode } from 'react'
import { Input } from '@/components/input'

export default function Home(): ReactNode {
    return (
        <div className='grid grid-cols-4 gap-4 justify-between'>
            <Input label={'username'} placeholder={'enter your username...'} desc={'invalid username'} severity={'danger'} />
        </div>
    )
}