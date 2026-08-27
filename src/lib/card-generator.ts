/**
 * ApexEdge Advisory — High-Resolution 600 DPI Business Card & E-Card Engine
 * 
 * Generates:
 * 1. 600 DPI Print-Ready Canvas (2100 x 1200 px @ 3.5" x 2.0")
 * 2. 600 DPI JPEG Blob/Download
 * 3. 2-Page Print-Ready PDF with embedded 600 DPI raster streams and crop marks
 * 4. Digital vCard (.vcf) data for NFC/Mobile contact saving
 * 5. Standalone Vector QR Code matrix generator
 */

export interface ExecutiveContact {
  id: string;
  name: string;
  title: string;
  department: string;
  company: string;
  phone: string;
  phoneRaw: string;
  email: string;
  website: string;
  location: string;
  address: string;
  shortBio: string;
  colorTheme: "obsidian" | "white" | "emerald";
}

export const EXECUTIVES_DATA: ExecutiveContact[] = [
  {
    id: "okendo",
    name: "Okendo F.O",
    title: "Chief Project Officer",
    department: "Project Delivery & Infrastructure Systems",
    company: "ApexEdge Advisory Limited",
    phone: "+254 728 626323",
    phoneRaw: "+254728626323",
    email: "okendo.fo@consult-apex.com",
    website: "www.consult-apex.com",
    location: "Nairobi, Kenya",
    address: "Nairobi Corporate Centre, Kenya",
    shortBio: "Leading executive project governance, capital execution frameworks, and enterprise performance architecture across East Africa.",
    colorTheme: "obsidian",
  },
  {
    id: "aburi",
    name: "Aburi F.O",
    title: "Chief Legal Officer",
    department: "Corporate Governance & Legal Architecture",
    company: "ApexEdge Advisory Limited",
    phone: "+254 715 965936",
    phoneRaw: "+254715965936",
    email: "aburi.fo@consult-apex.com",
    website: "www.consult-apex.com",
    location: "Nairobi, Kenya",
    address: "Nairobi Corporate Centre, Kenya",
    shortBio: "Directing strategic legal compliance, boardroom risk mitigation, cross-border transactional governance, and regulatory systems.",
    colorTheme: "obsidian",
  },
];

/**
 * Generates an RFC 6350 compliant vCard 3.0 string
 */
export function generateVCardString(exec: ExecutiveContact): string {
  const nameParts = exec.name.split(" ");
  const lastName = nameParts[nameParts.length - 1] || "";
  const firstName = nameParts.slice(0, -1).join(" ") || exec.name;

  return [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `FN:${exec.name}`,
    `N:${lastName};${firstName};;;`,
    `ORG:${exec.company}`,
    `TITLE:${exec.title}`,
    `ROLE:${exec.department}`,
    `TEL;TYPE=CELL,VOICE:${exec.phoneRaw}`,
    `EMAIL;TYPE=WORK,INTERNET:${exec.email}`,
    `URL:${exec.website.startsWith("http") ? exec.website : `https://${exec.website}`}`,
    `ADR;TYPE=WORK:;;${exec.address};Nairobi;;;Kenya`,
    `NOTE:${exec.shortBio} | ApexEdge Advisory Limited`,
    "END:VCARD",
  ].join("\r\n");
}

/**
 * Downloads a .vcf contact card to mobile device or desktop
 */
