/* ══════════════════════════════
   PROJECT DATA
══════════════════════════════ */
const PROJECTS = [
  {
    num: "01",
    title: "Faisal Bidmos",
    desc: "The portfolio of Faisal Bidmos presents a refined and professional digital presence that reflects expertise, credibility, and attention to detail. It highlights services, achievements, and client-focused solutions in a clear and sophisticated manner. Every element is designed to communicate trust, professionalism, and a commitment to delivering high quality results.",
    tags: ["Portfolio", "Web Design", "GSAP"],
    img: "image/Screenshot 2026-04-03 at 7.13.38 PM.png",
    link: "https://faisalbidmos.com/",
    // Mars-like: rusty red rocky world
    texURL:
      "https://upload.wikimedia.org/wikipedia/commons/0/02/OSIRIS_Mars_true_color.jpg",
    dotColor: "#c1440e",
    tilt: 0.34, // axial tilt radians
  },
  {
    num: "02",
    title: "ABP Industries",
    desc: "This platform is designed to support modern agriculture through accessible information, practical solutions, and reliable services. It connects farmers, investors, and agricultural enthusiasts to resources that improve productivity and sustainability. From crop management insights to market opportunities, the website serves as a digital hub for growth, innovation, and smarter farming practices.",
    tags: ["Brand Website", "Agriculture"],
    img: "image/Screenshot 2026-04-03 at 7.14.51 PM.png",
    link: "https://abpindustries.netlify.app/",
    // Earth-like: blue/green with clouds
    texURL:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/WorldMap-A_non-Frame.png/1280px-WorldMap-A_non-Frame.png",
    dotColor: "#4a8fe8",
    tilt: 0.41,
  },
  {
    num: "03",
    title: "Qpat Solutions",
    desc: "This website provides a structured and engaging environment for learning and academic development. It offers students and educators access to essential resources, guidance, and tools that enhance knowledge and performance. Built with clarity and usability in mind, the platform encourages continuous learning while making educational content easy to navigate and understand.",
    tags: ["Institutional", "Education"],
    img: "image/Screenshot 2026-04-03 at 7.14.04 PM.png",
    link: "https://qpat.netlify.app/",
    // Venus-like: pale yellow/tan cloud world
    texURL:
      "https://upload.wikimedia.org/wikipedia/commons/e/e5/Venus-real_color.jpg",
    dotColor: "#e8c97a",
    tilt: 0.05,
  },
  {
    num: "04",
    title: "Pixel Journey",
    desc: " I don’t build boring websites.This portfolio is designed like a game and also includes games it is interactive, responsive, and built to be explored. Every element, animation, and transition is intentional, showcasing my ability to create fast, engaging, and visually striking web experiences. This is where creativity meets code.",
    tags: ["Portfolio", "2D Gameverse"],
    img: "image/Screenshot 2026-04-03 at 7.13.04 PM.png",
    link: "https://amdev2.vercel.app",
    // Neptune-like: deep blue ice giant
    texURL:
      "https://upload.wikimedia.org/wikipedia/commons/5/56/Neptune_Full.jpg",
    dotColor: "#5b7fe8",
    tilt: 0.1,
  },
  {
    num: "05",
    title: "UrbanHive",
    desc: "Community-driven platform for urban dwellers — warmth, accessibility, and strong visual hierarchy that guides users naturally.",
    tags: ["Clothing Brand", "Shop", "Dashboard"],
    img: "image/Screenshot 2026-04-03 at 7.13.21 PM.png",
    link: "https://urbanhive-chi.vercel.app/",
    // Jupiter-like: banded gas giant amber/tan
    texURL:
      "https://upload.wikimedia.org/wikipedia/commons/2/2b/Jupiter_and_its_shrunken_Great_Red_Spot.jpg",
    dotColor: "#c8956a",
    tilt: 0.054,
  },

  {
    num: "06",
    title: "Am Folio",
    desc: "This is my personal website where I showcase my work, skills, and projects in a clear and simple way. It gives an overview of what I do as a frontend developer, highlighting my ability to build responsive and interactive web experiences. The design is clean and easy to navigate, making it straightforward to explore my projects and understand my approach to development.",
    tags: ["PersonaL Portfolio", "GSAP", "THREE JS"],
    img: "image/Screenshot 2026-04-03 at 7.12.53 PM.png",
    link: "https://urbanhive-chi.vercel.app/",
    // Jupiter-like: banded gas giant amber/tan
    texURL: "https://commons.wikimedia.org/wiki/File:MARS_THE_RED_PLANET.jpg",
    dotColor: "#ff5741ff",
    tilt: 0.3,
  },
];

