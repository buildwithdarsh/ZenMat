// ============================================================
// ZenMat — Comprehensive Type Definitions
// ============================================================

// ---------- Enums & Literals ----------

export type YogaStyle =
  | "Hatha" | "Vinyasa" | "Ashtanga" | "Iyengar" | "Yin"
  | "Restorative" | "Kundalini" | "Power" | "Hot Vinyasa"
  | "Bikram" | "Prenatal" | "Chair" | "Yoga Nidra"
  | "Meditation" | "Pranayama" | "Aerial" | "AcroYoga"
  | "Jivamukti" | "Rocket" | "Gentle Flow" | "Yoga Sculpt";

export type DifficultyLevel = 1 | 2 | 3 | 4 | 5;
export type DifficultyLabel = "Gentle" | "Moderate" | "Challenging" | "Vigorous" | "Advanced";
export type DifficultyColor = "green" | "blue" | "orange" | "red" | "purple";

export type ClassFormat = "in-person" | "virtual" | "hybrid";
export type RoomTemp = "Regular" | "Warm" | "Hot";
export type MembershipStatus = "trial" | "active" | "frozen" | "cancelled" | "lapsed";
export type MembershipTier = "drop-in" | "4-class" | "8-class" | "unlimited-monthly" | "unlimited-annual" | "student" | "corporate" | "family";
export type BookingStatus = "confirmed" | "waitlisted" | "cancelled" | "completed" | "no-show";
export type InstructorCertification = "RYT-200" | "RYT-500" | "E-RYT-200" | "E-RYT-500" | "RPYT" | "RCYT" | "C-IAYT";

export type Dosha = "Vata" | "Pitta" | "Kapha" | "Vata-Pitta" | "Pitta-Kapha" | "Vata-Kapha";
export type ChakraName = "Root" | "Sacral" | "Solar Plexus" | "Heart" | "Throat" | "Third Eye" | "Crown";

export type PranayamaTechnique =
  | "Diaphragmatic" | "Ujjayi" | "Nadi Shodhana" | "Kapalabhati"
  | "Bhastrika" | "Bhramari" | "Sitali" | "Viloma"
  | "Kumbhaka" | "Box Breathing" | "Surya Bhedana" | "Chandra Bhedana";

// ---------- Core Entities ----------

export interface Studio {
  id: string;
  name: string;
  slug: string;
  description: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  phone: string;
  email: string;
  website: string;
  imageUrl: string;
  bannerUrl: string;
  galleryUrls: string[];
  latitude: number;
  longitude: number;
  rating: number;
  reviewCount: number;
  styles: YogaStyle[];
  amenities: string[];
  isVerified: boolean;
  memberCount: number;
  instructorCount: number;
  classesPerWeek: number;
  dropInPrice: number;
  monthlyPrice: number;
  hasVirtualClasses: boolean;
  hasParking: boolean;
  isWheelchairAccessible: boolean;
  distanceKm?: number;
}

export interface Instructor {
  id: string;
  name: string;
  slug: string;
  avatarUrl: string;
  coverUrl: string;
  bio: string;
  philosophy: string;
  certifications: InstructorCertification[];
  specializations: YogaStyle[];
  experienceYears: number;
  totalClassesTaught: number;
  rating: number;
  reviewCount: number;
  languages: string[];
  teachingStyleTags: string[];
  studios: { studioId: string; studioName: string }[];
  isVerified: boolean;
  followerCount: number;
}

export interface YogaClass {
  id: string;
  title: string;
  description: string;
  studioId: string;
  studioName: string;
  instructorId: string;
  instructorName: string;
  instructorAvatarUrl: string;
  style: YogaStyle;
  level: DifficultyLevel;
  levelLabel: DifficultyLabel;
  intensity: DifficultyLevel;
  flexibilityDemand: DifficultyLevel;
  strengthDemand: DifficultyLevel;
  meditativeDepth: DifficultyLevel;
  format: ClassFormat;
  duration: number;
  dateTime: string;
  roomTemp: RoomTemp;
  propsRequired: string[];
  focusAreas: string[];
  contraindications: string[];
  maxCapacity: number;
  currentEnrollment: number;
  waitlistCount: number;
  price: number;
  imageUrl: string;
  isRecurring: boolean;
  isCancelled: boolean;
}

