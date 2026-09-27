import React from 'react'

import Logo12 from '../assets/Logo (1).svg'
import Logo13 from '../assets/Logo (2).svg'
import Logo14 from '../assets/Logo (3).svg'
import Logo15 from '../assets/Logo (4).svg'
import Logo16 from '../assets/Logo (5).svg'
import Logo17 from '../assets/Logo (6).svg'
import Logo18 from '../assets/Logo (7).svg'

import Pixelgrade from '../assets/rafiki.svg'

const Footer = () => {
  return (
    <section className="bg-white">

      <div className="max-w-[1080px] mx-auto px-8 py-10">

        {/* ================= OUR CLIENTS ================= */}

        <div className="text-center">

          <h2 className="text-3xl font-semibold text-[#4D4D4D]">
            Our Clients
          </h2>

          <p className="text-[#717171] mt-2">
            We have been working with some Fortune 500+ clients
          </p>

        </div>


        {/* ================= CLIENT LOGOS ================= */}

        <div className="flex items-center justify-between mt-10">

          <img
            className="w-12 h-12 object-contain"
            src={Logo12}
            alt="Client logo"
          />

          <img
            className="w-12 h-12 object-contain"
            src={Logo13}
            alt="Client logo"
          />

          <img
            className="w-12 h-12 object-contain"
            src={Logo14}
            alt="Client logo"
          />

          <img
            className="w-12 h-12 object-contain"
            src={Logo15}
            alt="Client logo"
          />

          <img
            className="w-12 h-12 object-contain"
            src={Logo16}
            alt="Client logo"
          />

          <img
            className="w-12 h-12 object-contain"
            src={Logo17}
            alt="Client logo"
          />

          <img
            className="w-12 h-12 object-contain"
            src={Logo18}
            alt="Client logo"
          />

        </div>


        {/* ================= COMMUNITY TITLE ================= */}

        <div className="text-center mt-16">

          <h2 className="text-3xl font-semibold text-[#4D4D4D] leading-tight">

            Manage your entire community

            <span className="block">
              in a single system
            </span>

          </h2>

        </div>


        {/* ================= CARDS ================= */}

        <div className="flex items-stretch justify-between gap-10 mt-10">

          {/* CARD 1 */}

          <div className="w-[300px] text-center px-6 py-7 shadow-md rounded-lg">

            <div className="text-4xl text-[#4CAF4F] mb-4">
              ♧
            </div>

            <h3 className="text-2xl font-semibold text-[#4D4D4D]">

              Membership

              <span className="block">
                Organisations
              </span>

            </h3>

            <p className="text-[#717171] text-sm mt-3">
              Our membership management software provides full
              automation of membership renewals and payments.
            </p>

          </div>


          {/* CARD 2 */}

          <div className="w-[300px] text-center px-6 py-7 shadow-md rounded-lg">

            <div className="text-4xl text-[#4CAF4F] mb-4">
              ♜
            </div>

            <h3 className="text-2xl font-semibold text-[#4D4D4D]">

              National

              <span className="block">
                Associations
              </span>

            </h3>

            <p className="text-[#717171] text-sm mt-3">
              Our membership management software provides full
              automation of membership renewals and payments.
            </p>

          </div>


          {/* CARD 3 */}

          <div className="w-[300px] text-center px-6 py-7 shadow-md rounded-lg">

            <div className="text-4xl text-[#4CAF4F] mb-4">
              ♧
            </div>

            <h3 className="text-2xl font-semibold text-[#4D4D4D]">

              Clubs And

              <span className="block">
                Groups
              </span>

            </h3>

            <p className="text-[#717171] text-sm mt-3">
              Our membership management software provides full
              automation of membership renewals and payments.
            </p>

          </div>

        </div>


        {/* ================= PIXELGRADE ================= */}

        <div className="flex items-center justify-between gap-16 mt-24 mb-16">

          {/* CHAP TOMON - RASM */}

          <div className="w-[420px]">

            <img
              className="w-full h-auto"
              src={Pixelgrade}
              alt="Pixelgrade illustration"
            />

          </div>


          {/* O'NG TOMON - MATN */}

          <div className="w-[520px]">

            <h2 className="text-4xl font-semibold text-[#4D4D4D] leading-tight">

              The unseen of spending three

              <span className="block">
                years at Pixelgrade
              </span>

            </h2>


            <p className="text-[#717171] text-sm leading-6 mt-5">

              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Sed sit amet justo ipsum. Sed accumsan quam vitae est
              varius fringilla. Pellentesque placerat vestibulum lorem
              sed porta. Nullam mattis tristique iaculis.

            </p>


            <button
              className="bg-[#4CAF4F] text-white px-7 py-3 rounded mt-6"
            >
              Learn More
            </button>

          </div>

        </div>

      </div>

    </section>
  )
}

export default Footer