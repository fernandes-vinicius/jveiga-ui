import {
  Activity,
  AlertCircle,
  AlertOctagon,
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  BarChart3,
  Bell,
  BookOpen,
  Box,
  Building2,
  Calendar,
  CalendarClock,
  CalendarDays,
  Check,
  CheckCheck,
  CheckCircle2,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  CircleDollarSign,
  CircleSlash,
  ClipboardCheck,
  ClipboardList,
  Clock,
  Coffee,
  Coins,
  Crown,
  Download,
  Dumbbell,
  Eye,
  EyeOff,
  Flame,
  FolderOpen,
  Gem,
  Gift,
  GraduationCap,
  Handshake,
  History,
  Home,
  Info,
  LayoutDashboard,
  ListChecks,
  Loader2,
  Lock,
  LogOut,
  MapPin,
  Megaphone,
  MessageCircle,
  Moon,
  OctagonX,
  PartyPopper,
  Pencil,
  Percent,
  Phone,
  PhoneCall,
  Plus,
  Radio,
  RefreshCcw,
  Save,
  Search,
  Send,
  Settings,
  ShieldAlert,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Star,
  Sun,
  Sunrise,
  Sword,
  Swords,
  Target,
  Theater,
  Trash2,
  TrendingUp,
  Trophy,
  Upload,
  UserCheck,
  UserRound,
  Users,
  X,
  Zap,
} from "lucide-react";
import type { ComponentType, RefAttributes, SVGProps } from "react";

type ElementAttributes = RefAttributes<SVGSVGElement> &
  Partial<SVGProps<SVGSVGElement>>;

interface IconProps extends ElementAttributes {
  size?: string | number;
  absoluteStrokeWidth?: boolean;
}

export type IconComponentType = ComponentType<IconProps>;

