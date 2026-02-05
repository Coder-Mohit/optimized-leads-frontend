import {
  BookOpen,
  BrainCircuit,
  Microscope,
  Briefcase,
  Heart,
  GraduationCap,
} from "lucide-react";

const programCategories = [
  {
    icon: BookOpen,
    title: "Doctorate in Theology",
    description:
      "Advanced theological studies for religious leadership and academic research.",
    features: [
      "Divinity & Ministry",
      "Religious Studies",
      "Biblical Research",
      "Pastoral Counseling",
    ],
  },
  {
    icon: Briefcase,
    title: "Management & Business PhD",
    description:
      "Executive-level business research and leadership development programs.",
    features: [
      "Business Administration",
      "Strategic Management",
      "Organizational Leadership",
      "International Business",
    ],
  },
  {
    icon: Microscope,
    title: "Science & Research PhD",
    description:
      "Cutting-edge research programs across natural and applied sciences.",
    features: [
      "Life Sciences",
      "Engineering Research",
      "Computer Science",
      "Environmental Studies",
    ],
  },
  {
    icon: BrainCircuit,
    title: "Psychology & Mental Health",
    description:
      "Advanced study in human behavior and clinical psychology practice.",
    features: [
      "Clinical Psychology",
      "Cognitive Science",
      "Neuropsychology",
      "Counseling Psychology",
    ],
  },
  {
    icon: Heart,
    title: "Healthcare & Medicine",
    description:
      "Medical research and advanced healthcare leadership programs.",
    features: [
      "Public Health",
      "Medical Research",
      "Healthcare Administration",
      "Clinical Research",
    ],
  },
  {
    icon: GraduationCap,
    title: "Education & Learning",
    description:
      "Advanced educational theory and administrative leadership programs.",
    features: [
      "Educational Leadership",
      "Curriculum Development",
      "Learning Sciences",
      "Higher Education",
    ],
  },
];

export default function PhDProgramCategories() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-semibold mb-6">
            <GraduationCap className="w-4 h-4" />
            Doctorate & PhD Program Categories
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Specialized Academic Programs
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our comprehensive range of doctoral programs designed to
            meet the evolving needs of modern academia and industry.
          </p>
        </div>

        {/* Program Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programCategories.map((category, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden relative"
            >
              {/* Card Header */}
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-white transition-colors">
                    {category.title}
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed group-hover:text-white transition-colors">
                  {category.description}
                </p>
              </div>

              {/* Features List */}
              <div className="p-6">
                <ul className="space-y-3">
                  {category.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-indigo-500 rounded-full flex-shrink-0" />
                      <span className="text-gray-700 text-sm group-hover:text-white transition-colors">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Hover Gradient Border */}
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
