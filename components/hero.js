

export default function Hero() {
  return (
    <div className="-mt-24 z-0" aria-labelledby="cause-heading">
      <div className="relative h-2/3 bg-gray-800 py-32 px-6 sm:py-40 sm:px-12 lg:px-16">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="images/hero4.jpg"
            alt=""
            className="w-full h-full object-center object-cover"
          />
        </div>
        <div aria-hidden="true" className="absolute inset-0 bg-gray-900 bg-opacity-25" />
        <div className="relative max-w-3xl mx-auto flex flex-col items-center text-center">
          <h2 id="cause-heading" className="text-3xl font-bold font-TimesNewRoman tracking-tight text-white sm:text-4xl">
            Zone Electrical Ltd.
          </h2>
          <p className="mt-3 text-xl text-white">
            We're committed to responsible, sustainable, and ethical manufacturing. Our small-scale approach allows
            us to focus on quality and reduce our impact. We're doing our best to delay the inevitable heat-death of
            the universe.
          </p>
          <a
            href="#"
            className="mt-8 w-full block bg-white border border-transparent rounded-md py-3 px-8 text-base font-medium text-gray-900 hover:bg-gray-100 sm:w-auto"
          >
            Read our story
          </a>
        </div>
      </div>
    </div>
  )
}