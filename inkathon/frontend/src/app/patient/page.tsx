'use client'

import { HealthContractInteractions } from '@/components/web3/health-contract-interactions'
import { Header } from '../components/header'

export default function About() {
  return (
    <>
      <div>
        <Header />

        <section className="container mx-auto grid grid-cols-3 gap-4">
          <HealthContractInteractions />
        </section>
      </div>
    </>
  )
}