export interface Booking {
  id: string;
  classId: string;
  className: string;
  studioName: string;
  instructorName: string;
  dateTime: string;
  duration: number;
  status: BookingStatus;
  style: YogaStyle;
  format: ClassFormat;
  checkedIn: boolean;
  rating?: number;
  review?: string;
}

export interface Membership {
  id: string;
  tier: MembershipTier;
  status: MembershipStatus;
  studioName?: string;
  startDate: string;
  endDate?: string;
  renewalDate?: string;
  price: number;
  classesRemaining?: number;
  classesTotal?: number;
  autoRenew: boolean;
}

export interface Workshop {
  id: string;
  title: string;
  description: string;
  instructorName: string;
  instructorAvatarUrl: string;
  studioName: string;
  dateTime: string;
  duration: number;
  price: number;
  maxCapacity: number;
  currentEnrollment: number;
  topics: string[];
  level: DifficultyLabel;
  imageUrl: string;
  isVirtual: boolean;
}

export interface Retreat {
  id: string;
  title: string;
  description: string;
  destination: string;
  country: string;
  startDate: string;
  endDate: string;
  price: number;
  priceIncludes: string[];
  instructors: { name: string; avatarUrl: string }[];
  styles: YogaStyle[];
  maxParticipants: number;
  currentParticipants: number;
  accommodationTypes: { type: string; price: number }[];
  mealOptions: string[];
  imageUrl: string;
  galleryUrls: string[];
  rating: number;
  reviewCount: number;
}

export interface MeditationSession {
  id: string;
  title: string;
  description: string;
  category: string;
  duration: number;
  instructorName: string;
  instructorAvatarUrl: string;
  imageUrl: string;
  level: DifficultyLabel;
  isFree: boolean;
}

export interface MeditationCourse {
  id: string;
  title: string;
  description: string;
  durationDays: number;
  level: DifficultyLabel;
  sessions: number;
  imageUrl: string;
  enrolledCount: number;
  rating: number;
}

export interface PranayamaExercise {
  id: string;
  technique: PranayamaTechnique;
  level: DifficultyLabel;
  description: string;
  durationOptions: number[];
  benefits: string[];
  contraindications: string[];
  imageUrl: string;
}

export interface OnDemandVideo {
  id: string;
  title: string;
  description: string;
  instructorName: string;
  instructorAvatarUrl: string;
  style: YogaStyle;
  level: DifficultyLabel;
  duration: number;
  thumbnailUrl: string;
  viewCount: number;
  rating: number;
  isFree: boolean;
  focusAreas: string[];
  collection?: string;
}

export interface OnDemandCollection {
  id: string;
  title: string;
  description: string;
  videoCount: number;
  totalDuration: number;
  imageUrl: string;
  category: string;
}

export interface OnDemandCourse {
  id: string;
  title: string;
  description: string;
  instructorName: string;
  classCount: number;
  totalDuration: number;
  level: DifficultyLabel;
  imageUrl: string;
  progress: number;
  enrolledCount: number;
  rating: number;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  authorAvatarUrl: string;
  publishedDate: string;
  readTime: number;
  imageUrl: string;
  tags: string[];
}

export interface Challenge {
  id: string;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  durationDays: number;
  participantCount: number;
  imageUrl: string;
  category: string;
  reward: string;
  isActive: boolean;
  progress?: number;
}

export interface CommunityEvent {
  id: string;
  title: string;
  description: string;
  type: string;
  dateTime: string;
  duration: number;
  studioName: string;
  price: number;
  maxCapacity: number;
  currentAttendees: number;
  imageUrl: string;
}

