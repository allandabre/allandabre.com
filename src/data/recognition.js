export const featuredOutlets = [
  { name: 'CIO.com',                         role: 'Contributing Author' },
  { name: 'ISACA',                           role: 'Exam Reviewer'       },
  { name: 'Risk Management Magazine (RIMS)', role: 'Contributing Author' },
  { name: 'GRIP',                            role: 'Contributing Author' },
  { name: 'NIST',                            role: 'Conference Speaker'  },
]

export const publications = [
  {
    outlet:   'ISACA',
    title:    'Rethinking Salesforce Security: From One-Time Scoping to Continuous Monitoring',
    date:     'October 2026',
    summary:  "As Salesforce expands into financially sensitive workflows like billing and commissions, recent breaches tied to groups like ShinyHunters show the platform needs the same continuous-monitoring rigor as core ERP systems — mapping specific control areas to COBIT objectives with clear ownership and review cadence.",
    url:      'https://www.isaca.org/resources/news-and-trends/industry-news/2026/rethinking-salesforce-security-from-one-time-scoping-to-continuous-monitoring',
  },
  {
    outlet:   'Risk Management Magazine (RIMS)',
    title:    'Managing Agent-to-Agent AI Risk in the Supply Chain',
    date:     'October 2026',
    summary:  "When AI agents from two different companies interact directly across a supply chain without human oversight, existing internal governance frameworks break down. The piece identifies three cross-boundary failure modes and recommends mutual agent authentication, shared logging standards, and ongoing due diligence on partners' AI governance maturity.",
    url:      'https://www.rmmagazine.com/articles/article/2026/10/06/managing-agent-to-agent-ai-risk-in-the-supply-chain',
  },
  {
    outlet:   'GRIP',
    title:    'Two AI labs, one shared failure, and a compliance question nobody has asked',
    date:     'September 2026',
    summary:  "Two 2026 incidents where test-stage AI models from OpenAI and Anthropic breached live corporate systems point to a structural governance gap — evaluation-stage AI risk falls between functions that each assume someone else owns it, with implications for vendor due diligence and EU AI Act Article 55 reporting.",
    url:      'https://www.grip.globalrelay.com/two-ai-labs-one-shared-failure-and-a-compliance-question-nobody-has-asked/',
  },
  {
    outlet:   'CIO.com',
    title:    'AI is making software cheap to build. Is your organization ready for what comes next?',
    date:     'October 2026',
    summary:  'AI coding agents are collapsing the cost of building custom software — shifting enterprise IT\'s core challenge from scarcity of development capacity to abundance, and the governance risk of tools that skip procurement and change review entirely. The real challenge becomes knowing what you own, and when to retire it.',
    url:      'https://www.cio.com/article/4231346/ai-is-making-software-cheap-to-build-is-your-organization-ready-for-what-comes-next.html',
  },
  {
    outlet:   'CIO.com',
    title:    "The EU AI Act just gave you a breach notification clock you didn't know about",
    date:     'September 2026',
    summary:  "Article 73 of the EU AI Act is triggered by an indirect causal link between an AI system and downstream harm, not a clean technical event — meaning incident response playbooks built around breach detection aren't equipped to catch it.",
    url:      'https://www.cio.com/article/4218777/the-eu-ai-act-just-gave-you-a-breach-notification-clock-you-didnt-know-about.html',
  },
  {
    outlet:   'CIO.com',
    title:    'With AI, control matters more than capability',
    date:     'July 2026',
    summary:  'Why enterprises should prioritize governance and architectural fit over benchmark scores when selecting AI models — and why the best AI model is the one your organization can actually govern.',
    url:      'https://www.cio.com/article/4203027/with-ai-control-matters-more-than-capability.html',
  },
  {
    outlet:   'CIO.com',
    title:    'The future of AI belongs to organizations that govern what they spend as well as what they build',
    date:     'June 2026',
    summary:  'A practitioner perspective on why enterprise AI governance must extend beyond capability to encompass cost intelligence, architectural discipline, and accountability frameworks aligned with regulatory requirements.',
    url:      'https://www.cio.com/article/4190711/the-future-of-ai-belongs-to-organizations-that-govern-what-they-spend-as-well-as-what-they-build.html',
  },
]

