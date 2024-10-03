import { Button } from '@/components/button'

export default function Home() {
    return (
        <div className='flex flex-col gap-y-6'>
            <div className='flex flex-row gap-x-3'>
                <Button size={'small'} variant={'default'} loading={true}>small</Button>
                <Button size={'medium'} variant={'default'} loading={false}>medium</Button>
                <Button size={'large'} variant={'default'} loading={true}>large</Button>
                <Button size={'small'} variant={'positive'} loading={false}>small</Button>
                <Button size={'medium'} variant={'positive'} loading={true}>medium</Button>
                <Button size={'large'} variant={'positive'} loading={false}>large</Button>
                <Button size={'small'} variant={'negative'} loading={true}>small</Button>
                <Button size={'medium'} variant={'negative'} loading={false}>medium</Button>
                <Button size={'large'} variant={'negative'} loading={true}>large</Button>
                <Button size={'small'} variant={'neutral'} loading={false}>small</Button>
                <Button size={'medium'} variant={'neutral'} loading={true}>medium</Button>
                <Button size={'large'} variant={'neutral'} loading={false}>large</Button>
                <Button size={'small'} variant={'outline'} loading={true}>small</Button>
                <Button size={'medium'} variant={'outline'} loading={false}>medium</Button>
                <Button size={'large'} variant={'outline'} loading={true}>large</Button>
            </div>
        </div>
    )
}