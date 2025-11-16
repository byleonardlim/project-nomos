# Quickstart: Nomologi goal-centric automation builder

1. **Set up infrastructure (DigitalOcean)**
   - Choose MongoDB hosting strategy (managed vs. self-managed on Droplets).
   - Provision compute for frontend (Next.js) and backend (Node.js + FastAPI).

2. **Bootstrap frontend (Next.js + Tailwind + shadcn/ui)**
   - Create the base Next.js app.
   - Add Tailwind CSS and shadcn/ui.
   - Implement the 3-step guided flow and simplified/advanced views as separate feature modules.

3. **Bootstrap backend services**
   - Set up Node.js service exposing the API contracts for automations and execution runs.
   - Set up FastAPI service for any specialized processing (if needed for this phase).
   - Connect services to MongoDB and Redis.

4. **Implement core vertical slice**
   - Persist new automations created via the guided flow.
   - Implement execution run recording.
   - Connect frontend views to backend API endpoints.

5. **Add testing and diagnostics**
   - Add unit and integration tests for guided flow, simplified view, and advanced view.
   - Choose and set up an end-to-end testing framework.
   - Define logging and basic observability to support debugging of failed execution runs.
