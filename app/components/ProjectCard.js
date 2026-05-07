"use client";

import { useEffect, useRef } from "react";

export default function ProjectCard({
  id,
  title,
  titleEn,
  description,
  tags,
  icon,
  iconClass,
  themeClass,
  reverse = false,
  link = "#",
  imageSrc,
  images = [],
}) {
  const scrollRef = useRef(null);
  const autoScrollTimer = useRef(null);
  const pauseTimeout = useRef(null);

  const startAutoScroll = () => {
    stopAutoScroll();
    autoScrollTimer.current = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        const maxScroll = scrollWidth - clientWidth;
        
        let newScroll = scrollLeft + 220; // approximate width to scroll
        if (newScroll >= maxScroll - 10) {
          scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          scrollRef.current.scrollTo({ left: newScroll, behavior: "smooth" });
        }
      }
    }, 3000);
  };

  const stopAutoScroll = () => {
    if (autoScrollTimer.current) clearInterval(autoScrollTimer.current);
  };

  const handleInteraction = () => {
    stopAutoScroll();
    if (pauseTimeout.current) clearTimeout(pauseTimeout.current);
    
    pauseTimeout.current = setTimeout(() => {
      startAutoScroll();
    }, 20000); // Resume after 20 seconds
  };

  useEffect(() => {
    if (images.length > 0) {
      startAutoScroll();
    }
    return () => {
      stopAutoScroll();
      if (pauseTimeout.current) clearTimeout(pauseTimeout.current);
    };
  }, [images.length]);

  return (
    <div className={`project-card ${themeClass} ${reverse ? "reverse" : ""}`}>
      <div className="card-glow"></div>

      {/* Image Section */}
      <div className="p-image-container">
        {images.length > 0 ? (
          <div 
            className="mobile-screens-scroll" 
            ref={scrollRef}
            onTouchStart={handleInteraction}
            onMouseDown={handleInteraction}
            onWheel={handleInteraction}
          >
            {images.map((src, idx) => (
              <img key={idx} src={src} alt={`${title} Preview ${idx + 1}`} className="mobile-screen" />
            ))}
          </div>
        ) : (
          <div className="p-image">
            {imageSrc ? (
              <img src={imageSrc} alt={`${title} Preview`} />
            ) : (
              <div className="img-placeholder-text">{titleEn} Image</div>
            )}
          </div>
        )}
      </div>

      <div className="p-content">
        <div className="p-head">
          <div className={`p-icon ${iconClass}`}>{icon}</div>
          <div className="p-title-wrap">
            <div className="p-name">{title}</div>
            <div className="p-name-en">{titleEn}</div>
          </div>
        </div>
        <p className="p-desc">{description}</p>
        <div className="p-tags">
          {tags.map((tag, index) => (
            <span key={index} className={`tag ${themeClass.replace('card-', 't-')}`}>
              {tag}
            </span>
          ))}
        </div>
        <div className="p-links">
          <a href={link} target={link !== "#" ? "_blank" : undefined} rel="noopener noreferrer" className={`btn ${themeClass.replace('card-', 'btn-')}`}>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
            معاينة التطبيق
          </a>
        </div>
      </div>
    </div>
  );
}
