import type {
  Studio, Instructor, YogaClass, Booking, Workshop, Retreat,
  MeditationSession, MeditationCourse, PranayamaExercise,
  OnDemandVideo, OnDemandCollection, OnDemandCourse,
  BlogPost, Challenge, CommunityEvent, TeacherTrainingProgram,
  UserProfile, StudioAnalytics, InstructorEarnings, ScheduleEvent,
  PricingTier, ConsumerTier,
  ClassProgram, StudioSpace, Testimonial, FAQItem, ClassTiming, StudioInfo,
} from "@/types";

// ============================================================
// Studios
// ============================================================

export const studios: Studio[] = [
  {
    id: "s1", name: "ZenMat Studio Delhi", slug: "zenmat-delhi",
    description: "Our flagship studio near Lodi Garden in the heart of New Delhi. A serene urban oasis offering 30+ classes weekly across all styles, with dedicated meditation and pranayama spaces.",
    address: "23, Shanti Nagar, Near Lodi Garden", city: "New Delhi", state: "Delhi", zipCode: "110003",
    phone: "+91 98765 43210", email: "delhi@zenmat.studio", website: "https://zenmat.studio",
    imageUrl: "https://picsum.photos/id/59/600/400", bannerUrl: "https://picsum.photos/id/15/1200/400",
    galleryUrls: ["https://picsum.photos/id/49/800/600", "https://picsum.photos/id/50/800/600", "https://picsum.photos/id/36/800/600"],
    latitude: 28.5937, longitude: 77.2199, rating: 4.8, reviewCount: 342,
    styles: ["Hatha", "Vinyasa", "Ashtanga", "Yin", "Restorative", "Kundalini", "Prenatal", "Meditation", "Pranayama"],
    amenities: ["Showers", "Changing Rooms", "Mat Rental", "Props Included", "Parking", "Tea Lounge", "Boutique"],
    isVerified: true, memberCount: 820, instructorCount: 12, classesPerWeek: 35,
    dropInPrice: 25, monthlyPrice: 159, hasVirtualClasses: true, hasParking: true, isWheelchairAccessible: true, distanceKm: 1.2,
  },
  {
    id: "s2", name: "Lotus Flow Yoga", slug: "lotus-flow",
    description: "A warm, community-centered studio specializing in Vinyasa and Power Yoga. Known for innovative sequencing and an inclusive, energizing atmosphere.",
    address: "198 Blossom Ave", city: "San Francisco", state: "CA", zipCode: "94110",
    phone: "+1 (415) 555-0234", email: "hello@lotusflow.yoga", website: "https://lotusflow.yoga",
    imageUrl: "https://picsum.photos/id/1026/600/400", bannerUrl: "https://picsum.photos/id/1019/1200/400",
    galleryUrls: ["https://picsum.photos/id/314/800/600", "https://picsum.photos/id/315/800/600"],
    latitude: 37.7580, longitude: -122.4155, rating: 4.6, reviewCount: 218,
    styles: ["Vinyasa", "Power", "Hot Vinyasa", "Yoga Sculpt", "Meditation"],
    amenities: ["Showers", "Changing Rooms", "Mat Rental", "Heated Room"],
    isVerified: true, memberCount: 540, instructorCount: 8, classesPerWeek: 28,
    dropInPrice: 22, monthlyPrice: 139, hasVirtualClasses: true, hasParking: false, isWheelchairAccessible: true, distanceKm: 3.4,
  },
  {
    id: "s3", name: "Mysore House", slug: "mysore-house",
    description: "Dedicated Ashtanga shala following the traditional Mysore method. Early morning practices, authorized instruction, and a disciplined approach to classical yoga.",
    address: "55 Tradition Court", city: "Oakland", state: "CA", zipCode: "94612",
    phone: "+1 (510) 555-0456", email: "practice@mysorehouse.com", website: "https://mysorehouse.com",
    imageUrl: "https://picsum.photos/id/1027/600/400", bannerUrl: "https://picsum.photos/id/1016/1200/400",
    galleryUrls: ["https://picsum.photos/id/316/800/600"],
    latitude: 37.8044, longitude: -122.2712, rating: 4.9, reviewCount: 156,
    styles: ["Ashtanga", "Hatha", "Pranayama", "Meditation"],
    amenities: ["Changing Rooms", "Props Included", "Water Station"],
    isVerified: true, memberCount: 280, instructorCount: 4, classesPerWeek: 18,
    dropInPrice: 20, monthlyPrice: 120, hasVirtualClasses: false, hasParking: true, isWheelchairAccessible: false, distanceKm: 12.8,
  },
  {
    id: "s4", name: "Tranquil Roots Wellness", slug: "tranquil-roots",
    description: "An integrative wellness center combining yoga therapy, Ayurveda consultations, and holistic healing. Specialized in therapeutic and restorative practices.",
    address: "412 Healing Way", city: "Berkeley", state: "CA", zipCode: "94704",
    phone: "+1 (510) 555-0789", email: "care@tranquilroots.com", website: "https://tranquilroots.com",
    imageUrl: "https://picsum.photos/id/1028/600/400", bannerUrl: "https://picsum.photos/id/1020/1200/400",
    galleryUrls: ["https://picsum.photos/id/317/800/600", "https://picsum.photos/id/318/800/600"],
    latitude: 37.8716, longitude: -122.2727, rating: 4.7, reviewCount: 189,
    styles: ["Restorative", "Yin", "Gentle Flow", "Yoga Nidra", "Chair", "Prenatal"],
    amenities: ["Showers", "Changing Rooms", "Props Included", "Parking", "Wellness Boutique", "Tea Station", "Wheelchair Accessible"],
    isVerified: true, memberCount: 390, instructorCount: 6, classesPerWeek: 22,
    dropInPrice: 28, monthlyPrice: 149, hasVirtualClasses: true, hasParking: true, isWheelchairAccessible: true, distanceKm: 18.2,
  },
];

// ============================================================
// Instructors
// ============================================================

export const instructors: Instructor[] = [
  {
    id: "i1", name: "Ananya Sharma", slug: "ananya-sharma",
    avatarUrl: "https://picsum.photos/id/64/200/200", coverUrl: "https://picsum.photos/id/21/1200/400",
    bio: "Trained in Mysore under the direct lineage of Sri K. Pattabhi Jois and at the Ramamani Iyengar Institute in Pune. Ananya brings 18 years of authentic Ashtanga practice with a modern, inclusive approach. She founded ZenMat in Delhi and has guided over 500 students through teacher training programs.",
    philosophy: "Yoga is a complete life practice. Every breath on the mat is a conversation with the Self.",
    certifications: ["E-RYT-500", "C-IAYT"], specializations: ["Ashtanga", "Hatha", "Pranayama"],
    experienceYears: 18, totalClassesTaught: 6200, rating: 4.9, reviewCount: 412,
    languages: ["English", "Hindi", "Sanskrit"], teachingStyleTags: ["Alignment-focused", "Spiritual", "Traditional"],
    studios: [{ studioId: "s1", studioName: "ZenMat Studio Delhi" }, { studioId: "s3", studioName: "Mysore House" }],
    isVerified: true, followerCount: 2840,
  },
  {
    id: "i2", name: "Rohan Malhotra", slug: "rohan-malhotra",
    avatarUrl: "https://picsum.photos/id/53/200/200", coverUrl: "https://picsum.photos/id/22/1200/400",
    bio: "Former national-level cricketer who discovered yoga during injury recovery at NIS Patiala. Rohan bridges fitness and yoga, making the practice accessible to athletes and fitness enthusiasts across Delhi NCR. Known for creative, never-the-same-twice Vinyasa flows.",
    philosophy: "Your body is capable of far more than your mind believes. Let us prove it together on the mat.",
    certifications: ["RYT-500"], specializations: ["Vinyasa", "Power", "Yoga Sculpt"],
    experienceYears: 12, totalClassesTaught: 4100, rating: 4.7, reviewCount: 328,
    languages: ["English", "Mandarin"], teachingStyleTags: ["Dynamic", "Energetic", "Fitness-oriented", "Playful"],
    studios: [{ studioId: "s1", studioName: "ZenMat Studio Delhi" }, { studioId: "s2", studioName: "Lotus Flow Yoga" }],
    isVerified: true, followerCount: 1920,
  },
  {
    id: "i3", name: "Priya Nair", slug: "priya-nair",
    avatarUrl: "https://picsum.photos/id/54/200/200", coverUrl: "https://picsum.photos/id/23/1200/400",
    bio: "A former midwife at Safdarjung Hospital turned yoga teacher, Priya combines medical knowledge with ancient yogic wisdom learned at the Bihar School of Yoga in Munger. She specializes in supporting women through all life transitions. Her Yoga Nidra sessions are legendary across Delhi.",
    philosophy: "Healing begins when we learn to listen to the body's wisdom with compassion.",
    certifications: ["RYT-200", "RPYT"], specializations: ["Prenatal", "Yin", "Restorative", "Yoga Nidra"],
    experienceYears: 9, totalClassesTaught: 2800, rating: 4.8, reviewCount: 256,
    languages: ["English", "Malayalam", "Tamil"], teachingStyleTags: ["Nurturing", "Intuitive", "Gentle", "Meditative"],
    studios: [{ studioId: "s1", studioName: "ZenMat Studio Delhi" }, { studioId: "s4", studioName: "Tranquil Roots Wellness" }],
    isVerified: true, followerCount: 1540,
  },
  {
    id: "i4", name: "Devendra Joshi", slug: "devendra-joshi",
    avatarUrl: "https://picsum.photos/id/55/200/200", coverUrl: "https://picsum.photos/id/24/1200/400",
    bio: "Devendra spent three years at the Sivananda Ashram in Rishikesh and two years studying meditation in Dharamshala before mastering Kundalini yoga. Certified sound healer, breathwork facilitator, and regular kirtan host in Delhi.",
    philosophy: "Stillness is not the absence of movement, but the presence of awareness.",
    certifications: ["RYT-500"], specializations: ["Meditation", "Pranayama", "Kundalini"],
    experienceYears: 15, totalClassesTaught: 3600, rating: 4.9, reviewCount: 198,
    languages: ["English", "Yoruba", "French"], teachingStyleTags: ["Meditative", "Transformative", "Spiritual"],
    studios: [{ studioId: "s1", studioName: "ZenMat Studio Delhi" }],
    isVerified: true, followerCount: 2100,
  },
  {
    id: "i5", name: "Kavita Pillai", slug: "kavita-pillai",
    avatarUrl: "https://picsum.photos/id/56/200/200", coverUrl: "https://picsum.photos/id/25/1200/400",
    bio: "Former Kendriya Vidyalaya teacher who brings education expertise to the yoga mat. Kavita leads Kids Yoga and Chair Yoga for seniors, ensuring yoga is truly for every body at every age. She trained at the Kaivalyadhama Institute in Pune.",
    philosophy: "Every body deserves to feel the joy of movement, regardless of age or ability.",
    certifications: ["RYT-200", "RCYT"], specializations: ["Chair", "Gentle Flow", "Hatha"],
    experienceYears: 7, totalClassesTaught: 1900, rating: 4.7, reviewCount: 142,
    languages: ["English", "Spanish"], teachingStyleTags: ["Playful", "Warm", "Accessible", "Creative"],
    studios: [{ studioId: "s1", studioName: "ZenMat Studio Delhi" }, { studioId: "s4", studioName: "Tranquil Roots Wellness" }],
    isVerified: true, followerCount: 890,
  },
  {
    id: "i6", name: "Sunil Rao", slug: "sunil-rao",
    avatarUrl: "https://picsum.photos/id/57/200/200", coverUrl: "https://picsum.photos/id/18/1200/400",
    bio: "Sunil combines his background in physiotherapy from AIIMS with Iyengar precision learned at the Ramamani Iyengar Memorial Yoga Institute in Pune. Specializes in yoga therapy for chronic pain, sports injuries, and post-surgical rehabilitation.",
    philosophy: "Alignment is not about perfection. It is about finding the safest expression of each asana for your unique body.",
    certifications: ["RYT-500", "C-IAYT"], specializations: ["Iyengar", "Hatha", "Restorative"],
    experienceYears: 14, totalClassesTaught: 4800, rating: 4.8, reviewCount: 310,
    languages: ["English", "Japanese"], teachingStyleTags: ["Alignment-focused", "Therapeutic", "Precise", "Patient"],
    studios: [{ studioId: "s4", studioName: "Tranquil Roots Wellness" }],
    isVerified: true, followerCount: 1680,
  },
];