export const ActivityIcon = (props: IconProps) => <Activity {...props} />;
export const AlertCircleIcon = (props: IconProps) => <AlertCircle {...props} />;
export const AlertOctagonIcon = (props: IconProps) => (
  <AlertOctagon {...props} />
);
export const AlertTriangleIcon = (props: IconProps) => (
  <AlertTriangle {...props} />
);
export const ArrowLeftIcon = (props: IconProps) => <ArrowLeft {...props} />;
export const ArrowRightIcon = (props: IconProps) => <ArrowRight {...props} />;
export const BarChart3Icon = (props: IconProps) => <BarChart3 {...props} />;
export const BellIcon = (props: IconProps) => <Bell {...props} />;
export const BookOpenIcon = (props: IconProps) => <BookOpen {...props} />;
export const BoxIcon = (props: IconProps) => <Box {...props} />;
export const Building2Icon = (props: IconProps) => <Building2 {...props} />;
export const CalendarIcon = (props: IconProps) => <Calendar {...props} />;
export const CalendarClockIcon = (props: IconProps) => (
  <CalendarClock {...props} />
);
export const CalendarDaysIcon = (props: IconProps) => (
  <CalendarDays {...props} />
);
export const CheckIcon = (props: IconProps) => <Check {...props} />;
export const CheckCheckIcon = (props: IconProps) => <CheckCheck {...props} />;
export const CheckCircle2Icon = (props: IconProps) => (
  <CheckCircle2 {...props} />
);
export const ChevronDownIcon = (props: IconProps) => <ChevronDown {...props} />;
export const ChevronLeftIcon = (props: IconProps) => <ChevronLeft {...props} />;
export const ChevronRightIcon = (props: IconProps) => (
  <ChevronRight {...props} />
);
export const ChevronUpIcon = (props: IconProps) => <ChevronUp {...props} />;
export const CircleDollarSignIcon = (props: IconProps) => (
  <CircleDollarSign {...props} />
);
export const CircleSlashIcon = (props: IconProps) => <CircleSlash {...props} />;
export const ClipboardCheckIcon = (props: IconProps) => (
  <ClipboardCheck {...props} />
);
export const ClipboardListIcon = (props: IconProps) => (
  <ClipboardList {...props} />
);
export const ClockIcon = (props: IconProps) => <Clock {...props} />;
export const CoffeeIcon = (props: IconProps) => <Coffee {...props} />;
export const CoinsIcon = (props: IconProps) => <Coins {...props} />;
export const CrownIcon = (props: IconProps) => <Crown {...props} />;
export const DownloadIcon = (props: IconProps) => <Download {...props} />;
export const DumbbellIcon = (props: IconProps) => <Dumbbell {...props} />;
export const EyeIcon = (props: IconProps) => <Eye {...props} />;
export const EyeOffIcon = (props: IconProps) => <EyeOff {...props} />;
export const FlameIcon = (props: IconProps) => <Flame {...props} />;
export const FolderOpenIcon = (props: IconProps) => <FolderOpen {...props} />;
export const GemIcon = (props: IconProps) => <Gem {...props} />;
export const GiftIcon = (props: IconProps) => <Gift {...props} />;
export const GraduationCapIcon = (props: IconProps) => (
  <GraduationCap {...props} />
);
export const HandshakeIcon = (props: IconProps) => <Handshake {...props} />;
export const HistoryIcon = (props: IconProps) => <History {...props} />;
export const HomeIcon = (props: IconProps) => <Home {...props} />;
export const InfoIcon = (props: IconProps) => <Info {...props} />;
export const LayoutDashboardIcon = (props: IconProps) => (
  <LayoutDashboard {...props} />
);
export const ListChecksIcon = (props: IconProps) => <ListChecks {...props} />;
export const Loader2Icon = (props: IconProps) => <Loader2 {...props} />;
export const LockIcon = (props: IconProps) => <Lock {...props} />;
export const LogOutIcon = (props: IconProps) => <LogOut {...props} />;
export const MapPinIcon = (props: IconProps) => <MapPin {...props} />;
export const MegaphoneIcon = (props: IconProps) => <Megaphone {...props} />;
export const MessageCircleIcon = (props: IconProps) => (
  <MessageCircle {...props} />
);
export const MoonIcon = (props: IconProps) => <Moon {...props} />;
export const OctagonXIcon = (props: IconProps) => <OctagonX {...props} />;
export const PartyPopperIcon = (props: IconProps) => <PartyPopper {...props} />;
export const PencilIcon = (props: IconProps) => <Pencil {...props} />;
export const PercentIcon = (props: IconProps) => <Percent {...props} />;
export const PhoneIcon = (props: IconProps) => <Phone {...props} />;
export const PhoneCallIcon = (props: IconProps) => <PhoneCall {...props} />;
export const PlusIcon = (props: IconProps) => <Plus {...props} />;
export const RadioIcon = (props: IconProps) => <Radio {...props} />;
export const RefreshCcwIcon = (props: IconProps) => <RefreshCcw {...props} />;
export const SaveIcon = (props: IconProps) => <Save {...props} />;
export const SearchIcon = (props: IconProps) => <Search {...props} />;
export const SendIcon = (props: IconProps) => <Send {...props} />;
export const SettingsIcon = (props: IconProps) => <Settings {...props} />;
export const ShieldAlertIcon = (props: IconProps) => <ShieldAlert {...props} />;
export const ShieldCheckIcon = (props: IconProps) => <ShieldCheck {...props} />;
export const SmartphoneIcon = (props: IconProps) => <Smartphone {...props} />;
export const SparklesIcon = (props: IconProps) => <Sparkles {...props} />;
export const StarIcon = (props: IconProps) => <Star {...props} />;
export const SunIcon = (props: IconProps) => <Sun {...props} />;
export const SunriseIcon = (props: IconProps) => <Sunrise {...props} />;
export const SwordIcon = (props: IconProps) => <Sword {...props} />;
export const SwordsIcon = (props: IconProps) => <Swords {...props} />;
export const TargetIcon = (props: IconProps) => <Target {...props} />;
export const TheaterIcon = (props: IconProps) => <Theater {...props} />;
export const Trash2Icon = (props: IconProps) => <Trash2 {...props} />;
export const TrendingUpIcon = (props: IconProps) => <TrendingUp {...props} />;
export const TrophyIcon = (props: IconProps) => <Trophy {...props} />;
export const UploadIcon = (props: IconProps) => <Upload {...props} />;
export const UserCheckIcon = (props: IconProps) => <UserCheck {...props} />;
export const UserRoundIcon = (props: IconProps) => <UserRound {...props} />;
export const UsersIcon = (props: IconProps) => <Users {...props} />;
export const XIcon = (props: IconProps) => <X {...props} />;
export const ZapIcon = (props: IconProps) => <Zap {...props} />;
