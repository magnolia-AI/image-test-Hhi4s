'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { 
  User, 
  Settings, 
  LogOut, 
  Mail, 
  Calendar, 
  FileText, 
  Syringe, 
  Star, 
  MessageCircle, 
  Pill, 
  Search,
  MapPin,
  Plus,
  Heart,
  Stethoscope,
  Clock,
  Bell
} from 'lucide-react'
import { useState } from 'react'

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState('start')

  const navigationItems = [
    { id: 'start', label: 'Start' },
    { id: 'inbox', label: 'Inkorg' },
    { id: 'appointments', label: 'Bokade tider' },
    { id: 'records', label: 'Journalen' },
    { id: 'tests', label: 'Egen provhantering' },
    { id: 'treatment', label: 'Stöd och behandling' },
    { id: 'certificates', label: 'Intyg' },
    { id: 'services', label: 'Övriga tjänster' },
  ]

  const serviceCards = [
    {
      id: 'inbox',
      title: 'Inkorg',
      icon: Mail,
      buttons: [
        { text: 'Se inkorg', action: () => console.log('View inbox') }
      ],
      badge: 3
    },
    {
      id: 'care-choice',
      title: 'Vårdval',
      icon: User,
      links: [
        { text: 'Välj/ändra vårdval', href: '#' }
      ],
      buttons: [
        { text: 'S:t Eriks vårdcentral, Kungsholmen', action: () => console.log('View care center') }
      ]
    },
    {
      id: 'records',
      title: 'Journalen',
      icon: FileText,
      buttons: [
        { text: 'Journalen', action: () => console.log('View records') }
      ]
    },
    {
      id: 'booking',
      title: 'Tidbokning',
      icon: Calendar,
      buttons: [
        { text: 'Se bokade tider', action: () => console.log('View bookings') },
        { text: 'Boka tid', action: () => console.log('Book appointment') }
      ],
      badge: 2
    },
    {
      id: 'clinics',
      title: 'Mottagningar',
      icon: MapPin,
      links: [
        { text: 'Hitta och lägg till mottagning', href: '#' }
      ],
      buttons: [
        { text: 'Vårdcentralen Birka, Växjö', action: () => console.log('View clinic') }
      ]
    },
    {
      id: 'self-tests',
      title: 'Egen provhantering',
      icon: Syringe,
      buttons: [
        { text: 'Beställ provtagning och se svar', action: () => console.log('Order test') },
        { text: 'Registrera provtagningskit', action: () => console.log('Register kit') }
      ]
    },
    {
      id: 'shortcuts',
      title: 'Genvägar',
      icon: Star,
      description: 'Du kan lägga till en genväg till en tjänst genom att söka upp tjänsten och klicka på stjärnan bredvid tjänstens namn.'
    },
    {
      id: 'recommendations',
      title: 'Regionen rekommenderar',
      icon: MessageCircle,
      buttons: [
        { text: 'Fråga en sjuksköterska på 1177', action: () => console.log('Ask nurse') },
        { text: 'Fråga psykiatrin', action: () => console.log('Ask psychiatry') },
        { text: 'Lämna synpunkter och klagomål hos', action: () => console.log('Feedback') }
      ]
    },
    {
      id: 'medication',
      title: 'Läkemedelstjänster',
      icon: Pill,
      buttons: [
        { text: 'Se information om recept', action: () => console.log('View prescriptions') },
        { text: 'Förnya recept', action: () => console.log('Renew prescription') }
      ]
    },
    {
      id: 'other-services',
      title: 'Övriga tjänster',
      icon: Search,
      buttons: [
        { text: 'Se alla tjänster', action: () => console.log('View all services') }
      ]
    }
  ]

  const quickActions = [
    { icon: Heart, label: 'Hjärtat', color: 'text-red-500' },
    { icon: Stethoscope, label: 'Symtom', color: 'text-blue-500' },
    { icon: Clock, label: 'Öppettider', color: 'text-green-500' },
    { icon: Bell, label: 'Påminnelser', color: 'text-purple-500' },
  ]

  return (
    <div className="min-h-full bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo section */}
            <div className="flex items-center">
              <div className="bg-[#c51642] rounded-r-full pr-6 pl-4 py-2">
                <span className="text-white text-2xl font-bold">1177</span>
              </div>
            </div>
            
            {/* User profile */}
            <div className="flex items-center space-x-4 bg-[#fef0f0] border border-[#fecaca] rounded-full px-4 py-1">
              <User className="h-5 w-5 text-[#c51642]" />
              <div className="flex flex-col">
                <span className="font-medium text-gray-900">Anton Magnusson</span>
                <div className="flex space-x-2 text-sm">
                  <a href="#" className="text-[#c51642] hover:underline">Inställningar</a>
                  <span className="text-gray-300">|</span>
                  <a href="#" className="text-[#c51642] hover:underline">Logga ut</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Quick Actions */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-center space-x-8">
            {quickActions.map((action, index) => (
              <button 
                key={index}
                className="flex flex-col items-center space-y-1 text-gray-600 hover:text-gray-900"
              >
                <action.icon className={`h-6 w-6 ${action.color}`} />
                <span className="text-xs">{action.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex space-x-8 py-4 overflow-x-auto">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                className={`whitespace-nowrap pb-2 px-1 text-sm font-medium relative ${
                  activeTab === item.id
                    ? 'text-[#c51642] border-b-2 border-[#c51642]'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
                onClick={() => setActiveTab(item.id)}
              >
                {item.label}
                {item.id === 'inbox' && (
                  <span className="absolute -top-1 -right-3 bg-[#c51642] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    3
                  </span>
                )}
                {item.id === 'appointments' && (
                  <span className="absolute -top-1 -right-3 bg-[#c51642] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    2
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceCards.map((card) => (
            <Card key={card.id} className="rounded-lg shadow-sm border border-gray-200">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-[#c51642] font-bold flex items-center">
                    <card.icon className="h-5 w-5 mr-2" />
                    {card.title}
                    {card.badge && (
                      <span className="ml-2 bg-[#c51642] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                        {card.badge}
                      </span>
                    )}
                  </CardTitle>
                  <button className="text-gray-400 hover:text-gray-600">
                    <span className="sr-only">Information</span>
                    <span className="text-xs font-bold border border-gray-300 rounded-full h-5 w-5 flex items-center justify-center">i</span>
                  </button>
                </div>
                <div className="border-b border-[#c51642] mt-2"></div>
              </CardHeader>
              <CardContent className="space-y-3">
                {card.links && (
                  <div className="space-y-2">
                    {card.links.map((link, index) => (
                      <div key={index}>
                        <a 
                          href={link.href} 
                          className="text-[#1e40af] hover:underline text-sm"
                        >
                          {link.text}
                        </a>
                        {index < card.links!.length - 1 && (
                          <div className="border-t border-gray-200 my-2"></div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
                
                {card.description && (
                  <p className="text-gray-700 text-sm">{card.description}</p>
                )}
                
                {card.buttons && (
                  <div className="space-y-2">
                    {card.buttons.map((button, index) => (
                      <Button
                        key={index}
                        variant="secondary"
                        className="w-full justify-start bg-gray-100 hover:bg-gray-200 text-gray-800 border border-gray-200 h-auto py-3 px-4 text-sm"
                        onClick={button.action}
                      >
                        <span className="font-medium">{'>'} {button.text}</span>
                      </Button>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  )
}