/* ══════════════════════════════
   LOADER CHARS
══════════════════════════════ */
const lwEl = document.getElementById("lw");
"My Works".split("").forEach((ch, i) => {
  const s = document.createElement("span");
  s.className = "lc";
  s.textContent = ch === " " ? "\u00A0" : ch;
  s.style.animationDelay = 0.05 + i * 0.055 + "s";
  lwEl.appendChild(s);
});

/* ══════════════════════════════
   CURSOR
══════════════════════════════ */
const cdEl = document.getElementById("cd"),
  crEl = document.getElementById("cr");
let crx = 0,
  cry = 0;
document.addEventListener("mousemove", (e) => {
  cdEl.style.left = e.clientX + "px";
  cdEl.style.top = e.clientY + "px";
  gsap.to(
    { x: crx, y: cry },
    {
      x: e.clientX,
      y: e.clientY,
      duration: 0.14,
      ease: "power2.out",
      onUpdate() {
        crEl.style.left = this.targets()[0].x + "px";
        crEl.style.top = this.targets()[0].y + "px";
        crx = this.targets()[0].x;
        cry = this.targets()[0].y;
      },
    },
  );
});
document.querySelectorAll("a,button").forEach((el) => {
  el.addEventListener("mouseenter", () => document.body.classList.add("hov"));
  el.addEventListener("mouseleave", () =>
    document.body.classList.remove("hov"),
  );
});

/* ══════════════════════════════
   PANEL
══════════════════════════════ */
const panel = document.getElementById("panel");
function openPanel(idx) {
  const p = PROJECTS[idx];
  document.getElementById("pn").textContent = "Project 0" + p.num;
  document.getElementById("pt").textContent = p.title;
  document.getElementById("pd").textContent = p.desc;
  document.getElementById("pi").src = p.img;
  document.getElementById("pi").alt = p.title;
  document.getElementById("p-dot").style.background = p.dotColor;
  const lk = document.getElementById("pv");
  lk.href = p.link;
  lk.style.display = p.link === "#" ? "none" : "inline-flex";
  document.getElementById("ptags").innerHTML = p.tags
    .map((t) => `<span class="ptag">${t}</span>`)
    .join("");
  panel.classList.add("open");
  document.getElementById("ctitle").classList.add("gone");
}
function closePanel() {
  panel.classList.remove("open");
  document.getElementById("ctitle").classList.remove("gone");
}
document.getElementById("pc").addEventListener("click", closePanel);
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closePanel();
});

/* ══════════════════════════════
   TOOLTIP
══════════════════════════════ */
const tip = document.getElementById("tip");
function showTip(name, tag) {
  document.getElementById("tip-name").textContent = name;
  document.getElementById("tip-tag").textContent = tag;
  tip.classList.add("show");
}
function hideTip() {
  tip.classList.remove("show");
}
document.addEventListener("mousemove", (e) => {
  tip.style.left = e.clientX + 20 + "px";
  tip.style.top = e.clientY - 16 + "px";
});

/* ══════════════════════════════
   THREE.JS
══════════════════════════════ */
const canvas = document.getElementById("c");
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x02020a, 1);

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  50,
  window.innerWidth / window.innerHeight,
  0.1,
  500,
);
camera.position.set(0, 16, 26);
camera.lookAt(0, 0, 0);

