interface HeaderProps {
    label: string;
}

interface AuthCardWrapperProps {
    children: React.ReactNode;
    headerLabel: string;
    backButtonLabel: string;
    backButtonHref: string;
    showSocial?: boolean;
  };

  interface BackButtonProps {
    href: string;
    label: string;
  };