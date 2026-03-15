
import {
    FaChartPie, FaFileInvoice, FaCoins, FaHandshake, FaChartLine,
    FaChartArea, FaBullhorn, FaList, FaLocationArrow, FaCheckCircle
} from 'react-icons/fa';

export interface ServiceSection {
    title?: string;
    subtitle?: string;
    stage?: string;
    description?: string;
    content?: string | string[]; // String or array of paragraphs
    image?: string;
    imagePosition?: 'left' | 'right';
    list?: string[];
    type?: 'standard' | 'cta' | 'problem-snapshot' | 'workflow' | 'kpi' | 'ai-indicator' | 'compliance-shield';
    data?: any; // For specialized component data
}

export interface ServiceFeature {
    title: string;
    icon: any;
    description?: string;
}

export interface Service {
    slug: string;
    title: string; // Navigation Menu Title
    bannerTitle: string;
    description: string;
    sections: ServiceSection[];
    features?: ServiceFeature[];
    featuresTitle?: string;
    featuresDescription?: string;
    showFeaturesTop?: boolean; // Some pages show features before intro
}

export const specialtiesList: Service[] = [
    {
        title: "Behavioral Health",
        slug: "behavioral-health",
        bannerTitle: "Specialized Revenue Solutions for Behavioral Health",
        description: "Optimizing mental health and substance abuse billing with precision and compliance.",
        sections: [
            {
                type: 'problem-snapshot',
                title: 'Behavioral Health Billing Hurdles',
                data: [
                    { title: 'Complex Prior Auth', description: 'Mental health services often require multi-layered approvals that slow down care.' },
                    { title: 'Coding Variances', description: 'Unique CPT codes for psychotherapy and group sessions often lead to errors.' },
                    { title: 'Session Tracking', description: 'Difficulties in tracking unit limits per patient per benefit period.' }
                ]
            },
            {
                type: 'workflow',
                title: 'The SBN Behavioral Cycle',
                subtitle: 'Precision Process',
                data: [
                    { title: 'Verify', description: 'Real-time check for mental health benefits and visit limits.' },
                    { title: 'Authorize', description: 'Automated workflow for obtaining prior authorization for intensive outpatient care.' },
                    { title: 'Bill', description: 'Clean claim submission with specialized behavioral health coding.' },
                    { title: 'Optimize', description: 'Continuous audit to ensure session limits are never exceeded.' }
                ]
            },
            {
                type: 'kpi',
                title: 'Behavioral Recovery Metrics',
                subtitle: 'Real Results',
                data: [
                    { value: '25%', label: 'Revenue Increase', description: 'Average lift for mental health clinics within 90 days.' },
                    { value: '99%', label: 'Authorization Success', description: 'Ensuring your services are pre-approved every single time.' }
                ]
            }
        ]
    },
    {
        title: "DME / Orthopedics",
        slug: "dme-orthopedics",
        bannerTitle: "Precision Billing for DME & Orthopedic Practices",
        description: "Specialized RCM for durable medical equipment and surgical orthopedic workflows.",
        sections: [
            {
                type: 'problem-snapshot',
                title: 'DME Lifecycle Challenges',
                data: [
                    { title: 'Complex Modifiers', description: 'RR, UE, NU modifiers for rental vs purchase often lead to preventable denials.' },
                    { title: 'Prior Auth Delays', description: 'Equipment delivery stalled by slow payer authorization responses.' },
                    { title: 'Documentation Gaps', description: 'Ensuring medical necessity certificates (CMN) are perfectly executed before billing.' }
                ]
            },
            {
                type: 'workflow',
                title: 'DME Order-to-Cash Workflow',
                subtitle: 'Seamless Logistics',
                data: [
                    { title: 'Intake', description: 'Validation of physician orders and insurance eligibility for specific equipment.' },
                    { title: 'Authorize', description: 'Rapid procurement of prior authorization via direct payer integrations.' },
                    { title: 'Deliver', description: 'Proof of delivery (POD) capture to trigger compliant billing.' },
                    { title: 'Audit', description: 'Continuous surveillance of rental cycles to ensure ongoing reimbursement.' }
                ]
            },
            {
                type: 'kpi',
                title: 'Orthopedic Recovery',
                subtitle: 'Surgical Precision',
                data: [
                    { value: '35%', label: 'Revenue Acceleration', description: 'Speeding up the cash cycle for expensive surgical implants and equipment.' },
                    { value: '97%+', label: 'Audit Acceptance', description: 'Rigorous documentation standards that withstand DME Medicare audits.' }
                ]
            }
        ]
    },
    {
        title: "Urgent Care & Telehealth",
        slug: "urgent-care-telehealth",
        bannerTitle: "Optimized RCM for Urgent Care & Telehealth",
        description: "Accelerating revenue for high-volume urgent care centers and virtual health platforms.",
        sections: [
            {
                type: 'problem-snapshot',
                title: 'High-Velocity Billing Challenges',
                data: [
                    { title: 'Real-Time Verification', description: 'Urgent care requires instant insurance validation to prevent front-end revenue leakage.' },
                    { title: 'Telehealth Modifiers', description: 'Navigating frequently changing POS and GT/95 modifier rules for virtual visits.' },
                    { title: 'Volume Management', description: 'Processing high volumes of encounters without sacrificing coding accuracy or speed.' }
                ]
            },
            {
                type: 'workflow',
                title: 'Rapid-Response Billing Cycle',
                subtitle: 'Velocity Verified',
                data: [
                    { title: 'Verify', description: 'Instant, automated eligibility checks before the patient is seen.' },
                    { title: 'Code', description: 'Same-day coding of urgent care encounters with specialized modifier logic.' },
                    { title: 'Submit', description: 'Real-time claim submission to ensure the fastest possible reimbursement.' },
                    { title: 'Monitor', description: '24/7 surveillance of claim status to catch and fix rejections immediately.' }
                ]
            },
            {
                type: 'kpi',
                title: 'Urgent Care Impact',
                subtitle: 'Operational Speed',
                data: [
                    { value: '48h', label: 'Billing Turnaround', description: 'Average time from encounter to clean claim submission.' },
                    { value: '20%', label: 'Efficiency Gain', description: 'Reduction in administrative overhead for clinic staff.' }
                ]
            },
            {
                type: 'ai-indicator',
                stage: 'Virtual Visit Compliance',
                description: 'Our AI engine automatically validates telehealth-specific coding requirements based on the latest state and payer guidelines.',
                data: '100% Compliance Accuracy'
            }
        ]
    },
    {
        title: "Small–Mid Practices",
        slug: "small-mid-practices",
        bannerTitle: "Enterprise-Grade Solutions for Independent Practices",
        description: "Empowering small to mid-sized practices with high-performance revenue cycle management.",
        sections: [
            {
                type: 'problem-snapshot',
                title: 'Small Practice Constraints',
                data: [
                    { title: 'Limited Resources', description: 'Staff stretched thin between patient care and administrative billing tasks.' },
                    { title: 'Inconsistent Cash Flow', description: 'Fluctuations in revenue due to delayed billing or high denial rates.' },
                    { title: 'Overhead Pressure', description: 'The high cost of maintaining expert in-house billing and coding teams.' }
                ]
            },
            {
                type: 'workflow',
                title: 'Seamless Integration Workflow',
                subtitle: 'Simplified Management',
                data: [
                    { title: 'Connect', description: 'Direct integration with your existing EMR/EHR system for data flow.' },
                    { title: 'Manage', description: 'Full-service management of charges, payments, and denials.' },
                    { title: 'Report', description: 'Monthly transparency reports on practice performance and financial health.' },
                    { title: 'Consult', description: 'Regular strategy sessions to optimize operations and growth.' }
                ]
            },
            {
                type: 'kpi',
                title: 'Practice Growth',
                subtitle: 'Financial Strength',
                data: [
                    { value: '18%', label: 'Revenue Growth', description: 'Average increase for independent practices in their first year with SBN.' },
                    { value: '100%', label: 'Peace of Mind', description: 'Total focus on patients while we handle the complexities of RCM.' }
                ]
            },
            {
                title: "Ready to Scale Your Practice?",
                content: "Experience the benefits of a full-scale billing department without the overhead. Let's build your financial future together.",
                type: "cta"
            }
        ]
    }
];

