# Preinstalled modules

These are modules that are included by default in the project

## Debug bar
_[Repo](https://github.com/lekoala/silverstripe-debugbar)_

SilverStripe Debug Bar is a wrapper for PHP DebugBar which integrates with SilverStripe to provide more useful
information about your projects. The Debug Bar can help you to easily identify performance issues, analyse environment
settings and discover which parts of your code are being used.

For example, if your application is running the same database query multiple times in a loop, or a certain controller
action is taking a long time to run, Debug Bar will highlight these bottlenecks so you can take steps to improve your
overall site performance.

Can be disabled when not being used via the `DEBUGBAR_DISABLE` environment variable.

## BetterNavigator
_[Repo](https://github.com/jonom/silverstripe-betternavigator)_

Better navigator is a handy module which provides dev tools for developers but is also useful for Content authors for
quickly navigating to the page they want to edit.

## Shared draft content
_[Repo](https://github.com/silverstripe/silverstripe-sharedraftcontent)_

This module adds a 'Share draft' action menu to the CMS. This enables Content Authors to generate tokenised links to
draft pages. Content authors can share these links with anyone, allowing non-CMS user to view draft page content. Each
preview link is valid for 30 days.

## MFA + TOTP authenticator
_[MFA](https://github.com/silverstripe/silverstripe-mfa)_
_[TOTP](https://github.com/silverstripe/silverstripe-totp-authenticator)_

Multi-Factor Authentication using Time-based One Time Passwords (EG: An app on your phone).

These modules also provide you with a (new) default login/reset-password interface.

## Silverstripe Auditor
_[Repo](https://github.com/silverstripe/silverstripe-auditor)_

Auditor module installs a series of extension hooks into the Framework to monitor activity of authenticated users. Audit
trail is written into LOG_AUTH syslog facility through Monolog, and includes:

* Login attempts (failed and successful)
* Logouts
* Page manipulations that may potentially affect the live site
* Security-related changes such as Members being added to groups or permission changes.

## Silverstripe Security Checker
_[Repo](https://github.com/bringyourownideas/silverstripe-composer-security-checker)_

Adds a task which runs a check if any of the dependencies has known security vulnerabilities.

## Roave Security Advisories
_[Repo](https://github.com/Roave/SecurityAdvisories)_

This package ensures that your application doesn't have installed dependencies with known security vulnerabilities.

## Silverstripe Composer Update Checker / Maintenance
_[Repo](https://github.com/bringyourownideas/silverstripe-composer-update-checker)_

Checks if any of your Composer dependencies needs to be updated, and tracks the available and latest versions that can
be updated to.

Provides a model admin where you can view your current dependencies, their versions, and what updates are available.

## Environment check
_[Repo](https://github.com/silverstripe/silverstripe-environmentcheck)_

This module adds an API for running environment checks to your API.

* `health/check` - A public URL that performs a quick check that this environment is functioning. This could be tied to
a load balancer, for example.
* `dev/check` - An admin-only URL that performs a more comprehensive set of checks. This could be tied to a deployment
system, for example.
* `dev/check/<suite>` - Check a specific suite (admin only)

## Raygun
_[Repo](https://github.com/silverstripe/silverstripe-raygun)_

This is a simple module that binds Raygun to the error & exception handler of SilverStripe.

## Crontask
_[Repo](https://github.com/silverstripe/silverstripe-crontask)_

Gives developers an ability to configure cron-like tasks through the code.

## DynamoDB
_[Repo](https://github.com/silverstripe/silverstripe-dynamodb)_

This module enables storing SilverStripe sessions in DynamoDB.
