# API Contracts: Nomologi goal-centric automation builder

> NOTE: High-level, technology-agnostic contracts; concrete implementation will be split between Node.js and FastAPI services.

## Automations

### Create automation via guided flow
- **Endpoint**: `POST /api/automations/flows`
- **Purpose**: Start a new 3-step guided flow for creating a goal-centric automation.

### Update guided flow step
- **Endpoint**: `PATCH /api/automations/flows/{flowId}`
- **Purpose**: Save answers for the current step, move forward or backward within the 3-step flow.

### Complete guided flow
- **Endpoint**: `POST /api/automations/flows/{flowId}/complete`
- **Purpose**: Finalize flow, create an `Automation` and mark the flow as completed.

### List automations (simplified view)
- **Endpoint**: `GET /api/automations`
- **Purpose**: Return list of automations for current user, including high-level status and summary of recent executions.

### Get automation details (advanced view)
- **Endpoint**: `GET /api/automations/{automationId}`
- **Purpose**: Return detailed configuration and full execution summary for a specific automation.

### List execution runs
- **Endpoint**: `GET /api/automations/{automationId}/runs`
- **Purpose**: Return chronological list of execution runs (successes and failures) for an automation.