// ============================================================
// Yoga Classes (upcoming schedule)
// ============================================================

const today = new Date();
function futureDate(daysAhead: number, hour: number, minute: number = 0): string {
  const d = new Date(today);
  d.setDate(d.getDate() + daysAhead);
  d.setHours(hour, minute, 0, 0);
  return d.toISOString();
}

export const yogaClasses: YogaClass[] = [
  {
    id: "c1", title: "Morning Ashtanga Mysore", description: "Traditional self-practice in the Mysore style. Arrive within the opening window and practice at your own pace with individual guidance.",
    studioId: "s1", studioName: "ZenMat Studio Delhi", instructorId: "i1", instructorName: "Ananya Sharma", instructorAvatarUrl: "https://picsum.photos/id/252/200/200",
    style: "Ashtanga", level: 3, levelLabel: "Challenging", intensity: 4, flexibilityDemand: 3, strengthDemand: 4, meditativeDepth: 3,
    format: "in-person", duration: 90, dateTime: futureDate(0, 6, 30), roomTemp: "Regular",
    propsRequired: ["Mat"], focusAreas: ["Strength", "Flexibility", "Breath"], contraindications: ["Pregnancy (2nd+ trimester)", "High Blood Pressure"],
    maxCapacity: 25, currentEnrollment: 18, waitlistCount: 0, price: 25, imageUrl: "https://picsum.photos/id/1029/600/400", isRecurring: true, isCancelled: false,
  },
  {
    id: "c2", title: "Gentle Hatha Flow", description: "A slow, mindful practice perfect for beginners. Focus on foundational poses, breath awareness, and proper alignment with generous use of props.",
    studioId: "s1", studioName: "ZenMat Studio Delhi", instructorId: "i5", instructorName: "Sarah Wells", instructorAvatarUrl: "https://picsum.photos/id/256/200/200",
    style: "Hatha", level: 1, levelLabel: "Gentle", intensity: 1, flexibilityDemand: 1, strengthDemand: 1, meditativeDepth: 2,
    format: "hybrid", duration: 60, dateTime: futureDate(0, 9, 0), roomTemp: "Regular",
    propsRequired: ["Mat", "Blocks", "Strap"], focusAreas: ["Flexibility", "Relaxation", "Balance"], contraindications: [],
    maxCapacity: 30, currentEnrollment: 22, waitlistCount: 0, price: 22, imageUrl: "https://picsum.photos/id/1031/600/400", isRecurring: true, isCancelled: false,
  },
  {
    id: "c3", title: "Lunch Power Vinyasa", description: "An energizing midday flow that builds heat, strength, and focus. Expect creative sequencing, arm balance options, and a satisfying savasana.",
    studioId: "s1", studioName: "ZenMat Studio Delhi", instructorId: "i2", instructorName: "Marcus Chen", instructorAvatarUrl: "https://picsum.photos/id/253/200/200",
    style: "Vinyasa", level: 3, levelLabel: "Challenging", intensity: 4, flexibilityDemand: 2, strengthDemand: 4, meditativeDepth: 1,
    format: "in-person", duration: 60, dateTime: futureDate(0, 12, 0), roomTemp: "Regular",
    propsRequired: ["Mat"], focusAreas: ["Strength", "Core", "Balance"], contraindications: ["Wrist Issues", "Neck Injury"],
    maxCapacity: 28, currentEnrollment: 28, waitlistCount: 3, price: 25, imageUrl: "https://picsum.photos/id/1032/600/400", isRecurring: true, isCancelled: false,
  },
  {
    id: "c4", title: "Prenatal Yoga", description: "Safe, nurturing practice for expecting mothers at all trimesters. Gentle poses, pelvic floor exercises, and breathing techniques for childbirth preparation.",
    studioId: "s1", studioName: "ZenMat Studio Delhi", instructorId: "i3", instructorName: "Priya Nair", instructorAvatarUrl: "https://picsum.photos/id/254/200/200",
    style: "Prenatal", level: 1, levelLabel: "Gentle", intensity: 1, flexibilityDemand: 1, strengthDemand: 1, meditativeDepth: 3,
    format: "hybrid", duration: 60, dateTime: futureDate(1, 9, 0), roomTemp: "Regular",
    propsRequired: ["Mat", "Bolster", "Blanket", "Blocks"], focusAreas: ["Relaxation", "Breath", "Hips"], contraindications: [],
    maxCapacity: 15, currentEnrollment: 11, waitlistCount: 0, price: 28, imageUrl: "https://picsum.photos/id/1033/600/400", isRecurring: true, isCancelled: false,
  },
  {
    id: "c5", title: "Evening Yin & Restore", description: "Wind down with long-held passive stretches targeting deep connective tissue. Full prop support creates profound release and relaxation.",
    studioId: "s1", studioName: "ZenMat Studio Delhi", instructorId: "i3", instructorName: "Priya Nair", instructorAvatarUrl: "https://picsum.photos/id/254/200/200",
    style: "Yin", level: 1, levelLabel: "Gentle", intensity: 1, flexibilityDemand: 2, strengthDemand: 1, meditativeDepth: 4,
    format: "hybrid", duration: 75, dateTime: futureDate(0, 19, 0), roomTemp: "Regular",
    propsRequired: ["Mat", "Bolster", "Blanket", "Blocks", "Strap"], focusAreas: ["Flexibility", "Relaxation", "Hips", "Back"], contraindications: [],
    maxCapacity: 25, currentEnrollment: 19, waitlistCount: 0, price: 25, imageUrl: "https://picsum.photos/id/1035/600/400", isRecurring: true, isCancelled: false,
  },
  {
    id: "c6", title: "Pranayama & Meditation", description: "Explore ancient breathing techniques and guided meditation. Learn Nadi Shodhana, Kapalabhati, and Ujjayi before settling into deep stillness.",
    studioId: "s1", studioName: "ZenMat Studio Delhi", instructorId: "i4", instructorName: "David Okonkwo", instructorAvatarUrl: "https://picsum.photos/id/255/200/200",
    style: "Pranayama", level: 1, levelLabel: "Gentle", intensity: 1, flexibilityDemand: 1, strengthDemand: 1, meditativeDepth: 5,
    format: "virtual", duration: 45, dateTime: futureDate(1, 6, 30), roomTemp: "Regular",
    propsRequired: ["Blanket", "Cushion"], focusAreas: ["Breath", "Meditation", "Relaxation"], contraindications: ["High Blood Pressure (for Kapalabhati)"],
    maxCapacity: 50, currentEnrollment: 32, waitlistCount: 0, price: 15, imageUrl: "https://picsum.photos/id/1036/600/400", isRecurring: true, isCancelled: false,
  },
  {
    id: "c7", title: "Hot Vinyasa Flow", description: "Dynamic flow in a heated room (95-100F). Build strength, sweat deeply, and find focus. Hydrate well before class.",
    studioId: "s2", studioName: "Lotus Flow Yoga", instructorId: "i2", instructorName: "Marcus Chen", instructorAvatarUrl: "https://picsum.photos/id/253/200/200",
    style: "Hot Vinyasa", level: 3, levelLabel: "Challenging", intensity: 5, flexibilityDemand: 3, strengthDemand: 4, meditativeDepth: 1,
    format: "in-person", duration: 60, dateTime: futureDate(0, 17, 30), roomTemp: "Hot",
    propsRequired: ["Mat", "Towel"], focusAreas: ["Strength", "Flexibility", "Cardio"], contraindications: ["Pregnancy", "High Blood Pressure", "Heart Conditions"],
    maxCapacity: 30, currentEnrollment: 26, waitlistCount: 1, price: 28, imageUrl: "https://picsum.photos/id/1037/600/400", isRecurring: true, isCancelled: false,
  },
  {
    id: "c8", title: "Chair Yoga for Seniors", description: "Accessible yoga using a chair for support. Gentle stretching, breathing exercises, and balance work suitable for all mobility levels.",
    studioId: "s4", studioName: "Tranquil Roots Wellness", instructorId: "i5", instructorName: "Sarah Wells", instructorAvatarUrl: "https://picsum.photos/id/256/200/200",
    style: "Chair", level: 1, levelLabel: "Gentle", intensity: 1, flexibilityDemand: 1, strengthDemand: 1, meditativeDepth: 2,
    format: "in-person", duration: 45, dateTime: futureDate(2, 10, 30), roomTemp: "Regular",
    propsRequired: ["Chair"], focusAreas: ["Balance", "Flexibility", "Relaxation"], contraindications: [],
    maxCapacity: 20, currentEnrollment: 14, waitlistCount: 0, price: 18, imageUrl: "https://picsum.photos/id/1038/600/400", isRecurring: true, isCancelled: false,
  },
  {
    id: "c9", title: "Kundalini Awakening", description: "Explore breath of fire, kriyas, mantra chanting, and meditation in this powerful Kundalini class. Energy work and chakra activation.",
    studioId: "s1", studioName: "ZenMat Studio Delhi", instructorId: "i4", instructorName: "David Okonkwo", instructorAvatarUrl: "https://picsum.photos/id/255/200/200",
    style: "Kundalini", level: 2, levelLabel: "Moderate", intensity: 3, flexibilityDemand: 1, strengthDemand: 2, meditativeDepth: 5,
    format: "in-person", duration: 75, dateTime: futureDate(2, 18, 0), roomTemp: "Regular",
    propsRequired: ["Mat", "Blanket"], focusAreas: ["Breath", "Meditation", "Core"], contraindications: ["Pregnancy", "Epilepsy"],
    maxCapacity: 20, currentEnrollment: 16, waitlistCount: 0, price: 25, imageUrl: "https://picsum.photos/id/1039/600/400", isRecurring: true, isCancelled: false,
  },
  {
    id: "c10", title: "Therapeutic Yoga", description: "Gentle, prop-supported practice focusing on back care, joint health, and pain management. Therapeutic modifications for common conditions.",
    studioId: "s4", studioName: "Tranquil Roots Wellness", instructorId: "i6", instructorName: "Kenji Tanaka", instructorAvatarUrl: "https://picsum.photos/id/257/200/200",
    style: "Restorative", level: 1, levelLabel: "Gentle", intensity: 1, flexibilityDemand: 1, strengthDemand: 1, meditativeDepth: 3,
    format: "in-person", duration: 60, dateTime: futureDate(1, 11, 0), roomTemp: "Regular",
    propsRequired: ["Mat", "Blocks", "Strap", "Bolster", "Blanket"], focusAreas: ["Back", "Relaxation", "Balance"], contraindications: [],
    maxCapacity: 12, currentEnrollment: 10, waitlistCount: 2, price: 30, imageUrl: "https://picsum.photos/id/1040/600/400", isRecurring: true, isCancelled: false,
  },
];

