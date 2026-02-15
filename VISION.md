# DD Violet — The Coordination Plane

> One team. Humans and agents. One backlog.

## What It Is

DD Violet is the coordination layer for engineering teams that deploy AI agents alongside human developers. It provides a unified board where human work and agent work are managed with the same primitives — routing, dependencies, conflict detection, review queues, and velocity tracking.

## The Problem

Today's AI coding tools are solo instruments. One developer, one agent, one task. But real engineering happens in teams: five developers and (increasingly) N agents, all working the same codebase. Nobody is solving the coordination problem:

- Who works on what? (human vs. agent assignment)
- What order? (dependencies across human and agent tasks)
- What conflicts? (two agents touching the same files)
- Who reviews? (agent output needs human eyes)
- What's the throughput? (unified velocity across all workers)

GitHub Projects tracks human work. Devin runs one agent. Nothing unifies the two.

## The Insight

Agents are team members, not tools. They need to be assigned work, have their conflicts managed, have their output reviewed, and have their throughput tracked — just like humans. The missing product is the coordination plane that treats humans and agents as interchangeable workers on a shared board.

## Core Loop

```
Backlog exists → Triage (agent-suitable vs human-required) →
Route to worker (human or agent) → Monitor execution →
Detect conflicts → Route for review → Track velocity →
Retrospect & improve routing
```

## Key Capabilities

### 1. Intelligent Routing
- Auto-classify tasks as agent-dispatchable vs human-required
- Complexity, ambiguity, and isolation scoring
- Load-balanced assignment across available workers (human + agent)
- Escalation paths: agent stuck → human notified → human takes over

### 2. Conflict Management
- File-level conflict detection across concurrent workers
- Automatic serialization when two workers target the same module
- Dependency-aware scheduling: task B waits for task A regardless of worker type
- Branch strategy management (per-task branches, merge ordering)

### 3. Review Pipeline
- Agent output automatically queued for human review
- Reviewer assignment based on code ownership and availability
- Review SLAs and aging alerts
- One-click approve/reject/retry with feedback

### 4. Unified Velocity
- Combined throughput: "47 tasks closed — 12 by humans, 35 by agents"
- Per-worker efficiency metrics (agents: success rate, retry rate; humans: cycle time)
- Team capacity planning: how many agents can we effectively deploy?
- Trend tracking: is adding more agents actually moving the needle?

### 5. Cross-Project Orchestration
- Plans spanning multiple repositories
- Dependency ordering across repos (API change before client update)
- Cross-project conflict detection
- Milestone tracking across the full engineering org

## What DD Violet Is NOT

- **Not a project management tool.** Linear and Jira own the backlog UI. DD Violet owns the coordination of who (human or agent) executes what.
- **Not an agent runner.** DD Red handles execution. DD Violet handles routing and coordination.
- **Not a code review tool.** GitHub PRs handle review mechanics. DD Violet handles review routing and tracking.

## Architecture (Shared Platform)

DD Violet is a focused frontend on the dev-dash platform API. Multi-user access, project members, permissions, and notifications are shared.

```
┌──────────────┐     ┌──────────────────────┐
│  DD Violet    │────▶│   dev-dash server    │
│   (Vercel)   │     │    (Railway API)     │
└──────────────┘     └──────────────────────┘
                              │
              ┌───────────────┼───────────────┐
              ▼               ▼               ▼
        ┌──────────┐   ┌──────────┐   ┌──────────┐
        │  Routing  │   │ Conflict │   │ Review   │
        │  Engine   │   │ Detector │   │ Pipeline │
        └──────────┘   └──────────┘   └──────────┘
              │               │               │
              ▼               ▼               ▼
        ┌──────────┐   ┌──────────┐   ┌──────────┐
        │  Human   │   │  Agent   │   │ Velocity │
        │ Workers  │   │ Workers  │   │ Tracker  │
        └──────────┘   └──────────┘   └──────────┘
```

## Target User

An engineering team (5-20 developers) that has started using AI agents for real work and hit the coordination wall. They need visibility into what agents are doing, confidence that agents aren't stepping on each other, and proof that deploying agents is actually accelerating their throughput.

## Success Metric

Team velocity (tasks closed per sprint) with N agents deployed vs. without. Review queue aging (how fast does agent output get reviewed?).

## Implementation Priorities

1. **Team board** — unified view of all work, colored by worker type (human/agent)
2. **Routing dashboard** — triage backlog into agent-suitable vs human-required
3. **Review inbox** — agent PRs awaiting human review, sorted by age and priority
4. **Velocity charts** — human vs agent throughput over time
5. **Conflict alerts** — real-time warnings when workers target overlapping files