/* ─── MILKY WAY SKYBOX ─── */
// Build a star field with two layers: tiny white + faint gold tinted
function makeStarField(count, spread, size, color, opacity) {
  const geo = new THREE.BufferGeometry();
  const pos = new Float32Array(count * 3);
  for (let i = 0; i < count * 3; i++) pos[i] = (Math.random() - 0.5) * spread;
  geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
  const mat = new THREE.PointsMaterial({
    color,
    size,
    transparent: true,
    opacity,
    sizeAttenuation: true,
  });
  return new THREE.Points(geo, mat);
}
scene.add(makeStarField(4000, 400, 0.08, 0xffffff, 0.9));
scene.add(makeStarField(800, 300, 0.18, 0xffd59a, 0.55)); // warm giant stars
scene.add(makeStarField(300, 250, 0.28, 0xa0c4ff, 0.45)); // blue giants

/* Milky Way band — a large torus of hazy particles */
const mwGeo = new THREE.BufferGeometry();
const mwCount = 3500;
const mwPos = new Float32Array(mwCount * 3);
for (let i = 0; i < mwCount; i++) {
  const theta = Math.random() * Math.PI * 2;
  const r = 60 + Math.random() * 80;
  const y = (Math.random() - 0.5) * 18;
  mwPos[i * 3] = Math.cos(theta) * r;
  mwPos[i * 3 + 1] = y;
  mwPos[i * 3 + 2] = Math.sin(theta) * r;
}
mwGeo.setAttribute("position", new THREE.BufferAttribute(mwPos, 3));
scene.add(
  new THREE.Points(
    mwGeo,
    new THREE.PointsMaterial({
      color: 0xc8d8ff,
      size: 0.12,
      transparent: true,
      opacity: 0.25,
      sizeAttenuation: true,
    }),
  ),
);

/* ─── NEBULA COLOUR WASH (large coloured point clouds) ─── */
const nebulaColors = [0x3a1a6a, 0x0a2a5a, 0x6a1a2a];
nebulaColors.forEach((col, i) => {
  const ng = new THREE.BufferGeometry();
  const np = new Float32Array(600 * 3);
  const cx = (i - 1) * 80,
    cy = (Math.random() - 0.5) * 30,
    cz = (Math.random() - 0.5) * 80;
  for (let j = 0; j < 600; j++) {
    np[j * 3] = cx + (Math.random() - 0.5) * 90;
    np[j * 3 + 1] = cy + (Math.random() - 0.5) * 40;
    np[j * 3 + 2] = cz + (Math.random() - 0.5) * 90;
  }
  ng.setAttribute("position", new THREE.BufferAttribute(np, 3));
  scene.add(
    new THREE.Points(
      ng,
      new THREE.PointsMaterial({
        color: col,
        size: 0.35,
        transparent: true,
        opacity: 0.18,
        sizeAttenuation: true,
      }),
    ),
  );
});

/* ─── SUN (textured) ─── */
// Use a canvas to draw a radial gradient sun surface
const sunCanvas = document.createElement("canvas");
sunCanvas.width = 512;
sunCanvas.height = 512;
const sc = sunCanvas.getContext("2d");
const sg = sc.createRadialGradient(256, 256, 20, 256, 256, 256);
sg.addColorStop(0, "#fff9d0");
sg.addColorStop(0.3, "#ffe566");
sg.addColorStop(0.65, "#ff9a22");
sg.addColorStop(1, "#c94a00");
sc.fillStyle = sg;
sc.fillRect(0, 0, 512, 512);
// Add some solar texture noise
for (let i = 0; i < 800; i++) {
  const x = Math.random() * 512,
    y = Math.random() * 512;
  const r = Math.random() * 3 + 1;
  const alpha = Math.random() * 0.35;
  sc.beginPath();
  sc.arc(x, y, r, 0, Math.PI * 2);
  sc.fillStyle = `rgba(255,${180 + Math.floor(Math.random() * 75)},0,${alpha})`;
  sc.fill();
}
const sunTex = new THREE.CanvasTexture(sunCanvas);
const sun = new THREE.Mesh(
  new THREE.SphereGeometry(1.9, 64, 64),
  new THREE.MeshBasicMaterial({ map: sunTex }),
);
scene.add(sun);

