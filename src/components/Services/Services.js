import React from 'react'
import './Services.css'

const Services = () => {
  return (
    <div className='services-container'>
      <div className="services-list-container">

        {/* desc */}
        <div className="services-disc-container">
            <h1>
                My Awesome <span>Services</span>
            </h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea 
                eum tenetur labore dolorem, sint esse in inventore ab 
                laudantium enim, alias neque cupiditate eaque. Voluptatem 
                sed saepe commodi impedit neque. Lorem ipsum dolor sit amet, 
                consectetur adipisicing elit. Facilis ullam dolor provident 
                culpa explicabo. Debitis nobis, asperiores pariatur libero
                nostrum nemo dicta in, ipsum temporibus quo accusantium. 
                Voluptatem, placeat architecto?
            </p>
            <button>Hire Me</button>
        </div>

        {/* item */}
        <div className="service-item-container">
            <div className="services-item">
                <i className='fa-solid fa-code'></i>
                <div className="item-disc">
                    <h3>Web Development</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus,
                        quasi voluptatem! Voluptatum corporis nostrum unde saepe nulla
                        sapiente aliquam, in ab, sed dolorum itaque amet a ut totam, fugiat 
                        odit.
                    </p>
                </div>
            </div>
            <div className="services-item">
                <i className='fa-solid fa-desktop'></i>
                <div className="item-disc">
                    <h3>Desktop Development</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus,
                        quasi voluptatem! Voluptatum corporis nostrum unde saepe nulla
                        sapiente aliquam, in ab, sed dolorum itaque amet a ut totam, fugiat 
                        odit.
                    </p>
                </div>
            </div>
            <div className="services-item">
                <i className='fa-solid fa-tablet-alt'></i>
                <div className="item-disc">
                    <h3>App Development</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus,
                        quasi voluptatem! Voluptatum corporis nostrum unde saepe nulla
                        sapiente aliquam, in ab, sed dolorum itaque amet a ut totam, fugiat 
                        odit.
                    </p>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Services