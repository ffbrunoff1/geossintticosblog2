import React from 'react'
import { motion } from 'framer-motion'
import { Clock, User, ArrowRight, TrendingUp, BookOpen, Star } from 'lucide-react'

export default function Hero() {
  const featuredPosts = [
    {
      id: 1,
      title: "Geotêxtil Não Tecido: Aplicações em Drenagem e Filtração",
      excerpt: "Descubra como o geotêxtil não tecido revoluciona projetos de infraestrutura com suas propriedades únicas de permeabilidade e resistência.",
      image: "https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/user-files/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/1754519227247_6n4cx6ev80r_manta-geotextil-9-768x1024.jpg",
      category: "Geotêxtil",
      readTime: "8 min",
      author: "Dr. João Silva",
      date: "15 Jan 2024",
      featured: true,
      trending: true
    },
    {
      id: 2,
      title: "Geomembranas em Aterros Sanitários: Proteção Ambiental Eficaz",
      excerpt: "Como as geomembranas garantem a impermeabilização adequada em aterros sanitários, protegendo o meio ambiente e recursos hídricos.",
      image: "https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/user-files/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/1754519228442_l1p4yg284nn_geomembrana2.jpg",
      category: "Geomembrana",
      readTime: "12 min",
      author: "Eng. Maria Santos",
      date: "12 Jan 2024",
      featured: true
    },
    {
      id: 3,
      title: "Geocélulas: Inovação em Estabilização de Taludes",
      excerpt: "Conheça as vantagens das geocélulas na estabilização de taludes e controle de erosão em projetos de engenharia civil.",
      image: "https://images.unsplash.com/photo-1581092918484-8313d4c6e2a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Geocélulas",
      readTime: "10 min",
      author: "Eng. Carlos Lima",
      date: "10 Jan 2024"
    },
    {
      id: 4,
      title: "Geogrelhas: Reforço Estrutural em Pavimentação",
      excerpt: "Aprenda sobre o uso de geogrelhas no reforço de pavimentos e sua importância na durabilidade de estradas e vias urbanas.",
      image: "https://images.unsplash.com/photo-1590736969955-eefec7f3c10e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Geogrelha",
      readTime: "9 min",
      author: "Prof. Ana Costa",
      date: "8 Jan 2024"
    }
  ]

  const stats = [
    { number: "500+", label: "Artigos Publicados" },
    { number: "50k+", label: "Leitores Mensais" },
    { number: "15+", label: "Especialistas" },
    { number: "5", label: "Anos de Experiência" }
  ]

  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 pt-20 xl:pl-80">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-accent-600/20 to-primary-600/20"></div>
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)"/>
        </svg>
      </div>

      <div className="container-custom relative z-10">
        {/* Hero Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center py-12 lg:py-16"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center bg-accent-600/10 text-accent-400 px-4 py-2 rounded-full text-sm font-medium mb-6"
          >
            <TrendingUp size={16} className="mr-2" />
            Portal Líder em Geotecnia
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl lg:text-6xl font-bold text-white mb-6"
          >
            Geossintéticos
            <span className="block gradient-text">em Foco</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto mb-8"
          >
            Conteúdo técnico especializado sobre geossintéticos, geotecnia e engenharia civil. 
            Mantenha-se atualizado com as últimas tendências e tecnologias do setor.
          </motion.p>

          {/* Stats */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto mb-12"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
                className="text-center"
              >
                <div className="text-3xl lg:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-400 text-sm font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Featured Posts Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="pb-16"
        >
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-white flex items-center">
              <BookOpen className="mr-3 text-accent-500" size={28} />
              Artigos em Destaque
            </h2>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              className="text-accent-400 hover:text-accent-300 font-medium flex items-center"
            >
              Ver todos <ArrowRight size={16} className="ml-1" />
            </motion.button>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Main Featured Post */}
            <motion.article 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.1, duration: 0.6 }}
              className="lg:row-span-2 card overflow-hidden group cursor-pointer"
              whileHover={{ y: -5 }}
            >
              <div className="relative h-64 lg:h-80 overflow-hidden">
                <img 
                  src={featuredPosts[0].image}
                  alt={featuredPosts[0].title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="bg-accent-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {featuredPosts[0].category}
                  </span>
                  {featuredPosts[0].trending && (
                    <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
                      <TrendingUp size={12} className="mr-1" />
                      Trending
                    </span>
                  )}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-accent-600 transition-colors">
                  {featuredPosts[0].title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {featuredPosts[0].excerpt}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center space-x-4">
                    <span className="flex items-center">
                      <User size={14} className="mr-1" />
                      {featuredPosts[0].author}
                    </span>
                    <span className="flex items-center">
                      <Clock size={14} className="mr-1" />
                      {featuredPosts[0].readTime}
                    </span>
                  </div>
                  <span>{featuredPosts[0].date}</span>
                </div>
              </div>
            </motion.article>

            {/* Secondary Posts */}
            <div className="space-y-6">
              {featuredPosts.slice(1).map((post, index) => (
                <motion.article 
                  key={post.id}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.2 + index * 0.1, duration: 0.6 }}
                  className="card overflow-hidden group cursor-pointer"
                  whileHover={{ y: -3 }}
                >
                  <div className="flex">
                    <div className="w-32 h-24 flex-shrink-0 overflow-hidden">
                      <img 
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="flex-1 p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-accent-600 text-sm font-medium">
                          {post.category}
                        </span>
                        <span className="text-gray-400 text-xs">{post.date}</span>
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-accent-600 transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <div className="flex items-center text-xs text-gray-500">
                        <User size={12} className="mr-1" />
                        <span className="mr-3">{post.author}</span>
                        <Clock size={12} className="mr-1" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>

          {/* Newsletter CTA */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="mt-12 bg-gradient-to-r from-accent-600 to-accent-700 rounded-2xl p-8 text-center"
          >
            <Star className="mx-auto text-accent-200 mb-4" size={32} />
            <h3 className="text-2xl font-bold text-white mb-4">
              Não Perca Nenhuma Novidade
            </h3>
            <p className="text-accent-100 mb-6 max-w-2xl mx-auto">
              Receba semanalmente os melhores conteúdos sobre geossintéticos e geotecnia 
              diretamente em seu e-mail.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Seu melhor e-mail"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 outline-none focus:ring-2 focus:ring-accent-300"
              />
              <button className="bg-white text-accent-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors">
                Assinar Agora
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}