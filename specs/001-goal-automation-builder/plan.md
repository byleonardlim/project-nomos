# Implementation Plan: Nomologi goal-centric automation builder

**Branch**: `001-goal-automation-builder` | **Date**: 2025-11-16 | **Spec**: `specs/001-goal-automation-builder/spec.md`
**Input**: Feature specification from `/specs/001-goal-automation-builder/spec.md`

**Note**: This plan describes how to implement the Nomologi goal-centric automation builder for non-technical end-users, based on the agreed stack.

## Summary

Nomologi will provide a goal-centric automation builder that lets non-technical users create automations in at most three guided steps, then monitor their executions through a simplified overview and an advanced diagnostic view.

Implementation will use:

- A **Next.js** web frontend styled with **Tailwind CSS** and **shadcn/ui** for a clear, low-friction guided creation flow and dual (simplified/advanced) automation views on desktop and mobile web.
- A **mobile frontend** built with **React Native** and **Expo** that exposes the same 3-step flow, simplified overview, and advanced execution details in a mobile-optimized experience.
- A **backend layer** composed of Node.js services and **FastAPI** for API endpoints and internal services, fronted as a unified HTTP API for both web and mobile clients.
- **MongoDB** as the primary data store for users, automations, guided flow sessions, and execution runs, with **Redis** used for caching and short-lived flow/session state where beneficial.
- **DigitalOcean** for hosting application components and managed storage (Droplets / managed services), with exact product choices to be finalized.

The first milestone will focus on a thin vertical slice for web and mobile: creating a single automation via the 3-step flow, persisting it in MongoDB, and exposing simplified/advanced status views backed by execution logs.

## Technical Context

<!--
  ACTION REQUIRED: Replace the content in this section with the technical details
  for the project. The structure here is presented in advisory capacity to guide
  the iteration process.
-->

**Language/Version**: TypeScript (Next.js web frontend, React Native/Expo mobile app, Node.js services), Python 3.x (FastAPI services)  
**Primary Dependencies**: Next.js, React, Tailwind CSS, shadcn/ui, React Native, Expo, Node.js HTTP/Express-like layer, FastAPI, Redis client, MongoDB driver/ODM  
**Storage**: MongoDB as primary application database using a managed MongoDB offering on DigitalOcean; Redis for caching and transient session/flow state.  
**Testing**: Jest/React Testing Library for frontend; Jest or equivalent for Node.js services; pytest for FastAPI services; Playwright for end-to-end testing of core user flows.  
**Target Platform**: DigitalOcean (Linux-based compute: Droplets or App Platform) exposed over HTTPS for APIs; iOS and Android mobile platforms via Expo for the mobile app.  
**Project Type**: Web + mobile application with separate web frontend, mobile frontend, and backend services  
**Performance Goals**: Initial target of supporting low-to-mid thousands of monthly active users; response times suitable for interactive UI (e.g., <500ms for core automation views under normal load).  
**Constraints**: Prioritize clarity and reliability for non-technical users over extreme throughput; basic observability (structured logs and simple metrics) sufficient to debug execution issues; target at least 99.5% availability for core automation flows, with reasonable cost on DigitalOcean.  
**Scale/Scope**: Initial scope is a single tenant product with support for a modest number of automations per user (e.g., tens to low hundreds) and execution history sufficient for recent diagnostics.

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

The current constitution file is a placeholder without concrete principles or gates defined. For this feature we adopt the following provisional gates, aligned with common simplicity and test-first principles:

- **Gate 1 – Simplicity first**: Prefer a single, clear web application structure (frontend + backend) over unnecessary extra services.
- **Gate 2 – Testability**: All core flows (3-step automation creation, simplified view, advanced view) must be covered by automated tests at least at unit and integration level.
- **Gate 3 – Observability for debugging**: Execution runs must be traceable end-to-end so that failures in automations can be diagnosed from logs/metrics.

At this stage, the proposed design **passes** these provisional gates, with the following notes:

