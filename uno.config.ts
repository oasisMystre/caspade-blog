import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
   presetTypography,
} from 'unocss'

export default defineConfig({
  presets: [
    presetUno({
      dark: 'media',
    }),
    presetTypography(),
    presetAttributify(),
    presetIcons({
      extraProperties: {
        'display': 'inline-block',
        'vertical-align': 'middle',
      },
    }),
  ],
})
