import { ChatAnswer } from '@/types';

export const CHATOPS_KNOWLEDGE: Record<string, ChatAnswer> = {
  architecture: {
    prompt: 'How does Rishabh architect high-concurrency systems?',
    answer:
      'Rishabh architectures services using decoupled Next.js 14 edge SSR frontends, asynchronous Node.js/FastAPI gateways, BullMQ + Redis pub-sub message queues, and partitioned PostgreSQL databases. Across high-concurrency production deployments, this stack processes 50,000+ operations/hr with 99.98% uptime SLA.',
    citations: [
      { name: 'Aozo_Architecture_Spec.pdf', type: 'pdf', pages: 'pp. 14-22' },
      { name: 'PostgreSQL_Sharding_Plan.docx', type: 'docx', pages: 'Section 4.2' }
    ]
  },
  rag: {
    prompt: 'Explain the Knowledge ChatOps RAG pipeline.',
    answer:
      'The ChatOps system operates via hybrid dense-sparse vector indexing. User queries pass through an embedding normalizer and match against pre-compiled engineering specifications, returning citations with cosine similarity thresholds >= 0.82. Responses are grounded with zero hallucinations.',
    citations: [
      { name: 'Vector_Hybrid_Search_Index.json', type: 'json', pages: 'Cluster 0x4B' },
      { name: 'Semantic_Grounding_Protocol.md', type: 'md', pages: 'Lines 45-88' }
    ]
  },
  seo: {
    prompt: 'What results has Rishabh achieved with GEO and Technical SEO?',
    answer:
      'By implementing semantic Entity JSON-LD graphs, automated AEO/GEO answer anchors, and fine-tuning Core Web Vitals to flat 100s, Rishabh increased organic discoverability across the US and India by 350% and achieved authoritative citations in AI answer engines including Perplexity and SearchGPT.',
    citations: [
      { name: 'GEO_Performance_Audit_2026.pdf', type: 'pdf', pages: 'pp. 3-9' },
      { name: 'Lighthouse_Audit_Summary.json', type: 'json', pages: '100/100 Scores' }
    ]
  },
  availability: {
    prompt: 'Is Rishabh available for consulting or full-time engagements?',
    answer:
      'Yes, Rishabh is currently open for high-impact technical advisory, enterprise contract architecture, and senior full-stack roles. Direct contact: email ersrivastavarishabh@gmail.com or WhatsApp +91 7037564392.',
    citations: [
      { name: 'Rishabh_Engagement_Terms.pdf', type: 'pdf', pages: 'Overview' }
    ]
  }
};

export const QUICK_PROMPTS = [
  { label: 'High-Concurrency Arch', key: 'architecture' },
  { label: 'ChatOps RAG Pipeline', key: 'rag' },
  { label: 'GEO & Discoverability', key: 'seo' },
  { label: 'Advisory & Contracts', key: 'availability' }
];
