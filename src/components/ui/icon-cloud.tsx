'use client';

import { useEffect, useMemo, useState } from 'react';
import { useTheme } from 'next-themes';
import {
  Cloud,
  fetchSimpleIcons,
  ICloud,
  renderSimpleIcon,
  SimpleIcon,
} from 'react-icon-cloud';
import { motion } from 'framer-motion';

export const cloudProps: Omit<ICloud, 'children'> = {
  containerProps: {
    style: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      paddingTop: 40,
    },
  },
  options: {
    reverse: true,
    depth: 1,
    wheelZoom: false,
    imageScale: 2,
    activeCursor: 'default',
    tooltip: 'native',
    initial: [0.1, -0.1],
    clickToFront: 500,
    tooltipDelay: 0,
    outlineColour: '#0000',
    maxSpeed: 0.02, // Reduced from 0.04 to 0.02 for better performance
    minSpeed: 0.01, // Reduced from 0.02 to 0.01 for better performance
    dragControl: false, // Disabled drag control for better performance
  },
};

export const renderCustomIcon = (icon: SimpleIcon, theme: string, tooltip?: string) => {
  const bgHex = theme === 'light' ? '#f3f2ef' : '#080510';
  const fallbackHex = theme === 'light' ? '#6e6e73' : '#ffffff';
  const minContrastRatio = theme === 'dark' ? 2 : 1.2;

  return renderSimpleIcon({
    icon,
    bgHex,
    fallbackHex,
    minContrastRatio,
    size: 42,
    aProps: {
      role: 'presentation',
      'aria-hidden': true,
      onClick: (e) => e.preventDefault(),
      title: tooltip || icon.title,
      style: {
        transition: 'transform 0.2s ease',
      },
      onMouseEnter: (e) => {
        e.currentTarget.style.transform = 'scale(1.2)';
      },
      onMouseLeave: (e) => {
        e.currentTarget.style.transform = 'scale(1)';
      },
    },
  });
};

export type DynamicCloudProps = {
  iconSlugs: string[];
  tooltips?: Record<string, string>;
};

type IconData = Awaited<ReturnType<typeof fetchSimpleIcons>>;

export default function IconCloud({ iconSlugs, tooltips }: DynamicCloudProps) {
  const [data, setData] = useState<IconData | null>(null);
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    fetchSimpleIcons({ slugs: iconSlugs }).then(setData);
  }, [iconSlugs]);

  const renderedIcons = useMemo(() => {
    if (!data) return null;

    return Object.values(data.simpleIcons).map((icon) =>
      renderCustomIcon(icon, theme || 'dark', tooltips?.[icon.slug]),
    );
  }, [data, theme, tooltips]);

  if (!mounted) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <Cloud {...cloudProps}>
        <>{renderedIcons}</>
      </Cloud>
    </motion.div>
  );
}