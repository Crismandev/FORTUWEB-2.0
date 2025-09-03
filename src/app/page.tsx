
'use client';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ChefHat, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [menuTab, setMenuTab] = useState('comida');

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
    <div className="flex flex-col min-h-screen">
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
          <Button className="hidden md:flex">Reservar</Button>
          <button className="md:hidden">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" /></svg>
          </button>
        </div>
      </header>

      <main className="flex-grow">
        <section id="hero" className="relative h-[80vh] min-h-[500px] flex items-center justify-center text-center text-white">
          <div className="absolute inset-0 bg-black/50 z-10" />
          <Image
            src="/dibujo fondo.jpg"
            alt="Terraza del restaurante Fortunato"
            fill
            style={{ objectFit: 'cover' }}
            className="z-0"
            data-ai-hint="restaurant terrace"
          />
          <div className="relative z-20 container px-4 md:px-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Donde cada bocado es una fortuna</h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-gray-200">
              Disfruta de una experiencia culinaria única en nuestra terraza, con una fusión de cocina moderna y los mejores cócteles de autor.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="#menu">Ver la Carta</Link>
              </Button>
              <Button size="lg" variant="secondary">
                Reservar Mesa
              </Button>
            </div>
          </div>
        </section>

        <section id="about" className="py-16 md:py-24 bg-secondary">
          <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold">Nuestra Historia</h2>
              <p className="mt-4 text-lg text-gray-300">
                Fortunato nació de la pasión por la buena comida y el deseo de crear un espacio donde la gente pudiera reunirse y celebrar la vida. Nuestro nombre rinde homenaje a la fortuna de poder compartir momentos especiales alrededor de una mesa.
              </p>
              <p className="mt-4 text-lg text-gray-300">
                Con un enfoque en ingredientes frescos y de temporada, nuestro chef crea platos que son a la vez innovadores y reconfortantes, inspirados en la rica tradición culinaria local con un toque contemporáneo.
              </p>
              <div className="mt-6 flex items-center gap-4 text-primary">
                <ChefHat className="w-8 h-8" />
                <p className="font-semibold text-xl">Cocina de Autor, Alma de Casa</p>
              </div>
            </div>
            <div>
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

        <section id="menu" className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center">Nuestra Carta</h2>
            <p className="mt-2 text-lg text-gray-300 text-center max-w-3xl mx-auto">
              Una selección de nuestros platos y bebidas más populares, preparados con los mejores ingredientes.
            </p>

            <div className="mt-8 max-w-md mx-auto flex justify-center border-b border-gray-700">
              <button onClick={() => setMenuTab('comida')} className={`px-6 py-3 font-medium ${menuTab === 'comida' ? 'text-primary border-b-2 border-primary' : 'text-gray-400'}`}>Comida</button>
              <button onClick={() => setMenuTab('bebidas')} className={`px-6 py-3 font-medium ${menuTab === 'bebidas' ? 'text-primary border-b-2 border-primary' : 'text-gray-400'}`}>Bebidas</button>
            </div>

            <div className="mt-8 max-w-7xl mx-auto">
              {menuTab === 'comida' ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-primary border-b border-primary pb-2">🍔 Hamburguesas</h3>
                    {menu.comida.hamburguesas.map((item, index) => (
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
                    <h3 className="text-2xl font-bold text-primary border-b border-primary pb-2">🍕 Pizzas</h3>
                    {menu.comida.pizzas.map((item, index) => (
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
                    <h3 className="text-2xl font-bold text-primary border-b border-primary pb-2">🍟 Fritos</h3>
                    {menu.comida.fritos.map((item, index) => (
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
                    <h3 className="text-2xl font-bold text-primary border-b border-primary pb-2">🥩 Grillados</h3>
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
                    <h3 className="text-2xl font-bold text-primary border-b border-primary pb-2">🍗 Alitas</h3>
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
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-primary border-b border-primary pb-2">🍸 Cócteles Fortunato</h3>
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
                    <h3 className="text-2xl font-bold text-primary border-b border-primary pb-2">🥤 Mockteles Fortunato</h3>
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
                    <h3 className="text-2xl font-bold text-primary border-b border-primary pb-2">☕ Calientitos</h3>
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
                    <h3 className="text-2xl font-bold text-primary border-b border-primary pb-2">🍺 Gasificados</h3>
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

        <section id="contact" className="py-16 md:py-24 bg-secondary">
          <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold">Contacto y Reservas</h2>
              <p className="mt-4 text-lg text-gray-300">
                ¿Listo para tu próxima experiencia culinaria? Contáctanos o reserva tu mesa en línea.
              </p>
              <div className="mt-6 space-y-4">
                <div className="flex items-center gap-4">
                  <MapPin className="w-6 h-6 text-primary" />
                  <span className="text-lg">Av. Larco 485, Trujillo, La Libertad, Perú</span>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="w-6 h-6 text-primary" />
                  <span className="text-lg">+51 944 123 456</span>
                </div>
              </div>
            </div>
            <Card>
              <CardContent className="pt-6">
                <form className="space-y-4">
                  <Input placeholder="Nombre" />
                  <Input type="email" placeholder="Correo Electrónico" />
                  <Input type="tel" placeholder="Teléfono" />
                  <Textarea placeholder="Mensaje (opcional)" />
                  <Button type="submit" className="w-full" size="lg">Enviar Solicitud de Reserva</Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <footer className="py-8 bg-gray-900">
        <div className="container mx-auto px-4 md:px-6 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Fortunato. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
