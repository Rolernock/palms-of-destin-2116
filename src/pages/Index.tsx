import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  MapPin,
  Phone,
  Mail,
  Wifi,
  Car,
  Utensils,
  Dumbbell,
  Waves,
  Users,
  Calendar,
  Clock,
  Star
} from 'lucide-react'

const Index = () => {
  const currentYear = new Date().getFullYear()
  const amenities = [
    {
      icon: Waves,
      label: 'Swimming Pool',
      description: 'Year-round outdoor pool'
    },
    {
      icon: Dumbbell,
      label: 'Fitness Center',
      description: 'Modern equipment'
    },
    {
      icon: Utensils,
      label: 'Restaurant',
      description: 'Multi-cuisine dining'
    },
    { icon: Users, label: 'Spa & Wellness', description: 'Relaxation center' },
    { icon: Car, label: 'Tennis Court', description: 'Professional court' },
    { icon: Wifi, label: 'Free WiFi', description: 'High-speed internet' }
  ]

  const highlights = [
    '7-minute walk to Destin Beach',
    'Spacious rooms with balconies',
    'Full kitchen & washing machine',
    "Children's playground",
    'Live entertainment',
    'Hot tub & spa facilities'
  ]

  return (
    <div className='min-h-screen bg-background'>
      {/* Hero Section */}
      <section className='relative h-screen flex items-center justify-center overflow-hidden'>
        <div
          className='absolute inset-0 bg-cover bg-center bg-no-repeat'
          style={{
            backgroundImage: `url('/lovable-uploads/248a5435-6680-4055-a047-a57047d11ab8.png')`
          }}
        >
          <div className='absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60'></div>
        </div>

        <div className='relative z-10 text-center text-white max-w-4xl mx-auto px-6'>
          <Badge
            className='mb-6 bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20'
            variant='outline'
          >
            Luxury Resort Living
          </Badge>
          <h1 className='text-5xl md:text-7xl font-bold mb-6 animate-fade-in'>
            The Palms of Destin
            <span className='block text-3xl md:text-4xl font-light mt-2 text-primary-light'>
              Unit 2116
            </span>
          </h1>
          <p className='text-xl md:text-2xl mb-8 text-white/90 animate-slide-in'>
            Experience luxury coastal living in the heart of Destin, Florida
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center animate-fade-in'>
            <Button variant='luxury' size='lg' className='text-lg px-8 py-6'>
              <Calendar className='mr-2' />
              Book Your Stay
            </Button>
            <Button variant='glass' size='lg' className='text-lg px-8 py-6'>
              <MapPin className='mr-2' />
              Explore Location
            </Button>
          </div>
        </div>
      </section>

      {/* Property Overview */}
      <section className='py-20 px-6'>
        <div className='max-w-7xl mx-auto'>
          <div className='grid lg:grid-cols-2 gap-12 items-center'>
            <div className='space-y-6'>
              <Badge
                variant='outline'
                className='text-primary border-primary/30'
              >
                Prime Location
              </Badge>
              <h2 className='text-4xl md:text-5xl font-bold text-foreground'>
                Your Home Away From Home
              </h2>
              <p className='text-lg text-muted-foreground leading-relaxed'>
                Located at 4207 Indian Bayou Trail, Unit 2116, Destin, FL 32541,
                The Palms of Destin offers unparalleled luxury and comfort. Just
                a 7-minute walk from pristine Destin Beach, this exceptional
                property combines modern amenities with coastal charm.
              </p>

              <div className='grid sm:grid-cols-2 gap-4'>
                {highlights.map((highlight, index) => (
                  <div key={index} className='flex items-center space-x-3'>
                    <div className='w-2 h-2 bg-primary rounded-full'></div>
                    <span className='text-foreground font-medium'>
                      {highlight}
                    </span>
                  </div>
                ))}
              </div>

              <div className='flex items-center space-x-6 pt-4'>
                <div className='flex items-center space-x-2'>
                  <Clock className='w-5 h-5 text-primary' />
                  <span className='text-sm text-muted-foreground'>
                    Check-in: 3:00 PM
                  </span>
                </div>
                <div className='flex items-center space-x-2'>
                  <Clock className='w-5 h-5 text-primary' />
                  <span className='text-sm text-muted-foreground'>
                    Check-out: 10:00 AM
                  </span>
                </div>
              </div>
            </div>

            <div className='relative'>
              <img
                src='/lovable-uploads/394f1b87-3632-450b-a449-3a1e1319c31a.png'
                alt='Luxury living room'
                className='rounded-2xl shadow-luxury'
              />
              <div className='absolute -bottom-6 -right-6 bg-white rounded-xl p-4 shadow-card'>
                <div className='flex items-center space-x-2'>
                  <Star className='w-5 h-5 text-warm-accent fill-current' />
                  <span className='font-bold text-lg'>4.9</span>
                  <span className='text-muted-foreground'>Rating</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accommodations */}
      <section className='py-20 bg-gradient-coastal'>
        <div className='max-w-7xl mx-auto px-6'>
          <div className='text-center mb-16'>
            <Badge variant='outline' className='mb-4'>
              Comfortable Accommodations
            </Badge>
            <h2 className='text-4xl md:text-5xl font-bold mb-6'>
              Spacious & Modern Living
            </h2>
            <p className='text-xl text-muted-foreground max-w-3xl mx-auto'>
              Each room features air-conditioning, private bathrooms, balconies,
              full kitchen, and washing machine with all modern amenities for
              your comfort.
            </p>
          </div>

          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            <Card className='overflow-hidden shadow-card hover:shadow-luxury transition-all duration-300 transform hover:scale-105'>
              <img
                src='/lovable-uploads/b3362a80-71ab-48bb-ac61-fcf02ec4cc1f.png'
                alt='Bedroom'
                className='w-full h-64 object-cover'
              />
              <CardContent className='p-6'>
                <h3 className='text-xl font-bold mb-2'>Master Bedroom</h3>
                <p className='text-muted-foreground'>
                  Comfortable king-size bed with premium linens and coastal
                  decor
                </p>
              </CardContent>
            </Card>

            <Card className='overflow-hidden shadow-card hover:shadow-luxury transition-all duration-300 transform hover:scale-105'>
              <img
                src='/lovable-uploads/dfb82185-a44b-476c-b7f4-a16d94629a2a.png'
                alt='Living Area'
                className='w-full h-64 object-cover'
              />
              <CardContent className='p-6'>
                <h3 className='text-xl font-bold mb-2'>Living Area</h3>
                <p className='text-muted-foreground'>
                  Open concept living with modern furnishings and entertainment
                  center
                </p>
              </CardContent>
            </Card>

            <Card className='overflow-hidden shadow-card hover:shadow-luxury transition-all duration-300 transform hover:scale-105'>
              <img
                src='/lovable-uploads/c897a653-6d6b-4cc2-bd29-cecbf10a7fab.png'
                alt='Bathroom'
                className='w-full h-64 object-cover'
              />
              <CardContent className='p-6'>
                <h3 className='text-xl font-bold mb-2'>Private Bathroom</h3>
                <p className='text-muted-foreground'>
                  Modern fixtures with nautical design and premium amenities
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className='py-20'>
        <div className='max-w-7xl mx-auto px-6'>
          <div className='text-center mb-16'>
            <Badge variant='outline' className='mb-4'>
              Exceptional Facilities
            </Badge>
            <h2 className='text-4xl md:text-5xl font-bold mb-6'>
              Resort-Style Amenities
            </h2>
            <p className='text-xl text-muted-foreground max-w-3xl mx-auto'>
              Enjoy world-class facilities including spa, pools, fitness center,
              and entertainment
            </p>
          </div>

          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12'>
            {amenities.map((amenity, index) => (
              <Card
                key={index}
                className='p-6 text-center shadow-card hover:shadow-luxury transition-all duration-300 transform hover:scale-105'
              >
                <div className='w-16 h-16 bg-gradient-ocean rounded-full flex items-center justify-center mx-auto mb-4'>
                  <amenity.icon className='w-8 h-8 text-white' />
                </div>
                <h3 className='text-xl font-bold mb-2'>{amenity.label}</h3>
                <p className='text-muted-foreground'>{amenity.description}</p>
              </Card>
            ))}
          </div>

          <div className='grid lg:grid-cols-2 gap-8'>
            <Card className='overflow-hidden shadow-luxury'>
              <img
                src='/lovable-uploads/70d6ca63-cc57-48c3-80d4-7a80d7e756c7.png'
                alt='Fitness Center'
                className='w-full h-64 object-cover'
              />
              <CardContent className='p-6'>
                <h3 className='text-2xl font-bold mb-2'>
                  State-of-the-Art Fitness Center
                </h3>
                <p className='text-muted-foreground'>
                  Modern equipment with tropical atmosphere and ceiling fans for
                  comfort
                </p>
              </CardContent>
            </Card>

            <Card className='overflow-hidden shadow-luxury'>
              <img
                src='/lovable-uploads/59cfe02d-3b26-4f7a-ae81-3421b2750ec2.png'
                alt="Children's Playground"
                className='w-full h-64 object-cover'
              />
              <CardContent className='p-6'>
                <h3 className='text-2xl font-bold mb-2'>
                  Children's Playground
                </h3>
                <p className='text-muted-foreground'>
                  Safe and fun playground equipment surrounded by tropical
                  landscaping
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Dining Experience */}
      <section className='py-20 bg-gradient-coastal'>
        <div className='max-w-7xl mx-auto px-6'>
          <div className='grid lg:grid-cols-2 gap-12 items-center'>
            <div>
              <img
                src='/lovable-uploads/e60ae140-0188-43e5-ba8c-73ed4bce771b.png'
                alt='Restaurant & Bar'
                className='rounded-2xl shadow-luxury'
              />
            </div>

            <div className='space-y-6'>
              <Badge
                variant='outline'
                className='text-primary border-primary/30'
              >
                Dining Experience
              </Badge>
              <h2 className='text-4xl md:text-5xl font-bold'>
                Culinary Excellence
              </h2>
              <p className='text-lg text-muted-foreground leading-relaxed'>
                Our family-friendly restaurant serves American, Italian,
                Mediterranean, and seafood cuisines. Enjoy brunch, lunch, and
                dinner with cocktails in a beautiful waterfront setting.
              </p>

              <div className='space-y-3'>
                <div className='flex items-center space-x-3'>
                  <Badge variant='secondary'>American</Badge>
                  <Badge variant='secondary'>Italian</Badge>
                  <Badge variant='secondary'>Mediterranean</Badge>
                </div>
                <div className='flex items-center space-x-3'>
                  <Badge variant='secondary'>Seafood</Badge>
                  <Badge variant='secondary'>Cocktails</Badge>
                  <Badge variant='secondary'>Family-Friendly</Badge>
                </div>
              </div>

              <Button variant='warm' size='lg' className='mt-6'>
                <Utensils className='mr-2' />
                View Menu
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Contact */}
      <section className='py-20'>
        <div className='max-w-7xl mx-auto px-6'>
          <div className='text-center mb-16'>
            <Badge variant='outline' className='mb-4'>
              Prime Location
            </Badge>
            <h2 className='text-4xl md:text-5xl font-bold mb-6'>
              Perfect Destin Location
            </h2>
            <p className='text-xl text-muted-foreground max-w-3xl mx-auto'>
              Just 7 minutes from Destin Beach and 3.7 miles from Destin Harbor
              Boardwalk. Close to Big Kahunas and Emerald Coast Science Center.
            </p>
          </div>

          <div className='grid lg:grid-cols-2 gap-12'>
            <Card className='p-8 shadow-luxury'>
              <h3 className='text-2xl font-bold mb-6'>Contact Information</h3>
              <div className='space-y-4'>
                <div className='flex items-start space-x-4'>
                  <MapPin className='w-6 h-6 text-primary mt-1' />
                  <div>
                    <p className='font-medium'>Address</p>
                    <p className='text-muted-foreground'>
                      4207 Indian Bayou Trail, Unit 2116
                      <br />
                      Destin, FL 32541, United States
                    </p>
                  </div>
                </div>

                <div className='flex items-center space-x-4'>
                  <Phone className='w-6 h-6 text-primary' />
                  <div>
                    <p className='font-medium'>Phone</p>
                    <p className='text-muted-foreground'>+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className='flex items-center space-x-4'>
                  <Mail className='w-6 h-6 text-primary' />
                  <div>
                    <p className='font-medium'>Email</p>
                    <p className='text-muted-foreground'>
                      info@palmsofdestin2116.com
                    </p>
                  </div>
                </div>
              </div>

              <div className='mt-8 space-y-3'>
                <Button variant='luxury' size='lg' className='w-full'>
                  <Calendar className='mr-2' />
                  Reserve Now
                </Button>
                <Button
                  onClick={() => window.open('tel:+1 (555) 123-4567', '_self')}
                  variant='outline'
                  size='lg'
                  className='w-full'
                >
                  <Phone className='mr-2' />
                  Call for Booking
                </Button>
              </div>
            </Card>

            <div className='relative'>
              <img
                src='/lovable-uploads/b9f34eef-b86c-4a8b-8efb-106cf0c60ca1.png'
                alt='Pool Area'
                className='rounded-2xl shadow-luxury w-full h-full object-cover'
              />
              <div className='absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent rounded-2xl'></div>
              <div className='absolute bottom-6 left-6 text-white'>
                <h4 className='text-xl font-bold mb-2'>
                  Tropical Paradise Awaits
                </h4>
                <p className='text-white/90'>
                  Experience luxury resort living in beautiful Destin
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className='bg-primary text-primary-foreground py-12'>
        <div className='max-w-7xl mx-auto px-6 text-center'>
          <h3 className='text-2xl font-bold mb-4'>
            The Palms of Destin - Unit 2116
          </h3>
          <p className='text-primary-foreground/80 mb-6'>
            Luxury coastal living in the heart of Destin, Florida
          </p>
          <div className='flex justify-center items-center space-x-6 text-sm mb-4'>
            <span>Privacy Policy</span>
            <span>•</span>
            <span>Terms of Service</span>
            <span>•</span>
            <span>© {currentYear} The Palms of Destin</span>
          </div>
          <div className='flex justify-center items-center space-x-2 text-sm text-primary-foreground/70'>
            <Phone className='w-4 h-4' />
            <span>Contact Developer:</span>
            <a
              href='tel:0791483839'
              className='hover:text-primary-foreground transition-colors'
            >
              0791483839
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Index
