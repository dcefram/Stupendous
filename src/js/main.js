const Stupendous = {
  siteHeader: '',

  postHeader: '',

  resizeHeader() {
    const siteHead = Stupendous.siteHeader;
    const postHead = Stupendous.postHeader;

    if (siteHead instanceof HTMLElement) {
      if ((siteHead.classList && siteHead.classList.contains('tag')) ||
        /(^tag )|( tag$)|^tag$/.test(siteHead.className)) {
        siteHead.style.padding =
          (window.innerWidth * 0.15625 / 2) + 'px 0px ' +
          (window.innerWidth * 0.15625 / 20) + 'px';
      } else {
        siteHead.style.padding = (window.innerWidth * 0.15625 / 4) + 'px 0px';
      }
    }

    if (postHead instanceof HTMLElement) {
      postHead.style.padding = (window.innerWidth * 0.078125 / 2) + 'px 0px';
    }
  },

  initShortcodes() {
    const body = document.querySelector('main');

    new Shortcode(body, {
      col() {
        let ratio  = this.options.ratio ? this.options.ratio : 1;
        let offset = this.options.offset ? this.options.offset : 0;
        let style  = this.options.style ? this.options.style : '';
        let ret    = ''

        if (ratio !== 1) {
          ratio = ratio.replace(/\//g, '-');
        }

        if (body.classList.contains('home-template') ||
          body.className === 'home-template') {
          ret = this.contents;
        } else {
          ret = `<div class="col-${ratio}-offset-${offset}" style="${style}">
            ${this.contents}
          </div>`;
        }

        return ret;
      }
    })
  },

  showBody() {
    const body = document.querySelector('body');

    if (body.classList) {
      body.classList.remove('loading')
    } else {
      const className = body.className;
      let classNames = className.split(' ');

      classNames = [
        classNames.slice(0, classNames.indexOf('loading')),
        ...classNames.slice(classNames.indexOf('loading') + 1)
      ];

      body.className = classNames.join(' ');
    }

    Stupendous.initDisqus();
  },

  initDisqus() {
    if (window.initDisqus && typeof initDisqus === 'function') {
      window.initDisqus();
    }
  }
}

window.addEventListener('load', () => {
  Stupendous.siteHeader = document.getElementById('site-head');
  Stupendous.postHeader = document.querySelector('.post-header');

  Stupendous.resizeHeader();
  Stupendous.initShortcodes();
  Stupendous.showBody();
});

window.addEventListener('resize', Stupendous.resizeHeader);