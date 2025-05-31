import {
  LaptopIcon,
  AppWindowIcon,
  BrainCircuitIcon,
  PackageIcon,
  CheckCircleIcon,
} from 'lucide-react';
import { Link } from 'react-scroll';

interface Package {
  id: string;
  name: string;
  description: string;
  features: string[];
}

interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  packages: Package[];
}

const servicesData: Service[] = [
  {
    id: 'web-dev',
    title: 'Website Development',
    description:
      'Crafting responsive, user-friendly websites that drive engagement and growth for your business.',
    icon: LaptopIcon,
    packages: [
      {
        id: 'basic-web',
        name: 'Basic Website Package',
        description: 'A simple, elegant website with essential features.',
        features: [
          'Up to 5 pages',
          'Responsive design',
          'Basic SEO setup',
          'Contact form',
        ],
      },
      {
        id: 'ecommerce',
        name: 'E-commerce Package',
        description:
          'A robust online store with full e-commerce functionality.',
        features: [
          'Unlimited products',
          'Secure payment gateway integration',
          'Inventory management',
          'Customer accounts',
        ],
      },
    ],
  },
  {
    id: 'app-creation',
    title: 'Application Creation',
    description:
      'Building custom web and mobile applications tailored to your unique business requirements.',
    icon: AppWindowIcon,
    packages: [
      {
        id: 'custom-app',
        name: 'Custom Application Package',
        description:
          'A bespoke application designed to solve your specific challenges.',
        features: [
          'Cross-platform compatibility (optional)',
          'Scalable architecture',
          'API integration',
          'Ongoing support options',
        ],
      },
    ],
  },
  {
    id: 'ai-integration',
    title: 'AI Agent Integration',
    description:
      'Integrating intelligent AI agents to automate processes, enhance user experiences, and unlock new capabilities.',
    icon: BrainCircuitIcon,
    packages: [
      {
        id: 'ai-automation',
        name: 'AI Automation Package',
        description: 'Streamline your operations with custom AI agents.',
        features: [
          'Process analysis & consultation',
          'Custom AI agent development',
          'Seamless integration with existing systems',
          'Performance monitoring',
        ],
      },
    ],
  },
];

export default function ServicesSection() {
  return (
    <section id='services' className='py-16 md:py-24 bg-[#0c1031] text-white'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <div className='text-center mb-12 md:mb-16'>
          <h2 className='text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl'>
            Our <span className='text-[#503d74]'>Services</span>
          </h2>
          <p className='mt-4 max-w-2xl mx-auto text-lg text-gray-400'>
            We offer a comprehensive suite of digital services to bring your
            vision to life.
          </p>
        </div>

        {/* Service Cards */}
        <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
          {servicesData.map((service) => (
            <div
              key={service.id}
              className='bg-[#090c24] rounded-2xl p-6 shadow-lg flex flex-col
              transition transform duration-500
              hover:shadow-fuchsia-950'
            >
              {/* Icon + Title */}
              <div className='flex items-center gap-3 mb-4'>
                <service.icon className='w-10 h-10 text-[#503d74]' />
                <h3 className='text-2xl font-semibold'>{service.title}</h3>
              </div>

              {/* Description */}
              <p className='text-gray-300 mb-4 text-left'>
                {service.description}
              </p>

              {/* Packages */}
              <h4 className='text-sm font-semibold text-gray-400 mb-2 text-left'>
                Available Packages:
              </h4>

              {service.packages.map((pkg) => (
                <div key={pkg.id} className='mb-6'>
                  <div className='flex items-center gap-2 text-lime-400 font-medium mb-1 text-left '>
                    <PackageIcon className='w-5 h-5' />
                    {pkg.name}
                  </div>
                  <p className='text-sm text-gray-400 mb-2 text-left'>
                    {pkg.description}
                  </p>
                  <ul className='space-y-1.5 text-sm text-gray-300 '>
                    {pkg.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className='flex items-start gap-2 text-left'
                      >
                        <CheckCircleIcon className='w-4 h-4 text-lime-400 mt-0.5' />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              {/* CTA Button */}
              <div className='mt-auto pt-4'>
                <Link
                  to='contact'
                  smooth={true}
                  duration={500}
                  className='block text-center bg-lime-400 text-[#0c1031] font-semibold px-4 py-2 rounded-md transition duration-300 hover:bg-[#503d74] cursor-pointer'
                >
                  Inquire about {service.title}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
