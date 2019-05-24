# Overview

Create a project skeleton for a SilverStripe 4 Platform project. 
Sets up an empty theme and nightwatch for testing.

## How to setup new project by using this skeleton

```
# Checkout the repo
git clone git@github.com:silverstripeltd/project-skeleton.git <yourproject> -o skeleton

# Change directory to your project
cd <yourproject>

# replace the remote origin with your own
git remote remove skeleton
git remote add origin git://git@whatever.com/your/project.git

# it is good idea to adjust content of `.project.skeleton.README.md` file now

# change this readme file with project-skeleton readme and commit
git mv -f .project.skeleton.README.md README.md && git commit -m "Init project from Skeleton"

# push to master
git push origin master
```

## Environment

Project teams should run their website consistently,
in order to help each other and avoid confusion by differences in configuration.
SilverStripe Ltd. prefers [Vagrant](https://www.vagrantup.com/).
Read the ["Vagrant" Confluence page](https://silverstripe.atlassian.net/wiki/spaces/DEV/pages/401506576/Vagrant)
for setup and usage details.

## Robots.txt

Default robots.txt example file. Remember to update the sitemap location.