// ============================================================
// Bookings (user's history)
// ============================================================

export const bookings: Booking[] = [
  { id: "b1", classId: "c2", className: "Gentle Hatha Flow", studioName: "ZenMat Studio Delhi", instructorName: "Sarah Wells", dateTime: futureDate(-7, 9), duration: 60, status: "completed", style: "Hatha", format: "in-person", checkedIn: true, rating: 5, review: "Perfect pace for my level. Sarah's cueing is so clear!" },
  { id: "b2", classId: "c5", className: "Evening Yin & Restore", studioName: "ZenMat Studio Delhi", instructorName: "Priya Nair", dateTime: futureDate(-5, 19), duration: 75, status: "completed", style: "Yin", format: "hybrid", checkedIn: true, rating: 5 },
  { id: "b3", classId: "c3", className: "Lunch Power Vinyasa", studioName: "ZenMat Studio Delhi", instructorName: "Marcus Chen", dateTime: futureDate(-3, 12), duration: 60, status: "completed", style: "Vinyasa", format: "in-person", checkedIn: true, rating: 4 },
  { id: "b4", classId: "c6", className: "Pranayama & Meditation", studioName: "ZenMat Studio Delhi", instructorName: "David Okonkwo", dateTime: futureDate(-1, 6, 30), duration: 45, status: "completed", style: "Pranayama", format: "virtual", checkedIn: true, rating: 5, review: "David's guided meditation was transcendent." },
  { id: "b5", classId: "c2", className: "Gentle Hatha Flow", studioName: "ZenMat Studio Delhi", instructorName: "Sarah Wells", dateTime: futureDate(0, 9), duration: 60, status: "confirmed", style: "Hatha", format: "hybrid", checkedIn: false },
  { id: "b6", classId: "c5", className: "Evening Yin & Restore", studioName: "ZenMat Studio Delhi", instructorName: "Priya Nair", dateTime: futureDate(0, 19), duration: 75, status: "confirmed", style: "Yin", format: "hybrid", checkedIn: false },
  { id: "b7", classId: "c3", className: "Lunch Power Vinyasa", studioName: "ZenMat Studio Delhi", instructorName: "Marcus Chen", dateTime: futureDate(2, 12), duration: 60, status: "waitlisted", style: "Vinyasa", format: "in-person", checkedIn: false },
];

// ============================================================
// Workshops
// ============================================================

export const workshops: Workshop[] = [
  {
    id: "w1", title: "Arm Balances & Inversions Workshop",
    description: "Demystify arm balances and inversions with progressive drills, partner work, and wall practice. Learn crow, side crow, headstand prep, and forearm stand safely.",
    instructorName: "Marcus Chen", instructorAvatarUrl: "https://picsum.photos/id/253/200/200",
    studioName: "ZenMat Studio Delhi", dateTime: futureDate(10, 13, 0), duration: 180,
    price: 65, maxCapacity: 20, currentEnrollment: 16, topics: ["Arm Balances", "Inversions", "Core Strength", "Safety"],
    level: "Challenging", imageUrl: "https://picsum.photos/id/1041/600/400", isVirtual: false,
  },
  {
    id: "w2", title: "Yoga Nidra Deep Dive",
    description: "A 3-hour immersion into Yoga Nidra, the practice of yogic sleep. Learn the technique, experience extended sessions, and discover how to incorporate it into daily life.",
    instructorName: "Priya Nair", instructorAvatarUrl: "https://picsum.photos/id/254/200/200",
    studioName: "ZenMat Studio Delhi", dateTime: futureDate(14, 14, 0), duration: 180,
    price: 55, maxCapacity: 25, currentEnrollment: 20, topics: ["Yoga Nidra", "Sleep", "Relaxation", "Sankalpa"],
    level: "Gentle", imageUrl: "https://picsum.photos/id/1042/600/400", isVirtual: true,
  },
  {
    id: "w3", title: "Introduction to Ayurveda & Yoga",
    description: "Discover your dosha constitution and learn how to align your yoga practice, diet, and daily routines with Ayurvedic principles for optimal wellness.",
    instructorName: "Ananya Sharma", instructorAvatarUrl: "https://picsum.photos/id/252/200/200",
    studioName: "Tranquil Roots Wellness", dateTime: futureDate(21, 10, 0), duration: 240,
    price: 75, maxCapacity: 18, currentEnrollment: 12, topics: ["Ayurveda", "Dosha", "Nutrition", "Daily Routine"],
    level: "Gentle", imageUrl: "https://picsum.photos/id/1043/600/400", isVirtual: false,
  },
  {
    id: "w4", title: "Sound Healing & Meditation",
    description: "Experience the profound vibrations of singing bowls, gongs, and chimes combined with guided meditation. Suitable for complete beginners to experienced meditators.",
    instructorName: "David Okonkwo", instructorAvatarUrl: "https://picsum.photos/id/255/200/200",
    studioName: "ZenMat Studio Delhi", dateTime: futureDate(7, 18, 0), duration: 120,
    price: 40, maxCapacity: 30, currentEnrollment: 28, topics: ["Sound Healing", "Meditation", "Relaxation"],
    level: "Gentle", imageUrl: "https://picsum.photos/id/1044/600/400", isVirtual: false,
  },
];

