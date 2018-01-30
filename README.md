## Overview

Create a project skeleton for a SilverStripe 4 Platform project. Sets up an empty theme and nightwatch for testing.

## Installation ##

```
# Checkout the repo
git clone ssh://git@code.platform.silverstripe.com:222/esawyer/ss4-skeleton.git yourproject

# Change directory to your project
cd yourproject

# Run composer
composer install

# This might run automatically, do it again just to be sure
composer run-script post-install-cmd

# install yarn dependencies
yarn

# compile your CSS. This is empty initially
yarn dev

# create a .env file from the template
cp .env.example .env

# edit .env with your database and passwords
echo "change your database and admin passwords in .env"

# run a dev/build
vendor/bin/sake dev/build flush=

# prove that nightwatch works
yarn nightwatch

# replace the remote origin with your own
git remote remove origin
git remote add origin git://git@whatever.com/your/project.git

# maybe uncomment this line and force push to master, like a boss.
# git push --all origin +master
```
