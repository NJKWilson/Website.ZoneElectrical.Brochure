import { CheckIcon } from '@heroicons/react/outline'

const features = [
  {
    name: 'Electrical Design',
    description: 'Using our industry standard software we can provide the initial design for your electrical installation.',
  },
  {
    name: 'Electrical Installation',
    description: 'Our team of trained electrical engineers can deliver your electrical installation on time & on budget.',
  },
  {
    name: 'Inspection & Testing',
    description: 'Our qualified NICEIC inspectors can test your installations whether its and initial inspection or a condition report.',
  },
  {
    name: 'Compex Inspection',
    description: 'Our trained and certified Compex engineers can inspect your installations and carry out any needed remedial work.',
  },
  {
    name: 'Control Panel Manufacture',
    description: 'We can design and manufacture conventional control panels to your specifications.',
  },
  {
    name: 'Maintenance & Fault Finding',
    description: 'Our maintenance electricians can deliver carry out fault finding on your equipment to get you back up and running in no time.',
  },
  {
    name: 'Electric Vehicle Charger Installation',
    description: 'With electric vehicle use on the rise we can design, supply and install an electric vehicle charging point.',
  },
  {
    name: 'Lighting Designs',
    description: 'Using the latest industry standard software we can model a 3D light design to suit your needs.',
  },
]

export default function OurServices() {
  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">Specialist Electrical Services</h2>
          <p className="mt-4 text-lg text-gray-500">
            We provide Electrical design & build services to a wide range of sectors, including the oil & gas, chemical, water, pharmaceutical, steel, process manufacturing industries throughout the UK. Our electrical services range from design, specification, procurement, installation, inspection and testing, commissioning, maintenance and on-going support
          </p>
        </div>
        <dl className="mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-4 lg:gap-x-8">
          {features.map((feature) => (
            <div key={feature.name} className="relative">
              <dt>
                <CheckIcon className="absolute h-6 w-6 text-green-500" aria-hidden="true" />
                <p className="ml-9 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
              </dt>
              <dd className="mt-2 ml-9 text-base text-gray-500">{feature.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}