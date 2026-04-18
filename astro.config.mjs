import { defineConfig, fontProviders } from "astro/config";
// https://astro.build/config

export default defineConfig({
  output: 'static',
   fonts: [{
    provider: fontProviders.fontsource(),
    name: "Koulen",
    cssVariable: "--font-koulen"
  },
  {
    provider: fontProviders.fontsource(),
    name:"Kumbh Sans",
    cssVariable: "--font-kumbh"
  },
  { 
    provider: fontProviders.fontsource(),
    name:"Inter",
    cssVariable: "--font-inter"
  }
]
});
