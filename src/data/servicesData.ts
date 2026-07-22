import { ServiceItem, Testimonial, FaqItem, OrderStatus } from '../types';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'kra-pin-reg',
    slug: 'kra-pin-registration',
    title: 'KRA PIN REGISTRATION & RETRIEVAL',
    category: 'government',
    categoryName: 'GOVERNMENT & ECITIZEN',
    shortDesc: 'Instant creation of new KRA PINs, retrieval of forgotten PIN numbers, or email address updates on iTax.',
    fullDesc: 'We assist individuals and business entities with fresh Kenya Revenue Authority (KRA) PIN generation on the iTax portal, password resets, retrieval of misplaced PIN certificates, and updating linked mobile/email credentials.',
    turnaroundTime: '10 - 15 MINS',
    priceKes: 300,
    priceNote: 'Fixed standard fee',
    popular: true,
    officialPortal: 'iTax Kenya Portal',
    requiredDocuments: [
      'Original National ID Card Number',
      'Active Safaricom/Airtel Phone Number',
      'Active Email Address (we can set one up for you)',
      'Date of Birth as indicated on ID'
    ],
    processSteps: [
      {
        stepNumber: 1,
        title: 'DATA SUBMISSION',
        description: 'Send your ID number and phone details via WhatsApp or our secure instant form.'
      },
      {
        stepNumber: 2,
        title: 'PORTAL PROCESSING',
        description: 'Our certified Cyber Agent inputs and verifies your details directly on the iTax portal.'
      },
      {
        stepNumber: 3,
        title: 'PDF DELIVERY',
        description: 'Receive your official KRA PIN Certificate in PDF format via WhatsApp and Email instantly.'
      }
    ]
  },
  {
    id: 'kra-tax-returns',
    slug: 'kra-tax-returns-filing',
    title: 'KRA TAX RETURNS FILING (NIL & EMPLOYED)',
    category: 'government',
    categoryName: 'GOVERNMENT & ECITIZEN',
    shortDesc: 'Avoid Ksh 2,000 penalties. Prompt filing of Nil Returns or Employment P9 Returns on iTax.',
    fullDesc: 'Ensure 100% tax compliance with KRA. We handle Nil Tax Returns for students/unemployed and P9 Form returns for employed individuals before the annual deadline.',
    turnaroundTime: '10 MINS',
    priceKes: 250,
    popular: true,
    officialPortal: 'iTax Portal',
    requiredDocuments: [
      'KRA PIN Number',
      'iTax Password (we assist with resets if lost)',
      'P9 Form from employer (for employed returns)'
    ],
    processSteps: [
      {
        stepNumber: 1,
        title: 'PIN & AUTH CHECK',
        description: 'We log into your iTax account or perform password recovery.'
      },
      {
        stepNumber: 2,
        title: 'COMPUTATION & FILING',
        description: 'We calculate tax obligations or lodge Nil returns.'
      },
      {
        stepNumber: 3,
        title: 'E-SLIP ISSUANCE',
        description: 'You receive the official KRA filing receipt and e-slip immediately.'
      }
    ]
  },
  {
    id: 'ntsa-smart-dl',
    slug: 'ntsa-driving-license',
    title: 'NTSA DRIVING LICENSE & SMART DL BOOKING',
    category: 'government',
    categoryName: 'GOVERNMENT & ECITIZEN',
    shortDesc: 'Provisional DL generation, interim DL printing, Smart DL biometric appointment booking on NTSA TIMS / eCitizen.',
    fullDesc: 'Complete NTSA services including PDL processing, test booking, 1-year/3-year Interim Driving License generation, and Smart DL biometric capture booking.',
    turnaroundTime: '20 MINS',
    priceKes: 500,
    priceNote: 'Excludes official NTSA portal statutory fees',
    popular: true,
    officialPortal: 'eCitizen / NTSA TIMS',
    requiredDocuments: [
      'eCitizen Account Credentials',
      'Driving School ID / Pass Slip',
      'National ID Copy'
    ],
    processSteps: [
      {
        stepNumber: 1,
        title: 'TIMS PORTAL ACCESS',
        description: 'We verify your driving profile and current license class.'
      },
      {
        stepNumber: 2,
        title: 'APPOINTMENT / RENEWAL',
        description: 'We select your preferred Huduma Centre / NTSA office for Smart DL capture or generate your interim DL.'
      },
      {
        stepNumber: 3,
        title: 'DOCUMENT PRINTING',
        description: 'Download and print your NTSA payment slip and booking voucher.'
      }
    ]
  },
  {
    id: 'ecitizen-passport',
    slug: 'passport-application',
    title: 'ECITIZEN PASSPORT APPLICATION & APPOINTMENT',
    category: 'government',
    categoryName: 'GOVERNMENT & ECITIZEN',
    shortDesc: 'New East African Passport applications, renewals, lost passport replacement, and biometric slot booking.',
    fullDesc: 'End-to-end guidance for Kenyan Passports. Application form completion on eCitizen, document upload, fee payment processing, and appointment slot booking at Nyayo House, Kisumu, Mombasa, Nakuru, Eldoret, or Embu.',
    turnaroundTime: '30 MINS',
    priceKes: 1000,
    priceNote: 'Excludes government passport fee',
    popular: true,
    officialPortal: 'eCitizen Directorate of Immigration',
    requiredDocuments: [
      'Original ID Card',
      'Birth Certificate Number & Copy',
      'Recommender ID Number & KRA PIN',
      'Parents ID Numbers / Death Certificates',
      'Passport size photo (soft copy)'
    ],
    processSteps: [
      {
        stepNumber: 1,
        title: 'DATA ENTRY & VERIFICATION',
        description: 'We meticulously fill all family, recommender, and personal details without errors.'
      },
      {
        stepNumber: 2,
        title: 'BIOMETRIC SLOT BOOKING',
        description: 'We secure the earliest available appointment slot at your preferred passport center.'
      },
      {
        stepNumber: 3,
        title: 'DOSSIER COMPILATION',
        description: 'We print and assemble your complete application pack ready for submission.'
      }
    ]
  },
  {
    id: 'helb-application',
    slug: 'helb-application',
    title: 'HELB LOAN APPLICATION & CLEARANCE CERTIFICATE',
    category: 'government',
    categoryName: 'GOVERNMENT & ECITIZEN',
    shortDesc: 'First-time & subsequent HELB undergraduate loan applications, TVET loans, and Compliance Certificates.',
    fullDesc: 'Assistance for university and college students applying for Higher Education Loans Board (HELB) funding, scholarship applications, and issuing HELB Compliance Certificates for job seekers.',
    turnaroundTime: '25 MINS',
    priceKes: 400,
    officialPortal: 'HELB Portal / Higher Education Financing (HEF)',
    requiredDocuments: [
      'Student National ID / KCSE Index Number',
      'University / College Admission Letter',
      'Guarantors ID Numbers & KRA PINs',
      'Parental Status / ID Numbers',
      'Bank Account Details / Mobile Money Number'
    ],
    processSteps: [
      {
        stepNumber: 1,
        title: 'HEF/HELB PROFILE CREATION',
        description: 'Setup and verify student portal credentials.'
      },
      {
        stepNumber: 2,
        title: 'FINANCING FORM SUBMISSION',
        description: 'Accurate entry of financial background and academic details.'
      },
      {
        stepNumber: 3,
        title: 'GUARANTOR FORM PRINTING',
        description: 'Generate complete PDF for signing and commissioner stamping.'
      }
    ]
  },
  {
    id: 'kuccps-placement',
    slug: 'kuccps-placement',
    title: 'KUCCPS UNIVERSITY & COLLEGE PLACEMENT',
    category: 'government',
    categoryName: 'GOVERNMENT & ECITIZEN',
    shortDesc: 'Degree, diploma, and certificate course selection, cluster point calculation, and course revision.',
    fullDesc: 'Professional advisory and system submission for KCSE candidates selecting degree and diploma programs via the KUCCPS portal with real-time cluster points computation.',
    turnaroundTime: '20 MINS',
    priceKes: 500,
    officialPortal: 'KUCCPS Student Portal',
    requiredDocuments: [
      'KCSE Index Number & Year',
      'KCPE Index Number',
      'Birth Certificate Number',
      'Preferred Course List'
    ],
    processSteps: [
      {
        stepNumber: 1,
        title: 'CLUSTER CALCULATION',
        description: 'We calculate your exact subject cluster weights against university cut-offs.'
      },
      {
        stepNumber: 2,
        title: 'STRATEGIC SELECTION',
        description: 'Select top 6 combination choices to maximize admission probability.'
      },
      {
        stepNumber: 3,
        title: 'PORTAL SUBMISSION & RECEIPT',
        description: 'Pay application fee and print official confirmation slip.'
      }
    ]
  },
  {
    id: 'sha-registration',
    slug: 'sha-registration',
    title: 'SHA (SOCIAL HEALTH AUTHORITY) & NSSF REGISTRATION',
    category: 'government',
    categoryName: 'GOVERNMENT & ECITIZEN',
    shortDesc: 'Transition from NHIF to SHA, dependent registration, and NSSF member registration & statements.',
    fullDesc: 'Full setup for the new Social Health Authority (SHA/Taifa Care) scheme, updating family dependents, checking contribution status, and registering for NSSF pension numbers.',
    turnaroundTime: '15 MINS',
    priceKes: 300,
    popular: true,
    officialPortal: 'SHA Portal / NSSF Self-Service',
    requiredDocuments: [
      'National ID Card',
      'Mobile Phone Number',
      'Dependents ID / Birth Certificate Numbers (for SHA)'
    ],
    processSteps: [
      {
        stepNumber: 1,
        title: 'ACCOUNT VERIFICATION',
        description: 'Verify identity via OTP validation on official government servers.'
      },
      {
        stepNumber: 2,
        title: 'MEMBER REGISTRATION',
        description: 'Register primary member and add spouse/children.'
      },
      {
        stepNumber: 3,
        title: 'SHA / NSSF CARD ISSUANCE',
        description: 'Print official digital registration membership document.'
      }
    ]
  },
  {
    id: 'business-reg',
    slug: 'business-registration',
    title: 'BUSINESS NAME REGISTRATION & CR12 SEARCH',
    category: 'business',
    categoryName: 'BUSINESS & LEGAL REGISTRATION',
    shortDesc: 'BN2 Business Name registration, Limited Company setup (CR1), and Official CR12 Search Certificates.',
    fullDesc: 'Formally register your business in Kenya via BRS / eCitizen. We handle name reservation, business registration, partnership deeds, and official CR12 searches for bank account opening and tenders.',
    turnaroundTime: '24 - 48 HOURS',
    priceKes: 1500,
    priceNote: 'Exclusive of government statutory fee',
    popular: true,
    officialPortal: 'BRS (Business Registration Service) eCitizen',
    requiredDocuments: [
      '3 Proposed Business Names',
      'Proprietor / Directors ID & KRA PIN',
      'Passport Photo (soft copy)',
      'Physical Business Location details'
    ],
    processSteps: [
      {
        stepNumber: 1,
        title: 'NAME SEARCH & RESERVATION',
        description: 'Submit chosen names for BRS availability check.'
      },
      {
        stepNumber: 2,
        title: 'PROPRIETOR DETAILS ENTRY',
        description: 'Draft business objectives, shareholding, and location details.'
      },
      {
        stepNumber: 3,
        title: 'CERTIFICATE ISSUANCE',
        description: 'Receive official Certificate of Registration from the Registrar of Companies.'
      }
    ]
  },
  {
    id: 'good-conduct',
    slug: 'good-conduct-dci',
    title: 'POLICE CLEARANCE (GOOD CONDUCT CERTIFICATE)',
    category: 'government',
    categoryName: 'GOVERNMENT & ECITIZEN',
    shortDesc: 'DCI Police Clearance Certificate application, payment processing, and fingerprint booking.',
    fullDesc: 'Application for DCI Clearance Certificate on eCitizen, invoice generation, payment processing, and date selection for physical fingerprint capture at DCI Headquarters or local police stations.',
    turnaroundTime: '15 MINS',
    priceKes: 350,
    officialPortal: 'DCI eCitizen Portal',
    requiredDocuments: [
      'National ID Card Number',
      'eCitizen login details'
    ],
    processSteps: [
      {
        stepNumber: 1,
        title: 'FORM COMPLETION',
        description: 'Fill applicant background and select fingerprint center.'
      },
      {
        stepNumber: 2,
        title: 'PAYMENT PROCESSING',
        description: 'Process Ksh 1,050 government fee via M-Pesa.'
      },
      {
        stepNumber: 3,
        title: 'C24 FORM PRINTING',
        description: 'Print two copies of the C24 invoice and appointment slip.'
      }
    ]
  },
  {
    id: 'typing-printing',
    slug: 'printing-typing-scanning',
    title: 'HIGH-SPEED PRINTING, TYPING & SCANNING',
    category: 'printing',
    categoryName: 'PRINTING & TYPING',
    shortDesc: 'Laser B/W and High-Gloss Color Printing, OCR scanning, manual document typing & PDF binding.',
    fullDesc: 'Commercial grade document handling. High volume printing, thesis typing, contract formatting, high resolution OCR document scanning, document merging, and digital archive creation.',
    turnaroundTime: 'INSTANT / SAME DAY',
    priceKes: 10,
    priceNote: 'Per page starting rate',
    officialPortal: 'FlexFlares Cyber Print Desk',
    requiredDocuments: [
      'Soft copy file (Flash drive, Email, WhatsApp) OR Hard copy for typing/scanning'
    ],
    processSteps: [
      {
        stepNumber: 1,
        title: 'FILE RECEIPT & PREVIEW',
        description: 'Review layout, margins, and paper weight specifications.'
      },
      {
        stepNumber: 2,
        title: 'HIGH-PRECISION OUTPUT',
        description: 'Execute high-DPI laser printing or optical scanning.'
      },
      {
        stepNumber: 3,
        title: 'QUALITY FINISHING',
        description: 'Stapling, spiral binding, or digital PDF dispatch.'
      }
    ]
  },
  {
    id: 'cv-writing',
    slug: 'cv-writing-cover-letter',
    title: 'PROFESSIONAL CV WRITING & COVER LETTERS',
    category: 'design',
    categoryName: 'CREATIVE & DIGITAL',
    shortDesc: 'ATS-friendly resume restructuring, modern visual CV designs, and customized cover letters.',
    fullDesc: 'Stand out in job applications. We rebuild your CV into clean, high-impact, ATS-compliant formats tailored for corporate, NGO, civil service, or international job opportunities.',
    turnaroundTime: '2 - 4 HOURS',
    priceKes: 800,
    popular: true,
    requiredDocuments: [
      'Old CV or list of education, employment history, and key skills',
      'Target job position title'
    ],
    processSteps: [
      {
        stepNumber: 1,
        title: 'CAREER INTERVIEW',
        description: 'Brief discussion to capture key achievements and career highlights.'
      },
      {
        stepNumber: 2,
        title: 'ATS RESTRUCTURE & REDESIGN',
        description: 'Write crisp action bullet points and apply modern layout.'
      },
      {
        stepNumber: 3,
        title: 'REVIEW & EDITABLE DELIVERY',
        description: 'Provide both PDF and editable Word formats.'
      }
    ]
  },
  {
    id: 'graphic-design',
    slug: 'graphic-design-branding',
    title: 'GRAPHIC DESIGN & BRANDING ASSETS',
    category: 'design',
    categoryName: 'CREATIVE & DIGITAL',
    shortDesc: 'Logos, business cards, promotional posters, social media banners, and receipt book artwork.',
    fullDesc: 'Sharp visual design services for Kenyan entrepreneurs and businesses. Custom vector logos, promotional posters for M-Pesa shops, hardware, schools, and social media marketing graphics.',
    turnaroundTime: 'SAME DAY / 24 HRS',
    priceKes: 1200,
    requiredDocuments: [
      'Business name, tagline, color preferences, and key information to include'
    ],
    processSteps: [
      {
        stepNumber: 1,
        title: 'CONCEPT BRIEF',
        description: 'Gather specs, brand identity requirements, and target audience.'
      },
      {
        stepNumber: 2,
        title: 'VECTOR DRAFTING',
        description: 'Create high-resolution vector artwork in Adobe Illustrator/Photoshop.'
      },
      {
        stepNumber: 3,
        title: 'FINAL ASSET DELIVERY',
        description: 'Provide print-ready PDF, PNG, SVG, and social media formats.'
      }
    ]
  },
  {
    id: 'ict-hardware-software',
    slug: 'ict-support-hardware-software',
    title: 'GENERAL ICT SUPPORT & SYSTEM REPAIR',
    category: 'ict',
    categoryName: 'ICT & TECH SUPPORT',
    shortDesc: 'Windows OS re-installation, software setup, virus removal, network troubleshooting, and data backup.',
    fullDesc: 'Comprehensive ICT support for personal laptops and office workstations. Includes clean OS installations, driver updates, MS Office activation, antivirus installation, and hard drive data recovery.',
    turnaroundTime: '1 - 3 HOURS',
    priceKes: 1000,
    requiredDocuments: [
      'Laptop or Desktop CPU unit / External Hard Drive'
    ],
    processSteps: [
      {
        stepNumber: 1,
        title: 'SYSTEM DIAGNOSTICS',
        description: 'Hardware test and software error log check.'
      },
      {
        stepNumber: 2,
        title: 'OPTIMIZATION & REPAIR',
        description: 'Execute OS installation, virus purge, or component upgrade.'
      },
      {
        stepNumber: 3,
        title: 'BENCH TEST & DISPATCH',
        description: 'Run benchmark stability tests before returning equipment.'
      }
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    quote: 'FLEXFLARES HAD MY KRA TAX RETURNS FILED AND MY NTSA INTERIM DL PRINTED IN UNDER 15 MINUTES WHILE I WAITED. NO WAITING IN LONG QUEUES. PURE EFFICIENCY.',
    clientName: 'KAMAU NDIRANGU',
    clientRole: 'LOGISTICS DIRECTOR',
    location: 'NAIROBI CBD',
    serviceUsed: 'NTSA DL & KRA RETURNS'
  },
  {
    id: 't2',
    quote: 'I NEEDED MY BUSINESS NAME REGISTRATION AND CR12 URGENTLY FOR A GOVERNMENT TENDER DEADLINE. THEY HANDLED EVERYTHING ON BRS ECITIZEN IN RECORD TIME. ZERO MISTAKES.',
    clientName: 'GRACE OTENO',
    clientRole: 'FOUNDER, AFRIKA SUPPLIES',
    location: 'WESTLANDS',
    serviceUsed: 'BUSINESS REGISTRATION & CR12'
  },
  {
    id: 't3',
    quote: 'THEIR CV REDESIGN GOT ME THREE INTERVIEWS IN ONE WEEK. THE ATS FORMAT WAS CRISP, BOLD, AND DIRECT. BEST 800 KES I EVER SPENT.',
    clientName: 'BRIAN MUTUA',
    clientRole: 'SOFTWARE ENGINEER',
    location: 'KILIMANI',
    serviceUsed: 'PROFESSIONAL CV WRITING'
  },
  {
    id: 't4',
    quote: 'PASSPORT APPOINTMENTS USED TO BE A NIGHTMARE. FLEXFLARES BOOKED MY NYAYO HOUSE BIOMETRIC SLOT WITHIN 20 MINUTES AND COMPILED MY ENTIRE DOCUMENT DOSSIER.',
    clientName: 'FAITH CHEPNGETICH',
    clientRole: 'ENTREPRENEUR',
    location: 'ELDORET / NAIROBI',
    serviceUsed: 'ECITIZEN PASSPORT'
  }
];

