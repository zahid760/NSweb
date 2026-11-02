import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  X,
  Play,
  FileText,
  Sparkles,
  Layers,
  BookOpen,
  Building2,
  Smartphone,
  TrendingUp,
  ArrowUpRight,
  Maximize2,
} from "lucide-react";

// Import assets
import geeta2 from "../assets/images/geetathumbn.jpg";
import geeta from "../assets/images/geetathumbnail.jpg";
import sketch1 from "../assets/images/sketch1.png";
import sketch2 from "../assets/images/sketch2.jpg";
import CookingApp from "../assets/images/cookportfinal.jpg";
import CookingApp3 from "../assets/images/chef1.jpg";
import getaProject from "../assets/images/Shreemad_Bhagavad_Gita-Commentary_by_Nilax.pdf";
import CookingAppVideo from "../assets/videos/cookPortVideos.mp4";
import redevelopment from "../assets/images/Haritdhara.pdf";
import criteriaC from "../assets/images/HaritdharaCriteriaC.pdf";
import zomato from "../assets/images/zomato.jpeg";
import zomatoVideo from "../assets/videos/zomatovideo.mp4";
import altmat from "../assets/images/altmat.png";
import altmatVideo from "../assets/videos/altmatvideo.mp4";

// Newly added project assets
import vaccineSevaPdf from "../assets/images/VaccineSeva.pdf";
import reGenBinPdf from "../assets/images/The_Re-Gen_Bin.pdf";
import vaccineSevaThumb1 from "../assets/images/vaccineSevaThumb1.jpg";
import vaccineSevaThumb2 from "../assets/images/vaccineSevaThumb2.jpg";
import reGenBinThumb1 from "../assets/images/reGenBinThumb1.jpg";
import reGenBinThumb2 from "../assets/images/reGenBinThumb2.jpg";

type ProjectCategory = "all" | "tech" | "architecture" | "writing" | "casestudy";

interface ProjectAction {
  label: string;
  link: string;
  type: "pdf" | "video";
  primary?: boolean;
}

interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: ProjectCategory;
  categoryLabel: string;
  description: string;
  detailedPoints: string[];
  tags: string[];
  accentColor: string;
  badgeBg: string;
  badgeText: string;
  borderGlow: string;
  images: { src: string; caption: string }[];
  actions: ProjectAction[];
}

