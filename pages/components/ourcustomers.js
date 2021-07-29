const features = [
    { logo: "images/customers/dcww.png", alt: "DCWW Logo", link: "/accreditations/iso9001" },
    { logo: "images/customers/morgan-sindall.jpg", alt: "Morgan Sindall Logo", link: "/accreditations/iso9001" },
    { logo: "images/customers/mmb.jpg", alt: "MMB Logo", link: "/accreditations/iso9001" },
    { logo: "images/customers/whitlandengineering.png", link: "/accreditations/iso9001" },
    { logo: "images/customers/pbgelatins.png", alt: "PB Gelatins Logo", link: "/accreditations/iso9001" },
    { logo: "images/customers/skanska.png", alt: "Skanska Logo", link: "/accreditations/iso9001" },
  ]

export default function OurCustomers() {
    return (
        <div className="bg-white">
        <div className="max-w-7xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <h2 className="text-base font-semibold tracking-wider text-indigo-600 uppercase">Our Customers</h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
            Working togeather
          </p>
          <p className="mt-5 max-w-prose mx-auto text-xl text-gray-500">
            We work with some of the most innovative companies in the UK to provide turnkey solutions
          </p>
          <div className="mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-8">
          {features.map((feature) => (
                  <div className="col-span-1 flex justify-center py-8 px-8 bg-white">
                    <img
                        className="max-h-20"
                        src={feature.logo}
                        alt={feature.alt}
                    />
                  </div>
                ))}
          </div>
        </div>
      </div>
    )
  }