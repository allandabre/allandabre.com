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
  subtitle: 'What recent Salesforce breaches reveal about identity, access, and configuration risk.',
  ogDescription: 'What recent Salesforce breaches reveal about identity, access, and configuration risk — and what good controls actually look like.',
  date: 'March 2026',
  readTime: '8 min read',
}
