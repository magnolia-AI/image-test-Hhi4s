import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '1177 - Personlig sida',
  description: 'Din personliga hälsoplattform',
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <div className="min-h-full bg-gray-50">{children}</div>
}