// ============================================================
// Retreats
// ============================================================

export const retreats: Retreat[] = [
  {
    id: "r1", title: "Bali Bliss Yoga Retreat",
    description: "A transformative 7-day retreat in Ubud, Bali. Daily asana, meditation, pranayama, temple visits, Balinese healing ceremonies, and healthy organic cuisine amidst rice terraces.",
    destination: "Ubud, Bali", country: "Indonesia", startDate: futureDate(60, 0), endDate: futureDate(67, 0),
    price: 2200, priceIncludes: ["Accommodation", "All Meals", "Daily Yoga", "Meditation", "Temple Visit", "Spa Treatment", "Airport Transfer"],
    instructors: [{ name: "Ananya Sharma", avatarUrl: "https://picsum.photos/id/252/200/200" }, { name: "David Okonkwo", avatarUrl: "https://picsum.photos/id/255/200/200" }],
    styles: ["Hatha", "Meditation", "Pranayama", "Yin"], maxParticipants: 20, currentParticipants: 14,
    accommodationTypes: [{ type: "Shared Room", price: 2200 }, { type: "Private Room", price: 2800 }, { type: "Luxury Villa", price: 3500 }],
    mealOptions: ["Vegan", "Vegetarian", "Ayurvedic"], imageUrl: "https://picsum.photos/id/319/800/500",
    galleryUrls: ["https://picsum.photos/id/320/800/600", "https://picsum.photos/id/321/800/600", "https://picsum.photos/id/301/800/600"],
    rating: 4.9, reviewCount: 48,
  },
  {
    id: "r2", title: "Costa Rica Jungle Retreat",
    description: "5-day adventure yoga retreat on the Pacific coast. Surf, hike, practice yoga overlooking the ocean, and reconnect with nature in an eco-friendly jungle lodge.",
    destination: "Nosara, Costa Rica", country: "Costa Rica", startDate: futureDate(90, 0), endDate: futureDate(95, 0),
    price: 1800, priceIncludes: ["Accommodation", "Breakfast & Lunch", "Daily Yoga", "Surf Lesson", "Jungle Hike"],
    instructors: [{ name: "Marcus Chen", avatarUrl: "https://picsum.photos/id/253/200/200" }],
    styles: ["Vinyasa", "Power", "Meditation"], maxParticipants: 16, currentParticipants: 9,
    accommodationTypes: [{ type: "Shared Bungalow", price: 1800 }, { type: "Private Bungalow", price: 2400 }],
    mealOptions: ["Vegetarian", "Vegan", "Gluten-Free"], imageUrl: "https://picsum.photos/id/302/800/500",
    galleryUrls: ["https://picsum.photos/id/304/800/600", "https://picsum.photos/id/305/800/600"],
    rating: 4.7, reviewCount: 32,
  },
  {
    id: "r3", title: "Silent Meditation Retreat — Rishikesh",
    description: "10-day silent meditation and pranayama retreat at the foothills of the Himalayas. Deep inner work guided by experienced teachers in the yoga capital of the world.",
    destination: "Rishikesh, India", country: "India", startDate: futureDate(120, 0), endDate: futureDate(130, 0),
    price: 1500, priceIncludes: ["Accommodation", "All Meals", "Daily Meditation", "Pranayama", "Philosophy Lectures", "River Ceremony"],
    instructors: [{ name: "Ananya Sharma", avatarUrl: "https://picsum.photos/id/252/200/200" }],
    styles: ["Meditation", "Pranayama", "Hatha"], maxParticipants: 12, currentParticipants: 8,
    accommodationTypes: [{ type: "Ashram Shared", price: 1500 }, { type: "Ashram Private", price: 2000 }],
    mealOptions: ["Sattvic Vegetarian"], imageUrl: "https://picsum.photos/id/306/800/500",
    galleryUrls: ["https://picsum.photos/id/307/800/600", "https://picsum.photos/id/308/800/600"],
    rating: 4.9, reviewCount: 26,
  },
];

// ============================================================
// Meditation
// ============================================================

export const meditationSessions: MeditationSession[] = [
  { id: "m1", title: "Morning Calm", description: "Start your day with clarity and intention through this gentle guided meditation.", category: "Mindfulness", duration: 10, instructorName: "David Okonkwo", instructorAvatarUrl: "https://picsum.photos/id/255/200/200", imageUrl: "https://picsum.photos/id/1045/600/400", level: "Gentle", isFree: true },
  { id: "m2", title: "Stress Release Body Scan", description: "Systematically release tension from head to toe in this relaxing body scan meditation.", category: "Body Scan", duration: 20, instructorName: "Priya Nair", instructorAvatarUrl: "https://picsum.photos/id/254/200/200", imageUrl: "https://picsum.photos/id/1047/600/400", level: "Gentle", isFree: true },
  { id: "m3", title: "Deep Sleep Yoga Nidra", description: "Prepare for the most restful sleep of your life with this guided Yoga Nidra practice.", category: "Sleep", duration: 30, instructorName: "Priya Nair", instructorAvatarUrl: "https://picsum.photos/id/254/200/200", imageUrl: "https://picsum.photos/id/1048/600/400", level: "Gentle", isFree: false },
  { id: "m4", title: "Loving-Kindness (Metta)", description: "Cultivate compassion for yourself and others through this beautiful metta meditation practice.", category: "Compassion", duration: 15, instructorName: "David Okonkwo", instructorAvatarUrl: "https://picsum.photos/id/255/200/200", imageUrl: "https://picsum.photos/id/1049/600/400", level: "Gentle", isFree: false },
  { id: "m5", title: "Focus & Concentration", description: "Sharpen your mental clarity with single-point focus techniques drawn from Dharana practices.", category: "Focus", duration: 15, instructorName: "David Okonkwo", instructorAvatarUrl: "https://picsum.photos/id/255/200/200", imageUrl: "https://picsum.photos/id/1050/600/400", level: "Moderate", isFree: false },
  { id: "m6", title: "Chakra Balancing Journey", description: "Journey through all seven chakras with visualization, mantra, and energy awareness.", category: "Energy", duration: 25, instructorName: "David Okonkwo", instructorAvatarUrl: "https://picsum.photos/id/255/200/200", imageUrl: "https://picsum.photos/id/1051/600/400", level: "Moderate", isFree: false },
];

export const meditationCourses: MeditationCourse[] = [
  { id: "mc1", title: "Meditation 101", description: "7-day introduction covering breath awareness, body scan, and sitting posture.", durationDays: 7, level: "Gentle", sessions: 7, imageUrl: "https://picsum.photos/id/1052/600/400", enrolledCount: 2340, rating: 4.8 },
  { id: "mc2", title: "Mindfulness Foundations", description: "14-day course in present-moment awareness, thought observation, and daily mindfulness.", durationDays: 14, level: "Gentle", sessions: 14, imageUrl: "https://picsum.photos/id/1053/600/400", enrolledCount: 1890, rating: 4.7 },
  { id: "mc3", title: "Yoga Nidra Journey", description: "10-day deep relaxation course exploring progressive Yoga Nidra and sankalpa setting.", durationDays: 10, level: "Moderate", sessions: 10, imageUrl: "https://picsum.photos/id/1054/600/400", enrolledCount: 1240, rating: 4.9 },
  { id: "mc4", title: "Loving-Kindness (Metta)", description: "14-day journey of self-compassion, extending kindness, and forgiveness practices.", durationDays: 14, level: "Moderate", sessions: 14, imageUrl: "https://picsum.photos/id/1055/600/400", enrolledCount: 980, rating: 4.6 },
  { id: "mc5", title: "Vipassana Basics", description: "30-day insight meditation covering impermanence observation and equanimity.", durationDays: 30, level: "Advanced", sessions: 30, imageUrl: "https://picsum.photos/id/1057/600/400", enrolledCount: 560, rating: 4.8 },
];

// ============================================================
// Pranayama
// ============================================================

export const pranayamaExercises: PranayamaExercise[] = [
  { id: "p1", technique: "Diaphragmatic", level: "Gentle", description: "Foundation breath awareness. Learn to breathe deeply into the diaphragm.", durationOptions: [3, 5, 10], benefits: ["Stress reduction", "Better sleep", "Core awareness"], contraindications: [], imageUrl: "https://picsum.photos/id/1058/600/400" },
  { id: "p2", technique: "Ujjayi", level: "Gentle", description: "Ocean breath with gentle throat constriction for focus and heat.", durationOptions: [5, 10, 15], benefits: ["Focus", "Calming", "Warms body"], contraindications: [], imageUrl: "https://picsum.photos/id/1059/600/400" },
  { id: "p3", technique: "Nadi Shodhana", level: "Gentle", description: "Alternate nostril breathing for balance and stress reduction.", durationOptions: [5, 10, 15], benefits: ["Balance", "Stress reduction", "Mental clarity"], contraindications: [], imageUrl: "https://picsum.photos/id/1026/600/400" },
  { id: "p4", technique: "Kapalabhati", level: "Moderate", description: "Energizing rapid exhales for cleansing and invigoration.", durationOptions: [5, 10], benefits: ["Energy", "Detox", "Core strength"], contraindications: ["High Blood Pressure", "Pregnancy", "Hernia"], imageUrl: "https://picsum.photos/id/1027/600/400" },
  { id: "p5", technique: "Bhramari", level: "Gentle", description: "Humming bee breath for deep calming and anxiety relief.", durationOptions: [5, 10], benefits: ["Anxiety relief", "Better sleep", "Mental calm"], contraindications: [], imageUrl: "https://picsum.photos/id/1028/600/400" },
  { id: "p6", technique: "Box Breathing", level: "Gentle", description: "Equal ratio breathing (4:4:4:4) for stress management and focus.", durationOptions: [5, 10, 15], benefits: ["Stress management", "Focus", "Emotional regulation"], contraindications: [], imageUrl: "https://picsum.photos/id/1029/600/400" },
  { id: "p7", technique: "Kumbhaka", level: "Advanced", description: "Breath retention training for advanced practitioners.", durationOptions: [10, 15, 20], benefits: ["Expanded capacity", "Deep calm", "Pranic energy"], contraindications: ["High Blood Pressure", "Pregnancy", "Heart conditions", "Anxiety"], imageUrl: "https://picsum.photos/id/1031/600/400" },
];

