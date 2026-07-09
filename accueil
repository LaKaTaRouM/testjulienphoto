<!DOCTYPE html>
<html lang="fr">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Chambre Noire — Photographies & tirages</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link
    href="https://fonts.googleapis.com/css2?family=Newsreader:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Space+Mono:wght@400;700&family=Work+Sans:wght@400;500;600;700&display=swap"
    rel="stylesheet">
  <style>
    :root {
      --void: #14171a;
      --void-2: #1e2226;
      --bone: #ece6d8;
      --bone-2: #e1d9c8;
      --safelight: #c1432b;
      --safelight-dark: #9c3520;
      --gold: #d9a94e;
      --silver: #8b9096;
      --paper-text: #ede7dd;
      --line: rgba(20, 23, 26, 0.12);
      --line-dark: rgba(237, 231, 221, 0.12);
    }

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    html {
      scroll-behavior: smooth;
    }

    body {
      background: var(--bone);
      color: var(--void);
      font-family: 'Work Sans', sans-serif;
      line-height: 1.5;
      -webkit-font-smoothing: antialiased;
    }

    img {
      max-width: 100%;
      display: block;
    }

    a {
      color: inherit;
      text-decoration: none;
    }

    button {
      font-family: inherit;
      cursor: pointer;
      border: none;
      background: none;
    }

    .eyebrow {
      font-family: 'Space Mono', monospace;
      font-size: 11px;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: var(--safelight);
    }

    h1,
    h2,
    h3 {
      font-family: 'Newsreader', serif;
      font-weight: 500;
      letter-spacing: -0.01em;
    }

    .wrap {
      max-width: 1180px;
      margin: 0 auto;
      padding: 0 32px;
    }

    /* ===== HEADER ===== */
    header {
      position: sticky;
      top: 0;
      z-index: 40;
      background: rgba(236, 230, 216, 0.92);
      backdrop-filter: blur(8px);
      border-bottom: 1px solid var(--line);
    }

    .nav {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 18px 32px;
      max-width: 1180px;
      margin: 0 auto;
    }

    .logo {
      font-family: 'Newsreader', serif;
      font-style: italic;
      font-weight: 500;
      font-size: 22px;
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .logo .dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: var(--safelight);
      display: inline-block;
    }

    .nav-links {
      display: flex;
      gap: 30px;
      align-items: center;
    }

    .nav-links a {
      font-size: 14px;
      font-weight: 500;
      position: relative;
      padding: 4px 0;
      transition: color .2s;
    }

    .nav-links a:hover {
      color: var(--safelight);
    }

    .cart-btn {
      display: flex;
      align-items: center;
      gap: 8px;
      font-family: 'Space Mono', monospace;
      font-size: 13px;
      border: 1px solid var(--void);
      padding: 8px 14px;
      border-radius: 2px;
      transition: background .2s, color .2s;
    }

    .cart-btn:hover {
      background: var(--void);
      color: var(--bone);
    }

    .cart-count {
      background: var(--safelight);
      color: #fff;
      border-radius: 50%;
      width: 18px;
      height: 18px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 10px;
    }

    .burger {
      display: none;
      font-size: 22px;
    }

    /* ===== HERO ===== */
    .hero {
      background: var(--void);
      color: var(--paper-text);
      padding: 90px 0 0 0;
      overflow: hidden;
      position: relative;
    }

    .hero-inner {
      max-width: 1180px;
      margin: 0 auto;
      padding: 0 32px 70px;
      display: grid;
      grid-template-columns: 1.1fr 0.9fr;
      gap: 60px;
      align-items: end;
    }

    .hero h1 {
      font-size: clamp(40px, 5.2vw, 68px);
      line-height: 1.04;
      color: #fff;
      max-width: 620px;
    }

    .hero h1 em {
      font-style: italic;
      color: var(--safelight);
    }

    .hero p {
      margin-top: 22px;
      max-width: 440px;
      color: var(--silver);
      font-size: 16px;
    }

    .hero-actions {
      margin-top: 32px;
      display: flex;
      gap: 14px;
      flex-wrap: wrap;
    }

    .btn {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 13px 24px;
      font-size: 14px;
      font-weight: 600;
      border-radius: 2px;
      transition: transform .15s, background .2s, color .2s, border-color .2s;
    }

    .btn-solid {
      background: var(--safelight);
      color: #fff;
    }

    .btn-solid:hover {
      background: var(--safelight-dark);
      transform: translateY(-1px);
    }

    .btn-outline {
      border: 1px solid var(--line-dark);
      color: var(--paper-text);
    }

    .btn-outline:hover {
      border-color: var(--paper-text);
    }

    .btn-outline.dark {
      border: 1px solid var(--void);
      color: var(--void);
    }

    .btn-outline.dark:hover {
      background: var(--void);
      color: var(--bone);
    }

    .hero-meta {
      font-family: 'Space Mono', monospace;
      font-size: 12px;
      color: var(--silver);
      display: flex;
      flex-direction: column;
      gap: 10px;
      border-left: 1px solid var(--line-dark);
      padding-left: 20px;
    }

    .hero-meta b {
      color: var(--paper-text);
      font-weight: 400;
    }

    /* filmstrip */
    .filmstrip-wrap {
      background: #0e1012;
      border-top: 1px solid var(--line-dark);
      border-bottom: 1px solid var(--line-dark);
      overflow: hidden;
    }

    .sprockets {
      display: flex;
      justify-content: space-between;
      padding: 6px 0;
    }

    .sprockets span {
      width: 8px;
      height: 5px;
      background: var(--void);
      border-radius: 1px;
      opacity: .5;
    }

    .filmstrip {
      display: flex;
      width: max-content;
      animation: scroll 34s linear infinite;
    }

    .filmstrip:hover {
      animation-play-state: paused;
    }

    @keyframes scroll {
      from {
        transform: translateX(0);
      }

      to {
        transform: translateX(-50%);
      }
    }

    .frame {
      width: 190px;
      height: 130px;
      flex: 0 0 auto;
      position: relative;
      border-right: 1px solid var(--line-dark);
      display: flex;
      align-items: flex-end;
      padding: 10px;
    }

    .frame .fnum {
      font-family: 'Space Mono', monospace;
      font-size: 10px;
      color: rgba(255, 255, 255, .55);
      letter-spacing: .05em;
    }

    /* ===== SECTION shared ===== */
    section {
      padding: 88px 0;
    }

    .section-head {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      gap: 30px;
      margin-bottom: 40px;
      flex-wrap: wrap;
    }

    .section-head h2 {
      font-size: clamp(28px, 3.4vw, 40px);
    }

    .section-head p {
      max-width: 380px;
      color: #5b5f63;
      font-size: 14.5px;
    }

    /* ===== FILTERS ===== */
    .filters {
      display: flex;
      gap: 10px;
      flex-wrap: wrap;
      margin-bottom: 34px;
    }

    .filter-btn {
      font-family: 'Space Mono', monospace;
      font-size: 12px;
      letter-spacing: .04em;
      padding: 9px 16px;
      border: 1px solid var(--line);
      border-radius: 20px;
      color: #5b5f63;
      transition: all .2s;
    }

    .filter-btn.active,
    .filter-btn:hover {
      background: var(--void);
      border-color: var(--void);
      color: var(--bone);
    }

    /* ===== CATEGORY TILES ===== */
    .cat-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 22px;
    }

    .cat-tile {
      position: relative;
      border-radius: 4px;
      overflow: hidden;
      cursor: pointer;
      aspect-ratio: 3/4;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      padding: 22px;
      transition: transform .25s ease, box-shadow .25s ease;
    }

    .cat-tile:hover {
      transform: translateY(-4px);
      box-shadow: 0 18px 30px -18px rgba(20, 23, 26, .35);
    }

    .cat-tile::before {
      content: "";
      position: absolute;
      inset: 0;
      background: linear-gradient(180deg, rgba(0, 0, 0, 0) 35%, rgba(0, 0, 0, .6) 100%);
    }

    .cat-tile * {
      position: relative;
      z-index: 1;
    }

    .cat-tile .cat-count {
      font-family: 'Space Mono', monospace;
      font-size: 11px;
      color: #fff;
      opacity: .85;
      text-transform: uppercase;
      letter-spacing: .05em;
      margin-bottom: 6px;
    }

    .cat-tile h3 {
      color: #fff;
      font-size: 24px;
    }

    .cat-tile .cat-arrow {
      margin-top: 10px;
      font-family: 'Space Mono', monospace;
      font-size: 12px;
      color: #fff;
      opacity: .8;
    }

    /* ===== CATALOG VIEW ===== */
    .catalog-head {
      display: flex;
      align-items: center;
      gap: 18px;
      margin-bottom: 34px;
    }

    .back-link {
      font-family: 'Space Mono', monospace;
      font-size: 12px;
      letter-spacing: .04em;
      border: 1px solid var(--line);
      padding: 9px 16px;
      border-radius: 20px;
      color: #5b5f63;
      transition: all .2s;
    }

    .back-link:hover {
      background: var(--void);
      border-color: var(--void);
      color: var(--bone);
    }

    .catalog-head h2 {
      font-size: clamp(26px, 3.2vw, 36px);
    }

    .catalog-head .cat-tag {
      font-family: 'Space Mono', monospace;
      font-size: 12px;
      color: var(--safelight);
      text-transform: uppercase;
      letter-spacing: .05em;
    }

    .empty-state {
      border: 1.5px dashed var(--line);
      border-radius: 4px;
      padding: 50px 30px;
      text-align: center;
      color: #5b5f63;
      font-size: 14px;
      margin-bottom: 34px;
    }

    .empty-state b {
      display: block;
      font-family: 'Newsreader', serif;
      font-style: italic;
      font-size: 20px;
      color: var(--void);
      margin-bottom: 8px;
    }

    .add-photo-toggle {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      margin-bottom: 34px;
    }

    .inline-publish {
      display: none;
      background: var(--bone-2);
      padding: 28px;
      border-radius: 4px;
      margin-bottom: 40px;
      grid-template-columns: 1fr 1fr;
      gap: 26px;
    }

    .inline-publish.open {
      display: grid;
    }

    .inline-publish .drop {
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    /* ===== GALLERY ===== */
    .gallery {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 22px;
    }

    .card {
      background: var(--bone-2);
      border-radius: 3px;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      cursor: pointer;
      transition: transform .25s ease, box-shadow .25s ease;
    }

    .card:hover {
      transform: translateY(-4px);
      box-shadow: 0 18px 30px -18px rgba(20, 23, 26, .35);
    }

    .thumb {
      aspect-ratio: 4/5;
      position: relative;
      display: flex;
      align-items: flex-end;
      padding: 14px;
      overflow: hidden;
    }

    .thumb::after {
      content: "";
      position: absolute;
      inset: 0;
      background: linear-gradient(180deg, rgba(0, 0, 0, 0) 45%, rgba(0, 0, 0, .55) 100%);
    }

    .thumb .tag {
      position: relative;
      z-index: 1;
      font-family: 'Space Mono', monospace;
      font-size: 10px;
      color: #fff;
      letter-spacing: .06em;
      text-transform: uppercase;
      background: rgba(20, 23, 26, .55);
      padding: 4px 8px;
      border-radius: 20px;
      align-self: flex-start;
      margin-bottom: auto;
    }

    .thumb .fname {
      position: relative;
      z-index: 1;
      color: #fff;
      font-family: 'Space Mono', monospace;
      font-size: 11px;
      opacity: .8;
    }

    .sold-badge {
      position: absolute;
      top: 14px;
      right: 14px;
      z-index: 2;
      background: var(--gold);
      color: var(--void);
      font-size: 10px;
      font-weight: 700;
      font-family: 'Space Mono', monospace;
      padding: 4px 8px;
      border-radius: 20px;
      text-transform: uppercase;
    }

    .card-body {
      padding: 16px 16px 18px;
      display: flex;
      flex-direction: column;
      gap: 4px;
      flex: 1;
    }

    .card-body h3 {
      font-size: 17px;
      font-weight: 500;
      font-style: italic;
    }

    .card-meta {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 10px;
    }

    .price {
      font-family: 'Space Mono', monospace;
      font-size: 13px;
      color: var(--safelight);
      font-weight: 700;
    }

    .add-btn {
      font-size: 11px;
      font-family: 'Space Mono', monospace;
      letter-spacing: .04em;
      border: 1px solid var(--void);
      padding: 6px 12px;
      border-radius: 20px;
      text-transform: uppercase;
      transition: all .2s;
    }

    .add-btn:hover {
      background: var(--void);
      color: var(--bone);
    }

    .load-more {
      display: flex;
      justify-content: center;
      margin-top: 40px;
    }

    /* ===== HOW IT WORKS / TARIFS ===== */
    .dark-section {
      background: var(--void);
      color: var(--paper-text);
    }

    .dark-section .section-head p {
      color: var(--silver);
    }

    .steps {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1px;
      background: var(--line-dark);
      border: 1px solid var(--line-dark);
    }

    .step {
      background: var(--void);
      padding: 34px 28px;
    }

    .step .num {
      font-family: 'Space Mono', monospace;
      color: var(--safelight);
      font-size: 13px;
    }

    .step h3 {
      color: #fff;
      font-size: 20px;
      margin: 14px 0 10px;
    }

    .step p {
      color: var(--silver);
      font-size: 14px;
    }

    .pricing {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 18px;
      margin-top: 44px;
    }

    .price-card {
      border: 1px solid var(--line-dark);
      padding: 26px 22px;
      border-radius: 3px;
    }

    .price-card .fmt {
      font-family: 'Space Mono', monospace;
      font-size: 12px;
      color: var(--silver);
      text-transform: uppercase;
      letter-spacing: .05em;
    }

    .price-card .amt {
      font-family: 'Newsreader', serif;
      font-size: 32px;
      margin: 14px 0 6px;
      color: #fff;
    }

    .price-card p {
      font-size: 13px;
      color: var(--silver);
    }

    /* ===== PUBLISH ===== */
    .publish {
      display: grid;
      grid-template-columns: 0.9fr 1.1fr;
      gap: 60px;
      align-items: start;
    }

    .publish-form {
      background: var(--bone-2);
      padding: 34px;
      border-radius: 4px;
    }

    .field {
      margin-bottom: 18px;
    }

    .field label {
      display: block;
      font-family: 'Space Mono', monospace;
      font-size: 11px;
      text-transform: uppercase;
      letter-spacing: .05em;
      margin-bottom: 7px;
      color: #5b5f63;
    }

    .field input[type=text],
    .field input[type=number],
    .field select {
      width: 100%;
      padding: 11px 13px;
      border: 1px solid var(--line);
      border-radius: 2px;
      background: #fff;
      font-family: 'Work Sans';
      font-size: 14px;
    }

    .drop {
      border: 1.5px dashed var(--silver);
      border-radius: 4px;
      padding: 26px;
      text-align: center;
      font-size: 13px;
      color: #5b5f63;
      cursor: pointer;
      transition: border-color .2s, background .2s;
    }

    .drop:hover,
    .drop.drag {
      border-color: var(--safelight);
      background: rgba(193, 67, 43, 0.05);
    }

    .drop-preview {
      margin-top: 12px;
    }

    .drop-preview img {
      max-height: 140px;
      border-radius: 3px;
      margin: 0 auto;
    }

    .publish-note {
      font-size: 14px;
      color: #5b5f63;
    }

    .publish-note h3 {
      font-size: 22px;
      margin-bottom: 14px;
    }

    .publish-note ul {
      margin: 18px 0 0 18px;
    }

    .publish-note li {
      margin-bottom: 8px;
    }

    .publish-note .flag {
      margin-top: 22px;
      padding: 14px 16px;
      background: var(--bone-2);
      border-left: 3px solid var(--safelight);
      font-size: 13px;
      border-radius: 2px;
    }

    /* ===== FOOTER ===== */
    footer {
      background: var(--void);
      color: var(--silver);
      padding: 60px 0 30px;
      font-size: 13px;
    }

    .foot-grid {
      display: grid;
      grid-template-columns: 1.4fr 1fr 1fr 1fr;
      gap: 40px;
      padding-bottom: 40px;
      border-bottom: 1px solid var(--line-dark);
    }

    .foot-grid h4 {
      color: #fff;
      font-family: 'Space Mono', monospace;
      font-size: 12px;
      text-transform: uppercase;
      letter-spacing: .05em;
      margin-bottom: 16px;
    }

    .foot-grid p {
      max-width: 280px;
    }

    .foot-grid a {
      display: block;
      margin-bottom: 9px;
      transition: color .2s;
    }

    .foot-grid a:hover {
      color: #fff;
    }

    .foot-bottom {
      display: flex;
      justify-content: space-between;
      padding-top: 24px;
      flex-wrap: wrap;
      gap: 10px;
    }

    /* ===== LIGHTBOX ===== */
    .overlay {
      position: fixed;
      inset: 0;
      background: rgba(14, 16, 18, .82);
      z-index: 100;
      display: none;
      align-items: center;
      justify-content: center;
      padding: 24px;
    }

    .overlay.open {
      display: flex;
    }

    .lightbox {
      background: var(--bone);
      width: min(920px, 100%);
      max-height: 90vh;
      overflow: auto;
      border-radius: 4px;
      display: grid;
      grid-template-columns: 1.1fr 1fr;
    }

    .lb-visual {
      min-height: 320px;
      display: flex;
      align-items: flex-end;
      padding: 20px;
      position: relative;
    }

    .lb-visual .tag {
      font-family: 'Space Mono', monospace;
      font-size: 11px;
      color: #fff;
      background: rgba(0, 0, 0, .5);
      padding: 4px 10px;
      border-radius: 20px;
    }

    .lb-body {
      padding: 32px;
      display: flex;
      flex-direction: column;
    }

    .lb-body h3 {
      font-size: 26px;
      font-style: italic;
      margin-bottom: 8px;
    }

    .lb-body .lb-cat {
      font-family: 'Space Mono', monospace;
      font-size: 11px;
      color: var(--safelight);
      text-transform: uppercase;
      letter-spacing: .06em;
      margin-bottom: 16px;
    }

    .lb-body p.desc {
      font-size: 14px;
      color: #5b5f63;
      margin-bottom: 22px;
    }

    .opt-group {
      margin-bottom: 20px;
    }

    .opt-group label {
      font-family: 'Space Mono', monospace;
      font-size: 11px;
      text-transform: uppercase;
      color: #5b5f63;
      display: block;
      margin-bottom: 8px;
    }

    .opt-row {
      display: flex;
      gap: 8px;
      flex-wrap: wrap;
    }

    .opt {
      border: 1px solid var(--line);
      padding: 9px 14px;
      border-radius: 20px;
      font-size: 12.5px;
      font-family: 'Space Mono', monospace;
      transition: all .2s;
    }

    .opt.active,
    .opt:hover {
      background: var(--void);
      color: var(--bone);
      border-color: var(--void);
    }

    .lb-total {
      margin-top: auto;
      padding-top: 20px;
      border-top: 1px solid var(--line);
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .lb-total .price {
      font-size: 20px;
    }

    .close-x {
      position: absolute;
      top: 14px;
      right: 16px;
      font-size: 22px;
      color: var(--void);
      background: var(--bone);
      width: 34px;
      height: 34px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 2;
    }

    .lightbox .close-x {
      background: rgba(255, 255, 255, .85);
    }

    /* ===== CART DRAWER ===== */
    .drawer-overlay {
      position: fixed;
      inset: 0;
      background: rgba(14, 16, 18, .5);
      z-index: 90;
      display: none;
    }

    .drawer-overlay.open {
      display: block;
    }

    .drawer {
      position: fixed;
      top: 0;
      right: -420px;
      width: 400px;
      max-width: 92vw;
      height: 100%;
      background: var(--bone);
      z-index: 95;
      transition: right .3s ease;
      display: flex;
      flex-direction: column;
      box-shadow: -10px 0 30px rgba(0, 0, 0, .15);
    }

    .drawer.open {
      right: 0;
    }

    .drawer-head {
      padding: 24px 26px;
      border-bottom: 1px solid var(--line);
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .drawer-head h3 {
      font-size: 20px;
    }

    .drawer-items {
      flex: 1;
      overflow: auto;
      padding: 10px 26px;
    }

    .cart-item {
      display: flex;
      gap: 12px;
      padding: 16px 0;
      border-bottom: 1px solid var(--line);
    }

    .cart-item .ci-thumb {
      width: 64px;
      height: 64px;
      border-radius: 3px;
      flex: 0 0 auto;
    }

    .cart-item .ci-body {
      flex: 1;
    }

    .cart-item h4 {
      font-size: 14px;
      font-weight: 600;
    }

    .cart-item .ci-meta {
      font-family: 'Space Mono', monospace;
      font-size: 11px;
      color: #5b5f63;
      margin-top: 4px;
    }

    .cart-item .ci-remove {
      font-size: 11px;
      color: var(--safelight);
      font-family: 'Space Mono', monospace;
      margin-top: 6px;
    }

    .drawer-empty {
      padding: 40px 0;
      text-align: center;
      color: #5b5f63;
      font-size: 14px;
    }

    .drawer-foot {
      padding: 22px 26px;
      border-top: 1px solid var(--line);
    }

    .drawer-foot .total-row {
      display: flex;
      justify-content: space-between;
      font-family: 'Space Mono', monospace;
      font-size: 15px;
      margin-bottom: 16px;
    }

    .drawer-foot .btn {
      width: 100%;
      justify-content: center;
    }

    /* checkout modal */
    #checkoutOverlay .lightbox {
      grid-template-columns: 1fr;
      max-width: 460px;
    }

    .confirm {
      text-align: center;
      padding: 16px 0;
    }

    .confirm .eyebrow {
      display: block;
      margin-bottom: 10px;
    }

    @media(max-width:900px) {
      .hero-inner {
        grid-template-columns: 1fr;
        gap: 26px;
      }

      .hero-meta {
        border-left: none;
        padding-left: 0;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 18px;
      }

      .gallery,
      .cat-grid {
        grid-template-columns: repeat(2, 1fr);
      }

      .steps,
      .pricing {
        grid-template-columns: 1fr 1fr;
      }

      .inline-publish {
        grid-template-columns: 1fr;
      }

      .foot-grid {
        grid-template-columns: 1fr 1fr;
      }

      .lightbox {
        grid-template-columns: 1fr;
      }

      .nav-links {
        display: none;
      }

      .burger {
        display: block;
      }
    }

    @media(max-width:560px) {

      .gallery,
      .cat-grid,
      .steps,
      .pricing,
      .foot-grid {
        grid-template-columns: 1fr;
      }
    }
  </style>
</head>

<body>

  <header>
    <div class="nav">
      <div class="logo"><span class="dot"></span>Chambre&nbsp;Noire</div>
      <nav class="nav-links">
        <a href="#portfolio">Portfolio</a>
        <a href="#boutique">Boutique</a>
        <a href="#tarifs">Tarifs</a>
        <a href="#contact">Contact</a>
      </nav>
      <button class="cart-btn" id="openCart">Panier <span class="cart-count" id="cartCount">0</span></button>
    </div>
  </header>

  <section class="hero">
    <div class="hero-inner">
      <div>
        <p class="eyebrow">Photographe indépendant — tirages & fichiers numériques</p>
        <h1>Chaque image raconte <em>un instant</em> qu'on ne refait pas.</h1>
        <p>Mes photos sont classées par catégorie. Ouvrez un catalogue pour parcourir les clichés déjà publiés, ou pour
          y ajouter les vôtres au fur et à mesure.</p>
        <div class="hero-actions">
          <a href="#portfolio" class="btn btn-solid">Voir les catégories</a>
          <a href="#tarifs" class="btn btn-outline">Voir les tarifs</a>
        </div>
      </div>
      <div class="hero-meta">
        <div><b>4 catégories</b> Nature, Sport, Sport Auto, Animaux</div>
        <div><b>Tirage fine art</b> ou fichier numérique</div>
        <div><b>Expédition</b> sous 5 jours ouvrés</div>
      </div>
    </div>
    <div class="filmstrip-wrap">
      <div class="sprockets" id="sprocketsTop"></div>
      <div class="filmstrip" id="filmstrip"></div>
      <div class="sprockets" id="sprocketsBot"></div>
    </div>
  </section>

  <section id="portfolio">
    <div class="wrap">

      <!-- VUE CATÉGORIES -->
      <div id="categoriesView">
        <div class="section-head">
          <div>
            <p class="eyebrow">Portfolio</p>
            <h2>Les catalogues</h2>
          </div>
          <p>Chaque catégorie est un catalogue à part entière — cliquez pour parcourir les photos publiées ou en ajouter
            de nouvelles.</p>
        </div>
        <div class="cat-grid" id="catGrid"></div>
      </div>

      <!-- VUE CATALOGUE -->
      <div id="catalogView" style="display:none;">
        <div class="catalog-head">
          <button class="back-link" id="backToCats">← Catégories</button>
          <div>
            <div class="cat-tag" id="catalogTag"></div>
            <h2 id="catalogTitle"></h2>
          </div>
        </div>

        <button class="btn btn-outline dark add-photo-toggle" id="togglePublish">+ Ajouter une photo</button>

        <div class="inline-publish" id="inlinePublish">
          <div>
            <div class="field">
              <label>Visuel</label>
              <div class="drop" id="dropZone">Glissez une image ici ou cliquez pour la choisir
                <div class="drop-preview" id="dropPreview"></div>
              </div>
              <input type="file" id="fileInput" accept="image/*" style="display:none;">
            </div>
          </div>
          <form id="publishForm">
            <div class="field">
              <label>Titre</label>
              <input type="text" id="pTitle" placeholder="Ex. Brume sur la calanque" required>
            </div>
            <div class="field">
              <label>Prix fichier numérique (€)</label>
              <input type="number" id="pPrice" value="15" min="1" required>
            </div>
            <button type="submit" class="btn btn-solid" style="width:100%; justify-content:center;">Publier dans ce catalogue</button>
          </form>
        </div>

        <div id="catalogEmpty" class="empty-state" style="display:none;">
          <b>Ce catalogue est encore vide</b>
          Ajoutez votre première photo dans cette catégorie avec le bouton ci-dessus.
        </div>

        <div class="gallery" id="gallery"></div>
      </div>

    </div>
  </section>

  <section id="boutique" class="dark-section">
    <div class="wrap">
      <div class="section-head">
        <div>
          <p class="eyebrow">Comment ça marche</p>
          <h2>De la prise de vue à votre mur</h2>
        </div>
        <p>Trois étapes, aucune surprise : vous choisissez le cliché, le format, et je m'occupe du tirage.</p>
      </div>
      <div class="steps">
        <div class="step">
          <div class="num">01</div>
          <h3>Choisissez la photo</h3>
          <p>Parcourez le portfolio filtré par thème et ouvrez la fiche du cliché qui vous plaît.</p>
        </div>
        <div class="step">
          <div class="num">02</div>
          <h3>Sélectionnez le format</h3>
          <p>Fichier numérique haute définition ou tirage fine art sur papier baryté, du 20×30 au A3.</p>
        </div>
        <div class="step">
          <div class="num">03</div>
          <h3>Recevez votre tirage</h3>
          <p>Impression et expédition sous 5 jours ouvrés, tube rigide pour les grands formats.</p>
        </div>
      </div>

      <div id="tarifs" style="margin-top:70px;">
        <div class="section-head">
          <div>
            <p class="eyebrow">Tarifs</p>
            <h2>Formats & prix</h2>
          </div>
        </div>
        <div class="pricing">
          <div class="price-card">
            <div class="fmt">Fichier numérique</div>
            <div class="amt">15€</div>
            <p>Export HD, usage personnel, livré par email.</p>
          </div>
          <div class="price-card">
            <div class="fmt">Tirage 20×30</div>
            <div class="amt">29€</div>
            <p>Papier fine art mat, sans cadre.</p>
          </div>
          <div class="price-card">
            <div class="fmt">Tirage 30×45</div>
            <div class="amt">49€</div>
            <p>Papier fine art mat, sans cadre.</p>
          </div>
          <div class="price-card">
            <div class="fmt">Tirage A3+</div>
            <div class="amt">69€</div>
            <p>Papier baryté, livré en tube rigide.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <footer id="contact">
    <div class="wrap">
      <div class="foot-grid">
        <div>
          <h4>Chambre Noire</h4>
          <p>Photographies publiées et vendues en tirages fine art ou en fichiers numériques. Chaque commande contribue
            à financer la prochaine série.</p>
        </div>
        <div>
          <h4>Naviguer</h4>
          <a href="#portfolio">Portfolio</a>
          <a href="#boutique">Boutique</a>
          <a href="#tarifs">Tarifs</a>
        </div>
        <div>
          <h4>Infos</h4>
          <a href="#">Mentions légales</a>
          <a href="#">CGV</a>
          <a href="#">Livraison</a>
        </div>
        <div>
          <h4>Contact</h4>
          <a href="mailto:contact@chambre-noire.fr">contact@chambre-noire.fr</a>
          <a href="#">Instagram</a>
        </div>
      </div>
      <div class="foot-bottom">
        <span>© 2026 Chambre Noire — tous droits réservés</span>
        <span>Site démo — à personnaliser</span>
      </div>
    </div>
  </footer>

  <!-- LIGHTBOX -->
  <div class="overlay" id="lbOverlay">
    <div class="lightbox">
      <button class="close-x" id="lbClose">×</button>
      <div class="lb-visual" id="lbVisual">
        <span class="tag" id="lbTag"></span>
      </div>
      <div class="lb-body">
        <div class="lb-cat" id="lbCat"></div>
        <h3 id="lbTitle"></h3>
        <p class="desc">Cliché tiré à la demande. Sélectionnez un format ci-dessous pour ajouter cette photo à votre
          panier.</p>
        <div class="opt-group">
          <label>Format</label>
          <div class="opt-row" id="lbFormats"></div>
        </div>
        <div class="lb-total">
          <span class="price" id="lbPrice"></span>
          <button class="btn btn-solid" id="lbAdd">Ajouter au panier</button>
        </div>
      </div>
    </div>
  </div>

  <!-- CART DRAWER -->
  <div class="drawer-overlay" id="drawerOverlay"></div>
  <div class="drawer" id="drawer">
    <div class="drawer-head">
      <h3>Votre panier</h3>
      <button class="close-x" id="drawerClose" style="position:static;">×</button>
    </div>
    <div class="drawer-items" id="drawerItems"></div>
    <div class="drawer-foot">
      <div class="total-row"><span>Total</span><span id="drawerTotal">0 €</span></div>
      <button class="btn btn-solid" id="checkoutBtn">Passer commande</button>
    </div>
  </div>

  <!-- CHECKOUT -->
  <div class="overlay" id="checkoutOverlay">
    <div class="lightbox">
      <button class="close-x" id="checkoutClose">×</button>
      <div class="lb-body" id="checkoutBody"></div>
    </div>
  </div>

  <script>
    (function(){

  /* ---------- DATA ---------- */
  var categories = [
    {id:'nature', label:'Nature', colors:['#1f2a1c','#8fa06b']},
    {id:'sport', label:'Sport', colors:['#1a2430','#4c7fb0']},
    {id:'sport-auto', label:'Sport Auto', colors:['#232323','#c1432b']},
    {id:'animaux', label:'Animaux', colors:['#2e2419','#d9a94e']}
  ];
  var catById = {};
  categories.forEach(function(c){ catById[c.id] = c; });

  var products = []; // vide au départ : on publie catégorie par catégorie
  var frameCounters = {};
  categories.forEach(function(c){ frameCounters[c.id] = 1; });

  var formats = [
    {id:'digital', label:'Fichier numérique', mult:1},
    {id:'20x30', label:'Tirage 20×30', mult: 1.93},
    {id:'30x45', label:'Tirage 30×45', mult: 3.27},
    {id:'a3', label:'Tirage A3+', mult: 4.6}
  ];

  var currentCategory = null; // catégorie ouverte dans la vue catalogue
  var cart = [];

  function thumbStyle(p){
    if(p.image) return 'background-image:url('+p.image+');background-size:cover;background-position:center;';
    return 'background:linear-gradient(160deg,'+p.colors[0]+','+p.colors[1]+');';
  }
  function catPrefix(catId){ return catId.slice(0,3).toUpperCase(); }

  /* ---------- VUE CATÉGORIES ---------- */
  var catGridEl = document.getElementById('catGrid');
  function renderCatGrid(){
    catGridEl.innerHTML = '';
    categories.forEach(function(c){
      var count = products.filter(function(p){ return p.category===c.id; }).length;
      var latest = products.filter(function(p){ return p.category===c.id; }).slice(-1)[0];
      var bg = latest ? thumbStyle(latest) : 'background:linear-gradient(160deg,'+c.colors[0]+','+c.colors[1]+');';
      var tile = document.createElement('div');
      tile.className = 'cat-tile';
      tile.style.cssText = bg;
      tile.innerHTML =
        '<div class="cat-count">'+count+' photo'+(count>1?'s':'')+'</div>'+
        '<h3>'+c.label+'</h3>'+
        '<div class="cat-arrow">Ouvrir le catalogue →</div>';
      tile.addEventListener('click', function(){ openCategory(c.id); });
      catGridEl.appendChild(tile);
    });
  }
  renderCatGrid();

  /* ---------- VUE CATALOGUE ---------- */
  var categoriesView = document.getElementById('categoriesView');
  var catalogView = document.getElementById('catalogView');
  var galleryEl = document.getElementById('gallery');
  var catalogEmptyEl = document.getElementById('catalogEmpty');

  function openCategory(catId){
    currentCategory = catId;
    var c = catById[catId];
    document.getElementById('catalogTag').textContent = 'Catalogue';
    document.getElementById('catalogTitle').textContent = c.label;
    document.getElementById('inlinePublish').classList.remove('open');
    categoriesView.style.display = 'none';
    catalogView.style.display = 'block';
    renderCatalog();
    document.getElementById('portfolio').scrollIntoView({behavior:'smooth'});
  }
  function backToCategories(){
    currentCategory = null;
    categoriesView.style.display = 'block';
    catalogView.style.display = 'none';
    renderCatGrid();
    document.getElementById('portfolio').scrollIntoView({behavior:'smooth'});
  }
  document.getElementById('backToCats').addEventListener('click', backToCategories);

  function renderCatalog(){
    var list = products.filter(function(p){ return p.category===currentCategory; });
    galleryEl.innerHTML = '';
    catalogEmptyEl.style.display = list.length===0 ? 'block' : 'none';
    list.forEach(function(p){
      var card = document.createElement('div');
      card.className = 'card';
      card.innerHTML =
        '<div class="thumb" style="'+thumbStyle(p)+'">'+
          (p.sold ? '<div class="sold-badge">Vendue</div>' : '') +
          '<span class="tag">'+catById[p.category].label+'</span>'+
          '<span class="fname">'+p.frame+'</span>'+
        '</div>'+
        '<div class="card-body">'+
          '<h3>'+p.title+'</h3>'+
          '<div class="card-meta">'+
            '<span class="price">dès '+p.price+' €</span>'+
            '<button class="add-btn">Voir</button>'+
          '</div>'+
        '</div>';
      card.addEventListener('click', function(){ openLightbox(p); });
      galleryEl.appendChild(card);
    });
  }

  var togglePublishBtn = document.getElementById('togglePublish');
  var inlinePublish = document.getElementById('inlinePublish');
  togglePublishBtn.addEventListener('click', function(){
    inlinePublish.classList.toggle('open');
  });

  /* ---------- filmstrip (décoratif) ---------- */
  var filmstripEl = document.getElementById('filmstrip');
  function renderFilmstrip(){
    var html = '';
    if(products.length === 0){
      var doubledCats = categories.concat(categories).concat(categories);
      doubledCats.forEach(function(c){
        html += '<div class="frame" style="background:linear-gradient(160deg,'+c.colors[0]+','+c.colors[1]+');"><span class="fnum">'+c.label.toUpperCase()+' — À VENIR</span></div>';
      });
    } else {
      var doubled = products.slice(-14).concat(products.slice(-14));
      doubled.forEach(function(p){
        html += '<div class="frame" style="'+thumbStyle(p)+'"><span class="fnum">'+p.frame+' — '+catById[p.category].label.toUpperCase()+'</span></div>';
      });
    }
    filmstripEl.innerHTML = html;
  }
  renderFilmstrip();
  ['sprocketsTop','sprocketsBot'].forEach(function(id){
    var el = document.getElementById(id);
    var html = '';
    for(var i=0;i<60;i++) html += '<span></span>';
    el.innerHTML = html;
  });

  /* ---------- LIGHTBOX ---------- */
  var lbOverlay = document.getElementById('lbOverlay');
  var currentProduct = null;
  var currentFormat = formats[0];

  function openLightbox(p){
    currentProduct = p;
    currentFormat = formats[0];
    document.getElementById('lbVisual').style.cssText = 'min-height:320px;display:flex;align-items:flex-end;padding:20px;position:relative;' + thumbStyle(p);
    document.getElementById('lbTag').textContent = p.frame;
    document.getElementById('lbCat').textContent = catById[p.category].label;
    document.getElementById('lbTitle').textContent = p.title;
    var formatsEl = document.getElementById('lbFormats');
    formatsEl.innerHTML = '';
    formats.forEach(function(f){
      var b = document.createElement('button');
      b.className = 'opt' + (f.id===currentFormat.id ? ' active' : '');
      b.textContent = f.label;
      b.addEventListener('click', function(){
        currentFormat = f;
        formatsEl.querySelectorAll('.opt').forEach(function(el){ el.classList.remove('active'); });
        b.classList.add('active');
        updateLbPrice();
      });
      formatsEl.appendChild(b);
    });
    updateLbPrice();
    lbOverlay.classList.add('open');
  }
  function updateLbPrice(){
    var price = Math.round(currentProduct.price * currentFormat.mult);
    document.getElementById('lbPrice').textContent = price + ' €';
  }
  document.getElementById('lbClose').addEventListener('click', function(){ lbOverlay.classList.remove('open'); });
  lbOverlay.addEventListener('click', function(e){ if(e.target===lbOverlay) lbOverlay.classList.remove('open'); });

  document.getElementById('lbAdd').addEventListener('click', function(){
    if(currentProduct.sold){ return; }
    var price = Math.round(currentProduct.price * currentFormat.mult);
    cart.push({
      key: currentProduct.id + '-' + currentFormat.id + '-' + Date.now(),
      title: currentProduct.title,
      format: currentFormat.label,
      price: price,
      colors: currentProduct.colors,
      image: currentProduct.image
    });
    renderCart();
    lbOverlay.classList.remove('open');
    openDrawer();
  });

  /* ---------- CART ---------- */
  var drawer = document.getElementById('drawer');
  var drawerOverlay = document.getElementById('drawerOverlay');
  function openDrawer(){ drawer.classList.add('open'); drawerOverlay.classList.add('open'); }
  function closeDrawer(){ drawer.classList.remove('open'); drawerOverlay.classList.remove('open'); }
  document.getElementById('openCart').addEventListener('click', openDrawer);
  document.getElementById('drawerClose').addEventListener('click', closeDrawer);
  drawerOverlay.addEventListener('click', closeDrawer);

  function renderCart(){
    document.getElementById('cartCount').textContent = cart.length;
    var itemsEl = document.getElementById('drawerItems');
    if(cart.length === 0){
      itemsEl.innerHTML = '<div class="drawer-empty">Votre panier est vide.<br>Ouvrez un catalogue pour choisir une photo.</div>';
    } else {
      itemsEl.innerHTML = '';
      cart.forEach(function(item){
        var bg = item.image ? 'background-image:url('+item.image+');background-size:cover;' : 'background:linear-gradient(160deg,'+item.colors[0]+','+item.colors[1]+');';
        var row = document.createElement('div');
        row.className = 'cart-item';
        row.innerHTML =
          '<div class="ci-thumb" style="'+bg+'"></div>'+
          '<div class="ci-body">'+
            '<h4>'+item.title+'</h4>'+
            '<div class="ci-meta">'+item.format+' — '+item.price+' €</div>'+
            '<div class="ci-remove">Retirer</div>'+
          '</div>';
        row.querySelector('.ci-remove').addEventListener('click', function(){
          cart = cart.filter(function(i){ return i.key !== item.key; });
          renderCart();
        });
        itemsEl.appendChild(row);
      });
    }
    var total = cart.reduce(function(s,i){ return s+i.price; }, 0);
    document.getElementById('drawerTotal').textContent = total + ' €';
  }
  renderCart();

  /* ---------- CHECKOUT ---------- */
  var checkoutOverlay = document.getElementById('checkoutOverlay');
  document.getElementById('checkoutBtn').addEventListener('click', function(){
    if(cart.length===0) return;
    var total = cart.reduce(function(s,i){ return s+i.price; }, 0);
    document.getElementById('checkoutBody').innerHTML =
      '<p class="eyebrow" style="margin-bottom:14px;">Commande</p>'+
      '<h3>Finaliser la commande</h3>'+
      '<form id="checkoutForm" style="margin-top:20px;">'+
        '<div class="field"><label>Nom</label><input type="text" required></div>'+
        '<div class="field"><label>Email</label><input type="text" required></div>'+
        '<div class="field"><label>Adresse de livraison</label><input type="text" required></div>'+
        '<div class="lb-total"><span class="price">'+total+' €</span>'+
        '<button type="submit" class="btn btn-solid">Confirmer</button></div>'+
      '</form>';
    checkoutOverlay.classList.add('open');
    document.getElementById('checkoutForm').addEventListener('submit', function(e){
      e.preventDefault();
      document.getElementById('checkoutBody').innerHTML =
        '<div class="confirm"><span class="eyebrow">Commande enregistrée</span>'+
        '<h3>Merci !</h3>'+
        '<p style="color:#5b5f63; margin-top:10px;">Votre commande d\'un montant de '+total+' € a bien été prise en compte. Ceci est une démonstration : aucun paiement réel n\'a été débité.</p>'+
        '<button class="btn btn-solid" id="checkoutDone" style="margin-top:20px;">Fermer</button></div>';
      document.getElementById('checkoutDone').addEventListener('click', function(){
        checkoutOverlay.classList.remove('open');
        cart = [];
        renderCart();
        closeDrawer();
      });
    });
  });
  document.getElementById('checkoutClose').addEventListener('click', function(){ checkoutOverlay.classList.remove('open'); });
  checkoutOverlay.addEventListener('click', function(e){ if(e.target===checkoutOverlay) checkoutOverlay.classList.remove('open'); });

  /* ---------- PUBLIER (contextuel à la catégorie ouverte) ---------- */
  var dropZone = document.getElementById('dropZone');
  var fileInput = document.getElementById('fileInput');
  var dropPreview = document.getElementById('dropPreview');
  var pendingImage = null;

  dropZone.addEventListener('click', function(){ fileInput.click(); });
  ['dragenter','dragover'].forEach(function(ev){
    dropZone.addEventListener(ev, function(e){ e.preventDefault(); dropZone.classList.add('drag'); });
  });
  ['dragleave','drop'].forEach(function(ev){
    dropZone.addEventListener(ev, function(e){ e.preventDefault(); dropZone.classList.remove('drag'); });
  });
  dropZone.addEventListener('drop', function(e){
    var f = e.dataTransfer.files[0];
    if(f) handleFile(f);
  });
  fileInput.addEventListener('change', function(e){
    if(e.target.files[0]) handleFile(e.target.files[0]);
  });
  function handleFile(file){
    var reader = new FileReader();
    reader.onload = function(e){
      pendingImage = e.target.result;
      dropPreview.innerHTML = '<img src="'+pendingImage+'">';
    };
    reader.readAsDataURL(file);
  }

  document.getElementById('publishForm').addEventListener('submit', function(e){
    e.preventDefault();
    if(!currentCategory) return;
    var title = document.getElementById('pTitle').value.trim();
    var price = parseInt(document.getElementById('pPrice').value, 10) || 15;
    if(!title) return;
    var c = catById[currentCategory];
    products.push({
      id: currentCategory+'-'+Date.now(),
      title: title,
      category: currentCategory,
      price: price,
      frame: catPrefix(currentCategory)+'-'+String(frameCounters[currentCategory]++).padStart(3,'0'),
      sold: false,
      image: pendingImage,
      colors: c.colors
    });
    renderCatalog();
    renderFilmstrip();
    e.target.reset();
    dropPreview.innerHTML = '';
    pendingImage = null;
    inlinePublish.classList.remove('open');
  });

})();
  </script>
</body>

</html>