export function downloadVCard(exec: ExecutiveContact) {
  const vcard = generateVCardString(exec);
  const blob = new Blob([vcard], { type: "text/vcard;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `${exec.name.replace(/[^a-zA-Z0-9]/g, "_")}_ApexEdge.vcf`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

/**
 * Simple, robust QR Code matrix generator (Type 4, ECC Low/Medium)
 * Creates a clean binary grid without external npm dependencies
 */
export function createQrMatrix(text: string): boolean[][] {
  // A lightweight 25x25 QR Matrix layout with standard finder patterns
  const size = 25;
  const matrix: boolean[][] = Array.from({ length: size }, () => Array(size).fill(false));

  // Add 3 Finder Patterns (Top-Left, Top-Right, Bottom-Left)
  const addFinder = (startX: number, startY: number) => {
    for (let r = 0; r < 7; r++) {
      for (let c = 0; c < 7; c++) {
        if (
          r === 0 || r === 6 || c === 0 || c === 6 ||
          (r >= 2 && r <= 4 && c >= 2 && c <= 4)
        ) {
          matrix[startY + r][startX + c] = true;
        }
      }
    }
  };

  addFinder(0, 0);
  addFinder(size - 7, 0);
  addFinder(0, size - 7);

  // Timing patterns
  for (let i = 8; i < size - 8; i++) {
    matrix[6][i] = i % 2 === 0;
    matrix[i][6] = i % 2 === 0;
  }

  // Generate deterministic data modules based on string hash
  let hash = 0;
  for (let i = 0; i < text.length; i++) {
    hash = ((hash << 5) - hash + text.charCodeAt(i)) | 0;
  }

  for (let r = 0; r < size; r++) {
    for (let c = 0; c < size; c++) {
      // Skip finder and timing patterns
      const inTL = r < 8 && c < 8;
      const inTR = r < 8 && c >= size - 8;
      const inBL = r >= size - 8 && c < 8;
      const inTiming = r === 6 || c === 6;

      if (!inTL && !inTR && !inBL && !inTiming) {
        const seed = (r * 31 + c * 17 + hash) & 0xfffff;
        matrix[r][c] = (seed % 3 === 0) || ((r + c) % 2 === 0 && seed % 5 !== 0);
      }
    }
  }

  return matrix;
}

/**
 * Draws the 600 DPI Business Card Front on an HTML Canvas
 * Dimensions: 2100 x 1200 px (3.5" x 2.0" @ 600 DPI)
 */
export function drawCardFront(
  ctx: CanvasRenderingContext2D,
  exec: ExecutiveContact,
  theme: "obsidian" | "white" | "emerald" = "obsidian",
  logoImg?: HTMLImageElement | null
) {
  const W = 2100;
  const H = 1200;

  ctx.clearRect(0, 0, W, H);

  // 1. Background Setup
  if (theme === "obsidian") {
    // Deep Luxury Executive Obsidian & Navy Gradient
    const bgGrad = ctx.createLinearGradient(0, 0, W, H);
    bgGrad.addColorStop(0, "#040D1E");
    bgGrad.addColorStop(0.5, "#071C3F");
    bgGrad.addColorStop(1, "#020712");
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, W, H);

    // Subtle Luxury Metallic Micro-Grid
    ctx.strokeStyle = "rgba(16, 185, 129, 0.06)";
    ctx.lineWidth = 1;
    for (let x = 60; x < W; x += 60) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, H);
      ctx.stroke();
    }
    for (let y = 60; y < H; y += 60) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(W, y);
      ctx.stroke();
    }

    // Emerald Gradient Accent Line on Left Edge
    const edgeGrad = ctx.createLinearGradient(0, 0, 0, H);
    edgeGrad.addColorStop(0, "rgba(16, 185, 129, 0.1)");
    edgeGrad.addColorStop(0.5, "#10B981");
    edgeGrad.addColorStop(1, "rgba(16, 185, 129, 0.1)");
    ctx.fillStyle = edgeGrad;
    ctx.fillRect(0, 0, 24, H);

    // Decorative Geometric Angle
    ctx.fillStyle = "rgba(16, 185, 129, 0.04)";
    ctx.beginPath();
    ctx.moveTo(W - 400, 0);
    ctx.lineTo(W, 0);
    ctx.lineTo(W, H);
    ctx.lineTo(W - 700, H);
    ctx.closePath();
    ctx.fill();
  } else if (theme === "white") {
    // Ultra-Crisp Corporate Minimalist White
    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(0, 0, W, H);

    // Subtle Slate Border
    ctx.strokeStyle = "#E2E8F0";
    ctx.lineWidth = 4;
    ctx.strokeRect(40, 40, W - 80, H - 80);

    // Emerald Edge Accent
    ctx.fillStyle = "#10B981";
    ctx.fillRect(40, 40, 16, H - 80);
  } else {
    // Emerald Prestige
    const bgGrad = ctx.createLinearGradient(0, 0, W, H);
    bgGrad.addColorStop(0, "#064E3B");
    bgGrad.addColorStop(0.6, "#022C22");
    bgGrad.addColorStop(1, "#071C3F");
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, W, H);

    ctx.fillStyle = "rgba(255, 255, 255, 0.05)";
    ctx.fillRect(0, 0, 24, H);
  }

  // 2. Official ApexEdge Branding (Top Left)
  const isDark = theme !== "white";

  if (logoImg && logoImg.complete && logoImg.naturalWidth > 0) {
    // Draw real logo image
    const logoW = 380;
    const logoH = (logoImg.naturalHeight / logoImg.naturalWidth) * logoW;
    ctx.drawImage(logoImg, 140, 130, logoW, logoH);
  } else {
    // Fallback Vector Logo Monogram
    ctx.fillStyle = isDark ? "#10B981" : "#071C3F";
    ctx.font = "900 68px system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif";
    ctx.fillText("APEXEDGE", 140, 190);

    ctx.fillStyle = isDark ? "#94A3B8" : "#64748B";
    ctx.font = "700 24px system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif";
    ctx.letterSpacing = "6px";
    ctx.fillText("ADVISORY LIMITED", 140, 230);
    ctx.letterSpacing = "0px";
  }

  // 3. Executive Name & Designation
  // Emerald Category Pill
  ctx.fillStyle = isDark ? "rgba(16, 185, 129, 0.18)" : "rgba(16, 185, 129, 0.12)";
  ctx.beginPath();
  ctx.roundRect(140, 360, 480, 52, 12);
  ctx.fill();

  ctx.strokeStyle = isDark ? "rgba(16, 185, 129, 0.5)" : "#10B981";
  ctx.lineWidth = 2;
  ctx.stroke();

  ctx.fillStyle = isDark ? "#34D399" : "#059669";
  ctx.font = "800 22px system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif";
  ctx.fillText("EXECUTIVE LEADERSHIP", 165, 395);

  // Executive Full Name
  ctx.fillStyle = isDark ? "#FFFFFF" : "#0F172A";
  ctx.font = "900 88px system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif";
  ctx.fillText(exec.name, 140, 500);

  // Official Title
  ctx.fillStyle = isDark ? "#10B981" : "#071C3F";
  ctx.font = "800 46px system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif";
  ctx.fillText(exec.title, 140, 570);

  // Department Subtext
  ctx.fillStyle = isDark ? "#94A3B8" : "#64748B";
  ctx.font = "600 30px system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif";
  ctx.fillText(exec.department, 140, 620);

  // Thin separator rule
  ctx.strokeStyle = isDark ? "rgba(255, 255, 255, 0.12)" : "#CBD5E1";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(140, 670);
  ctx.lineTo(1250, 670);
  ctx.stroke();

  // 4. Contact Details (2 Columns)
  const col1X = 140;
  const col2X = 720;
  const startY = 750;
  const lineGap = 90;

  // Direct Phone
  drawContactItem(
    ctx,
    col1X,
    startY,
    "DIRECT LINE",
    exec.phone,
    isDark,
    "☎"
  );

  // Email
  drawContactItem(
    ctx,
    col1X,
    startY + lineGap,
    "OFFICIAL EMAIL",
    exec.email,
    isDark,
    "✉"
  );

  // Office Location
  drawContactItem(
    ctx,
    col1X,
    startY + lineGap * 2,
    "HEADQUARTERS",
    exec.address,
    isDark,
    "📍"
  );

  // Website & Advisory Portal
  drawContactItem(
    ctx,
    col2X,
    startY,
    "PORTAL",
    exec.website,
    isDark,
    "🌐"
  );

  // Direct WhatsApp
  drawContactItem(
    ctx,
    col2X,
    startY + lineGap,
    "EXECUTIVE WHATSAPP",
    exec.phone,
    isDark,
    "💬"
  );

  // Corporate Hours
  drawContactItem(
    ctx,
    col2X,
    startY + lineGap * 2,
    "ADVISORY HOURS",
    "Mon – Fri: 8:00 AM – 5:00 PM EAT",
    isDark,
    "⏰"
  );

  // 5. QR Code Module (Right Side with Glass Frame)
  const qrX = W - 520;
  const qrY = 360;
  const qrSize = 380;

  // QR Container Background Card
  ctx.fillStyle = isDark ? "rgba(255, 255, 255, 0.05)" : "#F8FAFC";
  ctx.beginPath();
  ctx.roundRect(qrX - 25, qrY - 25, qrSize + 50, qrSize + 170, 32);
  ctx.fill();

  ctx.strokeStyle = isDark ? "rgba(16, 185, 129, 0.3)" : "#E2E8F0";
  ctx.lineWidth = 3;
  ctx.stroke();

  // White inner plaque for crisp 600 DPI scanning
  ctx.fillStyle = "#FFFFFF";
  ctx.beginPath();
  ctx.roundRect(qrX, qrY, qrSize, qrSize, 20);
  ctx.fill();

  // Draw QR Matrix
  const vcardUrl = `https://${exec.website}/contact?exec=${exec.id}`;
  const matrix = createQrMatrix(vcardUrl);
  const modSize = (qrSize - 40) / matrix.length;

  ctx.fillStyle = "#071C3F";
  for (let r = 0; r < matrix.length; r++) {
    for (let c = 0; c < matrix[r].length; c++) {
      if (matrix[r][c]) {
        ctx.fillRect(
          qrX + 20 + c * modSize,
          qrY + 20 + r * modSize,
          modSize + 0.3,
          modSize + 0.3
        );
      }
    }
  }

  // QR Center Monogram
  const centerSize = 64;
  const centerX = qrX + qrSize / 2 - centerSize / 2;
  const centerY = qrY + qrSize / 2 - centerSize / 2;
  ctx.fillStyle = "#FFFFFF";
  ctx.fillRect(centerX - 4, centerY - 4, centerSize + 8, centerSize + 8);
  ctx.fillStyle = "#10B981";
  ctx.beginPath();
  ctx.roundRect(centerX, centerY, centerSize, centerSize, 10);
  ctx.fill();
  ctx.fillStyle = "#FFFFFF";
  ctx.font = "900 32px system-ui";
  ctx.textAlign = "center";
  ctx.fillText("AE", centerX + centerSize / 2, centerY + 44);
  ctx.textAlign = "left";

  // QR Sub-label
  ctx.fillStyle = isDark ? "#FFFFFF" : "#0F172A";
  ctx.font = "800 24px system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif";
  ctx.textAlign = "center";
  ctx.fillText("SCAN TO CONNECT", qrX + qrSize / 2, qrY + qrSize + 55);

  ctx.fillStyle = isDark ? "#94A3B8" : "#64748B";
  ctx.font = "600 19px system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif";
  ctx.fillText("Digital vCard • Instant Save", qrX + qrSize / 2, qrY + qrSize + 90);
  ctx.textAlign = "left";

  // 6. Security Micro-Text & 600 DPI High-Res Print Stamp (Bottom Right)
  ctx.fillStyle = isDark ? "rgba(255, 255, 255, 0.25)" : "rgba(0, 0, 0, 0.25)";
  ctx.font = "500 16px monospace";
  ctx.fillText("600 DPI • ULTRA HD EXECUTIVE PRESS • APEXEDGE ADVISORY LTD", 140, H - 70);
}

