'use client'

import { useEffect } from 'react'

import { ConnectButton } from '@/components/web3/connect-button'
import { HealthContractInteractions } from '@/components/web3/health-contract-interactions'

export default function About() {
  

  
  return (
    <>
      <header>

        <div className="flex flex-col items-center text-center font-mono">
          <ConnectButton />
        </div>
      </header>

      <section className="container mx-auto grid grid-cols-3 gap-4">
        <HealthContractInteractions />
      </section>
    </>
  )
}