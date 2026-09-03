# ChatGPT Buddy Android

> **Historical, non-deployable experiment:** direct provider access is intentionally disabled.

This AndroidJS proof of concept explored a small mobile conversation interface and local display history. Its original architecture called an external AI provider directly from packaged client code.

A packaged mobile or web client cannot keep a provider credential confidential. This repository therefore contains no credential, no credential-shaped sample, no prompt to insert a real key, and no functioning direct-provider request. The input is deliberately disabled and no replacement server relay is included.

The project is preserved as development history. Current API, dependency, build, and deployment compatibility is not claimed.

## Build history

The original project used AndroidJS:

```bash
androidjs build
```

That command is retained only as historical context and has not been revalidated for current use.
