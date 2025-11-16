# Data Model: Nomologi goal-centric automation builder

## Entities

### User
- **Description**: Non-technical end-user who creates and manages automations.
- **Key fields**:
  - `id`
  - `email` / login identifier
  - `passwordHash` (or reference to external auth provider)
  - `displayName`
  - `preferences` (e.g., default view mode, notification preferences)
  - `createdAt`

### Connection
- **Description**: Stored credentials or connection details for external services (e.g., OAuth connections) that automations may depend on.
- **Key fields**:
  - `id`
  - `userId`
  - `provider` (e.g., name of external service)
  - `accessToken` (or equivalent credential material)
  - `refreshToken` (if applicable)
  - `expiresAt`

### Automation
- **Description**: Goal-centric definition of when something should happen and what outcome should occur.
- **Key fields**:
  - `id`
  - `userId`
  - `goal` (human-readable description)
  - `status` (e.g., active, inactive)
  - `createdAt`, `updatedAt`
  - `templateId` (optional reference to a reusable template, if used)
  - `configuration` (conditions and outcomes; structure refined during implementation)

### AutomationTemplate
- **Description**: Optional reusable template that pre-defines a set of steps or configuration for an automation.
- **Key fields**:
  - `id`
  - `name`
  - `description`
  - `industry` or category (optional)
  - `steps` (template steps/configuration; structure refined during implementation)
  - `createdAt`

### AutomationStep
- **Description**: A single step within an Automation, for example a condition or action.
- **Key fields**:
  - `id`
  - `automationId`
  - `type` (e.g., trigger, condition, action)
  - `config` (step-specific configuration; structure refined during implementation)
  - `order` (position within the automation)

### GuidedFlowSession
- **Description**: Temporary representation of user’s progress through the ≤3-step creation process.
- **Key fields**:
  - `id`
  - `userId`
  - `currentStep` (1–3)
  - `answers` (collected responses per step)
  - `state` (e.g., in-progress, completed, abandoned)
  - `createdAt`, `updatedAt`

### ExecutionRun
- **Description**: Record of a single attempt to run an automation.
- **Key fields**:
  - `id`
  - `automationId`
  - `stepId` (optional reference to the step being executed, if applicable)
  - `status` (e.g., pending, running, success, failure)
  - `input` (payload used by the run; structure refined during implementation)
  - `output` (resulting payload; structure refined during implementation)
  - `summary` (short human-readable result)
  - `error` (human-readable explanation, present only on failure)
  - `startedAt`
  - `finishedAt`

### ExecutionLog
- **Description**: Log entry associated with an automation or specific run, used to track events and support diagnostics.
- **Key fields**:
  - `id`
  - `automationId`
  - `runId` (optional reference to an `ExecutionRun`)
  - `eventType` (e.g., created, started, step_failed, completed)
  - `description` (human-readable detail)
  - `timestamp`

## Relationships

- A **User** has many **Automations**.
- A **User** may have multiple **GuidedFlowSessions**, but typically one active session per automation being created.
- A **User** may have multiple **Connections** to external services.
- An **AutomationTemplate** may be referenced by many **Automations**.
- An **Automation** has many **AutomationSteps**.
- An **Automation** has many **ExecutionRuns**.
- An **ExecutionRun** may have many **ExecutionLogs**; **ExecutionLogs** can also exist at the automation level.
