### Question - I'd like to learn more about your views on testing software:


Why do we test our software as engineers?
 - Vulnerabilities: To hint at or check for any backdoors which may expose confidential data or functioning. (eg. prevents costly lawsuits)
 - Stability: To make sure the software doesn't not crash, break, or leak memory in any way during production use. (eg. saves time and money in customer service & troubleshooting)
 - Quality: To establish an objective view where we may see redundant or inefficient areas of code, and to see how they link to a larger environment. 
 - For informing: To inform developers, new or old, of what functioning or outputs are expected from the code, so that they understand what cases to cover. 
 

What best practices are there for testing software?
 - Keep describe testing blocks segmented for easy readability, and related cases within each block.
 - Small and specific: Opt for many small specific tests, rather than one test which covers many cases.
 - Self-contained: Describe all relevant parameters, so that they may altered readily, and so that the inner functioning becomes clearer.
 - Dumb tests: Compare outputs with hard-coded values - avoids reusing production code which may be faulty, also use fixed data rather than random.
 - Use clear parameter naming conventions and test names. eg. "IT SHOULD", actualResult, expectedResult.


Where you have applied those best practices?
 - TDD, Morse Code Translator: Hard-coding expected translations results and designing the functioning in accordance with the tests - allowed for a clear pathway to an MVP and, due to clear test expectations, saved time in production as tests and coding developed symbiotically.
 - End-to-end, Web Calculator: E2E testing using Cypress allowed for many complex mathematical computations to be run in succession with clear outputs which were compared with hard-coded values. As the calc did not use eval(), the computational methodology had to be manually coded; as a result Cypress allowed for the robust and rapid testing of the calc upon even the most minute changes in the computational code. This was necessary, as even those minute changes could drastically change the computed results.

