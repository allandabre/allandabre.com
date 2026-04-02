/**
 * =============================================================================
 * shinyHuntersPostMeta.js — Slug and metadata for ShinyHunters / Salesforce post
 * =============================================================================
 *
 * PURPOSE:
 *   Single export surface for blog post constants so article components stay
 *   fast-refresh–friendly (components-only exports).
 *
 * RESPONSIBILITIES:
 *   - Define slug and display metadata for the ShinyHunters Salesforce article
 *
 * DEPENDENCIES:
 *   - Used by: Blog.jsx, ShinyHuntersSalesforce.jsx
 *   - Depends on: none
 *
 * =============================================================================
 */

export const SHINY_HUNTERS_POST_SLUG = 'shiny-hunters-salesforce-security'

export const shinyHuntersPostMeta = {
  slug: SHINY_HUNTERS_POST_SLUG,
  title: 'The Simplest Attack. The Biggest Blind Spot.',
  subtitle: 'Why the breach is usually identity, access, and configuration — not the platform.',
  ogDescription: 'Why the breach is usually identity, access, and configuration — not the platform. What recent Salesforce attacks reveal and what to do about it.',
  date: 'March 2026',
  readTime: '8 min read',
}
