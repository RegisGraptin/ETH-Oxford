
'use client'

import { FC, useEffect, useState } from 'react'

import { ContractIds } from '@/deployments/deployments'
import { zodResolver } from '@hookform/resolvers/zod'
import AccessContract from '@inkathon/contracts/typed-contracts/contracts/access'
import {
    contractQuery,
    decodeOutput,
    useInkathon,
    useRegisteredContract,
    useRegisteredTypedContract,
} from '@scio-labs/use-inkathon'
import { SubmitHandler, useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import * as z from 'zod'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Form, FormControl, FormItem, FormLabel } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { contractTxWithToast } from '@/utils/contract-tx-with-toast'

const formSchema = z.object({
    doctorId: z.string().min(1).max(255),
})

export const AccessContractInteractions: FC = () => {
    const { api, activeAccount, activeSigner } = useInkathon()
    const { contract, address: contractAddress } = useRegisteredContract(ContractIds.Access)
    const { typedContract } = useRegisteredTypedContract(ContractIds.Access, AccessContract)


    const [doctorsMessage, setDoctorsMessage] = useState<any[]>([])
    const [fetchIsLoading, setFetchIsLoading] = useState<boolean>()

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
    })

    const { register, reset, handleSubmit } = form

    // Fetch Greeting
    const fetchDoctors = async () => {
        
        if (!activeAccount || !contract || !activeSigner || !api) {
            toast.error('Wallet not connected. Try again…')
            return
        }

        setFetchIsLoading(true)
        try {
            const result = await contractQuery(api, activeAccount.address, contract, 'get_doctor')
            const { output, isError, decodedOutput } = decodeOutput(result, contract, 'get_doctor')
            if (isError) throw new Error(decodedOutput)
            if (output != undefined) {
                setDoctorsMessage(output)
            }

        } catch (e) {
            console.error(e)
            toast.error('Error while fetching greeting. Try again…')
            setDoctorsMessage([])
        } finally {
            setFetchIsLoading(false)
        }
    }

    useEffect(() => {
        fetchDoctors()
    }, [typedContract])


    // Authorize a doctor
    const authorizeDoctor = async (doctorId: string) => {

        if (!activeAccount || !contract || !activeSigner || !api) {
            toast.error('Wallet not connected. Try again…')
            return
        }

        try {
            await contractTxWithToast(api, activeAccount.address, contract, 'authorize', {}, [
                doctorId
            ])
        } catch (e) {
            console.error(e)
        } finally {
            fetchDoctors()
        }
    }

    const revokeDoctor = async (doctorId: string) => {

        if (!activeAccount || !contract || !activeSigner || !api) {
            toast.error('Wallet not connected. Try again…')
            return
        }

        try {
            await contractTxWithToast(api, activeAccount.address, contract, 'revoke', {}, [
                doctorId
            ])
        } catch (e) {
            console.error(e)
        } finally {
            fetchDoctors()
        }
    }

    const getDoctorStatus = async (doctorId: string) => {
        if (!activeAccount || !contract || !activeSigner || !api) {
            toast.error('Wallet not connected. Try again…')
            return
        }

        if (typedContract == undefined) {
            return false;
        }

        const result = await contractQuery(api, activeAccount.address, contract, 'get_authorization', {}, [doctorId])
        
        const { output, isError, decodedOutput } = decodeOutput(result, contract, 'getAuthorization')
        if (isError) throw new Error(decodedOutput)
        if (output != undefined) {
            return output;
        }
        
        return false;
    }

    if (!api) return null

    return (
        <>
            <article className="col-span-2 bg-gray-900">
                <Card>
                    <CardContent className="pt-6">
                        <h3 className='text-xl font-bold leading-none text-gray-900 dark:text-white pb-5'>List of doctors</h3>

                        <div className="flow-root">
                            <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">

                            {doctorsMessage.map((object: string, index) => (

                                <li className="py-3 sm:py-4" key={index}
                                    // style={{ backgroundColor: getDoctorStatus(object) ? '#5218fa' : '#b7410e' }}
                                >
                                <div className="flex items-center">
                                    <div className="flex-shrink-0">
                                        <img className="w-12 h-12 rounded-full" src="/icons/doctor.png" alt="Doctor icon" />
                                    </div>
                                    <div className="flex-1 min-w-0 ms-4">
                                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                            { object }
                                        </p>
                                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                            email@doctor.com
                                        </p>
                                    </div>
                                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                        <button onClick={() => authorizeDoctor(object)} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                            </svg>
                                            <span className="sr-only">Accept</span>
                                        </button>

                                        <button onClick={() => revokeDoctor(object)} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                            <img className="w-5 h-5" src="/icons/cross.png" />
                                            <span className="sr-only">Revoke</span>
                                        </button>
                                    </div>
                                </div>
                                </li>

                                ))}

                            </ul>
                        </div>


                    </CardContent>

                </Card>

            </article>

        </>
    )
}