- Having both Node.js and FastAPI in the backend increases complexity but is acceptable if responsibilities are clearly split (e.g., FastAPI for internal services or specialized workloads) and contracts are well documented.  
- Observability/tooling choices (logging format, tracing, dashboards) remain **NEEDS CLARIFICATION** and must be specified before implementation begins.

## Project Structure

### Documentation (this feature)

```text
specs/001-goal-automation-builder/
├── plan.md              # This file (/speckit.plan command output)
├── research.md          # Phase 0 output (/speckit.plan command)
├── data-model.md        # Phase 1 output (/speckit.plan command)
├── quickstart.md        # Phase 1 output (/speckit.plan command)
├── contracts/           # Phase 1 output (/speckit.plan command)
└── tasks.md             # Phase 2 output (/speckit.tasks command - NOT created by /speckit.plan)
```

### Source Code (repository root)
```text
./
├── frontend/                 # Next.js web app (Nomologi web frontend)
│   ├── src/
│   │   ├── app/ or pages/    # Routes
│   │   ├── components/       # Shared UI (incl. shadcn/ui)
│   │   └── features/         # Feature modules (automation builder, etc.)
│   ├── public/
│   ├── tests/
│   │   ├── unit/
│   │   └── e2e/              # Playwright
│   ├── package.json
│   └── Dockerfile            # Web image (for DO App Platform / Droplet)
│
├── mobile/                   # React Native + Expo app
│   ├── app/ or src/          # Mobile navigation & screens
│   ├── components/           # Shared mobile UI components
│   ├── features/             # Mobile flows (3-step builder, simplified/advanced views)
│   ├── tests/
│   ├── app.json / expo.json  # Expo config
│   └── package.json
│
├── backend/
│   ├── node-api/             # Primary API used by web + mobile
│   │   ├── src/
│   │   │   ├── api/          # HTTP routes/controllers
│   │   │   ├── services/     # Business logic (automations, executions)
│   │   │   ├── models/       # Data access (MongoDB/Redis)
│   │   │   └── middleware/   # Request middleware (auth, logging, etc.)
│   │   ├── tests/
│   │   │   ├── unit/
│   │   │   └── integration/
│   │   ├── package.json
│   │   └── Dockerfile        # Node API image
│   │
│   └── fastapi-services/     # Specialized Python services (optional in MVP)
│       ├── src/
│       │   ├── api/
│       │   └── services/
│       ├── tests/
│       ├── pyproject.toml or requirements.txt
│       └── Dockerfile        # FastAPI image
│
├── shared/                   # Cross-cutting libraries (kept small/intentional)
│   ├── ts/                   # Shared TS types / client SDKs
│   └── python/               # Shared Python utilities (if needed)
│
├── infra/                    # Deployment & ops (DigitalOcean oriented)
│   ├── docker-compose.dev.yml
│   ├── app-platform/ or k8s/ # App Platform specs or Kubernetes manifests
│   ├── env/                  # Example env files (no secrets)
│   └── scripts/              # CI/CD helpers (build, deploy, migrations)
│
├── .github/workflows/        # CI pipelines for build/test/deploy per service
├── package.json or pnpm-workspace.yaml
└── README.md
```

**Structure Decision**: Use a **mono-repo** with clearly separated `frontend/`, `mobile/`, and `backend/` projects, each independently containerized and deployable. The `infra/` directory holds DigitalOcean-focused deployment definitions so that web, mobile backend APIs, and any additional services can be built and deployed on separate lifecycles while sharing a single source repository.

## Complexity Tracking

> **Fill ONLY if Constitution Check has violations that must be justified**

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| Dual backend stacks (Node.js + FastAPI) | Allows gradual adoption of Python/FastAPI for specialized services (e.g., ML, heavy processing) while keeping Node.js for core web/API responsibilities | Choosing only one stack would either limit future flexibility (Node.js only) or increase initial cost to retool frontend-adjacent APIs and developer experience (FastAPI only) |
