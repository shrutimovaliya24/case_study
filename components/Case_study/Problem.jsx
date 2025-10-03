import { AlertTriangle, MapPin, Clock } from "lucide-react";

export default function ProblemSection() {
  const problems = [
    {
      icon: AlertTriangle,
      title: "High Theft Risk",
      desc: "Fleet vehicles are extremely vulnerable to theft when no proper prevention system is in place.This results in major financial losses, impacts delivery schedules, and erodes customer trust. A strong anti-theft strategy is essential to safeguard assets and ensure uninterrupted operations.",
      subs: [
        { subtitle: "No Anti-theft Measures", detail: "Vehicles are left unprotected against hijacking or unauthorized access, making recovery difficult once stolen." },
        { subtitle: "Delayed Response", detail: "The absence of real-time tracking means theft is often detected too late, increasing losses and reducing the chances of recovery." }
      ],
      image: "/image/problem1.png"
    },
    {
      icon: MapPin,
      title: "Unauthorized Route Changes",
      desc: "Monitoring vehicle movement becomes challenging when drivers deviate from approved routes without detection. Such deviations lead to increased fuel consumption, delayed deliveries, and operational inefficiencies. ",
      subs: [
        { subtitle: "No GPS Logs", detail: "Inadequate route tracking prevents managers from identifying when and where drivers stray from planned paths." },
        { subtitle: "Delivery Delays", detail: "Unmonitored deviations increase travel time, fuel costs, and risk of missed deadlines, directly impacting customer satisfaction." }
      ],
      image: "/image/problem2.png"
    },
    {
      icon: Clock,
      title: "Lack of Real-time Alerts",
      desc: "Without instant notifications, fleet managers lose valuable time responding to theft, misuse, or other critical incidents. Delayed reactions can result in severe financial damage, longer downtime, and higher recovery costs.",
      subs: [
        { subtitle: "Slow Theft Detection", detail: "The absence of real-time notifications leads to delayed incident awareness, allowing issues to escalate before action is taken." },
        { subtitle: "Limited Monitoring", detail: "Without instant updates, managers remain unaware of emergencies or unauthorized activities, increasing operational risks." }
      ],
      image: "/image/problem3.png"
    }
  ];


  return (
    <section id="problem" className="w-full bg-white py-8 px-6 sm:px-6">
      <div className="w-full max-w-4xl mx-auto">
        <div className="text-center pb-8">
          <button className="bg-gray-100 px-4 py-2 rounded-2xl font-thin mb-6 text-black text-xs sm:text-sm transition">
            PROBLEM
          </button>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
            The Challenge
          </h2>
          <p className="mt-3 text-gray-500 text-sm sm:text-base md:text-lg">
            Businesses managing large fleets often face serious security challenges.
          </p>
        </div>

        <div className="space-y-12">
          {problems.map((p, idx) => (
            <div
              key={idx}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 items-center"
            >
              {idx === 1 ? (
                <>

                  <div className="flex justify-center order-2 md:order-1">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-full max-w-sm md:max-w-md lg:max-w-lg object-cover rounded-lg"
                    />
                  </div>

                  <div className="space-y-4 order-1 md:order-2">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-950 rounded-xl text-sm text-white">
                      <p.icon className="w-5 h-5 md:w-6 md:h-6" />
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">{p.title}</h3>
                    <p className="text-gray-600 text-sm sm:text-base md:text-md">{p.desc}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {p.subs.map((s, subIdx) => (
                        <div key={subIdx} className="bg-gray-100 p-4 rounded-xl">
                          <h4 className="font-semibold text-gray-800 text-sm sm:text-base">{s.subtitle}</h4>
                          <p className="text-xs sm:text-sm text-gray-600 mt-1">{s.detail}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <>

                  <div className="space-y-4">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-950 rounded-xl text-sm text-white">
                      <p.icon className="w-5 h-5 md:w-6 md:h-6" />
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">{p.title}</h3>
                    <p className="text-gray-600 text-sm sm:text-base md:text-md">{p.desc}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {p.subs.map((s, subIdx) => (
                        <div key={subIdx} className="bg-gray-100 p-4 rounded-xl">
                          <h4 className="font-semibold text-gray-800 text-sm sm:text-base">{s.subtitle}</h4>
                          <p className="text-xs sm:text-sm text-gray-600 mt-1">{s.detail}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-center">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-full max-w-sm md:max-w-md lg:max-w-lg object-cover rounded-lg"
                    />
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
