# Idempotency & duplicate transactions in fintech

When processing payments or updating balances, duplicate requests can lead to double charges or incorrect state. This post outlines how to design APIs and workflows to avoid that.

## Why idempotency matters

Clients retry. Networks fail. Users double-click. If your API is not idempotent, a retry can create a second transaction. In fintech, that means real money and real disputes.

## Key ideas

1. **Idempotency keys** — The client sends a unique key (e.g. UUID) with each logical operation. The server stores the key and the result of the first request; later requests with the same key return the same result without re-executing.
2. **Idempotent handlers** — Your handler checks “have I already processed this key?” before doing any side effect. If yes, return the stored response.
3. **Scoped correctly** — One key per logical operation (e.g. one “charge” or one “transfer”), not per HTTP request. The same key can be sent on retries.

## Implementation sketch

- Store idempotency keys in a fast store (e.g. Redis or DB) with TTL.
- Key format: e.g. `idem_<clientId>_<operationId>`.
- On first request: run the operation, store result under the key, return response.
- On duplicate: return stored response and 200 (or 201), do not run again.

## Outcome

You get safe retries, predictable behavior, and a clear audit trail. Combined with idempotent consumers in event-driven systems, you can keep financial state consistent even under failure and retry.

*(Placeholder post — expand with your own examples and code.)*
