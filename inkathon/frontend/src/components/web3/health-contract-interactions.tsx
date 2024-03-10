'use client'

import { FC, useEffect, useState } from 'react'

import { ContractIds } from '@/deployments/deployments'
import { zodResolver } from '@hookform/resolvers/zod'
import HealthContract from '@inkathon/contracts/typed-contracts/contracts/health_ledger'
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
    title: z.string().min(1).max(255),
    doctor: z.string().min(1).max(90),
    hospital: z.string().min(1).max(90),
    record_type: z.string().min(1).max(90),
})


function parseTimestamp(raw_timestamp: string) {
    return Number(raw_timestamp.replace(/,/g, ''));
}

function convertTimestamp(raw_timestamp: string) {

    // Remove comma & transform to number
    raw_timestamp = raw_timestamp.replace(/,/g, '');
    let timestamp = Number(raw_timestamp);

    // Create date
    const date = new Date(Number(timestamp));

    const year = date.getFullYear();
    const month = date.getMonth() + 1; // Month is zero-based, so add 1
    const day = date.getDate();

    const format = `${year}/${month.toString().padStart(2, '0')}/${day.toString().padStart(2, '0')}`;

    return format;
}



export const HealthContractInteractions: FC = () => {
    const { api, activeAccount, activeSigner } = useInkathon()
    const { contract, address: contractAddress } = useRegisteredContract(ContractIds.HealthLedger)
    const { typedContract } = useRegisteredTypedContract(ContractIds.HealthLedger, HealthContract)


    const [recordsMessage, setRecordMessage] = useState<any[]>([])
    const [fetchIsLoading, setFetchIsLoading] = useState<boolean>()

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
    })

    const { register, reset, handleSubmit } = form

    // Fetch Greeting
    const fetchRecords = async () => {
        
        if (!activeAccount || !contract || !activeSigner || !api) {
            toast.error('Wallet not connected. Try again…')
            return
        }

        if (!contract || !typedContract || !api) return

        setFetchIsLoading(true)
        try {
            const result = await contractQuery(api, activeAccount.address, contract, 'get')
            
            const { output, isError, decodedOutput } = decodeOutput(result, contract, 'get')
            if (isError) throw new Error(decodedOutput)
            if (output != undefined) {
                setRecordMessage(output)
            }

            // Alternatively: Fetch it with typed contract instance
            const typedResult = await typedContract.query.get()
            console.log('Result from typed contract: ', typedResult.value)
        } catch (e) {
            console.error(e)
            toast.error('Error while fetching greeting. Try again…')
            setRecordMessage([])
        } finally {
            setFetchIsLoading(false)
        }
    }
    useEffect(() => {
        fetchRecords()
    }, [typedContract])

    // Update Greeting
    const addNewEvent: SubmitHandler<z.infer<typeof formSchema>> = async ({ title, doctor, hospital, record_type }) => {

        if (!activeAccount || !contract || !activeSigner || !api) {
            toast.error('Wallet not connected. Try again…')
            return
        }

        try {
            await contractTxWithToast(api, activeAccount.address, contract, 'add', {}, [
                title, doctor, hospital, record_type
            ])
            reset()
        } catch (e) {
            console.error(e)
        } finally {
            fetchRecords()
        }
    }

    if (!api) return null

    return (
        <>
            <article className="col-span-2 bg-gray-900">
                <Card>
                    <CardContent className="pt-6">
                        <h3 className='pb-5'>Medical records</h3>

                        <div >

                            {/* {fetchIsLoading || !contract ? 'Loading…' : greeterMessage} */}

                            <ul
                                aria-label="Activity feed"
                                role="feed"
                                className="relative flex flex-col gap-12 py-12 pl-8 before:absolute before:top-0 before:left-8 before:h-full before:-translate-x-1/2 before:border before:border-dashed before:border-slate-200 after:absolute after:top-6 after:left-8 after:bottom-6 after:-translate-x-1/2 after:border after:border-slate-200 "
                            >

                                {/* Iterate over all the health events */}
                                {recordsMessage
                                    .sort((a, b) => parseTimestamp(b.date) - parseTimestamp(a.date))
                                    .map((object, index) => (
                                        <li role="article" className="relative pl-8 " key={index}>
                                            <span className="absolute left-0 z-10 flex items-center justify-center w-10 h-10 -translate-x-1/2 rounded-full bg-slate-200 text-slate-700 ring-2 ring-white ">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth="1.5"
                                                    stroke="currentColor"
                                                    className="w-5 h-5"
                                                    role="presentation"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M6 6.878V6a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 004.5 9v.878m13.5-3A2.25 2.25 0 0119.5 9v.878m0 0a2.246 2.246 0 00-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0121 12v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6c0-.98.626-1.813 1.5-2.122"
                                                    />
                                                </svg>
                                            </span>
                                            <div className="flex flex-col flex-1 gap-0">

                                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                                    {convertTimestamp(object.date)} - {object.title}
                                                </h3>

                                                <div className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">

                                                    <div className="flex items-center">

                                                        <svg xmlns="http://www.w3.org/2000/svg" height="1.2em" viewBox="0 -960 960 960" width="1.2em" fill="currentColor">
                                                            <path d="M680-320q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35Zm0-80q17 0 28.5-11.5T720-440q0-17-11.5-28.5T680-480q-17 0-28.5 11.5T640-440q0 17 11.5 28.5T680-400ZM440-40v-116q0-21 10-39.5t28-29.5q32-19 67.5-31.5T618-275l62 75 62-75q37 6 72 18.5t67 31.5q18 11 28.5 29.5T920-156v116H440Zm79-80h123l-54-66q-18 5-35 13t-34 17v36Zm199 0h122v-36q-16-10-33-17.5T772-186l-54 66Zm-76 0Zm76 0Zm-518 0q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v200q-16-20-35-38t-45-24v-138H200v560h166q-3 11-4.5 22t-1.5 22v36H200Zm80-480h280q26-20 57-30t63-10v-40H280v80Zm0 160h200q0-21 4.5-41t12.5-39H280v80Zm0 160h138q11-9 23.5-16t25.5-13v-51H280v80Zm-80 80v-560 137-17 440Zm480-240Z" />
                                                        </svg>
                                                        <p className="text-gray-500 ml-2">{object.doctor}</p>

                                                    </div>

                                                    <div className="flex items-center">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24">
                                                            <path fill="currentColor" fillRule="evenodd" d="M21.5 8.5c0-1.404 0-2.107-.337-2.611a2 2 0 0 0-.552-.552c-.441-.295-1.034-.332-2.115-.336c.004.291.004.596.004.91V7.25h1a.75.75 0 0 1 0 1.5h-1v1.5h1a.75.75 0 0 1 0 1.5h-1v1.5h1a.75.75 0 0 1 0 1.5h-1v6.5H17V6c0-1.886 0-2.828-.586-3.414C15.828 2 14.886 2 13 2h-2c-1.886 0-2.828 0-3.414.586C7 3.172 7 4.114 7 6v15.25H5.5v-6.5h-1a.75.75 0 0 1 0-1.5h1v-1.5h-1a.75.75 0 0 1 0-1.5h1v-1.5h-1a.75.75 0 0 1 0-1.5h1V5.91c0-.313 0-.618.004-.91c-1.081.005-1.674.042-2.115.337a2 2 0 0 0-.552.552C2.5 6.393 2.5 7.096 2.5 8.5v12.75H2a.75.75 0 0 0 0 1.5h20a.75.75 0 0 0 0-1.5h-.5zM12 4.25a.75.75 0 0 1 .75.75v1.25H14a.75.75 0 0 1 0 1.5h-1.25V9a.75.75 0 0 1-1.5 0V7.75H10a.75.75 0 0 1 0-1.5h1.25V5a.75.75 0 0 1 .75-.75M9.25 12a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75m0 3a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75M12 18.25a.75.75 0 0 1 .75.75v2.25h-1.5V19a.75.75 0 0 1 .75-.75" clipRule="evenodd" /></svg>
                                                        <p className="text-gray-500 ml-2">{object.hospital}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                            </ul>


                            {/* Contract Address */}
                            <p className="text-center font-mono text-xs text-gray-600">
                                {contract ? contractAddress : 'Loading…'}
                            </p>
                        </div>

                    </CardContent>

                </Card>

            </article>


            {/* Add a new medical record */}
            <article >
                <Form {...form}>
                    <Card>
                        <CardContent className="pt-6">
                            <form
                                onSubmit={handleSubmit(addNewEvent)}
                                className="flex flex-col justify-end gap-2"
                            >
                                <FormItem>
                                    <FormLabel className="text-base">Add new record</FormLabel>
                                    <FormControl>
                                        <div className="flex flex-col space-y-4">

                                            <Input disabled={form.formState.isSubmitting} {...register('title')} placeholder="Title" />
                                            <Input disabled={form.formState.isSubmitting} {...register('doctor')} placeholder="Doctor" />
                                            <Input disabled={form.formState.isSubmitting} {...register('hospital')} placeholder="Hospital" />
                                            <Input disabled={form.formState.isSubmitting} {...register('record_type')} placeholder="Record type" />

                                            <Button
                                                type="submit"
                                                className="bg-primary font-bold"
                                                disabled={fetchIsLoading || form.formState.isSubmitting}
                                                isLoading={form.formState.isSubmitting}
                                            >
                                                Submit
                                            </Button>
                                        </div>
                                    </FormControl>
                                </FormItem>
                            </form>
                        </CardContent>
                    </Card>
                </Form>

            </article>
        </>
    )
}