export const mediaQuotes = [
  {
    outlet:  'CIO',
    quote:   'Can it stop at the exact moment you want it to stop? Are you testing for that?',
    context: 'Cited as Technology Compliance and AI Lead at PwC, on distinguishing an AI agent\'s confidence level from its authority to act — advocating for an "agent harness" as a controls layer outside the model, rather than relying on policy documents or prompts.',
    url:     'https://www.cio.com/article/4208063/ai-agents-need-to-learn-when-enough-is-enough.html',
  },
  {
    outlet:  'TechTarget',
    quote:   'More becomes too heavy to maintain, less stops being useful. I\'d rather organizations start with these five fields and keep them current than build an elaborate 15-field template nobody maintains past month two.',
    context: 'Cited as Technology Compliance and AI Risk lead at PwC, advising on how AI leaders should structure a practical AI feature inventory — advocating for a streamlined five-field governance approach over elaborate templates.',
    url:     'https://www.techtarget.com/searcherp/feature/How-AI-leaders-can-build-an-AI-feature-inventory',
  },
  {
    outlet:  'BankInfoSecurity',
    quote:   'Lifting the export controls does not mean the original security concerns disappeared. It more likely means Commerce and Anthropic reached a level of comfort around the controls, safeguards, monitoring and access conditions.',
    context: 'Cited as technology compliance and AI risk lead at PwC, characterizing the US government approach to AI model regulation as a negotiated framework of deployment safeguards, a posture Dabre described as controlled advancement.',
    url:     'https://www.bankinfosecurity.com/us-lifts-export-curbs-on-anthropic-ai-models-a-32123',
  },
  {
    outlet:  'National Technology News',
    quote:   'For years the assumption was that frontier AI capability needed massive compute budgets, and that gave a handful of US labs, and the chipmakers behind them, a durable moat. DeepSeek R1 challenged that directly.',
    context: 'Cited as Technology Compliance & AI Lead at PwC, on the rise of Chinese AI models and the erosion of the assumption that frontier AI capability commands a durable premium.',
    url:     'https://nationaltechnology.co.uk/No_Longer_Behind_The_Rise_Of_Chinese_AI_Models_At_The_Enterprise_Level.php',
  },
  {
    outlet:  'Assured Intelligence',
    quote:   'This incident is a classic case of not getting the basics right. Access controls, role-based permissions, regular access reviews, and MFA play a critical role in limiting attacker movement.',
    context: 'Cited as AI risk and technology compliance leader at PwC, providing authoritative analysis on the South Staffordshire Water breach, a £1M incident attributed to foundational access control failures.',
    url:     'https://assured.co.uk/2026/ai-autopsy-south-staffordshire-waters-1m-lesson-in-visibility/',
  },
]

export const judgingRoles = [
  {
    org:     'Manning Publications',
    role:    'Technical Book Reviewer',
    scope:   'Manuscript Review — 2026',
    detail:  'Invited by Manning Publications to provide technical peer review on an in-progress manuscript, evaluating accuracy, depth, and practitioner relevance before publication.',
    badge:   'Peer Review',
  },
  {
    org:     'ISACA',
    role:    'Journal Reviewer',
    scope:   'ISACA Journal — 2026–2027',
    detail:  'Selected as a peer reviewer for the ISACA Journal, evaluating practitioner submissions across cybersecurity, risk, and governance domains for publication to a global professional audience.',
    badge:   'Peer Review',
  },
  {
    org:     'ISACA',
    role:    'Exam Content Reviewer',
    scope:   'CCS Certification Exam Manual',
    detail:  'Invited by ISACA to review and validate the Certified Cybersecurity Specialist (CCS) exam manual, evaluating the knowledge framework against which cybersecurity professionals are globally certified.',
    badge:   'Peer Review',
  },
  {
    org:     'Hack-Nation',
    role:    'Hackathon Judge',
    scope:   'Hack Nation 7th Global AI Hackathon — October 2026',
    detail:  'Invited to serve as a judge for the 7th Global AI Hackathon, organized by Hack-Nation with the MIT Club of Northern California and MIT Club of Germany, evaluating builder submissions across AI challenge tracks.',
    badge:   'Judging',
  },
  {
    org:     'MunichTech EXPO',
    role:    'Hackathon Judge',
    scope:   'MunichTech EXPO — Autumn Edition, September 2026',
    detail:  'Served as a Hackathon Judge at MunichTech EXPO (Autumn Edition), evaluating participant projects alongside presenting as a Featured Speaker at the same event.',
    badge:   'Judging',
  },
  {
    org:     'NeurIPS 2026',
    role:    'Industry Advisory Board (IAB) Reviewer',
    scope:   'IAB @ NeurIPS 2026 Workshop',
    detail:  'Served on the Industry Advisory Board, reviewing paper submissions for a NeurIPS 2026 workshop.',
    badge:   'Peer Review',
  },
]

export const speakingEngagements = [
  {
    org:     'NIST',
    role:    'Conference Speaker',
    scope:   'Additive Construction — The Path to Standardization Continues',
    session: 'Session 4: Sensor and Machine Learning for AC',
    date:    'July 30, 2026',
    detail:  'Invited to present alongside PwC colleague Eshaan Jain at the NIST Additive Construction conference, covering the application of sensor technology and machine learning to additive construction programs.',
    badge:   'Speaking',
    url:     'https://www.nist.gov/news-events/events/2026/07/additive-construction-path-standardization-continues',
  },
  {
    org:     'MunichTech EXPO',
    role:    'Featured Speaker',
    scope:   'Automating Governance: Building Resilient Risk & Compliance Architecture for AI Systems',
    session: 'Venue: codecentric AG, Munich',
    date:    'September 20–22, 2026',
    detail:  'Invited as a Featured Speaker at MunichTech EXPO (Autumn Edition), presenting on building resilient risk and compliance architecture for AI systems.',
    badge:   'Speaking',
    url:     'https://munichtechexpo.com/share/speaker/87',
  },
  {
    org:     'GRIP',
    role:    'Podcast Guest',
    scope:   'Allan Dabre on monitoring AI deployment',
    session: 'Hosted by Carmen Cracknell, GRIP Senior Reporter',
    date:    'September 21, 2026',
    detail:  'Interviewed on AI governance and compliance monitoring in enterprise settings, drawing on experience in enterprise risk, IT controls, and regulatory compliance.',
    badge:   'Podcast',
    url:     'https://www.grip.globalrelay.com/transcript-allan-dabre-podcast/',
  },
]
