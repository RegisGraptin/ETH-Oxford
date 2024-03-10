'use client'

import { AccessContractInteractions } from '@/components/web3/access-control-interaction'
import { Header } from '../components/header'

export default function About() {
  return (
    <>
      <div>
        <Header />

        <section className="container mx-auto grid grid-cols-3 gap-4">
          <AccessContractInteractions />
        </section>
      </div>
    </>
  )
}