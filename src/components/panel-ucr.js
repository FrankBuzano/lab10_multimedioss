class PanelUCR extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });

    shadow.innerHTML = `
      <style>
        :host {
          --panel-bg-start: #1a3a6b;
          --panel-bg-mid: #0d2654;
          --panel-bg-end: #0a1e45;
          --panel-width: 320px;
          --panel-text-color: #e0e8f5;
          --panel-border-color: rgba(180, 195, 220, 0.3);
          --panel-arrow-color: #b0bfd8;
          --panel-footer-bg: rgba(10, 30, 70, 0.6);
          --panel-footer-color: #b0bfd8;
          --panel-radius: 8px;
          display: block;
        }
        .panel-ucr {
          width: var(--panel-width);
          background: linear-gradient(160deg, var(--panel-bg-start) 0%, var(--panel-bg-mid) 60%, var(--panel-bg-end) 100%);
          border-radius: var(--panel-radius);
          overflow: hidden;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.45);
          border: 1px solid #2a4a8a;
        }
        .panel-filas {
          display: flex;
          flex-direction: column;
        }
        ::slotted(.panel-fila) {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 18px 22px;
          border-bottom: 1px solid var(--panel-border-color);
        }
        ::slotted(.panel-fila:last-of-type) {
          border-bottom: none;
        }
        .panel-footer {
          background: var(--panel-footer-bg);
          border-top: 1px solid rgba(180, 195, 220, 0.25);
          padding: 14px;
          text-align: center;
        }
        .panel-footer-default {
          font-family: 'Open Sans', sans-serif;
          font-size: 20px;
          font-weight: 700;
          color: var(--panel-footer-color);
          letter-spacing: 4px;
        }
        ::slotted([slot="pie"]) {
          font-family: 'Open Sans', sans-serif;
          font-size: 20px;
          font-weight: 700;
          color: var(--panel-footer-color);
          letter-spacing: 4px;
        }
      </style>

      <div class="panel-ucr" part="panel">
        <div class="panel-filas" part="filas">
          <slot></slot>
        </div>
        <div class="panel-footer" part="pie">
          <slot name="pie"><span class="panel-footer-default">UCR</span></slot>
        </div>
      </div>
    `;
  }
}

customElements.define('panel-ucr', PanelUCR);
