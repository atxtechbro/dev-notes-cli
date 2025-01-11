# Dev Notes CLI

Cross-platform developer note-taking utility.

## Configuration

The following environment variables must be set before using the tool:

### EDITOR

Set your preferred text editor:

- Windows: `set EDITOR=notepad`
- Unix/Linux/Mac: `export EDITOR=vim`

### NOTES_DIR

Set the directory where notes will be stored:

- Windows: `set NOTES_DIR=C:\path\to\notes`
- Unix/Linux/Mac: `export NOTES_DIR=/path/to/notes`

### Examples

```shell
note "pattern" "Auth rate limiting cascade -> timeouts. Check circuit breakers"
```

```shell
note "quick-tip" "[1min] docker system prune -af --volumes"
```

```shell
note "insight" "Auth factory pattern could solve payment service design"
```