// ============================================================
// On-Demand Content
// ============================================================

export const onDemandVideos: OnDemandVideo[] = [
  { id: "v1", title: "Sunrise Vinyasa Flow", description: "Wake up with this energizing 30-min flow.", instructorName: "Marcus Chen", instructorAvatarUrl: "https://picsum.photos/id/253/200/200", style: "Vinyasa", level: "Moderate", duration: 30, thumbnailUrl: "https://picsum.photos/id/1032/600/340", viewCount: 12400, rating: 4.8, isFree: true, focusAreas: ["Strength", "Flexibility"], collection: "Morning Flows" },
  { id: "v2", title: "Bedtime Yin Yoga", description: "Melt into sleep with this gentle 45-min Yin practice.", instructorName: "Priya Nair", instructorAvatarUrl: "https://picsum.photos/id/254/200/200", style: "Yin", level: "Gentle", duration: 45, thumbnailUrl: "https://picsum.photos/id/1033/600/340", viewCount: 18200, rating: 4.9, isFree: false, focusAreas: ["Relaxation", "Hips", "Back"], collection: "Bedtime Yoga" },
  { id: "v3", title: "Desk Worker Relief", description: "15-min stretch break for tight shoulders and hips.", instructorName: "Sarah Wells", instructorAvatarUrl: "https://picsum.photos/id/256/200/200", style: "Gentle Flow", level: "Gentle", duration: 15, thumbnailUrl: "https://picsum.photos/id/1035/600/340", viewCount: 24600, rating: 4.7, isFree: true, focusAreas: ["Shoulders", "Hips", "Back"], collection: "Desk Worker Relief" },
  { id: "v4", title: "Power Core Challenge", description: "Intense 20-min core-focused power flow.", instructorName: "Marcus Chen", instructorAvatarUrl: "https://picsum.photos/id/253/200/200", style: "Power", level: "Challenging", duration: 20, thumbnailUrl: "https://picsum.photos/id/1036/600/340", viewCount: 9800, rating: 4.6, isFree: false, focusAreas: ["Core", "Strength"] },
  { id: "v5", title: "Complete Beginner's Guide to Yoga", description: "60-min comprehensive introduction to all foundational poses.", instructorName: "Sarah Wells", instructorAvatarUrl: "https://picsum.photos/id/256/200/200", style: "Hatha", level: "Gentle", duration: 60, thumbnailUrl: "https://picsum.photos/id/1037/600/340", viewCount: 42300, rating: 4.9, isFree: true, focusAreas: ["Flexibility", "Balance", "Breath"] },
  { id: "v6", title: "Ashtanga Primary Series Full", description: "Traditional 90-min guided Ashtanga Primary Series.", instructorName: "Ananya Sharma", instructorAvatarUrl: "https://picsum.photos/id/252/200/200", style: "Ashtanga", level: "Advanced", duration: 90, thumbnailUrl: "https://picsum.photos/id/1038/600/340", viewCount: 7600, rating: 4.9, isFree: false, focusAreas: ["Strength", "Flexibility", "Breath"] },
];

export const onDemandCollections: OnDemandCollection[] = [
  { id: "col1", title: "Morning Flows", description: "Start each day with energy and intention.", videoCount: 12, totalDuration: 420, imageUrl: "https://picsum.photos/id/1039/600/400", category: "Time of Day" },
  { id: "col2", title: "Bedtime Yoga", description: "Wind down for restful, deep sleep.", videoCount: 8, totalDuration: 360, imageUrl: "https://picsum.photos/id/1040/600/400", category: "Time of Day" },
  { id: "col3", title: "Desk Worker Relief", description: "Quick stretches for the office-bound.", videoCount: 10, totalDuration: 150, imageUrl: "https://picsum.photos/id/1041/600/400", category: "Lifestyle" },
  { id: "col4", title: "Injury Recovery", description: "Gentle therapeutic sequences for healing.", videoCount: 6, totalDuration: 270, imageUrl: "https://picsum.photos/id/1042/600/400", category: "Therapeutic" },
  { id: "col5", title: "Travel Yoga", description: "Practice anywhere with no props needed.", videoCount: 8, totalDuration: 200, imageUrl: "https://picsum.photos/id/1043/600/400", category: "Lifestyle" },
];

export const onDemandCourses: OnDemandCourse[] = [
  { id: "oc1", title: "Beginner's Journey", description: "8-class progressive course from absolute zero to confident practitioner.", instructorName: "Sarah Wells", classCount: 8, totalDuration: 480, level: "Gentle", imageUrl: "https://picsum.photos/id/1044/600/400", progress: 0, enrolledCount: 4800, rating: 4.9 },
  { id: "oc2", title: "Handstand in 30 Days", description: "Progressive drills, strength work, and technique to achieve your first handstand.", instructorName: "Marcus Chen", classCount: 30, totalDuration: 600, level: "Challenging", imageUrl: "https://picsum.photos/id/1045/600/400", progress: 0, enrolledCount: 2100, rating: 4.7 },
  { id: "oc3", title: "Pranayama Foundations", description: "Learn 6 core breathing techniques with proper form and safety.", instructorName: "David Okonkwo", classCount: 12, totalDuration: 180, level: "Gentle", imageUrl: "https://picsum.photos/id/1047/600/400", progress: 0, enrolledCount: 3200, rating: 4.8 },
];

// ============================================================
// Blog Posts
// ============================================================

export const blogPosts: BlogPost[] = [
  { id: "bp1", title: "Hatha vs. Vinyasa: Which Is Right for You?", excerpt: "Understanding the key differences between these popular styles to find your perfect match.", category: "Yoga Education", author: "Ananya Sharma", authorAvatarUrl: "https://picsum.photos/id/252/200/200", publishedDate: "2026-03-20", readTime: 6, imageUrl: "https://picsum.photos/id/1048/600/400", tags: ["Hatha", "Vinyasa", "Beginners"] },
  { id: "bp2", title: "Understanding the 8 Limbs of Yoga", excerpt: "Yoga is far more than asana. Explore Patanjali's complete system for living well.", category: "Philosophy", author: "Ananya Sharma", authorAvatarUrl: "https://picsum.photos/id/252/200/200", publishedDate: "2026-03-15", readTime: 10, imageUrl: "https://picsum.photos/id/1049/600/400", tags: ["Philosophy", "Patanjali", "8 Limbs"] },
  { id: "bp3", title: "Protect Your Knees in Yoga", excerpt: "Essential alignment cues and modifications to keep your knees safe in every practice.", category: "Anatomy", author: "Kenji Tanaka", authorAvatarUrl: "https://picsum.photos/id/257/200/200", publishedDate: "2026-03-10", readTime: 5, imageUrl: "https://picsum.photos/id/1050/600/400", tags: ["Anatomy", "Safety", "Knees"] },
  { id: "bp4", title: "Discover Your Dosha: Ayurveda Quiz Guide", excerpt: "Learn about Vata, Pitta, and Kapha constitutions and how they shape your ideal practice.", category: "Ayurveda", author: "Priya Nair", authorAvatarUrl: "https://picsum.photos/id/254/200/200", publishedDate: "2026-03-05", readTime: 8, imageUrl: "https://picsum.photos/id/1051/600/400", tags: ["Ayurveda", "Dosha", "Wellness"] },
  { id: "bp5", title: "Mindfulness at Work: A Practical Guide", excerpt: "Bring the calm of the mat into your 9-to-5 with these mindfulness techniques.", category: "Mindfulness", author: "David Okonkwo", authorAvatarUrl: "https://picsum.photos/id/255/200/200", publishedDate: "2026-02-28", readTime: 7, imageUrl: "https://picsum.photos/id/1052/600/400", tags: ["Mindfulness", "Workplace", "Stress"] },
  { id: "bp6", title: "Creating a Home Practice Space", excerpt: "Design a sacred corner for your home yoga practice, no matter your budget or space.", category: "Lifestyle", author: "Sarah Wells", authorAvatarUrl: "https://picsum.photos/id/256/200/200", publishedDate: "2026-02-20", readTime: 5, imageUrl: "https://picsum.photos/id/1053/600/400", tags: ["Home Practice", "Lifestyle", "Tips"] },
];

// ============================================================
// Community: Challenges & Events
// ============================================================