export const FAQS: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'HOW FAST CAN I GET MY SERVICE PROCESSED AT FLEXFLARES?',
    answer: 'Standard eCitizen and iTax services (KRA PIN, Tax Returns, SHA registration, Good Conduct booking) take between 10 to 20 minutes. Business registrations and complex document formatting are completed within 24 hours.',
    category: 'SPEED & TIMELINES'
  },
  {
    id: 'faq-2',
    question: 'DO I NEED TO VISIT YOUR PHYSICAL SHOP IN NAIROBI TO GET HELP?',
    answer: 'No! Over 80% of our clients complete their services 100% online via WhatsApp or our web portal. You can submit documents digitally and receive official PDFs directly to your phone. If you prefer in-person service, visit our CBD shop on Kimathi Street.',
    category: 'ONLINE SERVICES'
  },
  {
    id: 'faq-3',
    question: 'WHAT PAYMENT METHODS DO YOU ACCEPT?',
    answer: 'We accept M-Pesa Buy Goods Till, Direct Paybill, Card Payments, and Cash for in-person shop visits. Official government statutory fees are paid directly to eCitizen/KRA via M-Pesa.',
    category: 'PAYMENTS'
  },
  {
    id: 'faq-4',
    question: 'WHAT IF MY KRA PIN IS LOCKED OR I FORGOT MY ITAX PASSWORD?',
    answer: 'We handle full iTax password recovery, security question reset, and security updates. If your PIN is blocked, we guide you through the KRA Helpdesk escalation process.',
    category: 'KRA TROUBLESHOOTING'
  },
  {
    id: 'faq-5',
    question: 'HOW DO I TRACK THE STATUS OF MY ONGOING APPLICATION?',
    answer: 'You can use our online Status Tracker on this website using your FlexFlares Reference Number (e.g. FLX-8829), or message our 24/7 WhatsApp desk for immediate real-time progress updates.',
    category: 'TRACKING'
  }
];