const projectData: ProjectItem[] = [
  {
    id: "gita",
    title: "Shreemad Bhagavad Gita Commentary",
    subtitle: "Author & Philosophical Research",
    category: "writing",
    categoryLabel: "Philosophy & Writing",
    description:
      "A comprehensive literary and philosophical commentary on the timeless teachings of the Gita, focusing on duty, sincerity, mindfulness, and selfless action (Nishkama Karma).",
    detailedPoints: [
      "Original analytical commentary breaking down timeless shlokas",
      "Practical synthesis for modern focus, ethics, and leadership",
      "Authored and published as a full-length reflective manuscript",
    ],
    tags: ["Philosophy", "Author", "Research", "Commentary"],
    accentColor: "from-amber-500 via-orange-500 to-yellow-500",
    badgeBg: "bg-amber-100 dark:bg-amber-950/60",
    badgeText: "text-amber-800 dark:text-amber-300",
    borderGlow: "hover:border-amber-400/60 hover:shadow-amber-500/10",
    images: [
      { src: geeta, caption: "Book Cover Edition" },
      { src: geeta2, caption: "Manuscript Overview" },
    ],
    actions: [
      {
        label: "Read Commentary PDF",
        link: getaProject,
        type: "pdf",
        primary: true,
      },
    ],
  },
  {
    id: "haritdhara",
    title: "Haritdhara: Sustainable Dharavi",
    subtitle: "Architectural & Urban Redevelopment",
    category: "architecture",
    categoryLabel: "Sustainable Architecture",
    description:
      "A visionary urban redevelopment model reimagining Dharavi as a green, self-sustaining city with climate-resilient housing, decentralized waste management, and social spaces.",
    detailedPoints: [
      "Holistic master plan balancing high-density living with green lung spaces",
      "Incorporates solar orientation, rainwater harvesting & circular economy",
      "Complete Design Criteria C framework & architectural documentation",
    ],
    tags: ["Urban Planning", "Sustainability", "Architecture", "Infrastructure"],
    accentColor: "from-emerald-500 via-teal-500 to-green-600",
    badgeBg: "bg-emerald-100 dark:bg-emerald-950/60",
    badgeText: "text-emerald-800 dark:text-emerald-300",
    borderGlow: "hover:border-emerald-400/60 hover:shadow-emerald-500/10",
    images: [
      { src: sketch1, caption: "Master Plan Sketch" },
      { src: sketch2, caption: "Urban Elevation & Modules" },
    ],
    actions: [
      {
        label: "Master Plan PDF",
        link: redevelopment,
        type: "pdf",
        primary: true,
      },
      {
        label: "Criteria C Framework",
        link: criteriaC,
        type: "pdf",
        primary: false,
      },
    ],
  },
  {
    id: "regenbin",
    title: "The Re-Gen Bin: Smart Composting",
    subtitle: "Eco-Product Design & Engineering",
    category: "architecture",
    categoryLabel: "Eco-Design & Sustainability",
    description:
      "An innovative household organic waste composting system engineered to eliminate indoor odor, optimize aerobic decomposition, and transform kitchen waste into organic fertilizer.",
    detailedPoints: [
      "Aerated ventilation ports designed for active microbial digestion without foul odor",
      "Complete home composting kit with moisture regulation, tools, and microbial starters",
      "End-to-end design cycle: user research, prototype fabrication, and real-world trials",
    ],
    tags: ["Product Design", "Sustainability", "Eco-Innovation", "Waste Management"],
    accentColor: "from-lime-500 via-emerald-600 to-green-700",
    badgeBg: "bg-lime-100 dark:bg-lime-950/60",
    badgeText: "text-lime-800 dark:text-lime-300",
    borderGlow: "hover:border-lime-400/60 hover:shadow-lime-500/10",
    images: [
      { src: reGenBinThumb1, caption: "Physical Re-Gen Bin Prototype" },
      { src: reGenBinThumb2, caption: "Complete Household Composting Kit" },
    ],
    actions: [
      {
        label: "View Design Portfolio PDF",
        link: reGenBinPdf,
        type: "pdf",
        primary: true,
      },
    ],
  },
  {
    id: "vaccineseva",
    title: "VaccineSeva: Healthcare & Vaccine Access",
    subtitle: "Digital Health Platform & UI/UX Design",
    category: "tech",
    categoryLabel: "Ventures & Tech",
    description:
      "A digital healthcare platform and accessible web application designed to combat vaccine misinformation, simplify immunization tracking, and streamline healthcare access.",
    detailedPoints: [
      "Comprehensive UI/UX design and wireframes crafted in Figma for intuitive navigation",
      "Multi-parameter search filter by age group, mandatory status, and disease category",
      "Educational modules translating complex immunization guidelines into plain language",
    ],
    tags: ["Digital Health", "UI/UX Design", "Figma", "Web App", "Public Health"],
    accentColor: "from-cyan-500 via-sky-600 to-blue-700",
    badgeBg: "bg-cyan-100 dark:bg-cyan-950/60",
    badgeText: "text-cyan-800 dark:text-cyan-300",
    borderGlow: "hover:border-cyan-400/60 hover:shadow-cyan-500/10",
    images: [
      { src: vaccineSevaThumb1, caption: "Vaccine Directory & Information Architecture" },
      { src: vaccineSevaThumb2, caption: "Full Platform Layout & User Journey" },
    ],
    actions: [
      {
        label: "View Design Portfolio PDF",
        link: vaccineSevaPdf,
        type: "pdf",
        primary: true,
      },
    ],
  },
  {
    id: "cookport",
    title: "Cook Port Application",
    subtitle: "Founder & Product Designer",
    category: "tech",
    categoryLabel: "Ventures & Tech",
    description:
      "An intuitive cooking and recipe companion designed to empower both home cooks and professional chefs with seamless meal preparation, smart pantry tracking, and culinary guides.",
    detailedPoints: [
      "Interactive mobile experience with video demos and step-by-step guides",
      "Pantry-first recipe suggestions to minimize everyday household food waste",
      "Community features connecting aspiring food creators with chef techniques",
    ],
    tags: ["Mobile App", "Founder", "UI/UX Design", "Product Strategy"],
    accentColor: "from-sky-500 via-blue-600 to-indigo-600",
    badgeBg: "bg-sky-100 dark:bg-sky-950/60",
    badgeText: "text-sky-800 dark:text-sky-300",
    borderGlow: "hover:border-sky-400/60 hover:shadow-sky-500/10",
    images: [
      { src: CookingApp, caption: "Cook Port Platform" },
      { src: CookingApp3, caption: "Chef Interface & Recipes" },
    ],
    actions: [
      {
        label: "Watch App Demo",
        link: CookingAppVideo,
        type: "video",
        primary: true,
      },
    ],
  },
  {
    id: "altmat",
    title: "AltMat: Agri-Waste to Eco-Fabrics",
    subtitle: "Materials & Sustainable Tech Case Study",
    category: "casestudy",
    categoryLabel: "Case Study",
    description:
      "An in-depth case study analyzing AltMat's circular economy breakthrough—converting post-harvest agricultural crop residue into natural, sustainable industrial-grade textile fibers.",
    detailedPoints: [
      "Analyzes carbon displacement and farmer income enhancement model",
      "Evaluates mechanical and enzymatic fiber extraction scalability",
      "Explores B2B fashion supply chain integration and sustainability metrics",
    ],
    tags: ["Circular Economy", "AgriTech", "Materials Science", "Case Study"],
    accentColor: "from-teal-500 via-emerald-600 to-green-700",
    badgeBg: "bg-teal-100 dark:bg-teal-950/60",
    badgeText: "text-teal-800 dark:text-teal-300",
    borderGlow: "hover:border-teal-400/60 hover:shadow-teal-500/10",
    images: [{ src: altmat, caption: "AltMat Innovation Overview" }],
    actions: [
      {
        label: "Watch Case Study Video",
        link: altmatVideo,
        type: "video",
        primary: true,
      },
    ],
  },
  {
    id: "zomato",
    title: "Zomato: Hyperlocal Delivery Disruption",
    subtitle: "Platform Strategy & Growth Case Study",
    category: "casestudy",
    categoryLabel: "Case Study",
    description:
      "A strategic breakdown of Zomato's journey from restaurant directory to hyper-efficient food delivery and quick-commerce titan through data-driven logistics and brand building.",
    detailedPoints: [
      "Examination of unit economics, delivery algorithms & fleet efficiency",
      "Analysis of loyalty ecosystems and quick commerce market expansion",
      "Strategic insights into customer retention and tech infrastructure",
    ],
    tags: ["Hyperlocal Logistics", "Business Strategy", "Product Growth", "Case Study"],
    accentColor: "from-rose-500 via-red-500 to-orange-500",
    badgeBg: "bg-rose-100 dark:bg-rose-950/60",
    badgeText: "text-rose-800 dark:text-rose-300",
    borderGlow: "hover:border-rose-400/60 hover:shadow-rose-500/10",
    images: [{ src: zomato, caption: "Zomato Growth & Tech Framework" }],
    actions: [
      {
        label: "Watch Case Study Video",
        link: zomatoVideo,
        type: "video",
        primary: true,
      },
    ],
  },
];

