import {
  defineProperties,
  createSprinkles
} from '@vanilla-extract/sprinkles';

const space = {
  none: 0,
  small: '4px',
  medium: '8px',
  large: '16px',
  // etc.
};

const size = {
  '100vh': '100vh'
}

const responsiveProperties = defineProperties({
  conditions: {
    mobile: {},
    tablet: { '@media': 'screen and (min-width: 768px)' },
    desktop: { '@media': 'screen and (min-width: 1024px)' },
    // lightMode: {
    //   '@media': '(prefers-color-scheme: light)',
    // },
    // darkMode: {
    //   '@media': '(prefers-color-scheme: dark)',
    // }
  },
  defaultCondition: [
    // 'lightMode',
    'mobile'
  ],
  properties: {
    flex: [1],
    display: ['none', 'flex', 'block', 'inline'],
    flexDirection: ['row', 'column'],
    justifyContent: [
      'stretch',
      'flex-start',
      'center',
      'flex-end',
      'space-around',
      'space-between'
    ],
    alignItems: [
      'stretch',
      'flex-start',
      'center',
      'flex-end'
    ],
    paddingTop: space,
    paddingBottom: space,
    paddingLeft: space,
    paddingRight: space,
    minHeight: size,
    height: size,
    width: size,
    minWidth: size,
    // etc.
  },
  shorthands: {
    padding: [
      'paddingTop',
      'paddingBottom',
      'paddingLeft',
      'paddingRight'
    ],
    paddingX: ['paddingLeft', 'paddingRight'],
    paddingY: ['paddingTop', 'paddingBottom'],
    placeItems: ['justifyContent', 'alignItems']
  }
});

const colors = {
  'black': 'black',
  'white': 'white',
  'blue-50': '#eff6ff',
  'blue-100': '#dbeafe',
  'blue-200': '#bfdbfe',
  'gray-700': '#374151',
  'gray-800': '#1f2937',
  'gray-900': '#111827',
  'blue-500': '#0070f3'
  // etc.
};

const colorProperties = defineProperties({
  conditions: {
    lightMode: {},
    darkMode: {
      '@media': '(prefers-color-scheme: dark)',
    }
  },
  defaultCondition: [
    'lightMode'
  ],
  properties: {
    color: colors,
    backgroundColor: colors,
    textDecoration: {
      'none': "none"
    }
  }
})

export const sprinkles = createSprinkles(
  colorProperties,
  responsiveProperties,
)

// It's a good idea to export the Sprinkles type too
export type Sprinkles = Parameters<typeof sprinkles>[0];