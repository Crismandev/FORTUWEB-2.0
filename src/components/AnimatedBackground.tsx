'use client';
import { useEffect, useRef, useCallback } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  color: string;
}

const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number>();

  // Configurar canvas con optimizaciones
  const resizeCanvas = useCallback((canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D, isMobile: boolean) => {
    const dpr = Math.min(window.devicePixelRatio || 1, isMobile ? 1 : 2);
    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;
    canvas.style.width = window.innerWidth + 'px';
    canvas.style.height = window.innerHeight + 'px';
    ctx.scale(dpr, dpr);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Detectar dispositivos móviles para optimización
    const isMobile = window.innerWidth < 768;
    const isLowPerformance = navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4;

    const handleResize = () => resizeCanvas(canvas, ctx, isMobile);
    
    handleResize();
    window.addEventListener('resize', handleResize);

    // Colores que complementan la paleta verde de Fortunato
    const colors = [
      'rgba(34, 197, 94, 0.3)',   // Verde principal
      'rgba(16, 185, 129, 0.2)',  // Verde esmeralda
      'rgba(5, 150, 105, 0.25)',  // Verde más oscuro
      'rgba(52, 211, 153, 0.2)',  // Verde claro
      'rgba(110, 231, 183, 0.15)', // Verde muy claro
      'rgba(255, 255, 255, 0.1)',  // Blanco sutil
    ];

    // Crear partículas con optimización para móviles
    const createParticles = () => {
      const particles: Particle[] = [];
      let particleCount;
      
      if (isMobile || isLowPerformance) {
        particleCount = Math.min(50, Math.floor((window.innerWidth * window.innerHeight) / 25000));
      } else {
        particleCount = Math.min(120, Math.floor((window.innerWidth * window.innerHeight) / 15000));
      }
      
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 3 + 1,
          opacity: Math.random() * 0.5 + 0.1,
          color: colors[Math.floor(Math.random() * colors.length)]
        });
      }
      return particles;
    };

    particlesRef.current = createParticles();

    // Variables para throttling
    let lastTime = 0;
    const targetFPS = isMobile ? 30 : 60;
    const frameInterval = 1000 / targetFPS;
    
    // Función de animación optimizada
    const animate = (time: number) => {
      // Throttling para mejor rendimiento
      if (time - lastTime < frameInterval) {
        animationRef.current = requestAnimationFrame(animate);
        return;
      }
      lastTime = time;
      
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      // Gradiente de fondo animado (simplificado en móviles)
      if (!isMobile || time % 3 === 0) {
        const gradient1 = ctx.createRadialGradient(
          window.innerWidth * 0.3 + Math.sin(time * 0.001) * (isMobile ? 100 : 200),
          window.innerHeight * 0.3 + Math.cos(time * 0.0015) * (isMobile ? 75 : 150),
          0,
          window.innerWidth * 0.3,
          window.innerHeight * 0.3,
          Math.max(window.innerWidth, window.innerHeight) * 0.8
        );
      
      gradient1.addColorStop(0, 'rgba(34, 197, 94, 0.08)');
      gradient1.addColorStop(0.3, 'rgba(16, 185, 129, 0.04)');
      gradient1.addColorStop(1, 'rgba(5, 150, 105, 0.02)');

        const gradient2 = ctx.createRadialGradient(
          window.innerWidth * 0.7 + Math.cos(time * 0.0012) * (isMobile ? 90 : 180),
          window.innerHeight * 0.7 + Math.sin(time * 0.0018) * (isMobile ? 60 : 120),
          0,
          window.innerWidth * 0.7,
          window.innerHeight * 0.7,
          Math.max(window.innerWidth, window.innerHeight) * 0.6
        );
      
      gradient2.addColorStop(0, 'rgba(52, 211, 153, 0.06)');
      gradient2.addColorStop(0.4, 'rgba(110, 231, 183, 0.03)');
      gradient2.addColorStop(1, 'rgba(34, 197, 94, 0.01)');

        // Aplicar gradientes
        ctx.fillStyle = gradient1;
        ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
        ctx.fillStyle = gradient2;
        ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
      }

      // Ondas dinámicas (reducidas en móviles)
      if (!isLowPerformance) {
        ctx.save();
        const waveCount = isMobile ? 2 : 3;
        for (let i = 0; i < waveCount; i++) {
        ctx.beginPath();
        ctx.strokeStyle = `rgba(34, 197, 94, ${0.05 + i * 0.02})`;
        ctx.lineWidth = 2;
        
        const waveOffset = time * 0.002 + i * Math.PI * 0.5;
        const amplitude = 50 + i * 20;
        const frequency = 0.005 + i * 0.002;
        
          const step = isMobile ? 10 : 5;
          for (let x = 0; x <= window.innerWidth; x += step) {
            const y = window.innerHeight * 0.5 + 
                     Math.sin(x * frequency + waveOffset) * amplitude +
                     Math.sin(x * frequency * 2 + waveOffset * 1.5) * (amplitude * 0.3);
          
          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
          ctx.stroke();
        }
        ctx.restore();
      }

      // Animar partículas
      particlesRef.current.forEach((particle, index) => {
        // Actualizar posición
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Efecto de respiración en la opacidad
        particle.opacity = 0.1 + Math.sin(time * 0.003 + index * 0.1) * 0.3;

        // Rebote en los bordes
        if (particle.x < 0 || particle.x > window.innerWidth) particle.vx *= -1;
        if (particle.y < 0 || particle.y > window.innerHeight) particle.vy *= -1;

        // Mantener dentro del canvas
        particle.x = Math.max(0, Math.min(window.innerWidth, particle.x));
        particle.y = Math.max(0, Math.min(window.innerHeight, particle.y));

        // Dibujar partícula con efecto de brillo
        ctx.save();
        ctx.globalAlpha = particle.opacity;
        
        // Halo exterior
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particle.size * 3
        );
        gradient.addColorStop(0, particle.color);
        gradient.addColorStop(1, 'rgba(34, 197, 94, 0)');
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * 3, 0, Math.PI * 2);
        ctx.fill();
        
        // Núcleo brillante
        ctx.fillStyle = particle.color.replace('0.', '0.8');
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.restore();
      });

      // Conexiones entre partículas cercanas (solo en desktop)
      if (!isMobile && !isLowPerformance) {
        ctx.save();
        particlesRef.current.forEach((particle1, i) => {
          particlesRef.current.slice(i + 1).forEach(particle2 => {
            const dx = particle1.x - particle2.x;
            const dy = particle1.y - particle2.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < 100) {
              const opacity = (100 - distance) / 100 * 0.08;
              ctx.strokeStyle = `rgba(34, 197, 94, ${opacity})`;
              ctx.lineWidth = 1;
              ctx.beginPath();
              ctx.moveTo(particle1.x, particle1.y);
              ctx.lineTo(particle2.x, particle2.y);
              ctx.stroke();
            }
          });
        });
        ctx.restore();
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <>
      {/* Canvas para efectos de partículas */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-0"
        style={{ mixBlendMode: 'screen' }}
      />
      
      {/* Gradientes CSS animados adicionales */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Gradiente principal animado */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            background: `
              radial-gradient(circle at 20% 30%, rgba(34, 197, 94, 0.15) 0%, transparent 50%),
              radial-gradient(circle at 80% 70%, rgba(16, 185, 129, 0.12) 0%, transparent 50%),
              radial-gradient(circle at 40% 80%, rgba(52, 211, 153, 0.1) 0%, transparent 50%),
              linear-gradient(135deg, rgba(5, 150, 105, 0.05) 0%, rgba(110, 231, 183, 0.03) 100%)
            `,
            animation: 'gradientShift 20s ease-in-out infinite'
          }}
        />
        
        {/* Efectos de luz flotantes */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-radial from-green-400/10 to-transparent rounded-full animate-float-slow" />
        <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-gradient-radial from-emerald-300/8 to-transparent rounded-full animate-float-reverse" />
        <div className="absolute top-1/2 left-3/4 w-64 h-64 bg-gradient-radial from-green-500/12 to-transparent rounded-full animate-float-diagonal" />
        
        {/* Ondas de luz */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-green-400/30 to-transparent animate-wave-horizontal" />
          <div className="absolute bottom-0 right-0 w-full h-2 bg-gradient-to-r from-transparent via-emerald-400/25 to-transparent animate-wave-horizontal-reverse" />
        </div>
      </div>
    </>
  );
};

export default AnimatedBackground;