# Event-driven recovery strategies

When events are processed asynchronously, failures and retries can lead to duplicates or gaps. Here are patterns for replay, dead-letter handling, and safe recovery.

## Replay and at-least-once

Many event systems deliver at least once. Your consumer should be idempotent (e.g. using keys or natural keys in the domain) so that replaying the same event does not double-apply effects.

## Dead-letter queues (DLQ)

When a message fails after N retries, move it to a DLQ instead of dropping it. This gives you:

- A clear list of messages that need manual or batch recovery
- No silent data loss
- Ability to fix bugs, reprocess, or discard with audit

## Safe recovery

1. **Inspect** — Understand why messages landed in the DLQ (bad payload, dependency down, bug).
2. **Fix** — Deploy a fix or fix data if needed.
3. **Replay** — Re-publish or re-queue messages. Prefer reusing the same event id so consumers can deduplicate.
4. **Monitor** — Ensure replay doesn’t overwhelm downstream; use rate limiting or batching if necessary.

## Outcome

With idempotent consumers and a clear DLQ strategy, you can recover from failures without corrupting state or losing events.

*(Placeholder post — expand with your own architecture and tooling.)*
