# Branch cleanup Action

 > GitHub action delete branchs after pull-request is merged

GitHub action using [@jessfraz](https://github.com/jessfraz/branch-cleanup-action/) implementation described in her [blog post](https://blog.jessfraz.com/post/the-life-of-a-github-action/).

## Screenshot

![Branch Cleanup in action](images/pr-image.png)

## File Location

- [delete-merged-branch-config.yml](../.github/delete-merged-branch-config.yml) - under __.github__ folder

## Setup

Just change the branches that you want to perform the action and move the file [delete-merged-branch-config.yml](../.github/delete-merged-branch-config.yml) into __.github/workspace__.

> Notice that the branch deleted will be the one that you open the pull request, and not the ones you specify bellow. For exemple: __feature/label__ to __develop__, the branch deleted will be __feature/label__ and not __develop__.

```yaml
branches:
      - master
      - develop*
```

## Security

You might be thinking if it will delete some branch that not meant to be deleted.

* Deleted branches can be recovered
* You can protect your branches 