export const servicesList: Service[] = [
    {
        title: "Eligibility Verification",
        slug: "eligibility-verification",
        bannerTitle: "Eligibility Verification",
        description: "Comprehensive patient eligibility verification services.",
        sections: [
            {
                type: 'problem-snapshot',
                title: 'The Hidden Cost of Poor Verification',
                data: [
                    { title: 'Eligibility Denials', description: 'Over 30% of denials stem from simple eligibility errors or inactive coverage.' },
                    { title: 'Manual Verification', description: 'High labor costs and human error during manual portal checks.' },
                    { title: 'Delayed Care', description: 'Patients turned away or delayed due to unverified insurance status.' }
                ]
            },
            {
                type: 'workflow',
                title: 'Real-Time Verification Engine',
                subtitle: 'Automated Precision',
                data: [
                    { title: 'Capture', description: 'Patient demographic data ingested via EMR integration.' },
                    { title: 'Query', description: 'Automated 270/271 EDI transactions to payers for instant coverage verification.' },
                    { title: 'Validate', description: 'Cross-check for secondary insurance, deductible balance, and co-pay requirements.' },
                    { title: 'Notify', description: 'Instant alerts to front-desk staff for any eligibility discrepancies.' }
                ]
            },
            {
                type: 'kpi',
                title: 'Verification Performance',
                subtitle: 'Operational Excellence',
                data: [
                    { value: '99.9%', label: 'Accuracy Rate', description: 'Eliminating the guesswork from patient insurance coverage.' },
                    { value: '< 2 Min', label: 'Processing Time', description: 'Instant feedback on patient eligibility for staff.' }
                ]
            }
        ],
        featuresTitle: "Insurance Eligibility",
        features: [
            { title: "Schedule", icon: FaChartArea },
            { title: "Ascertain Coverage", icon: FaBullhorn },
            { title: "Obtain Prior Authorization", icon: FaList },
            { title: "Identify Policy Exclusion", icon: FaLocationArrow },
        ],
        showFeaturesTop: false
    },
    {
        title: "Medical Billing",
        slug: "medical-billing",
        bannerTitle: "Advanced & Efficient Medical Billing Services",
        description: "Error-free charge entry and real-time insurance verification.",
        showFeaturesTop: true,
        featuresTitle: "Key Features of Medical Billing Services",
        featuresDescription: "SBN Healthcare Medical billing and coding services can do a lot to help you run your medical practice efficiently while growing your practice. Our free medical billing software enables you to manage all the patients’ data, improve your practice profitability, increase the number of patients, increase collection rates and reduce denied claims.",
        features: [
            { title: "Error-Free Charge Entry", icon: FaChartPie, description: "We provide detailed error-free charge entry to ensure first-time approved claim submission. We take the demographics and charge info for each patient from you. Our billers enter the charges daily for the claim processing." },
            { title: "Real-Time Insurance Verification", icon: FaFileInvoice, description: "We confirm every patients’ insurance eligibility to streamline your process, shorten account receivable days, and avoid denials." },
            { title: "Claim Submission and Scrubbing", icon: FaCoins, description: "Our billing experts and scrubbing process make sure clean claims are submitted. If there are any rejections, after corrections, re-submission is done the same day." },
            { title: "Payment Posting", icon: FaHandshake, description: "ERAs and EOBs are verified and posted on time. The remaining balances are posted to the patient's account. We verify to make sure appropriate payment is made on each claim." },
            { title: "Patient Statements", icon: FaChartLine, description: "After confirmed appropriate payment from all payers, if the remaining balance is owed by a patient, a detailed statement is generated to send to the patient showing the due balance." },
            { title: "Follow-Up & Appeals", icon: FaHandshake, description: "In case of a denial, our A/R specialists work on the cause of denial to resolve the problem and process the due payment." },
        ],
        sections: [
            {
                type: 'ai-indicator',
                stage: 'Intelligent Charge Capture',
                description: 'Our AI-driven charge entry system identifies missing charges and potential coding errors before submission.',
                data: '98.5% First-Pass Clean Claims'
            },
            {
                type: 'workflow',
                title: 'Full-Cycle Billing Precision',
                subtitle: 'End-to-End Management',
                data: [
                    { title: 'Ingest', description: 'Seamless data retrieval from your EMR or secure encounter forms.' },
                    { title: 'Scrub', description: 'Rigorous automated claim scrubbing for NCCI and payer-specific edits.' },
                    { title: 'Submit', description: 'Direct EDI submission to primary, secondary, and tertiary payers.' },
                    { title: 'Recover', description: 'Aggressive follow-up on any claim that doesn\'t result in appropriate payment within 15 days.' }
                ]
            },
            {
                type: 'kpi',
                title: 'Billing Outcomes',
                subtitle: 'Measured Success',
                data: [
                    { value: '15%', label: 'Revenue Lift', description: 'Average increase in collections for new clients in the first 6 months.' },
                    { value: '25 Days', label: 'Average A/R', description: 'Consistently maintaining days in A/R well below industry benchmarks.' }
                ]
            },
            {
                title: "Ready to Transform Your Revenue Cycle?",
                content: "Stop guessing and start growing. Our specialists are ready to conduct a comprehensive RCM audit for your practice today.",
                type: "cta"
            }
        ]
    },
    {
        title: "Medical Coding",
        slug: "medical-coding",
        bannerTitle: "Enjoy Greater Convenience with Integrated Coding Services",
        description: "Save valuable time and get paid faster by sending clean insurance claims the first time.",
        sections: [
            {
                type: 'ai-indicator',
                stage: 'AI-Assisted Coding Accuracy',
                description: 'Our proprietary AI engine cross-references clinical notes with ICD-10 and CPT databases to suggest the most precise codes, reducing human error.',
                data: '99.2% Coding Accuracy'
            },
            {
                type: 'workflow',
                title: 'High-Velocity Coding Pipeline',
                subtitle: 'Accuracy at Scale',
                data: [
                    { title: 'Ingest', description: 'Real-time retrieval of physician notes and clinical transcripts from EMR.' },
                    { title: 'Screen', description: 'AI pre-coding and automated cross-referencing for NCCI edits.' },
                    { title: 'Verify', description: 'CPC-certified review for complex cases and surgical procedure coding.' },
                    { title: 'Finalize', description: 'Same-day completion of encounters for immediate billing submission.' }
                ]
            },
            {
                type: 'kpi',
                title: 'Coding Performance',
                subtitle: 'Speed and Precision',
                data: [
                    { value: '24h', label: 'Turnaround Time', description: 'Ensuring your claims are ready for submission within one business day.' },
                    { value: '98%+', label: 'Audit Acceptance', description: 'Consistent performance that stands up to the most rigorous payer audits.' }
                ]
            },
            {
                title: "Ready to Minimize Denials with Precise Coding?",
                content: "Accuracy starts at the code level. Our certified experts are ready to optimize your coding workflow today.",
                type: "cta"
            }
        ],
        featuresTitle: "Why Choose Us",
        features: [
            { title: "Customer Service", icon: FaChartPie, description: "Our customer service team is always happy to assist at any time." },
            { title: "Security", icon: FaFileInvoice, description: "We provide a tight security system to keep all your information safe." },
            { title: "Support", icon: FaCoins, description: "The support we provide covers all aspects of the process." },
        ]
    },
    {
        title: "AR Follow-up & Denial Management",
        slug: "ar-follow-up-and-denial-management",
        bannerTitle: "AR Follow-up & Denial Management",
        description: "Account Receivable Follow-up Services",
        sections: [
            {
                type: 'problem-snapshot',
                title: 'The Burden of Unchecked Ar/Denials',
                data: [
                    { title: 'Aging A/R > 90 Days', description: 'Hidden revenue leakage often hides in accounts that haven\'t been touched in months.' },
                    { title: 'Generic Denial Codes', description: 'Automated payer responses that lack actionable intelligence.' },
                    { title: 'Limited Staff Capacity', description: 'In-house teams overwhelmed by the volume of unpaid claims.' },
                    { title: 'Missed Appeal Windows', description: 'Revenue permanently lost due to administrative delays.' }
                ]
            },
            {
                type: 'workflow',
                title: 'Our Clean-Claim Engine',
                subtitle: 'The SBN Process',
                data: [
                    { title: 'Analyze', description: 'Root-cause analysis of every denial using historical data.' },
                    { title: 'Correct', description: 'Human-in-the-loop validation of CPT and ICD coding edits.' },
                    { title: 'Execute', description: 'Strategic re-submission and aggressive Payer follow-up.' },
                    { title: 'Recover', description: 'Verification of appropriate payment and aging report cleanup.' }
                ]
            },
            {
                type: 'ai-indicator',
                stage: 'Predictive Denial Mapping',
                description: 'Our AI engine analyzes Payer patterns to predict potential denials before claims are even submitted, allowing for proactive correction.',
                data: '94% Prediction Accuracy'
            },
            {
                type: 'kpi',
                title: 'Measurable Financial Recovery',
                subtitle: 'Performance Benchmarks',
                data: [
                    { value: '30%', label: 'Reduction in A/R Days', description: 'Accelerating cash flow by shortening the billing cycle.' },
                    { value: '98%', label: 'Clean Claim Rate', description: 'First-pass acceptance rate through rigorous scrubbing.' },
                    { value: '15%', label: 'Revenue Lift', description: 'Average increase in collected revenue within 6 months.' },
                    { value: '24/7', label: 'Monitor', description: 'Continuous surveillance of claim status across all Payers.' }
                ]
            },
            {
                title: "Ready to Recover Your Revenue?",
                content: "Stop the leakage. Let our specialists conduct a free audit of your current aging reports and identify immediate recovery opportunities.",
                type: "cta"
            }
        ]
    },
    {
        title: "Credentialing & Contracting",
        slug: "credentialing-and-contracting",
        bannerTitle: "Credentialing & Contracting",
        description: "Credentialing and contracting services.",
        sections: [
            {
                type: 'problem-snapshot',
                title: 'The Enrollment Bottleneck',
                data: [
                    { title: 'Delayed Revenue', description: 'New providers often wait 90-120 days to start billing while waiting for enrollment.' },
                    { title: 'Incomplete Filings', description: 'Application rejections due to missing CAQH updates or expired licenses.' },
                    { title: 'Out-of-Network Risks', description: 'High patient costs and lost volume due to expired or unmaintained contracts.' }
                ]
            },
            {
                type: 'workflow',
                title: 'Rapid Provider Enrollment',
                subtitle: 'Accelerated Access',
                data: [
                    { title: 'Onboard', description: 'Comprehensive documentation collection and verification (License, DEA, CV).' },
                    { title: 'Submit', description: 'Strategic payer application submission via portal or direct EDI.' },
                    { title: 'Monitor', description: 'Aggressive weekly follow-up with payer credentialing committees.' },
                    { title: 'Network', description: 'Final contract execution and NPI/Payer ID linkage in EMR.' }
                ]
            },
            {
                type: 'kpi',
                title: 'Credentialing Velocity',
                subtitle: 'Market Readiness',
                data: [
                    { value: '-30%', label: 'Enrollment Lead Time', description: 'Average reduction in time-to-first-claim for new providers.' },
                    { value: '100%', label: 'Compliance Audit', description: 'Ensuring every provider is fully licensed and credentialed across all active payers.' }
                ]
            },
            {
                title: "Ready to Start Billing Faster?",
                content: "Don't let paperwork slow down your growth. Our enrollment experts are ready to handle the heavy lifting for you.",
                type: "cta"
            }
        ],
        featuresTitle: "Provider Enrollment and Credentialing",
        features: [
            { title: "Documentation", icon: FaChartPie, description: "Collect documentation and validate, Catalog and Store." },
            { title: "Payer Submission", icon: FaFileInvoice, description: "Identify top payers and file the application in payer-specific format." },
            { title: "Ensure Enrollment", icon: FaCoins, description: "Timely follow-up of application and obtain the enrollment." },
            { title: "Updates / Re-credentialing", icon: FaHandshake, description: "Periodic updates of the payer documents for recredenialing." }
        ]
    },
    {
        title: "Credit Balance Resolution",
        slug: "credit-balance-resolution",
        bannerTitle: "Credit Balance Resolution",
        description: "Services that clean the credit balance backlog.",
        sections: [
            {
                type: 'problem-snapshot',
                title: 'The Burden of Credit Balances',
                data: [
                    { title: 'Inaccurate Aging', description: 'Credit balances hide true receivables, leading to misleading financial reports.' },
                    { title: 'Compliance Risk', description: 'Federal and State laws require timely identification and return of overpayments.' },
                    { title: 'Administrator Overhead', description: 'Internal staff often lack the time to research complex overpayment scenarios.' }
                ]
            },
            {
                type: 'workflow',
                title: 'Clean Aging Initiative',
                subtitle: 'Precision Resolution',
                data: [
                    { title: 'Identify', description: 'Deep audit of aging reports to find accounts with credit balance status.' },
                    { title: 'Analyze', description: 'Root-cause analysis: duplicate posting, overpayment, or adjustment errors.' },
                    { title: 'Resolve', description: 'Immediate correction of posting errors or processing of patient/payer refunds.' },
                    { title: 'Cleanse', description: 'Final report validation to ensure aging accurately reflects practice profit.' }
                ]
            },
            {
                type: 'kpi',
                title: 'Resolution Impact',
                subtitle: 'Audited Clarity',
                data: [
                    { value: '100%', label: 'Compliance Guarantee', description: 'Eliminating the risk of OIG or payer audits related to overpayments.' },
                    { value: '0', label: 'Credit Backlog', description: 'Our goal is a pristine ledger with zero unresolved credit balances.' }
                ]
            }
        ],
    }
];
