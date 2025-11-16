# Feature Specification: Nomologi goal-centric automation builder
**Feature Branch**: `001-goal-automation-builder`  
**Created**: 2025-11-16  
**Status**: Draft  
**Input**: User description: "create an application that help users to build goal-centric automation through a guided steps not more than 3 steps. Users can toggle between the simplified and advanced view of the created automation, allowing them to easily keep track of the errors and success executions."

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Create a goal-centric automation in ≤3 steps (Priority: P1)

An everyday, non-technical user wants to automate a recurring task (for example, sending themselves a summary when a condition is met) without needing to learn technical concepts like triggers, actions, or workflows.

They open Nomologi, choose a goal (e.g., "Stay on top of important updates"), and are guided through a maximum of three high-level steps to define:

- The goal they want to achieve
- When the automation should run
- What outcome should happen when it runs

The system translates these inputs into an automation that can be executed and tracked.

**Why this priority**: This is the core value of the product: helping users create useful automations quickly with minimal cognitive load.

**Independent Test**: A new user with no prior experience can start from an empty account and successfully create one working automation by following at most three guided steps.

**Acceptance Scenarios**:

1. **Given** a new user with no automations, **When** they start the "Create automation" flow, **Then** they are guided through at most three steps and can finish with a valid automation.
2. **Given** a user in the middle of the guided flow, **When** they go back or edit a previous answer, **Then** the remaining steps update accordingly without exceeding three total steps.
3. **Given** a user who abandons the flow after at least one step, **When** they return later, **Then** they can resume from where they left off or restart clearly.

---

### User Story 2 - Monitor executions in simplified view (Priority: P1)

A user who has created one or more automations wants to quickly see whether they are working as intended without understanding low-level details.

From a simplified view, they can:

- See a list of their automations
- See high-level status indicators (e.g., "working", "has recent errors", "inactive")
- See counts of recent successful and failed executions

**Why this priority**: Users must be able to trust that automations run correctly and identify problems quickly.

**Independent Test**: A user can open the application and, within a few seconds, tell which automations are healthy and which need attention, without opening any advanced views.

**Acceptance Scenarios**:

1. **Given** a user with multiple automations, **When** they open the simplified view, **Then** each automation shows a clear status and recent success/error counts.
2. **Given** an automation that recently failed, **When** the user opens the simplified view, **Then** the automation is visually marked as having issues.
3. **Given** a healthy automation with recent successful runs, **When** the user opens the simplified view, **Then** they can see that executions are successful without needing detailed logs.

---

### User Story 3 - Inspect details and debug via advanced view (Priority: P2)

A more advanced user or support person needs to diagnose why an automation is not behaving as expected.

They switch from the simplified view into an advanced view for a specific automation, where they can:

- See each step of the automation in more detail
- See a chronological list or timeline of execution attempts
- Inspect error messages or failure reasons for each run

**Why this priority**: Detailed visibility is required to understand failures and refine automations, especially for complex use cases.

**Independent Test**: A user starting from a failing automation in the simplified view can open the advanced view and identify what went wrong in a specific execution.

**Acceptance Scenarios**:

1. **Given** an automation with at least one failed execution, **When** the user opens the advanced view, **Then** they can see which step failed and a human-readable error explanation.
2. **Given** an automation with multiple executions, **When** the user views the execution history, **Then** they can distinguish successful runs from failed runs.
3. **Given** an automation that has been edited, **When** the user returns to the advanced view, **Then** they can see the updated steps and corresponding execution history without confusion.

---

### User Story 4 - Toggle between simplified and advanced views (Priority: P2)

A user wants to move between a quick overview and detailed information for a specific automation without losing context.

**Why this priority**: Smoothly switching modes keeps the mental model intact and supports both casual and power users.

**Independent Test**: From any automation, a user can switch between simplified and advanced views and back again without losing their place.

**Acceptance Scenarios**:

1. **Given** a user viewing an automation in simplified mode, **When** they switch to advanced mode, **Then** they see the same automation with more detail without needing to reselect it.
2. **Given** a user in advanced mode, **When** they switch back to simplified mode, **Then** they return to the same automation’s overview.