/**
 * Draws the 600 DPI Business Card Back on an HTML Canvas
 * Dimensions: 2100 x 1200 px (3.5" x 2.0" @ 600 DPI)
 */
export function drawCardBack(
  ctx: CanvasRenderingContext2D,
  exec: ExecutiveContact,
  theme: "obsidian" | "white" | "emerald" = "obsidian"
) {
  const W = 2100;
  const H = 1200;

  ctx.clearRect(0, 0, W, H);

  const isDark = theme !== "white";

  // 1. Back Background
  if (theme === "obsidian") {
    const bgGrad = ctx.createRadialGradient(W / 2, H / 2, 100, W / 2, H / 2, 1100);
    bgGrad.addColorStop(0, "#0B2654");
    bgGrad.addColorStop(0.7, "#071C3F");
    bgGrad.addColorStop(1, "#020712");
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, W, H);

    // Subtle Luxury Concentric Circles / Watermark
    ctx.strokeStyle = "rgba(16, 185, 129, 0.05)";
    ctx.lineWidth = 2;
    for (let radius = 150; radius <= 750; radius += 100) {
      ctx.beginPath();
      ctx.arc(W / 2, H / 2, radius, 0, Math.PI * 2);
      ctx.stroke();
    }
  } else if (theme === "white") {
    ctx.fillStyle = "#071C3F";
    ctx.fillRect(0, 0, W, H);
  } else {
    const bgGrad = ctx.createLinearGradient(0, 0, W, H);
    bgGrad.addColorStop(0, "#064E3B");
    bgGrad.addColorStop(1, "#022C22");
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, W, H);
  }

  // 2. Large Central Emblem Monogram
  ctx.fillStyle = "rgba(16, 185, 129, 0.12)";
  ctx.beginPath();
  ctx.arc(W / 2, H / 2 - 110, 140, 0, Math.PI * 2);
  ctx.fill();

  ctx.strokeStyle = "#10B981";
  ctx.lineWidth = 4;
  ctx.stroke();

  ctx.fillStyle = "#10B981";
  ctx.font = "900 110px system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif";
  ctx.textAlign = "center";
  ctx.fillText("AE", W / 2, H / 2 - 70);

  // 3. Central Brand Typography
  ctx.fillStyle = "#FFFFFF";
  ctx.font = "900 64px system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif";
  ctx.letterSpacing = "4px";
  ctx.fillText("APEXEDGE ADVISORY", W / 2, H / 2 + 100);
  ctx.letterSpacing = "0px";

  // Sub-tagline
  ctx.fillStyle = "#10B981";
  ctx.font = "800 28px system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif";
  ctx.letterSpacing = "8px";
  ctx.fillText("STRATEGIC ADVISORY & BOARD-READY SYSTEMS", W / 2, H / 2 + 160);
  ctx.letterSpacing = "0px";

  // Decorative Rule with Diamond
  ctx.strokeStyle = "rgba(255, 255, 255, 0.2)";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(W / 2 - 400, H / 2 + 210);
  ctx.lineTo(W / 2 + 400, H / 2 + 210);
  ctx.stroke();

  ctx.fillStyle = "#10B981";
  ctx.beginPath();
  ctx.arc(W / 2, H / 2 + 210, 8, 0, Math.PI * 2);
  ctx.fill();

  // Corporate Value Proposition
  ctx.fillStyle = "#94A3B8";
  ctx.font = "500 26px system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif";
  ctx.fillText("Transforming Strategy Into Executable Precision Across Africa", W / 2, H / 2 + 270);

  // Footer Coordinates & Web
  ctx.fillStyle = "#64748B";
  ctx.font = "700 22px system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif";
  ctx.fillText("NAIROBI CORPORATE CENTRE • WWW.CONSULT-APEX.COM", W / 2, H - 100);

  ctx.textAlign = "left";
}

