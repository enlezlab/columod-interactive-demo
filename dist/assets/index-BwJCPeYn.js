(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const n of a)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function t(a){const n={};return a.integrity&&(n.integrity=a.integrity),a.referrerPolicy&&(n.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?n.credentials="include":a.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(a){if(a.ep)return;a.ep=!0;const n=t(a);fetch(a.href,n)}})();var u=r=>!!r.includes("{"),h=(r,e)=>!!r.includes(e),f=r=>!!r.includes("@"),b=(r,e)=>r.split(`
`).map(n=>{let s=[];return u(n)&&!h(n,e)&&!f(r)&&(n=e+" "+n.trim()),s.push(n),s}).join(""),_=b,v=class extends HTMLElement{constructor(){const r=super();this.setStyle=()=>{const e=`style_${r.name()}`,t=r.style();if(document.getElementById(e))return;const a=document.createElement("style");a.id=e,a.innerHTML=_(t,r.name()),document.head.appendChild(a)},this.render=async()=>{this.innerHTML=await r.template(),r.connected!==void 0&&await r.connected()}}props(r){return this.getAttribute(r)}static get observedAttributes(){if(this.attr)return this.attr()}attributeChangedCallback(r,e,t){t!==e&&this.render()}connectedCallback(){this.setStyle(),this.render()}},c=v,i=(r,...e)=>r.reduce((t,o,a)=>t+o+(e[a]||""),""),l=(r,...e)=>r.reduce((t,o,a)=>t+o+(e[a]||""),"");class y extends c{name(){return"hero-main"}style(){return l`
      hero-main {
        display: block;
      }

      .hero {
        text-align: center;
        padding: 0 var(--space-l);
        color: var(--color-03);
        margin-top: calc(var(--space-l) * 3);
        margin-bottom: calc(var(--space-l) * 4);
        position: relative;
        overflow-x: clip;
      }

      .hero h1 {
        margin: 0;
      }

      .hero p {
        font-family: var(--font-heading);
      }

    @media (max-width: 768px) {

      .hero {
        margin-top: calc(var(--space-l) * 1);
        margin-bottom: calc(var(--space-l) * 2);
        padding: 0 var(--sapce-s);
      }

        .hero h1 {
          font-size: 1.5rem;
        }

        .hero p {
          font-size: .9rem;
        }
    }
    `}heading(e,t){return`
      <h${t}>${e}</h${t}>
    `}cta(){if(this.props("data-cta-text"))return`
          <a href="${this.props("data-cta-link")}" class="btn btn--primary">
            ${this.props("data-cta-text")}
          </a>
      `}output(){const e={title:this.props("data-title"),body:this.props("data-body")};return JSON.stringify(e)}template(){return i`
      <section class="hero">
        <div class="container">
          ${this.heading(this.props("data-title"),"1")}
          <p>
          ${this.props("data-body")}
          </p>
          ${this.cta()}
        </div>
      </section>
    `}connected(){this.setAttribute("data-output",this.output())}}customElements.define("hero-main",y);class x extends c{name(){return"media-object"}style(){return l`

        media-object {
          container-type: inline-size;
          display: block;
        }

        .media-object {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          grid-template-rows: 1fr;
          grid-gap: var(--space-l);
          align-items: center;
          margin-bottom: calc(var(--space-l) * 4);
          margin-top: calc(var(--space-l) * 2);
          color: var(--color-03);
        }

          .media-object__img {
            margin: 0;
            border-radius: 10px;
            overflow: hidden;
          }

          .media-object__img img {
            width: 100%;
            margin: 0 auto;
            display: block;
          }

          .media-object__text h2 {
            margin-top: 0;
            margin-bottom: var(--space-s);
            font-size: 2rem;
          }

          .media-object__text p {
            font-family: var(--font-ui);
            line-height: 1.5;
          }

          .media-object--reverse{
            display: grid;
            grid-template-columns: 1.2fr 1fr;
            grid-template-rows: 1fr;
            align-items: center;
          }

          .media-object--reverse .media-object__img {
            grid-column: 2 / 3;
            grid-row: 1 / 2;
          }

          .media-object--reverse .media-object__text {
            grid-column: 1 / 2;
            grid-row: 1 / 2;
          }

          @container (max-width: 768px) {

            .media-object {
              grid-template-columns: 1fr;
              margin-bottom: calc(var(--space-l) * 1);
            }

            .media-object--reverse .media-object__img {
              grid-column: 1 / 2;
              grid-row: 1 / 2;
            }

            .media-object--reverse .media-object__text {
              grid-column: 1 / 2;
              grid-row: 2 / 3;
            }

            .media-object__text h2 {
              margin-bottom: var(--space-m);
              font-size: 1.5rem;
            }
          }

          @media (max-width: 768px) {
            .media-object {
              grid-template-columns: 1fr;
              margin-bottom: calc(var(--space-l) * 1);
            }

            .media-object--reverse .media-object__img {
              grid-column: 1 / 2;
              grid-row: 1 / 2;
            }

            .media-object--reverse .media-object__text {
              grid-column: 1 / 2;
              grid-row: 2 / 3;
            }

            .media-object__text h2 {
              margin-bottom: var(--space-m);
              font-size: 1.5rem;
            }
          }
    `}heading(e,t){return t?`
      <h${t}>${e}</h${t}>
    `:`
        <h2>${e}</h2>
      `}template(){return i`
      <div class="media-object">
        <figure class="media-object__img">
          <img src="${this.props("data-image")}" alt="">
        </figure>
        <div class="media-object__text">
          ${this.heading(`${this.props("data-title")}`,`${this.props("data-title-level")}`)}
          <span>${this.props("data-subtitle")}</span>
          <p>
            ${this.props("data-body")}
          </p>
          <a href="${this.props("data-cta-link")}" class="btn btn--primary">
            ${this.props("data-cta-text")}
          </a>
        </div>
      </div>
    `}}customElements.define("media-object",x);class C extends c{name(){return"media-object-reverse"}style(){return l`
        media-object-reverse {
          container-type: inline-size;
          display: block;
        }

        .media-object {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          grid-template-rows: 1fr;
          grid-gap: var(--space-l);
          align-items: center;
          margin-bottom: calc(var(--space-l) * 4);
          margin-top: calc(var(--space-l) * 2);
          color: var(--color-03);
        }

          .media-object__img {
            margin: 0;
            border-radius: 10px;
            overflow: hidden;
          }

          .media-object__img img {
            width: 100%;
            margin: 0 auto;
            display: block;
          }

          .media-object__text h2 {
            margin-top: 0;
            margin-bottom: var(--space-s);
            font-size: 2rem;
          }

          .media-object__text p {
            font-family: var(--font-ui);
            line-height: 1.5;
          }

          .media-object--reverse{
            display: grid;
            grid-template-columns: 1.2fr 1fr;
            grid-template-rows: 1fr;
            align-items: center;
          }

          .media-object--reverse .media-object__img {
            grid-column: 2 / 3;
            grid-row: 1 / 2;
          }

          .media-object--reverse .media-object__text {
            grid-column: 1 / 2;
            grid-row: 1 / 2;
          }

          @container (max-width: 768px) {

            .media-object {
              grid-template-columns: 1fr;
              margin-bottom: calc(var(--space-l) * 1);
            }

            .media-object--reverse .media-object__img {
              grid-column: 1 / 2;
              grid-row: 1 / 2;
            }

            .media-object--reverse .media-object__text {
              grid-column: 1 / 2;
              grid-row: 2 / 3;
            }

            .media-object__text h2 {
              margin-bottom: var(--space-m);
              font-size: 1.5rem;
            }
          }

          @media (max-width: 768px) {
            .media-object {
              grid-template-columns: 1fr;
              margin-bottom: calc(var(--space-l) * 1);
            }

            .media-object--reverse .media-object__img {
              grid-column: 1 / 2;
              grid-row: 1 / 2;
            }

            .media-object--reverse .media-object__text {
              grid-column: 1 / 2;
              grid-row: 2 / 3;
            }

            .media-object__text h2 {
              margin-bottom: var(--space-m);
              font-size: 1.5rem;
            }
          }
    `}heading(e,t){return t?`
      <h${t}>${e}</h${t}>
    `:`
        <h2>${e}</h2>
      `}template(){return i`
      <div class="media-object media-object--reverse">
        <figure class="media-object__img">
          <img src="${this.props("data-image")}" alt="">
        </figure>
        <div class="media-object__text">
          ${this.heading(`${this.props("data-title")}`,`${this.props("data-title-level")}`)}
          <span>${this.props("data-subtitle")}</span>
          <p>
            ${this.props("data-body")}
          </p>
          <a href="${this.props("data-cta-link")}" class="btn btn--primary">
            ${this.props("data-cta-text")}
          </a>
        </div>
      </div>
    `}}customElements.define("media-object-reverse",C);class w extends c{name(){return"site-header"}data(){return JSON.parse(this.props("data-json"))}navGen(){let e="";return this.data().forEach(o=>{const a=i`
        <li class="site-header__nav-item">
          <a href="${o.url}">
            ${o.name}
          </a>
        </li>
      `;e+=a}),e}navMobileAction(){const e=this.querySelectorAll("#btn_mobile")[0],t=document.querySelectorAll(".site-header__nav")[0];e.addEventListener("click",function(){document.body.classList.toggle("body-lock"),this.classList.toggle("is-active"),t.classList.toggle("site-header__nav--opened")},!1)}style(){return l`

      site-header {
        container-type: inline-size;
        display: block;
      }

      .site-header {
        padding: var(--space-m);
      }

      .site-header ul {
        padding: 0;
        margin: 0;
      }

      .site-header li {
        list-style: none;
      }

      .site-header__logo {
        max-width: 50px;
        display: grid;
        grid-template-columns: 40px;
        align-items: center;
      }

      .site-header__logo img {
        width: 100%;
        max-height: 80px;
        height: 100px;
      }

      .site-header__inner {
        display: grid;
        grid-template-columns: 1fr auto;
        grid-gap: var(--space-m);
        align-items: center;
      }

      .site-header__nav > ul {
        font-family: var(--font-ui);
        color: var(--color-03);
        font-weight: 400;
        font-size: 90%;
        display: grid;
        grid-template-rows: 1fr;
        grid-template-columns: repeat(3, auto);
        grid-gap: var(--space-m);
        position: relative;
      }

      .site-header__nav-icon {
        width: 20px;
        transition: .3s ease;
      }

      .site-header__nav-icon--active {
        transform: rotate(180deg);
      }

      .site-header__nav-btn {
        display: none;
        width: 30px;
      }

      .site-header__nav-btn img {
        width: 100%;
      }


      @container (max-width: 768px) {
        .site-header a {
          color: var(--color-01);
        }

        .site-header__inner {
          grid-template-columns: 1fr 30px;
          grid-gap: 0;
        }

        .site-header__logo {
          max-width: 50px;
          display: grid;
          grid-gap: var(--space-s);
          grid-template-columns: 50px;
          align-items: center;
        }

        .site-header__nav {
          display: none;
        }

        .site-header__nav > ul {
          display: block;
        }

        .site-header__nav-item {
          text-align: center;
          font-size: 1.5rem;
          font-weight: 900;
          margin: var(--space-m) 0;
        }

        .site-header__nav--opened {
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          align-items: center;
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: var(--color-03);
          color: var(--color-01);
          z-index: 10;
          padding: calc(var(--space-l) * 4) var(--space-l);
          overflow-y: scroll;
          box-sizing: border-box;
        }

        .site-header__logo {
          grid-row: 1 / 2;
        }

        .site-header__nav-btn {
          display: block;
          grid-row: 1 / 2;
          cursor: pointer;
          z-index: 10;
        }

        .site-header__nav-btn .site-header__nav-btn--open {
          display: block;
        }

        .site-header__nav-btn .site-header__nav-btn--close {
          display: none;
        }

        .site-header__nav-btn.is-active .site-header__nav-btn--open {
          display: none;
        }

        .site-header__nav-btn.is-active .site-header__nav-btn--close {
          display: block;
          filter: invert(1);
        }

      }

      @media (max-width: 768px) {
        .site-header a {
          color: var(--color-01);
        }

        .site-header__inner {
          grid-template-columns: 1fr 30px;
          grid-gap: 0;
        }

        .site-header__logo {
          max-width: 50px;
          display: grid;
          grid-gap: var(--space-s);
          grid-template-columns: 50px;
          align-items: center;
        }

        .site-header__nav {
          display: none;
        }

        .site-header__nav > ul {
          display: block;
        }

        .site-header__nav-item {
          text-align: center;
          font-size: 1.5rem;
          font-weight: 900;
          margin: var(--space-m) 0;
        }

        .site-header__nav--opened {
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          align-items: center;
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: var(--color-03);
          color: var(--color-01);
          z-index: 10;
          padding: calc(var(--space-l) * 4) var(--space-l);
          overflow-y: scroll;
          box-sizing: border-box;
        }

        .site-header__logo {
          grid-row: 1 / 2;
        }

        .site-header__nav-btn {
          display: block;
          grid-row: 1 / 2;
          cursor: pointer;
          z-index: 10;
        }

        .site-header__nav-btn .site-header__nav-btn--open {
          display: block;
        }

        .site-header__nav-btn .site-header__nav-btn--close {
          display: none;
        }

        .site-header__nav-btn.is-active .site-header__nav-btn--open {
          display: none;
        }

        .site-header__nav-btn.is-active .site-header__nav-btn--close {
          display: block;
          filter: invert(1);
        }

      }

    `}template(){return i`
      <header class="site-header">
        <div class="site-header__inner container">
          <a href="/" class="site-header__logo">
            <img class="site-header__logo--img" src="${this.props("data-logo-url")}" alt="${this.props("data-logo-text")}">
          </a>

          <nav>
            <div class="site-header__nav">
              <ul>
                ${this.navGen()}
              </ul>
            </div>
          </nav>

          <div id="btn_mobile" class="site-header__nav-btn">
            <img class="site-header__nav-btn--open" src="/icons/menu.svg" alt="">
            <img class="site-header__nav-btn--close"src="/icons/x.svg" alt="">
          </div>

        </div>
      </header>
    `}connected(){this.navMobileAction()}}customElements.define("site-header",w);class $ extends c{name(){return"site-footer"}data(){return JSON.parse(this.props("data-json"))}navGen(){let e="";return this.data().forEach(o=>{const a=i`
          <a href="${o.url}">
            ${o.name}
          </a>
      `;e+=a}),e}style(){return l`

      site-footer {
        container-type: inline-size;
        display: block;
      }

      .site-footer {
        background: var(--color-03);
        padding: var(--space-l);
        font-family: var(--font-ui);
        font-weight: 400;
        color: var(--color-01);
        margin-top: calc(var(--space-l) * 4);
      }

      .site-footer a {
        color: var(--color-01);
      }

      .site-footer__inner {
        display: grid;
        grid-template-columns: 50px 1fr auto;
        grid-gap: var(--space-m);
        margin-bottom: var(--space-l);
      }

      .site-footer__logo {
        max-width: 50px;
        height: 100px;
        display: grid;
        grid-template-columns: 50px;
      }

      .site-footer__logo img {
        max-height: 80px;
      }

      .site-footer__nav {
        display: grid;
        grid-template-columns: 1fr;
        grid-gap: var(--space-s);
      }

      .site-footer__legal {
        text-align: center;
        font-family: var(--font-ui);
        font-size: .8rem;
      }

      @container (max-width: 768px) {

        .site-footer__logo {
          margin: 0 auto;
        }

        .site-footer__inner {
          grid-template-columns: 1fr;
          grid-gap: var(--space-m);
          text-align: center;
          margin-bottom: var(--space-l);
        }
      }

      @media (max-width: 768px) {

        .site-footer__logo {
          margin: 0 auto;
        }

        .site-footer__inner {
          grid-template-columns: 1fr;
          grid-gap: var(--space-m);
          text-align: center;
          margin-bottom: var(--space-l);
        }
      }
    `}template(){return i`
      <footer class="site-footer">
        <div class="site-footer__inner container">
          <a href="/" class="site-footer__logo">
            <img class="site-footer__logo--img" src="${this.props("data-logo-url")}" alt="">
          </a>

          <div></div>

          <nav class="site-footer__nav">
            ${this.navGen()}
          </nav>
        </div>

        <div class="site-footer__legal">
          <div class="mb-m">
            <a href="${this.props("data-policy-url")}">${this.props("data-policy-text")}</a>
          </div>
          <div>
            &copy; ${this.props("data-site-name")}
          </div>
        </div>
      </footer>
    `}}customElements.define("site-footer",$);class k extends c{name(){return"logo-columod"}style(){return l`
      svg {
        max-width: 120px;
      }
    `}logo(){return i`
      <svg xmlns="http://www.w3.org/2000/svg" width="247" height="38" viewBox="0 0 247 38" fill="none">
        <path d="M230.874 37C228.698 37 226.73 36.44 224.97 35.32C223.242 34.2 221.882 32.648 220.89 30.664C219.898 28.648 219.402 26.36 219.402 23.8C219.402 21.24 219.898 18.968 220.89 16.984C221.882 14.968 223.242 13.384 224.97 12.232C226.73 11.08 228.714 10.504 230.922 10.504C232.074 10.504 233.178 10.68 234.234 11.032C235.322 11.384 236.282 11.864 237.114 12.472C237.978 13.08 238.682 13.768 239.226 14.536C239.77 15.304 240.106 16.12 240.234 16.984L238.362 17.416V1H246.09V36.52H238.89L238.458 30.76L239.994 31.048C239.93 31.816 239.642 32.568 239.13 33.304C238.618 34.008 237.93 34.648 237.066 35.224C236.234 35.768 235.29 36.2 234.234 36.52C233.178 36.84 232.058 37 230.874 37ZM232.794 30.616C233.978 30.616 234.986 30.344 235.818 29.8C236.682 29.224 237.354 28.424 237.834 27.4C238.314 26.376 238.554 25.176 238.554 23.8C238.554 22.392 238.314 21.176 237.834 20.152C237.354 19.128 236.682 18.344 235.818 17.8C234.986 17.224 233.978 16.936 232.794 16.936C231.642 16.936 230.634 17.224 229.77 17.8C228.938 18.344 228.282 19.128 227.802 20.152C227.322 21.176 227.082 22.392 227.082 23.8C227.082 25.176 227.322 26.376 227.802 27.4C228.282 28.424 228.938 29.224 229.77 29.8C230.634 30.344 231.642 30.616 232.794 30.616Z" fill="#ffffff"/>
        <path d="M204.347 37C201.723 37 199.371 36.44 197.291 35.32C195.211 34.168 193.579 32.6 192.395 30.616C191.211 28.6 190.619 26.328 190.619 23.8C190.619 21.208 191.211 18.92 192.395 16.936C193.579 14.92 195.211 13.352 197.291 12.232C199.371 11.08 201.723 10.504 204.347 10.504C207.003 10.504 209.355 11.08 211.403 12.232C213.483 13.352 215.115 14.92 216.299 16.936C217.483 18.92 218.075 21.208 218.075 23.8C218.075 26.328 217.483 28.6 216.299 30.616C215.115 32.6 213.483 34.168 211.403 35.32C209.355 36.44 207.003 37 204.347 37ZM204.347 30.376C205.499 30.376 206.507 30.088 207.371 29.512C208.267 28.936 208.971 28.152 209.483 27.16C209.995 26.168 210.235 25.048 210.203 23.8C210.235 22.488 209.995 21.336 209.483 20.344C208.971 19.32 208.267 18.536 207.371 17.992C206.507 17.416 205.499 17.128 204.347 17.128C203.227 17.128 202.219 17.416 201.323 17.992C200.427 18.568 199.723 19.352 199.211 20.344C198.699 21.336 198.443 22.488 198.443 23.8C198.443 25.048 198.699 26.168 199.211 27.16C199.723 28.152 200.427 28.936 201.323 29.512C202.219 30.088 203.227 30.376 204.347 30.376Z" fill="#ffffff"/>
      <path d="M148.095 36.52V11.032H155.439L155.679 15.64L154.623 15.736C154.975 14.904 155.455 14.168 156.063 13.528C156.671 12.888 157.343 12.36 158.079 11.944C158.847 11.496 159.647 11.16 160.479 10.936C161.311 10.68 162.143 10.552 162.975 10.552C164.255 10.552 165.391 10.744 166.383 11.128C167.407 11.512 168.287 12.136 169.023 13C169.791 13.864 170.399 15.016 170.847 16.456L169.695 16.264L170.031 15.592C170.479 14.824 171.023 14.136 171.663 13.528C172.335 12.888 173.071 12.344 173.871 11.896C174.671 11.448 175.487 11.112 176.319 10.888C177.183 10.664 178.015 10.552 178.815 10.552C180.831 10.552 182.511 10.952 183.855 11.752C185.199 12.552 186.207 13.736 186.879 15.304C187.551 16.84 187.887 18.744 187.887 21.016V36.52H180.159V21.592C180.159 20.088 179.839 18.968 179.199 18.232C178.591 17.464 177.663 17.08 176.415 17.08C175.743 17.08 175.119 17.192 174.543 17.416C173.999 17.608 173.519 17.912 173.103 18.328C172.719 18.712 172.415 19.16 172.191 19.672C171.967 20.184 171.855 20.76 171.855 21.4V36.52H164.127V21.544C164.127 20.104 163.791 19 163.119 18.232C162.479 17.464 161.567 17.08 160.383 17.08C159.743 17.08 159.135 17.192 158.559 17.416C158.015 17.608 157.535 17.912 157.119 18.328C156.735 18.712 156.431 19.16 156.207 19.672C155.983 20.184 155.871 20.76 155.871 21.4V36.52H148.095Z" fill="#ffffff"/>
      <path d="M127.907 37C126.051 37 124.451 36.6 123.107 35.8C121.763 34.968 120.723 33.8 119.987 32.296C119.283 30.76 118.931 28.92 118.931 26.776V11.032H126.659V25.624C126.659 27.192 127.027 28.424 127.763 29.32C128.531 30.184 129.587 30.616 130.931 30.616C131.603 30.616 132.211 30.52 132.755 30.328C133.299 30.104 133.763 29.8 134.147 29.416C134.563 29 134.883 28.52 135.107 27.976C135.331 27.432 135.443 26.84 135.443 26.2V11.032H143.171V36.52H135.923L135.635 31.288L137.027 30.712C136.675 31.896 136.035 32.968 135.107 33.928C134.211 34.888 133.139 35.64 131.891 36.184C130.643 36.728 129.315 37 127.907 37Z" fill="#ffffff"/>
      <path d="M106.795 36.52V1H114.523V36.52H106.795Z" fill="#ffffff"/>
      <path d="M89.9641 37C87.3401 37 84.9881 36.44 82.9081 35.32C80.8281 34.168 79.1961 32.6 78.0121 30.616C76.8281 28.6 76.2361 26.328 76.2361 23.8C76.2361 21.208 76.8281 18.92 78.0121 16.936C79.1961 14.92 80.8281 13.352 82.9081 12.232C84.9881 11.08 87.3401 10.504 89.9641 10.504C92.6201 10.504 94.9721 11.08 97.0201 12.232C99.1001 13.352 100.732 14.92 101.916 16.936C103.1 18.92 103.692 21.208 103.692 23.8C103.692 26.328 103.1 28.6 101.916 30.616C100.732 32.6 99.1001 34.168 97.0201 35.32C94.9721 36.44 92.6201 37 89.9641 37ZM89.9641 30.376C91.1161 30.376 92.1241 30.088 92.9881 29.512C93.8841 28.936 94.5881 28.152 95.1001 27.16C95.6121 26.168 95.8521 25.048 95.8201 23.8C95.8521 22.488 95.6121 21.336 95.1001 20.344C94.5881 19.32 93.8841 18.536 92.9881 17.992C92.1241 17.416 91.1161 17.128 89.9641 17.128C88.8441 17.128 87.8361 17.416 86.9401 17.992C86.0441 18.568 85.3401 19.352 84.8281 20.344C84.3161 21.336 84.0601 22.488 84.0601 23.8C84.0601 25.048 84.3161 26.168 84.8281 27.16C85.3401 28.152 86.0441 28.936 86.9401 29.512C87.8361 30.088 88.8441 30.376 89.9641 30.376Z" fill="#ffffff"/>
      <path d="M64.96 37C62.496 37 60.272 36.424 58.288 35.272C56.336 34.12 54.8 32.552 53.68 30.568C52.56 28.552 52 26.296 52 23.8C52 21.24 52.56 18.968 53.68 16.984C54.8 14.968 56.336 13.384 58.288 12.232C60.272 11.08 62.496 10.504 64.96 10.504C67.232 10.504 69.312 10.92 71.2 11.752C73.12 12.552 74.624 13.656 75.712 15.064L71.536 20.152C71.12 19.608 70.608 19.112 70 18.664C69.392 18.216 68.72 17.864 67.984 17.608C67.248 17.352 66.48 17.224 65.68 17.224C64.464 17.224 63.392 17.512 62.464 18.088C61.536 18.632 60.816 19.4 60.304 20.392C59.792 21.384 59.536 22.504 59.536 23.752C59.536 24.968 59.792 26.072 60.304 27.064C60.848 28.024 61.584 28.792 62.512 29.368C63.44 29.944 64.48 30.232 65.632 30.232C66.464 30.232 67.232 30.12 67.936 29.896C68.64 29.672 69.28 29.352 69.856 28.936C70.464 28.52 71.024 28.024 71.536 27.448L75.712 32.536C74.624 33.88 73.104 34.968 71.152 35.8C69.2 36.6 67.136 37 64.96 37Z" fill="#ffffff"/>
      <rect x="3.72559" y="13.4117" width="25.3333" height="11.1765" rx="5.58824" fill="#15B887"/>
      <rect x="6.70581" width="45.451" height="11.1765" rx="5.58824" fill="#ffffff"/>
      <rect y="26.8235" width="45.451" height="11.1765" rx="5.58824" fill="#ffffff"/>
      </svg>
    `}template(){return i`
      ${this.logo()}
    `}}customElements.define("logo-columod",k);class j extends c{name(){return"image-input"}style(){return l`
      image-input {
      }

      label {
        width: 100%;
        display: block;
      }

      .btn-group {
        padding: 10px;
      }

      .image-input__preview {
        padding: 10px;
      }

      .image-input__preview figure {
        max-width: 200px;
        border: 1px solid #333;
      }

      .image-input__preview img {
        width: 100%;
      }

      .image-input__btn-upload {
        display: inline-block;
        cursor: pointer;
        background: #333;
        color: #fff;
        border: none;
        padding: 5px 10px;
        font-size: 16px;
        border-radius: 5px;
        width: initial;
        transition: .3s ease;
        border: 1px solid #333;
        text-align: center;
      }

      .image-input__btn-upload:hover {
        background: #222;
        border: 1px solid #999;
      }
    `}btnUpload(){return i`
      <label class="image-input__btn-upload">
        <span>
          New
        </span>
        <input type="file" style="display: none;"/>
      </label>
    `}btnUploadAction(){const e=this.querySelectorAll(".image-input__btn-upload input")[0],t=this;e.addEventListener("change",function(){const o=t.querySelectorAll(".image-input__preview")[0],a=event.target.files[0];if(a){const n=new FileReader;n.onload=function(s){const d=s.target.result,p=i`
             <figure>
               <img src="${d}" alt="" />
             </figure>
           `;o.innerHTML=p,t.setAttribute("data-output",d)},n.readAsDataURL(a)}},!1)}btnGroup(){this.querySelectorAll(".btn-group")[0].appendChild(this.btnUpload())}setDefaultImage(e){if(!e)return;const t=this.querySelectorAll(".image-input__preview")[0],o=i`
      <figure>
        <img src="${this.props("data-image-url")}" alt="" />
      </figure>
    `;t.innerHTML=o,this.setAttribute("data-output",this.props("data-image-url"))}template(){return i`
      <div class="image-input__control">
        <div class="image-input__preview"></div>
        <div class="btn-group">
          ${this.btnUpload()}
        </div>
      </div>
    `}connected(){this.btnUploadAction(),this.setDefaultImage(this.props("data-image-url"))}}customElements.define("image-input",j);class L extends c{name(){return"component-control"}style(){return l`

      .component-control {
        display: grid;
        grid-template-columns: 1fr;
      }

      .component-control {
        display: grid;
        grid-template-columns: 1fr;
        border: 1px solid #333;
        border-radius: 5px;
        overflow: hidden;
      }

      .component-control__header {
        background: #333;
        padding: calc(var(--space-s) / 2) var(--space-s);
        font-size: 16px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        transition: .3s ease;
      }

      .component-control__header--highlight {
        background: orange;
      }

      .component-control__header--highlight .component-control__header-text {
        color: #000000;
      }

      .component-control__toggle {
        border-radius: 5px;
        background: #111111;
        width: 20px;
        height: 20px;
        padding: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        border: 1px solid #111111;
        transition: .3s ease;
      }

      .component-control__toggle:hover {
        border: 1px solid #ffffff;
      }

      .component-control__btn-close {
        display: none;
      }

      .component-control__toggle--opened .component-control__btn-close {
        display: block;
      }

      .component-control__toggle--opened .component-control__btn-open {
        display: none;
      }

      .component-control__input-group {
        display: grid;
        grid-template-columns: 1fr;
        border: 1px solid #333;
        overflow: hidden;
        height: 0px;
      }

      .component-control__input-group--opened {
        height: 100%;
      }

      .component-control__label {
        background: #222;
        color: #999;
        padding: calc(var(--space-s) / 2) var(--space-s);
        font-size: 16px;
      }

      .component-control select {
        padding: var(--space-s);
        width: 100%;
        background: transparent;
        color: var(--color-fg);
        font-size: 16px;
        border: none;
      }

      .component-control select option {
        background: var(--color-bg);
      }

      .component-control input[type="text"],
      .component-control select,
      .component-control textarea {
        box-sizing: border-box;
        border: none;
        padding: var(--space-s);
        width: 100%;
        background: #111;
        color: #999;
        font-size: 16px;
      }

      .component-control input[type="text"]:focus,
      .component-control select:focus,
      .component-control textarea:focus {
        outline: none;
        background: var(--color-bg);
        color: var(--color-fg);
      }

      .component-control__btn-group {
        display: flex;
        justify-content: flex-end;
        padding: var(--space-s);
      }

      .component-control__btn-save {
        display: inline-block;
        cursor: pointer;
        background: #333;
        color: #fff;
        border: none;
        padding: 5px 10px;
        font-size: 16px;
        border-radius: 5px;
        min-width: 120px;
        transition: .3s ease;
        border: 1px solid #333;
      }

      .component-control__btn-save:hover {
        background: #222;
        border: 1px solid #999;
      }
    `}iconChevronDown(){return i`
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg>
    `}iconChevronUp(){return i`
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-up"><polyline points="18 15 12 9 6 15"></polyline></svg>
    `}data(){return{sectionName:this.props("data-section-name"),component:this.props("data-component"),title:this.props("data-title"),titleLevel:this.props("data-title-level"),ctaText:this.props("data-cta-text"),ctaLink:this.props("data-cta-link"),image:this.props("data-image"),body:this.props("data-body")}}setDefaultComponent(){this.querySelectorAll("option").forEach(t=>{t.value===this.data().component&&(t.selected=!0)})}controlListener(){const e=this;this.querySelectorAll("[data-node]").forEach(o=>{o.dataset.node!=="section"&&o.addEventListener("change",function(){this.dataset.node==="image"?this.setAttribute("value",this.dataset.output):this.setAttribute("value",this.value),e.output()},!1)})}output(){const e=this.querySelectorAll("[data-node]"),t={};e.forEach(o=>{o.dataset.node==="section"?t[o.dataset.node]=o.dataset.name:o.dataset.node==="image"?t[o.dataset.node]=o.dataset.output:t[o.dataset.node]=o.value}),this.setAttribute("data-output",JSON.stringify(t))}componentSelect(){return i`
      <label class="component-control__label">Component</label>
      <select data-node="component">
        <option name="media-object" value="media-object">media-object</option>
        <option name="media-object-reverse" value="media-object-reverse">media-object-reverse</option>
        <option name="hero-main" value="hero-main">hero-main</option>
      </select>
    `}titleInput(){return i`
      <label class="component-control__label">Title</label>
      <input data-node="title" type="text" value="${this.data().title}" />
    `}ctaTextInput(){return i`
      <label class="component-control__label">Button Text</label>
      <input data-node="cta-text" type="text" value="${this.data().ctaText}" />
    `}ctaLinkInput(){return i`
      <label class="component-control__label">Button Link</label>
      <input data-node="cta-link" type="text" value="${this.data().ctaLink}" />
    `}imageInput(){return i`
      <label class="component-control__label">Image</label>
      <image-input
        data-node="image"
        data-image-url="${this.props("data-image")}"
      >
      </image-input>
    `}bodyInput(){return i`
      <label class="component-control__label">Body</label>
      <textarea data-node="body" id="" name="" rows="5">${this.data().body}</textarea>
    `}controlToggle(){const e=this.querySelectorAll(".component-control__toggle")[0],t=this.querySelectorAll(".component-control__input-group")[0],o=this;let a=!1;e.addEventListener("click",function(){this.classList.toggle("component-control__toggle--opened"),t.classList.toggle("component-control__input-group--opened"),a===!1?(o.focus(),a=!0):(o.unFocus(),a=!1)},!1)}focus(){const e=this.props("data-uid").replace(" ","_"),t=document.querySelectorAll(`.mock-page [data-uid="${e}"] > *`)[0];t.setAttribute("data-name",e),t.classList.add("component-focus"),t.scrollIntoView({behavior:"smooth"}),this.querySelectorAll("header")[0].classList.add("component-control__header--highlight")}unFocus(){const e=this.props("data-uid").replace(" ","_");document.querySelectorAll(`.mock-page [data-uid="${e}"] > *`)[0].classList.remove("component-focus"),this.querySelectorAll("header")[0].classList.remove("component-control__header--highlight")}template(){return i`
        <section class="component-control">
          <header class="component-control__header" data-node="section" data-name="${this.data().sectionName}">
            <span class="component-control__header-text">
              ${this.data().sectionName}
            </span>
            <span class="component-control__toggle">
              <span class="component-control__btn-open">
                ${this.iconChevronDown()}
              </span>
              <span class="component-control__btn-close">
                ${this.iconChevronUp()}
              </span>
            </span>
          </header>

          <div class="component-control__input-group">
            ${this.componentSelect()}
            ${this.titleInput()}
            ${this.ctaTextInput()}
            ${this.ctaLinkInput()}
            ${this.imageInput()}
            ${this.bodyInput()}
            <div class="component-control__btn-group">
              <button data-control-name="${this.props("data-uid")}" class="component-control__btn-save">Save</button>
            </div>
          </div>

        </section>
    `}connected(){this.setDefaultComponent(),this.output(),this.controlListener(),this.controlToggle()}}customElements.define("component-control",L);class S extends c{name(){return"page-interact"}style(){return l`
      page-interact {
        --color-bg: #000;
        --color-fg: #fff;
        @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
        font-family: "Roboto", sans-serif;
      }

      ::-webkit-scrollbar {
        width: 10px;
      }

      ::-webkit-scrollbar-thumb {
        background: #666666;
        border-radius: 6px;
      }

      ::-webkit-scrollbar-track {
        background-color: #222222;
        border-left: 1px solid #333333;
      }

      .page-interact {
        box-sizing: border-box;
        background: var(--color-bg);
        color: var(--color-fg);
        padding: var(--space-m);
        position: fixed;
        top: 0;
        left: calc(-600px - var(--space-m));
        width: 600px;
        height: 100%;
        transition: .3s ease;
        overflow-y: scroll;
      }

      .page-interact--opened {
        left: 0;
      }

      .page-interact__toggle {
        width: 40px;
        height: 40px;
        display: block;
        background: var(--color-bg);
        position: fixed;
        left: var(--space-m);
        bottom: var(--space-m);
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid var(--color-fg);
        box-shadow: 0px 0px 10px rgba(0, 0, 0, .5);
        cursor: pointer;
        z-index: 9999;
      }

      .page-interact__toggle-close{
        display: none;
      }

      .page-interact__toggle--opened .page-interact__toggle-close {
        display: block;
      }

      .page-interact__toggle--opened .page-interact__toggle-edit {
        display: none;
      }


      .page-interact__controls {
        display: grid;
        grid-template-columns: 1fr;
        grid-gap: var(--space-s);
      }

      .page-interact__control-item {
        display: grid;
        grid-template-columns: 1fr;
        border: 1px solid #333;
        border-radius: 5px;
        overflow: hidden;
      }

      .page-interact__control-item header {
        background: #333;
        padding: calc(var(--space-s) / 2) var(--space-s);
        font-size: 16px;
      }

      .page-interact__control-item label {
        background: #222;
        color: #999;
        padding: calc(var(--space-s) / 2) var(--space-s);
        font-size: 16px;
      }

      .page-interact select {
        padding: var(--space-s);
        width: 100%;
        background: transparent;
        color: var(--color-fg);
        font-size: 16px;
        border: none;
      }

      .page-interact select option {
        background: var(--color-bg);
      }

      .page-interact input[type="text"],
      .page-interact select,
      .page-interact textarea {
        box-sizing: border-box;
        border: none;
        padding: var(--space-s);
        width: 100%;
        background: #111;
        color: #999;
        font-size: 16px;
      }

      .page-interact input[type="text"]:focus,
      .page-interact select:focus,
      .page-interact textarea:focus {
        outline: none;
        background: var(--color-bg);
        color: var(--color-fg);
      }
    `}shrinkBody(){const e=document.head,t=document.createElement("style");t.innerHTML=l`
      body {
        transition: .3s ease;
      }

      .body-shrink {
        padding-left: 600px
      }
    `,e.appendChild(t)}iconEdit(){return i`
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
    `}iconClose(){return i`
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
    `}rootColorVar(e){switch(e){case"00":return l`
          :root {
            --color-00: #000000;
            --color-01: #ffffff;
            --color-02: #d9abf4;
            --color-03: #301640;
            --color-04: #e0c8ee;
          }
        `;case"01":return l`
          :root {
            --color-00: #000000;
            --color-01: #ffffff;
            --color-02: #229a95 ;
            --color-03: #062c2a;
            --color-04: #b2e6e4;
          }
        `}}updateRootVar(e){const t=document.head,o=document.createElement("style");o.innerHTML=e,t.appendChild(o)}themeSelect(){return i`
      <section class="page-interact__control-item">
        <header>Theme</header>
        <label>Color Themes</label>
        <select class="theme-select" name="">
          <option value="" selected disabled>Choose a Theme</option>
          <option value="00">Theme A</option>
          <option value="01">Theme B</option>
        </select>
      </section>
    `}themeSelectAction(){const e=this.querySelectorAll(".theme-select")[0],t=this;e.addEventListener("change",function(){t.updateRootVar(t.rootColorVar(this.value))},!1)}toggleAction(){const e=document.body,t=this.querySelectorAll(".page-interact")[0];this.querySelectorAll(".page-interact__toggle")[0].addEventListener("click",function(){t.classList.toggle("page-interact--opened"),e.classList.toggle("body-shrink"),this.classList.toggle("page-interact__toggle--opened")},!1)}output(){const e=this.querySelectorAll("component-control");let t=[];return e.forEach(o=>{o.output();const a=o.dataset.output,n=JSON.parse(a);t.push(n)}),this.setAttribute("data-output",JSON.stringify(t)),t}updateOutput(){const e=this;this.querySelectorAll(".component-control__btn-save").forEach(o=>{o.addEventListener("click",function(){document.querySelectorAll(`component-control[data-uid="${o.dataset.controlName}"] .component-control__toggle`)[0].click(),e.output(),e.pageUpdate()},!1)})}mockData(){return[{section:"Section 1",component:"hero-main",type:"hero-main",title:"Lead Gen Made Easy",body:"Assemble high converting lead gen pages with battle tested components"},{section:"Section 2",component:"media-object",type:"media-object",title:"Effortless Lead Gen",image:"/image-01.jpg",cta_text:"learn more",cta_link:"/service",body:" Stop wasting time building from scratch. Our library of pre-built, high-performing components lets you assemble stunning lead gen pages in minutes. Simply choose the elements you need, customize the content, and hit publish. Focus on crafting your message, we will handle the design legwork "},{section:"Section 3",component:"media-object-reverse",type:"media-object",title:"Conversion Confidence",image:"/image-02.jpg",cta_text:"learn more",cta_link:"/service",body:"Built with a proven design system, our pre-built components are optimized for maximum conversions. Each element is strategically placed to capture leads and guide visitors towards your desired action. Don't gamble with your lead flow, leverage the power of pre-tested design components."},{section:"Section 4",component:"media-object",type:"media-object",title:"Scalable Growth",image:"/image-03.jpg",cta_text:"learn more",cta_link:"/service",body:"Your lead gen needs evolve, and so should your pages. Our modular system allows you to easily adapt and expand your landing pages as your campaigns grow. Simply add new components or adjust existing ones to fit your evolving marketing strategy. Build a foundation for long-term lead generation success."}]}controlGen(){let e="";return this.mockData().forEach((o,a)=>{const n=a.toString(),s=o.section.replace(" ","_"),d=i`
        <component-control
          data-uid="${n}_${s}"
          data-section-name="${o.section}"
          data-component="${o.component}"
          data-title="${o.title}"
          data-body="${o.body}"
          data-image="${o.image}"
          data-cta-text="${o.cta_text}"
          data-cta-link="${o.cta_link}"
        >
        </component-control>
      `;e+=d}),e}pageGen(){const e=document.querySelectorAll(".mock-page")[0];let t="";this.mockData().forEach((a,n)=>{const s=a.section.replace(" ","_"),d=`${n.toString()}_${s}`,p=i`
        <${a.component}
          data-uid="${d}"
          data-title="${a.title}"
          data-title-level="${a.level}"
          data-body="${a.body}"
          data-cta-text="${a.cta_text}"
          data-cta-link="${a.cta_link}"
          data-image="${a.image}"
        >
        </${a.component}>
      `;t+=p}),e.innerHTML=t}pageUpdate(){const e=document.querySelectorAll(".mock-page")[0];let t="";const o=this.dataset.output;JSON.parse(o).forEach((n,s)=>{const d=s.toString(),p=n.section.replace(" ","_"),m=`${d}_${p}`,g=i`
        <${n.component}
          data-uid="${m}"
          data-title="${n.title}"
          data-title-level="${n.level}"
          data-body="${n.body}"
          data-cta-text="${n["cta-text"]}"
          data-cta-link="${n["cta-link"]}"
          data-image="${n.image}"
        >
        </${n.component}>
      `;t+=g}),e.innerHTML=t}widgetOpen(){window.location.search==="?widget=open"&&(this.querySelectorAll(".page-interact")[0].classList.add("page-interact--opened"),document.body.classList.add("body-shrink"))}template(){return i`
      <div class="page-interact">
        <logo-columod></logo-columod>
        <div class="page-interact__controls">
          ${this.themeSelect()}
          ${this.controlGen()}
        </div>

        <div class="page-interact__toggle">
          <div class="page-interact__toggle-edit">
            ${this.iconEdit()}
          </div>
          <div class="page-interact__toggle-close">
            ${this.iconClose()}
          </div>
        </div>
      </div>
    `}connected(){this.themeSelectAction(),this.toggleAction(),this.shrinkBody(),this.pageGen(),this.widgetOpen(),setTimeout(()=>{this.output(),this.updateOutput()},0)}}customElements.define("page-interact",S);