---

### User Story 5 - Use Nomologi comfortably on mobile devices (Priority: P2)

A non-technical user wants to create and monitor automations on their phone while away from their computer.

They open Nomologi on a mobile device and can:

- Complete the same ≤3-step guided flow on a small screen using touch input.
- View the simplified list of automations with clear status indicators.
- Open the advanced view for a specific automation to understand recent errors or successes.

**Why this priority**: Many users expect to review and adjust automations on the go; mobile usability increases adoption and trust.

**Independent Test**: From a mobile device, a new user can create an automation via the guided flow and then check its status and recent runs without needing a desktop.

**Acceptance Scenarios**:

1. **Given** a user on a mobile device, **When** they open the guided creation flow, **Then** all steps are readable and usable on a small screen without horizontal scrolling.
2. **Given** a user on a mobile device viewing the simplified list, **When** they scroll through their automations, **Then** status indicators and key information remain legible and tappable.
3. **Given** a user on a mobile device viewing the advanced view, **When** they inspect a failed run, **Then** they can read the error explanation without awkward zooming or truncated text.

---

### Edge Cases

- What happens when a user defines an automation goal that cannot be translated into a valid automation within three steps (e.g., overly broad or ambiguous goals)?
- How does the system handle incomplete guided flows (e.g., user closes the app after step 1 or step 2)?
- What happens if an automation experiences repeated failures (e.g., more than N consecutive failures)?
- How does the system behave when an automation has never been executed (newly created or inactive)?
- How are historical executions handled when an automation is edited (e.g., renamed goal, changed conditions or outcomes)?

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: System MUST provide a guided creation flow that allows users to define a goal-centric automation in no more than three steps from start to finish.
- **FR-002**: System MUST validate user inputs at each step of the guided flow and prevent progression when required information is missing or inconsistent.
- **FR-003**: System MUST save in-progress guided flows so that users can resume or restart them without data corruption.
- **FR-004**: System MUST store each created automation’s configuration, including its goal description, conditions for execution, and expected outcomes.
- **FR-005**: System MUST provide a simplified view listing all automations, each with a clear status indicator (e.g., healthy, has errors, inactive) and recent execution summary (success and error counts).
- **FR-006**: System MUST allow users to toggle between a simplified view and an advanced view for any individual automation without losing context about which automation is selected.
- **FR-007**: System MUST record each execution attempt of an automation, including timestamp, outcome (success or failure), and a human-readable summary of the result.
- **FR-008**: System MUST display, in the advanced view, a detailed history of execution attempts for an automation, including which step failed (if any) and why.
- **FR-009**: System MUST allow users to identify automations with recent failures directly from the simplified view and navigate to a more detailed view to investigate.
- **FR-010**: System MUST handle automations that have never executed by clearly indicating their status and lack of history.
- **FR-011**: System MUST ensure that the 3-step guided flow, simplified view, and advanced view are usable on mobile devices (e.g., small screens and touch input) without loss of core functionality.

### Key Entities *(include if feature involves data)*

- **User**: Person who creates and manages automations. Key attributes: identity, preferences related to notifications and display (e.g., default view mode), and ownership of automations.
- **Automation**: A goal-centric definition of when something should happen and what outcome should occur. Key attributes: goal description, creation date, current status (active/inactive), configuration of steps/conditions/outcomes, associated user.
- **Guided Flow Session**: A temporary representation of the user’s progress through the ≤3-step creation process. Key attributes: current step, collected answers, completion state.
- **Execution Run**: A record of a single attempt to run an automation. Key attributes: associated automation, timestamp, outcome (success/failure), summary, error message or reason (if failed).

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: At least 80% of new users who start the guided flow can successfully create and activate an automation within three steps without assistance.
- **SC-002**: Users can determine the health of their automations (working vs. has errors) from the simplified view in under 10 seconds in usability testing.
- **SC-003**: For automations with failures, at least 90% of users in a usability test can locate a specific failed run and understand the reason for failure using the advanced view.
- **SC-004**: Support tickets related to “automation not working but I don’t know why” decrease by at least 30% after this feature is adopted by existing users.