const categoryTabs: { key: ProjectCategory; label: string; icon: React.ReactNode }[] = [
  { key: "all", label: "All Projects", icon: <Layers size={16} /> },
  { key: "tech", label: "Ventures & Tech", icon: <Smartphone size={16} /> },
  { key: "architecture", label: "Architecture & Eco", icon: <Building2 size={16} /> },
  { key: "writing", label: "Writing & Books", icon: <BookOpen size={16} /> },
  { key: "casestudy", label: "Case Studies", icon: <TrendingUp size={16} /> },
];

export const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("all");
  const [selectedMedia, setSelectedMedia] = useState<{
    link: string;
    type: "pdf" | "video";
    title: string;
    subtitle?: string;
  } | null>(null);

  // Active slide image index per project card
  const [activeImageIndexes, setActiveImageIndexes] = useState<Record<string, number>>({});

  const filteredProjects =
    activeCategory === "all"
      ? projectData
      : projectData.filter((p) => p.category === activeCategory);

  const handleOpenMedia = (
    link: string,
    type: "pdf" | "video",
    title: string,
    subtitle?: string
  ) => {
    setSelectedMedia({ link, type, title, subtitle });
  };

  const handleCloseMedia = () => {
    setSelectedMedia(null);
  };

  const setImageIndex = (projectId: string, index: number) => {
    setActiveImageIndexes((prev) => ({ ...prev, [projectId]: index }));
  };

  return (
    <section
      id="projects"
      className="py-24 bg-gradient-to-b from-sky-50 via-slate-50 to-blue-50 relative scroll-mt-20 overflow-hidden"
    >
      {/* Background Decorative Ambient Blobs */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-sky-200/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-40 w-96 h-96 bg-green-200/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-2/3 left-1/3 w-80 h-80 bg-amber-200/30 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-sky-200/70 shadow-sm text-sky-700 text-sm font-semibold mb-4"
          >
            <Sparkles size={16} className="text-amber-500" />
            <span>Curated Portfolio & Research</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-5"
          >
            Featured{" "}
            <span className="bg-gradient-to-r from-sky-600 via-teal-600 to-amber-600 text-transparent bg-clip-text">
              Projects & Studies
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-slate-600 leading-relaxed"
          >
            A cross-disciplinary showcase spanning mobile applications, sustainable urban
            architecture, eco-product engineering, philosophical literature, and commercial case studies.
          </motion.p>

          {/* Category Filter Pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-8"
          >
            {categoryTabs.map((tab) => {
              const isActive = activeCategory === tab.key;
              const count =
                tab.key === "all"
                  ? projectData.length
                  : projectData.filter((p) => p.category === tab.key).length;

              return (
                <button
                  key={tab.key}
                  onClick={() => setActiveCategory(tab.key)}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-slate-900 text-white shadow-lg shadow-slate-900/20 scale-105"
                      : "bg-white/80 text-slate-700 hover:bg-white hover:text-slate-900 border border-slate-200/80 shadow-sm"
                  }`}
                >
                  {tab.icon}
                  <span>{tab.label}</span>
                  <span
                    className={`ml-1 text-xs px-1.5 py-0.5 rounded-full ${
                      isActive
                        ? "bg-white/20 text-white"
                        : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </motion.div>
        </div>

        {/* Projects Grid / Cards */}
        <motion.div layout className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => {
              const currentImgIdx = activeImageIndexes[project.id] ?? 0;
              const activeImage = project.images[currentImgIdx] || project.images[0];

              return (
                <motion.article
                  layout
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className={`group relative flex flex-col bg-white/90 backdrop-blur-xl rounded-3xl border border-white/80 shadow-lg shadow-slate-200/60 ${project.borderGlow} transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl overflow-hidden`}
                >
                  {/* Top Media Showcase Container */}
                  <div className="relative w-full h-64 sm:h-72 overflow-hidden bg-slate-900">
                    <img
                      src={activeImage.src}
                      alt={project.title}
                      className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out opacity-90 group-hover:opacity-100"
                    />

                    {/* Gradient overlay for readability & contrast */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent" />

                    {/* Category & Type Badges */}
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2 pointer-events-none">
                      <span
                        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-md shadow-sm ${project.badgeBg} ${project.badgeText}`}
                      >
                        {project.categoryLabel}
                      </span>

                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-black/60 text-white backdrop-blur-md border border-white/10">
                        {project.actions.some((a) => a.type === "video") ? (
                          <>
                            <Play size={12} className="text-emerald-400 fill-emerald-400" />
                            <span>Video Demo</span>
                          </>
                        ) : (
                          <>
                            <FileText size={12} className="text-sky-400" />
                            <span>PDF Document</span>
                          </>
                        )}
                      </span>
                    </div>

                    {/* Image Caption & Switcher if multiple images */}
                    <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-white/90">
                      <span className="font-medium truncate drop-shadow-md">
                        {activeImage.caption}
                      </span>

                      {project.images.length > 1 && (
                        <div className="flex items-center gap-1.5 bg-black/50 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10">
                          {project.images.map((img, i) => (
                            <button
                              key={i}
                              onClick={(e) => {
                                e.stopPropagation();
                                setImageIndex(project.id, i);
                              }}
                              title={img.caption}
                              className={`h-2 rounded-full transition-all duration-300 ${
                                currentImgIdx === i
                                  ? "w-5 bg-white"
                                  : "w-2 bg-white/40 hover:bg-white/70"
                              }`}
                            />
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="flex-1 p-6 sm:p-7 flex flex-col justify-between">
                    <div>
                      {/* Subtitle / Role */}
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                        {project.subtitle}
                      </p>

                      {/* Title */}
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-sky-600 transition-colors duration-200 mb-3">
                        {project.title}
                      </h3>

                      {/* Description */}
                      <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-5">
                        {project.description}
                      </p>

                      {/* Bullet Highlights */}
                      {/* <ul className="space-y-2 mb-6">
                        {project.detailedPoints.map((point, pIdx) => (
                          <li
                            key={pIdx}
                            className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600"
                          >
                            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-500 shrink-0" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul> */}

                      {/* Tech / Tag Badges */}
                      {/* <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-6">
                        {project.tags.map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="text-xs px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200/80 text-slate-700 font-medium transition-colors"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div> */}
                    </div>

                    {/* Actions / CTA Buttons */}
                    <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center gap-3">
                      {project.actions.map((action, aIdx) => {
                        const isPrimary = action.primary;
                        return (
                          <button
                            key={aIdx}
                            onClick={() =>
                              handleOpenMedia(
                                action.link,
                                action.type,
                                project.title,
                                action.label
                              )
                            }
                            className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 active:scale-95 ${
                              isPrimary
                                ? "bg-slate-900 hover:bg-slate-800 text-white shadow-md shadow-slate-900/15 hover:shadow-lg"
                                : "bg-sky-50 hover:bg-sky-100 text-sky-800 border border-sky-200/80"
                            }`}
                          >
                            {action.type === "video" ? (
                              <Play size={16} className={isPrimary ? "text-emerald-400 fill-emerald-400" : "text-sky-600"} />
                            ) : (
                              <FileText size={16} className={isPrimary ? "text-sky-300" : "text-sky-600"} />
                            )}
                            <span>{action.label}</span>
                            <ArrowUpRight size={15} className="opacity-70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Enhanced Media Modal Viewer (PDF & Video) */}
      <AnimatePresence>
        {selectedMedia && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={handleCloseMedia}
            className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 15 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white dark:bg-slate-900 rounded-2xl sm:rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 w-full max-w-4xl overflow-hidden flex flex-col max-h-[92vh]"
            >
              {/* Modal Header */}
              <div className="px-5 py-4 sm:px-6 sm:py-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between gap-4 bg-slate-50/80 dark:bg-slate-900/80 backdrop-blur-sm">
                <div className="min-w-0">
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="text-xs uppercase font-bold tracking-wider text-sky-600 dark:text-sky-400">
                      {selectedMedia.subtitle || (selectedMedia.type === "video" ? "Video Demo" : "Document Viewer")}
                    </span>
                  </div>
                  <h3 className="text-base sm:text-xl font-bold text-slate-900 dark:text-white truncate">
                    {selectedMedia.title}
                  </h3>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <a
                    href={selectedMedia.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-100 hover:bg-slate-200 text-slate-700 dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-slate-200 transition-colors"
                    title="Open directly in a new tab"
                  >
                    <Maximize2 size={14} />
                    <span className="hidden sm:inline">Open in Tab</span>
                  </a>

                  <button
                    onClick={handleCloseMedia}
                    className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 dark:hover:text-white transition-colors"
                    aria-label="Close dialog"
                  >
                    <X size={20} />
                  </button>
                </div>
              </div>

              {/* Modal Body Container */}
              <div className="relative flex-1 bg-slate-950 min-h-[350px] sm:min-h-[520px] max-h-[75vh] overflow-hidden flex items-center justify-center">
                {selectedMedia.type === "video" ? (
                  <video
                    src={selectedMedia.link}
                    className="w-full h-full object-contain max-h-[75vh]"
                    controls
                    autoPlay
                    loop
                    playsInline
                  />
                ) : (
                  <div className="w-full h-full flex flex-col">
                    <iframe
                      src={selectedMedia.link}
                      className="w-full h-full border-0 min-h-[350px] sm:min-h-[520px] hidden sm:block"
                      title={selectedMedia.title}
                    />

                    {/* Mobile fallback for PDF viewing */}
                    <div className="sm:hidden p-6 text-center text-white flex flex-col items-center justify-center my-auto">
                      <div className="w-16 h-16 rounded-2xl bg-sky-500/20 text-sky-400 flex items-center justify-center mb-4">
                        <FileText size={32} />
                      </div>
                      <h4 className="text-lg font-bold mb-2">View Full PDF Project</h4>
                      <p className="text-xs text-slate-400 max-w-xs mb-6">
                        Mobile browsers provide the smoothest reading experience via their native PDF viewer.
                      </p>
                      <a
                        href={selectedMedia.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-bold bg-sky-500 hover:bg-sky-600 text-white shadow-lg shadow-sky-500/30 text-sm transition-all"
                      >
                        <ExternalLink size={16} />
                        <span>Open Document Now</span>
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