export const challenges: Challenge[] = [
  { id: "ch1", title: "30-Day Yoga Challenge", description: "Practice every day for 30 days. Any style, any duration (20+ min). Build the habit that changes everything.", startDate: "2026-03-01", endDate: "2026-03-31", durationDays: 30, participantCount: 1240, imageUrl: "https://picsum.photos/id/1054/600/400", category: "Practice", reward: "500 loyalty points + badge", isActive: true, progress: 60 },
  { id: "ch2", title: "Meditation March", description: "10 minutes of meditation every day in March. Guided sessions provided daily.", startDate: "2026-03-01", endDate: "2026-03-31", durationDays: 30, participantCount: 890, imageUrl: "https://picsum.photos/id/1055/600/400", category: "Meditation", reward: "300 loyalty points + badge", isActive: true, progress: 55 },
  { id: "ch3", title: "Flexibility February", description: "Daily hip and hamstring stretches to dramatically improve flexibility.", startDate: "2026-02-01", endDate: "2026-02-28", durationDays: 28, participantCount: 1560, imageUrl: "https://picsum.photos/id/1057/600/400", category: "Flexibility", reward: "500 loyalty points + badge", isActive: false },
];

export const communityEvents: CommunityEvent[] = [
  { id: "ce1", title: "Full Moon Yoga & Sound Bath", description: "Celebrate the full moon with a special flow followed by a crystal singing bowl sound bath under the stars in our garden.", type: "Moon Practice", dateTime: futureDate(5, 19, 0), duration: 90, studioName: "ZenMat Studio Delhi", price: 35, maxCapacity: 30, currentAttendees: 24, imageUrl: "https://picsum.photos/id/1058/600/400" },
  { id: "ce2", title: "Sunday Morning Kirtan", description: "Join us for call-and-response devotional chanting with live harmonium and tabla. All voices welcome, no experience needed.", type: "Kirtan", dateTime: futureDate(3, 10, 0), duration: 90, studioName: "ZenMat Studio Delhi", price: 15, maxCapacity: 50, currentAttendees: 38, imageUrl: "https://picsum.photos/id/1059/600/400" },
  { id: "ce3", title: "Yoga Philosophy Discussion: The Bhagavad Gita", description: "Monthly philosophy circle exploring key teachings of the Bhagavad Gita. Bring your questions and curiosity.", type: "Philosophy Talk", dateTime: futureDate(8, 18, 30), duration: 90, studioName: "ZenMat Studio Delhi", price: 20, maxCapacity: 25, currentAttendees: 18, imageUrl: "https://picsum.photos/id/1026/600/400" },
  { id: "ce4", title: "Ayurveda Cooking Class", description: "Learn to prepare a complete Ayurvedic meal. Dosha-balancing recipes, spice blending, and mindful eating practices.", type: "Cooking Class", dateTime: futureDate(12, 11, 0), duration: 180, studioName: "Tranquil Roots Wellness", price: 65, maxCapacity: 12, currentAttendees: 10, imageUrl: "https://picsum.photos/id/1027/600/400" },
];

// ============================================================
// Teacher Training Programs
// ============================================================

export const teacherTrainingPrograms: TeacherTrainingProgram[] = [
  {
    id: "tt1", title: "200-Hour Yoga Teacher Training", hours: 200,
    studioName: "ZenMat Studio Delhi", startDate: futureDate(45, 0), endDate: futureDate(165, 0),
    price: 3500, installmentOption: true,
    modules: [
      { name: "Techniques, Training & Practice", hours: 100, description: "Asana practice, teaching methodology, alignment, sequencing" },
      { name: "Anatomy & Physiology", hours: 20, description: "Musculoskeletal system, breath mechanics, injury prevention" },
      { name: "Yoga Philosophy & Ethics", hours: 30, description: "Yoga Sutras, Bhagavad Gita, 8 Limbs, yamas/niyamas" },
      { name: "Teaching Methodology", hours: 25, description: "Cueing, demonstration, class management, modifications" },
      { name: "Practicum", hours: 25, description: "Observation, assisting, practice teaching with feedback" },
    ],
    spotsRemaining: 6, instructorNames: ["Ananya Sharma", "Kenji Tanaka"],
    imageUrl: "https://picsum.photos/id/1028/600/400", rating: 4.9,
  },
  {
    id: "tt2", title: "300-Hour Advanced Teacher Training", hours: 300,
    studioName: "ZenMat Studio Delhi", startDate: futureDate(90, 0), endDate: futureDate(270, 0),
    price: 4800, installmentOption: true,
    modules: [
      { name: "Advanced Asana", hours: 75, description: "Advanced poses, therapeutic applications, specialty populations" },
      { name: "Advanced Pranayama & Meditation", hours: 50, description: "Advanced breathing, meditation teacher training" },
      { name: "Yoga Therapy Foundations", hours: 50, description: "Working with conditions, assessment, treatment planning" },
      { name: "Business of Yoga", hours: 25, description: "Studio management, marketing, finances, legal" },
      { name: "Elective Specialization", hours: 100, description: "Prenatal, kids, seniors, trauma-informed, Ayurveda" },
    ],
    spotsRemaining: 10, instructorNames: ["Ananya Sharma", "David Okonkwo", "Kenji Tanaka"],
    imageUrl: "https://picsum.photos/id/1029/600/400", rating: 4.8,
  },
];

// ============================================================
// User Profile (logged-in user)
// ============================================================

export const currentUser: UserProfile = {
  id: "u1", name: "Anya Petrova", email: "anya@example.com",
  avatarUrl: "https://picsum.photos/id/251/200/200",
  memberSince: "2025-09-15", dosha: "Vata-Pitta",
  goals: ["Stress Relief", "Flexibility", "Build Meditation Habit"],
  experienceLevel: "Moderate", preferredStyles: ["Hatha", "Yin", "Vinyasa"],
  membership: {
    id: "mem1", tier: "unlimited-monthly", status: "active",
    studioName: "ZenMat Studio Delhi", startDate: "2025-09-15",
    renewalDate: "2026-04-15", price: 159, autoRenew: true,
  },
  streakInfo: {
    currentStreak: 12, longestStreak: 21, graceDaysUsed: 1, freezesUsed: 0,
    nextMilestone: { days: 14, badge: "Fortnight Focus", reward: "100 loyalty points" },
    history: Array.from({ length: 30 }, (_, i) => ({ date: futureDate(-29 + i, 0), completed: Math.random() > 0.2 })),
  },
  loyaltyInfo: {
    totalPoints: 1850, lifetimePoints: 3200,
    currentTier: "Silver", nextTier: "Gold", pointsToNextTier: 650,
    recentActivity: [
      { action: "Attended Gentle Hatha Flow", points: 10, date: futureDate(-1, 0) },
      { action: "7-day streak bonus", points: 50, date: futureDate(-2, 0) },
      { action: "Completed Meditation March (Week 3)", points: 25, date: futureDate(-3, 0) },
      { action: "Wrote review for Marcus Chen", points: 15, date: futureDate(-5, 0) },
    ],
    availableRewards: [
      { title: "1 Free Class", pointsCost: 500, description: "Redeem for any single drop-in class" },
      { title: "10% Off Workshop", pointsCost: 1000, description: "Discount on any workshop" },
      { title: "Free Month Upgrade", pointsCost: 2000, description: "Upgrade to Premium for one month" },
      { title: "Free Private Session", pointsCost: 3000, description: "One 60-min private session" },
    ],
  },
  progressStats: {
    totalClasses: 68, currentStreak: 12, longestStreak: 21,
    totalMeditationMinutes: 840, stylesExplored: 6,
    poseMilestones: [
      { poseName: "Crow Pose", sanskritName: "Bakasana", achievedDate: "2026-01-15", category: "Arm Balances" },
      { poseName: "Headstand", sanskritName: "Sirsasana", achievedDate: "2026-03-01", category: "Inversions" },
      { poseName: "Wheel Pose", sanskritName: "Urdhva Dhanurasana", achievedDate: "2026-02-10", category: "Backbends" },
    ],
    weeklyAttendance: [
      { week: "W1", count: 4 }, { week: "W2", count: 3 }, { week: "W3", count: 5 },
      { week: "W4", count: 4 }, { week: "W5", count: 3 }, { week: "W6", count: 5 },
      { week: "W7", count: 4 }, { week: "W8", count: 4 },
    ],
    styleBreakdown: [
      { style: "Hatha", count: 22 }, { style: "Yin", count: 18 }, { style: "Vinyasa", count: 14 },
      { style: "Pranayama", count: 8 }, { style: "Meditation", count: 4 }, { style: "Kundalini", count: 2 },
    ],
    wellnessScores: [
      { date: "W1", stress: 7, energy: 5, mood: 6 }, { date: "W2", stress: 6, energy: 6, mood: 7 },
      { date: "W3", stress: 5, energy: 7, mood: 7 }, { date: "W4", stress: 4, energy: 7, mood: 8 },
      { date: "W5", stress: 4, energy: 8, mood: 8 }, { date: "W6", stress: 3, energy: 8, mood: 9 },
      { date: "W7", stress: 3, energy: 9, mood: 9 }, { date: "W8", stress: 2, energy: 9, mood: 9 },
    ],
  },
};

// ============================================================
// Studio Dashboard Analytics
// ============================================================

