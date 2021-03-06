cheatsheets
===========
Never forget or confuse another UNIX/Linux command with cheatsheets. This 
repository is forked from <https://github.com/cheat/cheatsheets>. You may refer
to the original repo instead of my customized cheatsheets.

### Access cheat from your browser
Visit <https://pranabdas.github.io/cheatsheets/>

### Install cheat
There are several ways to install [cheat](https://github.com/cheat/cheat)
including via python pip or Homebrew:

```sh
pip3 install cheat
brew install cheat
```

Then look for cheat directories and put the cheatsheets there: 
```sh
cheat -d
```


### Format ###
Cheatsheets are plain-text files that begin with an optional "front matter"
header in YAML format. The header may be used to assign "tags" to a sheet, and
to specify the sheet's syntax (`bash`, `python`, `go`, etc).

When possible, cheatsheets should conform to this format:

```sh
---
syntax: bash
tags: [ vcs, development ]
---
# To stage all changes in the current directory:
git add --all

# To commit staged changes:
git commit -m <message>
```

As a guideline, it is preferred to use [docopt][] syntax when specifying
parameter placeholders. In edge-cases where that syntax may cause confusion, it
is permissible to use placeholder values (`foo.txt`, `example.com`, etc.) as necessary.
