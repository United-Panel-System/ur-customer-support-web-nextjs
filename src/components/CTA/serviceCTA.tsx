import Image from "next/image";
import Link from "next/link";

const ServiceCTA = () => {
  return (
    <>
      <section id="serviceCTA" className="py-8 md:py-12 lg:py-20">
        <div className="container">
          <div className="bg-primary/10 dark:bg-dark dark:hover:shadow-gray-dark mt-24 rounded-2xl bg-gradient-to-br px-6 py-12 sm:px-10 md:flex md:items-center md:justify-between md:gap-10 lg:px-16">
            <div className="mb-10 text-center md:mb-0 md:text-left">
              <h3 className="text-2xl font-semibold text-gray-900 sm:text-3xl dark:text-white">
                Your One-Stop Refrigeration Solution
              </h3>
              <p className="text-body-color mt-3 text-lg dark:text-gray-300">
                Discover our complete range of cold system services for
                industrial and commercial needs.
              </p>
              <div className="mt-5 flex justify-start">
                <Link
                  href="/contact-us"
                  className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-red-600 px-8 py-4 font-bold text-white shadow-lg transition-all duration-300 hover:bg-gray-100 hover:bg-red-700 hover:shadow-xl"
                >
                  <span className="relative">Get Quote</span>
                </Link>
              </div>
            </div>

            <div className="mx-auto w-full max-w-sm md:mx-0">
              <Image
                src="/images/banner/support.png"
                width={500}
                height={500}
                alt="Refrigeration Support"
                className="w-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceCTA;
