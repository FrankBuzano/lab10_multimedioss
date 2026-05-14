class BannerUCR extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });

    shadow.innerHTML = `
      <style>
        :host {
          --banner-bg: #d4a84b;
          --banner-primary: #7b2d8b;
          --banner-secondary: #00bcd4;
          --banner-width: 420px;
          --banner-radius: 6px;
          --banner-font: 'Nunito', sans-serif;
          display: block;
        }
        .banner {
          width: var(--banner-width);
          background-color: var(--banner-bg);
          padding: 36px 30px 40px 30px;
          border-radius: var(--banner-radius);
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 22px;
          overflow: hidden;
        }
        .banner-titulo {
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .signo-apertura {
          font-family: var(--banner-font);
          font-size: 52px;
          font-weight: 900;
          color: var(--banner-primary);
          line-height: 1;
          transform: rotate(-5deg);
          display: inline-block;
        }
        .bloque-la-sede {
          background-color: var(--banner-primary);
          padding: 8px 16px 8px 14px;
          display: inline-flex;
          align-items: center;
          transform: rotate(-3deg);
          box-shadow: 2px 2px 0px rgba(0,0,0,0.15);
        }
        .bloque-la-sede span {
          font-family: var(--banner-font);
          font-size: 28px;
          font-weight: 900;
          color: white;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        .banner-segunda-linea {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-top: -4px;
        }
        .bloque-te {
          background-color: var(--banner-secondary);
          padding: 8px 18px;
          display: inline-flex;
          align-items: center;
          transform: rotate(-3deg);
          box-shadow: 2px 2px 0px rgba(0,0,0,0.15);
        }
        .bloque-te span {
          font-family: var(--banner-font);
          font-size: 28px;
          font-weight: 900;
          color: white;
          text-transform: uppercase;
        }
        .texto-acompana {
          font-family: var(--banner-font);
          font-size: 28px;
          font-weight: 900;
          color: var(--banner-primary);
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        .signo-cierre {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-left: 4px;
        }
        .exclamacion-cuerpo {
          width: 18px;
          height: 34px;
          background-color: var(--banner-secondary);
          border-radius: 3px 3px 0 0;
        }
        .exclamacion-punto {
          width: 18px;
          height: 18px;
          background-color: var(--banner-primary);
          border-radius: 50%;
          margin-top: 4px;
        }
        .banner-texto {
          margin-top: 6px;
        }
        .banner-texto p {
          font-family: var(--banner-font);
          font-size: 18px;
          font-weight: 700;
          color: var(--banner-primary);
          line-height: 1.5;
        }
        .banner-texto .subtexto {
          font-size: 20px;
          font-weight: 900;
        }
      </style>

      <div class="banner" part="banner">
        <div class="banner-titulo" part="titulo">
          <span class="signo-apertura" part="signo-apertura">¡</span>
          <div class="bloque-la-sede" part="bloque-sede">
            <span><slot name="sede">La Sede</slot></span>
          </div>
        </div>

        <div class="banner-segunda-linea">
          <div class="bloque-te" part="bloque-accion">
            <span><slot name="accion">Te</slot></span>
          </div>
          <span class="texto-acompana" part="texto-verbo">
            <slot name="verbo">Acompaña</slot>
          </span>
          <div class="signo-cierre">
            <div class="exclamacion-cuerpo" part="exclamacion-cuerpo"></div>
            <div class="exclamacion-punto" part="exclamacion-punto"></div>
          </div>
        </div>

        <div class="banner-texto" part="mensaje">
          <p><slot name="mensaje">El respeto no se negocia</slot></p>
          <p class="subtexto"><slot name="submensaje">¡Pará ya de acosar!</slot></p>
        </div>
      </div>
    `;
  }
}

customElements.define('banner-ucr', BannerUCR);
