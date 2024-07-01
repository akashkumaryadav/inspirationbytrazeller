export interface BannerProps {
    bgImageSrc?: string;
    title?: string;
    description?: string;
    actionTitle?: string;
    onActionClick?: () => void;
}