// Sun corona layers
[
  { r: 2.5, o: 0.22, c: 0xffe566 },
  { r: 3.5, o: 0.12, c: 0xff8800 },
  { r: 5.0, o: 0.06, c: 0xff4400 },
  { r: 7.5, o: 0.025, c: 0xff2200 },
].forEach((g) => {
  scene.add(
    new THREE.Mesh(
      new THREE.SphereGeometry(g.r, 32, 32),
      new THREE.MeshBasicMaterial({
        color: g.c,
        transparent: true,
        opacity: g.o,
        depthWrite: false,
      }),
    ),
  );
});

// Sun light
const sunPt = new THREE.PointLight(0xfff4d0, 4.5, 120);
scene.add(sunPt);
const sunPt2 = new THREE.PointLight(0xff8800, 1.5, 60);
scene.add(sunPt2); // warm secondary
scene.add(new THREE.AmbientLight(0x080820, 1.2));

/* ─── PLANETS ─── */
const ORBITS = [
  { radius: 6.0, speed: 0.48, size: 0.5, tilt: PROJECTS[0].tilt },
  { radius: 7.2, speed: 0.32, size: 0.65, tilt: PROJECTS[1].tilt },
  { radius: 9.5, speed: 0.22, size: 0.55, tilt: PROJECTS[2].tilt },
  { radius: 12.0, speed: 0.15, size: 0.75, tilt: PROJECTS[3].tilt },
  { radius: 13.8, speed: 0.1, size: 0.88, tilt: PROJECTS[4].tilt },
  { radius: 10.2, speed: 0.05, size: 0.98, tilt: PROJECTS[5].tilt },
];

const texLoader = new THREE.TextureLoader();
texLoader.crossOrigin = "anonymous";

const planets = [];
const hitMeshes = [];

