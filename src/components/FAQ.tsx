import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  const faqItems = [
    {
      question: "Qu'est-ce que le CBD?",
      answer: "Le CBD (cannabidiol) est un composé naturel extrait de la plante de chanvre. Contrairement au THC, le CBD n'a pas d'effet psychoactif et est légal en France. Il est reconnu pour ses propriétés relaxantes et apaisantes."
    },
    {
      question: "Le CBD peut-il provoquer des effets secondaires ?",
      answer: "Le CBD est généralement bien toléré. Certaines personnes peuvent ressentir une légère somnolence, une sécheresse buccale ou des changements d'appétit. Il est recommandé de commencer par de petites doses et de consulter un professionnel de santé si vous prenez des médicaments."
    },
    {
      question: "Quelle est la dose recommandée de CBD ?",
      answer: "La dose optimale varie selon chaque personne, le poids corporel et l'effet recherché. Nous recommandons de commencer par 5-10mg par jour et d'augmenter progressivement jusqu'à obtenir l'effet désiré. N'hésitez pas à nous contacter pour des conseils personnalisés."
    },
    {
      question: "Quels sont les avantages du CBD ?",
      answer: "Le CBD peut aider à réduire le stress, améliorer la qualité du sommeil, soulager les tensions musculaires et favoriser un sentiment de bien-être général. Nos produits sont testés en laboratoire pour garantir leur qualité et leur pureté."
    },
    {
      question: "Puis-je modifier mon adresse de livraison après avoir passé ma commande ?",
      answer: "Vous pouvez modifier votre adresse de livraison dans les 2 heures suivant votre commande en nous contactant au 06 65 35 49 64. Passé ce délai, votre commande sera déjà en préparation et ne pourra plus être modifiée."
    },
    {
      question: "Que se passe-t-il si ma commande ne parvient pas dans les délais impartis ?",
      answer: "Si votre commande n'arrive pas dans les délais annoncés, contactez-nous immédiatement. Nous effectuerons un suivi avec le transporteur et vous proposerons une solution (renvoi gratuit ou remboursement). Votre satisfaction est notre priorité."
    },
    {
      question: "Comment puis-je suivre ma commande ?",
      answer: "Dès l'expédition de votre commande, vous recevrez un email avec un numéro de suivi. Vous pourrez suivre votre colis en temps réel sur le site du transporteur. Vous pouvez aussi nous contacter pour un suivi personnalisé."
    },
    {
      question: "Combien de temps faut-il pour que je reçoive ma commande ?",
      answer: "Les commandes sont traitées sous 24h (jours ouvrés) et expédiées en Colissimo suivi. La livraison prend généralement 2-3 jours ouvrés en France métropolitaine. Pour les DOM-TOM, comptez 5-7 jours ouvrés."
    },
    {
      question: "Combien de temps faut-il pour que ma commande soit traitée ?",
      answer: "Toutes les commandes passées avant 15h sont traitées le jour même. Les commandes passées après 15h ou le weekend sont traitées le jour ouvré suivant. Vous recevrez une confirmation par email dès l'expédition."
    },
    {
      question: "Qu'est-ce que la MasterKush de 22% CBD ?",
      answer: "La MasterKush 22% CBD est une variété premium de notre gamme. Elle offre un taux élevé de CBD pour un effet relaxant puissant, avec des arômes terreux et épicés caractéristiques. Parfaite pour la détente en soirée."
    },
    {
      question: "Quelle dose est recommandée pour ressentir les effets pour la MasterKush de 22% CBD ?",
      answer: "Avec un taux de 22% de CBD, la MasterKush est puissante. Commencez par 0,1-0,2g en vaporisation ou infusion. Attendez 30-60 minutes avant d'augmenter la dose. Cette variété est idéale pour les utilisateurs expérimentés recherchant un effet intense."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Hero Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#08F06C]/5 via-transparent to-[#08F06C]/5 pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Questions fréquentes à propos de ce produit
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-[#08F06C] to-transparent rounded-full mx-auto"></div>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50 overflow-hidden hover:border-[#08F06C]/50 transition-all duration-300"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#08F06C] focus:ring-offset-2 focus:ring-offset-gray-900"
              >
                <span className="text-lg font-semibold text-white pr-4">
                  {item.question}
                </span>
                <div className="flex-shrink-0">
                  {openItems.includes(index) ? (
                    <ChevronUp className="w-6 h-6 text-[#08F06C]" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-[#08F06C]" />
                  )}
                </div>
              </button>
              
              {openItems.includes(index) && (
                <div className="px-6 pb-6">
                  <div className="border-t border-gray-700/50 pt-4">
                    <p className="text-gray-300 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;