// src/data/prices.js
// Estructura de precios por producto.
// Cada entrada usa la clave = id del producto (ver src/data/products.js)
// y un objeto con:
// - options: [{ label: string, price: number }]  // precio total del paquete mostrado en el label
// - (opcional) notes: string                     // aclaraciones que puedes mostrar en UI
// - (opcional) minQty / step / pricingMode       // para futuros controles de cantidad

export const PRICES = {
  /* =========================
   * CAMBRELA · SIN PERSONALIZACIÓN
   * ========================= */
  p1: {
    notes: "Planitas · precio por paquete",
    options: [
      { label: "10×10 · 200 unidades", price: 44.0 },
      { label: "12×12 · 200 unidades", price: 47.0 },
      { label: "15×15 · 200 unidades", price: 52.0 },
    ],
  },

  p2: {
    notes: "Planita con solapa · precio por paquete",
    options: [
      { label: "Solapa 10×10 · 200 unidades", price: 56.0 },
      { label: "Solapa 12×12 · 200 unidades", price: 59.0 },
      { label: "Solapa 15×15 · 200 unidades", price: 62.0 },
    ],
  },

  p3: {
    notes: "Arruchada 1 cinta · precio por 100 unidades",
    options: [
      { label: "10×10 · 100 unidades", price: 36.0 },
      { label: "12×16 · 100 unidades", price: 37.5 },
      { label: "18×24 · 100 unidades", price: 39.5 },
      { label: "27×34 · 100 unidades", price: 49.0 },
      { label: "30×39 · 100 unidades", price: 51.0 },
      { label: "38×40 · 100 unidades", price: 57.0 },
      { label: "38×50 · 100 unidades", price: 62.0 },
    ],
  },

  p4: {
    notes: "Boutique con troquel · precio por 100 unidades",
    options: [
      { label: "16×20 · 100 unidades", price: 28.0 },
      { label: "19×24 · 100 unidades", price: 30.0 },
      { label: "29×40 · 100 unidades", price: 38.0 },
      { label: "30×25 · 100 unidades", price: 34.0 },
      { label: "39×35 · 100 unidades", price: 41.0 },
      { label: "50×50 · 100 unidades", price: 54.5 },
    ],
  },

  p5: {
    notes: "Cartuchera con cierre · precio por 100 unidades",
    options: [
      { label: "15×12 · 100 unidades", price: 80.0 },
      { label: "20×17 · 100 unidades", price: 90.0 },
      { label: "24×21 · 100 unidades", price: 98.0 },
    ],
  },

  p6: {
    notes: "Tote recto (asa) · precio por 100 unidades",
    options: [
      { label: "23×30 · 100 unidades", price: 76.0 },
      { label: "30×40 · 100 unidades", price: 80.0 },
      { label: "39×35 · 100 unidades", price: 82.5 },
      { label: "39×45 · 100 unidades", price: 87.0 },
      { label: "39×50 · 100 unidades", price: 89.5 },
    ],
  },

  p7: {
    notes: "Tote recto (asa + base) · precio por 100 unidades",
    options: [
      { label: "30×40×8 (base) · 100 unidades", price: 133.5 },
      { label: "39×35×8 (base) · 100 unidades", price: 137.0 },
      { label: "39×50×8 (base) · 100 unidades", price: 145.5 },
    ],
  },

  p8: {
    notes: "Sport bag con cordón · precio por 100 unidades",
    options: [
      { label: "24×35 · 100 unidades", price: 87.5 },
      { label: "30×40 · 100 unidades", price: 95.5 },
    ],
  },

  /* =========================
   * CAMBRELA · CON PERSONALIZACIÓN
   * ========================= */
  p10: {
    notes: "Arruchada | Cambrela 1 cinta · 100 unidades",
    options: [
      { label: "10×10 · 100 unidades", price: 42.0 },
      { label: "12×16 · 100 unidades", price: 44.0 },
      { label: "18×24 · 100 unidades", price: 46.5 },
      { label: "27×34 · 100 unidades", price: 57.5 },
      { label: "30×39 · 100 unidades", price: 60.0 },
      { label: "38×40 · 100 unidades", price: 67.0 },
      { label: "38×50 · 100 unidades", price: 73.0 },
    ],
  },

  p22: {
    notes: "Planita | Cambrela con solapa · 200 unidades",
    options: [
      { label: "Solapa 10×10 · 200 unidades", price: 66.0 },
      { label: "Solapa 12×12 · 200 unidades", price: 70.0 },
      { label: "Solapa 15×15 · 200 unidades", price: 74.0 },
    ],
  },

  p23: {
    notes: "Boutique | Cambrela con troquel · 100 unidades",
    options: [
      { label: "16×20 · 100 unidades", price: 33.0 },
      { label: "19×24 · 100 unidades", price: 35.0 },
      { label: "29×40 · 100 unidades", price: 45.0 },
      { label: "30×25 · 100 unidades", price: 40.0 },
      { label: "39×35 · 100 unidades", price: 48.0 },
      { label: "50×50 · 100 unidades", price: 64.0 },
    ],
  },

  p32: {
    notes: "Boutique troquel · Full color (mínimo 100 unidades)",
    options: [
      // Formato: tamaño · FC 20×10 / FC 25×25 / FC Toda la funda
      { label: "16×20 · FC 20×10 · 100 u", price: 38.0 },
      { label: "16×20 · FC TODA LA FUNDA · 100 u", price: 63.0 },

      { label: "19×24 · FC 20×10 · 100 u", price: 50.0 },
      { label: "19×24 · FC TODA LA FUNDA · 100 u", price: 65.0 },

      { label: "29×40 · FC 20×10 · 100 u", price: 60.0 },
      { label: "29×40 · FC 25×25 · 100 u", price: 75.0 },
      { label: "29×40 · FC TODA LA FUNDA · 100 u", price: 85.0 },

      { label: "30×25 · FC 20×10 · 100 u", price: 55.0 },
      { label: "30×25 · FC 25×25 · 100 u", price: 70.0 },
      { label: "30×25 · FC TODA LA FUNDA · 100 u", price: 80.0 },

      { label: "39×35 · FC 20×10 · 100 u", price: 63.0 },
      { label: "39×35 · FC 25×25 · 100 u", price: 78.0 },
      { label: "39×35 · FC TODA LA FUNDA · 100 u", price: 93.0 },

      { label: "50×50 · FC 20×10 · 100 u", price: 79.0 },
      { label: "50×50 · FC 25×25 · 100 u", price: 94.0 },
      { label: "50×50 · FC TODA LA FUNDA · 100 u", price: 164.0 },
    ],
  },

  p9: {
    notes: "Planita · 1 color (200 unidades)",
    options: [
      { label: "Planitas 10×10 · 200 unidades", price: 52.0 },
      { label: "Planitas 12×12 · 200 unidades", price: 56.0 },
      { label: "Planitas 15×15 · 200 unidades", price: 62.0 },
    ],
  },

  p11: {
    notes: "Tote recto (asa) · 1 color (100 unidades)",
    options: [
      { label: "23×30 · 100 unidades", price: 89.0 },
      { label: "30×40 · 100 unidades", price: 94.0 },
      { label: "39×35 · 100 unidades", price: 97.0 },
      { label: "39×45 · 100 unidades", price: 102.0 },
      { label: "39×50 · 100 unidades", price: 105.0 },
    ],
  },

  p24: {
    notes: "Tote recto (asa) · Full color (mínimo 50 unidades)",
    options: [
      { label: "23×30 · FC 20×10 · 50 u", price: 55.0 },
      { label: "23×30 · FC 25×25 · 50 u", price: 70.0 },
      { label: "23×30 · FC TODA EL BOLSO · 50 u", price: 75.0 },

      { label: "30×40 · FC 20×10 · 50 u", price: 57.5 },
      { label: "30×40 · FC 25×25 · 50 u", price: 72.5 },
      { label: "30×40 · FC TODA EL BOLSO · 50 u", price: 127.5 },

      { label: "39×35 · FC 20×10 · 50 u", price: 60.0 },
      { label: "39×35 · FC 25×25 · 50 u", price: 75.0 },
      { label: "39×35 · FC TODA EL BOLSO · 50 u", price: 145.0 },

      { label: "39×45 · FC 20×10 · 50 u", price: 62.5 },
      { label: "39×45 · FC 25×25 · 50 u", price: 77.5 },
      { label: "39×45 · FC TODA EL BOLSO · 50 u", price: 157.5 },

      { label: "39×50 · FC 20×10 · 50 u", price: 65.0 },
      { label: "39×50 · FC 25×25 · 50 u", price: 80.0 },
      { label: "39×50 · FC TODA EL BOLSO · 50 u", price: 180.0 },
    ],
  },

  p25: {
    notes: "Bolso recto pliegues esquineros · Full color (100 unidades)",
    options: [
      { label: "23×30 · 100 unidades", price: 104.0 },
      { label: "30×40 · 100 unidades", price: 109.0 },
      { label: "39×35 · 100 unidades", price: 112.0 },
      { label: "39×45 · 100 unidades", price: 117.0 },
      { label: "39×50 · 100 unidades", price: 120.0 },
    ],
  },

  p26: {
    notes: "Tote recto | Cambrela asa + base (100 unidades)",
    options: [
      { label: "30×40×8 (base) · 100 u", price: 157.0 },
      { label: "39×35×8 (base) · 100 u", price: 161.0 },
      { label: "39×50×8 (base) · 100 u", price: 171.0 },
    ],
  },

  p12: {
    notes: "Sport bag | Cambrela con cordón (100 unidades)",
    options: [
      { label: "24×35 · 100 unidades", price: 103.0 },
      { label: "30×40 · 100 unidades", price: 112.0 },
    ],
  },

  p27: {
    notes: "Sport bag | Cambrela con cordón · Full color (50 unidades)",
    options: [
      { label: "24×35 · FC · 50 unidades", price: 96.5 },
      { label: "30×40 · FC · 50 unidades", price: 101.0 },
    ],
  },

  p28: {
    notes: "Cartuchera | Cambrela con cierre (100 unidades)",
    options: [
      { label: "15×12 · 100 unidades", price: 94.0 },
      { label: "20×17 · 100 unidades", price: 105.0 },
      { label: "24×21 · 100 unidades", price: 115.0 },
    ],
  },

  // p29 es la versión Full Color (mínimo 50 u) con 3 coberturas
  p29: {
    notes: "Cartuchera | Cambrela con cierre · Full color (mínimo 50 unidades)",
    options: [
      { label: "15×12 · FC 20×10 · 50 u", price: 48.5 },
      { label: "15×12 · FC 15×15 · 50 u", price: 53.5 },
      { label: "15×12 · FC TODO EL BOLSO · 50 u", price: 58.5 },

      { label: "20×17 · FC 20×10 · 50 u", price: 53.5 },
      { label: "20×17 · FC 15×15 · 50 u", price: 58.5 },
      { label: "20×17 · FC TODO EL BOLSO · 50 u", price: 76.0 },

      { label: "24×21 · FC 20×10 · 50 u", price: 57.5 },
      { label: "24×21 · FC 15×15 · 50 u", price: 62.5 },
      { label: "24×21 · FC TODO EL BOLSO · 50 u", price: 85.0 },
    ],
  },

  p30: {
    notes: "Portaterno | Cambrela con cierre",
    options: [
      { label: "50×150 · 50 unidades", price: 137.0 },
      { label: "50×150 · 100 unidades", price: 254.0 },
      { label: "75×170 · 50 unidades", price: 178.0 },
      { label: "75×170 · 100 unidades", price: 334.0 },
    ],
  },

  p31: {
    notes: "Portaterno | Cambrela con cierre + base",
    options: [
      { label: "75×170 + 15 base · 50 unidades", price: 199.5 },
      { label: "75×170 + 15 base · 100 unidades", price: 374.0 },
    ],
  },

  /* =========================
   * TELA
   * ========================= */
  p33: {
    notes: "Tote liencillo asa",
    options: [
      { label: "23×30 · 24 unidades", price: 36.0 },
      { label: "23×30 · 100 unidades", price: 140.0 },

      { label: "30×40 · 24 unidades", price: 42.0 },
      { label: "30×40 · 100 unidades", price: 164.0 },

      { label: "39×35 · 24 unidades", price: 45.6 },
      { label: "39×35 · 100 unidades", price: 178.0 },

      { label: "39×50 · 24 unidades", price: 57.0 },
      { label: "39×50 · 100 unidades", price: 225.0 },
    ],
  },

  p13: {
    notes: "Tote liencillo recto | Gabardina pesada",
    options: [
      { label: "23×30 · 50 unidades", price: 105.0 },
      { label: "23×30 · 100 unidades", price: 298.0 },

      { label: "28×35 · 50 unidades", price: 134.5 },
      { label: "28×35 · 100 unidades", price: 250.0 },

      { label: "30×40 · 50 unidades", price: 155.5 },
      { label: "30×40 · 100 unidades", price: 288.0 },

      { label: "39×35 · 50 unidades", price: 171.5 },
      { label: "39×35 · 100 unidades", price: 318.0 },

      { label: "39×50 · 50 unidades", price: 226.0 },
      { label: "39×50 · 100 unidades", price: 419.0 },
    ],
  },

  p14: {
    notes: "Arruchada liencillo · doble cordón",
    options: [
      { label: "8×8 · 50 unidades", price: 45.0 },
      { label: "8×8 · 100 unidades", price: 88.0 },

      { label: "10×10 · 50 unidades", price: 46.5 },
      { label: "10×10 · 100 unidades", price: 90.0 },

      { label: "13×20 · 50 unidades", price: 55.5 },
      { label: "13×20 · 100 unidades", price: 100.0 },

      { label: "23×30 · 50 unidades", price: 86.0 },
      { label: "23×30 · 100 unidades", price: 162.0 },

      { label: "28×35 · 50 unidades", price: 106.0 },
      { label: "28×35 · 100 unidades", price: 205.0 },

      { label: "34×40 · 50 unidades", price: 131.5 },
      { label: "34×40 · 100 unidades", price: 255.0 },

      { label: "43×45 · 50 unidades", price: 170.5 },
      { label: "43×45 · 100 unidades", price: 335.0 },

      { label: "43×50 · 50 unidades", price: 184.0 },
      { label: "43×50 · 100 unidades", price: 360.0 },
    ],
  },

  p15: {
    notes: "Tote liencillo asa logo",
    options: [
      { label: "23×30 · 50 unidades", price: 77.5 },
      { label: "23×30 · 100 unidades", price: 150.0 },

      { label: "28×35 · 50 unidades", price: 87.0 },
      { label: "28×35 · 100 unidades", price: 170.0 },

      { label: "30×40 · 50 unidades", price: 97.0 },
      { label: "30×40 · 100 unidades", price: 190.0 },

      { label: "39×35 · 50 unidades", price: 104.0 },
      { label: "39×35 · 100 unidades", price: 200.0 },

      { label: "39×50 · 50 unidades", price: 129.5 },
      { label: "39×50 · 100 unidades", price: 250.0 },
    ],
  },

  p34: {
    notes: "Tote liencillo asa logo · Full color",
    options: [
      { label: "23×30 · FC 20×10", price: 40.8 },
      { label: "23×30 · FC 25×25", price: 48.0 },
      { label: "23×30 · FC TODA EL BOLSO", price: 69.6 },

      { label: "28×35 · FC 20×10", price: 48.0 },
      { label: "28×35 · FC 25×25", price: 55.2 },
      { label: "28×35 · FC TODA EL BOLSO", price: 76.8 },

      { label: "30×40 · FC 20×10", price: 55.2 },
      { label: "30×40 · FC 25×25", price: 62.4 },
      { label: "30×40 · FC TODA EL BOLSO", price: 86.4 },

      { label: "39×35 · FC 20×10", price: 62.4 },
      { label: "39×35 · FC 25×25", price: 69.6 },
      { label: "39×35 · FC TODA EL BOLSO", price: 91.2 },

      { label: "39×50 · FC 20×10", price: 69.6 },
      { label: "39×50 · FC 25×25", price: 76.8 },
      { label: "39×50 · FC TODA EL BOLSO", price: 117.6 },
    ],
  },

  p35: {
    notes: "Tote recto Aruba · Full color",
    options: [
      { label: "23×30 · 50 unidades", price: 97.5 },
      { label: "23×30 · 100 unidades", price: 185.0 },

      { label: "28×35 · 50 unidades", price: 107.0 },
      { label: "28×35 · 100 unidades", price: 204.0 },

      { label: "30×40 · 50 unidades", price: 117.0 },
      { label: "30×40 · 100 unidades", price: 224.0 },

      { label: "39×35 · 50 unidades", price: 124.0 },
      { label: "39×35 · 100 unidades", price: 238.0 },

      { label: "39×50 · 50 unidades", price: 149.5 },
      { label: "39×50 · 100 unidades", price: 289.0 },
    ],
  },

  p36: {
    notes: "Sport bag | Liencillo con cordón · Full color",
    options: [
      { label: "24×35 · 50 unidades", price: 89.0 },
      { label: "24×35 · 100 unidades", price: 170.0 },
      { label: "30×40 · 50 unidades", price: 106.0 },
      { label: "30×40 · 100 unidades", price: 208.0 },
    ],
  },

  p37: {
    notes: "Tote liencillo recto | Gabardina pesada · Logo",
    options: [
      { label: "23×30 · 50 unidades", price: 116.5 },
      { label: "23×30 · 100 unidades", price: 233.0 },

      { label: "28×35 · 50 unidades", price: 144.0 },
      { label: "28×35 · 100 unidades", price: 288.0 },

      { label: "30×40 · 50 unidades", price: 165.0 },
      { label: "30×40 · 100 unidades", price: 330.0 },

      { label: "39×35 · 50 unidades", price: 181.0 },
      { label: "39×35 · 100 unidades", price: 362.0 },

      { label: "39×50 · 50 unidades", price: 235.5 },
      { label: "39×50 · 100 unidades", price: 471.0 },
    ],
  },

  p38: {
    notes: "Arruchada | Piel de durazno · 1 cinta (100 unidades)",
    options: [
      { label: "8×8 · 100 unidades", price: 42.0 },
      { label: "10×10 · 100 unidades", price: 44.0 },
      { label: "12×16 · 100 unidades", price: 50.0 },
      { label: "18×24 · 100 unidades", price: 56.0 },
      { label: "29×34 · 100 unidades", price: 74.0 },
      { label: "35×39 · 100 unidades", price: 84.0 },
      { label: "38×40 · 100 unidades", price: 91.0 },
      { label: "38×50 · 100 unidades", price: 102.0 },
    ],
  },

  p39: {
    notes: "Arruchada | Piel de durazno · doble cinta (100 unidades)",
    options: [
      { label: "8×8 · 100 unidades", price: 84.0 },
      { label: "10×10 · 100 unidades", price: 91.0 },
      { label: "12×16 · 100 unidades", price: 111.0 },
      { label: "18×24 · 100 unidades", price: 151.0 },
      { label: "29×34 · 100 unidades", price: 238.0 },
      { label: "35×39 · 100 unidades", price: 301.0 },
      { label: "38×40 · 100 unidades", price: 324.0 },
      { label: "38×50 · 100 unidades", price: 386.0 },
    ],
  },

  p42: {
    notes: "Arruchada | Aruba · 1 cinta (100 unidades)",
    options: [
      { label: "8×8 · 100 unidades", price: 50.0 },
      { label: "10×10 · 100 unidades", price: 52.0 },
      { label: "12×15 · 100 unidades", price: 58.0 },
      { label: "18×25 · 100 unidades", price: 77.0 },
      { label: "27×35 · 100 unidades", price: 111.0 },
      { label: "27×40 · 100 unidades", price: 120.0 },
      { label: "34×40 · 100 unidades", price: 139.0 },
      { label: "34×50 · 100 unidades", price: 161.0 },
    ],
  },

  p40: {
    notes: "Arruchada | Terciopelo · 1 cinta (100 unidades)",
    options: [
      { label: "8×8 · 100 unidades", price: 64.0 },
      { label: "10×10 · 100 unidades", price: 71.0 },
      { label: "12×16 · 100 unidades", price: 86.0 },
      { label: "18×24 · 100 unidades", price: 126.0 },
      { label: "29×34 · 100 unidades", price: 213.0 },
      { label: "35×39 · 100 unidades", price: 271.0 },
      { label: "38×40 · 100 unidades", price: 294.0 },
      { label: "38×50 · 100 unidades", price: 351.0 },
    ],
  },

  p41: {
    notes: "Arruchada | Terciopelo · doble cinta (100 unidades)",
    options: [
      { label: "8×8 · 100 unidades", price: 84.0 },
      { label: "10×10 · 100 unidades", price: 91.0 },
      { label: "12×16 · 100 unidades", price: 111.0 },
      { label: "18×24 · 100 unidades", price: 151.0 },
      { label: "29×34 · 100 unidades", price: 238.0 },
      { label: "35×39 · 100 unidades", price: 301.0 },
      { label: "38×40 · 100 unidades", price: 324.0 },
      { label: "38×50 · 100 unidades", price: 386.0 },
    ],
  },

  p43: {
    notes: "Arruchada | Satín · Full color (100 unidades)",
    options: [
      { label: "8×8 · 100 unidades", price: 50.0 },
      { label: "10×10 · 100 unidades", price: 51.0 },
      { label: "12×15 · 100 unidades", price: 57.0 },
      { label: "18×25 · 100 unidades", price: 76.0 },
      { label: "27×35 · 100 unidades", price: 110.0 },
      { label: "27×40 · 100 unidades", price: 119.0 },
      { label: "34×40 · 100 unidades", price: 138.0 },
      { label: "34×50 · 100 unidades", price: 160.0 },
    ],
  },

  // NUEVO producto sugerido (agregar al listado de products.js con un id y nombre apropiados):
  // Ej: { id: "p57", category: "tela", name: "Arruchada | Tela Satín · Full Color (Una)", ... }
  // A continuación, precios de cobertura para p57:
  p57: {
    notes: "Arruchada | Tela Satín · Full color (mínimo 50 unidades, ‘Una’ cobertura)",
    options: [
      { label: "10×10 · FC TODA EL BOLSO · 50 u", price: 62.0 }, // tabla indica solo “toda el bolso”
      { label: "12×15 · FC TODA EL BOLSO · 50 u", price: 75.0 },

      { label: "18×25 · FC 20×10 · 50 u", price: 99.0 },
      { label: "18×25 · FC 25×25 · 50 u", price: 129.0 },
      { label: "18×25 · FC TODA EL BOLSO · 50 u", price: 129.0 },

      { label: "27×35 · FC 20×10 · 50 u", price: 121.0 },
      { label: "27×35 · FC 25×25 · 50 u", price: 151.0 },
      { label: "27×35 · FC TODA EL BOLSO · 50 u", price: 241.0 },

      { label: "27×40 · FC 20×10 · 50 u", price: 135.0 },
      { label: "27×40 · FC 25×25 · 50 u", price: 165.0 },
      { label: "27×40 · FC TODA EL BOLSO · 50 u", price: 275.0 },

      { label: "34×40 · FC 20×10 · 50 u", price: 151.0 },
      { label: "34×40 · FC 25×25 · 50 u", price: 181.0 },
      { label: "34×40 · FC TODA EL BOLSO · 50 u", price: 291.0 },

      { label: "34×50 · FC 20×10 · 50 u", price: 169.0 },
      { label: "34×50 · FC 25×25 · 50 u", price: 199.0 },
      { label: "34×50 · FC TODA EL BOLSO · 50 u", price: 339.0 },
    ],
  },

  // NUEVO producto sugerido para “Tote Bag Recto | Gabardina Pesada · Full Color”
  // Ej: { id: "p58", category: "tela", name: "Tote | Gabardina Pesada · Full Color", ... }
  p58: {
    notes: "Tote | Gabardina Pesada · Full color (mínimo 24 unidades)",
    options: [
      { label: "23×30 · FC 20×10 · 24 u", price: 63.6 },
      { label: "23×30 · FC 25×25 · 24 u", price: 76.8 },
      { label: "23×30 · FC TODA EL BOLSO · 24 u", price: 91.2 },

      { label: "28×35 · FC 20×10 · 24 u", price: 76.8 },
      { label: "28×35 · FC 25×25 · 24 u", price: 90.25 },
      { label: "28×35 · FC TODA EL BOLSO · 24 u", price: 110.4 },

      { label: "30×40 · FC 20×10 · 24 u", price: 87.6 },
      { label: "30×40 · FC 25×25 · 24 u", price: 100.35 },
      { label: "30×40 · FC TODA EL BOLSO · 24 u", price: 120.0 },

      { label: "39×35 · FC 20×10 · 24 u", price: 94.8 },
      { label: "39×35 · FC 25×25 · 24 u", price: 106.5 },
      { label: "39×35 · FC TODA EL BOLSO · 24 u", price: 140.4 },

      { label: "39×50 · FC 20×10 · 24 u", price: 120.0 },
      { label: "39×50 · FC 25×25 · 24 u", price: 132.72 },
      { label: "39×50 · FC TODA EL BOLSO · 24 u", price: 181.2 },
    ],
  },

  /* =========================
   * CAJAS Y CINTAS
   * ========================= */
  // Nota: para CAJAS la venta mínima es 50 unidades. Aquí dejamos el precio unitario.
  p16: {
    pricingMode: "per_unit",
    minQty: 50,
    options: [{ label: "Caja Tapa–Base · 28×15×9 cm · precio unitario", price: 2.0 }],
  },
  p44: {
    pricingMode: "per_unit",
    minQty: 50,
    options: [{ label: "Caja Vino · 35×9×9 cm · precio unitario", price: 1.55 }],
  },

  // Ecommerce
  p45: { pricingMode: "per_unit", minQty: 50, options: [{ label: "8×8×3 cm · unitario", price: 1.0 }] },
  p17: { pricingMode: "per_unit", minQty: 50, options: [{ label: "15×8×8 cm · unitario", price: 1.35 }] },
  p46: { pricingMode: "per_unit", minQty: 50, options: [{ label: "12×12×4 cm · unitario", price: 1.2 }] },
  p47: { pricingMode: "per_unit", minQty: 50, options: [{ label: "16×16×6 cm · unitario", price: 1.45 }] },
  p48: { pricingMode: "per_unit", minQty: 50, options: [{ label: "18×12×6 cm · unitario", price: 1.4 }] },
  p49: { pricingMode: "per_unit", minQty: 50, options: [{ label: "22×15×8 cm · unitario", price: 1.65 }] },
  p50: { pricingMode: "per_unit", minQty: 50, options: [{ label: "28×18×9 cm · unitario", price: 2.45 }] },
  p51: { pricingMode: "per_unit", minQty: 50, options: [{ label: "30×30×8 cm · unitario", price: 2.7 }] },
  p52: { pricingMode: "per_unit", minQty: 50, options: [{ label: "35×35×8 cm · unitario", price:  3.15}] },
  p53: { pricingMode: "per_unit", minQty: 50, options: [{ label: "36×20×12 cm · unitario", price: 4.95 }] },


  p54: {
    pricingMode: "per_unit",
    minQty: 50,
    options: [{ label: "Caja Sombrero · 35×35×15 cm · unitario", price: 3.15 }],
  },
  p55: {
    pricingMode: "per_unit",
    minQty: 50,
    options: [{ label: "Caja Sombrero · 40×40×15 cm · unitario", price: 4.95 }],
  },

  p18: {
    notes: "Listón raso impreso 1 color · consultar variaciones",
    options: [{ label: "Rollo estándar (referencial)", price: 0 }], // no se entregó tabla detallada unitaria
  },

  // p56: Listones (grosor 1.5 cm) con tramos por # de rollos
  p56: {
    notes: "Listones · Rollo de 45 m · Grosor 1.5 cm",
    options: [
      { label: "5 rollos (1.5 cm)", price: 37.0 },
      { label: "10 rollos (1.5 cm)", price: 65.0 },
      { label: "20 rollos (1.5 cm)", price: 110.0 },
    ],
  },

  // NUEVO producto para Listones 2.5 cm (agregar en products.js)
  p59: {
    notes: "Listones · Rollo de 45 m · Grosor 2.5 cm",
    options: [
      { label: "5 rollos (2.5 cm)", price: 37.0 },
      { label: "10 rollos (2.5 cm)", price: 65.0 },
      { label: "20 rollos (2.5 cm)", price: 110.0 },
    ],
  },

  /* =========================
   * CAMISETAS
   * ========================= */
  p19: {
    notes:
      "Camiseta básica — Packs y extras: XL/XXL +$2.00/unid. | Personalización: 10×10 $0.65 · 15×15 $0.70 · 20×20 $0.75 · 25×25 $0.85 · 30×30 $1.00 · 35×35 $1.15 · 40×40 $1.30",
    options: [
      { label: "Pack 6 unidades", price: 45.6 },
      { label: "Pack 12 unidades", price: 84.6 },
      { label: "Pack 18 unidades", price: 119.7 },
    ],
  },

  /* =========================
   * MANDILES
   * ========================= */
  p21: {
    notes:
      "Mandil Largo (bordado) — Mínimo 3 unidades. Tallas XL/XXL: +$3.00/unid. Incluye logo bordado 10×10.",
    options: [{ label: "3 unidades (mínimo)", price: 15.5 }],
  },

  p20: {
    notes:
      "Mandil Corto (bordado) — Mínimo 3 unidades. Tallas XL/XXL: +$3.00/unid. Incluye logo bordado 10×10.",
    options: [{ label: "3 unidades (mínimo)", price: 11.0 }],
  },
};
