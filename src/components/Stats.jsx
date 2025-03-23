import React, { useState, useEffect, useRef } from "react";

const Stats = () => {
  const [clientRetention, setClientRetention] = useState(0);
  const [yearsOfService, setYearsOfService] = useState(0);
  const [partners, setPartners] = useState(0);
  const [satisfiedClients, setSatisfiedClients] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  // Target values
  const targetClientRetention = 99;
  const targetYearsOfService = 4;
  const targetPartners = 10;
  const targetSatisfiedClients = 300;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 1000; // 1 second
    const frames = 60;
    const interval = duration / frames;

    let startTimestamp = null;

    const animate = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);

      setClientRetention(Math.floor(progress * targetClientRetention));
      setYearsOfService(Math.floor(progress * targetYearsOfService));
      setPartners(Math.floor(progress * targetPartners));
      setSatisfiedClients(Math.floor(progress * targetSatisfiedClients));

      if (progress < 1) {
        window.requestAnimationFrame(animate);
      } else {
        // Ensure we hit the exact target values
        setClientRetention(targetClientRetention);
        setYearsOfService(targetYearsOfService);
        setPartners(targetPartners);
        setSatisfiedClients(targetSatisfiedClients);
      }
    };

    window.requestAnimationFrame(animate);
  }, [isVisible]);

  return (
    <div
      ref={containerRef}
      className="bg-green-500 w-full py-12 px-4 sm:py-16 sm:px-6 lg:px-8 "
    >
      <div className="w-full">
        <div className="w-full flex flex-wrap justify-between">
          <div className="w-full sm:w-1/2 lg:w-1/4 p-4 relative text-center sm:text-left">
            <div className="text-green-200 text-5xl sm:text-6xl md:text-7xl font-light">
              {clientRetention} %
            </div>
            <div className="absolute top-4 left-1/2 sm:left-4 transform -translate-x-1/2 sm:translate-x-0 text-white text-sm md:text-base z-10">
              Client retention
            </div>
          </div>

          <div className="w-full sm:w-1/2 lg:w-1/4 p-4 relative text-center sm:text-left">
            <div className="text-green-200 text-5xl sm:text-6xl md:text-7xl font-light">
              {yearsOfService} +
            </div>
            <div className="absolute top-4 left-1/2 sm:left-4 transform -translate-x-1/2 sm:translate-x-0 text-white text-sm md:text-base z-10">
              Years of service
            </div>
          </div>

          <div className="w-full sm:w-1/2 lg:w-1/4 p-4 relative text-center sm:text-left">
            <div className="text-green-200 text-5xl sm:text-6xl md:text-7xl font-light">
              {partners} +
            </div>
            <div className="absolute top-4 left-1/2 sm:left-4 transform -translate-x-1/2 sm:translate-x-0 text-white text-sm md:text-base z-10">
              PARTNERS
            </div>
          </div>

          <div className="w-full sm:w-1/2 lg:w-1/4 p-4 relative text-center sm:text-left">
            <div className="text-green-200 text-5xl sm:text-6xl md:text-7xl font-light">
              {satisfiedClients} +
            </div>
            <div className="absolute top-4 left-1/2 sm:left-4 transform -translate-x-1/2 sm:translate-x-0 text-white text-sm md:text-base z-10">
              Satisfied clients
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