export interface TeacherTrainingProgram {
  id: string;
  title: string;
  hours: number;
  studioName: string;
  startDate: string;
  endDate: string;
  price: number;
  installmentOption: boolean;
  modules: { name: string; hours: number; description: string }[];
  spotsRemaining: number;
  instructorNames: string[];
  imageUrl: string;
  rating: number;
}

export interface LoyaltyInfo {
  totalPoints: number;
  lifetimePoints: number;
  currentTier: string;
  nextTier: string;
  pointsToNextTier: number;
  recentActivity: { action: string; points: number; date: string }[];
  availableRewards: { title: string; pointsCost: number; description: string }[];
}

export interface StreakInfo {
  currentStreak: number;
  longestStreak: number;
  graceDaysUsed: number;
  freezesUsed: number;
  nextMilestone: { days: number; badge: string; reward: string };
  history: { date: string; completed: boolean }[];
}

export interface ProgressStats {
  totalClasses: number;
  currentStreak: number;
  longestStreak: number;
  totalMeditationMinutes: number;
  stylesExplored: number;
  poseMilestones: { poseName: string; sanskritName: string; achievedDate: string; category: string }[];
  weeklyAttendance: { week: string; count: number }[];
  styleBreakdown: { style: string; count: number }[];
  wellnessScores: { date: string; stress: number; energy: number; mood: number }[];
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  avatarUrl: string;
  memberSince: string;
  dosha?: Dosha;
  goals: string[];
  experienceLevel: DifficultyLabel;
  preferredStyles: YogaStyle[];
  membership?: Membership;
  streakInfo: StreakInfo;
  loyaltyInfo: LoyaltyInfo;
  progressStats: ProgressStats;
}

// ---------- Studio Dashboard ----------

export interface StudioAnalytics {
  revenue: {
    total: number;
    change: number;
    byMonth: { month: string; amount: number }[];
    byType: { type: string; amount: number; percentage: number }[];
  };
  membership: {
    total: number;
    newThisMonth: number;
    churnRate: number;
    byTier: { tier: string; count: number }[];
  };
  attendance: {
    avgFillRate: number;
    totalClasses: number;
    noShowRate: number;
    peakHours: { hour: string; count: number }[];
  };
  topClasses: { name: string; fillRate: number; revenue: number }[];
  topInstructors: { name: string; rating: number; fillRate: number; avatarUrl: string }[];
}

export interface InstructorEarnings {
  thisMonth: number;
  lastMonth: number;
  ytd: number;
  byStudio: { studioName: string; amount: number }[];
  byType: { type: string; amount: number }[];
  recentPayments: { date: string; amount: number; description: string; status: string }[];
}

export interface ScheduleEvent {
  id: string;
  title: string;
  instructorName: string;
  style: YogaStyle;
  dateTime: string;
  duration: number;
  enrollmentCount: number;
  maxCapacity: number;
  format: ClassFormat;
  room?: string;
}

// ---------- Pricing ----------

export interface PricingTier {
  name: string;
  target: string;
  monthlyPrice: number;
  annualPrice: number;
  features: string[];
  isPopular: boolean;
  ctaText: string;
}

export interface ConsumerTier {
  name: string;
  monthlyPrice: number;
  annualPrice: number;
  includes: string[];
  isPopular: boolean;
}

// ---------- Legacy types for backward compat ----------

export interface ClassProgram {
  id: string;
  name: string;
  description: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced" | "All Levels";
  intensity: "Gentle" | "Moderate" | "Challenging" | "Vigorous";
  duration: string;
  image: string;
  tags: string[];
}

export interface StudioSpace {
  id: string;
  name: string;
  description: string;
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  image: string;
  quote: string;
  classType: string;
  practiceYears: string;
  rating: number;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface ClassTiming {
  day: string;
  classes: {
    time: string;
    name: string;
    instructor: string;
  }[];
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  interest: string;
  experienceLevel: string;
  message: string;
}

export interface StudioInfo {
  name: string;
  tagline: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
  email: string;
  mapUrl: string;
}

export interface StatItem {
  label: string;
  value: string;
  icon: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}
