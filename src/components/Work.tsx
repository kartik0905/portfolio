import { useState, useCallback } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdArrowBack, MdArrowForward, MdArrowOutward } from "react-icons/md";

const projects = [
  {
    title: "newsroom_agent",
    category: "Multi-perspective debate engine powered by CrewAI.",
    tools: "CrewAI, Python, LLMs",
    image: "https://www.shutterstock.com/image-vector/person-analyzes-online-news-on-260nw-2713429383.jpg",
    link: "https://github.com/kartik0905/newsroom_agent",
  },
  {
    title: "git-archaeologist",
    category: "AI-powered RAG pipeline for exploring Git histories.",
    tools: "Python, RAG, LangChain, Git",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop&q=80",
    link: "https://github.com/kartik0905/git-archaeologist",
  },
  {
    title: "Website-Chatbot",
    category: "Dynamic AI chatbot integrated into web interfaces.",
    tools: "JavaScript, LLMs, Frontend",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=600&fit=crop&q=80",
    link: "https://github.com/kartik0905/Website-Chatbot",
  },
  {
    title: "personal-notifier",
    category: "Interactive Gradio AI assistant with Pushover notifications.",
    tools: "Python, Gradio, OpenAI API, Pushover",
    image: "https://images.unsplash.com/photo-1512314889357-e157c22f938d?w=800&h=600&fit=crop&q=80",
    link: "https://github.com/kartik0905/personal-notifier",
  },
  {
    title: "mcp-agent",
    category: "Modular AI agent leveraging MCP servers for tool-based tasks.",
    tools: "Python, Model Context Protocol (MCP), Agents",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop&q=80",
    link: "https://github.com/kartik0905/mcp-agent",
  },
  {
    title: "ask-your-pdf",
    category: "Interactive tool for conversational insights from PDFs.",
    tools: "Python, Document Parsing, GenAI",
    image: "https://images.unsplash.com/photo-1568667256549-094345857637?w=800&h=600&fit=crop&q=80",
    link: "https://github.com/kartik0905/ask-your-pdf",
  },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="carousel-wrapper">
          {/* Navigation Arrows */}
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous project"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next project"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>

          {/* Slides */}
          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {projects.map((project, index) => (
                <div className="carousel-slide" key={index}>
                  <div className="carousel-content">
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>0{index + 1}</h3>
                      </div>
                      <div className="carousel-details">
                        <h4>{project.title}</h4>
                        <p className="carousel-category">
                          {project.category}
                        </p>
                        <div className="carousel-tools">
                          <span className="tools-label">Tools & Features</span>
                          <p>{project.tools}</p>
                        </div>
                        {project.link && (
                          <a href={project.link} target="_blank" rel="noreferrer" data-cursor="disable" style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", color: "white", textDecoration: "none", fontSize: "1rem", border: "1px solid rgba(255,255,255,0.4)", padding: "0.5rem 1rem", borderRadius: "100px", marginTop: "1rem", transition: "all 0.3s ease", cursor: "pointer", pointerEvents: "auto" }}>
                            View Repository <MdArrowOutward />
                          </a>
                        )}
                      </div>
                    </div>
                    <div className="carousel-image-wrapper">
                      <WorkImage image={project.image} alt={project.title} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentIndex ? "carousel-dot-active" : ""
                  }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to project ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
