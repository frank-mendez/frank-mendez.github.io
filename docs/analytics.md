# Portfolio analytics

## Verified destination

Verified in GA Admin on October 13, 2026 (Asia/Manila):

- Account: `333662760` — My web portfolio
- Property: `463878951` — Web Portfolio
- Web stream: `9840783319` — Portfolio
- Stream URL: `https://frank-mendez.github.io`
- Measurement ID: `G-WJNGK7ZYQF`

[Open the property](https://analytics.google.com/analytics/web/#/a333662760p463878951/reports/reportinghub).
The measurement ID is public configuration, not a credential. Both builds in
`.github/workflows/main.yml` receive it. Local builds without configuration remain
untracked. Vite development and normal Vitest runs remain untracked even if an ID
is present. An ID must start with `G-` and contain only uppercase letters/digits
after the prefix; this validates syntax, not ownership of a real GA stream.

## Collection model

The portfolio is one page. Send one manual `page_view` per document load after
metadata is applied. Hash/section navigation emits `navbar_click`, not virtual
page views. Initialization and the initial view are idempotent, including React
StrictMode effect replays. The tag loads asynchronously once, using Google's
`Arguments` command queue. Custom events target the configured stream explicitly.
If the script fails to load, subsequent tracking is a no-op; the portfolio remains
usable. A queued command or a script element alone does not prove delivery.

### GA Admin settings before production validation

In Admin → Data streams → Portfolio → Enhanced measurement:

1. Under Page views → Show advanced settings, turn off **Page changes based on
   browser history events**. Keep normal page loads enabled; the application
   suppresses its automatic configuration view with `send_page_view: false`.
2. Turn off **Form interactions** if reporting exclusively on the application's
   validated contact outcomes. Automatic `form_submit` can include chatbot forms
   and submissions that ultimately fail; it is not a successful lead.
3. Outbound clicks may stay enabled, but they produce generic `click` events in
   addition to `project_click`. Do not sum these as separate project conversions.
4. Review site search, video, downloads, and scroll measurement for relevance.

These are GA-side settings, not controlled by the repository. At investigation
time, history page views and form interactions were enabled. Confirm these settings
before signing off on duplicate-free production collection.

[Google page-view guidance](https://developers.google.com/analytics/devguides/collection/ga4/views)
explains why `send_page_view: false` does not disable history-based measurement.

## Event contract

Parameters below are static UI metadata, numeric lengths, or booleans. The service
allowlists keys per event and ignores unrelated fields. `send_to` is added by the
service. Initial `page_location` excludes query strings and fragments.

| Event                       | Trigger                                             | Parameters                                                                                                                                   |
| --------------------------- | --------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `page_view`                 | Initial portfolio document                          | `page_title`, `page_path: /`, `page_location`                                                                                                |
| `navbar_click`              | Brand, desktop and mobile navigation                | `label`, `destination` (section hash)                                                                                                        |
| `project_click`             | Instrumented featured/project archive links         | Featured cards: `project`, `destination`; archive cards: `project_title`, `project_type`, `link_type` (`site`, `live`, `code`), `target_url` |
| `contact_submit_success`    | Contact API request completes successfully          | `form_provider: frank-bot`                                                                                                                   |
| `contact_submit_error`      | Contact request fails                               | `form_provider: frank-bot`                                                                                                                   |
| `chatbot_toggle`            | Chat opens/closes                                   | `is_open`                                                                                                                                    |
| `chatbot_message_submit`    | Nonempty chatbot submission, before topic filtering | `message_length`                                                                                                                             |
| `chatbot_message_blocked`   | Off-topic message rejected locally                  | `reason: not_about_frank`                                                                                                                    |
| `chatbot_response_received` | Reply displayed, including fallback/error replies   | `response_length`                                                                                                                            |
| `theme_change`              | Reserved legacy event; no active caller             | `theme`                                                                                                                                      |

Existing instrumentation is retained without global click listeners. The hero,
additional engineering links, case-study CTA, mailto links, and booking links do
not all have dedicated custom events. A mailto/booking click does not prove a lead
or a completed booking. Chat response counts do not prove API success.

### Key events and dimensions

Mark **`contact_submit_success`** as a GA4 key event once its live delivery is
verified. Do not mark contact errors, generic `form_submit`, chatbot submissions,
or chatbot replies as leads. There is no booking-completion event in this app.

Create event-scoped custom dimensions only for report requirements: `label` for
navigation, `project`/`project_title` for project identity, and optionally
`link_type`/`project_type` for archive analysis. Prefer one project identity field
when building a report; the two retained schemas belong to different UI surfaces.
Do not register full destination URLs or message lengths as custom dimensions:
they add cardinality without useful grouping. Numeric message lengths can be
custom metrics if there is a concrete reporting need. Registration is not required
to inspect parameters in DebugView.

## Privacy and consent review

Custom analytics must never receive names, email addresses, companies, project
briefs, chatbot text, API error bodies, or contact response identifiers. Existing
callers send only the metadata listed above. The allowlist is a backstop, not a
license to place user content in an allowed field. Google signals and advertising
personalization signals are disabled in the tag configuration.

GA4 can still collect cookies, browser/device metadata, referrers, and enhanced
measurement data. This change does not implement a consent banner or Consent Mode.
The site owner must review the applicable audience/consent requirements and the
privacy notice before rollout. Where consent is required, gate initialization
behind consent or leave the production measurement ID unset until that flow exists.
Review enhanced measurement independently of custom event payloads; email redaction
was enabled in the inspected stream, but is not a substitute for excluding PII.

## Verification checklist

### Automated/offline

Run `pnpm test`, `pnpm lint`, and `pnpm build`. Analytics tests use `G-TEST123456`,
never the production stream, and prevent remote script execution. They cover
missing/invalid configuration, development, an existing unrelated tag, repeated
initialization, Google's command queue, a single initial page view, allowlisted
custom events, debug mode, and a blocked script. A StrictMode hook regression test
checks one event per chatbot toggle.

### Browser delivery and GA receipt

Use a dedicated test property for routine checks. Build with its measurement ID
and `VITE_GA_DEBUG=true`, then run `pnpm preview`. Production acceptance must also
be checked on the deployed GitHub Pages site after merge, against the verified
production stream. Do not count a local preview as deployed-production evidence.

1. In browser Network, disable cache, preserve logs, and load the portfolio.
2. Confirm a single `gtag/js?id=...` request. Check GA `/g/collect` requests (which
   may be batched): correct `tid`, one initial `en=page_view`, expected title/location,
   and successful delivery. Inspect POST payloads as well as URLs. An HTTP response
   does not establish that the event appeared in the intended GA property.
3. Click a navbar section and an instrumented featured project link, open/close
   the chatbot, and submit an off-topic synthetic message. Expect the event names
   and parameters above, without an extra page view on section navigation.
4. Verify contact success and failure with a test backend or intercepted API
   responses; never send a real contact message merely to test analytics. Also
   check a mocked chatbot response. Confirm no user text or email enters GA payloads.
5. In the matching property's Realtime/DebugView, verify initial page view and
   representative navigation, project, contact, and chatbot events. Compare counts
   to actions, not just presence. DebugView requires an explicit debug build or
   an approved browser debugging tool; production builds omit `debug_mode`.
6. Block `googletagmanager.com` and `google-analytics.com`, reload, and verify the
   portfolio/navigation/forms still function. Test a build with no ID as well.
7. Record timestamp/timezone, deployed commit, stream ID, event names/counts,
   redacted network status, and any limitations. Do not attach raw client IDs,
   cookies, contact fields, or chat text to the issue/PR.

### Investigation baseline

At the October 13 inspection, GA Admin reported collection inactive and no data
received in the previous 48 hours. The deployed page contained the correct tag
URL, but the old implementation queued arrays instead of `Arguments` objects.
The property report showed zero events for September 15–October 12, 2026. These are
pre-fix observations, not evidence that the PR's production delivery is verified.

### PR preview verification — October 13, 2026

Verified around 08:49–08:53 Asia/Manila using a local production build with the
verified ID and explicit debug mode. A temporary, uncommitted harness observed
real Google-tag collection requests and intercepted the contact/chat backend
requests. No test inquiries were delivered to the live backend.

The verified property's DebugView received these counts across two page loads:

| Event                       | Count |
| --------------------------- | ----: |
| `page_view`                 |     2 |
| `navbar_click`              |     2 |
| `project_click`             |     1 |
| `chatbot_toggle`            |     3 |
| `chatbot_message_submit`    |     2 |
| `chatbot_message_blocked`   |     1 |
| `chatbot_response_received` |     1 |
| `contact_submit_success`    |     1 |
| `contact_submit_error`      |     1 |

Counts matched the performed actions; native hash navigation added no page views
in this session. Enhanced measurement also emitted `click` and `scroll`, separately
from custom events. Collection requests targeted `G-WJNGK7ZYQF`. Cross-origin fetch
responses were opaque (status `0` exposed to the harness), so delivery was confirmed
by GA receipt rather than claiming an observable HTTP 204. Captured custom parameter
names matched the contract and excluded contact/chat content fields.

A separate production build without an ID rendered with zero Google tag script
elements. A configured build with Google scripts blocked by a temporary CSP emitted
the script error and kept navigation/chat controls usable, without subsequent
collection requests. The temporary instrumentation and CSP are not shipped.

This validates the PR's local production build, not the deployed GitHub Pages
revision. GA settings/key-event registration were not changed. After merge, repeat
the deployed-domain checks and complete the GA Admin/reporting decisions above
before closing issue #98.
