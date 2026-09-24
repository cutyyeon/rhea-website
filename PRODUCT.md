# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

static HTML/CSS/JS (user choice; no build tooling)

## Users

Primary audience: procurement / institutional decision-makers (구매·기관 담당자) at medical institutions (clinics and hospitals using autologous PRP) evaluating equipment purchases. They are comparing vendors and screening for trust signals, certifications, specs, and support — not casual browsers. Secondary audience (not primary, but should not be alienated): physicians and clinical staff who will operate the device day to day and may influence the purchase decision.

## Product Purpose

Rhea (device label: "Autologous Bioactive Molecules Enrich System") is a fully automated, closed-system device that centrifuges a patient's whole blood and collects PRP (platelet-rich plasma) and PPP (platelet-poor plasma) into separate syringes. It is not a stem-cell centrifuge — an earlier assumption corrected on 2026-09-24 from the user's Google Drive material. The website's job is to inform and persuade institutional buyers during procurement evaluation — establishing credibility, communicating specs/certifications, and supporting a purchase decision or inquiry.

## Positioning

Device-fact positioning only: automated, closed, sensor-controlled PRP/PPP separation from 60 ml of whole blood. Efficacy and competitor-comparison claims (concentration multiples, growth-factor fold changes, clinical cases, indications) exist in the manufacturer deck but are held back: Korean medical-device advertising requires prior review, and that deck is branded "Phoenix" — its relation to Rhea is unconfirmed. Open decision for the user.

## Operating Context

Clinical settings preparing autologous PRP at the point of care. Procurement involves regulatory checks (domestic medical-device approval) and spec comparison against other PRP systems — Rhea's domestic approval status is unconfirmed; the manufacturer deck states Class II.

## Capabilities and Constraints

Confirmed from source material: whole blood 60 ml; Protocol A PRP 3 ml / Protocol B PRP 6 ml; PPP 10–20 ml (by Hct); centrifugation 6,500 RPM for about 3 min; about 5 min preparation; fully automated closed system with disposable kit; optical sensor detects the PRP layer; Latham-bowl design; touchscreen; Class II (manufacturer deck). Still unknown: power rating, dimensions, weight, domestic approval, certificates. **Do not fabricate specs, certifications, test data, or claims** — placeholder/illustrative content must be clearly structured so it can be swapped for real data without a redesign.

## Brand Commitments

Logo, color palette, and typography are said to be already decided and "coming soon," but were not delivered in this session. Until received, the site uses a provisional brand system (documented in DESIGN.md) chosen to fit a precision lab-equipment / biotech-trust positioning, explicitly swappable once the real logo/colors/fonts arrive.

## Evidence on Hand

From the user's Google Drive (2026-09-24): two product photos ("Rhea Picture" folder → assets/img/), the operating-procedure translation sheet ("의료 기기 매뉴얼 텍스트화 및 번역"), and the manufacturer deck "Phoenix introduction_2023.pptx". Still pending: official spec sheet, approval/certification documents, logo file, brand palette and typography. All content built before these arrive is placeholder and must be labeled/structured for easy replacement — no invented testimonials, certifications, benchmarks, or customer names.

## Product Principles

1. Design for the procurement/institutional buyer first: lead with trust signals, certification/spec clarity, and comparison-friendly structure over developer- or consumer-style flourish.
2. Never fabricate technical claims, certifications, test data, or customer evidence — use clearly-marked placeholders until real material arrives.
3. Keep the implementation a dependency-light static site (no build step) so it stays easy to host and edit for a non-developer owner.
4. Structure placeholder content (spec table, cert badges, imagery, brand tokens) so swapping in real assets later is a content edit, not a redesign.
