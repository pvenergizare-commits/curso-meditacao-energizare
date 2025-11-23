import React from 'react';
import { Moon, Sun, BatteryCharging, ShieldCheck, Heart, Feather, Clock, PlayCircle } from 'lucide-react';
import { FeatureItem, TimelineItem, FAQItem } from './types';

export const COPY = {
  alert: "Últimas vagas com 80% de desconto – apenas para os 100 primeiros inscritos!",
  hero: {
    headline: "Dissipe a ansiedade e viva com mais bom humor, energia e disposição.",
    subheadline: "Administre a ansiedade e tenha ótimas noites de sono. Comece o dia leve e vitalizado.",
    painPoints: [
      "Você anda dormindo mal?",
      "Sente que vive cansado, sem disposição?",
      "A mente não desacelera?",
      "Quer acordar com energia sem remédios?"
    ],
    cta: "Sim, quero restaurar minha energia!",
    price: "Apenas 12x de R$ 29,90 e nada mais."
  },
  audience: {
    title: "Para quem é o Energizare?",
    description: "Nós ouvimos centenas de pessoas e entendemos exatamente o que você precisa. Este curso é para quem:",
    items: [
      "Sofre com ansiedade, estresse e insônia constantes.",
      "Sente-se sem energia e oscila entre agitação e apatia.",
      "Deseja voltar a dormir bem e acordar descansada.",
      "Quer disposição para o dia e leveza emocional.",
      "Busca um método prático, natural e sem contraindicação."
    ]
  },
  why: {
    title: "Por que as pessoas amam o Energizare?",
    subtitle: "Diferente de tudo que você já viu sobre bem-estar.",
    items: [
      {
        title: "Aulas curtas e práticas",
        description: "Conteúdo direto ao ponto para caber na sua rotina.",
        icon: <Clock className="w-6 h-6 text-brand-700" />
      },
      {
        title: "Aplicação imediata",
        description: "Resultados perceptíveis desde a primeira aula.",
        icon: <Sun className="w-6 h-6 text-brand-700" />
      },
      {
        title: "Baseado em rituais indianos",
        description: "Sabedoria milenar adaptada para o ocidente.",
        icon: <Feather className="w-6 h-6 text-brand-700" />
      },
      {
        title: "Suporte diário",
        description: "Acompanhamento via WhatsApp para tirar dúvidas.",
        icon: <Heart className="w-6 h-6 text-brand-700" />
      }
    ] as FeatureItem[]
  },
  quote: "Resolva isso com a energia que você já tem.",
  timeline: [
    {
      title: "Boas-vindas & Introdução",
      description: "Entenda os pilares da sua energia vital e como o curso vai transformar sua rotina.",
      duration: "5 min"
    },
    {
      title: "Rompendo a Inércia",
      description: "Métodos poderosos para tirar o corpo e a mente do estado de estagnação.",
      duration: "12 min"
    },
    {
      title: "O Despertar Correto",
      description: "Método para concluir o descanso pela manhã e começar o dia com clareza.",
      duration: "15 min"
    },
    {
      title: "Rituais Diários de Energia",
      description: "Pequenas práticas para manter o tanque de energia cheio durante o dia.",
      duration: "20 min"
    },
    {
      title: "As 5 Meditações Indianas",
      description: "Práticas exclusivas guiadas para diferentes estados emocionais.",
      duration: "45 min (Total)"
    },
    {
      title: "Sono Reparador",
      description: "Técnicas de desaceleração para garantir uma noite profunda de sono.",
      duration: "18 min"
    }
  ] as TimelineItem[],
  guarantee: {
    title: "Garantia Blindada de 7 Dias",
    text: "Entre e experimente à vontade. Se você não sentir melhora na primeira semana, basta pedir o reembolso e receberá todo o seu dinheiro de volta. O risco é todo nosso.",
    badge: "Risco Zero"
  },
  stack: {
    title: "O que você recebe hoje:",
    items: [
      "Acesso vitalício ao curso Energizare completo",
      "Métodos e rituais de restauração energética",
      "5 meditações indianas exclusivas",
      "Suporte diário e humanizado via WhatsApp",
      "Garantia incondicional de 7 dias",
      "Acesso imediato pela plataforma Eduzz"
    ],
    finalCall: "Últimas vagas com 80% de desconto"
  },
  faq: [
    {
      question: "Preciso ter experiência com meditação?",
      answer: "Não! As práticas são simples, guiadas e explicadas passo a passo. Foi desenhado para iniciantes."
    },
    {
      question: "Funciona rápido?",
      answer: "Sim. Nossos alunos relatam sensação de alívio e melhora na disposição logo nas primeiras aulas."
    },
    {
      question: "Preciso dedicar muito tempo?",
      answer: "Não. Bastam poucos minutos por dia para realizar os mini rituais e sentir a diferença."
    },
    {
      question: "O curso é vitalício?",
      answer: "Sim, para esta turma dos 100 primeiros, o acesso é permanente."
    },
    {
      question: "Posso fazer sendo sedentário?",
      answer: "Sim. Apenas evite os exercícios respiratórios mais intensos se tiver restrições médicas, mas 90% do curso é acessível a todos."
    }
  ] as FAQItem[],
  author: {
    name: "Raymundo Montealto",
    bio: "Escritor, palestrante e especialista em práticas de restauração energética. Após anos de estudo sobre ansiedade e vitalidade, Raymundo desenvolveu o método Energizare para ajudar pessoas comuns a reencontrarem sua alegria de viver usando apenas seus recursos internos.",
    role: "Criador do Método Energizare"
  }
};