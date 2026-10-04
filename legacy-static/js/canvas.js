/**
 * RISHABH SRIVASTAVA - MOTION GRAPHICS ENGINE
 * Interactive Neural Constellation & Particle Waveform
 */

(function () {
  const canvas = document.getElementById('motion-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  let mouse = {
    x: width / 2,
    y: height / 2,
    radius: 160,
    isActive: false,
  };

  // Particles config
  const isMobile = width < 768;
  const particleCount = isMobile ? 40 : 85;
  const connectionDistance = isMobile ? 100 : 140;
  const particles = [];

  const colors = [
    'rgba(251, 208, 80, 0.65)',  // Warm Golden Yellow (Orange Yellow Crayola)
    'rgba(218, 178, 77, 0.55)',  // Vegas Gold
    'rgba(255, 255, 255, 0.35)', // Soft Star White
    'rgba(251, 196, 52, 0.45)'   // Amber Glow
  ];

  class Particle {
    constructor() {
      this.init();
    }

    init() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.vx = (Math.random() - 0.5) * 0.7;
      this.vy = (Math.random() - 0.5) * 0.7;
      this.size = Math.random() * 2 + 1;
      this.color = colors[Math.floor(Math.random() * colors.length)];
      this.baseAlpha = Math.random() * 0.5 + 0.3;
      this.pulseSpeed = Math.random() * 0.02 + 0.01;
      this.pulseVal = Math.random() * Math.PI;
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;

      // Bounce at screen edges
      if (this.x < 0 || this.x > width) this.vx *= -1;
      if (this.y < 0 || this.y > height) this.vy *= -1;

      // Pulse size
      this.pulseVal += this.pulseSpeed;
      const currentSize = this.size + Math.sin(this.pulseVal) * 0.6;

      // Mouse proximity interaction
      if (mouse.isActive) {
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const dist = Math.hypot(dx, dy);

        if (dist < mouse.radius) {
          const force = (mouse.radius - dist) / mouse.radius;
          const angle = Math.atan2(dy, dx);
          // Push particles slightly away with spring effect
          this.x -= Math.cos(angle) * force * 2.5;
          this.y -= Math.sin(angle) * force * 2.5;
        }
      }

      this.currentSize = Math.max(0.8, currentSize);
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.currentSize, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.shadowBlur = 8;
      ctx.shadowColor = this.color;
      ctx.fill();
      ctx.shadowBlur = 0;
    }
  }

  // Populate particles
  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }

  // Draw connecting filaments
  function connectFilaments() {
    for (let a = 0; a < particles.length; a++) {
      for (let b = a + 1; b < particles.length; b++) {
        const dx = particles[a].x - particles[b].x;
        const dy = particles[a].y - particles[b].y;
        const dist = Math.hypot(dx, dy);

        if (dist < connectionDistance) {
          const alpha = 1 - dist / connectionDistance;
          ctx.beginPath();
          ctx.moveTo(particles[a].x, particles[a].y);
          ctx.lineTo(particles[b].x, particles[b].y);
          ctx.strokeStyle = `rgba(251, 208, 80, ${alpha * 0.14})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }

      // Connect to mouse pointer
      if (mouse.isActive) {
        const mdx = particles[a].x - mouse.x;
        const mdy = particles[a].y - mouse.y;
        const mdist = Math.hypot(mdx, mdy);
        if (mdist < mouse.radius) {
          const mAlpha = 1 - mdist / mouse.radius;
          ctx.beginPath();
          ctx.moveTo(particles[a].x, particles[a].y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = `rgba(251, 208, 80, ${mAlpha * 0.28})`;
          ctx.lineWidth = 1.2;
          ctx.stroke();
        }
      }
    }
  }

  // Subtle animated cyber grid lines
  let gridOffset = 0;
  function drawCyberGrid() {
    gridOffset = (gridOffset + 0.1) % 60;
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.015)';
    ctx.lineWidth = 1;

    const gridSize = 60;
    for (let x = 0; x <= width; x += gridSize) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
      ctx.stroke();
    }
    for (let y = gridOffset; y <= height; y += gridSize) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }
  }

  // Animation Loop
  let animationFrameId;
  function animate() {
    ctx.clearRect(0, 0, width, height);

    drawCyberGrid();

    particles.forEach((p) => {
      p.update();
      p.draw();
    });

    connectFilaments();

    animationFrameId = requestAnimationFrame(animate);
  }

  animate();

  // Listeners
  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
    mouse.isActive = true;
  });

  window.addEventListener('mouseleave', () => {
    mouse.isActive = false;
  });

  // Touch support for mobile motion
  window.addEventListener(
    'touchmove',
    (e) => {
      if (e.touches.length > 0) {
        mouse.x = e.touches[0].clientX;
        mouse.y = e.touches[0].clientY;
        mouse.isActive = true;
      }
    },
    { passive: true }
  );

  window.addEventListener('touchend', () => {
    mouse.isActive = false;
  });
})();