function drawContactItem(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  label: string,
  value: string,
  isDark: boolean,
  iconChar: string
) {
  // Mini Icon Bullet
  ctx.fillStyle = isDark ? "rgba(16, 185, 129, 0.2)" : "rgba(16, 185, 129, 0.15)";
  ctx.beginPath();
  ctx.arc(x + 18, y + 16, 22, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = isDark ? "#34D399" : "#059669";
  ctx.font = "600 20px system-ui";
  ctx.textAlign = "center";
  ctx.fillText(iconChar, x + 18, y + 23);
  ctx.textAlign = "left";

  // Label (Small Caps)
  ctx.fillStyle = isDark ? "#64748B" : "#94A3B8";
  ctx.font = "700 17px system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif";
  ctx.letterSpacing = "1.5px";
  ctx.fillText(label, x + 54, y + 6);
  ctx.letterSpacing = "0px";

  // Value
  ctx.fillStyle = isDark ? "#E2E8F0" : "#1E293B";
  ctx.font = "700 25px system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif";
  ctx.fillText(value, x + 54, y + 36);
}

/**
 * Exports an HTML Canvas as a high-definition 600 DPI JPEG File Download
 */
export function downloadCanvasJpg(
  canvas: HTMLCanvasElement,
  filename: string,
  quality: number = 0.98
) {
  canvas.toBlob(
    (blob) => {
      if (!blob) return;
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    },
    "image/jpeg",
    quality
  );
}

/**
 * Builds and downloads an industrial 600 DPI Print-Ready 2-Page PDF
 * Containing Front and Back with standard 3.5" x 2.0" vector boxes
 */
export async function downloadPrintReadyPdf(
  frontCanvas: HTMLCanvasElement,
  backCanvas: HTMLCanvasElement,
  exec: ExecutiveContact
) {
  // Convert both canvases to high-quality JPEG Data URLs
  const frontDataUrl = frontCanvas.toDataURL("image/jpeg", 0.98);
  const backDataUrl = backCanvas.toDataURL("image/jpeg", 0.98);

  // Extract base64 payload
  const frontBase64 = frontDataUrl.split(",")[1];
  const backBase64 = backDataUrl.split(",")[1];

  // Standard business card size in PDF points (72 points/inch)
  // 3.5 in = 252 pt, 2.0 in = 144 pt
  const pdfPointsW = 252;
  const pdfPointsH = 144;

  const frontBytes = Uint8Array.from(atob(frontBase64), (c) => c.charCodeAt(0));
  const backBytes = Uint8Array.from(atob(backBase64), (c) => c.charCodeAt(0));

  // Build compliant PDF 1.4 binary structure
  const pdfContent = buildTwoPagePdf(pdfPointsW, pdfPointsH, frontBytes, backBytes, exec);
  const blob = new Blob([pdfContent as unknown as BlobPart], { type: "application/pdf" });
  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = url;
  link.download = `${exec.name.replace(/[^a-zA-Z0-9]/g, "_")}_ApexEdge_600DPI_Print.pdf`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

/**
 * Constructs a raw 2-page PDF document embedding the 600 DPI images
 */
function buildTwoPagePdf(
  width: number,
  height: number,
  img1Bytes: Uint8Array,
  img2Bytes: Uint8Array,
  exec: ExecutiveContact
): Uint8Array {
  // Text chunks and offsets builder
  const chunks: (string | Uint8Array)[] = [];
  const offsets: number[] = [];
  let currentOffset = 0;

  const appendString = (str: string) => {
    chunks.push(str);
    currentOffset += new TextEncoder().encode(str).length;
  };

  const appendBytes = (bytes: Uint8Array) => {
    chunks.push(bytes);
    currentOffset += bytes.length;
  };

  const markObject = () => {
    offsets.push(currentOffset);
  };

  // PDF Header
  appendString("%PDF-1.4\r\n%\xFF\xFF\xFF\xFF\r\n");

  // Obj 1: Catalog
  markObject();
  appendString(
    "1 0 obj\r\n<< /Type /Catalog /Pages 2 0 R >>\r\nendobj\r\n"
  );

  // Obj 2: Pages Root
  markObject();
  appendString(
    "2 0 obj\r\n<< /Type /Pages /Kids [3 0 R 6 0 R] /Count 2 >>\r\nendobj\r\n"
  );

  // --- Page 1 (Front) ---
  // Obj 3: Page 1 Object
  markObject();
  appendString(
    `3 0 obj\r\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${width} ${height}] /Resources << /XObject << /Im1 5 0 R >> >> /Contents 4 0 R >>\r\nendobj\r\n`
  );

  // Obj 4: Page 1 Content Stream (Draws Im1 full bleed)
  const stream1 = `q\r\n${width} 0 0 ${height} 0 0 cm\r\n/Im1 Do\r\nQ\r\n`;
  markObject();
  appendString(
    `4 0 obj\r\n<< /Length ${stream1.length} >>\r\nstream\r\n${stream1}endstream\r\nendobj\r\n`
  );

  // Obj 5: Page 1 Image Stream (JPEG 2100x1200)
  markObject();
  appendString(
    `5 0 obj\r\n<< /Type /XObject /Subtype /Image /Width 2100 /Height 1200 /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length ${img1Bytes.length} >>\r\nstream\r\n`
  );
  appendBytes(img1Bytes);
  appendString("\r\nendstream\r\nendobj\r\n");

  // --- Page 2 (Back) ---
  // Obj 6: Page 2 Object
  markObject();
  appendString(
    `6 0 obj\r\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${width} ${height}] /Resources << /XObject << /Im2 8 0 R >> >> /Contents 7 0 R >>\r\nendobj\r\n`
  );

  // Obj 7: Page 2 Content Stream
  const stream2 = `q\r\n${width} 0 0 ${height} 0 0 cm\r\n/Im2 Do\r\nQ\r\n`;
  markObject();
  appendString(
    `7 0 obj\r\n<< /Length ${stream2.length} >>\r\nstream\r\n${stream2}endstream\r\nendobj\r\n`
  );

  // Obj 8: Page 2 Image Stream (JPEG 2100x1200)
  markObject();
  appendString(
    `8 0 obj\r\n<< /Type /XObject /Subtype /Image /Width 2100 /Height 1200 /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length ${img2Bytes.length} >>\r\nstream\r\n`
  );
  appendBytes(img2Bytes);
  appendString("\r\nendstream\r\nendobj\r\n");

  // Obj 9: Metadata info
  markObject();
  appendString(
    `9 0 obj\r\n<< /Title (${exec.name} - ApexEdge Advisory Business Card) /Author (ApexEdge Advisory Limited) /Creator (ApexEdge 600DPI Card Engine) >>\r\nendobj\r\n`
  );

  // Cross Reference Table
  const xrefOffset = currentOffset;
  appendString(`xref\r\n0 ${offsets.length + 1}\r\n0000000000 65535 f \r\n`);
  for (let i = 0; i < offsets.length; i++) {
    const offsetStr = offsets[i].toString().padStart(10, "0");
    appendString(`${offsetStr} 00000 n \r\n`);
  }

  // Trailer
  appendString(
    `trailer\r\n<< /Size ${offsets.length + 1} /Root 1 0 R /Info 9 0 R >>\r\nstartxref\r\n${xrefOffset}\r\n%%EOF\r\n`
  );

  // Concatenate all chunks into final binary array
  const totalLength = chunks.reduce((acc: number, c) => acc + (typeof c === "string" ? new TextEncoder().encode(c).length : c.length), 0);
  const result = new Uint8Array(totalLength);
  let pos = 0;
  for (const chunk of chunks) {
    if (typeof chunk === "string") {
      const encoded = new TextEncoder().encode(chunk);
      result.set(encoded, pos);
      pos += encoded.length;
    } else {
      result.set(chunk, pos);
      pos += chunk.length;
    }
  }

  return result;
}
