# Research: Nomologi goal-centric automation builder

## Decisions

### Stack and architecture

- **Decision**: Use Next.js + Tailwind CSS + shadcn/ui for the frontend, Node.js and FastAPI for backend services, MongoDB as primary database (managed on DigitalOcean), Redis for caching/session state, and DigitalOcean for hosting.
- **Rationale**: Aligns with user preference for these technologies; supports a modern, responsive UI and a flexible backend that can evolve to handle specialized workloads while minimizing operations overhead via managed MongoDB.
- **Alternatives considered**:
  - Single backend stack (only Node.js or only FastAPI) – simpler but less flexible for future specialized services.
  - Relational database (e.g., PostgreSQL) – more rigid schema; MongoDB aligns better with evolving automation definitions and execution logs.

### Application structure

- **Decision**: Split repository into `frontend/` (Next.js) and `backend/` (with `backend/node` and `backend/fastapi`).
- **Rationale**: Clarifies ownership and boundaries between UI and services, supports independent testing and deployment units.
- **Alternatives considered**:
  - Single monolithic backend folder – slightly simpler, but would blur responsibilities between Node.js and FastAPI services.

## Open Questions / NEEDS CLARIFICATION

1. **Performance and reliability details**
   - **Decision so far**: Aim for at least 99.5% availability for core automation flows, with response times around <500ms p95 for core views under normal load.
   - **Remaining Questions**:
     - Do we need stricter latency targets for any specific endpoints (e.g., toggling views, loading execution history)?

2. **Observability details**
   - **Decision so far**: Use simple metrics and structured logging (sufficient to debug failed execution runs) without a complex external observability stack initially.
   - **Remaining Questions**:
     - Which specific metrics and log fields are mandatory for the first release (e.g., per-automation error rate, execution duration)?
