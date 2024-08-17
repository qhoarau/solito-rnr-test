const { withExpo } = require('@expo/next-adapter')

/** @type {import('next').NextConfig} */
const nextConfig = {
  // reanimated (and thus, Moti) doesn't work with strict mode currently...
  // https://github.com/nandorojo/moti/issues/224
  // https://github.com/necolas/react-native-web/pull/2330
  // https://github.com/nandorojo/moti/issues/224
  // once that gets fixed, set this back to true
  reactStrictMode: false,
  transpilePackages: [
    'react-native',
    'react-native-web',
    'solito',
    'moti',
    'app',
    'react-native-reanimated',
    'nativewind',
    'tailwind-merge',
    'tailwindcss',
    'tailwindcss-animate',
    'react-native-gesture-handler',
    'react-native-css-interop',
    'react-native-svg',
    '@react-native-async-storage/async-storage',
    'class-variance-authority',
    'clsx',
    'lucide-react-native',
    '@rn-primitives/accordion',
    '@rn-primitives/avatar',
    '@rn-primitives/portal',
    '@rn-primitives/progress',
    '@rn-primitives/slot',
    '@rn-primitives/tooltip',
    '@rn-primitives/types',
    '@rn-primitives/button',
    '@rn-primitives/button-group',
    '@rn-primitives/checkbox',
    '@rn-primitives/dropdown-menu',
    '@rn-primitives/input',
    '@rn-primitives/label',
    '@rn-primitives/hooks',
    '@rn-primitives/modal',
    '@rn-primitives/sheet',
    '@rn-primitives/toast',
    '@rn-primitives/toaster',
    '@rn-primitives/toaster-provider',
    '@rn-primitives/toaster-view',
  ],
}

module.exports = withExpo(nextConfig)
