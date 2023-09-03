# Contributing to **`vscode-nastran`**

Welcome, and thank you for your interest in contributing to `vscode-nastran`!

There are many ways in which you can contribute, beyond writing code. The goal of this document is to provide a high-level overview of how you can get involved and support the further development of this vscode extension.

## Asking Questions

Have a question? Rather than opening an issue, please ask away on the `vscode-nastran` discord [server](https://discord.gg/vVwDVUF3w5).

## Providing Feedback

Your comments and feedback are welcome! Please drop us a question and rate the extension [here](https://marketplace.visualstudio.com/items?itemName=mbakke.vscode-nastran&ssr=false#review-details).

## Reporting Issues

Have you identified a reproducible problem in `vscode-nastran`? Have a feature request? We want to hear about it! Here's how you can report your issue as effectively as possible.

### Look For an Existing Issue

Before you create a new issue, please do a search in [open issues](https://github.com/dmarc3/vscode-nastran/issues) to see if the issue or feature request has already been filed.

If you find your issue already exists, make relevant comments and add your [reaction](https://github.com/blog/2119-add-reactions-to-pull-requests-issues-and-comments).

* 👍 - upvote
* 👎 - downvote

If you cannot find an existing issue that describes your bug or feature, create a new issue using the guidelines below.

### Writing Good Bug Reports and Feature Requests

* File a single issue per problem and feature request. Do not enumerate multiple bugs or feature requests in the same issue.
* Do not add your issue as a comment to an existing issue unless it's for the identical input. Many issues look similar, but have different causes.
* The more information you can provide, the more likely someone will be successful at reproducing the issue and finding a fix.

Please include the following with each issue:

* Version of VS Code
* Your operating system
* Reproducible steps (1... 2... 3...) that cause the issue
* What you expected to see, versus what you actually saw
* Images, animations, or a link to a video showing the issue occurring, if appropriate
* A code snippet that demonstrates the issue or a link to a code repository the developers can easily pull down to recreate the issue locally

### Final Checklist

Please remember to do the following:

* [ ] Search the issue repository to ensure your report is a new issue
* [ ] Recreate the issue after disabling all extensions
* [ ] Simplify your code around the issue to better isolate the problem

Don't feel bad if the developers can't reproduce the issue right away. They will simply ask for more information!

## Contributing Fixes

If you are interested in writing code to fix issues, please follow the procedure outlined below.

1. Confirm the issue you intend to fix has already been submitted per [Reporting Issues](#reporting-issues)
2. [Fork](https://docs.github.com/en/get-started/quickstart/fork-a-repo) the project and create a new branch from the `dev` branch.
3. Add your changes to address the issue of interest
    * Update or create applicable [unittests](https://github.com/dmarc3/vscode-nastran/tree/main/tests)
    * Update the [changelog] and [contributors] documents, as appropriate. For the [changelog], only _notable_ changes should be added following the _[Keep a Changelog][keepachangelog]_ format.
4. Create a [Pull Request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork) back into the `dev` branch of the source repository. Please link the PR back to the original issue.

Please reach out on the discord [server](https://discord.gg/vVwDVUF3w5) if you are unsure of the process or would like to discuss any details on implementation.

## Thank You

Your contributions to open source, large or small, make great projects like this possible. Thank you for taking the time to contribute.

## Attribution

This _Contributing to `vscode-nastran`_ document is adapted from VS Code's _[Contributing to VS Code](https://github.com/Microsoft/vscode/blob/master/CONTRIBUTING.md)_.

[changelog]: https://github.com/dmarc3/vscode-nastran/blob/main/CHANGELOG.md
[contributors]: https://github.com/dmarc3/vscode-nastran/blob/main/CONTRIBUTORS.md
[keepachangelog]: https://keepachangelog.com/en/1.0.0/