ORBITS.forEach((orb, i) => {
  /* orbit ring — thin dashed feel via two rings */
  const rMat = new THREE.MeshBasicMaterial({
    color: 0x2a3050,
    side: THREE.DoubleSide,
    transparent: true,
    opacity: 0.3,
  });
  const ring = new THREE.Mesh(
    new THREE.RingGeometry(orb.radius - 0.018, orb.radius + 0.018, 140),
    rMat,
  );
  ring.rotation.x = Math.PI / 2;
  scene.add(ring);

  /* planet sphere */
  const pGeo = new THREE.SphereGeometry(orb.size, 64, 64);

  // Load real texture — fallback to coloured procedural if it fails
  const fallbackColors = [0xc1440e, 0x4a8fe8, 0xe8c97a, 0x5b7fe8, 0xc8956a];
  const pMat = new THREE.MeshStandardMaterial({
    color: fallbackColors[i],
    roughness: 0.75,
    metalness: 0.05,
    transparent: true,
    opacity: 0,
  });
  const planet = new THREE.Mesh(pGeo, pMat);

  // load texture async
  texLoader.load(
    PROJECTS[i].texURL,
    (tex) => {
      tex.colorSpace = THREE.SRGBColorSpace;
      pMat.map = tex;
      pMat.color.set(0xffffff);
      pMat.needsUpdate = true;
    },
    undefined,
    () => {
      /* on error — keep fallback color */
    },
  );

  /* atmosphere glow (coloured haze) */
  const atmColors = [0xff6633, 0x66aaff, 0xffeeaa, 0x5577ee, 0xddaa77];
  const atm = new THREE.Mesh(
    new THREE.SphereGeometry(orb.size * 1.12, 32, 32),
    new THREE.MeshBasicMaterial({
      color: atmColors[i],
      transparent: true,
      opacity: 0.08,
      depthWrite: false,
      side: THREE.FrontSide,
    }),
  );
  planet.add(atm);

  /* clouds layer (slightly larger, slow counter-rotate) */
  const cloudCanvas = document.createElement("canvas");
  cloudCanvas.width = 256;
  cloudCanvas.height = 256;
  const cctx = cloudCanvas.getContext("2d");
  for (let c = 0; c < 120; c++) {
    const cx = Math.random() * 256,
      cy = Math.random() * 256,
      cw = 10 + Math.random() * 40,
      ch = 4 + Math.random() * 14;
    cctx.fillStyle = `rgba(255,255,255,${0.04 + Math.random() * 0.09})`;
    cctx.beginPath();
    cctx.ellipse(cx, cy, cw, ch, Math.random() * Math.PI, 0, Math.PI * 2);
    cctx.fill();
  }
  const cloudTex = new THREE.CanvasTexture(cloudCanvas);
  const clouds = new THREE.Mesh(
    new THREE.SphereGeometry(orb.size * 1.008, 32, 32),
    new THREE.MeshBasicMaterial({
      map: cloudTex,
      transparent: true,
      opacity: 0.45,
      depthWrite: false,
    }),
  );
  planet.add(clouds);

  /* specular highlight (tiny bright spot from sun) */
  const specCanvas = document.createElement("canvas");
  specCanvas.width = 128;
  specCanvas.height = 128;
  const sctx = specCanvas.getContext("2d");
  const specGrad = sctx.createRadialGradient(38, 38, 0, 38, 38, 55);
  specGrad.addColorStop(0, "rgba(255,255,255,.18)");
  specGrad.addColorStop(1, "rgba(255,255,255,0)");
  sctx.fillStyle = specGrad;
  sctx.fillRect(0, 0, 128, 128);
  const specTex = new THREE.CanvasTexture(specCanvas);
  const spec = new THREE.Mesh(
    new THREE.SphereGeometry(orb.size * 1.002, 32, 32),
    new THREE.MeshBasicMaterial({
      map: specTex,
      transparent: true,
      opacity: 0.9,
      depthWrite: false,
    }),
  );
  planet.add(spec);

  /* hover halo ring around planet */
  const haloMat = new THREE.MeshBasicMaterial({
    color: atmColors[i],
    transparent: true,
    opacity: 0,
    depthWrite: false,
    side: THREE.DoubleSide,
  });
  const halo = new THREE.Mesh(
    new THREE.RingGeometry(orb.size * 1.6, orb.size * 1.72, 64),
    haloMat,
  );
  halo.rotation.x = Math.PI / 2;
  planet.add(halo);

  /* label */
  const lblC = document.createElement("canvas");
  lblC.width = 380;
  lblC.height = 80;
  const lctx = lblC.getContext("2d");
  lctx.font = '500 30px "DM Mono",monospace';
  lctx.fillStyle = "rgba(240,237,230,.9)";
  lctx.fillText(PROJECTS[i].title, 14, 52);
  const lblTex = new THREE.CanvasTexture(lblC);
  const lbl = new THREE.Sprite(
    new THREE.SpriteMaterial({
      map: lblTex,
      transparent: true,
      opacity: 0,
      depthWrite: false,
    }),
  );
  lbl.scale.set(3.8, 0.8, 1);
  lbl.position.set(0, orb.size + 0.75, 0);
  planet.add(lbl);

  /* invisible hit mesh for raycaster */
  const hit = new THREE.Mesh(
    new THREE.SphereGeometry(orb.size, 16, 16),
    new THREE.MeshBasicMaterial({ visible: false }),
  );
  planet.add(hit);
  hitMeshes.push({ mesh: hit, idx: i });

  /* pivot */
  const pivot = new THREE.Object3D();
  pivot.rotation.z = orb.tilt;
  pivot.rotation.y = (i / PROJECTS.length) * Math.PI * 2;
  planet.position.x = orb.radius;
  planet.rotation.z = orb.tilt;
  pivot.add(planet);
  scene.add(pivot);

  planets.push({
    pivot,
    planet,
    atm,
    clouds,
    halo,
    lbl,
    orb,
    idx: i,
    mat: pMat,
    angle: (i / PROJECTS.length) * Math.PI * 2,
  });
});

