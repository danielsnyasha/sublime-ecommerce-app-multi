import { Category } from "@/payload-types";
import config from '@payload-config';
import { getPayload } from 'payload';



const categories = [
    {
      name: "All",
      slug: "all",
    },
    {
      name: "Business & Entrepreneurship",
      color: "#F59E0B", // amber‑500
      slug: "business-entrepreneurship",
      subcategories: [
        { name: "Accounting & Finance", slug: "accounting-finance" },
        { name: "Startup Strategy", slug: "startup-strategy" },
        { name: "E‑Commerce", slug: "ecommerce" },
        { name: "Marketing & Sales", slug: "marketing-sales" },
        { name: "Leadership & Management", slug: "leadership-management" },
        { name: "Investing & Trading", slug: "investing-trading" },
      ],
    },
    {
      name: "Technology & Programming",
      color: "#10B981", // emerald‑500
      slug: "technology-programming",
      subcategories: [
        { name: "Web Development", slug: "web-development" },
        { name: "Mobile Development", slug: "mobile-development" },
        { name: "Cloud Computing", slug: "cloud-computing" },
        { name: "DevOps & CI/CD", slug: "devops" },
        { name: "Programming Languages", slug: "programming-languages" },
        { name: "Cybersecurity", slug: "cybersecurity" },
      ],
    },
    {
      name: "Writing & Storytelling",
      color: "#C084FC", // violet‑300
      slug: "writing-storytelling",
      subcategories: [
        { name: "Fiction Writing", slug: "fiction-writing" },
        { name: "Non‑Fiction", slug: "non-fiction" },
        { name: "Blogging & Content", slug: "blogging-content" },
        { name: "Copywriting", slug: "copywriting" },
        { name: "Screenwriting", slug: "screenwriting" },
        { name: "Editing & Proofreading", slug: "editing-proofreading" },
      ],
    },
    {
      name: "Education & Teaching",
      color: "#FBBF24", // yellow‑400
      slug: "education-teaching",
      subcategories: [
        { name: "Online Courses", slug: "online-courses" },
        { name: "Curriculum Design", slug: "curriculum-design" },
        { name: "Tutoring", slug: "tutoring" },
        { name: "Language Learning", slug: "language-learning" },
        { name: "Test Preparation", slug: "test-preparation" },
      ],
    },
    {
      name: "Personal Development",
      color: "#0EA5E9", // sky‑500
      slug: "personal-development",
      subcategories: [
        { name: "Productivity", slug: "productivity" },
        { name: "Mindfulness & Meditation", slug: "mindfulness-meditation" },
        { name: "Goal Setting", slug: "goal-setting" },
        { name: "Habits & Routines", slug: "habits-routines" },
        { name: "Career Growth", slug: "career-growth" },
      ],
    },
    {
      name: "Health & Wellness",
      color: "#FB7185", // rose‑400
      slug: "health-wellness",
      subcategories: [
        { name: "Fitness Training", slug: "fitness-training" },
        { name: "Nutrition", slug: "nutrition" },
        { name: "Mental Health", slug: "mental-health" },
        { name: "Yoga & Pilates", slug: "yoga-pilates" },
        { name: "Holistic Health", slug: "holistic-health" },
      ],
    },
    {
      name: "Design & UX",
      color: "#8B5CF6", // indigo‑500
      slug: "design-ux",
      subcategories: [
        { name: "UI Design", slug: "ui-design" },
        { name: "UX Research", slug: "ux-research" },
        { name: "Graphic Design", slug: "graphic-design" },
        { name: "3D Modeling", slug: "3d-modeling" },
        { name: "Animation & Motion", slug: "animation-motion" },
      ],
    },
    {
      name: "Fine Arts & Crafts",
      color: "#F97316", // orange‑500
      slug: "fine-arts-crafts",
      subcategories: [
        { name: "Drawing & Illustration", slug: "drawing-illustration" },
        { name: "Painting", slug: "painting" },
        { name: "Sculpture", slug: "sculpture" },
        { name: "Calligraphy", slug: "calligraphy" },
        { name: "DIY Crafts", slug: "diy-crafts" },
      ],
    },
    {
      name: "Music & Audio Production",
      color: "#FACC15", // yellow‑300
      slug: "music-audio-production",
      subcategories: [
        { name: "Songwriting", slug: "songwriting" },
        { name: "Music Production", slug: "music-production" },
        { name: "Music Theory", slug: "music-theory" },
        { name: "Sound Design", slug: "sound-design" },
        { name: "Audio Engineering", slug: "audio-engineering" },
      ],
    },
    {
      name: "Photography & Video",
      color: "#EF4444", // red‑500
      slug: "photography-video",
      subcategories: [
        { name: "Portrait Photography", slug: "portrait-photography" },
        { name: "Landscape Photography", slug: "landscape-photography" },
        { name: "Filmmaking", slug: "filmmaking" },
        { name: "Video Editing", slug: "video-editing" },
        { name: "Drone Photography", slug: "drone-photography" },
      ],
    },
    {
      name: "Travel & Outdoor",
      color: "#22C55E", // green‑500
      slug: "travel-outdoor",
      subcategories: [
        { name: "Backpacking", slug: "backpacking" },
        { name: "Adventure Travel", slug: "adventure-travel" },
        { name: "Travel Planning", slug: "travel-planning" },
        { name: "Outdoor Survival", slug: "outdoor-survival" },
        { name: "Cultural Experiences", slug: "cultural-experiences" },
      ],
    },
    {
      name: "Food & Culinary Arts",
      color: "#FB923C", // orange‑400
      slug: "food-culinary-arts",
      subcategories: [
        { name: "Baking & Pastry", slug: "baking-pastry" },
        { name: "International Cuisine", slug: "international-cuisine" },
        { name: "Healthy Cooking", slug: "healthy-cooking" },
        { name: "Beverages & Mixology", slug: "beverages-mixology" },
        { name: "Food Photography", slug: "food-photography" },
      ],
    },
    {
      name: "AI & Data Science",
      color: "#60A5FA", // blue‑400
      slug: "ai-data-science",
      subcategories: [
        { name: "Machine Learning", slug: "machine-learning" },
        { name: "Deep Learning", slug: "deep-learning" },
        { name: "Data Engineering", slug: "data-engineering" },
        { name: "Data Visualization", slug: "data-visualization" },
        { name: "Natural Language Processing", slug: "natural-language-processing" },
      ],
    },
    {
      name: "Other",
      slug: "other",
    },
  ];
  
  const seed = async () => {
    // 1. connect to Payload
    const payload = await getPayload({ config });
  
    // 2. create parent and child categories
    for (const category of categories) {
      const parentCategory = await payload.create({
        collection: "categories",
        data: {
          name:  category.name,
          slug:  category.slug,
          color: category.color,
          parent: null,          // root‑level item
        },
      });
  
      for (const subCategory of category.subcategories ?? []) {
        await payload.create({
          collection: "categories",
          data: {
            name:   subCategory.name,
            slug:   subCategory.slug,
            parent: parentCategory.id, // link to parent
          },
        });
      }
    }
  };
  
  // run the seeder and exit
  (async () => {
    await seed();
    process.exit(0);
  })();
  