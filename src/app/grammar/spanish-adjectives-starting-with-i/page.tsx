"use client"

import Link from "next/link"

export default function SpanishAdjectivesStartingWithI() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-pink-50 to-rose-50">
      <div className="bg-gradient-to-r from-red-600 via-pink-600 to-rose-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-extrabold text-center mb-4">
            Spanish Adjectives Starting With I
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Descubre adjetivos increíbles, inteligentes e interesantes en español
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-red-500">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Adjetivos Españoles Que Empiezan Con I
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                La letra I nos introduce a un mundo de adjetivos increíbles e inteligentes que perfectamente describen 
                cualidades positivas. Desde &quot;increíble&quot; hasta &quot;inteligente,&quot; estas palabras nos ayudan 
                a expresar excelencia, describir rasgos admirables y celebrar las mejores cualidades.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Adjetivos Populares Que Empiezan Con I
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-red-50 to-pink-50 p-6 rounded-xl border-l-4 border-red-400">
                  <h3 className="text-2xl font-semibold text-red-700 mb-4">Para Personas</h3>
                  <div className="space-y-3">
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-red-800">Increíble</p>
                      <p className="text-red-600 text-sm">Extraordinariamente impresionante</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-red-800">Inteligente</p>
                      <p className="text-red-600 text-sm">Que tiene capacidad de entender</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-red-800">Interesante</p>
                      <p className="text-red-600 text-sm">Que despierta interés o curiosidad</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-red-800">Impresionante</p>
                      <p className="text-red-600 text-sm">Que causa admiración o asombro</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-pink-50 to-rose-50 p-6 rounded-xl border-l-4 border-pink-400">
                  <h3 className="text-2xl font-semibold text-pink-700 mb-4">Para Cosas & Lugares</h3>
                  <div className="space-y-3">
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-pink-800">Importante</p>
                      <p className="text-pink-600 text-sm">Que tiene gran valor o significación</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-pink-800">Inmenso</p>
                      <p className="text-pink-600 text-sm">Muy grande o extenso</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-pink-800">Increíble</p>
                      <p className="text-pink-600 text-sm">Difícil de creer por ser extraordinario</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="font-semibold text-pink-800">Inspirador</p>
                      <p className="text-pink-600 text-sm">Que estimula la creatividad</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Quiz Interactivo 1: Definiciones
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-red-50 to-pink-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Relaciona cada adjetivo con su significado correcto:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">1. &quot;Inteligente&quot; significa:</p>
                      <div className="space-y-2">
                        <p className="text-gray-600">A) Ser muy viejo</p>
                        <p className="text-gray-600">B) Que tiene capacidad de entender</p>
                        <p className="text-gray-600">C) Ser muy caro</p>
                      </div>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-red-600 font-semibold">Mostrar Respuesta</summary>
                        <p className="mt-2 text-gray-700">Respuesta: B) Que tiene capacidad de entender</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">2. &quot;Increíble&quot; significa:</p>
                      <div className="space-y-2">
                        <p className="text-gray-600">A) Ser muy rápido</p>
                        <p className="text-gray-600">B) Difícil de creer por ser extraordinario</p>
                        <p className="text-gray-600">C) Ser muy fuerte</p>
                      </div>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-red-600 font-semibold">Mostrar Respuesta</summary>
                        <p className="mt-2 text-gray-700">Respuesta: B) Difícil de creer por ser extraordinario</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Quiz Interactivo 2: Completar Oraciones
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-pink-50 to-rose-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-4">Completa los espacios con adjetivos apropiados:</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">El estudiante _____ siempre ayudaba a otros.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-pink-600 font-semibold">Mostrar Respuesta</summary>
                        <p className="mt-2 text-gray-700">Respuesta: inteligente (que tiene capacidad de entender)</p>
                      </details>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <p className="mb-2">Ella tenía una personalidad _____ que todos amaban.</p>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-pink-600 font-semibold">Mostrar Respuesta</summary>
                        <p className="mt-2 text-gray-700">Respuesta: increíble (extraordinariamente impresionante)</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Reglas Gramaticales para Adjetivos con I
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Posición</h4>
                    <p className="text-gray-600">Los adjetivos con I típicamente van después del sustantivo: &quot;un estudiante inteligente&quot;</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Concordancia</h4>
                    <p className="text-gray-600">Los adjetivos deben concordar en género y número: &quot;inteligente/inteligentes&quot;</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
              <h3 className="text-xl font-semibold mb-4 text-red-900">Notas:</h3>
              <ul className="text-lg md:text-xl text-red-800 space-y-3">
                <li>Los adjetivos con I son perfectos para describir cualidades increíbles e inteligentes</li>
                <li>Muchos adjetivos con I tienen connotaciones positivas, excelentes para cumplidos</li>
                <li>Algunos adjetivos con I pueden usarse tanto como adjetivos como adverbios</li>
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Temas Relacionados</h3>
              <div className="space-y-3">
                <Link href="/grammar/positive-adjectives-that-start-with-a-to-describe-a-person" className="block text-red-600 hover:text-red-800 font-medium">
                  Positive Adjectives Starting With A to Describe a Person
                </Link>
                <Link href="/grammar/positive-adjectives-that-start-with-g" className="block text-red-600 hover:text-red-800 font-medium">
                  Positive Adjectives Starting With G
                </Link>
                <Link href="/grammar/positive-adjectives-that-start-with-j" className="block text-red-600 hover:text-red-800 font-medium">
                  Positive Adjectives Starting With J
                </Link>
                <Link href="/grammar/positive-adjectives-that-start-with-v" className="block text-red-600 hover:text-red-800 font-medium">
                  Positive Adjectives Starting With V
                </Link>
                <Link href="/grammar/adjectives" className="block text-red-600 hover:text-red-800 font-medium">
                  Adjectives
                </Link>
              </div>
            </div>

            <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-2xl p-6">
              <h3 className="text-2xl font-bold mb-4">Consejo Pro</h3>
              <p className="text-red-100">
                ¡Los adjetivos con I son perfectos para describir cualidades increíbles e inteligentes!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