/* ─── ASTEROID BELT (between orbits 2 and 3) ─── */
const beltGeo = new THREE.BufferGeometry();
const beltN = 1200;
const beltPos = new Float32Array(beltN * 3);
for (let i = 0; i < beltN; i++) {
  const theta = Math.random() * Math.PI * 2;
  const r = 8.1 + Math.random() * 0.9;
  const y = (Math.random() - 0.5) * 0.35;
  beltPos[i * 3] = Math.cos(theta) * r;
  beltPos[i * 3 + 1] = y;
  beltPos[i * 3 + 2] = Math.sin(theta) * r;
}
beltGeo.setAttribute("position", new THREE.BufferAttribute(beltPos, 3));
scene.add(
  new THREE.Points(
    beltGeo,
    new THREE.PointsMaterial({
      color: 0x887766,
      size: 0.04,
      transparent: true,
      opacity: 0.55,
    }),
  ),
);

/* ─── RAYCASTER ─── */
const ray = new THREE.Raycaster();
const m2 = new THREE.Vector2();
document.addEventListener("mousemove", (e) => {
  m2.x = (e.clientX / window.innerWidth) * 2 - 1;
  m2.y = -(e.clientY / window.innerHeight) * 2 + 1;
});

/* ─── CAMERA CONTROLS ─── */
let camTh = 0.45,
  camPh = 0.68,
  camR = 28;
let tTh = camTh,
  tPh = camPh,
  tR = camR;
let dragging = false,
  lmx = 0,
  lmy = 0,
  didDrag = false;

canvas.addEventListener("mousedown", (e) => {
  dragging = true;
  lmx = e.clientX;
  lmy = e.clientY;
  didDrag = false;
});
window.addEventListener("mouseup", () => {
  dragging = false;
});
window.addEventListener("mousemove", (e) => {
  if (!dragging) return;
  if (Math.abs(e.clientX - lmx) + Math.abs(e.clientY - lmy) > 4) didDrag = true;
  tTh -= (e.clientX - lmx) * 0.007;
  tPh = Math.max(0.1, Math.min(1.5, tPh + (e.clientY - lmy) * 0.006));
  lmx = e.clientX;
  lmy = e.clientY;
  document.getElementById("ctitle").classList.add("gone");
});
window.addEventListener(
  "wheel",
  (e) => {
    tR = Math.max(7, Math.min(45, tR + e.deltaY * 0.025));
  },
  { passive: true },
);

canvas.addEventListener("click", () => {
  if (didDrag) return;
  ray.setFromCamera(m2, camera);
  const hits = ray.intersectObjects(hitMeshes.map((h) => h.mesh));
  if (hits.length) {
    const h = hitMeshes.find((h) => h.mesh === hits[0].object);
    if (h) openPanel(h.idx);
  }
});

// touch
let tsx = 0,
  tsy = 0,
  tsTh = 0,
  tsPh = 0;
canvas.addEventListener(
  "touchstart",
  (e) => {
    tsx = e.touches[0].clientX;
    tsy = e.touches[0].clientY;
    tsTh = tTh;
    tsPh = tPh;
  },
  { passive: true },
);
canvas.addEventListener(
  "touchmove",
  (e) => {
    tTh = tsTh - (e.touches[0].clientX - tsx) * 0.009;
    tPh = Math.max(
      0.1,
      Math.min(1.5, tsPh + (e.touches[0].clientY - tsy) * 0.007),
    );
  },
  { passive: true },
);
canvas.addEventListener("touchend", (e) => {
  if (
    Math.abs(e.changedTouches[0].clientX - tsx) +
      Math.abs(e.changedTouches[0].clientY - tsy) <
    10
  ) {
    m2.x = (e.changedTouches[0].clientX / window.innerWidth) * 2 - 1;
    m2.y = -(e.changedTouches[0].clientY / window.innerHeight) * 2 + 1;
    ray.setFromCamera(m2, camera);
    const hits = ray.intersectObjects(hitMeshes.map((h) => h.mesh));
    if (hits.length) {
      const h = hitMeshes.find((h) => h.mesh === hits[0].object);
      if (h) openPanel(h.idx);
    }
  }
});

