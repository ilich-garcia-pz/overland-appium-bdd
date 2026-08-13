# Tag strategy

Use tags to decide what to run based on speed, confidence level, and pipeline stage.

## Core tags

- `@ui`: screen-level validations (field rules, inline errors, visibility, button states).
- `@e2e`: end-to-end business flows across steps/screens.
- `@smoke`: smallest critical subset for fast confidence on PRs.
- `@regression`: broader suite for scheduled runs and release confidence.
- `@onboarding`, `@shipping`: business domain tags.

## Recommended combinations

- PR quick checks: `@smoke`
- UI-focused runs: `@ui and @onboarding`
- E2E business checks: `@e2e and @onboarding`
- Full non-flaky set: `@regression`

## Commands

The project uses `TAGS` env var in `wdio.conf.js` (`cucumberOpts.tagExpression`).

- Android smoke:
  - `npm run test:android:smoke`
- Android UI:
  - `npm run test:android:ui`
- Android E2E:
  - `npm run test:android:e2e`
- Android regression:
  - `npm run test:android:regression`
- iOS smoke:
  - `npm run test:ios:smoke`

## Custom expressions

Run directly with a custom expression:

- `cross-env PLATFORM=android TAGS="@ui and not @smoke" wdio run wdio.conf.js`

Use `and`, `or`, and `not` to combine filters.