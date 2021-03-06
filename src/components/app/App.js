export default {
  functional: true,

  props: {
    light: {
      type: Boolean,
      default: true
    },
    dark: Boolean,
    id: {
      type: String,
      default: 'app'
    }
  },

  render (h, { props, data, children }) {
    data.staticClass = data.staticClass ? `application ${data.staticClass} ` : 'application '

    data.staticClass += `application--${props.dark ? 'dark' : 'light'}`

    const toolbar = children.find(c => c.tag === 'nav')
    const footer = children.find(c => c.tag === 'footer')

    if (toolbar) data.staticClass += ' application--toolbar'
    if (footer) {
      data.staticClass += ' application--footer'

      if (footer.data && (
           footer.data.staticClass.indexOf('--fixed') !== -1 ||
           footer.data.staticClass.indexOf('--absolute') !== -1
        )
      ) data.staticClass += ' application--footer-fixed'
    }

    data.attrs = { 'data-app': true }
    data.domProps = { id: props.id }

    return h('div', data, children)
  }
}