/* ─── ANIMATE ─── */
const clock = new THREE.Clock();
let intro = 0,
  started = false,
  hovP = null;

function tick() {
  requestAnimationFrame(tick);
  if (!started) return;
  const t = clock.getElapsedTime();
  intro = Math.min(1, intro + 0.004);

  // smooth camera
  camTh += (tTh - camTh) * 0.055;
  camPh += (tPh - camPh) * 0.055;
  camR += (tR - camR) * 0.06;
  camera.position.x = camR * Math.sin(camPh) * Math.sin(camTh);
  camera.position.y = camR * Math.cos(camPh);
  camera.position.z = camR * Math.sin(camPh) * Math.cos(camTh);
  camera.lookAt(0, 0, 0);

  // sun animation
  sun.rotation.y += 0.0015;
  const pulse = 1 + Math.sin(t * 1.6) * 0.03;
  sun.scale.setScalar(pulse);
  sunPt.intensity = 4.2 + Math.sin(t * 1.1) * 0.4;
  sunPt2.intensity = 1.4 + Math.sin(t * 0.9 + 1) * 0.3;

  // hover detection
  ray.setFromCamera(m2, camera);
  const hits = ray.intersectObjects(hitMeshes.map((h) => h.mesh));
  const newH = hits.length
    ? planets[hitMeshes.find((h) => h.mesh === hits[0].object)?.idx]
    : null;

  if (newH !== hovP) {
    if (hovP) {
      gsap.to(hovP.planet.scale, {
        x: 1,
        y: 1,
        z: 1,
        duration: 0.45,
        ease: "power2.out",
      });
      gsap.to(hovP.atm.material, { opacity: 0.08, duration: 0.3 });
      gsap.to(hovP.lbl.material, { opacity: 0, duration: 0.25 });
      gsap.to(hovP.halo.material, { opacity: 0, duration: 0.3 });
      document.body.classList.remove("hov");
      hideTip();
    }
    hovP = newH;
    if (hovP) {
      gsap.to(hovP.planet.scale, {
        x: 1.28,
        y: 1.28,
        z: 1.28,
        duration: 0.5,
        ease: "back.out(2)",
      });
      gsap.to(hovP.atm.material, { opacity: 0.25, duration: 0.35 });
      gsap.to(hovP.lbl.material, { opacity: 1, duration: 0.3 });
      gsap.to(hovP.halo.material, { opacity: 0.7, duration: 0.35 });
      document.body.classList.add("hov");
      showTip(PROJECTS[hovP.idx].title, PROJECTS[hovP.idx].tags[0]);
    }
  }

  // per-planet
  planets.forEach((pd, i) => {
    const ease = 1 - Math.pow(1 - Math.min(1, intro * 1.7 - i * 0.13), 3);
    pd.mat.opacity = Math.max(0, ease);
    pd.angle += pd.orb.speed * 0.007;
    pd.pivot.rotation.y = pd.angle;
    pd.planet.rotation.y += 0.004;
    pd.clouds.rotation.y -= 0.002; // clouds drift opposite
    pd.halo.rotation.z += 0.008;
    pd.halo.rotation.x = Math.PI / 2 + Math.sin(t * 0.5 + i) * 0.05; // slight wobble
  });

  renderer.render(scene, camera);
}

/* ─── LAUNCH ─── */
setTimeout(() => {
  document.getElementById("loader").classList.add("out");
  started = true;
  tick();
  setTimeout(() => {
    document.getElementById("hint").classList.add("show");
    document.getElementById("ctitle").classList.add("show");
  }, 700);
}, 2200);

window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

document.body.style.opacity = "0";
window.addEventListener("load", () =>
  gsap.to(document.body, { opacity: 1, duration: 0.5 }),
);
