/* Requirements per dimension, lifted verbatim from the v1 prototype
   (ASAM 4th Edition Prototype.html). `kind` mirrors its badge class;
   `note` = the yellow FOR OCTOBER block, `open` = the blue open-questions block. */
window.ASAM_REQS = {
  "note": {
    "summary": "",
    "reqs": [
      {
        "id": "REQ-N-1",
        "title": "Compiled note behaves as it does today",
        "state": "No change",
        "kind": "keep",
        "what": "Compile And Preview produces the note exactly the way the current app does — same screen, same header, same structure, same repeatable compile. v4 changes the content that reaches the note, not the compile behavior.",
        "ac": [
          "No change to how the note is compiled, previewed or saved."
        ],
        "docPages": ["assets/note-example-p1.png", "assets/note-example-p2.png"],
        "doc": "assets/asam-note-example-08-18-2026.pdf",
        "docCaption": "A compiled ASAM note as the app produces it today (08/18/2026).",
        "note": null,
        "open": null
      }
    ]
  },
  "d1": {
    "summary": "Partially built. The only dimension with a working v4 path today.",
    "reqs": [
      {
        "id": "REQ-D1-1",
        "title": "Intoxication & Associated Risks rating",
        "state": "To build",
        "kind": "build",
        "what": "New in the 4th Edition. Its own risk rating subdimension.",
        "ac": [
          "Codes: 4 = Level 4, 3B = Min 3.7 BIO, 3A = Min 3.7, 2 = Min 2.7, ANY = Any LOC, 0 = No specific needs. One selection per row.",
          "One chip stays selected per row: picking a different code moves the highlight, picking the same code again un-highlights it.",
          "Each pick appends its own line to the note.",
          "The selected code shows on the Recommendation tab and in the compiled note.",
          "v4 flag only. Unflagged charts keep the v3 form untouched."
        ],
        "note": null,
        "open": null
      },
      {
        "id": "REQ-D1-2",
        "title": "Withdrawal & Associated Risks rating",
        "state": "To build",
        "kind": "build",
        "what": "New in the 4th Edition. Its own risk rating subdimension.",
        "ac": [
          "Codes: 4 = Level 4, 3B = Min 3.7 BIO, 3A = Min 3.7, 2 = Min 2.7, 1 = Min 1.7, EVAL = Prompt evaluation, 0 = No specific needs. One selection per row.",
          "One chip stays selected per row: picking a different code moves the highlight, picking the same code again un-highlights it.",
          "Each pick appends its own line to the note.",
          "The selected code shows on the Recommendation tab and in the compiled note.",
          "v4 flag only. Unflagged charts keep the v3 form untouched."
        ],
        "note": null,
        "open": null
      },
      {
        "id": "REQ-D1-3",
        "title": "Addiction Medication Needs Risk rating",
        "state": "To build",
        "kind": "build",
        "what": "New in the 4th Edition. Its own risk rating subdimension.",
        "ac": [
          "Codes: C = 3.7, B = 2.7, A = 1.7, EVAL, ANY. One selection per row.",
          "One chip stays selected per row: picking a different code moves the highlight, picking the same code again un-highlights it.",
          "Each pick appends its own line to the note.",
          "The selected code shows on the Recommendation tab and in the compiled note.",
          "v4 flag only. Unflagged charts keep the v3 form untouched."
        ],
        "note": null,
        "open": null
      },
      {
        "id": "REQ-D1-4",
        "title": "Addiction Medication Needs (MOUD) button",
        "state": "To build",
        "kind": "build",
        "what": "Conduct button on the D1 panel that opens the MOUD shrub for data entry. Separate from the rating in REQ-D1-3 — the button captures the narrative, the rating carries the code.",
        "ac": [
          "Opens the shrub modal like every other conduct button.",
          "Selections compile into the note.",
          "Needs its own content set — new shrubs still to come from the October spec."
        ],
        "note": {
          "label": "For October",
          "text": "Blocked on content: Need Shrub Data from October",
          "items": []
        },
        "open": null
      },
      {
        "id": "REQ-D1-5",
        "title": "Points to Consider",
        "state": "To build",
        "kind": "build",
        "what": "Add Points to Consider to the dimension. It displays text only — no rating, no codes. Applies to all dimensions.",
        "ac": [],
        "note": null,
        "open": null
      },
      {
        "id": "REQ-D1-6",
        "title": "Risk Rating — global, v3 only",
        "state": "Keep v3",
        "kind": "keep",
        "what": "Applies to all six dimensions. v4 does not use the legacy Risk Rating, but v3 still depends on it.",
        "ac": [
          "v3 charts keep Risk Rating on every dimension, working exactly as it does today.",
          "v4 charts hide it and exclude it from the note and the LOC engine.",
          "Hide by flag only — no in-place edits or deletions. Saved v3 ratings stay readable."
        ],
        "note": null,
        "open": null
      },
      {
        "id": "REQ-D1-7",
        "title": "Unhook flagged Intoxication Severity & Withdrawal Risk from v4",
        "state": "Retire v4",
        "kind": "retire",
        "what": "The two items currently behind the feature flag should no longer be associated with the 4th Edition.",
        "ac": [
          "Neither appears on the v4 D1 path. The REQ-D1-1 and REQ-D1-2 ratings are the only D1 severity inputs.",
          "Neither feeds a code into the v4 LOC engine or note.",
          "Existing data is preserved and stays viewable where it was entered."
        ],
        "img": "assets/v3-rating-d1.png",
        "imgCaption": "The v3 Intoxication Severity / Withdrawal Risk & Complexity 0–2 ratings being retired on v4 charts.",
        "note": null,
        "open": null
      },
      {
        "id": "REQ-D1-8",
        "title": "Shrub picker redesign & edition selection",
        "state": "Open",
        "kind": "req",
        "what": "Two open design questions that affect every dimension, raised here because D1 is the first build.",
        "ac": [],
        "note": null,
        "open": {
          "label": "Open items",
          "text": "",
          "items": [
            "Redesign of the shrub mockup — the current data-entry modal needs a decision on column layout, grouping, and how selections read back into the note.",
            "v3 vs v4: how do users choose which edition they are working in — chart-level setting, per-assessment toggle, or org default?",
            "Whether both editions can coexist on the same chart, and what the clinician sees when they switch."
          ]
        }
      }
    ]
  },
  "d2": {
    "summary": "Not started. No v4 content exists.",
    "reqs": [
      {
        "id": "REQ-D2-1",
        "title": "Psychotropic Med History moves to D3",
        "state": "Move",
        "kind": "move",
        "what": "Psychotropic meds belong under D3 in v4. Physical-health meds stay on D2.",
        "ac": [
          "On v4 charts the tab appears under D3 and not under D2.",
          "The v3 D2 tab stays intact — move by flag, no in-place edits."
        ],
        "note": null,
        "open": null
      },
      {
        "id": "REQ-D2-2",
        "title": "Add Vital Signs",
        "state": "To build",
        "kind": "build",
        "what": "v4 front-loads vitals on D2. The conduct button opens the existing Primary Care Vital Signs panel.",
        "ac": [
          "Milestone 1 uses the Vital Signs shrub content exactly as it exists today — same sections, field labels, wording and note output. No content changes in this milestone.",
          "v4 flag only."
        ],
        "img": "assets/vital-signs-primary-care.png",
        "imgCaption": "The existing Primary Care Vital Signs panel — v4 reuses this UI as-is on D2.",
        "note": {
          "label": "For Milestone 3",
          "text": "Milestone 3 pushes for the updated Vital Signs content and note format — carry the changes discussed into a follow-up requirement. This removes the cholesterol and does a redesign.",
          "items": []
        },
        "open": null
      },
      {
        "id": "REQ-D2-3",
        "title": "Pregnancy Screen",
        "state": "To build",
        "kind": "build",
        "what": "Conduct button on the D2 panel that opens the Pregnancy Screen shrub for data entry.",
        "ac": [
          "Opens the shrub modal like every other conduct button.",
          "Selections compile into the note.",
          "Needs its own content set — new shrubs still to come from the October spec."
        ],
        "note": {
          "label": "For October",
          "text": "Blocked on content: Need Shrub Data from October",
          "items": []
        },
        "open": null
      },
      {
        "id": "REQ-D2-4",
        "title": "Physical Health Concerns Risk rating",
        "state": "To build",
        "kind": "build",
        "what": "New in the 4th Edition. Its own risk rating subdimension.",
        "ac": [
          "Codes: 4 = L4, 3B = 3.7 BIO, 3A = 3.7, 2 = 2.7, 1 = 1.7, ANY, 0. One selection per row.",
          "One chip stays selected per row: picking a different code moves the highlight, picking the same code again un-highlights it.",
          "Each pick appends its own line to the note.",
          "The selected code shows on the Recommendation tab and in the compiled note.",
          "v4 flag only. Unflagged charts keep the v3 form untouched."
        ],
        "note": null,
        "open": null
      },
      {
        "id": "REQ-D2-5",
        "title": "Pregnancy-related Concerns Risk rating",
        "state": "To build",
        "kind": "build",
        "what": "New in the 4th Edition. Its own risk rating subdimension.",
        "ac": [
          "Codes: 4 = L4, 3 = 3.7, 2 = 2.7, 1 = 1.7, ANY, 0. One selection per row.",
          "One chip stays selected per row: picking a different code moves the highlight, picking the same code again un-highlights it.",
          "Each pick appends its own line to the note.",
          "The selected code shows on the Recommendation tab and in the compiled note.",
          "v4 flag only. Unflagged charts keep the v3 form untouched."
        ],
        "note": null,
        "open": null
      },
      {
        "id": "REQ-D2-6",
        "title": "Retire the single 0–4 rating from v4",
        "state": "Retire v4",
        "kind": "retire",
        "what": "Replaced by the two rating columns above.",
        "ac": [
          "Hidden on v4 charts and excluded from the v4 note and LOC engine.",
          "Unchanged and fully functional for v3."
        ],
        "img": "assets/v3-biomedical-0-4-rating.png",
        "imgCaption": "The v3 single 0–4 BioMedical Conditions and Complications rating being retired on v4 charts.",
        "note": null,
        "open": null
      },
      {
        "id": "REQ-D2-7",
        "title": "Medical Screen",
        "state": "To build",
        "kind": "build",
        "what": "Conduct button on the D2 panel that opens the Medical Screen shrub for data entry.",
        "ac": [
          "Opens the shrub modal like every other conduct button.",
          "Selections compile into the note."
        ],
        "note": null,
        "open": null
      },
      {
        "id": "REQ-D2-10",
        "title": "Sleep Problems",
        "state": "To build",
        "kind": "build",
        "what": "Conduct button on the D2 panel that opens the Sleep Problems shrub for data entry. Sleep is a biomedical driver in v4 — it affects withdrawal severity, medication choice and daytime function, so it gets its own button rather than a line inside another screen.",
        "ac": [
          "Opens the shrub modal like every other conduct button.",
          "Selections compile into the note.",
          "Shrub content: presenting problem, typical hours per night, relationship to substance use, contributing factors, sleep apnea indicators, current management.",
          "Sleep content entered here should not be re-asked by Sleep & Physical Functioning on the D2 sub-tab."
        ],
        "note": null,
        "open": null
      },
      {
        "id": "REQ-D2-9",
        "title": "Existing v3 buttons stay intact",
        "state": "Keep v3",
        "kind": "keep",
        "what": "Every button on this dimension today keeps working on the v3 path — same label, same shrub content, same note output. v4 changes must not remove, rename or disable them for v3 charts.",
        "ac": [
          "Current Non Psychotropics and Medical Status and Stability stay on D2 unchanged for v3.",
          "Psychotropic Med History stays on D2 for v3. It also appears on D3 in v4 — see REQ-D2-1 / REQ-D3-2.",
          "A button that moves in v4 is added to its new dimension, not cut from this one. Both resolve to the same tab; v3 data stays where it was entered."
        ],
        "note": null,
        "open": null
      },
      {
        "id": "REQ-D2-8",
        "title": "Points to Consider",
        "state": "To build",
        "kind": "build",
        "what": "Add Points to Consider to the dimension. It displays text only — no rating, no codes. Applies to all dimensions.",
        "ac": [],
        "note": null,
        "open": null
      }
    ]
  },
  "d3": {
    "summary": "",
    "reqs": [
      {
        "id": "REQ-D3-2",
        "title": "Psychotropic Med History arrives from D2",
        "state": "Move",
        "kind": "move",
        "what": "Destination side of the D2 move.",
        "ac": [
          "New flagged tab under D3 on v4 charts.",
          "The v3 D2 original is untouched."
        ],
        "note": null,
        "open": null
      },
      {
        "id": "REQ-D3-3",
        "title": "Cognitive / Persistent Disability Screen",
        "state": "To build",
        "kind": "build",
        "what": "Conduct button on the D3 panel that opens the Cognitive / Persistent Disability shrub for data entry.",
        "ac": [
          "Opens the shrub modal like every other conduct button.",
          "Selections compile into the note."
        ],
        "note": null,
        "open": null
      },
      {
        "id": "REQ-D3-4",
        "title": "COE Determination",
        "state": "To build",
        "kind": "build",
        "what": "Conduct button on the D3 panel that opens the COE Determination shrub for data entry.",
        "ac": [
          "Opens the shrub modal like every other conduct button.",
          "Selections compile into the note."
        ],
        "note": null,
        "open": null
      },
      {
        "id": "REQ-D3-5",
        "title": "Active Psychiatric Symptoms Risk rating",
        "state": "To build",
        "kind": "build",
        "what": "New in the 4th Edition. Its own risk rating subdimension.",
        "ac": [
          "Codes: 4 = L4 Psych, 3B = 3.7 COE, 3A = 3.5 COE, 2B = 2.7 COE, 2A = 2.5 COE, 1C = 1.7 COE, 1B = 1.7, 1A = 1.5 COE, ANY, 0. One selection per row.",
          "One chip stays selected per row: picking a different code moves the highlight, picking the same code again un-highlights it.",
          "Each pick appends its own line to the note.",
          "The selected code shows on the Recommendation tab and in the compiled note.",
          "v4 flag only. Unflagged charts keep the v3 form untouched."
        ],
        "note": null,
        "open": null
      },
      {
        "id": "REQ-D3-6",
        "title": "Persistent Disability Risk rating",
        "state": "To build",
        "kind": "build",
        "what": "New in the 4th Edition. Its own risk rating subdimension.",
        "ac": [
          "Codes: 1Z = 1.5 COE, ANY, 0. One selection per row.",
          "One chip stays selected per row: picking a different code moves the highlight, picking the same code again un-highlights it.",
          "Each pick appends its own line to the note.",
          "The selected code shows on the Recommendation tab and in the compiled note.",
          "v4 flag only. Unflagged charts keep the v3 form untouched."
        ],
        "note": null,
        "open": null
      },
      {
        "id": "REQ-D3-7",
        "title": "Cognitive Screening",
        "state": "To build",
        "kind": "build",
        "what": "Conduct button on the D3 panel that opens the Cognitive Screening shrub for data entry. Separate from Cognitive / Persistent Disability (REQ-D3-3) — both sit side by side on the panel.",
        "ac": [
          "Opens the shrub modal like every other conduct button.",
          "Selections compile into the note."
        ],
        "note": null,
        "open": null
      },
      {
        "id": "REQ-D3-8",
        "title": "Trauma & PTSD Screening",
        "state": "To build",
        "kind": "build",
        "what": "Conduct button on the D3 panel that opens the Trauma & PTSD Screening shrub for data entry. A live DB check confirmed no trauma screening exists today despite ticket history suggesting otherwise.",
        "ac": [
          "Opens the shrub modal like every other conduct button.",
          "Selections compile into the note."
        ],
        "note": null,
        "open": null
      },
      {
        "id": "REQ-D3-10",
        "title": "Mental Status Exam",
        "state": "To build",
        "kind": "build",
        "what": "Conduct button on the D3 panel that opens the Mental Status Exam for data entry. Existing MSE content is a structured slide-out in the current app, not a shrub list — confirm which one v4 uses.",
        "ac": [
          "Opens the shrub modal like every other conduct button.",
          "Selections compile into the note."
        ],
        "note": null,
        "open": null
      },
      {
        "id": "REQ-D3-11",
        "title": "Existing v3 buttons stay intact",
        "state": "Keep v3",
        "kind": "keep",
        "what": "Every button on this dimension today keeps working on the v3 path — same label, same shrub content, same note output. v4 changes must not remove, rename or disable them for v3 charts.",
        "ac": [
          "Global Appraisal of Individual Needs, Mental Health Treatment History, Mental Status Exam and Immediate Risk Factors all stay on D3 unchanged for v3.",
          "None of these move dimension. Where v4 changes their behavior (REQ-D3-10), the change is v4-only."
        ],
        "img": "assets/v3-rating-d3.png",
        "imgCaption": "The v3 rating as it appears on this tab today.",
        "note": null,
        "open": null
      },
      {
        "id": "REQ-D3-9",
        "title": "Points to Consider",
        "state": "To build",
        "kind": "build",
        "what": "Add Points to Consider to the dimension. It displays text only — no rating, no codes. Applies to all dimensions.",
        "ac": [],
        "note": null,
        "open": null
      }
    ]
  },
  "d4": {
    "summary": "Full content swap. Highest-risk dimension in the project — everything here is new or relocated.",
    "reqs": [
      {
        "id": "REQ-D4-1",
        "title": "Points to Consider",
        "state": "To build",
        "kind": "build",
        "what": "Add Points to Consider to the dimension. It displays text only — no rating, no codes. Applies to all dimensions.",
        "ac": [],
        "note": null,
        "open": null
      },
      {
        "id": "REQ-D4-2",
        "title": "Relapse History arrives from D5",
        "state": "Move",
        "kind": "move",
        "what": "Destination side of the D5 move.",
        "ac": [
          "New flagged tab under D4 on v4 charts.",
          "The v3 D5 original is untouched."
        ],
        "note": null,
        "open": null
      },
      {
        "id": "REQ-D4-3",
        "title": "Likelihood of Risky Substance Use Risk rating",
        "state": "To build",
        "kind": "build",
        "what": "New in the 4th Edition. Its own risk rating subdimension.",
        "ac": [
          "Codes: E = 3.5, D = 3.1, C = 2.5, B = 2.1, A = 1.5. One selection per row.",
          "One chip stays selected per row: picking a different code moves the highlight, picking the same code again un-highlights it.",
          "Each pick appends its own line to the note.",
          "The selected code shows on the Recommendation tab and in the compiled note.",
          "v4 flag only. Unflagged charts keep the v3 form untouched."
        ],
        "note": null,
        "open": null
      },
      {
        "id": "REQ-D4-7",
        "title": "Risky Behaviors Checklist",
        "state": "To build",
        "kind": "build",
        "what": "Conduct button on the D4 panel that opens the Risky Behaviors shrub for data entry.",
        "ac": [
          "Opens the shrub modal like every other conduct button.",
          "Selections compile into the note.",
          "Shrub content: gambling, risky sex, DUI, needle-sharing, violence, illegal activity."
        ],
        "note": {
          "label": "For October",
          "text": "Blocked on content: Need Shrub Data from October",
          "items": []
        },
        "open": null
      },
      {
        "id": "REQ-D4-4",
        "title": "Likelihood of Risky SUD-related Behaviors Risk rating",
        "state": "To build",
        "kind": "build",
        "what": "New in the 4th Edition. Its own risk rating subdimension.",
        "ac": [
          "Codes: same scale as REQ-D4-3 plus a 0 option. One selection per row.",
          "One chip stays selected per row: picking a different code moves the highlight, picking the same code again un-highlights it.",
          "Each pick appends its own line to the note.",
          "The selected code shows on the Recommendation tab and in the compiled note.",
          "v4 flag only. Unflagged charts keep the v3 form untouched."
        ],
        "note": null,
        "open": null
      },
      {
        "id": "REQ-D4-5",
        "title": "Imminent Consequences (Appendix C)",
        "state": "To build",
        "kind": "build",
        "what": "Conduct button on the D4 panel that opens the Imminent Consequences shrub for data entry. Severity framing on an hours/days timeframe.",
        "ac": [
          "Opens the shrub modal like every other conduct button.",
          "Selections compile into the note.",
          "Shrub content: serious harm, destabilizing loss, or negative but not destabilizing."
        ],
        "note": null,
        "open": null
      },
      {
        "id": "REQ-D4-8",
        "title": "Existing v3 buttons stay intact",
        "state": "Keep v3",
        "kind": "keep",
        "what": "Every button on this dimension today keeps working on the v3 path — same label, same shrub content, same note output. v4 changes must not remove, rename or disable them for v3 charts.",
        "ac": [
          "Dimension 4, Points to consider stays on D4 as a conduct button for v3.",
          "The v4 Points to Consider panel (REQ-D4-1) is a separate, display-only addition and does not replace the v3 button."
        ],
        "note": null,
        "open": null
      },
      {
        "id": "REQ-D4-6",
        "title": "Retire risk of refusal / non-compliance 0–4",
        "state": "Retire v4",
        "kind": "retire",
        "what": "The old readiness scale.",
        "ac": [
          "Gone entirely on v4 charts, including from the note and LOC engine.",
          "Untouched for v3."
        ],
        "img": "assets/v3-rating-d4.png",
        "imgCaption": "The v3 risk of refusal / non-compliance 0–4 rating being retired on v4 charts.",
        "note": null,
        "open": null
      }
    ]
  },
  "d5": {
    "summary": "Rebuilt. Receives the old D6 environment content and gains three rating columns.",
    "reqs": [
      {
        "id": "REQ-D5-1",
        "title": "Relapse History leaves D5",
        "state": "Move",
        "kind": "move",
        "what": "Origin side of the move to D4.",
        "ac": [
          "Hidden on v4 charts under D5; the v3 original stays in place."
        ],
        "note": null,
        "open": null
      },
      {
        "id": "REQ-D5-2",
        "title": "CD Residential Treatment History leaves D5 in v4",
        "state": "Move",
        "kind": "move",
        "what": "Treatment history is not a recovery-environment risk driver. The button comes off the v4 D5 row; the seat it vacates is taken by Recovery Strengths & Resources (REQ-D5-12).",
        "ac": [
          "Not present on the v4 D5 button row.",
          "Stays intact on the v3 path per REQ-D5-11 — v3 charts keep the button, the tab and the data."
        ],
        "note": null,
        "open": null
      },
      {
        "id": "REQ-D5-12",
        "title": "Recovery Strengths & Resources",
        "state": "To build",
        "kind": "build",
        "what": "Conduct button on the D5 panel that opens the Recovery Strengths & Resources shrub for data entry. v4 asks the recovery environment to be read for what is working, not only for what is wrong.",
        "ac": [
          "Opens the shrub modal like every other conduct button.",
          "Selections compile into the note.",
          "Shrub content: personal strengths, support available, recovery capital, coping skills in use.",
          "Takes the row position vacated by CD Residential Treatment History (REQ-D5-2)."
        ],
        "note": null,
        "open": null
      },
      {
        "id": "REQ-D5-13",
        "title": "Social Determinants of Health",
        "state": "To build",
        "kind": "build",
        "what": "Conduct button on the D5 panel that opens the Social Determinants of Health shrub for data entry. Captures unmet material needs — housing, food, transport, income, safety, care access — that shape whether the selected level of care is reachable.",
        "ac": [
          "Opens the shrub modal like every other conduct button.",
          "Selections compile into the note.",
          "Shrub content: domain of need, severity, impact on treatment, action taken.",
          "Housing entered here must not contradict the Housing & Safety Screen (REQ-D5-4)."
        ],
        "note": null,
        "open": null
      },
      {
        "id": "REQ-D5-3",
        "title": "Support System / Social Setting arrives from D6",
        "state": "Move",
        "kind": "move",
        "what": "Destination side of the D6 move.",
        "ac": [
          "New flagged tab under D5 on v4 charts.",
          "The v3 D6 original is untouched."
        ],
        "note": null,
        "open": null
      },
      {
        "id": "REQ-D5-4",
        "title": "Housing & Safety Screen",
        "state": "To build",
        "kind": "build",
        "what": "Conduct button on the D5 panel that opens the Housing & Safety shrub for data entry.",
        "ac": [
          "Opens the shrub modal like every other conduct button.",
          "Selections compile into the note.",
          "Shrub content: housed, safe, substances or abuse in the home, leaving jail, prison or residential."
        ],
        "note": null,
        "open": null
      },
      {
        "id": "REQ-D5-5",
        "title": "Functional Impairment (Appendix D)",
        "state": "To build",
        "kind": "build",
        "what": "Conduct button on the D5 panel that opens the Functional Impairment shrub for data entry.",
        "ac": [
          "Opens the shrub modal like every other conduct button.",
          "Selections compile into the note.",
          "Shrub content: baseline functioning when not using, chronic deficits."
        ],
        "note": null,
        "open": null
      },
      {
        "id": "REQ-D5-6",
        "title": "Ability to Function Effectively Risk rating",
        "state": "To build",
        "kind": "build",
        "what": "New in the 4th Edition. Its own risk rating subdimension.",
        "ac": [
          "Codes: D = 3.5, C = 3.1, B = 2.5, A = 2.1, ANY, 0. One selection per row.",
          "One chip stays selected per row: picking a different code moves the highlight, picking the same code again un-highlights it.",
          "Each pick appends its own line to the note.",
          "The selected code shows on the Recommendation tab and in the compiled note.",
          "v4 flag only. Unflagged charts keep the v3 form untouched."
        ],
        "note": null,
        "open": null
      },
      {
        "id": "REQ-D5-7",
        "title": "Safety in Environment Risk rating",
        "state": "To build",
        "kind": "build",
        "what": "New in the 4th Edition. Its own risk rating subdimension.",
        "ac": [
          "Codes: A = Min Recovery Residence, 0. One selection per row.",
          "One chip stays selected per row: picking a different code moves the highlight, picking the same code again un-highlights it.",
          "Each pick appends its own line to the note.",
          "The selected code shows on the Recommendation tab and in the compiled note.",
          "v4 flag only. Unflagged charts keep the v3 form untouched."
        ],
        "note": null,
        "open": null
      },
      {
        "id": "REQ-D5-8",
        "title": "Support in Environment Risk rating",
        "state": "To build",
        "kind": "build",
        "what": "New in the 4th Edition. Its own risk rating subdimension.",
        "ac": [
          "Codes: B = 3.1, A = Min Recovery Residence, ANY, 0. One selection per row.",
          "One chip stays selected per row: picking a different code moves the highlight, picking the same code again un-highlights it.",
          "Each pick appends its own line to the note.",
          "The selected code shows on the Recommendation tab and in the compiled note.",
          "v4 flag only. Unflagged charts keep the v3 form untouched."
        ],
        "note": null,
        "open": null
      },
      {
        "id": "REQ-D5-11",
        "title": "Existing v3 buttons stay intact",
        "state": "Keep v3",
        "kind": "keep",
        "what": "Every button on this dimension today keeps working on the v3 path — same label, same shrub content, same note output. v4 changes must not remove, rename or disable them for v3 charts.",
        "ac": [
          "CD Residential Treatment History stays on D5 unchanged for v3. It comes off the v4 row and its v4 destination is still undecided — see REQ-D5-2.",
          "Relapse History stays on D5 for v3. It also appears on D4 in v4 — see REQ-D5-1 / REQ-D4-2.",
          "A button that moves in v4 is added to its new dimension, not cut from this one. Both resolve to the same tab; v3 data stays where it was entered."
        ],
        "note": null,
        "open": null
      },
      {
        "id": "REQ-D5-9",
        "title": "Retire Risk of Relapse 0–4 from v4",
        "state": "Retire v4",
        "kind": "retire",
        "what": "Relapse now sits on D4.",
        "ac": [
          "Hidden on v4 charts and excluded from the v4 note and LOC engine.",
          "Unchanged for v3."
        ],
        "img": "assets/v3-rating-d5.png",
        "imgCaption": "The v3 rating as it appears on this tab today.",
        "note": null,
        "open": null
      },
      {
        "id": "REQ-D5-10",
        "title": "Points to Consider",
        "state": "To build",
        "kind": "build",
        "what": "Add Points to Consider to the dimension. It displays text only — no rating, no codes. Applies to all dimensions.",
        "ac": [],
        "note": null,
        "open": null
      }
    ]
  },
  "d6": {
    "summary": "Structurally the biggest change. Stops being a risk-rated dimension entirely — no code column at all.",
    "reqs": [
      {
        "id": "REQ-D6-1",
        "title": "Support System / Social Setting leaves D6",
        "state": "Move",
        "kind": "move",
        "what": "Origin side of the move to D5.",
        "ac": [
          "Hidden on v4 charts under D6; the v3 original stays in place."
        ],
        "note": null,
        "open": null
      },
      {
        "id": "REQ-D6-2",
        "title": "Points to Consider",
        "state": "To build",
        "kind": "build",
        "what": "Add Points to Consider to the dimension. It displays text only — no rating, no codes. Applies to all dimensions.",
        "ac": [],
        "note": null,
        "open": null
      },
      {
        "id": "REQ-D6-3",
        "title": "Willingness & Ability to Attend button",
        "state": "To build",
        "kind": "build",
        "what": "Conduct button on the D6 panel that opens the Willingness & Ability to Attend shrub for data entry.",
        "ac": [
          "Opens the shrub modal like every other conduct button.",
          "Selections compile into the note.",
          "Needs its own content set — new shrubs still to come from the October spec."
        ],
        "note": {
          "label": "For October",
          "text": "Blocked on content: Need Shrub Data from October",
          "items": []
        },
        "open": null
      },
      {
        "id": "REQ-D6-12",
        "title": "Engagement & discrepancy questions",
        "state": "To build",
        "kind": "build",
        "what": "Questions displayed on the D6 panel itself, not behind a button. Separate from REQ-D6-3 — the button captures the narrative, these questions are answered in place.",
        "ac": [
          "Engagement questions section: Willing to attend recommended LOC? and Able to attend? answered Y/N, plus a barriers row — caregiving, work, transport, court.",
          "Discrepancy section, shown when the selected level differs from the recommended one: LOC unavailable / waitlist / too far; financial, language or ineligible; anticipated consequences of the adjustment.",
          "Each answer appends its own line to the note."
        ],
        "note": null,
        "open": null
      },
      {
        "id": "REQ-D6-4",
        "title": "Barriers to Participation",
        "state": "To build",
        "kind": "build",
        "what": "Conduct button on the D6 panel that opens the Barriers to Participation shrub for data entry.",
        "ac": [
          "Opens the shrub modal like every other conduct button.",
          "Selections compile into the note.",
          "Shrub content: caregiving, work, transport, court commitments.",
          "The same barriers appear in the engagement questions section (REQ-D6-3) — confirm which one owns them so they are not asked twice."
        ],
        "note": null,
        "open": null
      },
      {
        "id": "REQ-D6-5",
        "title": "Readiness / Motivation Change",
        "state": "To build",
        "kind": "build",
        "what": "Conduct button on the D6 panel that opens the Readiness / Motivation shrub for data entry. Where readiness-to-change content from the retired v3 Dimension 4 now lives.",
        "ac": [
          "Opens the shrub modal like every other conduct button.",
          "Selections compile into the note."
        ],
        "note": null,
        "open": null
      },
      {
        "id": "REQ-D6-6",
        "title": "Recommended vs. Selected LOC",
        "state": "To build",
        "kind": "build",
        "what": "Conduct button on the D6 panel that opens the Recommended vs. Selected LOC shrub for data entry. Records the level selected against the one the engine recommended.",
        "ac": [
          "Opens the shrub modal like every other conduct button.",
          "Selections compile into the note.",
          "Shows both the recommended and the selected level."
        ],
        "note": null,
        "open": null
      },
      {
        "id": "REQ-D6-9",
        "title": "Preferences & Treatment Goals",
        "state": "To build",
        "kind": "build",
        "what": "Conduct button on the D6 panel that opens the Preferences & Treatment Goals shrub for data entry. v4 asks that the person’s own goals and stated preferences be recorded before a level is selected.",
        "ac": [
          "Opens the shrub modal like every other conduct button.",
          "Selections compile into the note.",
          "Shrub content: stated goal, treatment preference, priority for this episode, and the goal in the patient’s own words.",
          "Sits first in the D6 button row."
        ],
        "note": null,
        "open": null
      },
      {
        "id": "REQ-D6-10",
        "title": "Cultural & Linguistic Needs",
        "state": "To build",
        "kind": "build",
        "what": "Conduct button on the D6 panel that opens the Cultural & Linguistic Needs shrub for data entry. Records what affects access to the selected level of care.",
        "ac": [
          "Opens the shrub modal like every other conduct button.",
          "Selections compile into the note.",
          "Shrub content: preferred language, interpreter status, cultural considerations, accommodation made.",
          "Language and interpreter needs entered here should be readable alongside Barriers to Participation, which can also cite language."
        ],
        "note": null,
        "open": null
      },
      {
        "id": "REQ-D6-11",
        "title": "Shared Decision-Making Notes",
        "state": "To build",
        "kind": "build",
        "what": "Conduct button on the D6 panel that opens the Shared Decision-Making shrub for data entry. Documents the conversation behind the selected level.",
        "ac": [
          "Opens the shrub modal like every other conduct button.",
          "Selections compile into the note.",
          "Shrub content: options discussed, patient response, who participated, agreement reached.",
          "Sits last in the D6 button row."
        ],
        "note": null,
        "open": null
      },
      {
        "id": "REQ-D6-8",
        "title": "Existing v3 buttons stay intact",
        "state": "Keep v3",
        "kind": "keep",
        "what": "Every button on this dimension today keeps working on the v3 path — same label, same shrub content, same note output. v4 changes must not remove, rename or disable them for v3 charts.",
        "ac": [
          "Support System/Social Setting stays on D6 for v3. It also appears on D5 in v4 — see REQ-D6-1 / REQ-D5-3.",
          "A button that moves in v4 is added to its new dimension, not cut from this one. Both resolve to the same tab; v3 data stays where it was entered."
        ],
        "note": null,
        "open": null
      },
      {
        "id": "REQ-D6-7",
        "title": "Retire the 0–4 social environment rating from v4",
        "state": "Retire v4",
        "kind": "retire",
        "what": "D6 is no longer a risk-rated dimension.",
        "ac": [
          "No code column on v4 charts; excluded from the note and LOC engine.",
          "Unchanged for v3."
        ],
        "img": "assets/v3-rating-d6.png",
        "imgCaption": "The v3 rating as it appears on this tab today.",
        "note": null,
        "open": null
      }
    ]
  },
  "rec": {
    "summary": "",
    "reqs": [
      {
        "id": "REQ-R-7",
        "title": "Recommendation tab layout & control placement",
        "state": "To build",
        "kind": "build",
        "what": "Where each control sits on the Recommendation tab and in what order the clinician meets them.",
        "ac": [
          "Order down the panel: Diagnosis, Service Codes, Telehealth Session, Make a Recommendation, Time Spent, Dimension ratings, Recommended Level of Care.",
          "Diagnosis and Service Codes each pair an Enter button with the entered value beside it, then a Y/N include-in-note choice below.",
          "Make a Recommendation and Time Spent share one row, each taking half the column width rather than sizing to its label.",
          "Dimension ratings is a collapsible section, open by default.",
          "Recommended Level of Care is the last control, directly under the ratings roll-up it depends on.",
          "Compile And Preview spans the notepad width with + Create Custom Button beside it, aligned to the custom shrubs column."
        ],
        "note": null,
        "open": null
      },
      {
        "id": "REQ-R-4",
        "title": "Dimension ratings roll-up & Level-of-Care determination",
        "state": "Engine",
        "kind": "build",
        "what": "The Recommendation tab collects every risk rating selected across the dimensions and turns them into a recommended level of care.",
        "ac": [
          "Dimension ratings section lists one row per dimension — D1 through D5. D6 has no risk ratings and is omitted.",
          "Each row shows every code selected on that dimension, named by its subdimension, so a dimension with two or three ratings shows all of them.",
          "A dimension with nothing selected reads Not rated.",
          "Un-selecting a rating clears it from the row, matching the chip state rather than the note.",
          "Clicking a row opens that dimension so the rating can be reviewed or changed.",
          "Recommended Level of Care is picked by the clinician from the dropdown — it is not derived from the codes.",
          "The compiled note states the selected level and names the dimensions carrying the highest rating as the drivers."
        ],
        "note": null,
        "open": null
      }
    ]
  }
};
