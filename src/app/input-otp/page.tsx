'use client'

import { ReactNode, useState } from 'react'
import { InputOtp } from '@/components/input-otp'
import {Input} from "@/components/input";

export default function Home(): ReactNode {
    const [ code, setCode ] = useState<string>('')
    return (
        <div className='grid grid-cols-4 gap-4 justify-between'>
            <InputOtp label={'verification code'} value={code} onChange={(otp: string): void => setCode(otp)} desc={'invalid username'} size={'small'} severity={'primary'} />
            <InputOtp label={'verification code'} value={code} onChange={(otp: string): void => setCode(otp)} desc={'invalid username'} size={'small'} severity={'danger'} />
            <InputOtp label={'verification code'} value={code} onChange={(otp: string): void => setCode(otp)} desc={'invalid username'} size={'small'} severity={'warning'} />
            <InputOtp label={'verification code'} value={code} onChange={(otp: string): void => setCode(otp)} desc={'invalid username'} size={'small'} severity={'success'} />

            <InputOtp label={'verification code'} value={code} onChange={(otp: string): void => setCode(otp)} desc={'invalid username'} size={'medium'} severity={'primary'} />
            <InputOtp label={'verification code'} value={code} onChange={(otp: string): void => setCode(otp)} desc={'invalid username'} size={'medium'} severity={'danger'} />
            <InputOtp label={'verification code'} value={code} onChange={(otp: string): void => setCode(otp)} desc={'invalid username'} size={'medium'} severity={'warning'} />
            <InputOtp label={'verification code'} value={code} onChange={(otp: string): void => setCode(otp)} desc={'invalid username'} size={'medium'} severity={'success'} />

            <InputOtp label={'verification code'} value={code} onChange={(otp: string): void => setCode(otp)} desc={'invalid username'} size={'large'} severity={'primary'} />
            <InputOtp label={'verification code'} value={code} onChange={(otp: string): void => setCode(otp)} desc={'invalid username'} size={'large'} severity={'danger'} />
            <InputOtp label={'verification code'} value={code} onChange={(otp: string): void => setCode(otp)} desc={'invalid username'} size={'large'} severity={'warning'} />
            <InputOtp label={'verification code'} value={code} onChange={(otp: string): void => setCode(otp)} desc={'invalid username'} size={'large'} severity={'success'} />
        </div>
    )
}