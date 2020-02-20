# Overview

Create a project skeleton for a SilverStripe 4 Platform project.
Sets up an empty theme and cypress for testing.

## How to setup new project by using this skeleton

```
# Checkout the repo
git clone git@github.com:silverstripeltd/project-skeleton.git <yourproject> -o skeleton

# Change directory to your project
cd <yourproject>

# change this readme file with project-skeleton readme
git mv -f .project.skeleton.README.md README.md

# it is good idea to adjust content of `README.md` file now

# Optionally drop all history of this repo
rm -rf .git && git init

# replace the remote origin with your own
git remote remove skeleton
git remote add origin git://git@whatever.com/your/project.git

# Commit and push to master
git commit -m "Init project from Skeleton"
git push -u origin master
```

## Environment

Project teams should run their website consistently,
in order to help each other and avoid confusion by differences in configuration.
SilverStripe Ltd. prefers [Vagrant](https://www.vagrantup.com/).
Read the ["Vagrant" Confluence page](https://silverstripe.atlassian.net/wiki/spaces/DEV/pages/401506576/Vagrant)
for setup and usage details.

#### Windows environments

Because Windows can't handle symlinks, an additional step when transpiling dependencies is needed.
Transpiled dependencies need to be copied from the dist directory to the public resources directory.
This will automatically be done when you run `yarn watch` with the transpiled dependencies being
copied to the default `public\_resources` directory. To change the destination directory, redefine
the `publicResourcesFolder` variable in `webpack.mix.js`.

## Robots.txt

Default robots.txt example file. Remember to update the sitemap location.
