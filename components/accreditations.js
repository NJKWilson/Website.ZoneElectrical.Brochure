/* This example requires Tailwind CSS v2.0+ */
import {
    CloudUploadIcon,
    CogIcon,
    LockClosedIcon,
    RefreshIcon,
    ServerIcon,
    ShieldCheckIcon,
  } from '@heroicons/react/outline'

  import Link from 'next/link'
  
  const features = [
    { name: 'ISO 9001', logo: "images/accreditations/ISO_9001_URS.png", alt: "ISO9001 Logo", blurb: "ISO 9001 sets out the criteria for a quality management system.", link: "/accreditations/iso9001" },
    { name: 'ISO 14001', logo: "images/accreditations/ISO_14001_URS.png", alt: "ISO14001 Logo", blurb: "ISO 14001 sets out the criteria for an environmental management system." },
    { name: 'ISO 45001', logo: "images/accreditations/ISO_45001_URS.png", alt: "Iso45001 Logo", blurb: "ISO 45001 sets out the criteria for an occupational health and safety (OH&S) management system." },
    { name: 'NICEIC Approved', logo: "images/accreditations/niceic.png", alt: "NICEIC Logo", blurb: "NICEIC provides assessment and certification services for contractors working across the building services sectors." },
    { name: 'UVDB Approved', logo: "images/accreditations/achilles.png", alt: "Achilles UVDB Logo", blurb: "UVDB is the utility industry pre-qualification system used across the UK." },
    { name: 'Compex Approved', logo: "images/accreditations/compex.png", alt: "Compex Logo", blurb: "CompEx is the international scheme for competency validation and certification of personnel who work in explosive atmospheres." },
  ]
  
  export default function Accreditations() {
    return (
      <div className="relative bg-white py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
          <h2 className="text-base font-semibold tracking-wider text-indigo-600 uppercase">Accreditations</h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
            The importance of accreditation
          </p>
          <p className="mt-5 max-w-prose mx-auto text-xl text-gray-500">
            Accreditations help ensure that we meet the standards required to carry out our work safely, to the highest quality possible while meeting all legal requirements   
          </p>
          <div className="mt-12">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => (
                <div key={feature.name} className="pt-6">
                  <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8 h-80">
                    <div className="-mt-6">
                      <div>
                        <span className="inline-flex items-center justify-center p-3 white rounded-md shadow-lg">
                          <img className="h-24" src={feature.logo} alt={feature.alt} />
                        </span>
                      </div>
                      <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">{feature.name}</h3>
                      <p className="mt-5 text-base text-gray-500">
                        {feature.blurb}
                      </p>
                      <div className="mt-5 text-base text-blue-500 text-right">
                        <a href={feature.link}>
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
  