# Independent review prompt

```text
Review the current uncommitted changes as an independent senior reviewer.

Do not modify files during the first pass.

Review against:

1. the assigned task and acceptance criteria;
2. all applicable AGENTS.md instructions;
3. the technical blueprint and architecture decisions;
4. TypeScript and framework correctness;
5. Next.js versus Quarto ownership;
6. bilingual behavior;
7. accessibility;
8. security and confidentiality;
9. maintainability;
10. tests and validation evidence.

Classify each finding as Critical, High, Medium or Low.

For each finding provide:
- file and location;
- exact problem;
- consequence;
- minimal correction;
- whether it blocks acceptance.

Also identify:
- scope creep;
- unverified claims;
- commands claimed without evidence;
- unnecessary dependencies;
- missing tests.

Conclude with one verdict:
- Accept
- Accept after minor corrections
- Reject until blocking issues are fixed
```
