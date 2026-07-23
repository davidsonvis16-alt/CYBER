import { ServiceItem, Testimonial, FaqItem, OrderStatus } from '../types';

export const SERVICES_DATA: ServiceItem[] = [
  // GOVERNMENT & CITIZEN SERVICES
  {
    id: 'ecitizen-account',
    slug: 'ecitizen-account-creation',
    title: 'eCitizen Account Creation & Management',
    category: 'government',
    categoryName: 'GOVERNMENT & CITIZEN SERVICES',
    shortDesc: 'eCitizen account setup, password recovery, and account verification.',
    fullDesc: 'Create and manage your eCitizen account for access to all government online services.',
    turnaroundTime: '10 - 15 MINS',
    priceKes: 300,
    popular: true,
    requiredDocuments: ['National ID Card Number', 'Active Mobile Phone Number', 'Email Address'],
    processSteps: [
      { stepNumber: 1, title: 'ACCOUNT SETUP', description: 'Create your eCitizen account with verified credentials.' },
      { stepNumber: 2, title: 'VERIFICATION', description: 'Verify identity via OTP and security questions.' },
      { stepNumber: 3, title: 'CONFIRMATION', description: 'Receive account credentials and access details.' }
    ]
  },
  {
    id: 'national-id-replacement',
    slug: 'national-id-replacement',
    title: 'National ID Card Replacement & Application',
    category: 'government',
    categoryName: 'GOVERNMENT & CITIZEN SERVICES',
    shortDesc: 'Lost or damaged ID card replacement on eCitizen.',
    fullDesc: 'Apply for replacement national ID cards for lost, damaged, or stolen documents.',
    turnaroundTime: '20 MINS',
    priceKes: 400,
    requiredDocuments: ['Birth Certificate Number', 'eCitizen Account Details', 'Proof of Loss (Police Report if lost)'],
    processSteps: [
      { stepNumber: 1, title: 'APPLICATION FORM', description: 'Complete replacement application on eCitizen.' },
      { stepNumber: 2, title: 'DOCUMENT UPLOAD', description: 'Upload required supporting documents.' },
      { stepNumber: 3, title: 'APPOINTMENT BOOKING', description: 'Secure Huduma Centre appointment for fingerprints.' }
    ]
  },
  {
    id: 'passport-application',
    slug: 'passport-application',
    title: 'Passport Application & Renewal',
    category: 'government',
    categoryName: 'GOVERNMENT & CITIZEN SERVICES',
    shortDesc: 'New passport applications, renewals, and biometric appointments.',
    fullDesc: 'Full passport service including application form completion, document verification, and appointment booking.',
    turnaroundTime: '30 MINS',
    priceKes: 1000,
    priceNote: 'Excludes government passport fee',
    popular: true,
    requiredDocuments: ['National ID Card', 'Birth Certificate', 'Recommender Details', 'Passport Photo'],
    processSteps: [
      { stepNumber: 1, title: 'DATA ENTRY', description: 'Complete passport application with all required details.' },
      { stepNumber: 2, title: 'DOCUMENT COMPILATION', description: 'Assemble complete dossier for submission.' },
      { stepNumber: 3, title: 'APPOINTMENT BOOKING', description: 'Secure biometric capture slot at preferred center.' }
    ]
  },
  {
    id: 'good-conduct',
    slug: 'good-conduct-certificate',
    title: 'Police Clearance - Good Conduct Certificate',
    category: 'government',
    categoryName: 'GOVERNMENT & CITIZEN SERVICES',
    shortDesc: 'DCI police clearance certificate application and booking.',
    fullDesc: 'Apply for police clearance certificates with fingerprint appointment scheduling.',
    turnaroundTime: '15 MINS',
    priceKes: 350,
    requiredDocuments: ['National ID Number', 'eCitizen Credentials'],
    processSteps: [
      { stepNumber: 1, title: 'FORM COMPLETION', description: 'Fill DCI clearance application form.' },
      { stepNumber: 2, title: 'APPOINTMENT BOOKING', description: 'Schedule fingerprint capture appointment.' },
      { stepNumber: 3, title: 'PAYMENT PROCESSING', description: 'Process government fee via M-Pesa.' }
    ]
  },
  {
    id: 'marriage-cert',
    slug: 'marriage-certificate-services',
    title: 'Marriage Certificate Services',
    category: 'government',
    categoryName: 'GOVERNMENT & CITIZEN SERVICES',
    shortDesc: 'Marriage certificate application and registration.',
    fullDesc: 'Register or apply for marriage certificates through the appropriate government channels.',
    turnaroundTime: '30 MINS',
    priceKes: 350,
    requiredDocuments: ['Valid ID Card', 'Spouse Details', 'Marriage Date & Location'],
    processSteps: [
      { stepNumber: 1, title: 'INFORMATION COLLECTION', description: 'Gather required marriage details.' },
      { stepNumber: 2, title: 'FORM SUBMISSION', description: 'Submit application to relevant authorities.' },
      { stepNumber: 3, title: 'CERTIFICATE ISSUANCE', description: 'Receive official marriage certificate.' }
    ]
  },
  {
    id: 'birth-cert',
    slug: 'birth-certificate-application',
    title: 'Birth Certificate Application',
    category: 'government',
    categoryName: 'GOVERNMENT & CITIZEN SERVICES',
    shortDesc: 'Birth certificate registration and application.',
    fullDesc: 'Register births or apply for birth certificates through government systems.',
    turnaroundTime: '20 MINS',
    priceKes: 300,
    requiredDocuments: ['Child Full Names', 'Date of Birth', 'Parent ID Numbers'],
    processSteps: [
      { stepNumber: 1, title: 'REGISTRATION FORM', description: 'Complete birth registration application.' },
      { stepNumber: 2, title: 'DOCUMENT VERIFICATION', description: 'Verify parent and child details.' },
      { stepNumber: 3, title: 'CERTIFICATE DELIVERY', description: 'Obtain official birth certificate.' }
    ]
  },
  {
    id: 'driving-license',
    slug: 'driving-license-renewal',
    title: 'Driving Licence Renewal & Smart DL',
    category: 'government',
    categoryName: 'GOVERNMENT & CITIZEN SERVICES',
    shortDesc: 'Driving license renewal and biometric Smart DL booking.',
    fullDesc: 'Renew driving licenses and book Smart DL biometric appointments.',
    turnaroundTime: '20 MINS',
    priceKes: 500,
    priceNote: 'Excludes NTSA statutory fees',
    popular: true,
    requiredDocuments: ['eCitizen Credentials', 'Current Driving License', 'National ID'],
    processSteps: [
      { stepNumber: 1, title: 'PORTAL ACCESS', description: 'Access NTSA portal and verify driving record.' },
      { stepNumber: 2, title: 'RENEWAL PROCESSING', description: 'Process license renewal or interim DL.' },
      { stepNumber: 3, title: 'SMART DL BOOKING', description: 'Schedule biometric capture appointment.' }
    ]
  },
  {
    id: 'ntsa-services',
    slug: 'ntsa-services',
    title: 'NTSA Services & TIMS Portal',
    category: 'government',
    categoryName: 'GOVERNMENT & CITIZEN SERVICES',
    shortDesc: 'NTSA portal assistance and services.',
    fullDesc: 'Navigation and processing of NTSA TIMS portal services.',
    turnaroundTime: '15 MINS',
    priceKes: 400,
    requiredDocuments: ['NTSA Account Details', 'National ID'],
    processSteps: [
      { stepNumber: 1, title: 'PORTAL LOGIN', description: 'Access NTSA TIMS portal securely.' },
      { stepNumber: 2, title: 'SERVICE PROCESSING', description: 'Complete required NTSA services.' },
      { stepNumber: 3, title: 'DOCUMENT GENERATION', description: 'Generate required certificates or forms.' }
    ]
  },
  {
    id: 'vehicle-search',
    slug: 'vehicle-search-transfer',
    title: 'Vehicle Search & Transfer Services',
    category: 'government',
    categoryName: 'GOVERNMENT & CITIZEN SERVICES',
    shortDesc: 'Vehicle ownership search and transfer processing.',
    fullDesc: 'Search vehicle records and process ownership transfers.',
    turnaroundTime: '25 MINS',
    priceKes: 500,
    requiredDocuments: ['Vehicle Registration Number', 'Current Owner ID'],
    processSteps: [
      { stepNumber: 1, title: 'VEHICLE SEARCH', description: 'Query vehicle records in system.' },
      { stepNumber: 2, title: 'TRANSFER INITIATION', description: 'Begin ownership transfer process.' },
      { stepNumber: 3, title: 'DOCUMENTATION', description: 'Generate transfer documents.' }
    ]
  },
  {
    id: 'kra-pin-reg',
    slug: 'kra-pin-registration',
    title: 'KRA PIN Registration & Retrieval',
    category: 'government',
    categoryName: 'GOVERNMENT & CITIZEN SERVICES',
    shortDesc: 'KRA PIN creation and retrieval services.',
    fullDesc: 'Create new KRA PINs or retrieve forgotten PIN numbers.',
    turnaroundTime: '10 - 15 MINS',
    priceKes: 300,
    popular: true,
    requiredDocuments: ['National ID Number', 'Mobile Phone Number', 'Email Address'],
    processSteps: [
      { stepNumber: 1, title: 'DATA SUBMISSION', description: 'Provide identity and contact details.' },
      { stepNumber: 2, title: 'PORTAL PROCESSING', description: 'Process on iTax portal securely.' },
      { stepNumber: 3, title: 'CERTIFICATE DELIVERY', description: 'Receive KRA PIN certificate.' }
    ]
  },
  {
    id: 'helb-services',
    slug: 'helb-loan-services',
    title: 'HELB Loan & Scholarship Services',
    category: 'government',
    categoryName: 'GOVERNMENT & CITIZEN SERVICES',
    shortDesc: 'HELB loan applications and scholarship processing.',
    fullDesc: 'Complete HELB loan and scholarship application services.',
    turnaroundTime: '25 MINS',
    priceKes: 400,
    requiredDocuments: ['Student ID', 'Admission Letter', 'Guarantor Details'],
    processSteps: [
      { stepNumber: 1, title: 'FORM COMPLETION', description: 'Complete HELB application form.' },
      { stepNumber: 2, title: 'DOCUMENT ASSEMBLY', description: 'Compile all supporting documents.' },
      { stepNumber: 3, title: 'SUBMISSION', description: 'Submit application to HELB portal.' }
    ]
  },
  {
    id: 'sha-nssf',
    slug: 'sha-nssf-registration',
    title: 'SHA & NSSF Registration Services',
    category: 'government',
    categoryName: 'GOVERNMENT & CITIZEN SERVICES',
    shortDesc: 'Social Health Authority and NSSF member services.',
    fullDesc: 'Register with SHA/Taifa Care and NSSF, manage dependents and contributions.',
    turnaroundTime: '15 MINS',
    priceKes: 300,
    popular: true,
    requiredDocuments: ['National ID', 'Mobile Number', 'Dependent Details (if applicable)'],
    processSteps: [
      { stepNumber: 1, title: 'ACCOUNT VERIFICATION', description: 'Verify identity on government servers.' },
      { stepNumber: 2, title: 'MEMBER REGISTRATION', description: 'Register as member and add dependents.' },
      { stepNumber: 3, title: 'CARD ISSUANCE', description: 'Receive membership card or certificate.' }
    ]
  },
  {
    id: 'crb-clearance',
    slug: 'crb-clearance-guidance',
    title: 'CRB Clearance Guidance & Services',
    category: 'government',
    categoryName: 'GOVERNMENT & CITIZEN SERVICES',
    shortDesc: 'Credit Reference Bureau clearance and assistance.',
    fullDesc: 'Guidance and assistance with CRB clearance processes and dispute resolution.',
    turnaroundTime: '20 MINS',
    priceKes: 350,
    requiredDocuments: ['National ID', 'CRB Access Details'],
    processSteps: [
      { stepNumber: 1, title: 'CRB CHECK', description: 'Access and review your CRB report.' },
      { stepNumber: 2, title: 'DISPUTE GUIDANCE', description: 'Guide dispute resolution if needed.' },
      { stepNumber: 3, title: 'CLEARANCE STATUS', description: 'Confirm final clearance status.' }
    ]
  },

  // ONLINE APPLICATIONS
  {
    id: 'jobs-application',
    slug: 'jobs-application-local-abroad',
    title: 'Jobs Application (Local & Abroad)',
    category: 'online-applications',
    categoryName: 'ONLINE APPLICATIONS',
    shortDesc: 'Local and international job application support.',
    fullDesc: 'Complete job application services for local and international opportunities.',
    turnaroundTime: '30 MINS',
    priceKes: 500,
    requiredDocuments: ['CV/Resume', 'Job Title & Link', 'Cover Letter'],
    processSteps: [
      { stepNumber: 1, title: 'APPLICATION REVIEW', description: 'Review job requirements and optimize application.' },
      { stepNumber: 2, title: 'FORM COMPLETION', description: 'Complete application forms accurately.' },
      { stepNumber: 3, title: 'SUBMISSION', description: 'Submit application with all documents.' }
    ]
  },
  {
    id: 'university-application',
    slug: 'university-college-applications',
    title: 'University & College Applications',
    category: 'online-applications',
    categoryName: 'ONLINE APPLICATIONS',
    shortDesc: 'University and college admission applications.',
    fullDesc: 'Complete university application process including portal setup and submission.',
    turnaroundTime: '20 MINS',
    priceKes: 500,
    requiredDocuments: ['Admission Requirements', 'KCSE Results', 'Personal Details'],
    processSteps: [
      { stepNumber: 1, title: 'PORTAL CREATION', description: 'Create university application portal account.' },
      { stepNumber: 2, title: 'APPLICATION COMPLETION', description: 'Fill application form with all details.' },
      { stepNumber: 3, title: 'SUBMISSION & CONFIRMATION', description: 'Submit application and receive confirmation.' }
    ]
  },
  {
    id: 'scholarship-application',
    slug: 'scholarship-applications',
    title: 'Scholarship Applications',
    category: 'online-applications',
    categoryName: 'ONLINE APPLICATIONS',
    shortDesc: 'Scholarship program applications and submissions.',
    fullDesc: 'Apply for local and international scholarship opportunities.',
    turnaroundTime: '30 MINS',
    priceKes: 600,
    requiredDocuments: ['Academic Records', 'Personal Statement', 'Recommender Letters'],
    processSteps: [
      { stepNumber: 1, title: 'OPPORTUNITY RESEARCH', description: 'Identify suitable scholarship programs.' },
      { stepNumber: 2, title: 'APPLICATION ASSEMBLY', description: 'Prepare all required documents.' },
      { stepNumber: 3, title: 'SUBMISSION', description: 'Submit complete application package.' }
    ]
  },
  {
    id: 'visa-application',
    slug: 'visa-application-assistance',
    title: 'Visa Application Assistance',
    category: 'online-applications',
    categoryName: 'ONLINE APPLICATIONS',
    shortDesc: 'Visa application form completion and guidance.',
    fullDesc: 'Assistance with visa application forms and document preparation.',
    turnaroundTime: '30 MINS',
    priceKes: 800,
    requiredDocuments: ['Passport Copy', 'Travel Details', 'Financial Documents'],
    processSteps: [
      { stepNumber: 1, title: 'FORM GUIDANCE', description: 'Guide through visa application process.' },
      { stepNumber: 2, title: 'DOCUMENT VERIFICATION', description: 'Verify document accuracy and completeness.' },
      { stepNumber: 3, title: 'SUBMISSION SUPPORT', description: 'Support with online or physical submission.' }
    ]
  },
  {
    id: 'tender-application',
    slug: 'tender-applications',
    title: 'Tender Applications',
    category: 'online-applications',
    categoryName: 'ONLINE APPLICATIONS',
    shortDesc: 'Government and private tender bid preparation.',
    fullDesc: 'Complete tender application and bid documentation services.',
    turnaroundTime: '1 - 2 HOURS',
    priceKes: 1500,
    requiredDocuments: ['Company Details', 'Tender Document', 'Financial Statements'],
    processSteps: [
      { stepNumber: 1, title: 'TENDER REVIEW', description: 'Analyze tender requirements thoroughly.' },
      { stepNumber: 2, title: 'BID PREPARATION', description: 'Prepare complete bid documentation.' },
      { stepNumber: 3, title: 'SUBMISSION', description: 'Submit bid before deadline.' }
    ]
  },

  // COMPUTER SERVICES
  {
    id: 'typing-data-entry',
    slug: 'typing-data-entry',
    title: 'Typing & Data Entry',
    category: 'computer',
    categoryName: 'COMPUTER SERVICES',
    shortDesc: 'Professional typing and data entry services.',
    fullDesc: 'Fast and accurate typing, data entry, and document creation.',
    turnaroundTime: 'SAME DAY',
    priceKes: 10,
    priceNote: 'Per page',
    requiredDocuments: ['Hard copy or soft copy of document'],
    processSteps: [
      { stepNumber: 1, title: 'CONTENT REVIEW', description: 'Review document for accuracy.' },
      { stepNumber: 2, title: 'TYPING', description: 'Type or enter data with precision.' },
      { stepNumber: 3, title: 'PROOFREADING', description: 'Proofread and deliver formatted document.' }
    ]
  },
  {
    id: 'printing-bw-color',
    slug: 'printing-black-white-color',
    title: 'Printing (Black & White & Colour)',
    category: 'computer',
    categoryName: 'COMPUTER SERVICES',
    shortDesc: 'High-quality laser and color printing.',
    fullDesc: 'Professional printing services in black & white and full color.',
    turnaroundTime: 'INSTANT',
    priceKes: 10,
    priceNote: 'Per page starting rate',
    requiredDocuments: ['Digital document file'],
    processSteps: [
      { stepNumber: 1, title: 'FILE PREVIEW', description: 'Review layout and specifications.' },
      { stepNumber: 2, title: 'PRINTING', description: 'Execute high-quality printing.' },
      { stepNumber: 3, title: 'FINISHING', description: 'Collate and bind as needed.' }
    ]
  },
  {
    id: 'photocopying',
    slug: 'photocopying-services',
    title: 'Photocopying',
    category: 'computer',
    categoryName: 'COMPUTER SERVICES',
    shortDesc: 'Professional photocopying services.',
    fullDesc: 'Quality photocopying with various paper options.',
    turnaroundTime: 'INSTANT',
    priceKes: 5,
    priceNote: 'Per copy',
    requiredDocuments: ['Original document'],
    processSteps: [
      { stepNumber: 1, title: 'DOCUMENT PLACEMENT', description: 'Place original on copier.' },
      { stepNumber: 2, title: 'COPYING', description: 'Create clear high-quality copies.' },
      { stepNumber: 3, title: 'QUALITY CHECK', description: 'Verify copy quality.' }
    ]
  },
  {
    id: 'scanning',
    slug: 'scanning-services',
    title: 'Scanning',
    category: 'computer',
    categoryName: 'COMPUTER SERVICES',
    shortDesc: 'High-resolution document scanning.',
    fullDesc: 'Professional OCR and high-resolution document scanning.',
    turnaroundTime: 'SAME DAY',
    priceKes: 20,
    priceNote: 'Per page',
    requiredDocuments: ['Physical documents'],
    processSteps: [
      { stepNumber: 1, title: 'DOCUMENT PREPARATION', description: 'Prepare documents for scanning.' },
      { stepNumber: 2, title: 'SCANNING', description: 'Scan at high resolution with OCR.' },
      { stepNumber: 3, title: 'DIGITAL DELIVERY', description: 'Deliver as PDF or image files.' }
    ]
  },
  {
    id: 'lamination',
    slug: 'document-lamination',
    title: 'Document Lamination',
    category: 'computer',
    categoryName: 'COMPUTER SERVICES',
    shortDesc: 'Professional document lamination services.',
    fullDesc: 'Protect documents with professional lamination.',
    turnaroundTime: 'INSTANT',
    priceKes: 50,
    requiredDocuments: ['Document to laminate'],
    processSteps: [
      { stepNumber: 1, title: 'SIZE SELECTION', description: 'Choose lamination thickness and size.' },
      { stepNumber: 2, title: 'LAMINATION', description: 'Apply laminate using professional equipment.' },
      { stepNumber: 3, title: 'TRIMMING', description: 'Trim edges for professional finish.' }
    ]
  },
  {
    id: 'binding',
    slug: 'binding-services',
    title: 'Binding',
    category: 'computer',
    categoryName: 'COMPUTER SERVICES',
    shortDesc: 'Spiral and comb binding services.',
    fullDesc: 'Professional document binding - spiral, comb, and thermal.',
    turnaroundTime: 'SAME DAY',
    priceKes: 100,
    requiredDocuments: ['Documents to bind'],
    processSteps: [
      { stepNumber: 1, title: 'DOCUMENT PREPARATION', description: 'Prepare documents for binding.' },
      { stepNumber: 2, title: 'BINDING', description: 'Apply chosen binding method.' },
      { stepNumber: 3, title: 'QUALITY CHECK', description: 'Verify binding durability.' }
    ]
  },
  {
    id: 'passport-photos',
    slug: 'passport-photos',
    title: 'Passport Photos',
    category: 'computer',
    categoryName: 'COMPUTER SERVICES',
    shortDesc: 'Professional passport-standard photography.',
    fullDesc: 'Studio-quality passport photos meeting international standards.',
    turnaroundTime: '15 MINS',
    priceKes: 150,
    requiredDocuments: ['None - on-site photography'],
    processSteps: [
      { stepNumber: 1, title: 'PHOTO SETUP', description: 'Professional studio setup.' },
      { stepNumber: 2, title: 'PHOTOGRAPHY', description: 'Take passport-compliant photos.' },
      { stepNumber: 3, title: 'PRINTING & DELIVERY', description: 'Print and deliver photos.' }
    ]
  },
  {
    id: 'cv-writing',
    slug: 'cv-writing-updating',
    title: 'CV Writing & Updating',
    category: 'computer',
    categoryName: 'COMPUTER SERVICES',
    shortDesc: 'Professional CV creation and updates.',
    fullDesc: 'ATS-friendly CV writing and redesign services.',
    turnaroundTime: '2 - 4 HOURS',
    priceKes: 800,
    popular: true,
    requiredDocuments: ['Current CV or career information', 'Job target'],
    processSteps: [
      { stepNumber: 1, title: 'CAREER INTERVIEW', description: 'Discuss career and achievements.' },
      { stepNumber: 2, title: 'CV RESTRUCTURE', description: 'Rewrite for impact and ATS compliance.' },
      { stepNumber: 3, title: 'DELIVERY', description: 'Provide PDF and Word formats.' }
    ]
  },
  {
    id: 'cover-letter',
    slug: 'cover-letter-writing',
    title: 'Cover Letter Writing',
    category: 'computer',
    categoryName: 'COMPUTER SERVICES',
    shortDesc: 'Professional cover letter creation.',
    fullDesc: 'Customized cover letters tailored for job applications.',
    turnaroundTime: '1 - 2 HOURS',
    priceKes: 400,
    requiredDocuments: ['Job description', 'Company information'],
    processSteps: [
      { stepNumber: 1, title: 'CONTENT GATHERING', description: 'Review job and company details.' },
      { stepNumber: 2, title: 'LETTER WRITING', description: 'Write compelling cover letter.' },
      { stepNumber: 3, title: 'DELIVERY', description: 'Provide polished document.' }
    ]
  },
  {
    id: 'recommendation-letters',
    slug: 'recommendation-letters',
    title: 'Recommendation Letters',
    category: 'computer',
    categoryName: 'COMPUTER SERVICES',
    shortDesc: 'Professional recommendation letter formatting.',
    fullDesc: 'Assistance with recommendation letter presentation and formatting.',
    turnaroundTime: '1 HOUR',
    priceKes: 300,
    requiredDocuments: ['Recommender details', 'Purpose'],
    processSteps: [
      { stepNumber: 1, title: 'INFORMATION COLLECTION', description: 'Gather recommender and purpose details.' },
      { stepNumber: 2, title: 'LETTER FORMATTING', description: 'Format professionally.' },
      { stepNumber: 3, title: 'DELIVERY', description: 'Provide final document.' }
    ]
  },
  {
    id: 'profile-creation',
    slug: 'professional-profile-creation',
    title: 'Professional Profile Creation',
    category: 'computer',
    categoryName: 'COMPUTER SERVICES',
    shortDesc: 'Online professional profile setup.',
    fullDesc: 'Create and optimize LinkedIn and professional profiles.',
    turnaroundTime: '2 - 4 HOURS',
    priceKes: 500,
    requiredDocuments: ['Personal information', 'Career details'],
    processSteps: [
      { stepNumber: 1, title: 'PROFILE SETUP', description: 'Create LinkedIn or profile account.' },
      { stepNumber: 2, title: 'CONTENT CREATION', description: 'Write compelling professional content.' },
      { stepNumber: 3, title: 'OPTIMIZATION', description: 'Optimize for search visibility.' }
    ]
  },

  // INTERNET SERVICES
  {
    id: 'email-creation',
    slug: 'email-creation-recovery',
    title: 'Email Creation & Recovery',
    category: 'internet',
    categoryName: 'INTERNET SERVICES',
    shortDesc: 'Gmail and email account creation and recovery.',
    fullDesc: 'Create new email accounts and recover lost email access.',
    turnaroundTime: '10 - 15 MINS',
    priceKes: 200,
    requiredDocuments: ['ID for verification', 'Recovery phone/email'],
    processSteps: [
      { stepNumber: 1, title: 'ACCOUNT CREATION', description: 'Set up Gmail or email account.' },
      { stepNumber: 2, title: 'VERIFICATION', description: 'Verify account identity.' },
      { stepNumber: 3, title: 'DELIVERY', description: 'Provide login credentials.' }
    ]
  },
  {
    id: 'online-form-filing',
    slug: 'online-form-filing',
    title: 'Online Form Filing',
    category: 'internet',
    categoryName: 'INTERNET SERVICES',
    shortDesc: 'Complete online form submissions.',
    fullDesc: 'Assist with filling and submitting online forms and applications.',
    turnaroundTime: '20 - 30 MINS',
    priceKes: 300,
    requiredDocuments: ['Form requirements', 'Personal information'],
    processSteps: [
      { stepNumber: 1, title: 'FORM REVIEW', description: 'Review form requirements.' },
      { stepNumber: 2, title: 'DATA ENTRY', description: 'Complete form accurately.' },
      { stepNumber: 3, title: 'SUBMISSION', description: 'Submit form and confirm receipt.' }
    ]
  },
  {
    id: 'pdf-editing',
    slug: 'pdf-editing-conversion',
    title: 'PDF Editing & Conversion',
    category: 'internet',
    categoryName: 'INTERNET SERVICES',
    shortDesc: 'PDF file editing and format conversion.',
    fullDesc: 'Edit PDFs, convert between formats, merge documents.',
    turnaroundTime: '15 - 30 MINS',
    priceKes: 100,
    requiredDocuments: ['PDF or document files'],
    processSteps: [
      { stepNumber: 1, title: 'FILE UPLOAD', description: 'Receive document files.' },
      { stepNumber: 2, title: 'EDITING/CONVERSION', description: 'Edit or convert as required.' },
      { stepNumber: 3, title: 'DELIVERY', description: 'Deliver converted document.' }
    ]
  },
  {
    id: 'document-formatting',
    slug: 'document-formatting',
    title: 'Document Formatting',
    category: 'internet',
    categoryName: 'INTERNET SERVICES',
    shortDesc: 'Professional document formatting.',
    fullDesc: 'Format documents for academic, business, and official purposes.',
    turnaroundTime: '1 - 2 HOURS',
    priceKes: 200,
    requiredDocuments: ['Document file', 'Format specifications'],
    processSteps: [
      { stepNumber: 1, title: 'REQUIREMENTS REVIEW', description: 'Understand formatting requirements.' },
      { stepNumber: 2, title: 'FORMATTING', description: 'Apply professional formatting.' },
      { stepNumber: 3, title: 'DELIVERY', description: 'Deliver formatted document.' }
    ]
  },
  {
    id: 'document-translation',
    slug: 'document-translation',
    title: 'Document Translation',
    category: 'internet',
    categoryName: 'INTERNET SERVICES',
    shortDesc: 'Document translation services.',
    fullDesc: 'Translate documents between English, Swahili, and other languages.',
    turnaroundTime: '2 - 4 HOURS',
    priceKes: 300,
    requiredDocuments: ['Document to translate', 'Target language'],
    processSteps: [
      { stepNumber: 1, title: 'DOCUMENT REVIEW', description: 'Review document for translation.' },
      { stepNumber: 2, title: 'TRANSLATION', description: 'Translate accurately.' },
      { stepNumber: 3, title: 'PROOFREADING', description: 'Proofread and deliver.' }
    ]
  },
  {
    id: 'file-upload-sharing',
    slug: 'file-upload-sharing',
    title: 'File Upload & Sharing',
    category: 'internet',
    categoryName: 'INTERNET SERVICES',
    shortDesc: 'Secure file transfer and cloud storage assistance.',
    fullDesc: 'Help with uploading files to cloud storage and sharing services.',
    turnaroundTime: '15 MINS',
    priceKes: 100,
    requiredDocuments: ['Files to upload'],
    processSteps: [
      { stepNumber: 1, title: 'FILE PREPARATION', description: 'Prepare files for upload.' },
      { stepNumber: 2, title: 'UPLOAD', description: 'Upload to appropriate service.' },
      { stepNumber: 3, title: 'SHARING', description: 'Generate sharing links.' }
    ]
  },
  {
    id: 'cloud-storage',
    slug: 'cloud-storage-assistance',
    title: 'Cloud Storage Assistance',
    category: 'internet',
    categoryName: 'INTERNET SERVICES',
    shortDesc: 'Cloud storage account setup and management.',
    fullDesc: 'Create and manage Google Drive, OneDrive, and cloud storage accounts.',
    turnaroundTime: '15 - 20 MINS',
    priceKes: 150,
    requiredDocuments: ['Email account', 'Storage requirements'],
    processSteps: [
      { stepNumber: 1, title: 'ACCOUNT SETUP', description: 'Create cloud storage account.' },
      { stepNumber: 2, title: 'CONFIGURATION', description: 'Configure storage settings.' },
      { stepNumber: 3, title: 'TRAINING', description: 'Brief on usage and management.' }
    ]
  },

  // GRAPHIC DESIGN
  {
    id: 'logo-design',
    slug: 'logo-design',
    title: 'Logo Design',
    category: 'design',
    categoryName: 'GRAPHIC DESIGN',
    shortDesc: 'Professional custom logo design.',
    fullDesc: 'Create unique, memorable business logos tailored to your brand.',
    turnaroundTime: '24 HOURS',
    priceKes: 1200,
    requiredDocuments: ['Business name', 'Brand concept', 'Color preferences'],
    processSteps: [
      { stepNumber: 1, title: 'CONCEPT BRIEF', description: 'Discuss brand vision and goals.' },
      { stepNumber: 2, title: 'DESIGN CREATION', description: 'Create custom vector logo.' },
      { stepNumber: 3, title: 'DELIVERY', description: 'Provide multiple file formats.' }
    ]
  },
  {
    id: 'posters-flyers',
    slug: 'posters-flyers-design',
    title: 'Posters & Flyers Design',
    category: 'design',
    categoryName: 'GRAPHIC DESIGN',
    shortDesc: 'Eye-catching poster and flyer design.',
    fullDesc: 'Design promotional posters and flyers for events and businesses.',
    turnaroundTime: 'SAME DAY',
    priceKes: 500,
    requiredDocuments: ['Event/promotion details', 'Key messages'],
    processSteps: [
      { stepNumber: 1, title: 'REQUIREMENTS GATHERING', description: 'Understand promotion goals.' },
      { stepNumber: 2, title: 'DESIGN CREATION', description: 'Create impactful design.' },
      { stepNumber: 3, title: 'DELIVERY', description: 'Provide print-ready files.' }
    ]
  },
  {
    id: 'business-cards',
    slug: 'business-cards-design',
    title: 'Business Cards Design',
    category: 'design',
    categoryName: 'GRAPHIC DESIGN',
    shortDesc: 'Professional business card design and printing.',
    fullDesc: 'Design and print professional business cards.',
    turnaroundTime: '24 HOURS',
    priceKes: 400,
    requiredDocuments: ['Company info', 'Contact details', 'Logo'],
    processSteps: [
      { stepNumber: 1, title: 'INFORMATION COLLECTION', description: 'Gather business details.' },
      { stepNumber: 2, title: 'CARD DESIGN', description: 'Design professional cards.' },
      { stepNumber: 3, title: 'PRINTING', description: 'Print high-quality cards.' }
    ]
  },
  {
    id: 'banners-design',
    slug: 'banners-design',
    title: 'Banners Design',
    category: 'design',
    categoryName: 'GRAPHIC DESIGN',
    shortDesc: 'Custom banner and signage design.',
    fullDesc: 'Design custom banners for websites, events, and physical locations.',
    turnaroundTime: 'SAME DAY',
    priceKes: 600,
    requiredDocuments: ['Banner specifications', 'Content', 'Brand assets'],
    processSteps: [
      { stepNumber: 1, title: 'SPECIFICATIONS REVIEW', description: 'Confirm banner dimensions and specifications.' },
      { stepNumber: 2, title: 'DESIGN CREATION', description: 'Create eye-catching banner.' },
      { stepNumber: 3, title: 'DELIVERY', description: 'Provide web and print formats.' }
    ]
  },
  {
    id: 'certificates-design',
    slug: 'certificates-design',
    title: 'Certificates Design',
    category: 'design',
    categoryName: 'GRAPHIC DESIGN',
    shortDesc: 'Professional certificate template design.',
    fullDesc: 'Design custom certificates for achievements, awards, and completion.',
    turnaroundTime: '4 - 6 HOURS',
    priceKes: 800,
    requiredDocuments: ['Certificate details', 'Logo/branding'],
    processSteps: [
      { stepNumber: 1, title: 'REQUIREMENTS REVIEW', description: 'Understand certificate purpose.' },
      { stepNumber: 2, title: 'TEMPLATE DESIGN', description: 'Create professional certificate template.' },
      { stepNumber: 3, title: 'DELIVERY', description: 'Provide editable template.' }
    ]
  },
  {
    id: 'brochures-design',
    slug: 'brochures-design',
    title: 'Brochures Design',
    category: 'design',
    categoryName: 'GRAPHIC DESIGN',
    shortDesc: 'Professional brochure design.',
    fullDesc: 'Design tri-fold, bi-fold, and custom brochures for marketing.',
    turnaroundTime: 'SAME DAY',
    priceKes: 1000,
    requiredDocuments: ['Company info', 'Product/service details', 'Images'],
    processSteps: [
      { stepNumber: 1, title: 'CONTENT GATHERING', description: 'Collect brochure content.' },
      { stepNumber: 2, title: 'LAYOUT DESIGN', description: 'Create professional layout.' },
      { stepNumber: 3, title: 'DELIVERY', description: 'Provide print-ready design.' }
    ]
  },
  {
    id: 'social-media-graphics',
    slug: 'social-media-graphics',
    title: 'Social Media Graphics',
    category: 'design',
    categoryName: 'GRAPHIC DESIGN',
    shortDesc: 'Social media post design and graphics.',
    fullDesc: 'Create engaging graphics for Facebook, Instagram, Twitter, and TikTok.',
    turnaroundTime: '2 - 4 HOURS',
    priceKes: 400,
    requiredDocuments: ['Post content', 'Brand guidelines'],
    processSteps: [
      { stepNumber: 1, title: 'CONTENT REVIEW', description: 'Understand post message.' },
      { stepNumber: 2, title: 'GRAPHIC CREATION', description: 'Create platform-optimized graphics.' },
      { stepNumber: 3, title: 'DELIVERY', description: 'Provide graphics for all platforms.' }
    ]
  },

  // BUSINESS SERVICES
  {
    id: 'invoice-prep',
    slug: 'invoice-preparation',
    title: 'Invoice Preparation',
    category: 'business',
    categoryName: 'BUSINESS SERVICES',
    shortDesc: 'Professional invoice creation and formatting.',
    fullDesc: 'Create professional invoices for your business transactions.',
    turnaroundTime: '30 MINS',
    priceKes: 300,
    requiredDocuments: ['Transaction details', 'Client information'],
    processSteps: [
      { stepNumber: 1, title: 'INFORMATION COLLECTION', description: 'Gather invoice details.' },
      { stepNumber: 2, title: 'INVOICE CREATION', description: 'Create professional invoice.' },
      { stepNumber: 3, title: 'DELIVERY', description: 'Provide PDF and print formats.' }
    ]
  },
  {
    id: 'receipt-design',
    slug: 'receipt-design-printing',
    title: 'Receipt Design & Printing',
    category: 'business',
    categoryName: 'BUSINESS SERVICES',
    shortDesc: 'Custom receipt books and design.',
    fullDesc: 'Design and print custom receipt books for your business.',
    turnaroundTime: '24 - 48 HOURS',
    priceKes: 500,
    requiredDocuments: ['Company details', 'Receipt format', 'Quantity'],
    processSteps: [
      { stepNumber: 1, title: 'DESIGN CONSULTATION', description: 'Discuss receipt design and specifications.' },
      { stepNumber: 2, title: 'TEMPLATE CREATION', description: 'Create custom receipt design.' },
      { stepNumber: 3, title: 'PRINTING', description: 'Print professional receipt books.' }
    ]
  },
  {
    id: 'quotation-prep',
    slug: 'quotation-preparation',
    title: 'Quotation Preparation',
    category: 'business',
    categoryName: 'BUSINESS SERVICES',
    shortDesc: 'Professional quotation and estimate creation.',
    fullDesc: 'Create professional quotations and estimates for clients.',
    turnaroundTime: '30 MINS',
    priceKes: 300,
    requiredDocuments: ['Service/product details', 'Pricing information'],
    processSteps: [
      { stepNumber: 1, title: 'DETAIL COLLECTION', description: 'Gather quotation details.' },
      { stepNumber: 2, title: 'QUOTATION CREATION', description: 'Create professional quotation.' },
      { stepNumber: 3, title: 'DELIVERY', description: 'Provide formatted quotation.' }
    ]
  },
  {
    id: 'company-profiles',
    slug: 'company-profiles',
    title: 'Company Profiles',
    category: 'business',
    categoryName: 'BUSINESS SERVICES',
    shortDesc: 'Professional company profile documents.',
    fullDesc: 'Create comprehensive company profile documents for corporate representation.',
    turnaroundTime: '4 - 6 HOURS',
    priceKes: 1000,
    requiredDocuments: ['Company information', 'Services/products', 'Company history'],
    processSteps: [
      { stepNumber: 1, title: 'INFORMATION GATHERING', description: 'Collect comprehensive company details.' },
      { stepNumber: 2, title: 'DOCUMENT CREATION', description: 'Write professional profile.' },
      { stepNumber: 3, title: 'DESIGN & DELIVERY', description: 'Format and deliver document.' }
    ]
  },
  {
    id: 'letterheads',
    slug: 'letterheads-design-printing',
    title: 'Letterheads Design & Printing',
    category: 'business',
    categoryName: 'BUSINESS SERVICES',
    shortDesc: 'Custom letterhead design and printing.',
    fullDesc: 'Design and print professional letterheads for your business.',
    turnaroundTime: '24 HOURS',
    priceKes: 400,
    requiredDocuments: ['Company logo', 'Contact details', 'Design preferences'],
    processSteps: [
      { stepNumber: 1, title: 'DESIGN CREATION', description: 'Design letterhead template.' },
      { stepNumber: 2, title: 'SPECIFICATION REVIEW', description: 'Confirm paper type and specifications.' },
      { stepNumber: 3, title: 'PRINTING', description: 'Print professional letterheads.' }
    ]
  },
  {
    id: 'business-documents',
    slug: 'business-documents',
    title: 'Business Documents',
    category: 'business',
    categoryName: 'BUSINESS SERVICES',
    shortDesc: 'Professional business document creation.',
    fullDesc: 'Create contracts, agreements, and other business documents.',
    turnaroundTime: '2 - 4 HOURS',
    priceKes: 800,
    requiredDocuments: ['Document requirements', 'Parties involved'],
    processSteps: [
      { stepNumber: 1, title: 'REQUIREMENTS ANALYSIS', description: 'Understand document needs.' },
      { stepNumber: 2, title: 'DOCUMENT DRAFTING', description: 'Create document.' },
      { stepNumber: 3, title: 'REVIEW & DELIVERY', description: 'Proofread and deliver.' }
    ]
  },
  {
    id: 'excel-spreadsheets',
    slug: 'excel-spreadsheets',
    title: 'Excel Spreadsheets',
    category: 'business',
    categoryName: 'BUSINESS SERVICES',
    shortDesc: 'Professional spreadsheet creation and analysis.',
    fullDesc: 'Create and manage professional Excel spreadsheets and databases.',
    turnaroundTime: '2 - 4 HOURS',
    priceKes: 600,
    requiredDocuments: ['Data', 'Spreadsheet requirements'],
    processSteps: [
      { stepNumber: 1, title: 'DATA COLLECTION', description: 'Gather data for spreadsheet.' },
      { stepNumber: 2, title: 'SPREADSHEET CREATION', description: 'Create structured spreadsheet.' },
      { stepNumber: 3, title: 'FORMULA & DELIVERY', description: 'Add formulas and deliver.' }
    ]
  },
  {
    id: 'powerpoint-presentations',
    slug: 'powerpoint-presentations',
    title: 'PowerPoint Presentations',
    category: 'business',
    categoryName: 'BUSINESS SERVICES',
    shortDesc: 'Professional presentation design and creation.',
    fullDesc: 'Create engaging PowerPoint presentations for business and events.',
    turnaroundTime: '4 - 6 HOURS',
    priceKes: 1200,
    requiredDocuments: ['Presentation content', 'Design preferences'],
    processSteps: [
      { stepNumber: 1, title: 'CONTENT ORGANIZATION', description: 'Organize presentation content.' },
      { stepNumber: 2, title: 'SLIDE DESIGN', description: 'Design professional slides.' },
      { stepNumber: 3, title: 'FINALIZATION & DELIVERY', description: 'Finalize and deliver presentation.' }
    ]
  },

  // DIGITAL SERVICES
  {
    id: 'social-media-setup',
    slug: 'social-media-account-setup',
    title: 'Social Media Account Setup',
    category: 'digital',
    categoryName: 'DIGITAL SERVICES',
    shortDesc: 'Create professional social media business accounts.',
    fullDesc: 'Set up and optimize Facebook, Instagram, Twitter, and TikTok business accounts.',
    turnaroundTime: '1 HOUR',
    priceKes: 400,
    requiredDocuments: ['Business details', 'Logo/branding', 'Contact information'],
    processSteps: [
      { stepNumber: 1, title: 'ACCOUNT CREATION', description: 'Create social media accounts.' },
      { stepNumber: 2, title: 'PROFILE SETUP', description: 'Complete profile information.' },
      { stepNumber: 3, title: 'OPTIMIZATION', description: 'Optimize for discoverability.' }
    ]
  },
  {
    id: 'social-media-management',
    slug: 'social-media-management',
    title: 'Social Media Management',
    category: 'digital',
    categoryName: 'DIGITAL SERVICES',
    shortDesc: 'Ongoing social media content and account management.',
    fullDesc: 'Manage your social media presence with regular content and engagement.',
    turnaroundTime: 'ONGOING',
    priceKes: 2000,
    priceNote: 'Per month (service package)',
    requiredDocuments: ['Marketing goals', 'Content preferences'],
    processSteps: [
      { stepNumber: 1, title: 'STRATEGY PLANNING', description: 'Develop social media strategy.' },
      { stepNumber: 2, title: 'CONTENT CREATION', description: 'Create and post regular content.' },
      { stepNumber: 3, title: 'ENGAGEMENT', description: 'Manage comments and engagement.' }
    ]
  },
  {
    id: 'whatsapp-business',
    slug: 'whatsapp-business-setup',
    title: 'WhatsApp Business Setup',
    category: 'digital',
    categoryName: 'DIGITAL SERVICES',
    shortDesc: 'WhatsApp Business account setup and configuration.',
    fullDesc: 'Set up WhatsApp Business for customer communication.',
    turnaroundTime: '30 MINS',
    priceKes: 300,
    requiredDocuments: ['Business phone number', 'Business details'],
    processSteps: [
      { stepNumber: 1, title: 'ACCOUNT SETUP', description: 'Create WhatsApp Business account.' },
      { stepNumber: 2, title: 'PROFILE SETUP', description: 'Configure business profile.' },
      { stepNumber: 3, title: 'FEATURE CONFIGURATION', description: 'Enable business features.' }
    ]
  },
  {
    id: 'facebook-page-creation',
    slug: 'facebook-page-creation',
    title: 'Facebook Page Creation',
    category: 'digital',
    categoryName: 'DIGITAL SERVICES',
    shortDesc: 'Professional Facebook business page setup.',
    fullDesc: 'Create and optimize Facebook business pages.',
    turnaroundTime: '1 HOUR',
    priceKes: 300,
    requiredDocuments: ['Business details', 'Logo', 'Cover photo'],
    processSteps: [
      { stepNumber: 1, title: 'PAGE CREATION', description: 'Create Facebook business page.' },
      { stepNumber: 2, title: 'BRANDING', description: 'Add logo and branding elements.' },
      { stepNumber: 3, title: 'OPTIMIZATION', description: 'Optimize for engagement.' }
    ]
  },
  {
    id: 'instagram-setup',
    slug: 'instagram-business-setup',
    title: 'Instagram Business Setup',
    category: 'digital',
    categoryName: 'DIGITAL SERVICES',
    shortDesc: 'Instagram business account creation and optimization.',
    fullDesc: 'Set up professional Instagram business accounts.',
    turnaroundTime: '1 HOUR',
    priceKes: 300,
    requiredDocuments: ['Business details', 'Profile photos'],
    processSteps: [
      { stepNumber: 1, title: 'ACCOUNT CREATION', description: 'Create Instagram business account.' },
      { stepNumber: 2, title: 'PROFILE OPTIMIZATION', description: 'Complete profile with links.' },
      { stepNumber: 3, title: 'FEATURE SETUP', description: 'Enable business features.' }
    ]
  },
  {
    id: 'tiktok-setup',
    slug: 'tiktok-account-setup',
    title: 'TikTok Account Setup',
    category: 'digital',
    categoryName: 'DIGITAL SERVICES',
    shortDesc: 'TikTok business account creation.',
    fullDesc: 'Create and optimize TikTok business accounts for brand promotion.',
    turnaroundTime: '1 HOUR',
    priceKes: 300,
    requiredDocuments: ['Business details', 'Phone number or email'],
    processSteps: [
      { stepNumber: 1, title: 'ACCOUNT CREATION', description: 'Create TikTok business account.' },
      { stepNumber: 2, title: 'PROFILE SETUP', description: 'Configure business profile.' },
      { stepNumber: 3, title: 'VERIFICATION', description: 'Complete account verification.' }
    ]
  },
  {
    id: 'google-business',
    slug: 'google-business-profile-setup',
    title: 'Google Business Profile Setup',
    category: 'digital',
    categoryName: 'DIGITAL SERVICES',
    shortDesc: 'Google Business Profile creation and optimization.',
    fullDesc: 'Create and manage your Google Business profile for local search visibility.',
    turnaroundTime: '1 - 2 HOURS',
    priceKes: 400,
    requiredDocuments: ['Business details', 'Location', 'Contact information'],
    processSteps: [
      { stepNumber: 1, title: 'PROFILE CREATION', description: 'Create Google Business profile.' },
      { stepNumber: 2, title: 'INFORMATION ENTRY', description: 'Add business details and hours.' },
      { stepNumber: 3, title: 'VERIFICATION', description: 'Verify business location.' }
    ]
  },

  // ACADEMIC SERVICES
  {
    id: 'assignment-typing',
    slug: 'assignment-typing',
    title: 'Assignment Typing',
    category: 'academic',
    categoryName: 'ACADEMIC SERVICES',
    shortDesc: 'Professional assignment document typing.',
    fullDesc: 'Type assignments with proper formatting and structure.',
    turnaroundTime: 'SAME DAY',
    priceKes: 15,
    priceNote: 'Per page',
    requiredDocuments: ['Handwritten or soft copy of assignment'],
    processSteps: [
      { stepNumber: 1, title: 'CONTENT REVIEW', description: 'Review assignment details.' },
      { stepNumber: 2, title: 'TYPING', description: 'Type with proper academic formatting.' },
      { stepNumber: 3, title: 'PROOFREADING', description: 'Proofread and deliver.' }
    ]
  },
  {
    id: 'project-typing',
    slug: 'project-typing',
    title: 'Project Typing',
    category: 'academic',
    categoryName: 'ACADEMIC SERVICES',
    shortDesc: 'Academic project document preparation.',
    fullDesc: 'Type and format academic projects with proper structure.',
    turnaroundTime: 'SAME DAY',
    priceKes: 15,
    priceNote: 'Per page',
    requiredDocuments: ['Project content or notes'],
    processSteps: [
      { stepNumber: 1, title: 'CONTENT ORGANIZATION', description: 'Organize project content.' },
      { stepNumber: 2, title: 'PROFESSIONAL TYPING', description: 'Type with academic formatting.' },
      { stepNumber: 3, title: 'FORMATTING & DELIVERY', description: 'Format and deliver project.' }
    ]
  },
  {
    id: 'research-assistance',
    slug: 'research-assistance',
    title: 'Research Assistance',
    category: 'academic',
    categoryName: 'ACADEMIC SERVICES',
    shortDesc: 'Academic research support and guidance.',
    fullDesc: 'Assistance with research methodology and literature organization.',
    turnaroundTime: '2 - 4 HOURS',
    priceKes: 600,
    requiredDocuments: ['Research topic', 'Requirements'],
    processSteps: [
      { stepNumber: 1, title: 'RESEARCH GUIDANCE', description: 'Guide on research methodology.' },
      { stepNumber: 2, title: 'RESOURCE COMPILATION', description: 'Compile relevant research materials.' },
      { stepNumber: 3, title: 'ORGANIZATION', description: 'Organize findings.' }
    ]
  },
  {
    id: 'presentation-prep',
    slug: 'presentation-preparation',
    title: 'Presentation Preparation',
    category: 'academic',
    categoryName: 'ACADEMIC SERVICES',
    shortDesc: 'Academic presentation and slide preparation.',
    fullDesc: 'Prepare presentations and slides for academic submissions.',
    turnaroundTime: '4 - 6 HOURS',
    priceKes: 800,
    requiredDocuments: ['Presentation content', 'Topic details'],
    processSteps: [
      { stepNumber: 1, title: 'CONTENT ORGANIZATION', description: 'Organize presentation content.' },
      { stepNumber: 2, title: 'SLIDE DESIGN', description: 'Design academic slides.' },
      { stepNumber: 3, title: 'DELIVERY', description: 'Provide presentation file.' }
    ]
  },
  {
    id: 'report-formatting',
    slug: 'report-formatting',
    title: 'Report Formatting',
    category: 'academic',
    categoryName: 'ACADEMIC SERVICES',
    shortDesc: 'Academic and professional report formatting.',
    fullDesc: 'Format reports according to academic standards and guidelines.',
    turnaroundTime: '2 - 4 HOURS',
    priceKes: 400,
    requiredDocuments: ['Report document', 'Format guidelines'],
    processSteps: [
      { stepNumber: 1, title: 'GUIDELINE REVIEW', description: 'Review formatting requirements.' },
      { stepNumber: 2, title: 'FORMATTING', description: 'Apply academic formatting standards.' },
      { stepNumber: 3, title: 'DELIVERY', description: 'Deliver properly formatted report.' }
    ]
  },

  // OTHER SERVICES
  {
    id: 'mobile-money',
    slug: 'mobile-money-assistance',
    title: 'Mobile Money Assistance',
    category: 'other',
    categoryName: 'OTHER SERVICES',
    shortDesc: 'M-Pesa and mobile money transaction help.',
    fullDesc: 'Assistance with M-Pesa, Airtel Money, and other mobile money services.',
    turnaroundTime: '10 MINS',
    priceKes: 50,
    requiredDocuments: ['Mobile number', 'Transaction details'],
    processSteps: [
      { stepNumber: 1, title: 'TRANSACTION GUIDANCE', description: 'Guide through process.' },
      { stepNumber: 2, title: 'PROCESSING', description: 'Assist with transaction.' },
      { stepNumber: 3, title: 'CONFIRMATION', description: 'Confirm transaction completion.' }
    ]
  },
  {
    id: 'utility-bills',
    slug: 'utility-bill-payments',
    title: 'Utility Bill Payments',
    category: 'other',
    categoryName: 'OTHER SERVICES',
    shortDesc: 'Electricity, water, and utility bill payment assistance.',
    fullDesc: 'Help with paying electricity, water, and other utility bills.',
    turnaroundTime: '15 MINS',
    priceKes: 100,
    requiredDocuments: ['Account number', 'Bill reference'],
    processSteps: [
      { stepNumber: 1, title: 'BILL LOOKUP', description: 'Find bill account.' },
      { stepNumber: 2, title: 'PAYMENT PROCESSING', description: 'Process payment.' },
      { stepNumber: 3, title: 'RECEIPT', description: 'Provide payment receipt.' }
    ]
  },
  {
    id: 'airtime-purchase',
    slug: 'airtime-purchase',
    title: 'Airtime Purchase',
    category: 'other',
    categoryName: 'OTHER SERVICES',
    shortDesc: 'Mobile airtime and data purchase.',
    fullDesc: 'Purchase airtime and data bundles for all networks.',
    turnaroundTime: '5 MINS',
    priceKes: 0,
    priceNote: 'Actual airtime cost only',
    requiredDocuments: ['Phone number', 'Amount needed'],
    processSteps: [
      { stepNumber: 1, title: 'PHONE VERIFICATION', description: 'Verify phone number.' },
      { stepNumber: 2, title: 'PURCHASE', description: 'Purchase airtime/data.' },
      { stepNumber: 3, title: 'DELIVERY', description: 'Airtime delivered instantly.' }
    ]
  },
  {
    id: 'exam-registration',
    slug: 'exam-registration',
    title: 'Exam Registration',
    category: 'other',
    categoryName: 'OTHER SERVICES',
    shortDesc: 'Help with exam registration and application.',
    fullDesc: 'Assistance with registration for KCSE, KCPE, and other exams.',
    turnaroundTime: '30 MINS',
    priceKes: 300,
    requiredDocuments: ['Student details', 'School information'],
    processSteps: [
      { stepNumber: 1, title: 'REGISTRATION FORM', description: 'Complete registration form.' },
      { stepNumber: 2, title: 'DOCUMENT VERIFICATION', description: 'Verify all details.' },
      { stepNumber: 3, title: 'SUBMISSION', description: 'Submit registration.' }
    ]
  },
  {
    id: 'online-booking',
    slug: 'online-booking-services',
    title: 'Online Booking Services',
    category: 'other',
    categoryName: 'OTHER SERVICES',
    shortDesc: 'Help with online reservations and bookings.',
    fullDesc: 'Assist with hotel, transport, and service bookings online.',
    turnaroundTime: '20 - 30 MINS',
    priceKes: 300,
    requiredDocuments: ['Booking details', 'Payment information'],
    processSteps: [
      { stepNumber: 1, title: 'BOOKING SEARCH', description: 'Search available options.' },
      { stepNumber: 2, title: 'BOOKING PROCESSING', description: 'Complete booking.' },
      { stepNumber: 3, title: 'CONFIRMATION', description: 'Provide booking confirmation.' }
    ]
  },
  {
    id: 'ict-support',
    slug: 'general-cyber-ict-support',
    title: 'General Cyber & ICT Support',
    category: 'other',
    categoryName: 'OTHER SERVICES',
    shortDesc: 'General computer and ICT assistance.',
    fullDesc: 'General computer troubleshooting and ICT support services.',
    turnaroundTime: '30 MINS - 2 HOURS',
    priceKes: 500,
    requiredDocuments: ['Device or issue description'],
    processSteps: [
      { stepNumber: 1, title: 'DIAGNOSIS', description: 'Diagnose issue.' },
      { stepNumber: 2, title: 'TROUBLESHOOTING', description: 'Attempt resolution.' },
      { stepNumber: 3, title: 'FOLLOW-UP', description: 'Provide support and guidance.' }
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
