module.exports = {
  content: ["./public/index.html"],
  theme: {
    extend: {
      screens: {
        'bsm': '460px',
        'bmd': '825px',
        'mmd': '975px',
        'mlg': '1115px',
        'bxl':'1218px',
        'mxl': '1230px'
      },
      colors: {
        'mainBackground': '#120227',
        'secBackground' : '#1F0443',
        'primary' : '#C93D8D',
        'secondary': '#DADADA', // Opacity 80%
        'greenFig': '#22EE98',
        'redFig': '#FF1515'
      },
      backgroundImage: {
        'headerBg': "url('https://images.unsplash.com/photo-1620207418302-439b387441b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=967&q=80')",
        'bannerBg': "url('https://images.unsplash.com/photo-1561998338-13ad7883b20f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80')"
      },
      fontWeight: {
        'medium': 500
      }
    },
  },
  plugins: [],
}
