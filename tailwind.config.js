module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage:
      {
          HeroBanner: "url(../dist/img/banner-img.png)",
          roomDesign1:"url(../dist/img/projects1.png)",
          roomDesign2:"url(../dist/img/projects2.png)",
          roomDesign3:"url(../dist/img/projects3.png)",
        },
      colors: {
       
        dark: '#2b2b2b2b',
        light: '#ffffff',
        berde: '#006341',
        sec1: '#988bcb',
        sec2: '#cbc2af',
        sec3: '#8dc982',
        sec4: '#e6796b',
        sec5: '#8fb1d6',
        sec6: '#958bc6',
        sec7: '#c9591d',
        sec8: '#002e1f',
        lberde: "#d4e9e2",
      }

    },
  },
  plugins: [],
}