export const studioAnalytics: StudioAnalytics = {
  revenue: {
    total: 48200, change: 12.3,
    byMonth: [
      { month: "Oct", amount: 38200 }, { month: "Nov", amount: 41500 }, { month: "Dec", amount: 39800 },
      { month: "Jan", amount: 43100 }, { month: "Feb", amount: 45600 }, { month: "Mar", amount: 48200 },
    ],
    byType: [
      { type: "Memberships", amount: 28920, percentage: 60 },
      { type: "Drop-ins", amount: 7230, percentage: 15 },
      { type: "Workshops", amount: 5784, percentage: 12 },
      { type: "Private Sessions", amount: 3856, percentage: 8 },
      { type: "Merchandise", amount: 2410, percentage: 5 },
    ],
  },
  membership: {
    total: 820, newThisMonth: 34, churnRate: 4.2,
    byTier: [
      { tier: "Unlimited Monthly", count: 320 }, { tier: "Unlimited Annual", count: 180 },
      { tier: "8-Class Pack", count: 140 }, { tier: "4-Class Pack", count: 95 },
      { tier: "Drop-in", count: 85 },
    ],
  },
  attendance: {
    avgFillRate: 74, totalClasses: 142, noShowRate: 8.2,
    peakHours: [
      { hour: "6 AM", count: 18 }, { hour: "7 AM", count: 22 }, { hour: "8 AM", count: 14 },
      { hour: "9 AM", count: 26 }, { hour: "10 AM", count: 20 }, { hour: "12 PM", count: 24 },
      { hour: "5 PM", count: 28 }, { hour: "6 PM", count: 30 }, { hour: "7 PM", count: 26 },
    ],
  },
  topClasses: [
    { name: "Lunch Power Vinyasa", fillRate: 96, revenue: 3640 },
    { name: "Evening Yin & Restore", fillRate: 88, revenue: 2975 },
    { name: "Morning Ashtanga Mysore", fillRate: 84, revenue: 2700 },
    { name: "Gentle Hatha Flow", fillRate: 78, revenue: 2420 },
    { name: "Kundalini Awakening", fillRate: 76, revenue: 1900 },
  ],
  topInstructors: [
    { name: "Marcus Chen", rating: 4.7, fillRate: 92, avatarUrl: "https://picsum.photos/id/253/200/200" },
    { name: "Ananya Sharma", rating: 4.9, fillRate: 86, avatarUrl: "https://picsum.photos/id/252/200/200" },
    { name: "Priya Nair", rating: 4.8, fillRate: 82, avatarUrl: "https://picsum.photos/id/254/200/200" },
    { name: "David Okonkwo", rating: 4.9, fillRate: 78, avatarUrl: "https://picsum.photos/id/255/200/200" },
  ],
};

// ============================================================
// Instructor Earnings
// ============================================================

export const instructorEarnings: InstructorEarnings = {
  thisMonth: 4200, lastMonth: 3850, ytd: 24600,
  byStudio: [
    { studioName: "ZenMat Studio Delhi", amount: 3100 },
    { studioName: "Lotus Flow Yoga", amount: 1100 },
  ],
  byType: [
    { type: "Regular Classes", amount: 2800 },
    { type: "Workshops", amount: 780 },
    { type: "Private Sessions", amount: 620 },
  ],
  recentPayments: [
    { date: "2026-03-15", amount: 2100, description: "March 1-15 Classes", status: "paid" },
    { date: "2026-03-01", amount: 1750, description: "Feb 16-28 Classes", status: "paid" },
    { date: "2026-02-15", amount: 2100, description: "Feb 1-15 Classes", status: "paid" },
  ],
};

// ============================================================
// Schedule Events (for studio dashboard)
// ============================================================

export const scheduleEvents: ScheduleEvent[] = yogaClasses.map((c) => ({
  id: c.id,
  title: c.title,
  instructorName: c.instructorName,
  style: c.style,
  dateTime: c.dateTime,
  duration: c.duration,
  enrollmentCount: c.currentEnrollment,
  maxCapacity: c.maxCapacity,
  format: c.format,
  room: c.studioId === "s1" ? "Main Shala" : undefined,
}));

// ============================================================
// Pricing
// ============================================================

export const studioPricingTiers: PricingTier[] = [
  { name: "Starter", target: "Solo instructor / home studio", monthlyPrice: 29, annualPrice: 290, features: ["1 instructor", "50 members", "Class scheduling", "Basic analytics", "Email support"], isPopular: false, ctaText: "Start Free Trial" },
  { name: "Studio", target: "Single-location studio", monthlyPrice: 79, annualPrice: 790, features: ["5 instructors", "300 members", "Virtual classes", "Full analytics", "Marketing tools", "Waitlist management", "Priority support"], isPopular: true, ctaText: "Start Free Trial" },
  { name: "Pro", target: "Multi-instructor / premium studio", monthlyPrice: 149, annualPrice: 1490, features: ["15 instructors", "1,000 members", "Workshops & retreats", "API access", "White-label options", "Advanced analytics", "Dedicated support"], isPopular: false, ctaText: "Start Free Trial" },
  { name: "Enterprise", target: "Multi-studio / franchise", monthlyPrice: 299, annualPrice: 0, features: ["Unlimited instructors", "Unlimited members", "Multi-location management", "Franchise tools", "Custom integrations", "Dedicated account manager", "SLA guarantee"], isPopular: false, ctaText: "Contact Sales" },
];

export const consumerPricingTiers: ConsumerTier[] = [
  { name: "Free", monthlyPrice: 0, annualPrice: 0, includes: ["Studio discovery", "1 on-demand class/week", "Community access", "Basic progress tracking"], isPopular: false },
  { name: "Essential", monthlyPrice: 14.99, annualPrice: 119, includes: ["Unlimited on-demand library", "Guided meditations", "Pranayama library", "Full progress tracking", "Challenges access"], isPopular: false },
  { name: "Premium", monthlyPrice: 29.99, annualPrice: 239, includes: ["Everything in Essential", "Live virtual classes", "Personalized practice plans", "AI recommendations", "Offline downloads", "Priority booking"], isPopular: true },
];

// ============================================================
// Legacy data exports (backward compat)
// ============================================================

export const studioInfo: StudioInfo = {
  name: "ZenMat", tagline: "Find Your Balance, Find Your Peace",
  address: "23, Shanti Nagar, Near Lodi Garden", city: "New Delhi", state: "Delhi", zip: "110003",
  phone: "+91 98765 43210", email: "namaste@zenmat.studio",
  mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.2039099554647!2d77.21893147549408!3d28.593684075686907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce2a99b0c668d%3A0x2b1ae8ee65e81b25!2sLodi%20Garden!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin",
};

export const stats = [
  { label: "Years of Practice", value: "10+", icon: "calendar" },
  { label: "Happy Students", value: "5,000+", icon: "users" },
  { label: "Certified Instructors", value: "12", icon: "award" },
  { label: "Yoga Alliance Registered", value: "RYS 200", icon: "shield-check" },
];

export const classPrograms: ClassProgram[] = [
  { id: "hatha", name: "Hatha Yoga", description: "A gentle introduction to foundational yoga postures rooted in classical Indian tradition, with emphasis on alignment, breath, and inner awareness.", difficulty: "All Levels", intensity: "Gentle", duration: "60 min", image: "https://picsum.photos/id/10/600/400", tags: ["Foundation", "Alignment", "Breath"] },
  { id: "vinyasa", name: "Vinyasa Flow", description: "Dynamic breath-synchronised practice linking movement and breath in flowing sequences that build heat and focus.", difficulty: "Intermediate", intensity: "Moderate", duration: "60 min", image: "https://picsum.photos/id/15/600/400", tags: ["Flow", "Strength", "Cardio"] },
  { id: "ashtanga", name: "Ashtanga Yoga", description: "Rigorous, disciplined practice following the traditional Mysore sequence as taught in the Ashtanga parampara lineage.", difficulty: "Advanced", intensity: "Vigorous", duration: "90 min", image: "https://picsum.photos/id/16/600/400", tags: ["Discipline", "Tradition", "Stamina"] },
  { id: "yin-restorative", name: "Yin / Restorative Yoga", description: "Slow, meditative practice holding passive poses for deep connective tissue release and profound relaxation.", difficulty: "All Levels", intensity: "Gentle", duration: "75 min", image: "https://picsum.photos/id/22/600/400", tags: ["Deep Stretch", "Relaxation", "Healing"] },
  { id: "pranayama", name: "Pranayama & Meditation", description: "Ancient Indian breathwork techniques (Nadi Shodhana, Kapalabhati, Bhramari) paired with guided dhyana for inner stillness.", difficulty: "All Levels", intensity: "Gentle", duration: "45 min", image: "https://picsum.photos/id/28/600/400", tags: ["Breath", "Mindfulness", "Stillness"] },
  { id: "power", name: "Power Yoga", description: "Fitness-based vigorous approach to Vinyasa that builds serious strength, stamina, and mental resilience.", difficulty: "Intermediate", intensity: "Challenging", duration: "60 min", image: "https://picsum.photos/id/37/600/400", tags: ["Strength", "Fitness", "Challenge"] },
  { id: "prenatal", name: "Prenatal Yoga", description: "Specially designed for expecting mothers at every trimester. Gentle asanas, pelvic floor exercises, and Garbh Sanskar breathing techniques.", difficulty: "Beginner", intensity: "Gentle", duration: "60 min", image: "https://picsum.photos/id/42/600/400", tags: ["Prenatal", "Gentle", "Community"] },
  { id: "kids", name: "Kids Yoga", description: "Playful, imaginative classes for children ages 5-12. Animal poses, Panchatantra storytelling, and creative movement build body awareness.", difficulty: "Beginner", intensity: "Moderate", duration: "45 min", image: "https://picsum.photos/id/48/600/400", tags: ["Kids", "Playful", "Creative"] },
  { id: "corporate", name: "Corporate Wellness Programs", description: "Customised programs for Gurgaon and Delhi NCR corporates including desk yoga, stress management, and mindfulness training.", difficulty: "All Levels", intensity: "Gentle", duration: "30-60 min", image: "https://picsum.photos/id/60/600/400", tags: ["Corporate", "Wellness", "Stress Relief"] },
  { id: "ytt", name: "Yoga Teacher Training (YTT)", description: "Transform your practice with our Yoga Alliance-certified 200-hour and 500-hour programs covering asana, anatomy, Vedantic philosophy, and teaching methodology.", difficulty: "Advanced", intensity: "Challenging", duration: "200+ hrs", image: "https://picsum.photos/id/76/600/400", tags: ["Certification", "Career", "Mastery"] },
];

