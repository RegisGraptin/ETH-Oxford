'use client'

import { useEffect } from 'react'

import { useInkathon } from '@scio-labs/use-inkathon'
import { toast } from 'react-hot-toast'

import { Header } from './components/header'

export default function HomePage() {
  // Display `useInkathon` error messages (optional)
  const { error } = useInkathon()
  useEffect(() => {
    if (!error) return
    toast.error(error.message)
  }, [error])

  return (
    <>
      <div>
        <Header />

        {/* Main section */}
        <div>
          <section className="bg-white dark:bg-gray-900">
            <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
              <div className="mr-auto place-self-center lg:col-span-7">
                <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
                  Health Book
                </h1>
                <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                  Securely Trace Your Medical Life Records by Empowering Blockchain Technology.
                  Store your records on-chain and keep ownership and control over your data.
                  Grant access to trusted healthcare providers, putting you in control of your healthcare journey.
                </p>
                <a href="/patient" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                  Get started
                  <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </a>
              </div>
              <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                <img className='rounded-lg' src="/images/patient.png" alt="mockup" />
              </div>
            </div>
          </section>


          {/* Your Health, Your Data, Your Trust */}
          <section className="bg-white dark:bg-gray-900">
            <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">

              <div className="grid mt-6">
                <img className='rounded-lg' src="/images/meeting.png" alt="mockup" />
              </div>

              <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                  Always have your medical record up to date
                </h2>
                <p className="mb-4">
                  When changing of doctors, the new one will not know about all the past medical records you have.
                  It can be difficult for him to know all the things you have encounter and also for you, who may not have the tecnical language to explain to
                  him all the disease you have.

                  We want to simplify that. From the patient, it simplifies the process, no need to prepare the list of all the medecines, or all the allergen you have, it is on-chain.
                  And for the doctor, it is easier, he can have a better understanding of who you are see you current treatment.
                </p>
              </div>

            </div>

          </section>



          <section className="bg-white dark:bg-gray-900">
            <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">

              <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                  Be ready on an emergency
                </h2>
                <p className="mb-4">
                  Have a physical token, similar to your bloodcard, allowing people to access your medical records in case of emergency.

                  Authorize medical entities to access your medical records on emergency issues.
                  When an accident occurs, we do not have the possibility to share in detail all the patient record. However, with on-chain solution,
                  a doctor can have access to those precious data, and adapt care for the patient.

                </p>
              </div>

              <div className="grid mt-6">
                <img className='rounded-lg' src="/images/operation.png" alt="mockup" />
              </div>

            </div>

          </section>



          <section className="bg-white dark:bg-gray-900">
            <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">

              <div className="grid mt-6">
                <img className='rounded-lg' src="/images/analyze.png" alt="mockup" />
              </div>


              <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                  Be part of the reasearch
                </h2>
                <p className="mb-4">
                  By controlling your medical information, you can control to who you send it and what the provider can do with it.

                </p>
              </div>

            </div>

          </section>


          <hr />

          <section className="bg-white dark:bg-gray-900">
            <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
              <div className="mx-auto max-w-screen-sm text-center">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold leading-tight text-gray-900 dark:text-white">Get Started</h2>
                <p className="mb-6 font-light text-gray-500 dark:text-gray-400 md:text-lg">Start storing your medical records.</p>
                <a href="/patient" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                  Get started
                </a>
              </div>
            </div>
          </section>


          <footer className="p-4 bg-white sm:p-6 dark:bg-gray-800">
            <div className="mx-auto max-w-screen-xl">
              <div className="md:flex md:justify-between">
                <div className="mb-6 md:mb-0">
                  <a href="/" className="flex items-center">
                    <img src="/images/logo.png" className="mr-3 h-6 sm:h-16" alt="Health Book Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Health Book</span>
                  </a>
                </div>
                <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">

                </div>
              </div>
              <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
              <div className="sm:flex sm:items-center sm:justify-between">
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="#" className="hover:underline">Health Book™</a>. All Rights Reserved.
                </span>
                <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
                </div>
              </div>
            </div>
          </footer>






        </div >
      </div >
    </>
  )
}
