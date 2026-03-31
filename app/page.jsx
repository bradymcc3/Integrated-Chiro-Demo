export default function IntegratedChiroMockWebsite() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="border-b border-slate-200 bg-white/95 sticky top-0 z-20 backdrop-blur">
        <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
          <div>
            <div className="text-xl font-semibold tracking-tight">Integrated Chiropractic</div>
            <div className="text-sm text-slate-500">Loveland, Colorado</div>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm text-slate-600">
            <a href="#services" className="hover:text-slate-900">Services</a>
            <a href="#why" className="hover:text-slate-900">Why Us</a>
            <a href="#new-patients" className="hover:text-slate-900">New Patients</a>
            <a href="#contact" className="hover:text-slate-900">Contact</a>
          </nav>
          <div className="flex items-center gap-3">
            <a
              href="tel:9704812940"
              className="hidden sm:inline-flex rounded-2xl border border-slate-300 px-4 py-2 text-sm font-medium hover:bg-slate-50"
            >
              (970) 481-2940
            </a>
            <a
              href="#book"
              className="inline-flex rounded-2xl bg-slate-900 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-slate-800"
            >
              Book Appointment
            </a>
          </div>
        </div>
      </header>

      <main>
        <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <div className="mb-4 inline-flex rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700">
                Walk-in friendly chiropractic care in Loveland
              </div>
              <h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-tight">
                Relief for back pain, neck pain, headaches, and injury recovery.
              </h1>
              <p className="mt-6 text-lg leading-8 text-slate-600 max-w-xl">
                Integrated Chiropractic helps patients feel better, move better, and get back to daily life faster with personalized, patient-first care.
              </p>
              <div className="mt-8 flex flex-wrap gap-4" id="book">
                <a
                  href="https://integratedwic.janeapp.com"
                  className="inline-flex rounded-2xl bg-slate-900 px-5 py-3 text-base font-medium text-white shadow-sm hover:bg-slate-800"
                >
                  Book Your First Visit
                </a>
                <a
                  href="#new-patients"
                  className="inline-flex rounded-2xl border border-slate-300 px-5 py-3 text-base font-medium hover:bg-slate-50"
                >
                  New Patient Forms
                </a>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-4 text-sm text-slate-600 sm:grid-cols-4">
                <div className="rounded-2xl bg-slate-50 p-4">
                  <div className="font-semibold text-slate-900">Walk-in Friendly</div>
                  <div className="mt-1">Fast, convenient care</div>
                </div>
                <div className="rounded-2xl bg-slate-50 p-4">
                  <div className="font-semibold text-slate-900">Since 2011</div>
                  <div className="mt-1">Trusted local clinic</div>
                </div>
                <div className="rounded-2xl bg-slate-50 p-4">
                  <div className="font-semibold text-slate-900">Easy Booking</div>
                  <div className="mt-1">Schedule online anytime</div>
                </div>
                <div className="rounded-2xl bg-slate-50 p-4">
                  <div className="font-semibold text-slate-900">Personalized Care</div>
                  <div className="mt-1">Treatment built around you</div>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-gradient-to-br from-slate-100 to-white p-6 shadow-sm">
              <div className="rounded-[1.5rem] bg-white p-8 shadow-sm border border-slate-200">
                <div className="text-sm font-medium text-slate-500">What patients want to know fast</div>
                <div className="mt-6 space-y-5">
                  <div>
                    <div className="font-semibold text-slate-900">What do you help with?</div>
                    <div className="mt-1 text-slate-600">Back pain, neck pain, headaches, mobility issues, muscle tension, and injury recovery.</div>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">What makes this clinic different?</div>
                    <div className="mt-1 text-slate-600">A patient-first, holistic approach focused on function, recovery, and long-term wellness.</div>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">How do I get started?</div>
                    <div className="mt-1 text-slate-600">Book online, complete your new patient forms, and come in for a personalized first visit.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="border-y border-slate-200 bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-16">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Care built around recovery, movement, and long-term wellness.</h2>
              <p className="mt-4 text-lg text-slate-600">
                Clear, patient-friendly service categories make it easier for first-time visitors to understand what you do and feel confident booking.
              </p>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {[
                ["Pain Relief", "Support for back pain, neck pain, headaches, and everyday discomfort that gets in the way of life."],
                ["Injury Recovery", "Treatment plans designed to help patients recover, restore movement, and get back to work, workouts, and daily activities."],
                ["Wellness & Performance", "Ongoing care focused on mobility, function, and feeling your best over the long term."],
              ].map(([title, body]) => (
                <div key={title} className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm">
                  <h3 className="text-xl font-semibold">{title}</h3>
                  <p className="mt-3 text-slate-600 leading-7">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="why" className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-[1.75rem] bg-slate-900 p-8 text-white shadow-sm">
              <div className="text-sm uppercase tracking-[0.18em] text-slate-300">Why this redesign works</div>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight">The current site has the basics. This version focuses on conversion.</h2>
              <p className="mt-4 text-slate-300 leading-7">
                The homepage is rebuilt around patient intent: what hurts, how quickly they can book, and why they should trust the clinic.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "Stronger first impression",
                "Clearer patient messaging",
                "Better booking flow",
                "More trust for new visitors",
              ].map((item) => (
                <div key={item} className="rounded-[1.5rem] border border-slate-200 p-6">
                  <div className="text-base font-semibold">{item}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="new-patients" className="bg-slate-50 border-y border-slate-200">
          <div className="mx-auto max-w-6xl px-6 py-16">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">A simple way to get started.</h2>
              <p className="mt-4 text-lg text-slate-600">
                New patients should know exactly what to do next. This section reduces friction and helps convert interest into appointments.
              </p>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {[
                ["1. Book your visit", "Schedule online at any time with a clear call to action."],
                ["2. Complete your forms", "Fill out new patient paperwork before your appointment."],
                ["3. Get a personalized plan", "Receive care focused on pain relief, recovery, and better function."],
              ].map(([title, body]) => (
                <div key={title} className="rounded-[1.5rem] bg-white p-6 border border-slate-200 shadow-sm">
                  <div className="text-lg font-semibold">{title}</div>
                  <p className="mt-3 text-slate-600 leading-7">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Integrated Chiropractic</h2>
              <p className="mt-4 text-lg text-slate-600 max-w-xl">
                162 E 29th St, Loveland, CO 80538<br />
                (970) 481-2940<br />
                contact@myintegratedchiro.com
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <a href="https://integratedwic.janeapp.com" className="inline-flex rounded-2xl bg-slate-900 px-5 py-3 text-base font-medium text-white hover:bg-slate-800">Book Appointment</a>
                <a href="tel:9704812940" className="inline-flex rounded-2xl border border-slate-300 px-5 py-3 text-base font-medium hover:bg-slate-50">Call Clinic</a>
              </div>
            </div>
            <div className="rounded-[1.75rem] border border-slate-200 p-8 shadow-sm">
              <div className="text-sm uppercase tracking-[0.18em] text-slate-500">Office Hours</div>
              <div className="mt-6 space-y-3 text-slate-700">
                <div className="flex justify-between"><span>Monday</span><span>9:00–12:30 / 2:00–6:00</span></div>
                <div className="flex justify-between"><span>Tuesday</span><span>Closed</span></div>
                <div className="flex justify-between"><span>Wednesday</span><span>9:00–12:30 / 2:00–6:00</span></div>
                <div className="flex justify-between"><span>Thursday</span><span>9:00–12:30 / 2:00–6:00</span></div>
                <div className="flex justify-between"><span>Friday</span><span>9:00–12:30 / 2:00–6:00</span></div>
                <div className="flex justify-between"><span>Saturday</span><span>9:00–2:00</span></div>
                <div className="flex justify-between"><span>Sunday</span><span>Closed</span></div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