export const studioSpaces: StudioSpace[] = [
  { id: "main-hall", name: "The Shala (Main Practice Hall)", description: "Sunlit 1,800 sq ft main practice hall with teak flooring, brass diya accents, and abundant natural light from floor-to-ceiling jali screens.", image: "https://picsum.photos/id/49/800/500" },
  { id: "meditation-room", name: "The Dhyana Kaksh (Meditation Space)", description: "Intimate diya-lit space for meditation and pranayama, adorned with Rajasthani textiles. Seats 15 comfortably.", image: "https://picsum.photos/id/50/800/500" },
  { id: "garden", name: "The Vatika (Courtyard Garden)", description: "Peaceful courtyard with stone pathways surrounded by jasmine, tulsi, neem, and a small water feature for outdoor morning practice.", image: "https://picsum.photos/id/28/800/500" },
  { id: "changing-rooms", name: "Changing Rooms & Amenities", description: "Clean, spacious changing rooms with private showers, lockers, and complimentary tulsi-ginger chai after every class.", image: "https://picsum.photos/id/42/800/500" },
  { id: "reception", name: "The Swagat Kaksh (Welcome Lounge)", description: "Warm reception area with a lending library of yoga and Vedantic texts, handloom boutique corner, and an organic herbal tea station.", image: "https://picsum.photos/id/36/800/500" },
];

export const testimonials: Testimonial[] = [
  { id: "t1", name: "Meera Iyer", image: "https://picsum.photos/id/65/100/100", quote: "I walked in as a complete beginner with terrible back pain from my IT job. Six months later, I have a daily practice that transformed my posture, sleep, and confidence.", classType: "Hatha Yoga", practiceYears: "6 months", rating: 5 },
  { id: "t2", name: "Rahul Kapoor", image: "https://picsum.photos/id/91/100/100", quote: "The Vinyasa classes here challenge me in ways I never experienced practising alone at home. The community energy pushed me to nail my first crow pose.", classType: "Vinyasa Flow", practiceYears: "2.5 years", rating: 5 },
  { id: "t3", name: "Sneha Deshmukh", image: "https://picsum.photos/id/96/100/100", quote: "The prenatal classes were my lifeline during pregnancy. The breathing techniques literally got me through labour. Every expecting mother in Delhi needs this.", classType: "Prenatal Yoga", practiceYears: "1 year", rating: 5 },
  { id: "t4", name: "Suresh & Kamala Reddy", image: "https://picsum.photos/id/29/100/100", quote: "The Chair Yoga classes improved our mobility, reduced our joint pain, and gave us a wonderful social community at our age. We look forward to every session.", classType: "Chair Yoga", practiceYears: "8 months", rating: 5 },
  { id: "t5", name: "Vikram Bhatia", image: "https://picsum.photos/id/77/100/100", quote: "The Yoga Nidra sessions saved my mental health during a stressful startup phase. I sleep better, I am calmer in meetings, and my team noticed the difference.", classType: "Meditation", practiceYears: "1.5 years", rating: 5 },
  { id: "t6", name: "Arjun Mehta", image: "https://picsum.photos/id/90/100/100", quote: "Ananya ji's teaching is the most authentic Ashtanga I have encountered outside of Mysore itself. Her philosophy integration is profound, and the YTT program is truly world-class.", classType: "Ashtanga Yoga", practiceYears: "10+ years", rating: 5 },
];

export const faqItems: FAQItem[] = [
  { id: "faq-1", question: "Do I need prior yoga experience?", answer: "Absolutely not! We welcome complete beginners. Our Hatha and Gentle Flow classes are specifically designed for newcomers." },
  { id: "faq-2", question: "What should I bring to class?", answer: "Just yourself and comfortable, stretchy clothing. We provide mats, blocks, straps, bolsters, and blankets free of charge." },
  { id: "faq-3", question: "Do you offer trial classes?", answer: "Yes! Your first class is completely free. Contact us to schedule your complimentary trial class." },
  { id: "faq-4", question: "Are private sessions available?", answer: "Yes, all instructors offer private 1-on-1 sessions, available as single sessions or discounted packs." },
  { id: "faq-5", question: "Is the studio suitable for seniors?", answer: "Absolutely. We offer Chair Yoga and Gentle Flow classes. Yoga is for every body at every age." },
  { id: "faq-6", question: "Do you offer teacher training?", answer: "Yes, Yoga Alliance-certified 200-hour and 500-hour programs led by Ananya Sharma. New cohorts begin every January and September." },
];

export const classTimings: ClassTiming[] = [
  { day: "Monday", classes: [{ time: "6:00 AM", name: "Ashtanga Mysore", instructor: "Ananya" }, { time: "8:30 AM", name: "Hatha Yoga", instructor: "Kavita" }, { time: "12:00 PM", name: "Lunch Vinyasa", instructor: "Rohan" }, { time: "5:30 PM", name: "Power Yoga", instructor: "Rohan" }, { time: "7:00 PM", name: "Yin Restorative", instructor: "Priya" }] },
  { day: "Tuesday", classes: [{ time: "6:00 AM", name: "Pranayama & Meditation", instructor: "Devendra" }, { time: "9:00 AM", name: "Prenatal Yoga", instructor: "Priya" }, { time: "10:30 AM", name: "Gentle Flow", instructor: "Kavita" }, { time: "5:30 PM", name: "Vinyasa Flow", instructor: "Rohan" }, { time: "7:00 PM", name: "Hatha Yoga", instructor: "Ananya" }] },
  { day: "Wednesday", classes: [{ time: "6:00 AM", name: "Ashtanga Mysore", instructor: "Ananya" }, { time: "9:00 AM", name: "Chair Yoga", instructor: "Kavita" }, { time: "12:00 PM", name: "Lunch Meditation", instructor: "Devendra" }, { time: "5:30 PM", name: "Power Yoga", instructor: "Rohan" }, { time: "7:00 PM", name: "Sound Bath", instructor: "Devendra" }] },
  { day: "Thursday", classes: [{ time: "6:00 AM", name: "Pranayama", instructor: "Devendra" }, { time: "9:00 AM", name: "Prenatal Yoga", instructor: "Priya" }, { time: "10:30 AM", name: "Hatha Yoga", instructor: "Ananya" }, { time: "5:30 PM", name: "Vinyasa Flow", instructor: "Rohan" }, { time: "7:00 PM", name: "Yin Restorative", instructor: "Priya" }] },
  { day: "Friday", classes: [{ time: "6:00 AM", name: "Ashtanga Mysore", instructor: "Ananya" }, { time: "9:00 AM", name: "Gentle Flow", instructor: "Kavita" }, { time: "12:00 PM", name: "Lunch Vinyasa", instructor: "Rohan" }, { time: "5:30 PM", name: "Kirtan", instructor: "Devendra" }] },
  { day: "Saturday", classes: [{ time: "7:00 AM", name: "Ashtanga Led", instructor: "Ananya" }, { time: "9:30 AM", name: "All Levels Vinyasa", instructor: "Rohan" }, { time: "2:00 PM", name: "Workshop", instructor: "Various" }, { time: "5:00 PM", name: "Yoga Nidra", instructor: "Priya" }] },
  { day: "Sunday", classes: [{ time: "8:00 AM", name: "Sunday Flow", instructor: "Priya" }, { time: "10:30 AM", name: "Philosophy & Practice", instructor: "Ananya" }, { time: "4:00 PM", name: "Meditation Circle", instructor: "Devendra" }] },
];

export const interestOptions = ["Regular Classes", "Private Session", "Corporate Wellness", "Teacher Training", "Retreat", "Other"];
export const experienceLevels = ["Beginner", "Intermediate", "Advanced"];

export const aboutContent = {
  story:
    "ZenMat was born in the heart of Delhi from a simple truth: yoga belongs to everyone. Founded in 2016 by Ananya Sharma after years of studying under revered gurus in Rishikesh and Mysore, our studio has grown from a small room with five mats near Lodi Garden into a thriving community of over 5,000 students. We honour the ancient traditions of Hatha, Ashtanga, and Iyengar that originated on this very soil, while embracing the evolving needs of modern urban practitioners.",
  philosophy:
    "We believe yoga is far more than physical exercise. It is a complete system for well-being \u2014 a gift from India to the world \u2014 that integrates body, breath, mind, and spirit. Our approach draws from the eight limbs of Patanjali\u2019s Yoga Sutras, weaving ethical living, breathwork, meditation, and self-study into every class. Whether you come for the stretches or the stillness, you\u2019ll leave with something deeper.",
  approach:
    "Every class at ZenMat is designed with intention. Our certified instructors (RYT 200/500, Yoga Alliance Registered) carry authentic Indian lineages and diverse specializations, ensuring you find a practice that resonates. Small class sizes allow for personalised attention and safe alignment guidance. We are committed to accessibility, inclusivity, and the belief that the timeless benefits of yoga should reach every body.",
};
