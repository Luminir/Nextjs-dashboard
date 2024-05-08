// local:host3000/dashboard

import { Card } from '@/app/ui/dashboard/cards';
import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import { lusitana } from '@/app/ui/fonts';
// import { fetchCardData } from '@/app/lib/data';
import { Suspense } from 'react';
import { RevenueChartSkeleton, LatestInvoicesSkeleton, CardsSkeleton } from '@/app/ui/skeletons';
import CardWrapper from '@/app/ui/dashboard/cards';
 
export default async function Page() { 
  // const {totalPaidInvoices, totalPendingInvoices, numberOfInvoices, numberOfCustomers} = await fetchCardData(); ==> Alr redirect to ui/dashboard/cards.tsx 
  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {/* SUSPENSE wrap around the DYNAMIC PART TO perform between STATIC & DYNAMIC */}
        <Suspense fallback={<CardsSkeleton />}>
          <CardWrapper /> 
        </Suspense>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        {/* SUSPENSE wrap around the DYNAMIC PART TO perform between STATIC & DYNAMIC */}
        <Suspense fallback={<RevenueChartSkeleton />}>
          <RevenueChart />
        </Suspense>
        {/* SUSPENSE wrap around the DYNAMIC PART TO perform between STATIC & DYNAMIC */}
        <Suspense fallback={<LatestInvoicesSkeleton />}>
          <LatestInvoices/>
        </Suspense>
      </div>
    </main>
  );
}