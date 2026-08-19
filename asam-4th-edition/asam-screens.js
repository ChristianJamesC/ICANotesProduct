/* ASAM 4th Edition screen definitions — what sits on each dimension panel.
   Lifted from the v1 prototype so the rebuild stays faithful.

   dot: 'new'  = net-new in v4        'chg' = exists in v3, changes in v4
   req: the requirement id the annotation dot links to. */

export const LOC_OPTIONS = [
  'None',
  'Acute Care Hospitalization',
  'IOP',
  'Outpatient Services',
  'Partial Hospitalization',
  'Residential',
];

/* Buttons with no shrub content behind them yet — REQ blocked on October. */
export const BLOCKED = [
  'Addiction Medication Needs (MOUD)', 'Pregnancy Screen',
];

export const SCREENS = [
  {
    id: 'd1',
    tab: 'Dimension 1',
    title: 'Dimension 1: Intoxication, Withdrawal & Addiction Medications',
    pills: [
      { label: 'Chemical Use History' },
      { label: 'Withdrawal History' },
      { label: 'Rating Scales' },
      { label: 'Addiction Medication Needs (MOUD)', dot: 'new', req: 'REQ-D1-3' },
    ],
    ratings: [
      { name: 'Intoxication & Associated Risks', dot: 'new', req: 'REQ-D1-1', codes: [
        ['4', 'Level 4'], ['3B', 'Min 3.7 BIO'], ['3A', 'Min 3.7'], ['2', 'Min 2.7'],
        ['ANY', 'Any LOC'], ['0', 'No specific needs'],
      ] },
      { name: 'Withdrawal & Associated Risks', dot: 'new', req: 'REQ-D1-2', codes: [
        ['4', 'Level 4'], ['3B', 'Min 3.7 BIO'], ['3A', 'Min 3.7'], ['2', 'Min 2.7'],
        ['1', 'Min 1.7'], ['EVAL', 'Prompt evaluation'], ['0', 'No specific needs'],
      ] },
      { name: 'Addiction Medication Needs', dot: 'new', req: 'REQ-D1-3', codes: [
        ['C', 'Min 3.7'], ['B', 'Min 2.7'], ['A', 'Min 1.7'],
        ['EVAL', 'Prompt evaluation'], ['MOUD-C', 'Continue MOUD'],
      ] },
    ],
    ptc: [
      'Any risk of overdose / severe intoxication? → ED transfer',
      'Anticipated peak withdrawal severity by last use + history',
      'IV fluids / IV meds / advanced wound care → 3.7 BIO',
      'Currently on MOUD? Need continuation program?',
    ],
  },
  {
    id: 'd2',
    tab: 'Dimension 2',
    title: 'Dimension 2: Biomedical Conditions',
    pills: [
      { label: 'Vital Signs', dot: 'new', req: 'REQ-D2-2', kind: 'vitals' },
      { label: 'Current Non-Psychotropics', dot: 'chg', req: 'REQ-D2-1' },
      { label: 'Medical Screen', dot: 'new', req: 'REQ-D2-7' },
      { label: 'Pregnancy Screen', dot: 'new', req: 'REQ-D2-3' },
      { label: 'Sleep Problems', dot: 'new', req: 'REQ-D2-10' },
    ],
    ratings: [
      { name: 'Physical Health Concerns', dot: 'new', req: 'REQ-D2-4', codes: [
        ['4', 'Level 4'], ['3B', 'Min 3.7 BIO'], ['3A', 'Min 3.7'], ['2', 'Min 2.7'],
        ['1', 'Min 1.7'], ['ANY', 'Any LOC'], ['0', 'No specific needs'],
      ] },
      { name: 'Pregnancy-related Concerns', dot: 'new', req: 'REQ-D2-5', codes: [
        ['4', 'Level 4'], ['3', 'Min 3.7'], ['2', 'Min 2.7'], ['1', 'Min 1.7'],
        ['ANY', 'Any LOC'], ['0', 'No specific needs'],
      ] },
    ],
    ptc: [
      'Do medical issues interact with the addiction?',
      'Can patient access external medical care reliably?',
      'Pregnant? Receiving prenatal care? Complications?',
      'Needs integrated medical management to participate?',
    ],
  },
  {
    id: 'd3',
    tab: 'Dimension 3',
    title: 'Dimension 3: Psychiatric & Cognitive Conditions',
    pills: [
      { label: 'Mental Health Treatment History' },
      { label: 'Mental Status Exam', dot: 'new', req: 'REQ-D3-10' },
      { label: 'Immediate Risk Factors' },
      { label: 'Psychotropic Med History', dot: 'chg', req: 'REQ-D3-2' },
      { label: 'Cognitive / Persistent Disability', dot: 'new', req: 'REQ-D3-3' },
      { label: 'COE Determination', dot: 'new', req: 'REQ-D3-4' },
      { label: 'Global Appraisal of Individual Needs', dot: 'chg', req: 'REQ-D3-1' },
      { label: 'Trauma & PTSD Screening', dot: 'new', req: 'REQ-D3-8' },
      { label: 'Cognitive Screening', dot: 'new', req: 'REQ-D3-7' },
    ],
    ratings: [
      { name: 'Active Psychiatric Symptoms', dot: 'new', req: 'REQ-D3-5', codes: [
        ['4', 'Level 4 Psychiatric'], ['3B', 'Min 3.7 COE'], ['3A', 'Min 3.5 COE'],
        ['2B', 'Min 2.7 COE'], ['2A', 'Min 2.5 COE'], ['1C', 'Min 1.7 COE'],
        ['1B', 'Min 1.7'], ['1A', 'Min 1.5 COE'], ['ANY', 'Any LOC'], ['0', 'No specific needs'],
      ] },
      { name: 'Persistent Disability', dot: 'new', req: 'REQ-D3-6', codes: [
        ['1Z', 'Min 1.5 COE'], ['ANY', 'Any LOC'], ['0', 'No specific needs'],
      ] },
    ],
    ptc: [
      'Imminent risk to self/others? → Level 4 Psychiatric',
      'Needs skilled MH interventions / higher staff ratio (COE)?',
      'Needs psychiatric medication management specifically?',
      'Persistent impairment needing accommodation to participate?',
    ],
  },
  {
    id: 'd4',
    tab: 'Dimension 4',
    title: 'Dimension 4: Substance Use-related Risks',
    pills: [
      { label: 'Relapse History', dot: 'chg', req: 'REQ-D4-2' },
      { label: 'Risky Behaviors Checklist', dot: 'new', req: 'REQ-D4-7' },
      { label: 'Imminent Consequences (App. C)', dot: 'new', req: 'REQ-D4-5' },
    ],
    ratings: [
      { name: 'Likelihood of Risky Substance Use', dot: 'new', req: 'REQ-D4-3', codes: [
        ['E', 'Min 3.5'], ['D', 'Min 3.1'], ['C', 'Min 2.5'], ['B', 'Min 2.1'], ['A', 'Min 1.5'],
      ] },
      { name: 'Likelihood of Risky SUD-related Behaviors', dot: 'new', req: 'REQ-D4-4', codes: [
        ['E', 'Min 3.5'], ['D', 'Min 3.1'], ['C', 'Min 2.5'], ['B', 'Min 2.1'],
        ['A', 'Min 1.5'], ['0', 'No specific needs'],
      ] },
    ],
    ptc: [
      'How likely is risky use/behavior within hours–days untreated?',
      'Serious harm / destabilizing loss vs. negative-but-not-destabilizing?',
      'Daytime structure? Night-time support? (drives 2.1 vs 3.1)',
      'Behaviors: gambling · risky sex · DUI · needle-sharing · violence',
    ],
  },
  {
    id: 'd5',
    tab: 'Dimension 5',
    title: 'Dimension 5: Recovery Environment',
    pills: [
      { label: 'Support System / Social Setting', dot: 'chg', req: 'REQ-D5-3' },
      { label: 'Housing & Safety Screen', dot: 'new', req: 'REQ-D5-4' },
      { label: 'Functional Impairment (App. D)', dot: 'new', req: 'REQ-D5-5' },
      { label: 'Recovery Strengths & Resources', dot: 'new', req: 'REQ-D5-12' },
      { label: 'Social Determinants of Health', dot: 'new', req: 'REQ-D5-13' },
    ],
    ratings: [
      { name: 'Ability to Function Effectively', dot: 'new', req: 'REQ-D5-6', codes: [
        ['D', 'Min 3.5'], ['C', 'Min 3.1'], ['B', 'Min 2.5'], ['A', 'Min 2.1'],
        ['ANY', 'Any LOC'], ['0', 'No specific needs'],
      ] },
      { name: 'Safety in Environment', dot: 'new', req: 'REQ-D5-7', codes: [
        ['A', 'Min Recovery Residence'], ['0', 'No specific needs'],
      ] },
      { name: 'Support in Environment', dot: 'new', req: 'REQ-D5-8', codes: [
        ['B', 'Min 3.1'], ['A', 'Min Recovery Residence'], ['ANY', 'Any LOC'], ['0', 'No specific needs'],
      ] },
    ],
    ptc: [
      'Baseline functioning when not using — chronic deficits?',
      'Housed? Safe? Substances/abuse in the home?',
      'Leaving a controlled environment (jail/prison/residential)?',
      'Recovery residence sufficient, or residential needed?',
      'What supports, skills and resources already work for this person?',
    ],
  },
  {
    id: 'd6',
    tab: 'Dimension 6',
    title: 'Dimension 6: Level-of-Care Selection & Engagement',
    pills: [
      { label: 'Preferences & Treatment Goals', dot: 'new', req: 'REQ-D6-9' },
      { label: 'Readiness / Motivation Change', dot: 'new', req: 'REQ-D6-5' },
      { label: 'Cultural & Linguistic Needs', dot: 'new', req: 'REQ-D6-10' },
      { label: 'Willingness & Ability to Attend', dot: 'new', req: 'REQ-D6-3' },
      { label: 'Barriers to Participation', dot: 'new', req: 'REQ-D6-4' },
      { label: 'Recommended vs. Selected LOC', dot: 'new', req: 'REQ-D6-6' },
      { label: 'Shared Decision-Making Notes', dot: 'new', req: 'REQ-D6-11' },
    ],
    ratings: [],
    subscreens: [
      { name: 'Engagement questions', dot: 'new', req: 'REQ-D6-12',
        yn: ['Willing to attend recommended LOC?', 'Able to attend?'],
        checks: ['Barriers: caregiving · work · transport · court'] },
      { name: 'Discrepancy (if LOC adjusted)', dot: 'new', req: 'REQ-D6-12',
        yn: [],
        checks: ['LOC unavailable / waitlist / too far', 'Financial · language · ineligible',
          'Anticipated consequences of adjustment'] },
    ],
    ptc: [
      'This is where readiness / motivation now lives (old D4).',
      'Recommended LOC ≠ selected LOC → document why.',
      'If LOC unavailable, usually step up for safety.',
      'Note anticipated consequences of any adjustment.',
    ],
  },
];

export const REQ_LABEL = {
  new: 'New in v4',
  chg: 'Exists in v3, changes in v4',
};