export const MOCK_TRACKING_SAMPLES: Record<string, OrderStatus> = {
  'FLX-8829': {
    trackingId: 'FLX-8829',
    serviceName: 'KRA PIN & TAX RETURN FILING',
    clientName: 'DANIEL KINYANJUI',
    status: 'COMPLETED',
    progressPercent: 100,
    estimatedCompletion: 'COMPLETED TODAY AT 10:14 AM',
    lastUpdated: '2026-07-22 10:14:02',
    notes: 'KRA Certificate PDF and iTax Return E-Slip generated and sent to WhatsApp.'
  },
  'FLX-9012': {
    trackingId: 'FLX-9012',
    serviceName: 'ECITIZEN PASSPORT APPLICATION',
    clientName: 'MARY WAMBUI',
    status: 'READY_FOR_PICKUP',
    progressPercent: 90,
    estimatedCompletion: 'TODAY AT 2:00 PM',
    lastUpdated: '2026-07-22 09:30:00',
    notes: 'Biometric slot secured for Nyayo House on Monday 8:30 AM. Dossier printed.'
  },
  'FLX-7741': {
    trackingId: 'FLX-7741',
    serviceName: 'BUSINESS NAME REGISTRATION (BN2)',
    clientName: 'TECHVENTURES KENYA',
    status: 'PROCESSING',
    progressPercent: 65,
    estimatedCompletion: 'TOMORROW AT 11:00 AM',
    lastUpdated: '2026-07-22 08:15:00',
    notes: 'Name search approved by BRS Registrar. Registration form lodged.'
  }
};
