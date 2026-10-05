# Owner decisions — still open after loop 3

5 Oct 2026. These are closed and recorded in `state/metrics_register.md` section E:
- **OD-1** — 25 Hume Ave is part of the site: Lot 1 = 25 Hume, Lot 2 = 79 Cecil, Lot 3 = 77 Cecil.
- **OD-3** — FSR is 14.09:1; never 12:1.
- **OD-9** — the 38-storey yield is in the pack.

Items left in brackets in your 5 Oct answers are recorded as **NOT YET DECIDED**.

## A. Uploads that did not arrive

None of the new inputs listed in your answers are in `inputs/`, on the pushed branch, in this session's uploads, or in Google Drive:
- s10.7 planning certificate, 79 Cecil Ave
- Planning Portal reports for 25 Hume Ave and 77 Cecil Ave
- s9.1 Ministerial Direction
- Sydney Plan Appendix D
- SLUP Appendices A–E

Until they arrive:
- The lot mapping is recorded as **confirmed by owner, verification pending**.
- The hazards answer stays blank, and that item stays **RED**.
- No strategic-framework finding can be upgraded.

To add them:
- **Attach them in this chat** (as you did with the concept pack); or
- **commit them** to `inputs/` on branch `claude/yana-eoi-declaration-amhvby`.

A s10.7 covers only its own lot, so certificates for 25 Hume Ave and 77 Cecil Ave would also be needed to answer the hazards question for the whole site.

## B. Owner decisions still open

| ID | Decision | Status | What I need |
|---|---|---|---|
| OD-4 | Affordable housing basis and structure | NOT YET DECIDED | 3% of GFA or 3% of dwellings (about 7 homes either way). Standing alone, or with a % for 15 years |
| OD-5 | Developer, builder, CHP | NOT YET DECIDED | Name and exact status of each (contracted / letter of intent / in discussion). A letter of intent will not be described as an agreement |
| OD-6 | Certified cost figure | NOT YET DECIDED | $ amount, certifier, date, with the residential component separately. The pack's "$138–155M" range cannot go in the form |
| OD-7 | Target construction start | NOT YET DECIDED | Month and year. The pack shows only the latest permitted date (10 Oct 2029) |
| OD-8 | Affordable offer: locked 3% vs Variant A or B | Locked 3% stands | Decision only. Evidence below |

## C. Open with the planner

| ID | Item | Interim position |
|---|---|---|
| OD-2 | 38 or 39 storeys (L38 is plant) | Describe as "38 residential storeys plus rooftop plant" and lead with 133.9 m, including a 6 m design tolerance. Urbis to confirm under the Standard Instrument definition (CA-4f) |

## D. Evidence that the locked position lowers declaration probability (Rule 3)

**OD-8 — affordable housing**

Full evidence and reasoning: `state/scorecard.md`.

| Position | Estimate | Basis |
|---|---|---|
| Locked 3% perpetual | about 15% (10–20%) | Lowest offer against the largest uplift in the located record. Below 5% perpetual at 325-329 Old Northern Rd (R-c5) and 10% perpetual declared at 465 Victoria Ave, Chatswood (R-d1) |
| Variant A — 10% of GFA perpetual | about 35% (30–40%) | Matches the Chatswood perpetual declaration |
| Variant B — 3% perpetual + 12% for 15 years | about 30% (25–35%) | Equals 16-20 Old Castle Hill Rd's 15% for 15 years (R-c1), but only 3% is perpetual where the guidance asks for perpetuity (R-a3) |

Both variants are drafted at the end of `outputs/webform.md`. The main answer stays at 3%.

**OD-10 — density**

Your FSR decision (14.09:1) closes the option of bringing density within the 12.31:1 reported for 16-20 Old Castle Hill Rd. YANA is now firmly the densest scheme in the located Castle Hill record. This is noted as evidence only; no change is proposed.

## E. Environment

The network is still blocked (tested 5 Oct 2026, loop 3) for:
- planning.nsw.gov.au
- legislation.nsw.gov.au
- planningportal.nsw.gov.au
- nswdpie.tfaforms.net

So the following remain UNVERIFIED:
- the live form questions and word limits
- the current criteria
- the HDA records since 13 Aug 2026
- the reasons for the non-declarations at 26 Hume Ave, 89-91 Cecil Ave and 15-17 Ashford Ave / 29-31 Partridge Ave

To change this: environment settings → Network access → allow those hosts.
