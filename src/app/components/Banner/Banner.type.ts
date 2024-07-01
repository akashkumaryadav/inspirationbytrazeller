export interface BannerProps {
  bgImageSrc?: string;
  width?: number;
  height?: number;
  title?: string;
  description?: string;
  actionTitle?: string;
  onActionClick?: () => void;
  style?: React.CSSProperties;
  className?: string;
  showBadge?: boolean;
  classes?: Partial<{
    bannerOverlay: string;
    bannerImage: string;
    bannerTitle: string;
    bannerDescription: string;
    bannerAction: string;
    bannerContent: string;
    bannerBadge: string;
  }>;
}
