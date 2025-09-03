
'use client';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ChefHat, MapPin, Phone, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import AnimatedBackground from "@/components/AnimatedBackground";
import SplitText from "@/components/SplitText";


export default function Home() {
  const [menuTab, setMenuTab] = useState('comida');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Simular carga inicial con animación
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  // Cerrar menú móvil al hacer scroll
  useEffect(() => {
    const handleScroll = () => {
      if (mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [mobileMenuOpen]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-primary mx-auto mb-4"></div>
          <div className="text-white text-xl font-semibold animate-pulse">Cargando Fortunato...</div>
        </div>
      </div>
    );
  }

  const menu = {
    comida: {
      hamburguesas: [
        { name: "Big Burger", description: "2 panes de carne de 100g cada hamburguesa \"Smash\" doble queso cheddar, cebolla caramelizada, lechuga, tomate y salsa de la casa.", price: "S/. 34" },
        { name: "Chicken Bacon", description: "Pechuga de pollo crujiente, queso cheddar, tocino, lechuga, pickles, cebolla caramelizada, lechuga y tomate.", price: "S/. 28" },
        { name: "Búfalo Bacon", description: "Carne combinado de res y cerdo, tocino, cebolla caramelizada, queso cheddar, lechuga, pickles, lechuga, tomate y salsa de la casa.", price: "S/. 31" },
        { name: "Chiripa", description: "Combinación de res y cerdo que llevan los sabores a otro nivel, acompañado de lechuga, tomate, cebolla caramelizada, queso cheddar, salsa de la casa.", price: "S/. 28" },
        { name: "Americana", description: "Carne de res, queso cheddar, lechuga, tomate, cebolla y salsa americana.", price: "S/. 27" }
      ],
      pizzas: [
        { name: "Full Meat", description: "Pizza con carne molida, tocino, chorizo, jamón, queso mozzarella y salsa de tomate.", price: "S/. 32" },
        { name: "Buona Fortuna", description: "Pizza especial de la casa con ingredientes selectos y queso mozzarella.", price: "S/. 33" },
        { name: "Hawaiana", description: "Pizza con jamón, piña, queso mozzarella y salsa de tomate.", price: "S/. 27" },
        { name: "Pepperoni", description: "Pizza clásica con pepperoni, queso mozzarella y salsa de tomate.", price: "S/. 26" },
        { name: "Margherita", description: "Pizza tradicional con tomate, albahaca fresca y queso mozzarella.", price: "S/. 24" }
      ],
      fritos: [
        { name: "Choripapa", description: "Papas fritas con chorizo, salsas y aderezos especiales.", price: "S/. 28" },
        { name: "Fortunesa", description: "Especialidad de la casa con papas fritas y ingredientes únicos.", price: "S/. 28" },
        { name: "Chicharrón de Pollo", description: "Trozos de pollo crujiente acompañado de yuca y salsa criolla.", price: "S/. 29" },
        { name: "Tequeños", description: "Deliciosos tequeños rellenos de queso, acompañados de salsas.", price: "S/. 22" },
        { name: "Wrap Hawaiano", description: "Tiras de pollo crispy, queso cheddar, tocino, salsa caprese, piña, tomate, lechuga, piña y finas hierbas, envuelto en una tortilla de trigo casera.", price: "S/. 30" },
        { name: "Chicken Wrap", description: "Tiras de pollo crispy, queso cheddar, tocino, salsa de la casa, tomate, piña y lechuga, envuelto en una tortilla de trigo casera.", price: "S/. 28" }
      ],
      grillados: [
        { name: "Lomo Fino", description: "Delicioso lomo fino de res acompañado de ensalada de la casa.", price: "S/. 45" },
        { name: "Solomillo de Cerdo", description: "Delicioso corte de cerdo acompañado de ensalada papas fritas y ensalada de la casa.", price: "S/. 39" },
        { name: "Pollo", description: "Pechuga de pollo acompañado de ensalada papas fritas y ensalada de la casa.", price: "S/. 30" },
        { name: "Ensalada Caesar's", description: "Lechuga fresca, tomate cherry, huevo duro, porotos, croutones, quita en rodajas, queso parmesano y aceitunas negras con aderezo.", price: "S/. 28" }
      ],
      alitas: [
        { name: "Alitas Chiferas", description: "Alitas de pollo al estilo chifa con salsa especial.", price: "S/. 29" },
        { name: "Alitas en Salsa Acevichada Picante", description: "Alitas marinadas en salsa acevichada con un toque picante.", price: "S/. 29" },
        { name: "Alitas BBQ", description: "Alitas de pollo bañadas en salsa barbacoa casera.", price: "S/. 28" },
        { name: "Alitas Búfalo", description: "Alitas picantes estilo búfalo con salsa especial.", price: "S/. 28" }
      ]
    },
    bebidas: {
      cocteles: [
        { name: "La Pócima", description: "Licor de coca (Achura), Margarita de Maracuyá, Limón Mandarina.", price: "S/. 32" },
        { name: "Coco Loco", description: "Ron Blanco, Coco, Chocolate blanco.", price: "S/. 32" },
        { name: "El Tunante", description: "Ron macerado en Coca, Zumo de Tapia y Zumo de Limón.", price: "S/. 32" },
        { name: "Sexy Bitch", description: "Vodka macerado en Damasco de Tequila, Zumo en Piña y Jarabe de Sandía.", price: "S/. 32" },
        { name: "Poción de Mariposa", description: "Gin infusionado en Flor de Mariposa Azul y Cordial de Menta.", price: "S/. 32" }
      ],
      mockteles: [
        { name: "Santa Piña", description: "Jugo de Maracuyá, Zumo de Piña, Limón y Ginger Simple.", price: "S/. 14" },
        { name: "Océano", description: "Jugo de Eucalipto con Coco y Ginger Simple.", price: "S/. 14" },
        { name: "For-Tuna", description: "Zumo de Piña, Zumo de Tuna, Agua, Miel de Caña y Ginger de Sandía.", price: "S/. 14" },
        { name: "Cold Fruit Tea", description: "Infusión de Frutos Rojos, Zumo de Piña y Limón.", price: "S/. 14" }
      ],
      calientitos: [
        { name: "Calentura", description: "Cóctel simple, Maracuyá, infusión de Hierba Luisa Pisco Sour con Piña y Whisky.", price: "S/. 20" },
        { name: "Chacchar", description: "Pisco macerado en Sirope Jarabe, Albahaca, Piña.", price: "S/. 20" }
      ],
      gasificados: [
        { name: "Cerveza Stella Artois", description: "", price: "S/. 13" },
        { name: "Cerveza Corona", description: "", price: "S/. 13" },
        { name: "Cerveza Heineken", description: "", price: "S/. 13" },
        { name: "Cerveza Cusqueña Trigo/Dorada", description: "", price: "S/. 11" },
        { name: "Cerveza Pilsen Callao", description: "", price: "S/. 11" },
        { name: "Cerveza Barranquina", description: "Quinua / de la Tierra / Red Ale / Limón", price: "S/. 18" },
        { name: "Cerveza Fortunata", description: "Malta Pura / Maracuyá Pisco Ale", price: "S/. 20" },
        { name: "Cerveza Sierra Andina", description: "", price: "S/. 20" },
        { name: "Gaseosas", description: "Coca Cola / Inca Kola / Fanta / Sprite", price: "S/. 7" },
        { name: "Agua", description: "San Luis con Gas y Sin Mateo sin Gas", price: "S/. 6" }
      ]
    }
  };

  return (
    <div className="min-h-screen relative">
      <AnimatedBackground />
      <div className="flex flex-col min-h-screen relative z-10">
        <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
          <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/fortulogo.png" alt="Fortunato Logo" width={65} height={16} className="object-contain" />
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-lg font-medium">
            <Link href="#about" className="hover:text-primary transition-colors">Nosotros</Link>
            <Link href="#menu" className="hover:text-primary transition-colors">Carta</Link>
            <Link href="#contact" className="hover:text-primary transition-colors">Contacto</Link>
          </nav>
          <Button 
            onClick={() => window.open('https://wa.me/51944123456?text=Hola%2C%20me%20gustar%C3%ADa%20hacer%20una%20reserva%20en%20Restaurante%20Fortunato.%20%C2%BFPodr%C3%ADan%20ayudarme%3F', '_blank')}
            className="hidden md:flex hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
          >
            Reservar
          </Button>
          
          {/* Botón hamburguesa móvil */}
          <button 
            onClick={toggleMobileMenu}
            className="md:hidden relative z-50 p-2 rounded-lg hover:bg-primary/10 transition-all duration-300"
            aria-label="Toggle mobile menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-current transition-all duration-300 mt-1 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-current transition-all duration-300 mt-1 ${mobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
            </div>
          </button>
          
          {/* Menú móvil */}
          <div className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ${mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
            {/* Overlay */}
            <div 
              className={`absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity duration-500 ${mobileMenuOpen ? 'opacity-100' : 'opacity-0'}`}
              onClick={closeMobileMenu}
            ></div>
            
            {/* Menú */}
            <div className={`absolute top-0 right-0 h-full w-80 bg-background/95 backdrop-blur-md shadow-2xl transform transition-transform duration-500 ease-out ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
              <div className="pt-24 px-6">
                <nav className="space-y-6">
                  <a 
                    href="#about" 
                    onClick={closeMobileMenu}
                    className="block text-xl font-medium hover:text-primary transition-all duration-300 hover:translate-x-2 hover:scale-105"
                  >
                    Nosotros
                  </a>
                  <a 
                    href="#menu" 
                    onClick={closeMobileMenu}
                    className="block text-xl font-medium hover:text-primary transition-all duration-300 hover:translate-x-2 hover:scale-105"
                  >
                    Carta
                  </a>
                  <a 
                    href="#contact" 
                    onClick={closeMobileMenu}
                    className="block text-xl font-medium hover:text-primary transition-all duration-300 hover:translate-x-2 hover:scale-105"
                  >
                    Contacto
                  </a>
                  <Button 
                    className="w-full mt-8 hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
                    onClick={() => {
                      window.open('https://wa.me/51944123456?text=Hola%2C%20me%20gustar%C3%ADa%20hacer%20una%20reserva%20en%20Restaurante%20Fortunato.%20%C2%BFPodr%C3%ADan%20ayudarme%3F', '_blank');
                      closeMobileMenu();
                    }}
                  >
                    Reservar Mesa
                  </Button>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-grow animate-fade-in">
        <section id="hero" className="relative h-[80vh] min-h-[500px] flex items-center justify-center text-center text-white overflow-hidden bg-slate-900/20">
          <div className="absolute inset-0 bg-black/40 z-10" />
          <Image
            src="/dibujo fondo.jpg"
            alt="Terraza del restaurante Fortunato"
            fill
            style={{ objectFit: 'cover' }}
            className="z-0"
            data-ai-hint="restaurant terrace"
          />
          <div className="relative z-20 container px-4 md:px-6 animate-slide-up-delayed">
            <SplitText 
              text="Donde cada bocado es una fortuna"
              className="text-4xl md:text-6xl font-bold tracking-tight hover:scale-105 transition-transform duration-500"
              delay={0.1}
              duration={0.8}
              ease="power2.out"
              splitType="chars"
              from={{ opacity: 0, y: 50, rotationX: -90 }}
              to={{ opacity: 1, y: 0, rotationX: 0 }}
            />
            <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-gray-200 animate-fade-in-up animation-delay-500">
              Descubre una experiencia gastronómica única en el corazón de Trujillo, donde la tradición peruana se encuentra con la innovación culinaria.
            </p>
            <div className="mt-8 flex justify-center gap-4 animate-fade-in-up animation-delay-700">
              <Button size="lg" asChild className="hover:scale-110 hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300 hover:-translate-y-1">
                <Link href="#menu">Ver la Carta</Link>
              </Button>
              <Button 
                size="lg" 
                variant="secondary" 
                className="hover:scale-110 hover:shadow-2xl hover:shadow-secondary/30 transition-all duration-300 hover:-translate-y-1"
                onClick={() => window.open('https://wa.me/51944123456?text=Hola%2C%20me%20gustar%C3%ADa%20hacer%20una%20reserva%20en%20Restaurante%20Fortunato.%20%C2%BFPodr%C3%ADan%20ayudarme%3F', '_blank')}
              >
                Reservar Mesa
              </Button>
            </div>
          </div>
        </section>

        <section id="about" className="py-16 md:py-24 animate-fade-in-section bg-gray-800/15">
          <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <SplitText 
                text="Nuestra Historia"
                className="text-3xl md:text-4xl font-bold hover:text-primary transition-colors duration-300"
                delay={0.05}
                duration={0.6}
                ease="power2.out"
                splitType="words"
                from={{ opacity: 0, y: 30, scale: 0.8 }}
                to={{ opacity: 1, y: 0, scale: 1 }}
                threshold={0.3}
              />
              <p className="mt-4 text-lg text-gray-300">
                En Fortunato, creemos que la gastronomía es un arte que conecta culturas y emociones. Ubicados en una hermosa terraza en Trujillo, ofrecemos una experiencia culinaria que celebra los sabores auténticos del Perú con un toque contemporáneo.
              </p>
              <p className="mt-4 text-lg text-gray-300">
                Nuestro concepto de "terraza, cocina + bar" refleja nuestra pasión por crear un espacio donde la buena comida, las bebidas artesanales y el ambiente acogedor se combinan para ofrecer momentos inolvidables.
              </p>
              <div className="mt-6 flex items-center gap-4 text-primary">
                <ChefHat className="w-8 h-8" />
                <p className="font-semibold text-xl">Cocina de Autor, Alma de Casa</p>
              </div>
            </div>
            <div className="animate-slide-in-right">
              <Image
                src="/salon.jpg"
                alt="Interior del restaurante Fortunato"
                width={800}
                height={1000}
                className="w-full h-auto max-w-2xl mx-auto rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
                data-ai-hint="restaurant entrance"
              />
            </div>
          </div>
        </section>

        <section id="menu" className="py-16 md:py-24 animate-fade-in-section bg-slate-800/10">
          <div className="container mx-auto px-4 md:px-6">
            <SplitText 
              text="Nuestra Carta"
              className="text-3xl md:text-4xl font-bold text-center hover:text-primary transition-colors duration-300"
              delay={0.08}
              duration={0.7}
              ease="power2.out"
              splitType="chars"
              from={{ opacity: 0, y: 40, rotationY: 90 }}
              to={{ opacity: 1, y: 0, rotationY: 0 }}
              threshold={0.2}
              textAlign="center"
            />
            <p className="mt-2 text-lg text-gray-300 text-center max-w-3xl mx-auto">
              Una selección de nuestros platos y bebidas más populares, preparados con los mejores ingredientes.
            </p>

            <div className="mt-8 max-w-md mx-auto flex justify-center border-b border-gray-700 animate-slide-in-up">
              <button onClick={() => setMenuTab('comida')} className={`px-6 py-3 font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg ${menuTab === 'comida' ? 'text-primary border-b-2 border-primary' : 'text-gray-400 hover:text-white'}`}>Comida</button>
              <button onClick={() => setMenuTab('bebidas')} className={`px-6 py-3 font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg ${menuTab === 'bebidas' ? 'text-primary border-b-2 border-primary' : 'text-gray-400 hover:text-white'}`}>Bebidas</button>
            </div>

            <div className="mt-8 max-w-7xl mx-auto">
              {menuTab === 'comida' ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 animate-stagger-in">
                  <div className="space-y-6 animate-slide-in-up hover:scale-105 transition-transform duration-300">
                    <h3 className="text-2xl font-bold text-primary border-b border-primary pb-2 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300">🍔 Hamburguesas</h3>
                    {menu.comida.hamburguesas.map((item, index) => (
                      <div key={index} className="flex flex-col space-y-2 p-3 rounded-lg hover:bg-primary/5 hover:scale-105 transition-all duration-300 hover:shadow-md cursor-pointer">
                        <div className="flex justify-between items-baseline">
                          <h4 className="text-lg font-semibold">{item.name}</h4>
                          <p className="text-lg font-bold text-primary">{item.price}</p>
                        </div>
                        <p className="text-gray-400 text-sm">{item.description}</p>
                      </div>
                    ))}
                  </div>
                  
                  <div className="space-y-6 animate-slide-in-up hover:scale-105 transition-transform duration-300">
                    <h3 className="text-2xl font-bold text-primary border-b border-primary pb-2 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300">🍕 Pizzas</h3>
                    {menu.comida.pizzas.map((item, index) => (
                      <div key={index} className="flex flex-col space-y-2 p-3 rounded-lg hover:bg-primary/5 hover:scale-105 transition-all duration-300 hover:shadow-md cursor-pointer">
                        <div className="flex justify-between items-baseline">
                          <h4 className="text-lg font-semibold">{item.name}</h4>
                          <p className="text-lg font-bold text-primary">{item.price}</p>
                        </div>
                        <p className="text-gray-400 text-sm">{item.description}</p>
                      </div>
                    ))}
                  </div>
                  
                  <div className="space-y-6 animate-slide-in-up hover:scale-105 transition-transform duration-300">
                    <h3 className="text-2xl font-bold text-primary border-b border-primary pb-2 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300">🍟 Fritos</h3>
                    {menu.comida.fritos.map((item, index) => (
                      <div key={index} className="flex flex-col space-y-2 p-3 rounded-lg hover:bg-primary/5 hover:scale-105 transition-all duration-300 hover:shadow-md cursor-pointer">
                        <div className="flex justify-between items-baseline">
                          <h4 className="text-lg font-semibold">{item.name}</h4>
                          <p className="text-lg font-bold text-primary">{item.price}</p>
                        </div>
                        <p className="text-gray-400 text-sm">{item.description}</p>
                      </div>
                    ))}
                  </div>
                  
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-primary border-b border-primary pb-2 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300">🥩 Grillados</h3>
                    {menu.comida.grillados.map((item, index) => (
                      <div key={index} className="flex flex-col space-y-2">
                        <div className="flex justify-between items-baseline">
                          <h4 className="text-lg font-semibold">{item.name}</h4>
                          <p className="text-lg font-bold text-primary">{item.price}</p>
                        </div>
                        <p className="text-gray-400 text-sm">{item.description}</p>
                      </div>
                    ))}
                  </div>
                  
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-primary border-b border-primary pb-2 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300">🍗 Alitas</h3>
                    {menu.comida.alitas.map((item, index) => (
                      <div key={index} className="flex flex-col space-y-2">
                        <div className="flex justify-between items-baseline">
                          <h4 className="text-lg font-semibold">{item.name}</h4>
                          <p className="text-lg font-bold text-primary">{item.price}</p>
                        </div>
                        <p className="text-gray-400 text-sm">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 animate-stagger-in">
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-primary border-b border-primary pb-2 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300">🍹 Cócteles Fortunato</h3>
                    {menu.bebidas.cocteles.map((item, index) => (
                      <div key={index} className="flex flex-col space-y-2">
                        <div className="flex justify-between items-baseline">
                          <h4 className="text-lg font-semibold">{item.name}</h4>
                          <p className="text-lg font-bold text-primary">{item.price}</p>
                        </div>
                        <p className="text-gray-400 text-sm">{item.description}</p>
                      </div>
                    ))}
                  </div>
                  
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-primary border-b border-primary pb-2 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300">🥤 Mockteles</h3>
                    {menu.bebidas.mockteles.map((item, index) => (
                      <div key={index} className="flex flex-col space-y-2">
                        <div className="flex justify-between items-baseline">
                          <h4 className="text-lg font-semibold">{item.name}</h4>
                          <p className="text-lg font-bold text-primary">{item.price}</p>
                        </div>
                        <p className="text-gray-400 text-sm">{item.description}</p>
                      </div>
                    ))}
                  </div>
                  
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-primary border-b border-primary pb-2 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300">☕ Calientitos</h3>
                    {menu.bebidas.calientitos.map((item, index) => (
                      <div key={index} className="flex flex-col space-y-2">
                        <div className="flex justify-between items-baseline">
                          <h4 className="text-lg font-semibold">{item.name}</h4>
                          <p className="text-lg font-bold text-primary">{item.price}</p>
                        </div>
                        <p className="text-gray-400 text-sm">{item.description}</p>
                      </div>
                    ))}
                  </div>
                  
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-primary border-b border-primary pb-2 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300">🥤 Gasificados</h3>
                    {menu.bebidas.gasificados.map((item, index) => (
                      <div key={index} className="flex flex-col space-y-2">
                        <div className="flex justify-between items-baseline">
                          <h4 className="text-lg font-semibold">{item.name}</h4>
                          <p className="text-lg font-bold text-primary">{item.price}</p>
                        </div>
                        <p className="text-gray-400 text-sm">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 animate-fade-in bg-gray-900/15">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-slide-in-up">Contacto & Reservas</h2>
              <p className="text-white-600 max-w-2xl mx-auto animate-slide-in-up">Contáctanos para hacer tu reserva o para cualquier consulta</p>
            </div>
            
            {/* Two Column Layout: Contact Cards Left, Form Right */}
            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Contact Cards - Left Column */}
              <div className="space-y-3 flex flex-col justify-center">
                <div className="bg-white p-3 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300 animate-slide-in-up">
                  <div className="bg-primary/10 w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-2">
                    <MapPin className="w-4 h-4 text-primary" />
                  </div>
                  <h3 className="text-sm font-bold mb-1">Ubicación</h3>
                  <p className="text-gray-600 text-xs">Jr. Pizarro 725, Trujillo</p>
                  <p className="text-gray-600 text-xs">La Libertad, Perú</p>
                </div>
                
                <div className="bg-white p-3 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300 animate-slide-in-up">
                  <div className="bg-primary/10 w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Phone className="w-4 h-4 text-primary" />
                  </div>
                  <h3 className="text-sm font-bold mb-1">Teléfono</h3>
                  <p className="text-gray-600 text-xs">+51 944 123 456</p>
                  <p className="text-gray-600 text-xs">Reservas y consultas</p>
                </div>
                
                <div className="bg-white p-3 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300 animate-slide-in-up">
                  <div className="bg-primary/10 w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Clock className="w-4 h-4 text-primary" />
                  </div>
                  <h3 className="text-sm font-bold mb-1">Horarios</h3>
                  <p className="text-gray-600 text-xs">Lunes - Domingo</p>
                  <p className="text-gray-600 text-xs">12:00 PM - 11:00 PM</p>
                </div>
              </div>
              
              {/* Reservation Form - Right Column */}
              <div className="flex items-center">
                <Card className="w-full">
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold mb-6 text-center">Hacer Reserva</h3>
                    <form className="space-y-4">
                      <Input placeholder="Nombre" />
                      <Input type="email" placeholder="Correo Electrónico" />
                      <Input type="tel" placeholder="Teléfono" />
                      <Textarea placeholder="Mensaje (opcional)" />
                      <Button 
                        type="button" 
                        className="w-full" 
                        size="lg"
                        onClick={() => window.open('https://wa.me/51944123456?text=Hola%2C%20me%20gustar%C3%ADa%20hacer%20una%20reserva%20en%20Restaurante%20Fortunato.%20%C2%BFPodr%C3%ADan%20ayudarme%3F', '_blank')}
                      >
                        Enviar Solicitud de Reserva
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900/90 text-white py-12 animate-fade-in">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-primary">Fortunato</h3>
              <p className="text-gray-300">Terraza, cocina + bar en el corazón de Trujillo</p>
              <div className="flex space-x-4">
                <a href="https://www.facebook.com/profile.php?id=100078920674130&locale=es_LA" className="text-gray-400 hover:text-primary transition-colors duration-300" aria-label="Facebook" target="_blank">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="https://www.instagram.com/fortunatococinabar/" className="text-gray-400 hover:text-primary transition-colors duration-300" aria-label="Instagram" target="_blank">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
                  </svg>
                </a>
                <a href="https://wa.me/51999888888" className="text-gray-400 hover:text-primary transition-colors duration-300" aria-label="WhatsApp" target="_blank">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-300" aria-label="TikTok">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                  </svg>
                </a>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-primary">Contacto Rápido</h3>
              <div className="space-y-2">
                <p className="flex items-center gap-2 text-gray-300">
                  <Phone className="w-4 h-4" /> +51 999 888 888
                </p>
                <p className="flex items-center gap-2 text-gray-300">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.887.492-1.667 1.245-2.08L12 9.09l10.755-5.713A1.636 1.636 0 0 1 24 5.457z"/>
                  </svg>
                  reservas@fortunato.pe
                </p>
              </div>
              <Button 
                className="bg-primary hover:bg-primary/80 text-white"
                onClick={() => window.open('https://wa.me/51999888888?text=Hola%2C%20me%20gustar%C3%ADa%20hacer%20una%20reserva%20en%20Restaurante%20Fortunato.%20%C2%BFPodr%C3%ADan%20ayudarme%3F', '_blank')}
              >
                Reservar Ahora
              </Button>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-primary">Horarios</h3>
              <div className="text-gray-300">
                <p>Lunes - Domingo</p>
                <p>12:00 PM - 11:00 PM</p>
                <p className="font-semibold text-white mt-2">Cocina cierra a las 10:30 PM</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-900 mt-8 pt-1 text-center text-gray-400">
            <p className="text-gray-400">&copy; 2025 Cristhian Mantilla</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/51999888888?text=Hola,%20me%20gustaría%20hacer%20una%20reserva"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-50 hover:animate-pulse"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488"/>
        </svg>
      </a>
      </div>
    </div>
  )
}
