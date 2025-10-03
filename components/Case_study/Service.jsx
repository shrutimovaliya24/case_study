export default function ServiceSection() {
    const service = [ 
        {
            title: "Smart Fleet Monitoring Solutions",
            desc: "Empower your business with advanced GPS-driven visibility. Our system continuously monitors every vehicle’s journey, enabling you to track movements, ensure timely arrivals, and improve overall fleet coordination with ease.",
            list: [
                "Real-time tracking with interactive maps",
                "Automatic alerts for unexpected route changes",
                "Location-based insights for better scheduling",
                "Complete control over fleet movement 24/7",
            ],
            button_text: "Start Monitoring",
            image: "/image/service1.png",
        },
        {
            title: "Proactive Theft Detection & Control",
            desc: "Stay one step ahead of security threats. Our technology provides instant alerts during unauthorized activity, allowing you to disable vehicles remotely and recover stolen assets faster, minimizing losses and downtime.",
            list: [
                "Instant theft detection and geo-boundary alerts",
                "Remote vehicle lock and immobilization",
                "Integrated emergency support and recovery tools",
                "Advanced security for high-value assets",
            ],
            button_text: "Enhance Security",
            image: "/image/service2.png",
        },
        {
            title: "Efficient Route Management & Safety",
            desc: "Optimize every trip with intelligent routing and driver behavior tracking. Reduce fuel usage, minimize risks, and keep drivers safe while ensuring your fleet stays compliant with company standards.",
            list: [
                "Smart route planning to reduce travel time",
                "Alerts for unsafe driving behaviors",
                "Real-time deviation and performance reports",
                "Driver scoring to improve training and compliance",
            ],
            button_text: "Improve Efficiency",
            image: "/image/service3.png",
        },
        {
            title: "Fleet Intelligence & Business Insights",
            desc: "Transform raw data into actionable strategies. With in-depth reporting and analytics, gain a deeper understanding of your fleet’s performance, helping you make informed decisions and drive continuous improvement.",
            list: [
                "Comprehensive trip and usage analytics",
                "Custom KPI dashboards and visual reports",
                "Predictive insights for future planning",
                "Easy integration with ERP and CRM systems",
            ],
            button_text: "Analyze Performance",
            image: "/image/service4.png",
        },
    ];
    

    return (
        <section className="relative w-full bg-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-4xl mx-auto space-y-8 sm:space-y-12 md:space-y-12">
                {service.map((p, idx) => (
                    <div
                        key={idx}
                        className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center"
                    >
                        {idx % 2 === 0 ? (
                            <>   <div className="space-y-4 sm:space-y-5 text-left md:text-left order-2 md:order-1">
                                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight">
                                        {p.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed">
                                        {p.desc}
                                    </p>

                                    {p.list && (
                                        <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm sm:text-base text-left mx-auto md:mx-0 max-w-md md:max-w-none">
                                            {p.list.map((item, i) => (
                                                <li key={i} className="leading-relaxed">{item}</li>
                                            ))}
                                        </ul>
                                    )}

                                    {p.button_text && (
                                        <div className="pt-2">
                                            <a
                                                href="#"
                                                className="inline-block bg-white border-2 border-gray-300 text-blue-950 px-6 py-3 text-sm md:text-base font-medium  transition-all duration-300 hover:scale-105 hover:border-0 hover:bg-gray-50 active:scale-95"
                                            >
                                                {p.button_text}
                                            </a>
                                        </div>
                                    )}
                                </div>

                             
                                <div className="flex justify-center order-1 md:order-2">
                                    <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg">
                                        <div className="relative w-full h-64 sm:h-72 md:h-80 lg:h-96">
                                            <img
                                                src={p.image}
                                                alt={p.title}
                                                className="w-full h-full object-cover -md"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </>
                        ) : (
                            <>
                                
                                <div className="flex justify-center order-1">
                                    <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg">
                                        <div className="relative w-full h-64 sm:h-72 md:h-80 lg:h-96">
                                            <img
                                                src={p.image}
                                                alt={p.title}
                                                className="w-full h-full object-cover shadow-md"
                                            />
                                        </div>
                                    </div>
                                </div>

                                
                                <div className="space-y-4 sm:space-y-5 text-center md:text-left order-2">
                                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight">
                                        {p.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed">
                                        {p.desc}
                                    </p>

                                    {p.list && (
                                        <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm sm:text-base text-left mx-auto md:mx-0 max-w-md md:max-w-none">
                                            {p.list.map((item, i) => (
                                                <li key={i} className="leading-relaxed">{item}</li>
                                            ))}
                                        </ul>
                                    )}

                                    {p.button_text && (
                                        <div className="pt-2">
                                            <a
                                                href="#"
                                                className="inline-block bg-white border-2 border-gray-300 text-blue-950 px-6 py-3 text-sm md:text-base font-medium  transition-all duration-300 hover:scale-105 hover:border-0 hover:bg-gray-50 active:scale-95"
                                            >
                                                {p.button_text}
                                            </a>
                                        </div>
                                    )}
                                </div>
                            </>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}