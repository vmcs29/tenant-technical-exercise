1. How would you integrate this test suite into a CI/CD pipeline (e.g., GitHub Actions,
Jenkins)?
 - Basically to integrate this into a CI/CD pipeline, we need to configure the playwright.yml depeding into the company neccesites. (Concurrence, timing, environments, OS, browsers, etc.)
2. What would be your approach to scaling this framework for a large application?
- There are few areas: 
    - First, I'll keep using Page Object since it's the easiest way to scalate the project as the app grows(more pages, functionalites, or even changes can be contained within the same page and just to redirection these changes into our test files)
    - Something that I've done, it's to implement BDD framework, it is indeed an extra layer, but as the app grows, with this approach , allows more people to get involved in any recommendations , suggestions or just give everyone visibility of what's currently happening in our test executions(with the support of the reporting and recurring executions into a pipeline)
    - If there are more environments available, scale it as using different .env files to specific execution. (Currently it's running in the same environment but can be scale).
3. What quality metrics would you track and report on as a QA Leader?
- There are some metrics I consider important to keep an eye on :
    - Automation contribution: Increasing the efficiency of the team could be a good way to start.
    - Test Coverage Percentage.
    - Flaky test ratio
    - Defect detection rate.
    - Customer reported issues.
    - CI/CD success rate.
